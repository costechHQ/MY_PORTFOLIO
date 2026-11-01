/**
 * Selected work. Dixtron's description is from the CV; the rest are the
 * public GitHub descriptions at github.com/costechHQ. Tags are limited to
 * technologies stated in those descriptions or shown as the repo language.
 */

export type Project = {
  slug: string;
  title: string;
  category: string;
  summary: string;
  tags: readonly string[];
  links: { live?: string; source?: string };
};

export const projectsSection = {
  label: "Projects",
  title: "Selected Work",
  allReposUrl: "https://github.com/costechHQ",
} as const;

export const projects: readonly Project[] = [
  {
    slug: "dixtron",
    title: "Dixtron",
    category: "E-commerce",
    summary:
      "E-commerce platform built end to end, from the ground up, focused on quality products and a strong customer experience.",
    tags: ["E-commerce"],
    links: { live: "https://dixtron.co.uk" },
  },
  {
    slug: "ibackhome",
    title: "iBackHome",
    category: "Web Platform",
    summary:
      "iBackHome lets Nigerians abroad build homes in Enugu with confidence: vetted supervisors capture evidence that can't be faked, and money is released milestone by milestone through a licensed escrow partner only when the work is confirmed.",
    tags: ["Python"],
    links: { source: "https://github.com/costechHQ/iBackHome" },
  },
  {
    slug: "goodyexcellent-couture",
    title: "GOODYEXCELLENT COUTURE",
    category: "Website",
    summary:
      "Official website for GOODYEXCELLENT COUTURE, a bespoke fashion and tailoring brand in Enugu, Nigeria.",
    tags: ["Next.js", "FastAPI", "PostgreSQL"],
    links: { source: "https://github.com/costechHQ/GOODYEXCELLENT-COUTURE-" },
  },
  {
    slug: "pikva",
    title: "PIKVA",
    category: "Security",
    summary:
      "Secure school pickup verification for authorized child collection, daily pickup codes, release tracking, and real-time security alerts.",
    tags: ["Python"],
    links: { source: "https://github.com/costechHQ/PIKVA" },
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
