/**
 * Card thumbnails.
 *
 * The blog index rendered 1600px files into 252px thumbnails — 1.75 MB of
 * images on a phone for a grid of postage stamps, and every one of the 35
 * oversized. Same on Our Work, where 1400px studio frames filled 516px cards.
 *
 * `output: "export"` means next/image does nothing at build time, so the
 * derivatives have to be real files. Two widths, picked from what the cards
 * actually measure on a phone (about 340 CSS px at 3x) and on desktop.
 *
 * Run after adding an image used in a card grid:  npm run thumbs
 */
import sharp from "sharp";
import fs from "node:fs";
import path from "node:path";

const WIDTHS = [400, 800];
const SOURCES = new Set();

// blog heroes
for (const p of JSON.parse(fs.readFileSync("src/content/blog-posts.json", "utf8")))
  if (p.hero) SOURCES.add(p.hero);
// the studio archive, used by the Our Work grid
for (const f of fs.readdirSync("public/work")) SOURCES.add(`/work/${f}`);
/* Case study cards. Skip the empty entries: a study leaves "" in `images`
   where a section has nothing truthful to show, and "public" + "" is the
   public directory, which sharp reports as an unsupported image format. */
for (const c of JSON.parse(fs.readFileSync("src/content/case-studies.json", "utf8")))
  for (const i of c.images || []) if (i) SOURCES.add(i);

const manifest = {};      // src -> { w: derivative widths on disk, m: master width }
let made = 0, skipped = 0, bytes = 0;
for (const src of SOURCES) {
  const file = "public" + src;
  if (!fs.existsSync(file) || !fs.statSync(file).isFile()) { skipped++; continue; }
  const meta = await sharp(file).metadata();
  for (const w of WIDTHS) {
    if (meta.width <= w * 1.1) continue;          // already small enough
    const out = file.replace(/\.(webp|jpg|jpeg|png)$/i, `-${w}.webp`);
    (manifest[src] = manifest[src] || { w: [], m: meta.width }).w.push(w);
    if (fs.existsSync(out)) { bytes += fs.statSync(out).size; continue; }
    await sharp(file).resize({ width: w }).webp({ quality: 78 }).toFile(out);
    bytes += fs.statSync(out).size;
    made++;
  }
}
/* The manifest is what stops srcset advertising a file that was never written.
   Sources already smaller than a target width get no derivative at that width,
   and listing one anyway sends the browser after a 404. */
fs.writeFileSync("src/content/thumbs.json", JSON.stringify(manifest, null, 1), "utf8");
console.log(`${made} thumbnails written, ${skipped} sources missing, ${Math.round(bytes / 1024)} KB total`);
console.log(`manifest: ${Object.keys(manifest).length} sources -> src/content/thumbs.json`);
