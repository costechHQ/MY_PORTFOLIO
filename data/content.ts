/**
 * Single source of truth for site copy. Everything here comes from the CV
 * (CHRISTOPHER_ONYEDIKA_SIMON_CV.pdf). Do not invent content.
 */

export const profile = {
  name: "Christopher Onyedika Simon",
  shortName: "Christopher Simon",
  initials: "CS",
  title: "Full-Stack Software Engineer",
  location: "Enugu, Nigeria",
  timeZone: "Africa/Lagos",
  phone: "+234 703 230 3470",
  email: "cosimon.tech@gmail.com",
  summary:
    "Full-stack software engineer with experience building web applications end to end—interface, API, database and authentication. Works from the problem outward: chooses the simplest architecture that holds up and ships maintainable, well-documented code. Proficient across the JavaScript and Python ecosystems, with a focus on quality, readability and iterative improvement.",
} as const;

export const socials = [
  { label: "GitHub", href: "https://github.com/costechHQ" },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/christopher-simon-783a51219",
  },
  { label: "Email", href: `mailto:${profile.email}` },
] as const;

export const navItems = [
  { label: "Home", href: "/#home", id: "home" },
  { label: "Work", href: "/#work", id: "work" },
  { label: "About", href: "/#about", id: "about" },
  { label: "Services", href: "/#services", id: "services" },
  { label: "Contact", href: "/#contact", id: "contact" },
] as const;

export type NavId = (typeof navItems)[number]["id"];

/** Derived only from facts stated in the CV. Edit freely. */
export const hero = {
  headline: "Building web & mobile apps",
  headlineMuted: "end to end",
  tags: ["Web Applications", "Mobile Apps", "REST APIs", "Databases", "UI Development"],
  // Flutter and Dart are not in the CV yet; added at the owner's request.
  techStrip: ["React", "Next.js", "TypeScript", "Python", "Flutter", "Dart", "PostgreSQL"],
} as const;

const MEDIA_START_YEAR = 2015; // Church & Event Media, 2015 - Present
const ENGINEERING_START_YEAR = 2023; // Freelance Full-Stack Engineer, 2023 - Present

export const stats = [
  {
    value: `${new Date().getFullYear() - MEDIA_START_YEAR}+`,
    label: "Years in media production",
  },
  {
    value: String(ENGINEERING_START_YEAR),
    label: "Building full-stack apps since",
  },
] as const;

export const about = {
  label: "About Me",
  title: "Works from the problem outward,",
  muted: "choosing the simplest architecture that holds up.",
  languages: "English (Fluent) • Igbo (Native)",
} as const;

export const experience = {
  label: "Experience",
  title: "Experience that spans",
  muted: "code and camera.",
  items: [
    {
      company: "Freelance",
      role: "Full-Stack Software Engineer",
      period: "2023 – Present",
      details: [
        "Design, build and maintain web applications end to end, covering interface, API, database and authentication.",
        "Developed and maintain Dixtron (dixtron.co.uk), an e-commerce platform, from the ground up with a focus on product quality and customer experience.",
        "Document the problem, architecture, trade-offs and lessons learned for each project in public repositories.",
      ],
    },
    {
      company: "Church & Event Media",
      role: "Media Personnel – Videography, Photography & Graphic Design",
      period: "2015 – Present",
      details: [
        "Run live streaming and produce video and photography for church services, programmes and live events.",
        "Design graphics for announcements and promotional material; provide on-site event media coverage.",
      ],
    },
  ],
} as const;

export const skills = {
  label: "Skills",
  title: "A full toolkit,",
  muted: "from interface to database.",
  // "Mobile" (Flutter, Dart) is not in the CV yet; added at the owner's request.
  groups: [
    {
      category: "Frontend",
      items: ["React", "Next.js", "TypeScript", "JavaScript (ES6+)", "HTML5", "CSS3", "Tailwind CSS"],
    },
    { category: "Mobile", items: ["Flutter", "Dart"] },
    {
      category: "Backend",
      items: ["Python", "REST API design", "Authentication and session handling"],
    },
    {
      category: "Databases",
      items: ["PostgreSQL", "MySQL", "SQLite", "Schema design", "Queries and migrations"],
    },
    { category: "Tools", items: ["Git", "GitHub", "VS Code", "Figma"] },
    {
      category: "Practices",
      items: [
        "Code review",
        "Technical documentation",
        "Responsive and accessible interface design",
      ],
    },
  ],
} as const;

export const education = {
  label: "Education & Training",
  title: "Always learning,",
  muted: "formally and by building.",
  items: [
    {
      title: "Hackathon 3.0 Bootcamp – Software Engineering & AI Full-Stack Engineering",
      institution: "Africaplan Foundation",
      period: "Jul – Nov 2026",
    },
    {
      title: "B.Eng. Computer Engineering",
      institution: "Enugu State University of Science and Technology (ESUT)",
      period: "2018 – 2023",
      note: "Studies completed 2023; certificate awarded 2026.",
    },
  ],
} as const;
