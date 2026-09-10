"use client";
import { useRef, useEffect, type CSSProperties } from "react";
import { useInView } from "framer-motion";
import { gsap } from "gsap";

interface Props {
  value: string;
  className?: string;
  style?: CSSProperties;
  duration?: number;
}

export default function AnimatedNumber({ value, className, style, duration = 2.2 }: Props) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px 0px" });
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!inView || hasAnimated.current || !ref.current) return;
    hasAnimated.current = true;

    const el = ref.current;
    // Extract numeric part and suffix (e.g. "25+" → num=25, suffix="+")
    const match = value.match(/^([\d,]+)(.*)$/);
    if (!match) { el.textContent = value; return; }

    const raw = parseFloat(match[1].replace(/,/g, ""));
    const suffix = match[2] ?? "";
    const hasComma = match[1].includes(",");

    const obj = { val: 0 };
    gsap.to(obj, {
      val: raw,
      duration,
      ease: "power3.out",
      onUpdate() {
        const n = Math.round(obj.val);
        el.textContent = (hasComma ? n.toLocaleString() : String(n)) + suffix;
      },
      onComplete() {
        el.textContent = value;
      },
    });
  }, [inView, value, duration]);

  return (
    <span ref={ref} className={className} style={style}>
      {value}
    </span>
  );
}
