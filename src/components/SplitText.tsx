"use client";
import { useRef, type CSSProperties } from "react";
import { m, useInView } from "framer-motion";

interface Props {
  text: string;
  className?: string;
  style?: CSSProperties;
  delay?: number;
  stagger?: number;
  splitBy?: "word" | "char";
  duration?: number;
}

export default function SplitText({
  text,
  className,
  style,
  delay = 0,
  stagger = 0.06,
  splitBy = "word",
  duration = 0.8,
}: Props) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px 0px" });

  const units = splitBy === "word" ? text.split(" ") : text.split("");

  return (
    <span
      ref={ref}
      className={className}
      style={{ display: "inline", ...style }}
      role="text"
      aria-label={text}
    >
      {units.map((unit, i) => (
        <m.span
          key={i}
          style={{ display: "inline-block", overflow: "hidden", verticalAlign: "bottom" }}
          aria-hidden
        >
          <m.span
            style={{ display: "inline-block" }}
            initial={{ y: "110%", opacity: 0 }}
            animate={inView ? { y: "0%", opacity: 1 } : { y: "110%", opacity: 0 }}
            transition={{
              duration,
              delay: delay / 1000 + i * stagger,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            {unit}
            {splitBy === "word" && i < units.length - 1 ? " " : ""}
          </m.span>
        </m.span>
      ))}
    </span>
  );
}
