/**
 * The company's own numbers, checked for consistency everywhere they appear.
 *
 * These drifted badly. The pages said 25 years, 250 craftspeople and a
 * 200,000 sq ft facility; the migrated blog posts said 23 years, 180 artisans
 * in one post and 200+ in another, and a 150,000 sq ft facility. All of it was
 * live, in both languages, on a site whose whole pitch is that the work is
 * made in-house.
 *
 * Nothing catches this on its own: every figure is individually plausible and
 * none of them break a build. It only shows up when you line them up.
 *
 * Anchored on the number PLUS its unit, never on bare digits — "23" also
 * appears inside "2023", and Arabic "٢٤" inside "عام 2024", the Year of the
 * Camel. A bare-number sweep would corrupt both.
 *
 * Run `npm run facts`.
 */
import { readFileSync } from "node:fs";
import { readdirSync, statSync } from "node:fs";
import { join } from "node:path";

/** The canonical figures. Change them here and here only. */
const CANON = [
  // "18 years at Crystal Arc" on the Craft page is a craftsperson's tenure,
  // not the company's age. Without the exclusion every staff profile reads as
  // a conflict.
  { what: "years in business", ok: [/\b25\s*\+?\s*years/i, /٢٥\s*\+?\s*(?:عام|عاماً|سنة)/],
    wrong: [/\b(?!25)\d{2}\s*\+?\s*years\b(?!\s*at\s+Crystal)/i,
            /(?<![٠-٩])(?!٢٥)[٠-٩]{2}\s*\+?\s*عاماً/] },
  // The Arabic patterns need a preceding-digit guard as well as the lookahead:
  // without it (?!٢٥٠) just matches one character later and reports "٥٠".
  { what: "craftspeople", ok: [/\b250(?:\s*\+|[\s-]*plus)?\s*(?:\w+\s+)?(?:craftspeople|artisans|craftsmen|skilled professionals)/i, /٢٥٠\s*\+?\s*حرفي/],
    wrong: [/\b(?!250)\d{2,3}(?:\s*\+|[\s-]*plus)?\s*(?:\w+\s+)?(?:craftspeople|artisans|craftsmen|skilled professionals)\b/i,
            /(?<![٠-٩])(?!٢٥٠)[٠-٩]{2,3}\s*\+?\s*حرفي/] },
  { what: "facility size", ok: [/200[,\s]?000[\s-]*(?:sq|square)/i, /٢٠٠[٬,\s]?٠٠٠/],
    wrong: [/\b(?!200)\d{3}[,\s]?\d{3}[\s-]*(?:sq|square)[\s-]*(?:ft|foot|feet)/i] },
  { what: "projects", ok: [/40[,\s]?000/, /٤٠[٬,\s]?٠٠٠/],
    wrong: [/\b(?!40)\d{2}[,\s]?000\s*\+?\s*projects/i] },
  { what: "clients", ok: [/15[,\s]?000/, /١٥[٬,\s]?٠٠٠/],
    wrong: [/\b(?!15)\d{2}[,\s]?000\s*\+?\s*clients/i] },
];

function walk(dir, exts) {
  return readdirSync(dir).flatMap((f) => {
    const p = join(dir, f);
    if (statSync(p).isDirectory()) return walk(p, exts);
    return exts.some((e) => p.endsWith(e)) ? [p] : [];
  });
}

const sources = [];
for (const f of walk("src", [".tsx", ".ts"])) {
  sources.push({ where: f.replace(/\\/g, "/"), text: readFileSync(f, "utf8") });
}
for (const p of JSON.parse(readFileSync("src/content/blog-posts.json", "utf8"))) {
  sources.push({ where: `blog/${p.slug} [${p.lang}]`, text: p.html });
}
for (const t of JSON.parse(readFileSync("src/content/blog-posts-ar.json", "utf8"))) {
  sources.push({ where: `blog-ar/${t.slug}`, text: t.html });
}

const findings = [];
for (const { where, text } of sources) {
  for (const { what, wrong } of CANON) {
    for (const re of wrong) {
      for (const m of text.matchAll(new RegExp(re.source, re.flags.includes("g") ? re.flags : re.flags + "g"))) {
        const at = Math.max(0, m.index - 50);
        const ctx = text.slice(at, m.index + m[0].length + 40).replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim();
        findings.push(`${what}: "${m[0].trim()}" in ${where}\n      …${ctx}…`);
      }
    }
  }
}

console.log("");
if (findings.length) {
  console.log(`${findings.length} figure${findings.length > 1 ? "s" : ""} that disagree with the canonical values:\n`);
  findings.forEach((f) => console.log(`  - ${f}`));
  console.log("\n  Canonical: 25 years, 250 craftspeople, 200,000 sq ft, 40,000 projects, 15,000 clients.\n");
} else {
  console.log("Company figures are consistent across pages and blog, both languages.");
  console.log("  25 years · 250 craftspeople · 200,000 sq ft · 40,000 projects · 15,000 clients\n");
}
process.exit(findings.length ? 1 : 0);
