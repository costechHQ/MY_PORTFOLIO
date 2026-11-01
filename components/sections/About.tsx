import { about, profile } from "@/data/content";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function About() {
  return (
    <section id="about" className="scroll-mt-24 py-24">
      <Container className="grid gap-10 md:grid-cols-[1fr_2fr]">
        <p className="text-sm text-muted">• {about.label}</p>
        <div className="flex flex-col gap-8">
          <SectionHeading title={about.title} muted={about.muted} />
          <p className="max-w-2xl text-base leading-relaxed text-ink/70">{profile.summary}</p>
          <p className="text-sm text-muted">{about.languages}</p>
        </div>
      </Container>
    </section>
  );
}
