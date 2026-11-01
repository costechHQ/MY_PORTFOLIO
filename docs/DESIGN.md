# Design Reference

Source: Dribbble shot 27293078 (screen recording reviewed locally). Dark, cinematic, editorial style.

## Palette (approximate; refine during Phase 1)
| Token | Value | Use |
|---|---|---|
| `bg` | `#000000` | Page background |
| `surface` | `#111111` / `#1a1a1a` | Cards, pills, form panels |
| `border` | `rgba(255,255,255,0.12)` | Hairline card/pill borders |
| `text` | `#ffffff` | Headings |
| `muted` | `rgba(255,255,255,0.45)` | Secondary text, de-emphasized heading words |
| `accent` | `#ff4d1a` (orange-red) | Dot markers, icon tile, highlights |
| `hero-gradient` | orange `#ff6a00` to deep red `#7a0a0a` to black | Hero and footer glow backgrounds |
| `frame` | `#ffab8a` (peach) | Showcase frame only; not used on the site |

## Typography
- Neo-grotesk sans (Helvetica Now / Inter Display style), tight tracking, light/regular weight.
- Hero H1: very large (about 96-120px desktop), 3 lines, tight leading.
- Section headings: large; part of the sentence in white, the rest in muted grey.
- Labels: small, with a leading dot (e.g. "Experiences", "About Me").

## Layout and sections (top to bottom)
1. **Floating pill nav**: centered pill with 5 icon tabs (home, work, about, services, contact); logo at left; location and local time at right; round grid-menu button.
2. **Hero**: full-bleed gradient with blurred figure; large headline; outlined pill tags (skills); two stat cards (one white, one glass); right-side profile card (portrait, email, location, social icons, "Get Started" pill button with arrow); bottom: "Start a Project" link + circle arrow, "View my Works" outline button, carousel dots, "Our Partners" logo grid.
3. **Experiences**: muted-grey label, big two-tone statement, rows of company / role with a date pill, separated by hairlines.
4. **Selected Work**: big rounded "Selected Work" header card with accent dot; project cards (image, category, title, date pill, arrow button).
5. **Awards / Recognition**: numbered list with dates.
6. **Pricing**: toggle pill (Standard / Premium), price card with gradient, bullet list, "Get Started" button, "Custom Quote" row.
7. **FAQs**: accordion.
8. **Services**: large stacked titles, the active one in a card with an accent icon tile, others muted with count superscripts.
9. **About**: "Behind every great design..." statement paragraph.
10. **Contact / footer**: form (name, email, phone, message, budget chips), huge "Book A Call" marquee pill, social icons, credits.

## Mapping to CV content
Template sections with no CV data are dropped or adapted, never invented:
- Pricing: **dropped** (no data in the CV).
- Awards / Partner logos: **dropped** (replace with a tech-stack strip).
- Stat cards: use real facts only (e.g. "2023" years building, tech count), to be confirmed with the owner.
- Services: Full-Stack Development, Frontend (React / Next.js), Backend and APIs, plus Media (video, photo, graphics) as a secondary track.
- Experience rows: Freelance Full-Stack Engineer (2023-Present); Church & Event Media (2015-Present).
- Selected Work: Dixtron (https://dixtron.co.uk) and the open-source repos (https://github.com/costechHQ).
- Contact: email, phone, GitHub, LinkedIn from the CV.
