/**
 * Locale plumbing for the English / Arabic split.
 *
 * Both locales carry a prefix: English under `/en/*`, Arabic under `/ar/*`.
 *
 * English used to sit on bare paths (`/about`). Symmetric prefixes were chosen
 * before the domain cut over, while the cost was only a set of redirects — the
 * two locales are now peers rather than one being the implicit default, adding
 * a third language is a copy of the pattern rather than a re-architecture, and
 * no URL is ambiguous about what it serves.
 *
 * The cost is that `/` is no longer a page. It is a redirect, handled at the
 * CDN in `public/_redirects`, because `output: "export"` means there is no
 * server to decide anything at request time.
 *
 * `/ar` rather than the `/arabic` that was originally sketched: `ar` is the
 * ISO-639-1 code, it is what the `hreflang` annotations have to say anyway, and
 * search engines treat a matching path segment as a supporting signal. A path
 * that disagrees with its own hreflang is a small, permanent inconsistency.
 */

export const LOCALES = ["en", "ar"] as const;
export type Locale = (typeof LOCALES)[number];

export const DEFAULT_LOCALE: Locale = "en";
export const SITE_URL = "https://www.crystalarc.net";

/** BCP-47 tags, used for `<html lang>`, hreflang and OpenGraph. */
export const LOCALE_TAG: Record<Locale, string> = {
  en: "en-AE",
  ar: "ar-AE",
};

/**
 * Short labels for the language toggle. Deliberately not translated: the
 * toggle shows both languages at once, so each label must read correctly to a
 * speaker of that language regardless of which page they are on.
 */
export const LOCALE_SHORT: Record<Locale, string> = {
  en: "EN",
  ar: "عربي",
};

export function dirOf(locale: Locale): "ltr" | "rtl" {
  return locale === "ar" ? "rtl" : "ltr";
}

/**
 * Map a locale-free path (`/products/boxes`) onto a locale.
 * `/` becomes `/en` or `/ar`; there is no page at the bare root.
 */
export function localePath(locale: Locale, path: string): string {
  const clean = path === "/" ? "" : path.replace(/\/$/, "");
  return `/${locale}${clean}`;
}

/** Inverse of `localePath` — splits a real pathname into locale + bare path. */
export function splitLocale(pathname: string): { locale: Locale; path: string } {
  const p = pathname.replace(/\/$/, "") || "/";
  for (const l of LOCALES) {
    if (p === `/${l}`) return { locale: l, path: "/" };
    if (p.startsWith(`/${l}/`)) return { locale: l, path: p.slice(l.length + 1) };
  }
  // An unprefixed path is a pre-cutover URL that the CDN redirects. Treat it as
  // the default locale so anything server-rendering it still resolves.
  return { locale: DEFAULT_LOCALE, path: p };
}

/**
 * Which pages exist in Arabic so far.
 *
 * The translation is landing page by page, and until a page is live its Arabic
 * URL is a 404. Advertising a 404 in an hreflang annotation is worse than
 * advertising nothing — Google drops the whole cluster for that page and the
 * broken URL shows up in Search Console. Same reasoning applies to the
 * language switcher, which falls back to the Arabic homepage.
 *
 * Add paths here as each translation ships; `sitemap.ts` reads the same set.
 */
const AR_LIVE: ReadonlySet<string> = new Set([
  "/",
  "/products",
  "/products/trophies-awards",
  "/products/corporate-gifts",
  "/products/boxes",
  "/products/home-decor",
  "/about",
  "/craft",
  "/our-work",
  "/blog",
  "/careers",
  "/contact",
  "/privacy",
  "/terms",
]);

/**
 * Blog posts that exist in only one language.
 *
 * `AR_LIVE` lists fixed routes, but the blog is data-driven and can't be
 * enumerated here — `src/lib/blog.ts` owns the post JSON, and importing it
 * from this module would drag both content files into the client bundle for
 * every page, since `Nav` is a client component. The blog is fully paired as
 * of 2026-08-25 (55 English originals, 55 approved translations), so the pair
 * rule inverts cleanly: every `/blog/<slug>` has both languages *except* the
 * exceptions listed here.
 *
 * `saudi-national-day-crystal-arc` is the original Arabic post that predates
 * the translation project. It lives in `blog-posts.json` with `lang: "ar"`,
 * renders only under `/ar`, and has no English counterpart. Before this was
 * handled, the language toggle on that page pointed at a 404.
 *
 * Publishing a post in one language only? Add its slug to the matching set.
 */
const AR_ONLY_POSTS: ReadonlySet<string> = new Set([
  "saudi-national-day-crystal-arc",
]);
const EN_ONLY_POSTS: ReadonlySet<string> = new Set([]);

const blogSlug = (path: string): string | null => {
  const m = path.match(/^\/blog\/([^/]+)\/?$/);
  return m ? m[1] : null;
};

export function hasArabic(path: string): boolean {
  const clean = path === "/" ? "/" : path.replace(/\/$/, "");
  const slug = blogSlug(clean);
  if (slug) return !EN_ONLY_POSTS.has(slug);
  return AR_LIVE.has(clean);
}

/**
 * The mirror of `hasArabic`. Every fixed route exists in English — the site is
 * English-first — so only the blog can be Arabic-only.
 */
export function hasEnglish(path: string): boolean {
  const slug = blogSlug(path === "/" ? "/" : path.replace(/\/$/, ""));
  return slug ? !AR_ONLY_POSTS.has(slug) : true;
}

/**
 * The href to use for an in-site link, given the locale you are currently on.
 *
 * Identical to `localePath` except that it will not produce a URL for an
 * Arabic page that has not been written yet — it falls back to the English
 * one. Use this for every navigational link; use `localePath` only where you
 * genuinely want the locale's URL whether or not it resolves (canonicals,
 * hreflang, the sitemap, all of which are already guarded by `hasArabic`).
 *
 * Without this the Arabic nav pointed at /ar/products/trophies-awards and
 * every other untranslated route, so the chrome that is supposed to be
 * identical across locales was quietly serving 404s on the Arabic side.
 */
export function localeHref(locale: Locale, path: string): string {
  if (locale === "ar" && !hasArabic(path)) return localePath("en", path);
  return localePath(locale, path);
}

/**
 * The `alternates` block for a page's metadata: self-referencing canonical plus
 * the hreflang annotations and `x-default`.
 *
 * Google requires these to be reciprocal — every language version must list
 * every other one, itself included — or the cluster is ignored outright.
 */
export function alternatesFor(locale: Locale, path: string) {
  const languages: Record<string, string> = {
    "en-AE": `${SITE_URL}${localePath("en", path)}`,
  };
  if (hasArabic(path)) {
    languages["ar-AE"] = `${SITE_URL}${localePath("ar", path)}`;
  }
  languages["x-default"] = `${SITE_URL}${localePath("en", path)}`;

  return {
    canonical: `${SITE_URL}${localePath(locale, path)}`,
    languages,
  };
}

/** Every route on the site, locale-free. Drives the sitemap and the switcher. */
export const ROUTES = [
  "/",
  "/about",
  "/craft",
  "/our-work",
  "/products",
  "/products/trophies-awards",
  "/products/corporate-gifts",
  "/products/boxes",
  "/products/home-decor",
  "/blog",
  "/careers",
  "/contact",
  "/privacy",
  "/terms",
] as const;
