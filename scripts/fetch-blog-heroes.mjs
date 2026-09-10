import fs from "node:fs";
import sharp from "sharp";

const SCRATCH = "C:/Users/MARKET~1/AppData/Local/Temp/claude/C--Users-Marketing/825acedc-6d6d-4159-83ec-48761a3a5cd2/scratchpad";
const REPO = "C:/Users/Marketing/crystal-arc-website";

const cards = JSON.parse(fs.readFileSync(`${SCRATCH}/index-heroes.json`, "utf8"));
const posts = JSON.parse(fs.readFileSync(`${REPO}/src/content/blog-posts.json`, "utf8"));

const missing = posts.filter((p) => !p.hero);
console.log(`posts missing hero: ${missing.length}`);

// existing highest bNNN
const nums = fs.readdirSync(`${REPO}/public/blog`)
  .map((f) => parseInt(f.replace(/\D/g, ""), 10))
  .filter(Number.isFinite);
let next = Math.max(...nums) + 1;

// remote url -> local path, so the two Saudi posts share one file
const byUrl = new Map();

for (const post of missing) {
  const url = cards[post.slug];
  if (!url) { console.log(`  NO CARD IMAGE  ${post.slug}`); continue; }

  if (byUrl.has(url)) {
    post.hero = byUrl.get(url);
    console.log(`  reuse ${post.hero}  ${post.slug}`);
    continue;
  }

  const res = await fetch(url);
  if (!res.ok) { console.log(`  HTTP ${res.status}  ${post.slug}`); continue; }
  const buf = Buffer.from(await res.arrayBuffer());

  const name = `b${String(next).padStart(3, "0")}.webp`;
  const out = `${REPO}/public/blog/${name}`;
  const info = await sharp(buf)
    .resize({ width: 1200, withoutEnlargement: true })
    .webp({ quality: 82 })
    .toFile(out);
  next += 1;

  post.hero = `/blog/${name}`;
  byUrl.set(url, post.hero);
  console.log(`  ${name}  ${(info.size / 1024).toFixed(0).padStart(4)}KB  ${info.width}x${info.height}  ${post.slug.slice(0, 46)}`);
}

fs.writeFileSync(`${REPO}/src/content/blog-posts.json`, JSON.stringify(posts, null, 2) + "\n");
console.log(`\nstill without hero: ${posts.filter((p) => !p.hero).length}`);
