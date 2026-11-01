import type { HTMLAttributes } from "react";
import { cn } from "@/lib/cn";

type TagProps = HTMLAttributes<HTMLSpanElement> & {
  /** "outline" is the hero skill pill; "solid" is the small date pill. */
  variant?: "outline" | "solid";
};

export function Tag({ variant = "outline", className, ...props }: TagProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-pill px-4 py-1.5 text-sm",
        variant === "outline" && "border border-line text-ink",
        variant === "solid" && "bg-surface-2 text-xs text-ink",
        className,
      )}
      {...props}
    />
  );
}
