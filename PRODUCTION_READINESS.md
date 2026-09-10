# Production readiness - September 2026

## Completed in this package

- Enquiry capture: homepage, product-enquiry and brochure-request forms now use Netlify Forms with a honeypot and real submission handling. They no longer claim success when data was discarded.
- Conversion flow: homepage forms validate required fields and finish on locale-specific thank-you pages. Product and brochure forms show a genuine success or failure state.
- Brochure: `public/brochure/trophies-awards.pdf` is included and the brochure form exposes it only after the lead request has been captured.
- Legal/reputation risk: the unapproved Formula 1 and Amazon testimonials and associated controls have been removed. The incorrect Riyadh phone number has been replaced with a WhatsApp enquiry instruction.
- Build quality: lint-blocking errors have been addressed and the full static export plus the repository's content, language, SEO and link checks have been rerun.

## Required before DNS cutover

1. In Netlify Forms, enable email notifications (or a webhook/CRM destination) for `homepage-enquiry-en`, `homepage-enquiry-ar`, `product-enquiry` and `brochure-request`, then submit one live test for each. The build captures entries, but recipient routing is an account setting, not a source-code setting.
2. Confirm the exact Saudi office phone number before replacing the WhatsApp instruction with a local telephone contact.
3. Have a qualified Arabic reviewer and legal counsel approve the Arabic copy, terms and privacy policy.
4. Add an approved analytics measurement ID and consent configuration if tracking is required. No analytics identifier or consent policy was included with this archive, so none has been invented.
5. Complete the Cloudflare-to-Netlify domain cutover described in `docs/GO-LIVE.md`, then test forms, redirects, sitemap and HTTPS on the production domain.

## Recommended post-launch work

- Supply a redirect map for the historical `/product/*` URLs before the old domain is switched over.
- Confirm client permissions for any remaining named customer logos and testimonials.
- Run Lighthouse and Core Web Vitals monitoring on the live English and Arabic pages.
