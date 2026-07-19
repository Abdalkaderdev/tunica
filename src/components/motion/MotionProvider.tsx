"use client";

import { LazyMotion, domAnimation } from "motion/react";
import type { ReactNode } from "react";

/**
 * Loads a slim subset of Motion features (transforms, opacity, layout)
 * asynchronously so the animation runtime stays out of the initial bundle.
 * Every animated element in the app uses the `m` component from motion/react.
 */
export default function MotionProvider({ children }: { children: ReactNode }) {
  return (
    <LazyMotion features={domAnimation} strict>
      {children}
    </LazyMotion>
  );
}
