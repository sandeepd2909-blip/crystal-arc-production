"use client";

import { useState } from "react";
import Link from "next/link";
import CaseFrame from "@/components/our-work/CaseFrame";
import type { CaseStudy } from "@/lib/case-studies";

/**
 * The case study index.
 *
 * Grouped by sector in headed blocks first, which broke on the two sectors
 * holding a single study: Aviation and Media each rendered one card into a
 * three-column grid, leaving two empty cells and a heading-sized gap before
 * the next sector. It read as a layout fault rather than a category with one
 * entry in it, and it pushed the other 27 studies well below the fold.
 *
 * One grid, filtered instead. Nothing can orphan a row, the whole body of work
 * is visible at once, and the sector is still there as a chip and on every
 * card. Same pattern as HofGallery, which filters the piece archive by
 * material — so the two grids on this page behave the same way.
 *
 * Counts are rendered from the data rather than typed, so a study added to the
 * JSON appears here with its chip count already correct.
 */
/** Arabic display figures use Arabic-Indic digits site-wide; calendar years,
 *  phone numbers and sequence markers stay Latin. Chip counts are figures. */
const arDigits = (n: number) =>
  String(n).replace(/\d/g, (d) => "٠١٢٣٤٥٦٧٨٩"[+d]);

export default function CaseStudyGrid({
  items,
  sectors,
  basePath,
  allLabel = "All",
  sectorLabels,
}: {
  items: CaseStudy[];
  sectors: string[];
  /** Locale-prefixed index path, e.g. "/en/our-work" — a string, not a
   *  builder: functions cannot cross the server/client boundary, and passing
   *  one fails the static export rather than any runtime check. */
  basePath: string;
  allLabel?: string;
  /** Sector display names per locale. The sector value itself stays English —
   *  it is the data key, and translating it would break the filter. */
  sectorLabels?: Record<string, string>;
}) {
  const [active, setActive] = useState<string>("all");
  const shown = active === "all" ? items : items.filter((c) => c.sector === active);

  const chips = [
    { key: "all", label: allLabel, n: items.length },
    ...sectors
      .map((s) => ({ key: s, label: sectorLabels?.[s] ?? s, n: items.filter((c) => c.sector === s).length }))
      .filter((c) => c.n > 0),
  ];

  return (
    <>
      <div className="cs-filters" role="group" aria-label="Filter case studies by sector">
        {chips.map((c) => (
          <button
            key={c.key}
            type="button"
            className="cs-filter"
            aria-pressed={active === c.key}
            onClick={() => setActive(c.key)}
          >
            {c.label} <span className="cs-filter-n">{sectorLabels ? arDigits(c.n) : c.n}</span>
          </button>
        ))}
      </div>

      <div className="cs-grid">
        {shown.map((c) => (
          <Link key={c.slug} prefetch={false} href={`${basePath}/${c.slug}`} className="cs-card">
            <CaseFrame src={c.images[0]} alt={`${c.client} — ${c.ar?.tagline ?? c.tagline}`} ratio="1 / 1" card />
            <div className="cs-card-body">
              <div className="cs-card-sector">{sectorLabels?.[c.sector] ?? c.sector}</div>
              <div className="cs-card-client">{sectorLabels ? (c.ar?.client ?? c.client) : c.client}</div>
              <p className="cs-card-line">{sectorLabels ? (c.ar?.tagline ?? c.tagline) : c.tagline}</p>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}
