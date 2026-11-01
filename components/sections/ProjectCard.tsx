import Link from "next/link";
import type { Project } from "@/data/projects";
import { ArrowIcon } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { Tag } from "@/components/ui/Tag";

export function ProjectCard({ project, index = 0 }: { project: Project; index?: number }) {
  return (
    <li>
      <Reveal index={index} className="h-full">
      <Link
        href={`/projects/${project.slug}`}
        className="group flex h-full flex-col overflow-hidden rounded-card border border-line bg-surface transition duration-300 hover:-translate-y-1.5 hover:border-accent-soft hover:shadow-[0_24px_60px_-24px_var(--accent)]"
      >
        {/* No screenshot yet: a branded gradient tile stands in for the image. */}
        <div className="relative flex aspect-[16/10] items-end overflow-hidden bg-hero-glow p-5">
          <span
            aria-hidden="true"
            className="font-display text-6xl font-light leading-none tracking-tight text-ink/25 transition group-hover:text-ink/40"
          >
            {project.title.slice(0, 2).toUpperCase()}
          </span>
        </div>
        <div className="flex flex-1 flex-col gap-3 p-5">
          <p className="text-sm text-muted">{project.category}</p>
          <div className="flex items-start justify-between gap-4">
            <h3 className="font-display text-2xl font-light">{project.title}</h3>
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-line transition group-hover:bg-ink group-hover:text-bg">
              <ArrowIcon />
            </span>
          </div>
          <p className="line-clamp-3 text-sm leading-relaxed text-ink/70">{project.summary}</p>
          <ul className="mt-auto flex flex-wrap gap-2 pt-2">
            {project.tags.map((tag) => (
              <li key={tag}>
                <Tag variant="solid">{tag}</Tag>
              </li>
            ))}
          </ul>
        </div>
      </Link>
      </Reveal>
    </li>
  );
}
