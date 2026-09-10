# Crystal Arc website — handover

Last updated 1 September 2026.

**Staging:** https://crystalarc-website-testing-phase.netlify.app
**Intended domain:** https://www.crystalarc.net (not yet pointed here — see *Before going live*)
**Repo:** `Crystal-Arc-Factory-LLC/crystal-arc-website`, branch `main`
**Go-live runbook:** [`docs/GO-LIVE.md`](docs/GO-LIVE.md)

---

## Since the 31 August update

- **The client photography is in.** All 29 case studies, both locales.
  Source files come from `\\192.168.0.45\Marketing Shared\20052026 WEBSITE\Our Work Clients` —
  studio frames of the finished piece at the top level, process photography in
  `Factory/`. They are converted to WebP at 1400px q82 by
  `scripts/build-case-images.mjs`, which also decides placement.
  `sourceImages` in the JSON records the original filename behind every image,
  so any frame on the site can be traced back to the file it came from.

- **A photograph belongs to the client it is named after — full stop.** This is
  the rule that matters most in this area, and it was got wrong once. The
  factory frames are named for whichever client's job was on the bench, and an
  earlier pass placed them by what they appeared to *depict* instead, on the
  reasoning that hands at a bench are generic. They are not. The Ferrari study
  ended up showing Dubai Police, DP World and Al Rajhi Bank frames, and
  Kayali's closing section — copy about "Kayali's iconic perfume bottle" —
  showed a Dubai skyline award being boxed.

  A study now shows its own studio frames and its own factory frames, ordered
  against its section headings. Nothing else travels between studies.

  Crystal Arc's own general factory photography, already in `public/` and
  tied to no client, fills **at most two sections per study**. Only eight of
  those are usable: `factory-c1/c2/c3` duplicate `factory-1/2/3`, and
  `craft-commitment` and `craft-resin` show finished pieces — one branded for
  another client — so they are excluded for the same reason a client's frame
  cannot travel. Anything left over stays **blank** and renders as a single
  copy column. Blank beats wrong.

  `npm run case-images` rebuilds; `npm run case-audit` is the guard and fails
  if any study's sources resolve to another client, if a path is missing from
  disk, or if the alt arrays fall out of step with the images.

- **14 studies have their own factory photography; 15 do not.** Those 15 carry
  a hero and up to two general factory frames, with their remaining sections
  text-only. That is the honest state, not a bug. To fill them, drop bench
  photos into `Factory/` named after the client and re-run
  `npm run case-images` — placement is automatic. The 15 are listed in the
  script's output each run.

- **Process frames do not claim to be the client's piece.** A general factory
  frame is shared across studies, so calling one "Kayali — Cutting and
  Hand-Polishing" would be a claim about a photograph of someone else's job.
  `imageAlts` / `imageAltsAr` describe the work instead, in both languages. A
  studio frame of the client's own piece still takes the client name.

- **The frames were rebuilt around the photography, not the other way round.**
  Every supplied image is square (2048×2048) and the boxes were built for
  landscape. The hero was a full-bleed band — roughly 2.6:1 on a laptop — so
  cover-cropping a square into it discarded about 60% of the height and cut the
  tops off standing trophies. Museum of the Future and Adidas were both
  decapitated. The hero is now a split: copy in one column against the brand
  dark, the photograph whole in a square beside it, with the frame inside
  `.con` so the h1 still aligns with every section below. Story frames went
  4:5 → 1:1 and card frames 16:10 → 1:1. **Nothing is cropped anywhere on the
  page now.** RTL mirrors on its own — there is no separate Arabic rule.

- **A section with no photograph runs as a single copy column.** 15 of the 29
  studies shipped with a hero and nothing else; without this they would each
  have rendered five empty tonal squares.

- **Case studies share their own piece now.** All 58 case study pages (29 × 2
  locales) used the house social card. A 1.91:1 card has the same decapitation
  problem as the hero did, so `scripts/build-og.mjs` now sets square and
  portrait sources whole onto the brand surface and only cover-crops genuinely
  landscape ones.

- **Dead code removed.** `ProductCard`, `RevealOnScroll` and
  `ScrollVideoTrophy` (imported nowhere; the last pointed at a video that does
  not exist); `blog-img-map.json`; five unreferenced exports; and the
  `clsx`, `tailwind-merge`, `lottie-react` and `react-hook-form`
  dependencies, none of which were imported. **The forms are plain `useState`,
  not `react-hook-form`** — the old CLAUDE.md said otherwise and it was wrong.

  Also deleted: `src/app/(en)/en/products/[slug]/`. It was a **trap**, not
  just clutter — its `generateStaticParams()` returned the same four slugs
  that already have static folders, and static folders win, so editing it could
  never change a rendered page. The Arabic tree never had one.

- **Framer Motion loads on demand.** The app is wrapped in `LazyMotion` with
  `domAnimation`, so the feature bundle is fetched after paint rather than
  blocking it. Import `m`, not `motion` — `strict` is on and throws
  otherwise. `domAnimation` deliberately omits drag and layout animations;
  those need `domMax`, which is a larger bundle. Total transfer is roughly
  unchanged (630–711 KB uncompressed); the gain is that framer is off the
  critical path, not that it shrank.

- **`thumbs.json` records each master's real width** instead of assuming
  1600px, so `srcset` stops sending the browser to the master on screens the
  800px derivative already covers.

---

## Since the 27 August update

- **29 client case studies, both languages.** `/en/our-work/<client>` and
  `/ar/our-work/<client>`, indexed on Our Work behind sector filter chips. The
  Arabic is written natively, not translated. Content came from a supplied
  Google Doc; `src/lib/case-studies.ts` explains what was changed and why —
  six dummy testimonials dropped, and one heading set that repeated across all
  29 rewritten so the pages do not read as templated.
  **The photography has since landed** — see the 1 September section above.
  `plannedImages` is gone from both the JSON and the type; `images` is now
  populated for all 29, and `sourceImages` records what each came from.
- **The blog's legacy imagery is gone.** 98 of 124 images were under 800px —
  migrated Webflow assets, many 300×300. 37 heroes and 96 inline images now
  point at the studio archive in `public/work/`. No files were added or
  overwritten; only references moved, so the 30-day image cache is untouched.
- **Alt text everywhere.** 46% of blog images had `alt=""` and no post had any
  alt for its hero. Now 114 inline images per locale and 56 heroes, all
  described. The 333 empty alts left in the built output are related-post card
  thumbnails and are correct — each already sits inside a link carrying the
  post title.
- **49 blog titles were shipping truncated.** Every English `seoTitle` from the
  Webflow migration had been cut at ~40 characters with an ellipsis appended,
  and that string is what went in the `<title>` tag. Rewritten as complete
  titles. The Arabic ones were already clean.
- **Every post now has a route out.** Posts with no link to a product or
  contact page went 7 → 0; average links to a money page 1.8 → 3.3. Four
  rotating closing blocks rather than one, so 43 posts do not share a
  paragraph.
- **Keyword work from the Google Ads brief.** The Arabic product pages led with
  the company's vocabulary rather than the buyer's — دروع converted 37 times
  and appeared in neither title nor H1. Retitled. 44 blog posts now carry their
  commercial term in the first 100 words.
- **`--no-build` on deploys.** See CLAUDE.md; without it the Netlify Next
  plugin intermittently fails the publish.

---

## Since the 17 August handover

- **The Arabic blog is complete.** 55 posts translated, reviewed against their
  English originals tag by tag, and live. The site went from 24 pages to **141**, and to **199** once the case studies landed.
  Method and traps in [`docs/ARABIC-BLOG-HANDOFF.md`](docs/ARABIC-BLOG-HANDOFF.md).
- **Three wrong company figures were found live and corrected** — two pages said
  180 artisans and one said a 150,000 sq ft facility. `npm run facts` had holes
  that let all three pass; the patterns were widened first, then the copy fixed.
- **Phones get their own images.** Several card grids change shape below their
  mobile breakpoint, so `object-fit: cover` was taking a centre slice out of
  photography composed for a different frame and upscaling it 1.4×–2.5×. Thirty
  purpose-rendered files now serve through `<picture>` at 620px, 640px and 560px.
  Desktop is untouched.
- **Social sharing was broken on 127 of 139 pages** and is now fixed — see
  *Verified at handover* below.
- **The language switcher was wrong on 56 pages** — see the same section.
- **Six unused dependencies removed** (`three`, `@react-three/fiber`,
  `@react-three/drei`, `@sanity/client`, `@sanity/image-url`, `next-sanity`).
  None had an import site; none were in the shipped chunks.

---

## What the site is

A fully static Next.js 16 site (`output: "export"`), deployed to Netlify. **199 pages**
— twelve core pages plus a blog in each language: `/en` and `/ar`.

The table below is the core set. On top of it sit `/blog`, `/careers` and 111 blog
posts (55 English, 55 Arabic translations, and one original Arabic post that has no
English counterpart).

| | English | Arabic |
|---|---|---|
| Home | `/en` | `/ar` |
| Products | `/en/products` | `/ar/products` |
| Trophies & Awards | `/en/products/trophies-awards` | `/ar/products/trophies-awards` |
| Corporate Gifts | `/en/products/corporate-gifts` | `/ar/products/corporate-gifts` |
| Presentation Boxes | `/en/products/boxes` | `/ar/products/boxes` |
| Home & Décor | `/en/products/home-decor` | `/ar/products/home-decor` |
| About | `/en/about` | `/ar/about` |
| The Craft | `/en/craft` | `/ar/craft` |
| Our Work | `/en/our-work` | `/ar/our-work` |
| Contact | `/en/contact` | `/ar/contact` |
| Privacy | `/en/privacy` | `/ar/privacy` |
| Terms | `/en/terms` | `/ar/terms` |

**`/` is not a page.** It redirects — to `/ar` for a browser asking for Arabic,
otherwise to `/en` — from `public/_redirects`, which is the only request-time
logic a fully static site has. The English pages sat on bare paths until the
prefix move; those URLs 301 to `/en/*` from the same file. Do not add a
`public/index.html`: a static file outranks a redirect rule on Netlify and would
silently disable the root redirect.

Each Arabic page is a copy of its English counterpart with the text translated, so
the two share section order, layout, class names and images exactly.

---

## Deploying

`netlify deploy --prod` fails on this account with `JSONHTTPError: Forbidden` — cause
never established, and it is not a plan or permission limit as far as we could tell.
The working sequence from the repo root:

```bash
npm run build
netlify deploy --dir=out --no-build   # prints a deploy id
netlify api restoreSiteDeploy --data '{"site_id":"1c042422-bce4-40d4-b56b-ff599a3350b0","deploy_id":"<that id>"}'
```

If `.netlify/` is missing after a fresh clone, run
`netlify link --id 1c042422-bce4-40d4-b56b-ff599a3350b0` rather than creating a new site.

**A blanket 404 on every route usually means the site was renamed** — check
`default_domain` via `netlify api getSite` before suspecting the build.

---

## Outstanding — needs a decision from Crystal Arc

These are not bugs to fix in code; they need information or a call from the business.

1. **The enquiry form does not send anywhere.** Every form on the site — contact,
   product pages, brochure download — fakes a success message after a timeout and
   discards the submission. **No lead has ever been captured.** This must be wired to
   an inbox or CRM before the site takes real traffic. It is the single most important
   item on this list.

2. **The brochure PDF does not exist.** `BrochureDownload` collects a name and email
   and promises a catalogue that was never produced. Either supply the PDF or remove
   the section.

3. **The Riyadh phone number is a UAE mobile** (`+971 50 337 1388`). It is most
   exposed on the Arabic contact page, which leads with the Riyadh office because that
   version targets Saudi and Qatar.

4. **F1 and Amazon testimonials are unapproved.** Two homepage quotes are attributed
   to Formula 1 — Abu Dhabi Grand Prix and Amazon without written sign-off on record.
   Confirm before launch or replace them.

5. **Two `/craft` images are the wrong shape.** Crystal & Glass and Metal & Cast want
   landscape frames at roughly 2.3:1.

---

## Outstanding — review before launch

6. **A native Arabic speaker should read all Arabic copy.** It was written to be
   idiomatic rather than translated phrase by phrase, but it has not been reviewed by
   a native speaker. Roughly 12,000 words.

   One decision inside this to confirm: **client names in the logo walls are left in
   Latin** — `Aramco`, `Emirates NBD`, `First Abu Dhabi Bank`, `Abu Dhabi Ports` — 
   matching the logo artwork, which is itself Latin, and matching the English page.
   Several of these have well-known official Arabic names (أرامكو، بنك أبوظبي الأول،
   موانئ أبوظبي) and a reviewer may prefer those in the `alt` text. It affects screen
   readers and search, not what is on screen.

7. **Numerals: Arabic-Indic or Western?** Display figures are Arabic-Indic
   throughout (٢٥+، ٤٠٬٠٠٠+، ٢٠٠٬٠٠٠); sequence markers (01–05), years, phone numbers
   and street numbers stay Latin. Western digits are also common in Gulf commercial
   writing and some readers find them clearer for figures — still the reviewer's call.
   `scripts/audit-numerals.mjs` lists every figure on every page if they want to switch.

8. **A lawyer should review the Arabic privacy policy and terms.** They mirror the
   English section by section, and terms §18 states the English version prevails on
   any conflict — which limits the exposure — but a data-protection notice is a
   regulated document.

---

## Posting a job

Roles live in `src/content/jobs.json`, not in the page. To post one, copy an
existing entry, edit the text, set `"active": true` and a `closes` date, then:

```bash
npm run jobs      # checks the file and prints which roles will be live
npm run publish   # builds, re-checks, deploys and promotes
```

To take it down, set `"active": false` — leave the entry in the file as the
template for the next opening.

`npm run jobs` exists because this file is hand-edited by someone who is not a
developer. It catches a missing comma, a role with an English title and no
Arabic one, and a `closes` date already in the past. The first breaks the build
with a stack trace; the other two build cleanly and ship wrong.

A role is shown only if `active` is true **and** `closes` is in the future, so a
listing cannot quietly outlive its own deadline. With no open roles the page
shows a "send us your CV" panel; that is the normal state, not an error.

`title`, `location`, `summary` and the two lists each need an `en` and an `ar`
value — a missing one renders blank on that locale's page. `employmentType` for
Google is derived from the English `type` string, so write "Full-time",
"Part-time", "Contract", "Temporary" or "Internship".

**Applications go to a `mailto:`, deliberately** — see item 1 in *Outstanding*.
Until forms are wired up, a careers form would silently discard applications.
The address is `CAREERS_EMAIL` in `src/lib/jobs.ts`, currently
`info@crystalarc.net`; point it at a careers inbox when one exists.

Each open role emits `JobPosting` structured data, which is what makes it
eligible for Google Jobs. Nothing is emitted when no role is open. Google
prefers one URL per posting, so if hiring becomes regular, split the accordion
into `/careers/[slug]` pages — the blog routes are the pattern to copy.

---

## Before going live on crystalarc.net

- `www.crystalarc.net` currently serves an **older, unrelated site** through
  Cloudflare. Pointing the domain here is a cutover, not an addition.
- Canonicals, `hreflang` and the sitemap all already declare `https://www.crystalarc.net`,
  so they become correct at cutover and are wrong-but-harmless until then.
- The old Netlify site `cosmic-meringue-193364.netlify.app` sits on an account nobody
  here can reach and still serves a stale build. Ignore it.

---

## Verified at handover

Checked across all pages at 1440, 390 and 320 px, in both languages:

- No horizontal overflow
- No broken images
- Nothing left stuck at `opacity: 0`
- No failed requests
- Every internal link resolves — 0 broken targets across all 199 built pages
- Every Arabic page is `dir="rtl"`, `lang="ar"`
- Each Arabic page has the same section count and the same images in the same order
  as its English counterpart

Language, checked three ways (`scripts/`, see `scripts/README.md`):

- **Rendered text and attributes**, with FAQs, submenus, the mobile menu and
  testimonial slides opened first. The only Latin left is client names on their
  own logo artwork (Aramco, Cartier, DP World…), `info@crystalarc.net`,
  `Crystal Arc LLC`, the `crystalarc.net` reference in the legal pages, the two
  form placeholders, and the "English" language switch.
- **Source**, including everything that never reaches `<body>`: page metadata,
  keywords, JSON-LD, WhatsApp prefill messages and `href` query strings.
- **Numerals**, for Arabic-Indic used consistently within a page.

SEO and social, swept over the built output on **1 September 2026**:

| | |
|---|---|
| Pages built | 199 |
| Broken internal links | 0 |
| `img`/`srcset` pointing at a file that does not exist | 0 |
| Images without `alt` | 0 |
| Missing `<title>` / description / canonical / `hreflang` | 0 |
| Pages with `h1` ≠ 1 | 0 |
| Pages without JSON-LD | 0 |
| Case study pages on the generic social card | 0 (was 58) |
| Social card 1200×630, dimensions truthful | all |
| `og:url` | all |

The only page excluded from every count above is `/_not-found`, which
legitimately has no canonical, description or `h1`.

Mobile, measured on an iPhone 12 profile against the local build:

| Page | Total | Images | LCP |
|---|---|---|---|
| `/en/our-work` | 1,902 KB | 607 KB | 124 ms |
| `/en/our-work/museum-of-the-future` | 1,074 KB | 192 KB | 104 ms |
| `/en/our-work/dubai-police` | 1,264 KB | 381 KB | 104 ms |
| `/ar/our-work/emirates` | 1,364 KB | 203 KB | 128 ms |

Two real faults were found in that sweep and fixed:

- **Social sharing was broken on 127 of 139 pages.** Every `og:image` was a
  portrait or square product render — `factory-1.webp` is 1600×2385, most legacy
  blog heroes are 300×300 — while several also declared `og:image:width/height` of
  1200×630 against those files. Facebook, LinkedIn and WhatsApp lay out against
  the declared size and skip small files outright, so a shared link produced a
  mangled crop or no card at all. `public/og/*.jpg` are now purpose-built 1200×630
  JPEGs (JPEG because LinkedIn and older WhatsApp builds do not reliably render
  WebP previews). Rebuild with `npm run og`.
- **The language switcher was wrong on 56 pages.** `hasArabic()` only knew the
  fixed routes, so on all 55 English blog posts the Arabic toggle went to `/ar`
  rather than the translation — which has been live since 25 August. In the other
  direction the code assumed English always exists; it does not for
  `saudi-national-day-crystal-arc`, the original Arabic post, whose toggle pointed
  at a 404.

**Not yet measured:** Lighthouse on the Arabic pages. The English pages went through
a full performance pass, but the Arabic pages now carry the same payload (232 images
on `/ar`) and have never been scored.

---

## Things that will bite whoever works on this next

Full list in `CLAUDE.md`; the ones that cost the most time:

- **Replacing an image requires a new filename.** `netlify.toml` caches images for 30
  days with no revalidation, so overwriting in place leaves everyone who has already
  visited on the old image for a month while the deploy looks fine in a fresh browser.
  Suffix the file (`-v2`, `-v3`) and repoint the references.
- **Bulk string replacement corrupts things silently.** It has three times produced
  damage that passed the build, the type check and structural comparisons: a short
  mapping matching inside a longer sentence, a pattern matching only the tail after an
  HTML entity, and identifiers being rewritten (`TrophiesAwardsPage` became
  `الجوائزAwardsPage`, which is legal JavaScript). After any such pass, grep for Latin
  glued to Arabic, Arabic stranded in an English sentence, and the brand name in any
  form other than `Crystal Arc`.
- **Structural checks do not catch motion or direction.** The RTL marquees ran in the
  wrong direction and emptied the strip while every section count, image list and
  overflow check passed. Animation needs sampling over time.
- **Duplicate markup between locales.** Each Arabic page is a copy, so a change to an
  English page does **not** reach its Arabic twin. The intended end state is one
  component per page serving both languages; until then, edit both.
- `HomeClient.tsx` carries `@ts-nocheck` — 38 implicit-any and possibly-null errors
  from a verbatim port of the old inline script. Deliberate, scoped, still owed a
  typing pass.
