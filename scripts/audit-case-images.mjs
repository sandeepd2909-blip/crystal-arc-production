/**
 * Guard: no case study may show another client's photograph.
 *
 * This exists because it happened. Factory frames were placed by what they
 * appeared to depict, and the Ferrari study ended up showing Dubai Police, DP
 * World and Al Rajhi Bank frames while Kayali's closing section — copy about
 * "Kayali's iconic perfume bottle" — showed a Dubai skyline award being boxed.
 *
 * Every entry in `sourceImages` must be one of:
 *   - a studio or factory file whose name resolves to this study's own slug
 *   - a `public/` asset from the general factory set, tied to no client
 *   - "" for a section deliberately left without an image
 *
 * Run:  node scripts/audit-case-images.mjs
 */
import fs from "node:fs";

const ALIAS = JSON.parse(fs.readFileSync("scripts/case-image-alias.json", "utf8"));

const key = (n) =>
  n.replace(/^Factory\//, "")
    .replace(/(\.[a-z0-9]{2,4})+$/i, "")
    .replace(/\((?:Media|Sports|Government|Corporate)\)/gi, " ")
    .replace(/^Product(?:ion)?\s*\d*\s+/i, "")
    .replace(/\s+\d{1,2}\s*$/, "")
    .replace(/\s+/g, " ").trim().toLowerCase();

const studies = JSON.parse(fs.readFileSync("src/content/case-studies.json", "utf8"));
const problems = [];
let own = 0, generic = 0, blank = 0;

for (const st of studies) {
  st.sourceImages.forEach((src, i) => {
    if (!src) { blank++; return; }
    if (src.startsWith("public/")) {
      if (!fs.existsSync(src)) problems.push(`${st.slug}[${i}] general asset missing on disk: ${src}`);
      else generic++;
      return;
    }
    const belongsTo = ALIAS[key(src)];
    if (!belongsTo) problems.push(`${st.slug}[${i}] source resolves to no client: ${src}`);
    else if (belongsTo !== st.slug) problems.push(`${st.slug}[${i}] shows ${belongsTo}'s photograph: ${src}`);
    else own++;
  });

  // the live paths must exist too
  st.images.forEach((p, i) => {
    if (!p) return;
    if (!fs.existsSync("public" + p)) problems.push(`${st.slug}[${i}] image missing on disk: ${p}`);
  });

  if (st.images.length !== st.sourceImages.length)
    problems.push(`${st.slug} images/sourceImages length mismatch`);
  if (st.imageAlts.length !== st.images.length || st.imageAltsAr.length !== st.images.length)
    problems.push(`${st.slug} alt arrays out of step with images`);
  if (!st.images[0]) problems.push(`${st.slug} has no hero image`);
}

console.log(`${studies.length} studies — ${own} own frames, ${generic} general factory frames, ${blank} blank slots`);
if (problems.length) {
  console.log(`\n${problems.length} problem(s):`);
  for (const p of problems) console.log("  " + p);
  process.exit(1);
}
console.log("No study shows another client's photograph.");
