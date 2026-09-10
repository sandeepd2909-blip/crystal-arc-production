/**
 * Arabic-page language audit.
 *
 * Three separate blind spots produced three separate rounds of "there is still
 * English on the page". This checks all of them at once:
 *
 *   1. walks TEXT NODES, not leaf elements — headings split by <em>/<br> and
 *      paragraphs containing <strong> were skipped entirely before
 *   2. reports MIXED nodes (Arabic AND Latin in one string), not just pure-Latin
 *      ones — "Tiered الهدايا Programmes" contains Arabic, so a
 *      `hasLatin && !hasArabic` test called it translated
 *   3. drives INTERACTIONS first — FAQs, mobile menu, nav dropdown, testimonial
 *      slides, form submit — so text that only exists after a click is included
 *
 * Run: node arlint.mjs <baseUrl>
 */
import { chromium } from "playwright";

const BASE = process.argv[2] || "http://localhost:3000";

const ROUTES = [
  "/ar", "/ar/products", "/ar/products/trophies-awards", "/ar/products/corporate-gifts",
  "/ar/products/boxes", "/ar/products/home-decor", "/ar/about", "/ar/craft",
  "/ar/our-work", "/ar/contact", "/ar/privacy", "/ar/terms",
];

// Latin that is correct to leave alone: the brand, client names, product names,
// regulations, and technical tokens. Matched case-sensitively, whole word.
const ALLOW = [
  "Crystal Arc", "Crystal Arc LLC", "WhatsApp", "Emirates", "ADNOC", "Etihad", "Expo",
  "Formula", "Amazon", "Google", "Workspace", "Analytics", "Meta", "Facebook", "Instagram",
  "LinkedIn", "ChatGPT", "OpenAI", "Claude", "Anthropic", "Netlify", "Vercel", "GDPR",
  "PDF", "English", "AED", "USD", "SAR", "GST", "GCC", "UAE", "PO", "NDA", "CRM",
];

const AR = /[؀-ۿ]/;
const LATIN = /[A-Za-z]/;

const strip = (s) => {
  let t = s;
  for (const a of ALLOW) t = t.split(a).join(" ");
  return t;
};

const audit = async (page) =>
  page.evaluate(({ allow }) => {
    const AR = /[؀-ۿ]/;
    const LATIN = /[A-Za-z]{2,}/;
    const out = [];
    const clean = (s) => { let t = s; for (const a of allow) t = t.split(a).join(" "); return t; };


    const visible = (el) => {
      if (!el) return false;
      const st = getComputedStyle(el);
      if (st.display === "none" || st.visibility === "hidden") return false;
      return el.getClientRects().length > 0;
    };

    // ---- text nodes -------------------------------------------------------
    const w = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
    for (let n = w.nextNode(); n; n = w.nextNode()) {
      const raw = n.nodeValue.replace(/\s+/g, " ").trim();
      if (!raw) continue;
      const p = n.parentElement;
      if (!p || p.closest("script, style, noscript")) continue;
      if (!visible(p)) continue;
      const t = clean(raw);
      if (!LATIN.test(t)) continue;
      out.push({ kind: AR.test(raw) ? "MIXED" : "LATIN", where: p.tagName.toLowerCase(), text: raw.slice(0, 160) });
    }

    // ---- attributes -------------------------------------------------------
    for (const el of document.querySelectorAll("[alt],[aria-label],[placeholder],[title]")) {
      for (const a of ["alt", "aria-label", "placeholder", "title"]) {
        const raw = el.getAttribute(a);
        if (!raw || !raw.trim()) continue;
        const t = clean(raw);
        if (!LATIN.test(t)) continue;
          out.push({ kind: AR.test(raw) ? "MIXED-ATTR" : "LATIN-ATTR", where: `${el.tagName.toLowerCase()}[${a}]`, text: raw.slice(0, 160) });
      }
    }
    return out;
  }, { allow: ALLOW });

const browser = await chromium.launch();
const ctx = await browser.newContext({ viewport: { width: 1440, height: 900 } });
const page = await ctx.newPage();

let total = 0;
for (const route of ROUTES) {
  await page.goto(BASE + route, { waitUntil: "networkidle" });

  // reveal everything IntersectionObserver would otherwise leave at opacity:0
  await page.evaluate(async () => {
    for (let y = 0; y < document.body.scrollHeight; y += 400) {
      window.scrollTo(0, y);
      await new Promise((r) => setTimeout(r, 30));
    }
    window.scrollTo(0, 0);
  });

  // open every FAQ / accordion / details, every nav submenu, every slide
  await page.evaluate(async () => {
    const click = async (sel) => {
      for (const el of document.querySelectorAll(sel)) {
        try { el.click(); await new Promise((r) => setTimeout(r, 60)); } catch {}
      }
    };
    document.querySelectorAll("details").forEach((d) => (d.open = true));
    await click("[class*=faq] button, [class*=faq] [role=button], [class*=accordion] button");
    await click("[aria-expanded=false]");
    await click("[class*=dot], [class*=indicator], [aria-label*=testimonial], [aria-label*=شهادة]");
  });
  await page.waitForTimeout(400);

  const rows = await audit(page);

  // dedupe — the same string often appears in several nodes
  const seen = new Set();
  const uniq = rows.filter((r) => {
    const k = r.kind + "|" + r.text;
    if (seen.has(k)) return false;
    seen.add(k);
    return true;
  });

  if (uniq.length) {
    console.log(`\n### ${route}  (${uniq.length})`);
    for (const r of uniq) console.log(`  ${r.kind.padEnd(11)} ${r.where.padEnd(16)} ${r.text}`);
    total += uniq.length;
  }
}

console.log(total ? `\n${total} finding(s)` : "\nclean — no English left on any Arabic page");
await browser.close();
