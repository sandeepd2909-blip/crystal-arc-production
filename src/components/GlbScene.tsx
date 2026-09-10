"use client";

import dynamic from "next/dynamic";
import { useEffect, useRef, useState } from "react";

const ModelViewer = dynamic(() => import("@/components/ModelViewer"), {
  ssr: false,
  loading: () => <div style={{ width: "100%", height: "100%" }} />,
});

interface Props {
  src: string;
  alt?: string;
  rotationSpeed?: string;
  style?: React.CSSProperties;
}

/**
 * Defers both the model-viewer runtime (~250KB) and the .glb itself until the
 * viewer is actually near the viewport.
 *
 * Previously ModelViewer mounted with the page, so every visitor downloaded the
 * model whether or not they scrolled to it. On /products/trophies-awards that is
 * a 5.3MB file, and it was being counted as the Largest Contentful Paint —
 * Lighthouse measured LCP at 64s on mobile. Nothing about the viewer is useful
 * before it is on screen, so it now waits.
 */
export default function GlbScene({ src, alt = "3D model", rotationSpeed = "6deg/s", style }: Props) {
  const holder = useRef<HTMLDivElement>(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (show) return;
    const el = holder.current;
    if (!el) return;

    // No IntersectionObserver (very old browser) — just load it rather than
    // leaving a permanently empty box.
    if (typeof IntersectionObserver === "undefined") {
      const fallbackTimer = window.setTimeout(() => setShow(true), 0);
      return () => window.clearTimeout(fallbackTimer);
    }

    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) { setShow(true); io.disconnect(); }
      },
      // Start fetching a little before it scrolls in, so it is ready on arrival.
      { rootMargin: "400px 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [show]);

  return (
    <div ref={holder} style={style}>
      {show ? (
        <ModelViewer src={src} alt={alt} rotationSpeed={rotationSpeed} style={{ width: "100%", height: "100%" }} />
      ) : (
        <div style={{ width: "100%", height: "100%" }} aria-hidden />
      )}
    </div>
  );
}
