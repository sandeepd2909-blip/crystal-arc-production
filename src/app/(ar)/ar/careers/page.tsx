import type { Metadata } from "next";
import { ogImages } from "@/lib/og";
import Reveal from "@/components/Reveal";
import { alternatesFor } from "@/lib/i18n";
import { openJobs, jobPostingSchema, applyHref, CAREERS_EMAIL } from "@/lib/jobs";
import "../../../careers.css";

const LOCALE = "ar" as const;

const TITLE = "الوظائف، فرص عمل في دبي";
const DESCRIPTION =
  "الوظائف الشاغرة في كريستال آرك، مصنع الجوائز والدروع والهدايا المؤسسية في دبي. فرص في الإنتاج والتصميم والمبيعات في الإمارات والخليج.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: alternatesFor(LOCALE, "/careers"),
  openGraph: { url: "https://www.crystalarc.net/ar/careers", title: TITLE, description: DESCRIPTION, type: "website", images: ogImages(undefined, "Crystal Arc") },
};

export default function CareersPage() {
  const jobs = openJobs(LOCALE);

  return (
    <>
      {/* تُدرَج لكل وظيفة، وفقط للوظائف المفتوحة فعلياً. */}
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
            <div className="eyebrow" style={{ marginBottom: "14px" }}>الوظائف</div>
            <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2.1rem, 5vw, 3.4rem)",
              fontWeight: 300, color: "var(--color-ivory)", lineHeight: 1.1, marginBottom: "14px" }}>
              اصنع ما يُسلَّم إلى الأيدي.
            </h1>
            <p style={{ fontSize: "15px", color: "var(--color-taupe)", lineHeight: 1.8, maxWidth: "540px" }}>
              نصنع الجوائز والدروع والهدايا المؤسسية في دبي منذ عام ٢٠٠٠، قصّاً وصبّاً وحفراً
              وتشطيباً داخل مصنعنا. معظم العمل هنا عمل يدوي، ومعظمه ينتهي على منصة تكريم.
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

                      <div className="crr-h">المهام</div>
                      <ul className="crr-ul">
                        {job.responsibilities.map((r) => <li key={r}>{r}</li>)}
                      </ul>

                      <div className="crr-h">المتطلبات</div>
                      <ul className="crr-ul">
                        {job.requirements.map((r) => <li key={r}>{r}</li>)}
                      </ul>

                      <a className="crr-apply" href={applyHref(job.title)}>تقدّم لهذه الوظيفة</a>
                    </div>
                  </details>
                ))}
              </div>
            </Reveal>
          ) : (
            <Reveal>
              <div className="crr-empty">
                <div className="crr-empty-t">لا توجد وظائف شاغرة حالياً.</div>
                <p className="crr-empty-d">
                  لا نعلن عن وظيفة في الوقت الحالي، لكننا نحتفظ بالطلبات لدينا، والمصنع يوظّف على
                  مدار العام. أرسل لنا سيرتك الذاتية وأخبرنا بمجال عملك.
                </p>
                <a className="crr-apply" href={applyHref()}>أرسل سيرتك الذاتية</a>
              </div>
            </Reveal>
          )}

          <Reveal>
            <p className="crr-note">
              تصل الطلبات إلى <a href={applyHref()} dir="ltr">{CAREERS_EMAIL}</a>. أرفق السيرة
              الذاتية بصيغة PDF، وأضف رابط أعمالك إن كنت تتقدّم لاستوديو التصميم. نقرأ كل ما يصلنا،
              ونردّ على الطلبات التي يمكننا المضي بها.
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
