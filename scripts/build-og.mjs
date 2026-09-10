/**
 * Build the 1200x630 social share cards in `public/og/`.
 *
 * Run after adding or replacing any image used as an `og:image` source:
 *   npm run og
 *
 * Then paste the printed OG_CARDS block into `src/lib/og.ts` — the set is
 * hardcoded there rather than read from disk so it survives a static export
 * and stays greppable.
 *
 * Sources narrower than MIN are skipped on purpose. Upscaling a 500px legacy
 * blog hero to 1200 wide produces a visibly soft card; those posts fall back
 * to the house card instead, which looks deliberate rather than broken.
 */
import sharp from "sharp";
import fs from "node:fs";
import path from "node:path";

const W = 1200, H = 630, MIN = 1100;
/* --color-s2, the site's warm surface. The product photography is shot on a
   stone backdrop, so a square set on this reads as one composition rather
   than a picture pasted onto a panel. */
const BG = { r: 237, g: 232, b: 220 };
const OUT = "public/og";

/* Every image referenced as an og:image source, page-level first. */
const PAGE_SOURCES = [
  "factory-1", "factory-3", "trophy-main", "hof-mag-06", "box-banner",
  "cg-banner", "hd-hero",
];

fs.mkdirSync(OUT, { recursive: true });

const made = [];
const skipped = [];

async function card(src, name) {
  const m = await sharp(src).metadata();
  if (made.includes(name)) return;          // already built from another list
  if (m.width < MIN) { skipped.push(`${name} (${m.width}x${m.height})`); return; }

  // A card is 1.91:1. Cover-cropping a square or portrait source into that
  // throws away about half the height, which beheads a standing trophy — the
  // exact failure the case study hero frames were rebuilt to avoid. So square
  // and portrait sources are set whole onto the brand surface instead, and
  // only genuinely landscape sources get the crop.
  const wide = m.width / m.height >= 1.6;
  const img = wide
    ? sharp(src).resize(W, H, { fit: "cover", position: "attention" })
    : sharp({ create: { width: W, height: H, channels: 3, background: BG } }).composite([
        { input: await sharp(src).resize({ height: H }).toBuffer(), gravity: "centre" },
      ]);

  await img.jpeg({ quality: 84, mozjpeg: true }).toFile(path.join(OUT, `${name}.jpg`));
  made.push(name);
}

for (const p of PAGE_SOURCES) {
  const src = `public/${p}.webp`;
  if (fs.existsSync(src)) await card(src, p);
  else skipped.push(`${p} (source missing)`);
}

for (const f of fs.readdirSync("public/blog").filter((f) => f.endsWith(".webp"))) {
  await card(`public/blog/${f}`, `blog-${f.replace(/\.webp$/, "")}`);
}

/* Blog heroes moved off /blog/ and onto the studio archive in Aug 2026, so the
   sources a post shares are no longer only under public/blog. Read the heroes
   out of the content file rather than guessing at a directory: a post whose
   hero has no card falls back to the house image, which is right for a legacy
   300px file and wrong for a 1400px studio frame. */
const HEROES = [...new Set(
  JSON.parse(fs.readFileSync("src/content/blog-posts.json", "utf8"))
    .map((p) => p.hero)
    .filter((h) => h && !h.startsWith("/blog/"))
)];
for (const h of HEROES) {
  const name = h.replace(/^\//, "").replace(/\.[a-z0-9]+$/i, "").replace(/\//g, "-");
  if (fs.existsSync("public" + h)) await card("public" + h, name);
}

/* Case study heroes. 58 pages (29 studies x 2 locales) shared the house card
   until the photography landed; each now shares its own piece. */
for (const c of JSON.parse(fs.readFileSync("src/content/case-studies.json", "utf8"))) {
  const h = c.images?.[0];
  if (!h) continue;
  const name = h.replace(/^\//, "").replace(/\.[a-z0-9]+$/i, "").replace(/\//g, "-");
  if (fs.existsSync("public" + h)) await card("public" + h, name);
}

const kb = made.reduce((a, n) => a + fs.statSync(path.join(OUT, `${n}.jpg`)).size, 0) / 1024;
console.log(`${made.length} cards written to ${OUT}/  (${Math.round(kb)} KB)`);
console.log(`${skipped.length} sources too small for a sharp 1200x630 crop — these fall back to OG_DEFAULT`);

console.log("\nPaste into src/lib/og.ts:\n");
console.log("export const OG_CARDS: ReadonlySet<string> = new Set([");
const sorted = [...new Set(made)].sort();
for (let i = 0; i < sorted.length; i += 6) {
  console.log("  " + sorted.slice(i, i + 6).map((n) => `"${n}"`).join(", ") + ",");
}
console.log("]);");
