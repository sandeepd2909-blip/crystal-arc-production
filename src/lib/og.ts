/**
 * Social share cards.
 *
 * Facebook, LinkedIn and WhatsApp render `og:image` into a ~1.91:1 frame and
 * skip the preview entirely when the file is small. The site's photography is
 * mostly portrait or square product renders — `factory-1.webp` is 1600x2385,
 * most legacy blog heroes are 300x300 — so before this existed, 127 of 139
 * pages shared as a mangled crop or as a bare link with no card at all. Several
 * also declared `og:image:width/height` of 1200x630 against a portrait file,
 * which is what the platforms lay out against.
 *
 * `public/og/*.jpg` are purpose-built 1200x630 JPEGs, cover-cropped from the
 * source with sharp's `attention` strategy. JPEG, not WebP: LinkedIn and older
 * WhatsApp builds do not reliably render WebP previews, and a share card is one
 * of the few places where the compatibility matters more than the bytes.
 *
 * Regenerate with `npm run og` after adding or replacing a source image.
 *
 * Sources under ~1100px wide are deliberately absent — a card upscaled from a
 * 500px original looks worse than the house default, so those fall back.
 */
import { SITE_URL } from "@/lib/i18n";

/** Cards that exist in `public/og/`. Written by `scripts/build-og.mjs`. */
export const OG_CARDS: ReadonlySet<string> = new Set([
  "blog-b014", "blog-b015", "blog-b018", "blog-b019", "blog-b020", "blog-b021",
  "blog-b024", "blog-b026", "blog-b027", "blog-best-materials-for-trophies-corporate-gifts", "blog-breaking-the-mould-avant-garde-trophy-designs-for-modern-events", "blog-celebrate-saudi-national-day-crystal-arc-trophies-custom-gifts",
  "blog-crystal-trophy-design-in-2025-why-hybrid-materials-are-leading-the-way", "blog-custom-trophies-esports-quality-awards-competitive-gaming-events", "blog-premium-trophies-and-awards-why-craftsmanship-is-still-king", "blog-riyadh-recognition-premium-trophies-crystal-arc-saudi-vision-2030", "blog-saudi-national-day-crystal-arc", "blog-timeless-beauty-why-clear-crystal-trophies-are-always-in-style",
  "blog-top-5-corporate-recognition-trends-for-2025", "blog-trophy-shop-in-dubai", "box-banner", "case-studies-1-billion-followers-summit-1-846c578f", "case-studies-abu-dhabi-customs-1-d448e3d1", "case-studies-abu-dhabi-grand-prix-1-fa47e747",
  "case-studies-adidas-1-4ad47c35", "case-studies-adnoc-1-a3a4a269", "case-studies-al-rajhi-bank-1-a73403b2", "case-studies-association-of-tennis-professionals-1-2c7812ae", "case-studies-big-5-construct-saudi-1-3bb56da1", "case-studies-dp-world-ilt20-1-785b6afe",
  "case-studies-dubai-marathon-1-5a640721", "case-studies-dubai-police-1-37ca8db3", "case-studies-emirates-1-67a7cee1", "case-studies-ferrari-owners-club-uae-1-0df77ae7", "case-studies-fifa-arab-cup-1-bed4650e", "case-studies-fujairah-fine-arts-academy-1-65757f20",
  "case-studies-fujairah-international-airport-1-22d1b2e0", "case-studies-kayali-1-f62eaf24", "case-studies-maersk-1-dad41a8b", "case-studies-mahd-sports-academy-1-63f13b3e", "case-studies-makkah-excellence-award-1-23e6b23a", "case-studies-makkah-route-initiative-1-3babc99f",
  "case-studies-ministry-of-defense-saudi-arabia-1-e1cbc9e4", "case-studies-museum-of-the-future-1-2d1248e1", "case-studies-nafis-1-420b2d59", "case-studies-royal-commission-jubail-yanbu-1-ad2d66c9", "case-studies-saudi-esports-federation-1-3b69c637", "case-studies-saudi-vision-2030-1-12590960",
  "case-studies-saudia-cargo-1-732b7f95", "case-studies-sharjah-sports-council-1-0a50720c", "cg-banner", "cg-national-day-m", "factory-1", "factory-3",
  "hd-hero", "occ-government-m", "ta-cat-medals-m", "trophy-main", "work-crystal-01", "work-crystal-03",
  "work-crystal-04", "work-crystal-05", "work-crystal-07", "work-crystal-09", "work-crystal-11", "work-crystal-12",
  "work-crystal-13", "work-crystal-15", "work-crystal-17", "work-crystal-19", "work-crystal-20", "work-metal-01",
  "work-resin-01", "work-resin-03", "work-resin-05", "work-resin-08", "work-resin-12", "work-resin-14",
  "work-resin-17",
]);

/** House card, used whenever a page's own image is too small to crop sharply. */
export const OG_DEFAULT = "/og/factory-1.jpg";

/**
 * The share card for a source image path, absolute so the crawlers resolve it.
 * `/blog/b018.webp` and `/factory-1.webp` both map to their `/og/` card;
 * anything without one gets the house card.
 */
export function ogUrl(src?: string | null): string {
  if (!src) return `${SITE_URL}${OG_DEFAULT}`;
  // Same derivation as scripts/build-og.mjs: drop the leading slash and the
  // extension, then flatten the path with dashes. /work/crystal-01.webp keys
  // to "work-crystal-01", which is the filename the builder writes.
  const key = src.replace(/^\//, "").replace(/\.[a-z0-9]+$/i, "").replace(/\//g, "-");
  return `${SITE_URL}${OG_CARDS.has(key) ? `/og/${key}.jpg` : OG_DEFAULT}`;
}

/** Ready-made `openGraph.images` entry — always 1200x630, always truthful. */
export function ogImages(src: string | null | undefined, alt: string) {
  return [{ url: ogUrl(src), width: 1200, height: 630, alt }];
}
