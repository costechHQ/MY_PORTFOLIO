import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  className?: string;
  /** Position in a group; each step delays the animation a little (stagger). */
  index?: number;
  /** Starting vertical offset in px. */
  y?: number;
};

/** Fades and slides content up the first time it scrolls into view. */
export function Reveal({ children, className, index = 0, y = 32 }: RevealProps) {
  const reduce = useReducedMotion();

  if (reduce) return <div className={className}>{children}</div>;

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: Math.min(index, 6) * 0.1 }}
    >
      {children}
    </motion.div>
  );
}
