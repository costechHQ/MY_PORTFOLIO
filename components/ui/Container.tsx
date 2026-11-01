import type { ElementType, HTMLAttributes } from "react";
import { cn } from "@/lib/cn";

type ContainerProps = HTMLAttributes<HTMLElement> & {
  as?: ElementType;
};

/** Centers content and applies the site's horizontal padding. */
export function Container({ as: Tag = "div", className, ...props }: ContainerProps) {
  return (
    <Tag
      className={cn("mx-auto w-full max-w-7xl px-6 md:px-10", className)}
      {...props}
    />
  );
}
