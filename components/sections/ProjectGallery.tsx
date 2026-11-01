import Image from "next/image";
import type { Screenshot } from "@/data/projects";
import { Reveal } from "@/components/ui/Reveal";

function Shot({ shot, index }: { shot: Screenshot; index: number }) {
  const phone = shot.device === "phone";
  return (
    <Reveal index={index}>
      <figure className="flex flex-col gap-3">
        {/* Tall full-page captures are cropped to the top of the page. */}
        <div
          className={
            phone
              ? "aspect-[9/19] overflow-hidden rounded-[2rem] border border-line bg-surface-2"
              : "aspect-[16/10] overflow-hidden rounded-card border border-line bg-surface-2"
          }
        >
          <Image
            src={shot.src}
            alt={shot.alt}
            width={shot.width}
            height={shot.height}
            sizes={phone ? "(min-width: 768px) 280px, 60vw" : "(min-width: 1024px) 560px, 92vw"}
            className="h-full w-full object-cover object-top"
          />
        </div>
        <figcaption className="text-sm text-muted">{shot.caption}</figcaption>
      </figure>
    </Reveal>
  );
}

export function ProjectGallery({ screens }: { screens: readonly Screenshot[] }) {
  const desktop = screens.filter((s) => s.device === "desktop");
  const phone = screens.filter((s) => s.device === "phone");

  return (
    <section aria-labelledby="screens-heading" className="mt-6 flex flex-col gap-10">
      <h2 id="screens-heading" className="font-display text-3xl font-light tracking-tight">
        Screens
      </h2>
      {desktop.length > 0 && (
        <ul className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {desktop.map((s, i) => (
            <li key={s.src}>
              <Shot shot={s} index={i % 2} />
            </li>
          ))}
        </ul>
      )}
      {phone.length > 0 && (
        <ul className="grid grid-cols-1 gap-6 sm:grid-cols-3">
          {phone.map((s, i) => (
            <li key={s.src}>
              <Shot shot={s} index={i % 3} />
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
