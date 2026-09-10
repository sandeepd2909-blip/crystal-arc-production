/**
 * Desktop image → phone-rendered counterpart.
 *
 * Several card grids change shape below their mobile breakpoint — a portrait
 * or square card becomes a landscape band — so `object-fit: cover` was taking
 * a centre slice out of a photo composed for a different frame and upscaling
 * it 1.4×–2.5×. The `-m` files are separate renders shot at the band's own
 * proportions, supplied 2026-08-27.
 *
 * Consumed through a `<picture>`: the `<source media>` wins below the
 * breakpoint, the plain `<img src>` stays the desktop file. Look-ups are keyed
 * on the desktop path so the card arrays don't each need a parallel field —
 * and so the two Materials grids, which show the same five materials from
 * different desktop photos, can share one set of phone renders.
 *
 * Breakpoints are per section and must match the CSS that reshapes the card:
 *   620px  homepage .pc cards            (home.css)
 *   640px  .ind-grid / .cat-card-inner / .mat-card-inner   (globals.css)
 *   560px  .hd-hero                      (globals.css)
 *
 * Filenames are suffixed rather than overwritten: netlify.toml caches
 * `/*.webp` for 30 days with no revalidation.
 */
const MOBILE_SRC: Record<string, string> = {
  // Trophies & Awards — five trophy types
  "/ta-cat-crystal.webp":     "/ta-cat-crystal-m.webp",
  "/ta-cat-plaques.webp":     "/ta-cat-plaques-m.webp",
  "/ta-cat-metal-mixed.webp": "/ta-cat-metal-mixed-m.webp",
  "/ta-cat-medals.webp":      "/ta-cat-medals-m.webp",
  "/ta-cat-sports.webp":      "/ta-cat-sports-m.webp",

  // Presentation Boxes — five box types
  "/box-corrugated.webp":       "/box-corrugated-m.webp",
  "/box-velvet.webp":           "/box-velvet-m.webp",
  "/box-pu-leather-v2.webp":    "/box-pu-leather-m.webp",
  "/box-single-double-v2.webp": "/box-single-double-m.webp",
  "/box-innovation-v2.webp":    "/box-innovation-m.webp",

  // Corporate Gifts — five occasions
  "/cg-giveaways.webp":   "/cg-giveaways-m.webp",
  "/cg-metal-v2.webp":    "/cg-metal-m.webp",
  "/cg-national-day.webp":"/cg-national-day-m.webp",
  "/cg-vvip-v2.webp":     "/cg-vvip-m.webp",
  "/cg-employee.webp":    "/cg-employee-m.webp",

  // Materials We Work With — one set of renders, both grids.
  // Trophies & Awards uses trophy-*/ta-mat-*, Corporate Gifts uses cg-mat-*.
  "/trophy-crystal.webp":       "/mat-crystal-m.webp",
  "/cg-mat-crystal.webp":       "/mat-crystal-m.webp",
  "/trophy-metal-mixed.webp":   "/mat-metal-m.webp",
  "/cg-mat-metal.webp":         "/mat-metal-m.webp",
  "/trophy-main.webp":          "/mat-resin-m.webp",
  "/cg-mat-resin.webp":         "/mat-resin-m.webp",
  "/ta-mat-wood.webp":          "/mat-wood-m.webp",
  "/cg-mat-wood.webp":          "/mat-wood-m.webp",
  "/ta-mat-mixed-hybrid.webp":  "/mat-mixed-hybrid-m.webp",
  "/cg-mat-mixed.webp":         "/mat-mixed-hybrid-m.webp",
};

/** Phone render for a desktop path, or undefined if the image has no variant. */
export const mobileSrc = (src: string): string | undefined => MOBILE_SRC[src];
