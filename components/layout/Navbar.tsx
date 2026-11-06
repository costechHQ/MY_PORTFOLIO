import Image from "next/image";
import Link from "next/link";
import { useEffect, useState, type ReactNode } from "react";
import { navItems, profile, type NavId } from "@/data/content";
import { cn } from "@/lib/cn";
import { useActiveSection } from "@/lib/useActiveSection";
import { useLocalTime } from "@/lib/useLocalTime";

const sectionIds = navItems.map((item) => item.id);

const svgProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  className: "h-[18px] w-[18px]",
  "aria-hidden": true,
};

const icons: Record<NavId, ReactNode> = {
  home: (
    <svg {...svgProps}>
      <path d="m3 11 9-8 9 8v9a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1z" />
    </svg>
  ),
  work: (
    <svg {...svgProps}>
      <rect x="3" y="7" width="18" height="13" rx="2" />
      <path d="M9 7V5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2M3 13h18" />
    </svg>
  ),
  about: (
    <svg {...svgProps}>
      <circle cx="12" cy="8" r="4" />
      <path d="M4 21c0-4 3.6-6 8-6s8 2 8 6" />
    </svg>
  ),
  skills: (
    <svg {...svgProps}>
      <path d="M4 6h16M4 12h16M4 18h10" />
    </svg>
  ),
  contact: (
    <svg {...svgProps}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </svg>
  ),
};

export function Navbar() {
  const [open, setOpen] = useState(false);
  const active = useActiveSection(sectionIds);
  const time = useLocalTime(profile.timeZone);

  // Close the mobile menu with Escape.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 md:px-8">
      <div className="relative mx-auto flex max-w-7xl items-center justify-between">
        <Link
          href="/#home"
          aria-label={`${profile.initials} - ${profile.name} home`}
          className="relative block h-11 w-11 overflow-hidden rounded-full bg-ink"
        >
          <Image
            src="/images/avatar.jpg"
            alt=""
            width={128}
            height={128}
            sizes="44px"
            className="h-full w-full object-cover"
          />
        </Link>

        <nav
          aria-label="Primary"
          className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-1 rounded-pill border border-line bg-surface/70 p-1.5 backdrop-blur md:flex"
        >
          {navItems.map((item) => (
            <Link
              key={item.id}
              href={item.href}
              aria-label={item.label}
              title={item.label}
              aria-current={active === item.id ? "page" : undefined}
              className={cn(
                "flex h-10 w-12 items-center justify-center rounded-full transition",
                active === item.id
                  ? "bg-accent text-ink"
                  : "text-muted hover:text-ink",
              )}
            >
              {icons[item.id]}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <p className="hidden text-xs text-muted lg:block">
            {profile.location.split(",")[0]}, NG {time}
          </p>
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="flex h-11 w-11 items-center justify-center rounded-full bg-ink text-bg md:hidden"
          >
            <svg {...svgProps}>
              {open ? <path d="M6 6l12 12M18 6 6 18" /> : <path d="M4 8h16M4 16h16" />}
            </svg>
          </button>
        </div>

        {open && (
          <nav
            aria-label="Mobile"
            className="absolute right-0 top-14 w-56 rounded-card border border-line bg-surface/95 p-2 backdrop-blur md:hidden"
          >
            {navItems.map((item) => (
              <Link
                key={item.id}
                href={item.href}
                onClick={() => setOpen(false)}
                className={cn(
                  "flex items-center gap-3 rounded-xl px-4 py-3 text-sm",
                  active === item.id ? "bg-accent text-ink" : "text-muted hover:text-ink",
                )}
              >
                {icons[item.id]}
                {item.label}
              </Link>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
}
