import posts from "@/content/blog-posts.json";
import translations from "@/content/blog-posts-ar.json";
import { Locale, SITE_URL, localePath, LOCALE_TAG } from "@/lib/i18n";

/**
 * The blog, migrated from the Webflow site that www.crystalarc.net still
 * serves. Fifty-six posts, Dec 2022 – Sep 2025, ~69,000 words.
 *
 * Slugs are preserved exactly. The old URLs were `/blog/<slug>` and are the
 * ones with three years of accrued links and rankings behind them; they 301 to
 * `/en/blog/<slug>` from `public/_redirects`. Changing a slug here silently
 * breaks that chain, so don't.
 *
 * Bodies are sanitised HTML — `<script>`, `<iframe>`, Webflow classes and
 * inline styles stripped, internal links rewritten onto the prefixed routes,
 * and every image downloaded and converted to webp under /public/blog so
 * nothing depends on the Webflow CDN outliving the subscription.
 */
export type BlogPost = {
  slug: string;
  title: string;
  /** <title> tag: trimmed to ~58 chars. `title` stays full for h1/OG. */
  seoTitle: string;
  date: string;
  dateText: string;
  description: string;
  lang: "en" | "ar";
  hero: string | null;
  /** Describes the hero image. Written per locale — the Arabic post inherits
   *  the hero itself from its English original but needs its own alt. */
  heroAlt?: string;
  heroAltAr?: string;
  words: number;
  readingMinutes: number;
  html: string;
};

const ALL = posts as BlogPost[];

/**
 * An Arabic translation of an English post.
 *
 * Kept in its own file rather than as more entries in `blog-posts.json`, for
 * two reasons: the migrated English data stays exactly as it was scraped, and
 * a reviewer can read a whole wave of Arabic as one diff without the English
 * interleaved.
 *
 * Everything not listed here — date, hero image, word count — is inherited
 * from the English original, so a translation cannot drift from the post it
 * translates or quietly acquire a different publication date.
 */
export type BlogTranslation = {
  slug: string;
  /**
   * False until a human has read it. Nothing unready is rendered, linked,
   * put in the sitemap or named in hreflang — so a half-reviewed wave is
   * invisible rather than half-published.
   */
  ready: boolean;
  title: string;
  seoTitle: string;
  description: string;
  html: string;
};

const AR = translations as BlogTranslation[];
const READY = new Map(AR.filter((t) => t.ready).map((t) => [t.slug, t]));

/** True when `slug` has an approved Arabic version of an English original. */
function hasTranslation(slug: string): boolean {
  return READY.has(slug);
}

/** An approved translation rendered as a post, inheriting the original's data. */
function asPost(t: BlogTranslation, source: BlogPost): BlogPost {
  return {
    ...source,
    lang: "ar",
    title: t.title,
    seoTitle: t.seoTitle,
    description: t.description,
    html: t.html,
    words: t.html.replace(/<[^>]+>/g, " ").split(/\s+/).filter(Boolean).length,
  };
}

/**
 * Posts in a given language.
 *
 * English is what was migrated. Arabic is the one post originally written in
 * Arabic plus every approved translation, newest first — so the Arabic blog
 * grows as waves are signed off rather than all at once.
 */
export function postsFor(locale: Locale): BlogPost[] {
  const native = ALL.filter((p) => p.lang === locale);
  if (locale !== "ar") return native;

  const translated = ALL.flatMap((p) => {
    const t = p.lang === "en" ? READY.get(p.slug) : undefined;
    return t ? [asPost(t, p)] : [];
  });
  return [...native, ...translated].sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function postBySlug(locale: Locale, slug: string): BlogPost | undefined {
  return postsFor(locale).find((p) => p.slug === slug);
}

export function allSlugs(locale: Locale): string[] {
  return postsFor(locale).map((p) => p.slug);
}

/** Most recent posts other than the one given — the "keep reading" strip. */
export function relatedPosts(locale: Locale, slug: string, n = 3): BlogPost[] {
  return postsFor(locale).filter((p) => p.slug !== slug).slice(0, n);
}

export function formatDate(date: string, locale: Locale): string {
  const d = new Date(date + "T00:00:00Z");
  return new Intl.DateTimeFormat(locale === "ar" ? "ar-AE" : "en-GB", {
    day: "numeric", month: "long", year: "numeric", timeZone: "UTC",
  }).format(d);
}

/** Article schema. `datePublished` is required for the rich result. */
export function articleSchema(p: BlogPost, locale: Locale) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: p.title,
    description: p.description,
    datePublished: p.date,
    dateModified: p.date,
    inLanguage: LOCALE_TAG[locale],
    wordCount: p.words,
    image: p.hero ? `${SITE_URL}${p.hero}` : `${SITE_URL}/logo.png`,
    author: { "@type": "Organization", name: "Crystal Arc", url: `${SITE_URL}/en` },
    publisher: {
      "@type": "Organization",
      name: "Crystal Arc",
      logo: { "@type": "ImageObject", url: `${SITE_URL}/logo.png` },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${SITE_URL}${localePath(locale, `/blog/${p.slug}`)}`,
    },
  };
}

/**
 * hreflang for a post, which is NOT the symmetric case the rest of the site is.
 *
 * A post exists in one language or two, and which it is changes per post and
 * changes again every time a translation wave is approved. The shared
 * `alternatesFor` always names an English URL, which for the Arabic-only post
 * is a 404 — and advertising a 404 in hreflang makes Google drop the whole
 * cluster, so the pair is built from what actually exists.
 *
 * Only *approved* translations count. Naming an unready Arabic URL would point
 * Google at a page that is not built.
 */
export function blogAlternates(locale: Locale, slug: string) {
  const url = `${SITE_URL}${localePath(locale, `/blog/${slug}`)}`;
  const english = ALL.find((p) => p.slug === slug && p.lang === "en");
  const paired = Boolean(english) && hasTranslation(slug);

  if (!paired) {
    // Single-language post: its own x-default, nothing to choose between.
    return { canonical: url, languages: { [LOCALE_TAG[locale]]: url, "x-default": url } };
  }

  const en = `${SITE_URL}${localePath("en", `/blog/${slug}`)}`;
  const ar = `${SITE_URL}${localePath("ar", `/blog/${slug}`)}`;
  return {
    canonical: url,
    languages: { "en-AE": en, "ar-AE": ar, "x-default": en },
  };
}
