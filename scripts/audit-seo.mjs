/**
 * Technical SEO sweep over the built output.
 *
 * Everything here is checked against `out/`, not against the source — what
 * ships is what gets crawled, and the two have disagreed before. Run after
 * `npm run build`.
 */
import fs from "node:fs";
import path from "node:path";

const walk = (d, a = []) => {
  for (const e of fs.readdirSync(d, { withFileTypes: true })) {
    const p = path.join(d, e.name);
    e.isDirectory() ? walk(p, a) : a.push(p);
  }
  return a;
};

const all = walk("out");
const html = all.filter((f) => f.endsWith(".html"));
const present = new Set(all.map((f) => "/" + f.split(path.sep).slice(1).join("/")));
const routes = new Set(html.map((f) => ("/" + f.split(path.sep).slice(1).join("/")).replace(/\.html$/, "")));

const bad = {};
const flag = (k, v) => (bad[k] = bad[k] || []).push(v);

const TITLE_MAX = 60, TITLE_MIN = 20, DESC_MAX = 160, DESC_MIN = 70;
const titles = new Map(), descs = new Map(), h1s = new Map();

for (const f of html) {
  const route = ("/" + f.split(path.sep).slice(1).join("/")).replace(/\.html$/, "");
  if (/\/404$|_not-found/.test(route)) continue;
  const s = fs.readFileSync(f, "utf8");

  const title = s.match(/<title>([^<]*)<\/title>/)?.[1]?.trim() ?? "";
  const desc = s.match(/name="description" content="([^"]*)"/)?.[1]?.trim() ?? "";
  const h1 = [...s.matchAll(/<h1[^>]*>([\s\S]*?)<\/h1>/g)].map((m) => m[1].replace(/<[^>]*>/g, "").trim());

  if (!title) flag("no title", route);
  else {
    if (title.length > TITLE_MAX) flag(`title over ${TITLE_MAX} chars`, `${route} (${title.length})`);
    if (title.length < TITLE_MIN) flag(`title under ${TITLE_MIN} chars`, `${route} (${title.length})`);
    (titles.get(title) ?? titles.set(title, []).get(title)).push(route);
  }
  if (!desc) flag("no meta description", route);
  else {
    if (desc.length > DESC_MAX) flag(`description over ${DESC_MAX} chars`, `${route} (${desc.length})`);
    if (desc.length < DESC_MIN) flag(`description under ${DESC_MIN} chars`, `${route} (${desc.length})`);
    (descs.get(desc) ?? descs.set(desc, []).get(desc)).push(route);
  }
  if (h1.length !== 1) flag("h1 count is not 1", `${route} (${h1.length})`);
  else (h1s.get(h1[0]) ?? h1s.set(h1[0], []).get(h1[0])).push(route);

  if (!/rel="canonical"/.test(s)) flag("no canonical", route);
  if (!/hreflang=/i.test(s)) flag("no hreflang", route);
  if (!/application\/ld\+json/.test(s)) flag("no structured data", route);
  if (!/property="og:image"/.test(s)) flag("no og:image", route);
  if (!/name="viewport"/.test(s)) flag("no viewport", route);
  if (/<meta name="robots" content="[^"]*noindex/.test(s)) flag("noindex", route);

  // heading order
  const levels = [...s.matchAll(/<h([1-6])[ >]/g)].map((m) => +m[1]);
  for (let i = 1; i < levels.length; i++) if (levels[i] - levels[i - 1] > 1) { flag("skipped heading level", route); break; }

  // links and images
  for (const m of s.matchAll(/href="(\/[^"#?]*)"/g)) {
    const h = m[1].replace(/\/$/, "") || "/";
    if (h !== "/" && !present.has(h) && !routes.has(h)) flag("broken internal link", `${route} -> ${h}`);
  }
  for (const m of s.matchAll(/<img\b[^>]*>/g)) {
    const src = m[0].match(/src="([^"]*)"/)?.[1];
    if (src?.startsWith("/") && !present.has(src.split("?")[0])) flag("image 404", `${route} :: ${src}`);
    if (!/\balt="/.test(m[0])) flag("image without alt", `${route} :: ${src ?? "?"}`);
  }
  for (const m of s.matchAll(/srcset="([^"]*)"/g))
    for (const c of m[1].split(",")) {
      const u = c.trim().split(/\s+/)[0];
      if (u.startsWith("/") && !present.has(u)) flag("srcset 404", `${route} :: ${u}`);
    }

  // canonical must be self-referential and absolute
  const canon = s.match(/rel="canonical" href="([^"]*)"/)?.[1];
  if (canon && !canon.startsWith("https://www.crystalarc.net")) flag("canonical not absolute", `${route} -> ${canon}`);
  if (canon && canon.replace("https://www.crystalarc.net", "") !== route) flag("canonical points elsewhere", `${route} -> ${canon}`);
}

for (const [t, rs] of titles) if (rs.length > 1) flag("duplicate title", `${rs.length}x "${t.slice(0, 54)}"`);
for (const [d, rs] of descs) if (rs.length > 1) flag("duplicate description", `${rs.length}x "${d.slice(0, 48)}"`);
for (const [h, rs] of h1s) if (rs.length > 2) flag("duplicate h1", `${rs.length}x "${h.slice(0, 48)}"`);

// sitemap and robots
const xml = fs.readFileSync("out/sitemap.xml", "utf8");
const locs = [...xml.matchAll(/<loc>([^<]*)<\/loc>/g)].map((m) => m[1].replace("https://www.crystalarc.net", ""));
for (const l of locs) if (!routes.has(l.replace(/\/$/, "")) && !present.has(l)) flag("sitemap URL does not exist", l);
const inSitemap = new Set(locs.map((l) => l.replace(/\/$/, "")));
for (const r of routes) if (!/\/404$|_not-found/.test(r) && !inSitemap.has(r)) flag("page missing from sitemap", r);
for (const m of xml.matchAll(/<image:loc>([^<]*)<\/image:loc>/g))
  if (!present.has(decodeURIComponent(m[1].replace("https://www.crystalarc.net", "")))) flag("sitemap image 404", m[1]);

console.log(`${html.length} pages, ${locs.length} sitemap URLs\n`);
const keys = Object.keys(bad);
if (!keys.length) { console.log("  clean"); process.exit(0); }
for (const k of keys.sort((a, b) => bad[b].length - bad[a].length)) {
  console.log(`  ${String(bad[k].length).padStart(4)}  ${k}`);
  for (const v of [...new Set(bad[k])].slice(0, 4)) console.log(`        ${v}`);
  if (bad[k].length > 4) console.log(`        …`);
}
