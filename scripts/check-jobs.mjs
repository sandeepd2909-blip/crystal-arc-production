/**
 * Validates src/content/jobs.json before it can reach the site.
 *
 * Job entries are edited by hand by someone who is not a developer, so the
 * failure modes are predictable: a missing comma, a role left with an English
 * title and no Arabic one, a `closes` date already in the past. The first
 * breaks the build with a stack trace; the other two build cleanly and ship
 * wrong — a blank heading on the Arabic page, or a role that silently never
 * appears.
 *
 * Run `npm run jobs` after editing. It prints exactly what will be live.
 */
import { readFileSync } from "node:fs";

const FILE = "src/content/jobs.json";
const LOCALES = ["en", "ar"];
const TEXT_FIELDS = ["title", "department", "location", "type", "summary"];
const LIST_FIELDS = ["responsibilities", "requirements"];
const KNOWN_TYPES = ["full-time", "part-time", "contract", "temporary", "internship"];

const errors = [];
const warnings = [];

let jobs;
try {
  jobs = JSON.parse(readFileSync(FILE, "utf8"));
} catch (e) {
  console.error(`\n${FILE} is not valid JSON.\n`);
  console.error(`  ${e.message}\n`);
  console.error("Usually a missing or extra comma, or a missing quote mark.");
  console.error("Every entry needs a comma after its closing } except the last one.\n");
  process.exit(1);
}

if (!Array.isArray(jobs)) {
  console.error(`${FILE} must be a list of jobs, wrapped in [ ].`);
  process.exit(1);
}

const seen = new Set();
const today = new Date();
today.setHours(0, 0, 0, 0);

const isDate = (v) => typeof v === "string" && /^\d{4}-\d{2}-\d{2}$/.test(v) && !Number.isNaN(Date.parse(v));

jobs.forEach((job, i) => {
  const where = `job ${i + 1} (${job?.id ?? "no id"})`;

  if (!job.id || !/^[a-z0-9-]+$/.test(job.id)) {
    errors.push(`${where}: "id" must be lowercase letters, numbers and hyphens only — it becomes part of the web address.`);
  } else if (seen.has(job.id)) {
    errors.push(`${where}: duplicate id "${job.id}". Each role needs its own.`);
  } else {
    seen.add(job.id);
  }

  if (typeof job.active !== "boolean") {
    errors.push(`${where}: "active" must be true or false — no quote marks around it.`);
  }

  for (const key of ["posted", "closes"]) {
    if (!isDate(job[key])) errors.push(`${where}: "${key}" must be a date like 2026-08-20.`);
  }
  if (isDate(job.posted) && isDate(job.closes) && Date.parse(job.closes) <= Date.parse(job.posted)) {
    errors.push(`${where}: "closes" must be after "posted".`);
  }

  for (const field of TEXT_FIELDS) {
    const val = job[field];
    if (!val || typeof val !== "object") {
      errors.push(`${where}: "${field}" is missing.`);
      continue;
    }
    for (const loc of LOCALES) {
      if (!val[loc] || !String(val[loc]).trim()) {
        errors.push(`${where}: "${field}" has no ${loc === "en" ? "English" : "Arabic"} text — it will render blank on the ${loc === "en" ? "English" : "Arabic"} page.`);
      }
    }
  }

  for (const field of LIST_FIELDS) {
    const val = job[field];
    if (!val || typeof val !== "object") {
      errors.push(`${where}: "${field}" is missing.`);
      continue;
    }
    for (const loc of LOCALES) {
      const list = val[loc];
      if (!Array.isArray(list) || list.length === 0) {
        errors.push(`${where}: "${field}" has no ${loc === "en" ? "English" : "Arabic"} points.`);
      } else if (list.some((x) => !String(x).trim())) {
        errors.push(`${where}: "${field}" (${loc}) has an empty point in the list.`);
      }
    }
  }

  const type = String(job.type?.en ?? "").trim().toLowerCase();
  if (type && !KNOWN_TYPES.includes(type)) {
    warnings.push(`${where}: type "${job.type.en}" is not one Google recognises, so it will be treated as Full-time. Use one of: ${KNOWN_TYPES.join(", ")}.`);
  }

  if (job.active === true && isDate(job.closes) && new Date(job.closes) < today) {
    warnings.push(`${where}: marked active but "closes" (${job.closes}) has passed, so it will NOT appear. Push the date out or set active to false.`);
  }
});

console.log("");
if (errors.length) {
  console.log(`${errors.length} problem${errors.length > 1 ? "s" : ""} to fix:\n`);
  errors.forEach((e) => console.log(`  - ${e}`));
  console.log("");
}
if (warnings.length) {
  console.log(`${warnings.length} warning${warnings.length > 1 ? "s" : ""}:\n`);
  warnings.forEach((w) => console.log(`  - ${w}`));
  console.log("");
}

if (!errors.length) {
  const live = jobs.filter((j) => j.active === true && isDate(j.closes) && new Date(j.closes) >= today);
  console.log(`${jobs.length} role${jobs.length === 1 ? "" : "s"} in the file. ${live.length} will show on the site:\n`);
  if (live.length === 0) {
    console.log('  (none — the careers page will show "No open positions right now")');
  } else {
    live.forEach((j) => console.log(`  - ${j.title.en}  —  closes ${j.closes}`));
  }
  console.log("");
}

process.exit(errors.length ? 1 : 0);
