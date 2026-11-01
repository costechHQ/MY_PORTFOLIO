/**
 * Selected work. Dixtron's description is from the CV; the rest are the
 * public GitHub descriptions at github.com/costechHQ. Tags are limited to
 * technologies stated in those descriptions or shown as the repo language.
 */

export type Screenshot = {
  src: string;
  alt: string;
  caption: string;
  device: "desktop" | "phone";
  /** Real pixel size of the file, so the page doesn't shift while it loads. */
  width: number;
  height: number;
};

export type ProjectVideo = {
  src: string;
  poster: string;
  caption: string;
  width: number;
  height: number;
};

export type Project = {
  slug: string;
  title: string;
  category: string;
  summary: string;
  tags: readonly string[];
  links: { live?: string; source?: string };
  /** Image shown on the project card (falls back to a gradient tile). */
  cover?: Screenshot;
  screens?: readonly Screenshot[];
  /** Screen-recorded walkthrough, played on the detail page. */
  video?: ProjectVideo;
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
    cover: {
      src: "/images/dixtron-cover.jpg",
      alt: "Dixtron website home page with a Back-Up banner and the headline 'Transform Your Business'",
      caption: "Home page",
      device: "desktop",
      width: 1364,
      height: 600,
    },
    video: {
      src: "/videos/dixtron-walkthrough.mp4",
      poster: "/images/dixtron-cover.jpg",
      caption: "Walkthrough of the live site: home, about, services, store products and contact.",
      width: 1280,
      height: 564,
    },
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
    cover: {
      src: "/images/pikva-home-desktop.png",
      alt: "PIKVA home page: the headline 'Send every child home with the right person' beside a photo of three pupils reading",
      caption: "Home page",
      device: "desktop",
      width: 1425,
      height: 2831,
    },
    screens: [
      {
        src: "/images/pikva-home-desktop.png",
        alt: "PIKVA home page on desktop, with sections for what Pikva does, parents, and how it works",
        caption: "Home page (desktop)",
        device: "desktop",
        width: 1425,
        height: 2831,
      },
      {
        src: "/images/pikva-login-desktop.png",
        alt: "PIKVA sign-in screen on desktop with email and password fields",
        caption: "Sign in (desktop)",
        device: "desktop",
        width: 1440,
        height: 900,
      },
      {
        src: "/images/pikva-forgot-password-desktop.png",
        alt: "PIKVA forgot-password screen on desktop with an email field and a reset link button",
        caption: "Forgot password (desktop)",
        device: "desktop",
        width: 1440,
        height: 900,
      },
      {
        src: "/images/pikva-home-phone.png",
        alt: "PIKVA home page on a phone, stacked into a single column",
        caption: "Home page (phone)",
        device: "phone",
        width: 780,
        height: 9026,
      },
      {
        src: "/images/pikva-login-phone.png",
        alt: "PIKVA sign-in screen on a phone",
        caption: "Sign in (phone)",
        device: "phone",
        width: 780,
        height: 1688,
      },
      {
        src: "/images/pikva-forgot-password-phone.png",
        alt: "PIKVA forgot-password screen on a phone",
        caption: "Forgot password (phone)",
        device: "phone",
        width: 780,
        height: 1688,
      },
    ],
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
