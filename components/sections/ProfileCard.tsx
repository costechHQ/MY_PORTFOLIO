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
      className="w-full max-w-md overflow-hidden rounded-card border border-line bg-bg shadow-[0_0_90px_-15px_var(--accent)]"
    >
      {/* Full 4:5 portrait, uncropped, so face, shirt and watch all show. */}
      <Image
        src="/images/portrait.jpeg"
        alt={`Portrait of ${profile.name}`}
        width={864}
        height={1080}
        priority
        sizes="(min-width: 1024px) 448px, 92vw"
        className="aspect-[4/5] w-full object-cover"
      />
      <div className="p-5">
        <div className="flex items-center justify-between gap-4">
          <div className="min-w-0">
            <a
              href={`mailto:${profile.email}`}
              className="block truncate text-sm hover:text-accent-soft"
            >
              {profile.email}
            </a>
            <p className="mt-1 text-xs text-muted">Based in {profile.location}</p>
          </div>
          <ul className="flex shrink-0 gap-2">
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
        <Button href="/#contact" variant="primary" arrow className="mt-5 w-full justify-between">
          Get in touch
        </Button>
      </div>
    </aside>
  );
}
