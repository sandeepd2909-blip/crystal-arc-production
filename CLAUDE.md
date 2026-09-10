# Crystal Arc — Project Guide for Claude Code

Crystal Arc is a Dubai-based luxury trophy / award / corporate-gift manufacturer. This repo is their full marketing website.

**Domain (final):** `https://www.crystalarc.net`
**Staging / current live URL:** `https://crystalarc-website-testing-phase.netlify.app` (Netlify siteId `1c042422-bce4-40d4-b56b-ff599a3350b0`). The old `cosmic-meringue-193364.netlify.app` site lives on a Netlify account nobody here can reach and still serves a stale build — ignore it. `www.crystalarc.net` is **not** this site; it still serves an older site via Cloudflare.
**Deploy:** `netlify deploy --prod` fails on this account with `JSONHTTPError: Forbidden` (cause unknown; not a plan or permission limit as far as we could tell). The working sequence from the repo root is a draft deploy followed by an API publish — run `npm run build`, then `netlify deploy --dir=out --no-build` which prints a deploy id, then `netlify api restoreSiteDeploy` with `{"site_id":"1c042422-bce4-40d4-b56b-ff599a3350b0","deploy_id":"<that id>"}`. If `.netlify/` is missing after a fresh clone, `netlify link --id 1c042422-bce4-40d4-b56b-ff599a3350b0` rather than creating a new site.
**`--no-build` is not optional.** Without it, `netlify deploy --dir=out` still
runs a build on Netlify, and `@netlify/plugin-nextjs` intermittently fails there
with `Failed publishing static content` — twice in one session, with a retry
sometimes papering over it. The build has already happened locally; `out/` is
the finished site. Skipping the remote build removes the failure and the wait.

**A blanket 404 on every route, `/` included, usually means the site was renamed** — check `default_domain` via `netlify api getSite` before suspecting the build.
**Reference assets:** Raw source photos/GLBs used to (re)generate site images live outside this repo, in a sibling folder typically named `crystal-trophy-site/` — ask the user for its location if an image-replacement task references source files not found here.

## The homepage — migrated into Next (2026-08-14)

The homepage used to be a standalone `public/index.html` served outside the Next router. **That is no longer true.** It now lives in the app router like every other page:

- `src/app/page.tsx` — the markup, a server component
- `src/app/home.css` — its styles, extracted from the old inline `<style>` block
- `src/components/HomeClient.tsx` — the old vanilla-JS behaviour (reveals, cycling word, stat counters, testimonial rotator), ported verbatim into one `useEffect`

Consequences of the move, all of which have bitten already:

- `public/index.html` is **deleted**. Don't recreate it — it would shadow the Next route.
- Link to `/` with a normal Next `<Link>` now. The `item.href === "/"` special-case in `Nav.tsx` is gone.
- The homepage uses the **shared `Nav.tsx` / `Footer.tsx`**. There is no longer a second inline nav to keep in sync.
- `home.css` is imported by `page.tsx` but Next hoists it into the global stylesheet, so **its rules are not scoped to the homepage**. When the styles were extracted, 59 nav/footer rules were stripped for this reason — including bare `nav{position:fixed;…}` and `footer{…}` selectors that would have leaked onto every page. If you add a rule to `home.css`, give it a homepage-specific class.
- `HomeClient.tsx` carries `@ts-nocheck` — 38 implicit-any / possibly-null errors from the verbatim JS port. Deliberate, scoped, and still owed a proper typing pass.

`public/_redirects` holds one back-compat rule, `/preview/*  /  301`, so previously shared `/preview/` links still land somewhere sensible.

## Tech stack
Next.js 16.2.6 App Router, React 19, `output: "export"` (fully static site), deployed to Netlify (`publish = "out"`). Tailwind CSS 4. Framer Motion + GSAP for animation. Google's `<model-viewer>` web component (loaded from a CDN script, see `src/components/ModelViewer.tsx`) for the one remaining 3D GLB viewer. `sharp` for image processing. `@gltf-transform/cli` (a dev-time CLI tool, not a runtime dependency) for GLB compression. TypeScript throughout.

The **full** runtime dependency list is `framer-motion`, `gsap`, `next`, `react`, `react-dom` and `sharp` — that is all of it. `three` / `@react-three/*` and `@sanity/client` / `next-sanity` were removed when the viewers went; `clsx`, `tailwind-merge`, `lottie-react` and `react-hook-form` were removed on 31 August 2026 as never-imported. **The forms are plain `useState`, not `react-hook-form`** — don't reach for it without installing it first.

Framer Motion is loaded through `src/components/MotionProvider.tsx`, a `LazyMotion` with `domAnimation` wrapped around the app in `RootShell`. Two consequences: import `m` rather than `motion` (`strict` is on and will throw on a `motion.*`), and `domAnimation` deliberately omits drag and layout animations — those need `domMax`, which is a bigger bundle.

## Theme
Fonts: Cormorant Garamond (display), Plus Jakarta Sans (body). Colors: cream `#F7F2EB`, surface `#EDE8DC`, text `#1A1512` (CSS var `--color-ivory`, confusingly — it's actually the *dark* text color, not light), gold `#8C6820`, maroon `#6B1A1A`. Dark CTA/stat-band sections use `#3D1010`. Container class is **`.con`**, not `.container` — using `.container` silently breaks layout since it doesn't exist in this codebase's CSS.

## Nav — one implementation
`src/components/Nav.tsx` serves every page including the homepage. (It used to be two implementations, the second inlined in `public/index.html`; that file is gone.)

## Pages — both locales are prefixed
Built under **`/en/*`** and **`/ar/*`**: `/`, `/about`, `/craft`, `/contact`, `/products`, `/products/{trophies-awards,corporate-gifts,boxes,home-decor}`, `/our-work`, `/privacy`, `/terms` — so `/en/about` and `/ar/about`, and the homepages are `/en` and `/ar`.

**Nothing is served from a bare path.** There is no `out/index.html`; `/` is a redirect handled at the CDN in `public/_redirects`, because `output: "export"` means no server exists to choose a locale at request time. English sat on bare paths until the prefix move, and those old URLs 301 to `/en/*` from the same file.

Two consequences worth knowing before editing `public/_redirects`:
- **A static file beats a redirect rule.** Netlify only applies a rule ahead of an existing file if the rule is forced with `!`. So creating any `public/index.html` would silently kill the root redirect.
- **The old-URL rules are listed one by one on purpose.** A `/*  /en/:splat` catch-all would run before static-file matching and swallow `/ar/*`, every asset path and the 404 itself.

Build routes live in route groups that carry the prefix as a real segment — `src/app/(en)/en/...` and `src/app/(ar)/ar/...` — with only `layout.tsx` at the route-group root.
`/careers` is built in both locales. `/industries` is **not a page** — the word appears only as a section heading (`IndustriesStrip`) and a dictionary key; nothing links to a `/industries` URL, and the built output contains no reference to one. Don't "fix" it by adding a route.
There is **no** `products/[slug]` dynamic route in either locale. One existed under `(en)` and was deleted on 31 August 2026: its `generateStaticParams()` returned only the four slugs that already have dedicated static folders, and a static folder wins, so the file could never affect a rendered page. Add a fifth product as a static folder like the other four.

## Arabic blog translation — COMPLETE

All 55 English posts are translated, `ready`, and live, plus one
Arabic-only post (`saudi-national-day-crystal-arc`) that has no English
counterpart — so the built output is 55 EN and 56 AR blog pages. That
asymmetry is deliberate; the language switcher checks `hasEnglish()` /
`hasArabic()` before offering a swap, and the Arabic-only post correctly
offers none.

**Read `docs/ARABIC-BLOG-HANDOFF.md` before adding a post** — it covers the
data model, the structure-matching rule and the voice conventions, all of
which still apply to anything new.

Short version: translations live in `src/content/blog-posts-ar.json`, must
carry the same tag structure as their English original, and are gated behind a
`ready` flag. `npm run translations` enforces all of it.

Four checks now gate a deploy: `npm run translations`, `npm run facts`,
`npm run jobs`, and the chrome audit — all wired into `npm run publish`.

## Known open issues (as of last handoff)
- **Brochure download is broken**: `src/components/products/BrochureDownload.tsx` links to `/brochure/trophies-awards.pdf`, but `public/brochure/` doesn't exist. The form's submit handler also just fakes a success state after a `setTimeout` — it never actually sends the enquiry anywhere.
- F1 and Amazon testimonial quotes on the homepage (`src/app/page.tsx`) are unverified/unapproved client attributions — confirm sign-off before treating as final.

## Contact info (for reference in copy)
WhatsApp `+971 56 536 4384`. Dubai HQ (public address — **never show the literal factory address publicly**; say "factory tours available on request" instead): 1901 Al Moosa Tower 1, Trade Center First, Dubai. Abu Dhabi: Rolex Building 6, `+971 2 644 4220`. Riyadh: 4513 King Abdulaziz Road, `+971 50 337 1388`. Hours Mon–Sat 9am–6pm GST.

## Recurring gotchas
- **"Blank/broken" is very often a missing `<script>`, not a logic bug.** Before debugging animation/interaction logic, grep whether the JS was actually written to the file — this has been the root cause repeatedly (reveal animations, mobile menu, testimonial sliders).
- `src/app/products/boxes/page.tsx` uses **CRLF line endings**, unlike the other product pages (LF). String-replace edits can silently fail there if the search string uses `\n` — verify the edit actually landed, or use a raw Node script for edits in that file.
- `public/index.html` has a "LIGHT THEME OVERRIDES" CSS section (~line 550+) that overrides earlier dark-theme rules purely by *cascade order*, not `!important`. When fixing a color/style bug there, check both the base rule and this override section.
- Testimonial sliders exist in **two separate, unrelated implementations**: `public/index.html` (homepage, vanilla JS) and `src/components/products/TestimonialRotator.tsx` (product pages, React). A fix in one does not apply to the other.
- Shared image constants (e.g. `IMG.sports`) in product pages are often reused across multiple sections on the same page — grep all usages before repointing one, or you'll change more than intended.
- When centering content inside a full-bleed colored band (e.g. a dark stats strip), the colored element must stay the **outer**, full-width block, with `.con` nested **inside** it to constrain just the content row. Wrapping the colored band itself in `.con` shrinks the color to 1280px and exposes the section's true background as ugly bars on the edges.
- When cropping supplied photos to a card's aspect ratio with `sharp`, `position:'attention'` (saliency-based) can produce an off-center, lopsided crop for an already-centered subject. Default to `position:'center'`; only use `'attention'` if a plain center crop demonstrably clips the interesting part. Always view the actual cropped output before wiring it in.
- Before replacing an image the user points to, grep the filename across `src/` — several `public/*.webp` files are shared across multiple sections/pages. If shared, save the replacement under a new filename and repoint only the specific section meant, rather than overwriting the shared file.
- **Bulk string replacement corrupts things silently.** The Arabic pages were built by copying the English file and swapping text, and that left five classes of damage that no build error, type check or structural test catches:
  - a short mapping matching inside a longer sentence — a one-word `"Crystal"` entry turned the brand name into `"الكريستال Arc"` in twelve places including JSON-LD, and `"Gift"` turned `Tiered Gift Programmes` into `Tiered الهدايا Programmes`
  - an entity-tolerant pattern matching only the tail after `&apos;`, leaving `Trusted by the Region&apos;` glued to the Arabic
  - an identifier being rewritten (`getRelatedProducts` → `getRelatedالمنتجات`, `TrophiesAwardsPage` → `الجوائزAwardsPage` — legal JavaScript, compiles fine)
  - a replacement landing **inside a URL**: two Google Maps links shipped as `?q=الكريستال+Arc+Dubai`, so the map searched for the wrong thing
  - numerals left in two systems on one line — `٢٠٠٬٠٠٠ قدم مربعة. 250 حرفيًا.`
  **Use `scripts/` after any such pass** — `audit-arabic.mjs`, `audit-numerals.mjs`, `audit-arabic-source.py`. Read `scripts/README.md` first; it explains which blind spot each one closes.
- **Write replacement keys as whole distinctive strings, never single words.** Every corruption above came from a key short enough to match somewhere it was not meant to. And read/write with `newline=""` — several of these files are CRLF, so a multi-line key written with `\n` silently matches nothing, and a universal-newline round-trip rewrites every line ending in the file.
- **"Is there English left?" is three different questions.** A check for Latin-with-no-Arabic misses `Tiered الهدايا Programmes`. A check of the rendered DOM misses `metadata`, JSON-LD, WhatsApp prefills and `href` query strings. A check of initial page load misses FAQ answers, the mobile menu, nav submenus and testimonial slides. Each of those gaps shipped a real bug that the user found before we did.
- **Replacing an image means a new filename, always.** `netlify.toml` caches `/*.webp`, `/*.png`, `/*.jpg` for `max-age=2592000` with no revalidation, so overwriting a file in place leaves everyone who has already loaded the page — the user very much included — on the old image for **30 days**, with the deploy looking perfectly fine to a fresh browser. Suffix the new file (`-v2`, `-v3`) and repoint the references. Don't "fix" this by shortening the cache header; the long cache is deliberate and the site is being tuned for a 100/100 Lighthouse score.
- The 5-item category/material card grids (`.sec-5-grid`, `.cat-card-inner` / `.mat-card-inner` in `globals.css`) use `aspect-ratio` (not a fixed pixel height) to size responsively — this was fixed after a real bug where a fixed mobile `min-height` produced a wrong aspect box and crushed portrait photos into an over-zoomed sliver. If touching this grid, verify mobile rendering, not just desktop.
- Playwright's `isMobile: true` device-emulation mode has intermittently rendered the fixed nav's `backdrop-filter` background as transparent in screenshots (page content bleeding through legibly) — this is a headless-Chromium emulation compositing artifact, not a real site bug. Cross-check with a plain viewport resize (no `isMobile`/`hasTouch`) before treating it as real.

## GLB (3D model) workflow

**Only one 3D viewer is left on the site: Home & Décor (`model-1.glb`).** On 2026-08-15 the viewers on the homepage, Corporate Gifts, and Trophies & Awards were replaced with supplied still photos (`/hero-showpiece-v2.webp`, `/cg-showpiece-v2.webp`, `/ta-showpiece-v2.webp` — 1100×1640) at the user's request. `model.glb`, `model-2/3/4/5.glb` and the dead `HeroModel.tsx` were deleted with them — 11.9MB out of the deploy. They remain in git history if ever needed.

Source renders live in `\\192.168.0.45\Marketing Shared\20052026 WEBSITE\NEW GEN\GLB RPLC\` as `HOME PAGE`, `CORPORATE GIFTS`, `TROPHIES AND AWARDS`. The user re-renders in place under the same names, so **check the file dates, don't assume the dimensions are unchanged** — the 2026-08-17 batch switched from portrait 1696×2528 to landscape 2400×1792.

**Don't pre-crop these to fit the panel.** `.hero-image-panel` is one half of a `1fr 1fr` grid with `minHeight: 100vh`, so its aspect ratio is *the visitor's window* — 0.80 on a MacBook, 0.89 at 1920×1080, 1.19 on an ultrawide. No fixed image size fills all of those, and cropping to one leaves empty bands at every other size (this was shipped and had to be undone). Ship the uncropped landscape frame at several widths and let `object-fit: cover` crop per window. The subject sits in the middle ~40% horizontally with generous backdrop, so it survives every realistic panel shape — verified from 320px to 3440px.

Two traps in that layout, both already paid for:
- `sizes` must be expressed in **`vh`**, not `vw`. Under `cover` with a landscape image in a portrait panel the drawn width is set by the panel's *height* (`100vh × 1.339`), so a `50vw` hint under-serves and the image renders soft. The product panels use `sizes="(max-width: 960px) 100vw, 134vh"`.
- Below 1024px the panel stacks full-width. It needs `aspect-ratio` rather than a fixed pixel height, or it becomes a 2.4:1 letterbox at tablet width that slices the top and base off the piece. And it needs an explicit `width: 100%` alongside — with `aspect-ratio` set and the height capped by `max-height`, the browser shrinks the *width* to preserve the ratio and leaves a band down the right-hand side.

The stills are shown on mobile too. The `display:none` rules that used to hide those hero panels on small screens existed only because a multi-megabyte viewer was untenable on a phone; that reason is gone, and hiding them would have meant downloading images nobody sees.

The pipeline below still applies to `model-1.glb` and any future model.

**Compression pipeline** (`@gltf-transform/cli`, install via `npx` on demand):
```
gltf-transform dedup in.glb step1.glb
gltf-transform resize step1.glb step2.glb --width 2048 --height 2048   # optional, only if downsampling texture resolution
gltf-transform webp step2.glb step3.glb --quality 95
gltf-transform draco step3.glb out.glb
```
**Order matters**: Draco must always run **last**. Running any texture operation (`webp`, `resize`) on an already-Draco-compressed file forces it to decode the geometry back to raw floats without re-compressing — the file gets *bigger*, not smaller.

Use **Draco** for geometry compression, not **Meshopt** — the site's `<model-viewer>` CDN build (`model-viewer@4.0.0`, loaded via `src/components/ModelViewer.tsx`) doesn't have `setMeshoptDecoder()` wired up, so Meshopt-compressed models fail to load silently (this cost a full debugging cycle previously — several models were wrongly diagnosed as "broken 3D models" when the real issue was this one setting). `EXT_texture_webp` (from the `webp` step) has been confirmed to render fine on this exact `model-viewer` build.

**Verifying a GLB change before shipping**: don't trust `mv.loaded` alone — for large files it can report `true` well before the model is actually visible. Poll for `mv.loaded` with a generous timeout (10-40s depending on file size), then wait ~1.5-2s more before screenshotting. To reproduce a close-zoom view for quality comparison in a test script, `cameraOrbit` alone doesn't zoom much — you need a narrow `fieldOfView` override too:
```js
mv.minFieldOfView = '1deg'; mv.setAttribute('min-field-of-view', '1deg');
mv.fieldOfView = '2deg';
mv.cameraOrbit = '0deg 90deg 105%';
mv.jumpCameraToGoal();
```
Note `mv.getFieldOfView()` can read back stale/default values even when the override visibly worked — judge by the rendered screenshot, not that getter.

If testing multiple GLB variants side-by-side, the cleanest approach is a throwaway route (e.g. `src/app/glbtest/page.tsx`) rendering each with `GlbScene`, built and served locally (`npm run build && npx serve out`) — **always delete the throwaway route and any `public/test-*.glb` files before the final deploy.**

## Working style notes
- Deploy without asking for confirmation once changes are built and visually verified via screenshot — just deploy and report what shipped afterward.
- Keep tone neutral and matter-of-fact; don't over-explain small decisions or re-push a pending decision across multiple messages — state findings once and wait.
- When auditing mobile layouts or verifying a fix with Playwright, scroll-trigger `Reveal`/`IntersectionObserver`-driven animations before judging a section "blank" — a `window.scrollTo` loop that stops short of the real section leaves Framer Motion content at `opacity:0` (looks like a bug, isn't one). Locate the target element's real `getBoundingClientRect()` via `page.evaluate` rather than guessing a scroll offset.
