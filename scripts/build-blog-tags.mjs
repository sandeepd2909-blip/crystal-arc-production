/**
 * Topics for the blog.
 *
 * 55 posts sat in one flat reverse-chronological list. There was no way to
 * browse "corporate gifts" or "the Saudi market", and no topical clustering for
 * search — every post competed alone rather than as part of a subject.
 *
 * The posts carry no tags of their own and hand-tagging 55 of them invites
 * drift, so topics are derived from the title and description. Deliberately
 * few: nine topics that a reader would recognise as a section of a magazine,
 * not thirty keyword shards. A post takes at most three.
 *
 * Matching is on title + description only. Matching the body pulls in every
 * term on the site — nearly every post mentions crystal, Dubai and awards
 * somewhere — and produced posts tagged with everything, which is the same as
 * tagged with nothing.
 *
 * Writes src/content/blog-tags.json. Run: npm run blog-tags
 */
import fs from "node:fs";

/** slug -> { en, ar, match }. Order matters: the first three that hit, win. */
export const TOPICS = [
  // Order is priority: the first three that match, win. Specific and regional
  // topics sit above thematic ones on purpose. The first pass listed
  // "Trophies & Awards" first and it landed on 48 of 56 posts — a tag that
  // covers the whole blog tells a reader nothing and clusters nothing. There
  // is no generic trophies topic here for exactly that reason: this is a blog
  // about trophies, so the subject is the site, not a filter within it.
  { slug: "saudi-arabia", en: "Saudi Arabia", ar: "السعودية",
    match: /saudi|riyadh|makkah|jeddah|ksa|kingdom|vision 2030|السعودي|الرياض|مكة|المملكة/i },
  { slug: "uae", en: "United Arab Emirates", ar: "الإمارات",
    match: /uae|dubai|abu dhabi|sharjah|fujairah|emirat|دبي|الإمارات|أبوظبي|الشارقة/i },
  { slug: "corporate-gifts", en: "Corporate Gifts", ar: "هدايا الشركات",
    match: /corporate gift|gifting|gift(s)?|eid|ramadan|national day|festive|هدايا|العيد|رمضان|اليوم الوطني/i },
  { slug: "medals", en: "Medals", ar: "الميداليات",
    match: /medal|marathon|race|running|ميدال/i },
  { slug: "recognition", en: "Recognition at Work", ar: "التكريم في العمل",
    match: /employee|staff|recognition|motivat|team|workplace|culture|leader|milestone|programme|program|prestige|الموظف|تكريم|الفريق/i },
  { slug: "ceremonies", en: "Events & Ceremonies", ar: "الفعاليات والحفلات",
    match: /ceremon|event|hosting|deliver|deadline|turnaround|presented|golf|esports|tournament|حفل|فعالي/i },
  { slug: "buying-guide", en: "Choosing a Supplier", ar: "اختيار المورّد",
    match: /choos|guide|how to|supplier|partner|shop|buying|selecting|tips|what to/i },
  { slug: "craft-materials", en: "Craft & Materials", ar: "الحرفة والخامات",
    // deliberately not /crystal|made|hand/ — those appear in most titles on
    // this blog and pulled the topic onto 40 of 56 posts
    match: /material|glass|metal|resin|craftsmanship|engrav|polish|manufactur|factory|mould|cast|maintain|preserv|خامات|الكريستال|المصنع/i },
  { slug: "design", en: "Design & Trends", ar: "التصميم والاتجاهات",
    match: /design|trend|20\d\d|future|style|avant|inspiration|idea|symbol/i },
];

const MAX = 3;

export function topicsFor(post) {
  const hay = [post.title, post.seoTitle, post.description].filter(Boolean).join(" ");
  const hit = TOPICS.filter((t) => t.match.test(hay)).map((t) => t.slug);
  return hit.slice(0, MAX);
}

{
  const posts = JSON.parse(fs.readFileSync("src/content/blog-posts.json", "utf8"));
  const ar = JSON.parse(fs.readFileSync("src/content/blog-posts-ar.json", "utf8"));
  const arList = Array.isArray(ar) ? ar : Object.values(ar);

  const bySlug = {};
  for (const p of posts) bySlug[p.slug] = topicsFor(p);
  // Arabic editions inherit their English original's topics — same article
  for (const p of arList) if (!bySlug[p.slug]) bySlug[p.slug] = topicsFor(p);

  fs.writeFileSync("src/content/blog-tags.json",
    JSON.stringify({ topics: TOPICS.map(({ slug, en, ar }) => ({ slug, en, ar })), bySlug }, null, 1) + "\n", "utf8");

  const count = {};
  for (const t of Object.values(bySlug)) for (const s of t) count[s] = (count[s] || 0) + 1;
  console.log(`${Object.keys(bySlug).length} posts tagged\n`);
  for (const t of TOPICS) console.log(`  ${String(count[t.slug] || 0).padStart(3)}  ${t.en}`);
  const untagged = Object.entries(bySlug).filter(([, v]) => !v.length);
  console.log(`\n  posts with no topic: ${untagged.length}`);
}
