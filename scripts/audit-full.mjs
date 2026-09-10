/* Whole-site check at desktop and phone.
   Structure, rendering, SEO head, accessibility basics, console health. */
import { chromium } from "playwright";
import fs from "fs";

const BASE = process.argv[2] || "http://localhost:3111";
const posts = JSON.parse(fs.readFileSync("src/content/blog-posts.json", "utf8"));
const CORE = ["/", "/products", "/products/trophies-awards", "/products/corporate-gifts",
  "/products/boxes", "/products/home-decor", "/about", "/craft", "/our-work",
  "/blog", "/contact", "/privacy", "/terms"];
const ROUTES = [];
for (const l of ["en", "ar"]) for (const p of CORE) ROUTES.push(`/${l}${p === "/" ? "" : p}`);
// a sample of posts rather than all 56
for (const s of posts.filter(p => p.lang === "en").slice(0, 4)) ROUTES.push(`/en/blog/${s.slug}`);
ROUTES.push(`/ar/blog/${posts.find(p => p.lang === "ar").slug}`);

const VIEWPORTS = [{ w: 1440, h: 900, n: "pc" }, { w: 390, h: 844, n: "mobile" }];
const findings = { broken: [], overflow: [], hidden: [], console: [], seo: [], img: [], tap: [], type: [], long: [] };
const browser = await chromium.launch();

for (const v of VIEWPORTS) {
  const ctx = await browser.newContext({ viewport: { width: v.w, height: v.h } });
  const page = await ctx.newPage();
  const errs = [];
  page.on("console", m => { if (m.type() === "error") errs.push(m.text().slice(0, 120)); });
  page.on("pageerror", e => errs.push("PAGEERROR " + e.message.slice(0, 120)));
  page.on("response", r => { if (r.status() >= 400) findings.broken.push(`${v.n} ${r.status()} ${r.url().replace(BASE, "")}`); });

  for (const route of ROUTES) {
    errs.length = 0;
    const res = await page.goto(BASE + route, { waitUntil: "networkidle" }).catch(() => null);
    if (!res || res.status() >= 400) { findings.broken.push(`${v.n} ${res ? res.status() : "ERR"} ${route}`); continue; }
    await page.evaluate(async () => {
      /* 110ms, not 18. IntersectionObserver callbacks are async and a fast
         scroll outruns them: at 18ms the audit reported 45 elements "stuck at
         opacity 0" on pages whose reveals work perfectly. */
      for (let y = 0; y < document.body.scrollHeight; y += 400) { window.scrollTo(0, y); await new Promise(r => setTimeout(r, 110)); }
      window.scrollTo(0, 0);
    });
    await page.waitForTimeout(900);

    const m = await page.evaluate(() => {
      const vis = el => { const s = getComputedStyle(el); return s.display !== "none" && s.visibility !== "hidden" && el.getClientRects().length; };
      const head = {
        title: document.title, titleLen: document.title.length,
        desc: document.querySelector('meta[name="description"]')?.content || "",
        canon: document.querySelector('link[rel=canonical]')?.href || "",
        og: !!document.querySelector('meta[property="og:title"]'),
        h1: [...document.querySelectorAll("h1")].map(h => h.textContent.trim()),
        lang: document.documentElement.lang, dir: document.documentElement.dir,
        viewportMeta: !!document.querySelector('meta[name="viewport"]'),
        jsonld: [...document.querySelectorAll('script[type="application/ld+json"]')].length,
      };
      const imgs = [...document.querySelectorAll("img")];
      const brokenImg = imgs.filter(i => i.complete && i.naturalWidth === 0).map(i => i.getAttribute("src"));
      const noAlt = imgs.filter(i => !i.hasAttribute("alt")).length;
      /* Reveal animations are IntersectionObserver-driven, so a single pass
         after a scroll sweep reports plenty of false positives: the observer
         callback for the last few elements has not run yet. Candidates are
         re-checked individually below, in the page context, after being
         scrolled into view. */
      const stuckCandidates = [...document.querySelectorAll("*")].filter(el => {
        const s = getComputedStyle(el);
        return s.opacity === "0" && el.getBoundingClientRect().height > 40 && !el.closest("[aria-hidden=true]");
      });
      window.__stuck = stuckCandidates;
      const stuck = stuckCandidates.length;
      let tap = [], tiny = [];
      for (const el of document.querySelectorAll("a,button,[role=button],input,select,textarea")) {
        if (!vis(el)) continue;
        const r = el.getBoundingClientRect();
        if (r.width && r.height && (r.height < 32 || r.width < 32))
          tap.push(`${Math.round(r.width)}x${Math.round(r.height)} ${(el.textContent || el.getAttribute("aria-label") || el.tagName).trim().slice(0, 22)}`);
      }
      for (const el of document.querySelectorAll("p,span,div,a,li,h1,h2,h3,button")) {
        if (!vis(el)) continue;
        const t = [...el.childNodes].filter(n => n.nodeType === 3 && n.nodeValue.trim());
        if (!t.length) continue;
        const fs2 = parseFloat(getComputedStyle(el).fontSize);
        if (fs2 < 12) tiny.push(`${fs2}px "${t[0].nodeValue.trim().slice(0, 22)}"`);
      }
      return { head, brokenImg, noAlt, stuck, tap: [...new Set(tap)], tiny: [...new Set(tiny)],
        h: document.body.scrollHeight, ovf: document.documentElement.scrollWidth > window.innerWidth,
        imgCount: imgs.length };
    });

    if (m.ovf) findings.overflow.push(`${v.n} ${route}`);
    if (m.stuck) {
      // second pass: bring each candidate into view and give the observer time
      const reallyStuck = await page.evaluate(async () => {
        let n = 0;
        for (const el of window.__stuck) {
          // a blinking cursor animates opacity 0<->1; catching it at 0 is not a fault
          if (el.className && /tw-cursor|cursor|blink/.test(el.className)) continue;
          el.scrollIntoView({ block: "center", behavior: "instant" });
          // 400ms: Reveal staggers siblings by up to 300ms, so a shorter wait
          // reports elements that are simply still in their delay window.
          await new Promise(r => setTimeout(r, 400));
          if (getComputedStyle(el).opacity === "0") n++;
        }
        return n;
      });
      if (reallyStuck) findings.hidden.push(`${v.n} ${route}: ${reallyStuck} element(s) genuinely stuck at opacity 0`);
    }
    if (errs.length) findings.console.push(`${v.n} ${route}: ${[...new Set(errs)].slice(0, 2).join(" | ")}`);
    if (m.brokenImg.length) findings.img.push(`${v.n} ${route}: ${m.brokenImg.slice(0, 3).join(", ")}`);
    if (m.noAlt) findings.img.push(`${v.n} ${route}: ${m.noAlt} img without alt attribute`);
    if (v.n === "mobile") {
      if (m.tap.length) findings.tap.push(`${route}: ${m.tap.slice(0, 4).join(" | ")}`);
      if (m.tiny.length) findings.type.push(`${route}: ${m.tiny.slice(0, 4).join(" | ")}`);
      if (m.h / 844 > 14) findings.long.push(`${route}: ${(m.h / 844).toFixed(1)} screens`);
    }
    if (v.n === "pc") {
      const h = m.head, bad = [];
      if (!h.title) bad.push("no title");
      else if (h.titleLen > 62) bad.push(`title ${h.titleLen} chars`);
      if (!h.desc) bad.push("no meta description");
      else if (h.desc.length > 165) bad.push(`desc ${h.desc.length} chars`);
      if (!h.canon) bad.push("no canonical");
      if (h.h1.length !== 1) bad.push(`${h.h1.length} h1`);
      if (!h.og) bad.push("no og:title");
      if (!h.viewportMeta) bad.push("no viewport meta");
      const wantLang = route.startsWith("/ar") ? "ar" : "en";
      if (h.lang !== wantLang) bad.push(`lang=${h.lang}`);
      const wantDir = route.startsWith("/ar") ? "rtl" : "ltr";
      if (h.dir !== wantDir) bad.push(`dir=${h.dir}`);
      if (bad.length) findings.seo.push(`${route}: ${bad.join(", ")}`);
    }
  }
  await ctx.close();
}
await browser.close();

const label = { broken: "BROKEN PAGES / REQUESTS", overflow: "HORIZONTAL OVERFLOW", hidden: "STUCK AT OPACITY 0",
  console: "CONSOLE ERRORS", img: "IMAGE PROBLEMS", seo: "SEO HEAD", tap: "TAP TARGETS < 32px (mobile)",
  type: "TYPE < 12px (mobile)", long: "PAGES OVER 14 SCREENS (mobile)" };
let total = 0;
for (const k of Object.keys(label)) {
  const v = [...new Set(findings[k])];
  total += v.length;
  console.log(`\n### ${label[k]} — ${v.length}`);
  v.slice(0, 14).forEach(x => console.log("   " + x));
  if (v.length > 14) console.log(`   … and ${v.length - 14} more`);
}
console.log(`\n${ROUTES.length} routes × ${VIEWPORTS.length} viewports · ${total} findings`);
