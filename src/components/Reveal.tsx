"use client";
import { useRef, type ReactNode, type CSSProperties } from "react";
import { m, useInView } from "framer-motion";

interface Props {
  children: ReactNode;
  delay?: number;
  style?: CSSProperties;
  className?: string;
  from?: "bottom" | "left" | "right" | "top";
  once?: boolean;
  /**
   * Render visible immediately, with no fade.
   *
   * Use it for anything in the first viewport. This component starts its
   * children at `opacity: 0` and only reveals them once React has hydrated and
   * `useInView` has fired, which means above-the-fold content is invisible
   * until the JavaScript lands. Measured on an iPhone 12 against the local
   * build, that was costing 600-800ms of LCP: the trophies-awards page went
   * 944ms to 140ms with the reveal removed, and a case study 856ms to 100ms.
   *
   * A CSS animation does not fix it either — an element at zero opacity is not
   * painted as far as LCP is concerned, however the opacity is driven. The
   * only fix for first-screen content is not to start it hidden.
   *
   * Below the fold the animation costs nothing and is the point, so leave it.
   */
  immediate?: boolean;
}

export default function Reveal({
  children,
  delay = 0,
  style,
  className,
  from = "bottom",
  once = true,
  immediate = false,
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once, margin: "-60px 0px" });

  if (immediate) {
    return (
      <div className={className} style={style}>
        {children}
      </div>
    );
  }

  const offsets = {
    bottom: { y: 16, x: 0 },
    top:    { y: -16, x: 0 },
    left:   { y: 0, x: -24 },
    right:  { y: 0, x: 24 },
  };

  const { x, y } = offsets[from];

  return (
    <m.div
      ref={ref}
      className={className}
      style={style}
      initial={{ opacity: 0, x, y }}
      animate={inView ? { opacity: 1, x: 0, y: 0 } : { opacity: 0, x, y }}
      transition={{
        type: "spring",
        stiffness: 280,
        damping: 28,
        delay: delay / 1000,
      }}
    >
      {children}
    </m.div>
  );
}
