import type { MetadataRoute } from "next";
import { SITE_URL, localePath, hasArabic, LOCALES } from "@/lib/i18n";
import { postsFor, blogAlternates } from "@/lib/blog";
import { CASE_STUDIES, caseStudyAlternates } from "@/lib/case-studies";
import { topicsWithPosts } from "@/lib/blog-tags";

export const dynamic = "force-static";

/**
 * Entries carry `images` where the page is genuinely about what is pictured —
 * every case study frame, every blog hero. This site sells objects people
 * choose by eye, and roughly 200 photographs were never declared to image
 * search at all. Google does not index what it is not told about, and a
 * product photograph is a search result in its own right.
 *
 * Priorities and change frequencies are per *page*, not per language — the
 * Arabic version of a page is the same page, so it inherits both.
 *
 * Each entry carries an `alternates.languages` block. Google reads hreflang
 * from the sitemap as readily as from the markup, and having it in both places
 * is the recommended belt-and-braces: the markup annotations only work once a
 * page has been crawled, whereas the sitemap declares the cluster up front.
 */
const PAGES: Array<{ path: string; priority: number; changeFrequency: "monthly" | "yearly" }> = [
  { path: "/", priority: 1, changeFrequency: "monthly" },
  { path: "/products", priority: 0.9, changeFrequency: "monthly" },
  { path: "/products/trophies-awards", priority: 0.9, changeFrequency: "monthly" },
  { path: "/products/corporate-gifts", priority: 0.9, changeFrequency: "monthly" },
  { path: "/products/boxes", priority: 0.8, changeFrequency: "monthly" },
  { path: "/products/home-decor", priority: 0.7, changeFrequency: "monthly" },
  { path: "/our-work", priority: 0.8, changeFrequency: "monthly" },
  { path: "/about", priority: 0.7, changeFrequency: "yearly" },
  { path: "/craft", priority: 0.6, changeFrequency: "yearly" },
  { path: "/blog", priority: 0.7, changeFrequency: "monthly" },
  { path: "/careers", priority: 0.4, changeFrequency: "monthly" },
  { path: "/contact", priority: 0.8, changeFrequency: "yearly" },
  { path: "/privacy", priority: 0.3, changeFrequency: "yearly" },
  { path: "/terms", priority: 0.3, changeFrequency: "yearly" },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const entries: MetadataRoute.Sitemap = [];

  for (const { path, priority, changeFrequency } of PAGES) {
    const arLive = hasArabic(path);
    const languages: Record<string, string> = {
      "en-AE": `${SITE_URL}${localePath("en", path)}`,
    };
    if (arLive) languages["ar-AE"] = `${SITE_URL}${localePath("ar", path)}`;
    languages["x-default"] = `${SITE_URL}${localePath("en", path)}`;

    entries.push({
      url: `${SITE_URL}${localePath("en", path)}`,
      lastModified,
      changeFrequency,
      priority,
      alternates: { languages },
    });

    if (arLive) {
      entries.push({
        url: `${SITE_URL}${localePath("ar", path)}`,
        lastModified,
        changeFrequency,
        priority,
        alternates: { languages },
      });
    }
  }

  /**
   * Blog posts are appended separately because they are the one part of the
   * site whose language pairing varies per URL: a post may exist in one
   * language or in both, and which it is changes as translation waves are
   * approved.
   *
   * `blogAlternates` is the single source of that truth — it is what the pages
   * themselves render into their <head>. Duplicating the logic here is how the
   * sitemap and the markup end up disagreeing, which is worse than either being
   * wrong on its own.
   */
  for (const locale of LOCALES) {
    for (const post of postsFor(locale)) {
      const { canonical, languages } = blogAlternates(locale, post.slug);
      entries.push({
        url: canonical,
        lastModified: new Date(post.date),
        changeFrequency: "yearly",
        priority: 0.5,
        alternates: { languages },
        images: post.hero ? [`${SITE_URL}${post.hero}`] : undefined,
      });
    }
  }

  /**
   * Topic archives. Only the topics that actually have posts in a language are
   * listed, so the sitemap asks the same question the route does rather than
   * advertising a URL that was never generated.
   */
  for (const locale of LOCALES) {
    for (const t of topicsWithPosts(locale)) {
      entries.push({
        url: `${SITE_URL}${localePath(locale, `/blog/topic/${t.slug}`)}`,
        lastModified,
        changeFrequency: "monthly",
        priority: 0.4,
      });
    }
  }

  /**
   * Case studies. Arabic editions arrive in batches, so each study declares
   * only the languages it actually has — caseStudyAlternates is the same
   * predicate the pages use, so the sitemap and the markup cannot disagree.
   */
  for (const cs of CASE_STUDIES) {
    for (const locale of cs.ar ? (["en", "ar"] as const) : (["en"] as const)) {
      const { canonical, languages } = caseStudyAlternates(locale, cs.slug);
      entries.push({
        url: `${SITE_URL}${canonical}`,
        lastModified,
        images: cs.images.filter(Boolean).map((i) => `${SITE_URL}${i}`),
        changeFrequency: "yearly",
        priority: 0.6,
        ...(languages
          ? { alternates: { languages: Object.fromEntries(Object.entries(languages).map(([k, v]) => [k, `${SITE_URL}${v}`])) } }
          : {}),
      });
    }
  }

  return entries;
}
