/**
 * Client case studies.
 *
 * Twenty-nine commissioned projects, supplied as a single Google Doc in August
 * 2026 and extracted into `src/content/case-studies.json`. This is the content
 * nobody else can write — the pieces are real, the clients are named, and the
 * process detail is specific to each commission.
 *
 * Three things about the source worth knowing before editing the JSON:
 *
 * The document carried six "Client Testimonial (Dummy)" placeholders. They are
 * dropped, not carried through as filler — a fabricated quote attributed to
 * Dubai Police or a defence ministry is not a placeholder, it is an invented
 * endorsement.
 *
 * Section headings were near-identical across all 29 — "Design, Production & * Execution" appeared 29 times, "Outcome" 22, "Material, Finish & Presence" 20.
 * Twenty-nine pages sharing one heading set wastes the strongest on-page signal
 * they have and reads as templated. Each heading was rewritten to describe what
 * that section actually covers for that client, carrying the page's keyword
 * cluster where it fits naturally. `hOriginal` keeps what the document said.
 *
 * `keywords` is not decoration: each study is mapped to the cluster from the
 * Google Ads brief (Oct 2025 – Feb 2026 conversion data) that it is the honest
 * landing page for, and `productSlug` points at the product page it supports.
 * Sports commissions carry the sports-trophy cluster, Saudi work carries the
 * Riyadh and Kingdom terms, and so on.
 *
 * IMAGES ARE NOT WIRED YET. `images` holds the intended filenames under
 * `/public/case-studies/`; the files themselves are still to be supplied. The
 * page renders without them and picks them up when they land — `sourceImages`
 * records which image in the original document belongs to which study, so the
 * mapping survives. Those originals are mostly under 1000px wide (Google Docs
 * re-compresses on export) and are not good enough to ship.
 */
import data from "@/content/case-studies.json";

export type CaseSection = {
  /** Rewritten, client-specific. See the note above. */
  h: string;
  /** What the source document called it. Kept for provenance, not rendered. */
  hOriginal?: string | null;
  p: string[];
};

/** The Arabic edition of a study. Written natively, not translated. */
export type CaseStudyAr = {
  /** The client's own Arabic name. Falls back to the Latin name where the
   *  organisation has no Arabic form — Adidas and Kayali trade under the
   *  Latin mark in the Gulf too. */
  client?: string;
  seoTitle: string;
  description: string;
  tagline: string;
  intro: string;
  sector: string;
  market: string;
  specs: Record<string, string>;
  sections: CaseSection[];
  faqs: { q: string; a: string }[];
};

export type CaseStudy = {
  slug: string;
  client: string;
  sector: "Aviation" | "Sports" | "Government" | "Corporate" | "Media";
  market: "UAE" | "KSA";
  /** Product page this study supports, for the internal link. */
  productSlug: string;
  keywords: string[];
  /** Live image paths, `/case-studies/<slug>-<n>.webp`. images[0] is the hero;
   *  images[1..] fill the story sections in order, and a section with no image
   *  of its own renders as a single copy column rather than a half-empty grid.
   *
   *  Never list a path with no file behind it: the browser renders a broken
   *  <img> and paints the alt text as visible page copy. That shipped once. */
  images: string[];
  /** Parallel to `images`. A string where the frame is shared process
   *  photography and must describe the work rather than the client — the
   *  factory frames are reused across studies, so calling one "Kayali — Cutting *  and Hand-Polishing" would be a claim about a photograph of someone else's *  job. `null` where the frame really is this client's own piece, and the
   *  page describes it from the client name and section heading instead. */
  imageAlts: (string | null)[];
  /** The same, in Arabic. Without it the Arabic pages carry English alt text. */
  imageAltsAr: (string | null)[];
  /** Original filenames as supplied, kept so a re-export can be traced back. */
  sourceImages: string[];
  seoTitle: string;
  description: string;
  intro: string;
  /** One line, Thomas-Lyte style — sits under the client name in the hero. */
  tagline: string;
  /** Client logo under /public/logos/, or null where we do not hold one. */
  logo: string | null;
  /** At-a-glance strip. Materials are read out of the narrative, not typed. */
  facts: { materials: string[]; years: string[] };
  /** Specification strip, rendered as-is in document order. */
  specs: Record<string, string>;
  /** Answers derived from this study's own content — never invented. */
  faqs: { q: string; a: string }[];
  /** Present only once the Arabic edition is written. */
  ar?: CaseStudyAr;
  sections: CaseSection[];
  words: number;
};

export const CASE_STUDIES = data as CaseStudy[];

/** Display order for the index: the sectors, in the order the brand leads with. */
/**
 * Publication dates for the case study collection.
 *
 * The Article schema on these pages was shipping with no date at all, which
 * leaves a search or answer engine nothing to judge freshness by — 58 of the
 * site's pages had no `dateModified` of any kind. These are collection-level
 * rather than per-study because the studies were written and published as one
 * body of work, which is the truth of it; inventing a separate date per study
 * would be dressing.
 *
 * Bump PUBLISHED only if the collection is genuinely republished. Bump UPDATED
 * whenever the copy or the photography changes — a stale `dateModified` is a
 * worse signal than none, because it claims currency the page does not have.
 */
export const CASE_STUDIES_PUBLISHED = "2026-08-30";
export const CASE_STUDIES_UPDATED = "2026-09-02";

export const SECTORS = ["Aviation", "Sports", "Government", "Corporate", "Media"] as const;

export function caseStudyBySlug(slug: string): CaseStudy | undefined {
  return CASE_STUDIES.find((c) => c.slug === slug);
}

export function allCaseStudySlugs(): string[] {
  return CASE_STUDIES.map((c) => c.slug);
}

/**
 * Two other studies to surface at the foot of a case study. Same sector first,
 * because a visitor reading about a championship trophy wants another one — not
 * whichever study happens to sit next in the array.
 */
/**
 * Which studies exist in Arabic.
 *
 * The Arabic editions land in batches, exactly as the blog translations did,
 * so at any moment some studies are paired and some are English-only. Nothing
 * may advertise an Arabic URL that has not been written: an hreflang pointing
 * at a 404 makes Google drop the cluster for the page, which is worse than
 * declaring no alternate at all. This predicate is the single source of that
 * truth — the routes, the metadata and the sitemap all read it.
 */
export function hasArabicCaseStudy(slug: string): boolean {
  return Boolean(caseStudyBySlug(slug)?.ar);
}

export function arabicCaseStudies(): CaseStudy[] {
  return CASE_STUDIES.filter((c) => c.ar);
}

/** Canonical + hreflang for a study, honest about which languages exist. */
export function caseStudyAlternates(locale: "en\" | \"ar", slug: string) {
  const en = `/en/our-work/${slug}`;
  const ar = `/ar/our-work/${slug}`;
  const self = locale === "ar" ? ar : en;
  if (!hasArabicCaseStudy(slug)) {
    return { canonical: self, languages: undefined };
  }
  return { canonical: self, languages: { "en-AE": en, "ar-AE": ar, "x-default": en } };
}

export function relatedCaseStudies(slug: string, n = 2): CaseStudy[] {
  const self = caseStudyBySlug(slug);
  if (!self) return [];
  const pool = CASE_STUDIES.filter((c) => c.slug !== slug);
  const same = pool.filter((c) => c.sector === self.sector);
  const rest = pool.filter((c) => c.sector !== self.sector);
  return [...same, ...rest].slice(0, n);
}
