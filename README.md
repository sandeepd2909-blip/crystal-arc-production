# Crystal Arc — website

Marketing website for Crystal Arc, a Dubai luxury trophy, award and corporate-gift
manufacturer. Fully static Next.js, bilingual English/Arabic, deployed to Netlify.

**Currently live at:** https://crystalarc-website-testing-phase.netlify.app
**Intended domain:** https://www.crystalarc.net — *not yet pointed here.* See
[`docs/GO-LIVE.md`](docs/GO-LIVE.md).

---

## Quick start

```bash
npm install
npm run dev          # http://localhost:3000/en
```

Nothing is served from `/`. Go to `/en` or `/ar`.

## Build

```bash
npm run build        # writes the whole static site to out/
```

`output: "export"` — there is no server. `out/` is 199 HTML files plus assets.

To preview a production build the way the host serves it, note that `npx serve out`
resolves `out/en/index.html` before `out/en.html` and will show you a directory
listing instead of the page. Any static server that prefers `<path>.html` works.

## Deploy

`netlify deploy --prod` fails on this account with `JSONHTTPError: Forbidden` —
cause never established, and not a plan or permission limit as far as anyone could
tell. The working sequence is a draft deploy followed by an API publish:

```bash
npm run build
netlify deploy --dir=out --no-build    # prints a deploy id
netlify api restoreSiteDeploy --data \
  '{"site_id":"1c042422-bce4-40d4-b56b-ff599a3350b0","deploy_id":"<that id>"}'
```

`npm run publish` wraps this and runs the content checks first.

If `.netlify/` is missing after a fresh clone, run
`netlify link --id 1c042422-bce4-40d4-b56b-ff599a3350b0` — do not create a new site.

A blanket 404 on every route, `/` included, usually means the site was renamed.
Check `default_domain` via `netlify api getSite` before suspecting the build.

---

## Commands

| | |
|---|---|
| `npm run dev` | Dev server |
| `npm run build` | Static export to `out/` |
| `npm run lint` | ESLint |
| `npm run translations` | Checks every Arabic post matches its English original's tag structure |
| `npm run facts` | Checks the company figures are identical everywhere (25 years, 250 craftspeople, 200,000 sq ft, 40,000 projects, 15,000 clients) |
| `npm run jobs` | Validates `src/content/jobs.json` and prints which roles will show |
| `npm run og` | Rebuilds the 1200×630 social share cards in `public/og/` |
| `npm run publish` | Runs the checks, builds, deploys, promotes |

The first three of those gate a deploy through `npm run publish`. They exist because
the content files are hand-edited by someone who is not a developer, and each catches
a class of error that builds cleanly and ships wrong.

---

## Layout of the repo

```
src/app/(en)/en/…      English routes
src/app/(ar)/ar/…      Arabic routes — a copy of each English page, translated
src/app/globals.css    Site-wide styles
src/app/home.css       Homepage styles (NOT scoped — see CLAUDE.md)
src/components/        Nav, Footer, and per-section product components
src/lib/               i18n, blog, products, jobs, structured data, og cards
src/content/           blog-posts.json, blog-posts-ar.json, jobs.json
public/                All images, fonts, logos, _redirects
scripts/               Content audits and the og-card builder
docs/                  Handover, go-live runbook, Arabic blog method
```

Both locales are prefixed. `/` is a redirect handled at the CDN by
`public/_redirects`, because a fully static site has no request-time logic. **Do not
add `public/index.html`** — on Netlify a static file outranks a redirect rule and it
would silently disable the root redirect.

---

## Read before making changes

- **[`CLAUDE.md`](CLAUDE.md)** — the long list of things that have already gone wrong
  here and how to avoid repeating them. Worth twenty minutes before touching anything.
- **[`HANDOVER.md`](HANDOVER.md)** — what is outstanding, what needs a business
  decision, and what was verified.
- **[`docs/GO-LIVE.md`](docs/GO-LIVE.md)** — the cutover runbook.
- **[`docs/ARABIC-BLOG-HANDOFF.md`](docs/ARABIC-BLOG-HANDOFF.md)** — how the Arabic
  blog is structured and what the audits enforce.

Two that cost the most time when ignored:

**Replacing an image means a new filename, always.** `netlify.toml` caches
`/*.webp`, `/*.png` and `/*.jpg` for 30 days with no revalidation. Overwriting a
file in place leaves everyone who has already loaded the page on the old image for a
month, while the deploy looks perfect in a fresh browser. Suffix it (`-v2`, `-v3`)
and repoint the references. Don't shorten the cache header — the long cache is
deliberate.

**Each Arabic page is a separate copy of its English counterpart.** A change to an
English page does not reach its Arabic twin. Edit both. The intended end state is one
component per page serving both languages.

---

## Stack

Next.js 16 App Router · React 19 · `output: "export"` · Tailwind CSS 4 ·
Framer Motion · GSAP · `<model-viewer>` (CDN) for the one remaining 3D product
viewer · react-hook-form · sharp (build-time image processing) · TypeScript.
