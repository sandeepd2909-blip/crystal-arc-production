# Audit scripts

Three checks for the Arabic pages. Run them after **any** change that touches
Arabic copy — especially any bulk find-and-replace, which has silently corrupted
this site four separate times.

Each Arabic page is a copy of its English counterpart with the text swapped, and
that swap has repeatedly gone wrong in ways nothing else catches: the build
passes, TypeScript passes, section counts and image lists match, and the page
still has English on it.

## Running them

Build and serve first — two of the three read the rendered DOM:

```bash
npm run build
npx serve out -l 3111
```

Then:

```bash
node scripts/audit-arabic.mjs http://localhost:3111   # rendered text + attributes
node scripts/audit-numerals.mjs                       # Western digits in Arabic text
python scripts/audit-arabic-source.py                 # source, incl. metadata + JSON-LD
node scripts/audit-mobile.mjs                         # phone quality at 390px
```

## What each one covers, and why

**`audit-arabic.mjs`** — walks the rendered DOM of all twelve Arabic routes and
reports Latin text. Three things in it exist because earlier versions missed
real bugs:

- it walks **text nodes**, not leaf elements. Walking elements skipped every
  heading split by `<em>`/`<br>` and every paragraph containing `<strong>`.
- it reports **mixed** nodes — Arabic and Latin in one string — separately from
  pure-Latin ones. A check of the form `hasLatin && !hasArabic` treats
  `"Tiered الهدايا Programmes"` as translated, which is how that string reached
  production.
- it **drives interactions** before reading: opens FAQs, `<details>`, the mobile
  menu, nav submenus and testimonial slides. Text that only exists after a click
  was never being read at all.

Output is noisy by design. Client names on logo artwork (`Aramco`, `Cartier`,
`DP World`) are correct in Latin and will always be listed. What matters is
prose, and anything tagged `MIXED`.

**`audit-numerals.mjs`** — the Arabic pages use Arabic-Indic digits, and a bulk
pass left neighbouring stats in different systems: `+٢٥`، `40,000+`، `٢٥٠`، `٠٪`
side by side in one row. Sequence markers (01–05), years, phone numbers and
street numbers stay Latin and are filtered out.

**`audit-arabic-source.py`** — reads the `.tsx` sources rather than the DOM, so
it covers what never reaches `<body>`: `metadata`, `keywords`, JSON-LD,
WhatsApp prefill messages and `href` query strings. It found that every Arabic
page opened WhatsApp with an English sentence typed in, and that two Google Maps
links searched for `الكريستال+Arc+Dubai` because a brand-name replacement had
landed inside a URL.

Approved Latin names live in the `ALLOW` list in each script. Add real client
names there; do not add English words to silence a finding.

**`audit-mobile.mjs`** — phone quality at 390px, in numbers rather than
impressions: total page height in screenfuls, image count, horizontal overflow,
any text under 12px, and any tap target under 40px. Run it after layout changes.
It is how the fifth-card orphan (390x848 against 194x422), the 6x2px testimonial
dots and the 23-screen Our Work page were all found — none of which is visible
in a screenshot of the top of the page.

**`audit-chrome.mjs`** — every page must have exactly one nav, one `<main>`,
one footer and one `<h1>`. `RootShell` renders the nav, `<main>` and footer for
both locales, so a page that *also* renders its own gets two of each and the
entire page appears twice, once inside the shell's `<main>` and once after it.

Six pages shipped that way — both blog indexes, all 56 posts, both careers
pages — and every other check passed them: no broken image, no failed request,
no console error, no overflow, and the `<h1>` count stayed at one because the
duplicate sat inside the same document. It was only visible by scrolling to the
bottom and seeing the footer twice.

Reads the built output, so run it after `npm run build`; it needs no server.
Exits non-zero on failure, so it can gate a deploy.

Rough targets: a landing page wants to come in under ~12 screenfuls, nothing
under 12px, nothing tappable under 44px, and no horizontal overflow at 320px.
