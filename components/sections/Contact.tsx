import { contact, profile, socials } from "@/data/content";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ContactForm } from "./ContactForm";

export function Contact() {
  return (
    <section id="contact" className="scroll-mt-24 bg-hero-glow py-24">
      <Container className="grid gap-12 lg:grid-cols-2">
        <div className="flex flex-col gap-8">
          <SectionHeading label={contact.label} title={contact.title} muted={contact.muted} />
          <p className="max-w-md text-base leading-relaxed text-ink/70">{contact.intro}</p>
          <ul className="flex flex-col gap-3 text-sm">
            <li>
              <a href={`mailto:${profile.email}`} className="hover:text-accent-soft">
                {profile.email}
              </a>
            </li>
            <li>
              <a href={`tel:${profile.phone.replace(/\s/g, "")}`} className="hover:text-accent-soft">
                {profile.phone}
              </a>
            </li>
            <li className="text-muted">{profile.location}</li>
          </ul>
          <ul className="flex flex-wrap gap-3">
            {socials
              .filter((s) => s.href.startsWith("http"))
              .map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex rounded-pill border border-line px-4 py-2 text-sm transition hover:bg-ink hover:text-bg"
                  >
                    {s.label}
                  </a>
                </li>
              ))}
          </ul>
          <p className="text-sm text-muted">{contact.references}</p>
        </div>
        <Reveal>
          <ContactForm />
        </Reveal>
      </Container>
    </section>
  );
}
