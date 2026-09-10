/**
 * Every page must have exactly one nav, one <main>, one footer and one <h1>.
 *
 * RootShell renders the nav, <main> and footer for both locales, so a page that
 * also renders its own gets two of each: the whole page appears twice, once
 * inside the shell's <main> and once after it. Six pages shipped that way and
 * every other check passed them — no broken image, no failed request, no
 * console error, no overflow, and the h1 count stayed at one because the
 * duplicate sat inside the same document.
 *
 * Reads the built output, so run it after `npm run build`. No server needed.
 */
import { readdirSync, readFileSync, statSync } from "node:fs";
import { join } from "node:path";

const OUT = "out";

function walk(dir) {
  return readdirSync(dir).flatMap((f) => {
    const p = join(dir, f);
    return statSync(p).isDirectory() ? walk(p) : p.endsWith(".html") ? [p] : [];
  });
}

/**
 * The 404 sits outside both locale route groups — Next cannot know which one a
 * missing route belonged to — so it renders its own <html>/<body> with no nav
 * or footer, and titles itself with a styled <div> rather than an <h1>. It is
 * noindex, so the missing <h1> costs nothing. Deliberate, not a finding.
 */
const NO_SHELL = /(^|\/)(404|_not-found)\.html$/;
const SHELL_EXPECT = { nav: 1, main: 1, footer: 1, h1: 1 };
const NO_SHELL_EXPECT = { nav: 0, main: 1, footer: 0, h1: 0 };

const count = (s, re) => (s.match(re) || []).length;

let bad = 0;
const pages = walk(OUT);

for (const file of pages) {
  const s = readFileSync(file, "utf8");
  const got = {
    nav: count(s, /<nav class="nav-root"/g),
    main: count(s, /<main[\s>]/g),
    footer: count(s, /<footer[\s>]/g),
    h1: count(s, /<h1[\s>]/g),
  };
  // Windows gives back-slashed paths; normalise before matching.
  const expect = NO_SHELL.test(file.replace(/\\/g, "/")) ? NO_SHELL_EXPECT : SHELL_EXPECT;
  const wrong = Object.keys(expect).filter((k) => got[k] !== expect[k]);
  if (wrong.length) {
    bad += 1;
    const detail = wrong.map((k) => `${k}=${got[k]} (want ${expect[k]})`).join("  ");
    console.log(`FAIL  ${file}\n      ${detail}`);
  }
}

console.log(`\n${pages.length - bad}/${pages.length} pages have correct chrome.`);
process.exit(bad ? 1 : 0);
