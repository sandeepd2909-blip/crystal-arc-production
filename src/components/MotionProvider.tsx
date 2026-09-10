"use client";

import { LazyMotion, domAnimation } from "framer-motion";
import type { ReactNode } from "react";

/**
 * Loads framer-motion's animation features on demand.
 *
 * The full `motion` component pulls every feature into the initial bundle —
 * gestures, drag, layout projection — whether a page uses them or not, and
 * framer was accounting for 233 KB across three chunks on every page. With
 * `LazyMotion` the components import `m` instead, which ships a minimal
 * renderer, and `domAnimation` supplies animations, variants, exit animations
 * and hover/tap gestures as a separate async chunk.
 *
 * `domAnimation`, not `domMax`: nothing on this site drags, and nothing uses
 * layout animations. If either is ever added, this is the line that has to
 * change or the animation will silently do nothing.
 */
export default function MotionProvider({ children }: { children: ReactNode }) {
  return <LazyMotion features={domAnimation} strict>{children}</LazyMotion>;
}
