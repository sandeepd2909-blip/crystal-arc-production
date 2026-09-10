/**
 * Blog topics.
 *
 * The blog was 55 posts in one flat reverse-chronological list: no way to
 * browse a subject, and nothing clustering the posts topically for search.
 *
 * The topic set is deliberately small — nine, each one something a reader
 * would recognise as a section rather than a keyword shard. There is no
 * "Trophies & Awards" topic on purpose: an early pass had it, and it landed on
 * 48 of 56 posts. A tag covering the whole blog tells a reader nothing and
 * clusters nothing. This is a blog about trophies; that is the site, not a
 * filter within it.
 *
 * The mapping is generated — `npm run blog-tags` — from titles and
 * descriptions, so a new post is untagged until the map is rebuilt.
 */
import data from "@/content/blog-tags.json";
import type { Locale } from "@/lib/i18n";
import { postsFor, type BlogPost } from "@/lib/blog";

export type Topic = { slug: string; en: string; ar: string };

const TOPICS = (data as { topics: Topic[] }).topics;
const BY_SLUG = (data as { bySlug: Record<string, string[]> }).bySlug;

export const allTopics = (): Topic[] => TOPICS;

export const topicBySlug = (slug: string): Topic | undefined =>
  TOPICS.find((t) => t.slug === slug);

export const topicLabel = (t: Topic, locale: Locale): string =>
  locale === "ar" ? t.ar : t.en;

/** Topics for one post, in the order the generator ranked them. */
export function topicsForPost(slug: string): Topic[] {
  return (BY_SLUG[slug] ?? []).map(topicBySlug).filter(Boolean) as Topic[];
}

/** Posts under a topic, newest first, in the requested language only. */
export function postsForTopic(locale: Locale, topicSlug: string): BlogPost[] {
  return postsFor(locale)
    .filter((p) => (BY_SLUG[p.slug] ?? []).includes(topicSlug))
    .sort((a, b) => +new Date(b.date) - +new Date(a.date));
}

/** Topics that actually have posts in this language — an empty archive is a
 *  worse page than no page, and the Arabic and English sets differ. */
export function topicsWithPosts(locale: Locale): Topic[] {
  return TOPICS.filter((t) => postsForTopic(locale, t.slug).length > 0);
}
