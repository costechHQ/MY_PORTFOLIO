import { profile, socials } from "@/data/content";
import { Container } from "@/components/ui/Container";

export function Footer() {
  return (
    <footer className="border-t border-line py-8">
      <Container
        as="div"
        className="flex flex-col items-center justify-between gap-4 text-sm text-muted md:flex-row"
      >
        <p>
          © {new Date().getFullYear()} {profile.name}. All rights reserved.
        </p>
        <ul className="flex items-center gap-6">
          {socials.map((s) => (
            <li key={s.label}>
              <a
                href={s.href}
                className="transition hover:text-ink"
                {...(s.href.startsWith("http") && {
                  target: "_blank",
                  rel: "noopener noreferrer",
                })}
              >
                {s.label}
              </a>
            </li>
          ))}
        </ul>
      </Container>
    </footer>
  );
}
