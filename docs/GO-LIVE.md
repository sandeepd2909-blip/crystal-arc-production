# Go-live runbook — crystalarc.net

Written 27 August 2026, for whoever performs the cutover.

The site is built, deployed and serving at
**https://crystalarc-website-testing-phase.netlify.app**. Everything below is
about moving it to `www.crystalarc.net` and the things that must be true before
and after that happens.

---

## The one thing to understand first

`www.crystalarc.net` **currently serves a different, older website** through
Cloudflare. This is a cutover, not an addition. Whoever controls that Cloudflare
zone has to change where the domain points; nothing in this repo can do it.

Everything in the built site — canonical URLs, `hreflang`, the sitemap, the
`og:url` on every page, `robots.txt` — already declares
`https://www.crystalarc.net`. They are wrong-but-harmless today and become correct
the moment the domain points here. **Do not "fix" them to the Netlify URL.** If
they were changed and then changed back, Google would see two canonical moves.

There is also an old Netlify site, `cosmic-meringue-193364.netlify.app`, on an
account nobody at Crystal Arc can reach. It still serves a stale build. Ignore it —
but be aware it exists if it ever shows up in a search result.

---

## Blocking — do not go live until these are done

### 1. The enquiry forms do not send anywhere

Every form on the site — contact, product enquiry, brochure download — shows a
success message after a `setTimeout` and discards the submission. **No lead has
ever been captured.** Sending real traffic to a site that silently drops enquiries
is worse than not launching.

The handler is in the form components under `src/components/products/`. Netlify
Forms is the shortest path for a static site on this host (add `netlify` and a
`form-name` hidden field to the `<form>`, and remove the fake handler); a POST to
a CRM endpoint works equally well.

Careers applications deliberately use a `mailto:` for the same reason — see
`CAREERS_EMAIL` in `src/lib/jobs.ts`, currently `info@crystalarc.net`.

### 2. The brochure PDF does not exist

`BrochureDownload` collects a name and email and promises a catalogue at
`/brochure/trophies-awards.pdf`. `public/brochure/` is not in the repo. Either
supply the PDF or remove the section — as shipped it collects data and delivers a
404.

### 3. Unapproved client attributions

Two homepage testimonials are attributed to **Formula 1 — Abu Dhabi Grand Prix**
and **Amazon** with no written sign-off on record. Get sign-off or replace them
before the site is public.

---

## Cutover steps

1. **Add the custom domain in Netlify** — site `crystalarc-website-testing-phase`,
   ID `1c042422-bce4-40d4-b56b-ff599a3350b0`. Add both `crystalarc.net` and
   `www.crystalarc.net`, with `www` as the primary, so the apex redirects to it.
   Every canonical on the site says `www`.

2. **Point DNS.** In whichever zone is authoritative (Cloudflare today), change the
   `www` record to Netlify's target and the apex to Netlify's ALIAS/ANAME or their
   load-balancer IP. If Cloudflare stays in front, set the records to **DNS-only
   (grey cloud)** until Netlify has issued its certificate, or the ACME challenge
   fails behind the proxy.

3. **Wait for the certificate.** Netlify provisions Let's Encrypt automatically once
   DNS resolves. Do not skip ahead — a browser warning on day one is expensive.

4. **Check the redirects survived.** `public/_redirects` carries the root
   language redirect and the pre-prefix back-compat rules. After cutover:

   ```
   https://www.crystalarc.net/          → /en   (or /ar for an Arabic browser)
   https://crystalarc.net/              → https://www.crystalarc.net/…
   https://www.crystalarc.net/about     → /en/about   (301)
   https://www.crystalarc.net/preview/x → /            (301)
   ```

5. **Then the post-launch list below.**

---

## After the domain is live

- **Google Search Console** — add `https://www.crystalarc.net` as a domain
  property, submit `https://www.crystalarc.net/sitemap.xml` (197 URLs, with
  `hreflang` annotations for both locales). Watch the International Targeting
  report for the first fortnight; hreflang errors show up there first.
- **Bing Webmaster Tools** — import from Search Console.
- **Analytics.** There is currently **no analytics on the site at all** — no GA4,
  no GTM, no Plausible. If tracking is wanted, it has to be added; nothing is
  half-wired waiting to be switched on.
- **Re-test the social cards.** Paste the homepage into the
  [Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/) and the
  [LinkedIn Post Inspector](https://www.linkedin.com/post-inspector/) and hit
  re-scrape. Both cache aggressively and both will have cached the pre-launch state
  if anyone shared a staging link.
- **Google Business Profile.** The site emits `LocalBusiness` structured data on
  every page with the Dubai coordinates. Make sure the NAP (name, address, phone) in
  `src/lib/structured-data.ts` matches the Business Profile exactly — a mismatch is
  a common local-SEO drag.
- **Keep the Netlify URL alive.** Don't delete it; it is the fallback if the
  cutover needs reverting.

---

## What was checked, and what wasn't

Verified across the built output on 27 August 2026:

| | |
|---|---|
| Pages built | 199 |
| Broken internal links | 0 |
| Images without `alt` | 0 |
| Pages missing `<title>` | 0 |
| Pages missing meta description | 0 (excluding 404) |
| Pages missing canonical | 0 (excluding 404) |
| Pages missing `hreflang` | 0 |
| Pages with `h1` ≠ 1 | 0 (excluding 404) |
| Pages missing JSON-LD | 0 |
| Social card 1200×630 with truthful dimensions | all |
| `og:url` present | all |
| Arabic pages with `dir="rtl"` | all |
| Sitemap URLs | 197 |
| `robots.txt` | allows all, points at the sitemap |

**Not measured: Lighthouse on the Arabic pages.** The English pages went through a
full performance pass; the Arabic pages carry the same payload and have never been
scored. Worth running once the domain is live, since the score depends on the host's
compression and caching, not just the build.

**Not measured: Core Web Vitals on real traffic.** No field data exists yet.

---

## Known-good numbers, for comparison after any change

Measured against the local build, uncompressed. Netlify serves these with brotli,
so real transfer is roughly a third of the text figures.

| Page | Mobile | Desktop |
|---|---|---|
| `/en` | 1,977 KB | 2,180 KB |
| `/en/products/trophies-awards` | 1,829 KB | 1,701 KB |
| `/en/blog` | 2,541 KB | 2,169 KB |
| `/en/products/home-decor` | 1,806 KB | 1,471 KB |

HTML over the wire is 20–34 KB per page. The largest JS chunk is 222 KB
uncompressed. The blog index lazy-loads 53 of its 56 images.

Image compression was audited and left alone: re-encoding every raster at WebP q82
saves 9% overall, and 8 of the 10 files worth more than 40 KB are unreferenced PNGs
that never ship. See [`UNUSED-ASSETS.md`](UNUSED-ASSETS.md).
