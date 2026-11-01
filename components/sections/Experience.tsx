import { experience } from "@/data/content";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ExperienceRow } from "./ExperienceRow";

export function Experience() {
  return (
    <section id="experience" className="scroll-mt-24 py-24">
      <Container className="grid gap-10 md:grid-cols-[1fr_2fr]">
        <p className="text-sm text-muted">• {experience.label}</p>
        <div className="flex flex-col gap-10">
          <SectionHeading title={experience.title} muted={experience.muted} />
          <ul>
            {experience.items.map((item) => (
              <ExperienceRow key={item.company} {...item} />
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
