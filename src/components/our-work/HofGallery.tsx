"use client";

import { useMemo, useState } from "react";
import { thumbSrcSet, CARD_SIZES } from "@/lib/thumbs";
import { WORK_PIECES, WorkMaterial } from "@/lib/work-gallery";

/** Filter values are the material names from the data and must stay in English
 *  or the filter stops matching. Display labels come from LABELS below. */
const FILTERS = ["All", "Crystal", "Metal", "Resin"] as const;

const LABELS: Record<string, Record<string, string>> = {
  en: { All: "All", Crystal: "Crystal", Metal: "Metal", Resin: "Resin" },
  ar: { All: "الكل", Crystal: "الكريستال", Metal: "المعدن", Resin: "الراتنج" },
};

/** Screen-reader text. The pieces are supplied without names, so the alt says
 *  what the image actually shows rather than inventing a client or occasion. */
const ALT: Record<string, Record<string, string>> = {
  en: {
    Crystal: "Commissioned crystal piece by Crystal Arc",
    Metal: "Commissioned metal piece by Crystal Arc",
    Resin: "Commissioned resin piece by Crystal Arc",
  },
  ar: {
    Crystal: "قطعة كريستال نُفِّذت بالتكليف لدى Crystal Arc",
    Metal: "قطعة معدنية نُفِّذت بالتكليف لدى Crystal Arc",
    Resin: "قطعة من الراتنج نُفِّذت بالتكليف لدى Crystal Arc",
  },
};

export default function HofGallery({ locale = "en" }: { locale?: "en" | "ar" }) {
  const label = (c: string) => LABELS[locale][c] ?? c;
  const [active, setActive] = useState<string>("All");

  const filtered = useMemo(
    () => (active === "All" ? WORK_PIECES : WORK_PIECES.filter((p) => p.material === active)),
    [active]
  );

  return (
    <div>
      {/* Filter tabs */}
      <div style={{ display: "flex", gap: "10px", flexWrap: "wrap", marginBottom: "48px" }}>
        {FILTERS.map((c) => (
          <button
            key={c}
            onClick={() => setActive(c)}
            aria-pressed={active === c}
            style={{
              padding: "10px 20px",
              fontSize: "11px",
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              fontWeight: 600,
              cursor: "pointer",
              border: "1px solid",
              borderColor: active === c ? "var(--color-gold)" : "rgba(26,21,18,0.18)",
              background: active === c ? "var(--color-gold)" : "transparent",
              color: active === c ? "#F7F2EB" : "var(--color-taupe)",
              transition: "background 0.25s, color 0.25s, border-color 0.25s",
            }}
          >
            {label(c)}
          </button>
        ))}
      </div>

      {/* The frames are landscape 3:2 studio shots on a plinth, so the tiles are
          landscape too. Cropping them into the old portrait 240x320 tile cut the
          plinth off at the base and pushed the piece against the top edge. */}
      <div
        style={{
          display: "grid",
          /* min() so the track can go below 300px on a phone. A bare
             minmax(300px,1fr) forced one column at 390px, and 61 tiles at one
             per row made this page 23 phone screens tall. */
          gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 168px), 1fr))",
          gap: "6px",
        }}
      >
        {filtered.map((p, i) => (
          <div
            key={p.src}
            style={{
              position: "relative",
              aspectRatio: "3 / 2",
              overflow: "hidden",
              background: "var(--color-s1)",
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={p.src}
              srcSet={thumbSrcSet(p.src)}
              sizes={CARD_SIZES}
              alt={ALT[locale][p.material]}
              /* the first row is above the fold on a desktop viewport */
              loading={i < 3 ? "eager" : "lazy"}
              decoding="async"
              style={{
                position: "absolute",
                inset: 0,
                width: "100%",
                height: "100%",
                objectFit: "cover",
                objectPosition: "center",
                filter: "brightness(0.94) saturate(0.95)",
                transition: "filter 0.4s, transform 0.5s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.filter = "brightness(1) saturate(1)";
                e.currentTarget.style.transform = "scale(1.04)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.filter = "brightness(0.94) saturate(0.95)";
                e.currentTarget.style.transform = "scale(1)";
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
