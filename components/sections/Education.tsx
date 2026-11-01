import { education } from "@/data/content";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { EducationItem } from "./EducationItem";

export function Education() {
  return (
    <section id="education" className="scroll-mt-24 py-24">
      <Container className="grid gap-10 md:grid-cols-[1fr_2fr]">
        <p className="text-sm text-muted">• {education.label}</p>
        <div className="flex flex-col gap-10">
          <SectionHeading title={education.title} muted={education.muted} />
          <ul>
            {education.items.map((item) => (
              <EducationItem key={item.title} {...item} />
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
