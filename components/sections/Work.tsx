import { projects, projectsSection } from "@/data/projects";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { ProjectCard } from "./ProjectCard";

export function Work() {
  return (
    <section id="work" className="scroll-mt-24 py-24">
      <Container className="flex flex-col gap-12">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="inline-flex items-center gap-4 rounded-card border border-line bg-surface px-6 py-4">
            <h2 className="font-display text-4xl font-light tracking-tight md:text-5xl">
              {projectsSection.title}
            </h2>
            <span aria-hidden="true" className="h-3 w-3 rounded-full bg-accent" />
          </div>
          <Button href={projectsSection.allReposUrl} variant="outline" arrow>
            All repositories
          </Button>
        </div>
        <ul className="grid gap-5 md:grid-cols-2">
          {projects.map((project, i) => (
            <ProjectCard key={project.slug} project={project} index={i % 2} />
          ))}
        </ul>
      </Container>
    </section>
  );
}
