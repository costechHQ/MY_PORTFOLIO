import Link from "next/link";
import type { ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/cn";

export function ArrowIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={cn("h-4 w-4", className)}
    >
      <path d="M7 17 17 7M8 7h9v9" />
    </svg>
  );
}

type Variant = "primary" | "outline" | "ghost";

type ButtonProps = {
  variant?: Variant;
  /** Adds the circular arrow badge on the right. */
  arrow?: boolean;
  href?: string;
  className?: string;
  children: ReactNode;
} & Omit<ButtonHTMLAttributes<HTMLButtonElement>, "className" | "children">;

const base =
  "group inline-flex items-center justify-center gap-3 rounded-pill text-sm font-medium transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-soft";

const variants: Record<Variant, string> = {
  primary: "bg-ink text-bg hover:bg-accent-soft",
  outline: "border border-line text-ink hover:bg-surface-2",
  ghost: "text-ink underline underline-offset-4 hover:text-accent-soft",
};

export function Button({
  variant = "primary",
  arrow = false,
  href,
  className,
  children,
  ...props
}: ButtonProps) {
  const classes = cn(
    base,
    variants[variant],
    variant !== "ghost" && (arrow ? "py-1.5 pl-6 pr-1.5" : "px-6 py-3"),
    className,
  );
  const content = (
    <>
      {children}
      {arrow && (
        <span
          className={cn(
            "flex h-9 w-9 items-center justify-center rounded-full transition group-hover:rotate-45",
            variant === "primary" ? "bg-bg text-ink" : "bg-ink text-bg",
          )}
        >
          <ArrowIcon />
        </span>
      )}
    </>
  );

  if (href) {
    const external = /^(https?:|mailto:|tel:)/.test(href);
    return external ? (
      <a
        href={href}
        className={classes}
        {...(href.startsWith("http") && { target: "_blank", rel: "noopener noreferrer" })}
      >
        {content}
      </a>
    ) : (
      <Link href={href} className={classes}>
        {content}
      </Link>
    );
  }
  return (
    <button className={classes} {...props}>
      {content}
    </button>
  );
}
