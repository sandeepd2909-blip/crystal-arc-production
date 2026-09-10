/**
 * Checks every Arabic translation against the English post it translates.
 *
 * A translation is not free prose: it has to carry the same structure as the
 * original, because the images, headings and links are the article's skeleton
 * and the reader is meant to get the same piece in their own language. The
 * failure modes here are quiet ones — a dropped figure, an image src retyped
 * by hand, an internal link left pointing at /en/ so an Arabic reader is
 * bounced into English mid-sentence.
 *
 * None of that breaks the build, and none of it shows up in a word count.
 *
 * Also checks the two things that have already gone wrong once on this site:
 * a <title> that overflows once the layout appends "| كريستال آرك", and Latin
 * text stranded in Arabic prose.
 *
 * Run `npm run translations`.
 */
import { readFileSync } from "node:fs";

const posts = JSON.parse(readFileSync("src/content/blog-posts.json", "utf8"));
const translations = JSON.parse(readFileSync("src/content/blog-posts-ar.json", "utf8"));

const TITLE_SUFFIX = 14; // " | كريستال آرك"
const TITLE_MAX = 60;
const DESC_MAX = 160;

const errors = [];
const warnings = [];

const tags = (html, tag) => (html.match(new RegExp(`<${tag}[\\s>]`, "g")) || []).length;
const imgs = (html) => (html.match(/src="([^"]+)"/g) || []).map((s) => s.slice(5, -1));
const links = (html) => (html.match(/href="([^"]+)"/g) || []).map((s) => s.slice(6, -1));

// Latin runs of 3+ letters, ignoring the brand and things that stay Latin.
const ALLOW = /^(Crystal|Arc|CNC|PDF|info|mailto|LED|ISO|Psychology|Today|Harvard|Business|Review|Forbes|Gallup|Eclipse|SolidWorks|Rhino|Blender|KeyShot|CorelDRAW|AutoCAD|webp|jpg|png|blog|ar|en|products|contact|corporate|gifts|home|decor|boxes|trophies|awards|craft|our|work|about|careers|privacy|terms|https?|www|crystalarc|net)$/i;

for (const t of translations) {
  const where = t.slug;
  const source = posts.find((p) => p.slug === t.slug && p.lang === "en");

  if (!source) {
    errors.push(`${where}: no English post with this slug — the translation points at nothing.`);
    continue;
  }

  for (const [field, max] of [["title", TITLE_MAX - TITLE_SUFFIX], ["seoTitle", TITLE_MAX - TITLE_SUFFIX], ["description", DESC_MAX]]) {
    if (!t[field] || !String(t[field]).trim()) errors.push(`${where}: "${field}" is empty.`);
  }
  if (t.seoTitle && t.seoTitle.length + TITLE_SUFFIX > TITLE_MAX) {
    warnings.push(`${where}: seoTitle is ${t.seoTitle.length + TITLE_SUFFIX} chars with the site name appended (over ${TITLE_MAX}); Google will truncate it.`);
  }
  if (t.description && t.description.length > DESC_MAX) {
    warnings.push(`${where}: description is ${t.description.length} chars (over ${DESC_MAX}).`);
  }

  // ── structure must match the original ──
  for (const tag of ["h2", "h3", "figure", "p", "li", "table"]) {
    const a = tags(source.html, tag);
    const b = tags(t.html, tag);
    if (a !== b) {
      errors.push(`${where}: ${a} <${tag}> in the English post, ${b} in the Arabic — the article structures differ.`);
    }
  }

  // ── images must be the same files, in the same order ──
  const srcA = imgs(source.html);
  const srcB = imgs(t.html);
  if (srcA.join("|") !== srcB.join("|")) {
    const missing = srcA.filter((s) => !srcB.includes(s));
    const extra = srcB.filter((s) => !srcA.includes(s));
    errors.push(`${where}: images differ from the original.${missing.length ? ` missing: ${missing.join(", ")}` : ""}${extra.length ? ` unexpected: ${extra.join(", ")}` : ""}${!missing.length && !extra.length ? " same files, different order." : ""}`);
  }

  // ── internal links must point at the Arabic routes ──
  for (const href of links(t.html)) {
    if (href.startsWith("/en/")) {
      errors.push(`${where}: link to ${href} would drop an Arabic reader into English. Repoint to /ar/.`);
    }
  }
  if (links(source.html).length !== links(t.html).length) {
    warnings.push(`${where}: ${links(source.html).length} links in the English post, ${links(t.html).length} in the Arabic.`);
  }

  // ── stray Latin prose ──
  // Entities are stripped as well as tags: leaving them in makes `&nbsp;`
  // read as the Latin word "nbsp" and every paragraph that ends with one
  // gets reported as untranslated.
  const text = t.html.replace(/<[^>]+>/g, " ").replace(/&[a-z]+;|&#\d+;/gi, " ");
  const latin = [...new Set((text.match(/[A-Za-z][A-Za-z'-]{2,}/g) || []).filter((w) => !ALLOW.test(w)))];
  if (latin.length) {
    warnings.push(`${where}: Latin words left in Arabic prose: ${latin.slice(0, 8).join(", ")}${latin.length > 8 ? ` (+${latin.length - 8})` : ""}`);
  }

  // ── Arabic actually present ──
  if (!/[؀-ۿ]/.test(text)) {
    errors.push(`${where}: no Arabic characters in the body at all.`);
  }
}

/**
 * Every internal link in every post — English and Arabic — must resolve.
 *
 * The migrated posts arrived with links the old site had already broken: two
 * pointed at Ramadan slugs with the wrong year, three at /award, a page that
 * does not exist on this site at all. All five were live 404s inside articles
 * that rank. Eighteen more pointed at bare /blog/<slug>, which only works
 * because a redirect catches it.
 *
 * Checked against the route list rather than the built output so this runs
 * before a build, not after one.
 */
const PAGES = new Set([
  "", "/about", "/craft", "/our-work", "/products", "/products/trophies-awards",
  "/products/corporate-gifts", "/products/boxes", "/products/home-decor",
  "/blog", "/careers", "/contact", "/privacy", "/terms",
]);
const readySlugs = new Set(translations.filter((t) => t.ready).map((t) => t.slug));
const allSlugs = new Set(posts.map((p) => p.slug));

function checkLinks(html, where, locale) {
  for (const raw of links(html)) {
    if (!raw.startsWith("/")) continue; // external
    const path = raw.split("#")[0].split("?")[0].replace(/\/$/, "");
    const m = path.match(/^\/(en|ar)(\/.*)?$/);
    if (!m) {
      errors.push(`${where}: link ${raw} has no locale prefix; it only resolves via a redirect.`);
      continue;
    }
    const [, loc, rest = ""] = m;
    const blog = rest.match(/^\/blog\/(.+)$/);
    if (blog) {
      if (!allSlugs.has(blog[1])) {
        errors.push(`${where}: link ${raw} points at a post that does not exist.`);
      } else if (loc === "ar" && !readySlugs.has(blog[1])) {
        errors.push(`${where}: link ${raw} points at an Arabic post that is not translated yet — it would 404.`);
      }
    } else if (!PAGES.has(rest)) {
      errors.push(`${where}: link ${raw} points at a page that does not exist.`);
    }
    if (locale === "ar" && loc === "en") {
      // already reported above by the /en/ rule
    }
  }
}

for (const p of posts) checkLinks(p.html, `${p.slug} [${p.lang}]`, p.lang);
for (const t of translations) checkLinks(t.html, `${t.slug} [ar]`, "ar");

const ready = translations.filter((t) => t.ready);
const enCount = posts.filter((p) => p.lang === "en").length;

console.log("");
if (errors.length) {
  console.log(`${errors.length} problem${errors.length > 1 ? "s" : ""}:\n`);
  errors.forEach((e) => console.log(`  - ${e}`));
  console.log("");
}
if (warnings.length) {
  console.log(`${warnings.length} warning${warnings.length > 1 ? "s" : ""}:\n`);
  warnings.forEach((w) => console.log(`  - ${w}`));
  console.log("");
}
console.log(`${translations.length} of ${enCount} English posts translated; ${ready.length} approved and live.`);
if (ready.length) ready.forEach((t) => console.log(`  live: ${t.slug}`));
console.log("");

process.exit(errors.length ? 1 : 0);
