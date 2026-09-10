/**
 * Responsive sources for images rendered into card grids.
 *
 * `output: "export"` means `next/image` does nothing — every `<img>` gets the
 * file it is pointed at, at full size. The blog index was therefore sending
 * 1600px originals into 252px thumbnails: 1.75 MB of images on a phone, all 35
 * of them oversized. `scripts/build-thumbs.mjs` writes 400px and 800px
 * derivatives beside each source and this builds the `srcset` that lets the
 * browser pick.
 *
 * Only call this where the image is genuinely small on screen. A hero wants the
 * full file — handing it a 400px option invites the browser to choose it on a
 * narrow phone and render it soft.
 */

import manifest from "@/content/thumbs.json";

/** Which widths were written for each source, and how wide the master is. */
const AVAILABLE = manifest as Record<string, { w: number[]; m: number }>;

const derivative = (src: string, w: number) =>
  src.replace(/\.(webp|jpg|jpeg|png)$/i, `-${w}.webp`);

/**
 * A `srcset` covering the derivatives plus the original as the largest option.
 * Returns undefined for formats we do not generate (SVG), so callers can spread
 * it and fall back to plain `src` cleanly.
 */
export function thumbSrcSet(src?: string | null): string | undefined {
  if (!src || /\.svg$/i.test(src)) return undefined;
  const entry = AVAILABLE[src];
  if (!entry?.w?.length) return undefined;    // nothing smaller exists; use src
  // The master's real width, not an assumed 1600. The case study photography
  // is 1400px; advertising 1600w would have the browser reach for the master
  // on screens that the 800px derivative already covers.
  return [...entry.w.map((w) => `${derivative(src, w)} ${w}w`), `${src} ${entry.m}w`].join(", ");
}

/**
 * `sizes` per context. These are measured, not guessed — an approximate value
 * is fine but a wrong one is worse than none, because the browser trusts it.
 *
 * The first version of this said `92vw` for everything. The blog thumbnail is
 * 84 CSS px on a phone, so the browser dutifully fetched a 1600px file for a
 * postage stamp and the page weight did not move at all.
 */

/** Blog index and related-post cards: 84 CSS px on a phone, 200 on desktop. */
export const BLOG_THUMB_SIZES = "(max-width: 620px) 96px, 220px";

/**
 * Case study and work cards: 348 CSS px on a phone — a full-width card — which
 * at 3x wants just over 1000 device px, so these legitimately take the larger
 * derivative on mobile and the smaller one on desktop.
 */
export const CARD_SIZES = "(max-width: 620px) 92vw, (max-width: 960px) 46vw, 380px";
