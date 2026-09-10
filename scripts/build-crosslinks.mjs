/**
 * Cross-links between the blog and the case studies.
 *
 * The two bodies of content never referenced each other: 55 posts, 29 studies,
 * zero links in either direction. Both pointed at product pages, neither at the
 * other, which left the largest internal-linking win on the site unclaimed.
 *
 * They cannot be matched on entities — only one of the 29 clients is named
 * anywhere in the blog — so this matches on subject, along four axes:
 *
 *   KIND    what the object is        weighted heavily
 *   WHO     who it was made for       weighted heavily
 *   TONE    material and craft        background; nearly every page says
 *                                     "crystal" and "hand-finished", so scoring
 *                                     it equally made every post match all 29
 *   MARKET  a veto, not a bonus       a Dubai Police study has no business
 *                                     pointing at a Saudi National Day post,
 *                                     which is what the first pass produced
 *
 * Two further guards, both learned the hard way on the photography:
 *
 *   - breadth damping, so an item that matches everything by being about
 *     everything does not win every slot
 *   - usage spreading, so one broad post does not end up linked from all 29
 *     studies. `trophy-shop-in-dubai` was doing exactly that.
 *
 * Writes src/content/crosslinks.json. Run: npm run crosslinks
 */
import fs from "node:fs";

const cs = JSON.parse(fs.readFileSync("src/content/case-studies.json", "utf8"));
const allPosts = JSON.parse(fs.readFileSync("src/content/blog-posts.json", "utf8"));
const posts = allPosts.filter((p) => p.lang !== "ar");

const KIND = {
  trophy: /troph(y|ies)|award(s)?\b|cup\b|championship/i,
  medal: /medal/i,
  plaque: /plaque|shield/i,
  gift: /corporate gift|gifting|vip gift|\bgift(s)?\b/i,
  box: /presentation box|packaging/i,
  decor: /home ?d(e|é)cor|vase|interior|sculpture/i,
};
const WHO = {
  sports: /sport|football|cricket|tennis|marathon|racing|esports|golf|athlet|tournament/i,
  government: /government|ministry|authority|national|state|royal|protocol|diplomat|police|customs/i,
  corporate: /corporate|employee|staff|recognition|company|business|brand|bank|logistics/i,
  media: /media|summit|festival|entertainment|influencer/i,
  aviation: /aviation|airline|airport|aircraft|cargo/i,
};
const TONE = { crystal: /crystal|optical|glass/i, metal: /metal|brass|bronze|gold plat|plating/i, craft: /hand|craft|artisan|engrav|polish|mould|cast/i };
const MARKET = { saudi: /saudi|riyadh|makkah|ksa|kingdom|vision 2030|jubail|yanbu/i, uae: /uae|dubai|abu dhabi|sharjah|fujairah|emirat|ras al khaimah/i };

const hits = (t, set) => Object.entries(set).filter(([, re]) => re.test(t)).map(([k]) => k);
const profile = (t) => ({ kind: hits(t, KIND), who: hits(t, WHO), tone: hits(t, TONE), market: hits(t, MARKET) });
const overlap = (a, b) => a.filter((x) => b.includes(x)).length;

function relate(a, b) {
  const kind = overlap(a.kind, b.kind);
  const who = overlap(a.who, b.who);
  if (kind === 0 && who === 0) return 0;                                   // not related at all
  if (a.market.length && b.market.length && overlap(a.market, b.market) === 0) return 0;  // wrong country
  const raw = kind * 3 + who * 3 + overlap(a.market, b.market) * 2 + overlap(a.tone, b.tone);
  const breadth = Math.sqrt((a.kind.length + a.who.length + 1) * (b.kind.length + b.who.length + 1));
  return raw / breadth;
}

const csP = cs.map((c) => ({
  slug: c.slug, client: c.client, tagline: c.tagline,
  p: profile([c.client, c.sector, c.market, c.productSlug, c.tagline, (c.keywords || []).join(" ")].join(" ")),
}));
const poP = posts.map((x) => ({
  slug: x.slug, title: x.seoTitle || x.title,
  p: profile([x.title, x.seoTitle, x.description].join(" ")),
}));

const MIN = 1.6;
const PER_POST = 2;      // studies shown under an article
const PER_STUDY = 3;     // articles shown under a study

/** Pick the best N, discounting anything already heavily used elsewhere. */
function pick(candidates, n, used) {
  return candidates
    .filter((r) => r.s >= MIN)
    .map((r) => ({ ...r, adj: r.s - (used[r.key] || 0) * 0.18 }))
    .sort((a, b) => b.adj - a.adj || a.key.localeCompare(b.key))
    .slice(0, n)
    .map((r) => { used[r.key] = (used[r.key] || 0) + 1; return r.key; });
}

const usedStudies = {}, usedPosts = {};
const postToStudies = {}, studyToPosts = {};

// alternate the two directions so neither gets all the fresh choices
for (let i = 0; i < Math.max(poP.length, csP.length); i++) {
  if (i < poP.length) {
    const b = poP[i];
    postToStudies[b.slug] = pick(csP.map((c) => ({ key: c.slug, s: relate(b.p, c.p) })), PER_POST, usedStudies);
  }
  if (i < csP.length) {
    const c = csP[i];
    studyToPosts[c.slug] = pick(poP.map((b) => ({ key: b.slug, s: relate(c.p, b.p) })), PER_STUDY, usedPosts);
  }
}

fs.writeFileSync("src/content/crosslinks.json",
  JSON.stringify({ postToStudies, studyToPosts }, null, 1) + "\n", "utf8");

const pOk = Object.values(postToStudies).filter((v) => v.length).length;
const cOk = Object.values(studyToPosts).filter((v) => v.length).length;
console.log(`${pOk}/${poP.length} posts link out to a study, ${cOk}/${csP.length} studies link out to a post`);
const top = (o) => Object.entries(o).sort((a, b) => b[1] - a[1]).slice(0, 3).map(([k, v]) => `${k} x${v}`).join(", ");
console.log(`  most-linked studies: ${top(usedStudies)}`);
console.log(`  most-linked posts:   ${top(usedPosts)}`);
