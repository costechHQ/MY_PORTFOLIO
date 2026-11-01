import { skills } from "@/data/content";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SkillGroup } from "./SkillGroup";

export function Skills() {
  return (
    <section id="skills" className="scroll-mt-24 py-24">
      <Container className="flex flex-col gap-12">
        <SectionHeading label={skills.label} title={skills.title} muted={skills.muted} />
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {skills.groups.map((group, i) => (
            <SkillGroup key={group.category} {...group} index={i % 3} />
          ))}
        </ul>
      </Container>
    </section>
  );
}
