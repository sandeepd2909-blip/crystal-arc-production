/**
 * Case study photography: convert the supplied files and place them.
 *
 * THE RULE, and it is not negotiable: a photograph belongs to the client it is
 * named after. `Production 1 Dubai Police 2.jpeg` is a Dubai Police photograph
 * and appears on the Dubai Police study — nowhere else. It does not matter that
 * the frame happens to show a generic-looking pair of hands at a bench; the
 * file says whose job it was, and someone reading the Ferrari study should not
 * be looking at Dubai Police's work.
 *
 * An earlier version of this script placed factory frames by what they appeared
 * to depict rather than by their name. It put a Dubai skyline award in Kayali's
 * closing section — whose copy describes "Kayali's iconic perfume bottle" — and
 * gave the Ferrari study three other clients' frames. That approach is gone.
 *
 * Sources:
 *   `Our Work Clients/`          studio frames of the finished piece, per client
 *   `Our Work Clients/Factory/`  process frames, named for the client whose job
 *                                was on the bench — used only on that study
 *   GENERIC below                Crystal Arc's own factory photography already
 *                                in `public/`, tied to no client, so free to go
 *                                anywhere. Capped per study on purpose.
 *
 * Placement, per study:
 *   images[0]    the studio hero
 *   images[1..]  the study's own frames, ordered against its section headings,
 *                then at most GENERIC_CAP general factory frames
 *   ""           a section with nothing truthful to show. The template renders
 *                it as a single copy column. Blank beats wrong.
 *
 * Filenames carry a content hash — `<slug>-<n>-<hash>.webp`. netlify.toml
 * caches every image for 30 days with no revalidation, so a file rewritten in
 * place leaves everyone who already loaded the page on the old picture while
 * the deploy looks perfectly correct in a fresh browser. This script rewrote
 * the whole directory three times before that was caught, and the Ferrari
 * study went on showing a gold award that had been replaced by helmet work.
 * Hashing the content makes the mistake impossible: different bytes, different
 * URL, nothing to go stale.
 *
 * Run:  node scripts/build-case-images.mjs
 */
import sharp from "sharp";
import crypto from "node:crypto";
import fs from "node:fs";
import path from "node:path";

const ROOT = "\\\\192.168.0.45\\Marketing Shared\\20052026 WEBSITE\\Our Work Clients";
const FACTORY = path.join(ROOT, "Factory");
const OUTDIR = "public/case-studies";
const WIDTH = 1400, QUALITY = 82;

/** How many general factory frames one study may borrow. Low on purpose: there
 *  are only eight, and they already appear on The Craft page, so leaning on
 *  them turns every study into the same slideshow. */
const GENERIC_CAP = 2;

const ALIAS = {
  "1 billion followers summit": "1-billion-followers-summit",
  "abu dhabi customs": "abu-dhabi-customs",
  "abu dhabi grand prix": "abu-dhabi-grand-prix",
  "abu dhabi national oil company": "adnoc",
  adidas: "adidas",
  "al rajhi bank": "al-rajhi-bank",
  "association of tennis professionals": "association-of-tennis-professionals",
  "big 5 construct saudi": "big-5-construct-saudi",
  "dp world ilt20": "dp-world-ilt20",
  "dubai marathon": "dubai-marathon",
  "dubai police": "dubai-police",
  emirates: "emirates",
  "ferrari owners club uae": "ferrari-owners-club-uae",
  "fifa arab cup": "fifa-arab-cup",
  "fujairah fine arts academy": "fujairah-fine-arts-academy",
  "fujairah international airport": "fujairah-international-airport",
  kayali: "kayali",
  maersk: "maersk",
  "mahd sports academy": "mahd-sports-academy",
  "makkah excellence award": "makkah-excellence-award",
  "makkah route initiative": "makkah-route-initiative",
  "ministry of defense saudi arabia": "ministry-of-defense-saudi-arabia",
  "museum of the future": "museum-of-the-future",
  nafis: "nafis",
  "royal commission for jubail and yanbu": "royal-commission-jubail-yanbu",
  "saudi esports federation": "saudi-esports-federation",
  "saudi vision 2030": "saudi-vision-2030",
  "saudia cargo": "saudia-cargo",
  "sharjah sports council": "sharjah-sports-council",
};

/* Which stage each factory frame shows. This orders a study's OWN frames
   against its OWN headings. It never moves a frame between studies. */
const STAGE = {
  "Product 1 Adidas (Sports).jpeg": "cutting",
  "Product 2 Adidas (Sports).png": "printing",
  "Product 3 Adidas (Sports).jpeg": "assembly",
  "Product 2 Big 5 Construct Saudi.jpeg": "packing",
  "Product 3 Big 5 Construct Saudi.jpeg": "packing",
  "Product 3 Big 5 Construct Saudi.png": "qc",
  "Production 1 ABU DHABI CUSTOMS (Government).jpeg": "printing",
  "Production 1 Abu Dhabi Grand Prix (Sports).png": "shaping",
  "Production 1 Al Rajhi Bank.jpeg": "assembly",
  "Production 1 Association of Tennis Professionals.jpeg": "cutting",
  "Production 1 Big 5 Construct Saudi.jpeg": "polishing",
  "Production 1 DP World ILT20 (Sports)2.jpeg": "engraving",
  "Production 1 Dubai Marathon (Sports).png": "cutting",
  "Production 1 Dubai Police 1.png": "shaping",
  "Production 1 Dubai Police 2.jpeg": "shaping",
  "Production 1 EMIRATES.png": "polishing",
  "Production 1 FIFA Arab Cup.png": "shaping",
  "Production 1 Ferrari Owners Club UAE (Sports).png": "shaping",
  "Production 1 Fujairah Fine Arts Academy (Government)1.jpeg": "qc",
  "Production 2 Fujairah Fine Arts Academy (Government)1.jpeg": "qc",
  "Production 3 Fujairah Fine Arts Academy (Government)1.jpeg": "packing",
  "Production 2 ABU DHABI CUSTOMS (Government).jpeg": "assembly",
  "Production 2 Abu Dhabi Grand Prix (Sports).jpeg": "painting",
  "Production 2 Al Rajhi Bank.png": "painting",
  "Production 2 Association of Tennis Professionals.png": "metalwork",
  "Production 2 DP World ILT20 (Sports)2.jpeg": "metalwork",
  "Production 2 Dubai Marathon (Sports).png": "packing",
  "Production 2 Dubai Police 1.png": "painting",
  "Production 2 Dubai Police 2.png": "painting",
  "Production 2 EMIRATES.jpeg": "engraving",
  "Production 2 FIFA Arab Cup.png.png": "shaping",
  "Production 2 Ferrari Owners Club UAE (Sports).png": "shaping",
  "Production 2 NAFIS (Government) 1.png": "qc",
  "Production 3 ABU DHABI CUSTOMS (Government).jpeg": "packing",
  "Production 3 Abu Dhabi Grand Prix (Sports).jpeg": "packing",
  "Production 3 Al Rajhi Bank.png": "packing",
  "Production 3 Association of Tennis Professionals.jpeg": "packing",
  "Production 3 DP World ILT20 (Sports)2.png": "packing",
  "Production 3 Dubai Marathon (Sports).png": "qc",
  "Production 3 Dubai Police 1.png": "packing",
  "Production 3 Dubai Police 2.png": "packing",
  "Production 3 EMIRATES.jpeg": "packing",
  "Production 3 FIFA Arab Cup.png.jpeg": "qc",
  "Production 3 Ferrari Owners Club UAE (Sports).jpeg": "painting",
  "Production NAFIS (Government) 1.png": "painting",
  "Production1 1 Billion Followers Summit (Media)1.jpeg": "polishing",
  "Production2 1 Billion Followers Summit (Media)1.jpeg": "polishing",
  "Production3 1 Billion Followers Summit (Media)1.jpeg": "qc",
  "Production 1 Fujairah Fine Arts Academy (Government)2.jpeg": "cutting",
  "Production 2 Fujairah Fine Arts Academy (Government)2.png": "shaping",
  "Production 3 Fujairah Fine Arts Academy (Government)2.png": "assembly",
  "Production 1 Fujairah International Airport (Government).png": "shaping",
  "Production 2 Fujairah International Airport (Government).png": "painting",
  "Production 3 Fujairah International Airport (Government).png": "packing",
  "Production 1 Kayali (Corporate).png": "polishing",
  "Production 2 Kayali (Corporate).jpeg": "qc",
  "Production 3 Kayali (Corporate).jpeg": "packing",
  "Production 1 MAHD Sports Academy (Sports).jpeg": "assembly",
  "Production 2 MAHD Sports Academy (Sports).jpeg": "packing",
  "Production 3 MAHD Sports Academy (Sports).png": "packing",
  "Production 1 Maersk.jpeg": "printing",
  "Production 2 Maersk.jpeg": "printing",
  "Production 3 Maersk.jpeg": "packing",
  "Production 1 Makkah Excellence Award.png": "shaping",
  "Production 2 Makkah Excellence Award.jpeg": "shaping",
  "Production 3 Makkah Excellence Award.png": "painting",
  "Production 1 Makkah Route Initiative.jpeg": "assembly",
  "Production 2 Makkah Route Initiative.jpeg": "qc",
  "Production 3 Makkah Route Initiative.jpeg": "packing",
  "Production 1 Ministry of Defense Saudi Arabia.jpeg": "cutting",
  "Production 2 Ministry of Defense Saudi Arabia.jpeg": "polishing",
  "Production 3 Ministry of Defense Saudi Arabia.jpeg": "packing",
  "Production 1 Museum of the Future (Government)1.jpeg": "shaping",
  "Production 2 Museum of the Future (Government)1.jpeg": "shaping",
  "Production 3 Museum of the Future (Government)1.png": "packing",
  "Production 1 Museum of the Future (Government)2.jpeg": "shaping",
  "Production 2 Museum of the Future (Government)2.jpeg": "printing",
};

/* Crystal Arc's own factory photography, already in public/ and tied to no
   client, so it can appear anywhere. factory-c1/c2/c3 are repeats of
   factory-1/2/3 and are left out; craft-commitment and craft-resin show
   finished pieces — one of them branded KDD — and are left out for exactly the
   reason a client's frame cannot travel. */
const GENERIC = [
  { src: "/factory-1.webp",          stage: "forming",   en: "Glass worked hot at the press",               ar: "تشكيل الزجاج ساخنًا تحت المكبس" },
  { src: "/factory-3.webp",          stage: "forming",   en: "Working at the furnace",                      ar: "العمل عند الفرن" },
  { src: "/factory-2.webp",          stage: "metalwork", en: "Welding a metal component",                   ar: "لحام مكوّن معدني" },
  { src: "/craft-engraver.webp",     stage: "engraving", en: "Engraving at the bench",                      ar: "النقش على الطاولة" },
  { src: "/craft-inspection.webp",   stage: "qc",        en: "A finished panel checked under the lamp",     ar: "فحص لوح مكتمل تحت الضوء" },
  { src: "/craft-qc.webp",           stage: "qc",        en: "Quality control on the factory floor",        ar: "مراقبة الجودة في صالة المصنع" },
  { src: "/craft-designer.webp",     stage: "design",    en: "Designing to brief at the workstation",       ar: "التصميم وفق التكليف على محطة العمل" },
  { src: "/craft-conversation.webp", stage: "design",    en: "Reviewing a commission in the Dubai factory", ar: "مراجعة تكليف في مصنع دبي" },
];

/* Section heading -> the stage it describes, most specific first. */
const RULES = [
  [/by hand|hand[- ](?:polish|finish|cut|work)/i,   ["polishing", "shaping"]],
  [/engrav|etch|subsurface|sandblast/i,             ["engraving"]],
  [/polish/i,                                       ["polishing"]],
  [/cutting|cut\b|crystal|optical/i,                ["cutting", "polishing"]],
  [/paint|colour|color|livery|plating|gilt|gold/i,  ["painting"]],
  [/metal|forming|gearwork/i,                       ["metalwork", "forming"]],
  [/print|brand|logo|identity/i,                    ["printing"]],
  [/assembl|setting|sealing|integrat|mount/i,       ["assembly"]],
  [/inspection|quality|control/i,                   ["qc"]],
  [/present|ceremony|protocol|delivered|dispatch|gift|award for|marking/i, ["packing", "qc"]],
  [/design|sculpt|shaping|form\b|model/i,           ["shaping", "design"]],
];
const wantsFor = (h) => RULES.find(([re]) => re.test(h))?.[1] ?? ["assembly", "polishing"];

/* Sections about the handover itself — the ceremony, the presentation, the
   moment the piece is given. Only the study's OWN photography may illustrate
   these. The general set is entirely workshop scenes, so it can never show a
   particular client's ceremony, and reaching for it produces exactly the wrong
   picture: Dubai Marathon's "Handed Over at the Finish Line" drew a designer at
   a CAD workstation. These sections take the study's own frames or stay blank. */
const HANDOVER = /present|ceremony|protocol|handed over|delivered|finish line|awarded|marking/i;

// strip repeated extensions — two files are named "... FIFA Arab Cup.png.png"
const key = (n) =>
  n.replace(/(\.[a-z0-9]{2,4})+$/i, "")
    .replace(/\((?:Media|Sports|Government|Corporate)\)/gi, " ")
    .replace(/^Product(?:ion)?\s*\d*\s+/i, "")
    .replace(/\s+\d{1,2}\s*$/, "")
    .replace(/\s+/g, " ").trim().toLowerCase();

// ── read sources ────────────────────────────────────────────────────────────
const studioBySlug = {}, factoryBySlug = {};
for (const f of fs.readdirSync(ROOT, { withFileTypes: true })) {
  if (!f.isFile() || !/\.(jpe?g|png|webp)$/i.test(f.name)) continue;
  const s = ALIAS[key(f.name)];
  if (s) (studioBySlug[s] = studioBySlug[s] || []).push(f.name);
  else console.log(`  ! studio frame matches no study: ${f.name}`);
}
for (const f of fs.readdirSync(FACTORY, { withFileTypes: true })) {
  if (!f.isFile() || !/\.(jpe?g|png|webp)$/i.test(f.name)) continue;
  const s = ALIAS[key(f.name)];
  if (!s) { console.log(`  ! factory frame matches no study: ${f.name}`); continue; }
  if (!STAGE[f.name]) console.log(`  ! factory frame has no stage recorded: ${f.name}`);
  (factoryBySlug[s] = factoryBySlug[s] || []).push(f.name);
}
for (const m of [studioBySlug, factoryBySlug]) for (const s of Object.keys(m)) m[s].sort();

// ── build ───────────────────────────────────────────────────────────────────
fs.mkdirSync(OUTDIR, { recursive: true });
for (const f of fs.readdirSync(OUTDIR)) fs.unlinkSync(path.join(OUTDIR, f));

const studies = JSON.parse(fs.readFileSync("src/content/case-studies.json", "utf8"));
const genericUsed = Object.fromEntries(GENERIC.map((g) => [g.src, 0]));
let written = 0, bytes = 0, blanks = 0, ownPlaced = 0, genPlaced = 0;

for (const st of studies) {
  const studio = studioBySlug[st.slug] || [];
  const own = (factoryBySlug[st.slug] || []).map((n) => ({ n, stage: STAGE[n] }));
  const slots = studio.map((n) => ({ kind: "studio", ref: n }));

  const takenOwn = new Set();
  let genericLeft = GENERIC_CAP;

  for (let i = slots.length - 1; i < st.sections.length; i++) {
    const h = st.sections[i]?.h;
    if (!h) break;
    const wants = wantsFor(h);

    // this study's own frame first, by stage, then any of its own
    let chosen = null;
    for (const w of wants) { chosen = own.find((o) => o.stage === w && !takenOwn.has(o.n)); if (chosen) break; }
    if (!chosen) chosen = own.find((o) => !takenOwn.has(o.n));
    if (chosen) { takenOwn.add(chosen.n); slots.push({ kind: "factory", ref: chosen.n }); ownPlaced++; continue; }

    // then a general factory frame, sparingly — but never on a handover
    // section, where a workshop scene is always the wrong picture
    if (genericLeft > 0 && !HANDOVER.test(h)) {
      const pool = GENERIC.filter((g) => wants.includes(g.stage));
      const g = (pool.length ? pool : GENERIC).slice().sort((a, b) => genericUsed[a.src] - genericUsed[b.src])[0];
      genericUsed[g.src]++; genericLeft--; genPlaced++;
      slots.push({ kind: "generic", ref: g.src, en: g.en, ar: g.ar });
      continue;
    }

    slots.push({ kind: "blank" });                    // blank beats wrong
  }
  while (slots.length && slots[slots.length - 1].kind === "blank") slots.pop();

  st.images = []; st.imageAlts = []; st.imageAltsAr = []; st.sourceImages = [];
  for (let i = 0; i < slots.length; i++) {
    const s = slots[i];
    if (s.kind === "blank") {
      st.images.push(""); st.imageAlts.push(null); st.imageAltsAr.push(null); st.sourceImages.push("");
      blanks++; continue;
    }
    if (s.kind === "generic") {
      // already a web asset in public/ — nothing to convert
      st.images.push(s.ref); st.imageAlts.push(s.en); st.imageAltsAr.push(s.ar);
      st.sourceImages.push("public" + s.ref);
      continue;
    }
    const abs = s.kind === "factory" ? path.join(FACTORY, s.ref) : path.join(ROOT, s.ref);
    const buf = await sharp(abs).resize({ width: WIDTH, withoutEnlargement: true }).webp({ quality: QUALITY }).toBuffer();
    const hash = crypto.createHash("sha1").update(buf).digest("hex").slice(0, 8);
    const name = `${st.slug}-${i + 1}-${hash}.webp`;
    fs.writeFileSync(path.join(OUTDIR, name), buf);
    bytes += buf.length; written++;
    st.images.push(`/case-studies/${name}`);
    // this client's own job, so the page describes it from the client name and
    // the section heading
    st.imageAlts.push(null); st.imageAltsAr.push(null);
    st.sourceImages.push(s.kind === "factory" ? "Factory/" + s.ref : s.ref);
  }
}

fs.writeFileSync("src/content/case-studies.json", JSON.stringify(studies, null, 1) + "\n", "utf8");

console.log(`\n${written} images written  (${(bytes / 1024 / 1024).toFixed(1)} MB)`);
console.log(`  ${ownPlaced} own factory frames, ${genPlaced} general factory frames, ${blanks} sections left blank`);
const noOwn = studies.filter((s) => !(factoryBySlug[s.slug] || []).length);
console.log(`\n${noOwn.length} studies have no factory photography of their own — hero plus at most ${GENERIC_CAP} general frames:`);
console.log("  " + noOwn.map((s) => s.slug).join(", "));
