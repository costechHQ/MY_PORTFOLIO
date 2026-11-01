import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type SectionHeadingProps = {
  /** Small dotted label above the heading, e.g. "Experiences". */
  label?: string;
  /** Leading words, shown in white. */
  title: ReactNode;
  /** Trailing words, shown muted (the template's two-tone headline). */
  muted?: ReactNode;
  className?: string;
};

export function SectionHeading({ label, title, muted, className }: SectionHeadingProps) {
  return (
    <div className={cn("max-w-3xl", className)}>
      {label && <p className="mb-4 text-sm text-muted">• {label}</p>}
      <h2 className="font-display text-4xl font-light leading-tight tracking-tight md:text-5xl">
        {title}
        {muted && <span className="text-muted"> {muted}</span>}
      </h2>
    </div>
  );
}
