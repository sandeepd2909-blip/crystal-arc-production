import type { Metadata } from "next";
import { ogImages } from "@/lib/og";
import Reveal from "@/components/Reveal";
import { alternatesFor } from "@/lib/i18n";
import { openJobs, jobPostingSchema, applyHref, CAREERS_EMAIL } from "@/lib/jobs";
import "../../../careers.css";

const LOCALE = "en" as const;

const TITLE = "Careers, Open Roles in Dubai";
const DESCRIPTION =
  "Open roles at Crystal Arc, a trophy and corporate gifting manufacturer in Dubai. Production, design and commercial positions across the UAE and GCC.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: alternatesFor(LOCALE, "/careers"),
  openGraph: { url: "https://www.crystalarc.net/en/careers", title: TITLE, description: DESCRIPTION, type: "website", images: ogImages(undefined, "Crystal Arc") },
};

export default function CareersPage() {
  const jobs = openJobs(LOCALE);

  return (
    <>
      {/* Emitted per role, and only for roles that are genuinely open. */}
      {jobs.map((job) => (
        <script
          key={job.id}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jobPostingSchema(job, LOCALE)) }}
        />
      ))}

      <section style={{ padding: "clamp(120px, 16vh, 170px) 0 40px" }}>
        <div className="crr-wrap">
          <Reveal>
            <div className="eyebrow" style={{ marginBottom: "14px" }}>Careers</div>
            <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2.1rem, 5vw, 3.4rem)",
              fontWeight: 300, color: "var(--color-ivory)", lineHeight: 1.1, marginBottom: "14px" }}>
              Build things that get handed to people.
            </h1>
            <p style={{ fontSize: "15px", color: "var(--color-taupe)", lineHeight: 1.8, maxWidth: "540px" }}>
              We have made trophies, awards and corporate gifts in Dubai since 2000. Cutting,
              casting, engraving and finishing in our own factory. Most of the work here is hands-on,
              and most of it ends up on a stage.
            </p>
          </Reveal>
        </div>
      </section>

      <section style={{ padding: "10px 0 100px" }}>
        <div className="crr-wrap">
          {jobs.length > 0 ? (
            <Reveal>
              <div className="crr-list">
                {jobs.map((job) => (
                  <details key={job.id} id={job.id} className="crr-job">
                    <summary className="crr-sum">
                      <div className="crr-sum-main">
                        <div className="crr-t">{job.title}</div>
                        <div className="crr-meta">
                          <span>{job.department}</span>
                          <span>{job.location}</span>
                          <span>{job.type}</span>
                        </div>
                      </div>
                      <span className="crr-chev" aria-hidden="true">
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                          <path d="M3 5l4 4 4-4" stroke="currentColor" strokeWidth="1.5" />
                        </svg>
                      </span>
                    </summary>

                    <div className="crr-panel">
                      <p className="crr-lede">{job.summary}</p>

                      <div className="crr-h">Responsibilities</div>
                      <ul className="crr-ul">
                        {job.responsibilities.map((r) => <li key={r}>{r}</li>)}
                      </ul>

                      <div className="crr-h">Requirements</div>
                      <ul className="crr-ul">
                        {job.requirements.map((r) => <li key={r}>{r}</li>)}
                      </ul>

                      <a className="crr-apply" href={applyHref(job.title)}>Apply for this role</a>
                    </div>
                  </details>
                ))}
              </div>
            </Reveal>
          ) : (
            <Reveal>
              <div className="crr-empty">
                <div className="crr-empty-t">No open positions right now.</div>
                <p className="crr-empty-d">
                  We are not advertising a role at the moment, but we do keep applications on file
                  and the factory takes on people through the year. Send us your CV and tell us
                  what you do.
                </p>
                <a className="crr-apply" href={applyHref()}>Send your CV</a>
              </div>
            </Reveal>
          )}

          <Reveal>
            <p className="crr-note">
              Applications go to <a href={applyHref()}>{CAREERS_EMAIL}</a>. Attach a CV as a PDF,
              and include a portfolio link if you are applying to the design studio. We read
              everything that arrives, and we reply to applications we can take further.
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
