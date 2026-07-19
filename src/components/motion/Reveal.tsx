"use client";

import { m } from "motion/react";
import type { ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  as?: "div" | "section" | "li" | "span" | "article";
  delay?: number;
  y?: number;
  className?: string;
  once?: boolean;
};

const ease = [0.22, 1, 0.36, 1] as const;

/** Fades + rises an element into view once it enters the viewport. */
export default function Reveal({
  children,
  as = "div",
  delay = 0,
  y = 24,
  className,
  once = true,
}: RevealProps) {
  const Component = m[as];
  return (
    <Component
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, amount: 0.25, margin: "0px 0px -80px 0px" }}
      transition={{ duration: 0.7, ease, delay }}
    >
      {children}
    </Component>
  );
}
