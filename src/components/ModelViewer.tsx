"use client";

import { useEffect, useRef, CSSProperties } from "react";

interface ModelViewerProps {
  src: string;
  alt?: string;
  rotationSpeed?: string;
  style?: CSSProperties;
}

let scriptLoaded = false;
function ensureScript() {
  if (scriptLoaded || typeof document === "undefined") return;
  scriptLoaded = true;
  const s = document.createElement("script");
  s.type = "module";
  s.src = "https://unpkg.com/@google/model-viewer@4.0.0/dist/model-viewer.min.js";
  document.head.appendChild(s);
}

export default function ModelViewer({ src, alt, rotationSpeed = "8deg/s", style }: ModelViewerProps) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    ensureScript();
  }, []);

  return (
    <model-viewer
      ref={ref}
      src={src}
      alt={alt ?? "3D model"}
      auto-rotate
      camera-controls
      rotation-per-second={rotationSpeed}
      shadow-intensity="0.7"
      exposure="1.3"
      tone-mapping="commerce"
      environment-image="/studio-env.hdr"
      loading="eager"
      reveal="auto"
      style={{ display: "block", width: "100%", height: "100%", ...style }}
    />
  );
}
