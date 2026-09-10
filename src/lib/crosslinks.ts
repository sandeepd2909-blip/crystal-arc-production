/**
 * Links between the blog and the case studies.
 *
 * These two bodies of content never referenced each other — 55 posts, 29
 * studies, zero links in either direction. Both already pointed at the product
 * pages; neither pointed at the other, which left a reader who finished an
 * article about championship trophies with no route to the FIFA Arab Cup
 * study, and a reader of that study with no route to anything else.
 *
 * The mapping is generated, not hand-written: `npm run crosslinks` rebuilds
 * `src/content/crosslinks.json` by matching on subject. Re-run it after adding
 * a post or a study — nothing here reads the content directly, so a new item
 * is simply absent until the map is rebuilt.
 *
 * Everything below filters for what exists in the requested locale. The Arabic
 * blog is complete, but Arabic case studies are gated behind `ready`, so a
 * link is only offered when the target actually exists in that language —
 * pointing an Arabic reader at an English-only page is worse than not linking.
 */
import map from "@/content/crosslinks.json";
import { caseStudyBySlug, hasArabicCaseStudy, type CaseStudy } from "@/lib/case-studies";
import { postBySlug, type BlogPost } from "@/lib/blog";
import type { Locale } from "@/lib/i18n";

const POST_TO_STUDIES = (map as { postToStudies: Record<string, string[]> }).postToStudies;
const STUDY_TO_POSTS = (map as { studyToPosts: Record<string, string[]> }).studyToPosts;

/** Case studies worth reading after this article. */
export function studiesForPost(locale: Locale, postSlug: string, n = 2): CaseStudy[] {
  const out: CaseStudy[] = [];
  for (const slug of POST_TO_STUDIES[postSlug] ?? []) {
    if (locale === "ar" && !hasArabicCaseStudy(slug)) continue;
    const c = caseStudyBySlug(slug);
    if (c) out.push(c);
    if (out.length >= n) break;
  }
  return out;
}

/** Articles worth reading after this case study. */
export function postsForStudy(locale: Locale, studySlug: string, n = 3): BlogPost[] {
  const out: BlogPost[] = [];
  for (const slug of STUDY_TO_POSTS[studySlug] ?? []) {
    const p = postBySlug(locale, slug);
    if (p) out.push(p);
    if (out.length >= n) break;
  }
  return out;
}
