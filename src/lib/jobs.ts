import raw from "@/content/jobs.json";
import { Locale, SITE_URL, localePath, LOCALE_TAG } from "@/lib/i18n";

/**
 * Where applications actually go.
 *
 * Deliberately a `mailto:`, not a form. Every form on this site currently fakes
 * a success message and discards the submission (see HANDOVER.md), so a careers
 * form would silently throw away applications — the one kind of message where
 * losing it is unrecoverable and the sender never finds out. A mailto needs no
 * backend and cannot lose anything.
 *
 * Change this to a dedicated careers inbox once one exists; it is referenced in
 * exactly one place besides here.
 */
export const CAREERS_EMAIL = "info@crystalarc.net";

type Localised = Record<Locale, string>;
type LocalisedList = Record<Locale, string[]>;

interface RawJob {
  id: string;
  active: boolean;
  posted: string;
  closes: string;
  title: Localised;
  department: Localised;
  location: Localised;
  type: Localised;
  summary: Localised;
  responsibilities: LocalisedList;
  requirements: LocalisedList;
}

export interface Job {
  id: string;
  posted: string;
  closes: string;
  title: string;
  department: string;
  location: string;
  type: string;
  summary: string;
  responsibilities: string[];
  requirements: string[];
}

const JOBS = raw as RawJob[];

/**
 * Only `active` roles are returned, so a role is published by flipping one flag
 * rather than by deleting and re-typing it. Closed roles stay in the file as a
 * template for the next opening.
 *
 * A role whose `closes` date has passed is also withheld: a listing that has
 * quietly expired is worse than no listing, and Google drops expired postings
 * from Google Jobs anyway.
 */
export function openJobs(locale: Locale, today = new Date()): Job[] {
  return JOBS.filter((j) => j.active && new Date(j.closes) >= today)
    .sort((a, b) => (a.posted < b.posted ? 1 : -1))
    .map((j) => ({
      id: j.id,
      posted: j.posted,
      closes: j.closes,
      title: j.title[locale],
      department: j.department[locale],
      location: j.location[locale],
      type: j.type[locale],
      summary: j.summary[locale],
      responsibilities: j.responsibilities[locale],
      requirements: j.requirements[locale],
    }));
}

/**
 * Derived from the English `type` string rather than stored, so that whoever
 * posts a role writes "Full-time" and not "FULL_TIME". Anything unrecognised
 * falls back to FULL_TIME, which is what all current roles are.
 */
const EMPLOYMENT_TYPE: Record<string, string> = {
  "full-time": "FULL_TIME",
  "part-time": "PART_TIME",
  contract: "CONTRACTOR",
  temporary: "TEMPORARY",
  internship: "INTERN",
};

function employmentType(id: string): string {
  const job = JOBS.find((j) => j.id === id);
  const key = (job?.type.en ?? "").trim().toLowerCase();
  return EMPLOYMENT_TYPE[key] ?? "FULL_TIME";
}

/** Subject line pre-filled so applications arrive already sorted by role. */
export function applyHref(jobTitle?: string): string {
  const subject = jobTitle
    ? `Application — ${jobTitle}`
    : "Application — Crystal Arc";
  return `mailto:${CAREERS_EMAIL}?subject=${encodeURIComponent(subject)}`;
}

/**
 * Google Jobs structured data. Emitted per role and only for roles that are
 * actually open — an inaccurate JobPosting is worse than none, because it puts
 * a listing in front of job seekers for a position that does not exist.
 *
 * `description` must be an HTML string, not plain text, and Google wants the
 * full description rather than a teaser.
 */
export function jobPostingSchema(job: Job, locale: Locale) {
  const list = (heading: string, items: string[]) =>
    `<p><strong>${heading}</strong></p><ul>${items.map((i) => `<li>${i}</li>`).join("")}</ul>`;

  const headings =
    locale === "ar"
      ? { resp: "المهام", req: "المتطلبات" }
      : { resp: "Responsibilities", req: "Requirements" };

  return {
    "@context": "https://schema.org",
    "@type": "JobPosting",
    title: job.title,
    description:
      `<p>${job.summary}</p>` +
      list(headings.resp, job.responsibilities) +
      list(headings.req, job.requirements),
    identifier: {
      "@type": "PropertyValue",
      name: "Crystal Arc",
      value: job.id,
    },
    datePosted: job.posted,
    validThrough: job.closes,
    employmentType: employmentType(job.id),
    inLanguage: LOCALE_TAG[locale],
    hiringOrganization: {
      "@type": "Organization",
      name: "Crystal Arc",
      sameAs: SITE_URL,
      logo: `${SITE_URL}/logo.png`,
    },
    jobLocation: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        streetAddress: "1901 Al Moosa Tower 1, Trade Center First",
        addressLocality: "Dubai",
        addressRegion: "Dubai",
        addressCountry: "AE",
      },
    },
    directApply: false,
    url: `${SITE_URL}${localePath(locale, "/careers")}#${job.id}`,
  };
}
