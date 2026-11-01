import Head from "next/head";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Tag } from "@/components/ui/Tag";

const swatches = [
  { name: "bg", className: "bg-bg" },
  { name: "surface", className: "bg-surface" },
  { name: "surface-2", className: "bg-surface-2" },
  { name: "accent", className: "bg-accent" },
  { name: "accent-soft", className: "bg-accent-soft" },
  { name: "accent-deep", className: "bg-accent-deep" },
  { name: "ink", className: "bg-ink" },
  { name: "muted", className: "bg-muted" },
];

// Temporary token preview; replaced by the real homepage in Phase 3.
export default function Home() {
  return (
    <>
      <Head>
        <title>Christopher Onyedika Simon | Full-Stack Software Engineer</title>
      </Head>
      <main className="min-h-screen bg-hero-glow px-6 py-16 md:px-16">
        <p className="text-sm text-muted">• Design tokens</p>
        <h1 className="mt-4 max-w-3xl font-display text-6xl font-light leading-[0.95] tracking-tight md:text-8xl">
          Building the <span className="text-muted">whole stack</span>
        </h1>

        <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-4">
          {swatches.map((s) => (
            <div
              key={s.name}
              className="rounded-card border border-line bg-surface p-3"
            >
              <div className={`h-16 rounded-xl border border-line ${s.className}`} />
              <p className="mt-2 text-sm">{s.name}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 flex items-center gap-6">
          <Image
            src="/images/portrait.jpeg"
            alt="Christopher Onyedika Simon"
            width={160}
            height={200}
            className="h-[200px] w-[160px] rounded-card object-cover"
            priority
          />
          <Tag>Branding</Tag>
        </div>
        <Container className="mt-16 px-0 md:px-0">
          <SectionHeading
            label="Experiences"
            title="Full-stack engineer who ships"
            muted="simple, maintainable software"
          />
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Button arrow>Get Started</Button>
            <Button variant="outline">View my Works</Button>
            <Button variant="ghost">Start a Project</Button>
            <Tag variant="solid">2023 - Present</Tag>
          </div>
        </Container>
      </main>
    </>
  );
}
