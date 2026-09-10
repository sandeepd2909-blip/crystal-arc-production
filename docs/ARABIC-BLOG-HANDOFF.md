# Arabic blog translation — complete

Written 25 August 2026 to hand the work over; finished the same day.

**55 of 55 English posts translated and live.**

The Arabic blog went from 1 post to 55. Every translation is paired with its
English original in `hreflang`, and every one passed the structure, facts and
link checks before it shipped. The final sweep confirms all 55 pairs carry the
same `h2`/`h3`/`h4`/`figure`/`table`/`p`/`li` counts, the same images in the
same order, and no `/en/` links stranded in Arabic prose.

Nothing about the translation work is outstanding. What remains open is listed
at the bottom and needs the client, not a translator.

---

## How a translation is made

Translations live in `src/content/blog-posts-ar.json`, separate from
`blog-posts.json` so the migrated English stays exactly as scraped and a
reviewer can read a whole wave as one diff.

```json
{
  "slug": "same-slug-as-the-english-post",
  "ready": true,
  "title": "…",          // the h1 and OG title, full length
  "seoTitle": "…",        // ≤46 chars — the layout appends " | كريستال آرك"
  "description": "…",     // ≤160 chars
  "html": "…"
}
```

`date`, `hero` and `words` are **inherited from the English original** — a
translation cannot drift from the post it translates or acquire its own
publication date.

`ready: false` hides a translation completely: not rendered, not linked, not in
the sitemap, not named in hreflang. A half-reviewed wave is invisible rather
than half-published.

### The rule that matters

**The Arabic must carry the same structure as the English.** Same number of
`h2`, `h3`, `figure`, `p`, `li`; the same image files in the same order;
internal links repointed from `/en/` to `/ar/`. `npm run translations` fails
the build if any of that drifts.

In practice: open the English `html`, map its structure (count the tags), then
write Arabic prose into the same skeleton. The empty `<p>‍</p>` paragraphs and
stray `<h2>‍</h2>` that the Webflow export left behind have to be reproduced
too, or the counts won't match.

### Working method that has held up

Write a throwaway Python script that builds the entry and merges it into the
JSON, rather than hand-editing the JSON. Bash heredocs choke on the Arabic —
use the Write tool to create the script, then run it. Always
`sys.stdout.reconfigure(encoding="utf-8")` or printing Arabic dies on the
Windows console codepage.

Two per batch has been the sustainable rate; four is possible on shorter posts.

---

## How the cycle was cleared

The last nine posts cross-linked each other and the graph had cycles, so no
ordering resolved it. Two passes settled it:

1. **Outward from the unblocked posts, two per batch.** Each batch published on
   its own. `the-impact-of-personalised-medals` was the highest-value unlock —
   seven posts were waiting on it — so it went first.
2. **The remaining nine in one batch,** flipped to `ready: true` together. This
   was forced, not chosen: the audit checks link targets for *every*
   translation including unready ones, so staging them with `ready: false`
   fails just as publishing a subset would.

Re-derive the state at any time:

```bash
node -e "
const posts=require('./src/content/blog-posts.json');
const done=new Set(require('./src/content/blog-posts-ar.json').filter(t=>t.ready).map(t=>t.slug));
posts.filter(p=>p.lang==='en'&&!done.has(p.slug)).forEach(p=>{
  const deps=[...new Set((p.html.match(/href=\"\/en\/blog\/([a-z0-9-]+)\"/g)||[])
    .map(x=>x.match(/blog\/([a-z0-9-]+)/)[1]))].filter(d=>!done.has(d));
  console.log((deps.length?'BLOCKED':'ready   ')+'  '+p.slug);
});"
```

### Structural traps in the newer posts

The nine were newer than the rest and did not follow the earlier shape:

- Headings carry `id=` and `tabindex="-1"`, and some are plain — not every
  heading wraps its text in `<strong>`. Copy each one as it is.
- `how-to-choose-custom-trophies` has two `<figure><table>` blocks that must be
  reproduced cell for cell; `npm run translations` counts `table`.
- `riyadh-recognition` and `premium-trophies` put `<img>` raw inside `<p>`
  rather than in a `<figure>`, and separate blocks with newlines.
- `breaking-the-mould` has an empty `<ul role="list"></ul>` and an empty
  `<figure><div></div></figure>`, and several paragraphs end on a colon
  introducing a list the Webflow migration dropped. The dangling colons are in
  the English; they were reproduced, not silently repaired.
- The audit does not count `h4`, `table` cells, `br`, `em` or `strong`. Check
  those by hand — one stray `<strong>` slipped past the audit and was only
  caught by a full tag-by-tag diff.

### Defects found in the English while translating

Fixed in the English first, so the Arabic was written against corrected copy:

| post | was | now |
|------|-----|-----|
| `riyadh-recognition` | "180-plus artisans" | 250 |
| `premium-trophies-and-awards` | "180 skilled artisans" | 250 |
| `premium-trophies-and-awards` | "150,000-square-foot" | 200,000 |

All three were live and all three passed `npm run facts`, because the patterns
anchored the number straight onto the noun and onto `sq ft`. They now allow an
optional `+`/`plus`/`-plus`, one qualifier word, and the spelled-out
`square foot/feet`. **If you add a figure to the canon, test that the audit
fails before you fix the copy** — that is the only way to know the pattern
bites.

One defect was left alone deliberately: `ramadan-2025-trophies` repeats the
five paragraphs of "Choosing the Right Trophy" verbatim under its closing
heading. The Arabic mirrors the duplication so the structures match. Fix the
English first, then the Arabic follows.

## Voice

Approved by the client after the first post. Written as Arabic, not as
translated English sentences — compare the opening of
`saudi-national-day-gifts` against its source.

Conventions in force:

- Display figures use **Arabic-Indic digits** (٢٥، ٤٠٬٠٠٠، ١٥٬٠٠٠); calendar
  years stay Latin (2024, 2025). Getting this backwards on *Year of the Camel*
  would turn a cultural reference into nonsense.
- Brand is **كريستال آرك**.
- Client names, publication names (Harvard Business Review, Forbes, Gallup,
  Psychology Today) and technical terms (LED, ISO, CNC, PDF) stay Latin. They
  are in the audit's `ALLOW` list.

---

## Commands

```bash
npm run translations   # structure + links + stray Latin, both languages
npm run facts          # the company's own numbers, everywhere they appear
npm run jobs           # careers listings
npm run publish        # runs all checks, builds, deploys, promotes
```

`npm run publish` intermittently fails on a file lock with
`Error: Error while running build`. **Re-run it — it succeeds.** It is the
local preview server holding `out/`, not a real failure.

---

## Company figures — settled, do not reintroduce variants

**25 years · 250 craftspeople · 200,000 sq ft · 40,000 projects · 15,000 clients**

The migrated posts contained three different headcounts (180, 200, 235), a
23-years claim in five posts, and a 150,000 sq ft facility. All corrected;
`npm run facts` holds the canonical values and fails on any variant.

---

## Still open, needs the client

1. **Product pages run ~18 phone screens.** Needs content cuts, not CSS. Four
   proposals were put to the client and never answered.
2. **Careers page ships with no live roles.** Three drafts sit in
   `src/content/jobs.json` with `active: false`. Client to confirm which are
   real, and whether applications should go somewhere other than
   `info@crystalarc.net`.
3. **~400 old `/product/*` URLs have no redirect map** — the largest remaining
   SEO risk at cutover.
4. Lighthouse has never been run on either locale.
5. **Two unverified claims now live in Arabic**: 40,000 projects / 15,000
   clients, and a 2020 Ministry of Culture engagement. The Arabic version puts
   these in front of a Saudi audience best placed to notice.

---

## Repo state

Branch `main`, remote `origin`
(`Crystal-Arc-Factory-LLC/crystal-arc-website`). **43 commits are local and
unpushed.** Nothing is lost as long as this machine is intact, but the work
exists in one place only.
