/**
 * RSS feed for the blog.
 *
 * The site had no feed of any kind. Beyond human subscribers, a feed is one of
 * the standard ways crawlers — search and AI alike — discover new writing and
 * re-check old writing without re-crawling 199 pages. It costs almost nothing
 * to publish and it is the cheapest distribution channel on the site.
 *
 * Both languages live in one feed, each item tagged with its own `xml:lang`,
 * because the Arabic posts are not translations of a separate publication —
 * they are the same blog. Readers who want one language can filter on it.
 *
 * `dynamic = "force-static"` because this is a static export: the file is
 * written once at build time, so a new post needs a rebuild to appear.
 */
import { SITE_URL, localePath, LOCALES } from "@/lib/i18n";
import { postsFor } from "@/lib/blog";

export const dynamic = "force-static";

/** Escape the five characters XML actually cares about. */
const esc = (s: string) =>
  s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
   .replace(/"/g, "&quot;").replace(/'/g, "&apos;");

export function GET() {
  const items = LOCALES.flatMap((locale) =>
    postsFor(locale).map((p) => ({
      locale,
      url: `${SITE_URL}${localePath(locale, `/blog/${p.slug}`)}`,
      title: p.seoTitle || p.title,
      description: p.description ?? "",
      date: new Date(p.date),
      hero: p.hero ? `${SITE_URL}${p.hero}` : null,
    }))
  ).sort((a, b) => b.date.getTime() - a.date.getTime());

  const newest = items[0]?.date ?? new Date();

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom" xmlns:dc="http://purl.org/dc/elements/1.1/">
  <channel>
    <title>Crystal Arc — Journal</title>
    <link>${SITE_URL}/en/blog</link>
    <description>Writing on trophies, awards and corporate gifts from Crystal Arc, a Dubai manufacturer.</description>
    <language>en-AE</language>
    <lastBuildDate>${newest.toUTCString()}</lastBuildDate>
    <atom:link href="${SITE_URL}/feed.xml" rel="self" type="application/rss+xml" />
${items.map((i) => `    <item>
      <title>${esc(i.title)}</title>
      <link>${i.url}</link>
      <guid isPermaLink="true">${i.url}</guid>
      <pubDate>${i.date.toUTCString()}</pubDate>
      <description>${esc(i.description)}</description>
      <dc:language>${i.locale === "ar" ? "ar-AE" : "en-AE"}</dc:language>${i.hero ? `
      <enclosure url="${i.hero}" type="image/webp" length="0" />` : ""}
    </item>`).join("\n")}
  </channel>
</rss>
`;

  return new Response(body, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
}
