import type { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import Link from "next/link";
import { getProject, projects, type Project } from "@/data/projects";
import { profile } from "@/data/content";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Tag } from "@/components/ui/Tag";

export const getStaticPaths: GetStaticPaths = () => ({
  paths: projects.map((p) => ({ params: { slug: p.slug } })),
  fallback: false,
});

export const getStaticProps: GetStaticProps<{ project: Project }, { slug: string }> = ({
  params,
}) => {
  const project = params ? getProject(params.slug) : undefined;
  if (!project) return { notFound: true };
  return { props: { project } };
};

export default function ProjectPage({ project }: { project: Project }) {
  return (
    <>
      <Head>
        <title>{`${project.title} | ${profile.name}`}</title>
        <meta name="description" content={project.summary} />
      </Head>
      <main className="bg-hero-glow pb-24 pt-32">
        <Container className="flex max-w-4xl flex-col gap-8">
          <Link href="/#work" className="text-sm text-muted transition hover:text-ink">
            ← Back to Selected Work
          </Link>
          <p className="text-sm text-muted">• {project.category}</p>
          <h1 className="font-display text-5xl font-light leading-[0.95] tracking-tight md:text-7xl">
            {project.title}
          </h1>
          <p className="max-w-2xl text-lg leading-relaxed text-ink/80">{project.summary}</p>
          <ul className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <li key={tag}>
                <Tag>{tag}</Tag>
              </li>
            ))}
          </ul>
          <div className="flex flex-wrap gap-4">
            {project.links.live && (
              <Button href={project.links.live} arrow>
                Visit live site
              </Button>
            )}
            {project.links.source && (
              <Button href={project.links.source} variant="outline" arrow>
                View source on GitHub
              </Button>
            )}
          </div>
        </Container>
      </main>
    </>
  );
}
