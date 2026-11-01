import Image from "next/image";
import { profile, socials } from "@/data/content";
import { Button } from "@/components/ui/Button";
import { GithubIcon, LinkedinIcon, MailIcon } from "@/components/ui/Icons";

const socialIcons = {
  GitHub: <GithubIcon />,
  LinkedIn: <LinkedinIcon />,
  Email: <MailIcon />,
} as const;

export function ProfileCard() {
  return (
    <aside
      aria-label="Profile"
      className="w-full max-w-sm rounded-card border border-line bg-bg/70 p-4 backdrop-blur"
    >
      <Image
        src="/images/portrait.jpeg"
        alt={`Portrait of ${profile.name}`}
        width={640}
        height={800}
        priority
        sizes="(min-width: 1024px) 360px, 90vw"
        className="aspect-[4/3] w-full rounded-2xl object-cover object-top"
      />
      <div className="mt-5 text-center">
        <a href={`mailto:${profile.email}`} className="text-sm hover:text-accent-soft">
          {profile.email}
        </a>
        <p className="mt-1 text-xs text-muted">Based in {profile.location}</p>
        <ul className="mt-4 flex justify-center gap-3">
          {socials.map((s) => (
            <li key={s.label}>
              <a
                href={s.href}
                aria-label={s.label}
                className="flex h-9 w-9 items-center justify-center rounded-full bg-surface-2 text-muted transition hover:bg-ink hover:text-bg"
                {...(s.href.startsWith("http") && {
                  target: "_blank",
                  rel: "noopener noreferrer",
                })}
              >
                {socialIcons[s.label]}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <Button href="/#contact" variant="outline" arrow className="mt-5 w-full justify-between">
        Get in touch
      </Button>
    </aside>
  );
}
