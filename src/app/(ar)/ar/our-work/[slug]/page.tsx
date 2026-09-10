import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SITE_URL, localePath } from "@/lib/i18n";
import { ogImages } from "@/lib/og";
import Reveal from "@/components/Reveal";
import EnquiryForm from "@/components/products/EnquiryForm";
import CaseFrame from "@/components/our-work/CaseFrame";
import {
  caseStudyBySlug,
  arabicCaseStudies,
  caseStudyAlternates,
  relatedCaseStudies,
  CASE_STUDIES_PUBLISHED,
  CASE_STUDIES_UPDATED,
} from "@/lib/case-studies";
import { postsForStudy } from "@/lib/crosslinks";

const LOCALE = "ar" as const;

const PRODUCT_LABEL: Record<string, string> = {
  "trophies-awards": "الدروع والجوائز",
  "corporate-gifts": "هدايا الشركات",
  boxes: "علب التقديم",
  "home-decor": "المقتنيات والديكور",
};

/**
 * Only the studies that have been written in Arabic get a page. The set grows
 * batch by batch, the same way the blog translations shipped — building a route
 * for an unwritten study would put an empty page on a live URL.
 */
export function generateStaticParams() {
  return arabicCaseStudies().map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const c = caseStudyBySlug(slug);
  if (!c?.ar) return {};
  const { canonical, languages } = caseStudyAlternates(LOCALE, slug);
  return {
    title: c.ar.seoTitle,
    description: c.ar.description,
    openGraph: {
      url: `${SITE_URL}${canonical}`,
      title: c.ar.seoTitle,
      description: c.ar.description,
      type: "article",
      locale: "ar_AE",
      images: ogImages(c.images[0], `${c.client}، كريستال آرك`),
    },
    alternates: {
      canonical: `${SITE_URL}${canonical}`,
      ...(languages
        ? { languages: Object.fromEntries(Object.entries(languages).map(([k, v]) => [k, `${SITE_URL}${v}`])) }
        : {}),
    },
  };
}

export default async function CaseStudyPageAr({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const c = caseStudyBySlug(slug);
  if (!c?.ar) notFound();
  const a = c.ar;
  const name = a.client ?? c.client;

  // Related studies must also exist in Arabic, or the cards link to 404s.
  const related = relatedCaseStudies(slug, 6).filter((r) => r.ar).slice(0, 2);
  const reading = postsForStudy(LOCALE, slug, 3);
  const productHref = localePath(LOCALE, `/products/${c.productSlug}`);
  const url = `${SITE_URL}${localePath(LOCALE, `/our-work/${slug}`)}`;
  const closing = a.sections[a.sections.length - 1]?.p[0] ?? "";

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        headline: a.seoTitle,
        description: a.description,
        url,
        inLanguage: "ar-AE",

        datePublished: CASE_STUDIES_PUBLISHED,

        dateModified: CASE_STUDIES_UPDATED,
        about: { "@type": "Organization", name: c.client },
        author: { "@type": "Organization", name: "Crystal Arc" },
        publisher: { "@type": "Organization", name: "Crystal Arc" },
      },
      ...(a.faqs.length
        ? [{
            "@type": "FAQPage",
            mainEntity: a.faqs.map((f) => ({
              "@type": "Question",
              name: f.q,
              acceptedAnswer: { "@type": "Answer", text: f.a },
            })),
          }]
        : []),
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "الرئيسية", item: `${SITE_URL}${localePath(LOCALE, "/")}` },
          { "@type": "ListItem", position: 2, name: "أعمالنا", item: `${SITE_URL}${localePath(LOCALE, "/our-work")}` },
          { "@type": "ListItem", position: 3, name, item: url },
        ],
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <section className="cs-hero">
        <div className="con cs-hero-inner">
          <div className="cs-hero-copy">
          <Reveal immediate>
            <nav aria-label="مسار التنقل" className="cs-crumb">
              <Link prefetch={false} href={localePath(LOCALE, "/our-work")}>أعمالنا</Link>
              <span>›</span>
              <span className="cs-crumb-here">{name}</span>
            </nav>
          </Reveal>
          <Reveal delay={70} immediate>
            <div className="cs-sector">{a.sector} &nbsp;&middot;&nbsp; {a.market}</div>
          </Reveal>
          <Reveal delay={120} immediate><h1 className="cs-title">{name}</h1></Reveal>
          <Reveal delay={170} immediate><p className="cs-tagline">{a.tagline}</p></Reveal>
          </div>
          <CaseFrame src={c.images[0]} alt={`${name} — ${a.tagline}`} ratio="1 / 1" priority />
        </div>
      </section>

      <section className="cs-facts">
        <div className="con cs-facts-inner">
          {c.logo && (
            // eslint-disable-next-line @next/next/no-img-element
            <img className="cs-logo" src={c.logo} alt={name} loading="lazy" />
          )}
          <dl className="cs-facts-list">
            {Object.entries(a.specs).map(([k, v]) => (
              <div key={k}><dt>{k}</dt><dd>{v}</dd></div>
            ))}
          </dl>
        </div>
      </section>

      <article className="cs-body">
        {a.sections.map((s, i) => (
          <section key={s.h + i} className={`cs-block${i % 2 === 1 ? " cs-block--flip" : ""}`}>
            <div className="con cs-block-inner">
              <Reveal>
                <div className="cs-block-copy">
                  <h2 className="cs-h2">{s.h}</h2>
                  {s.p.map((para, j) => <p key={j} className="cs-p">{para}</p>)}
                </div>
              </Reveal>
              {c.images[i + 1] && (
                <Reveal delay={80}>
                  <div className="cs-block-media">
                    <CaseFrame src={c.images[i + 1]} alt={c.imageAltsAr?.[i + 1] ?? `${name} — ${s.h}`} ratio="1 / 1" />
                  </div>
                </Reveal>
              )}
            </div>
          </section>
        ))}
      </article>

      {closing && (
        <section className="cs-pull">
          <div className="con">
            <Reveal>
              <p className="cs-pull-text">{closing}</p>
              <div className="cs-pull-rule" />
              <p className="cs-pull-attr">{name} &nbsp;&middot;&nbsp; {a.market}</p>
            </Reveal>
          </div>
        </section>
      )}

      {a.faqs.length > 0 && (
        <section className="cs-faq">
          <div className="con">
            <Reveal><div className="eyebrow" style={{ marginBottom: "22px" }}>أسئلة شائعة</div></Reveal>
            <div className="cs-faq-list">
              {a.faqs.map((f, i) => (
                <Reveal key={f.q} delay={i * 40}>
                  <div className="cs-faq-item">
                    <h2 className="cs-faq-q">{f.q}</h2>
                    <p className="cs-faq-a">{f.a}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="cs-next">
        <div className="con cs-next-inner">
          <Reveal>
            <p className="cs-next-copy">
              كل قطعة وردت هنا صُمِّمت وصُنِّعت وشُطِّبت داخل منشأتنا في الإمارات على مساحة
              ٢٠٠٬٠٠٠ قدم مربعة، دون إسناد أي مرحلة إلى جهة خارجية.
            </p>
            <div className="cs-next-links">
              <Link prefetch={false} href={productHref} className="btn-red">
                {PRODUCT_LABEL[c.productSlug] ?? "منتجاتنا"}
              </Link>
              <Link prefetch={false} href={localePath(LOCALE, "/contact")} className="btn-ghost">
                اطلب عرض سعر
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {reading.length ? (
        <section className="xl-read">
          <div className="con">
            <div className="eyebrow" style={{ marginBottom: "18px" }}>اقرأ أيضًا</div>
            <ul className="xl-read-list">
              {reading.map((r) => (
                <li key={r.slug}>
                  <Link prefetch={false} href={localePath(LOCALE, `/blog/${r.slug}`)}>{r.title}</Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      ) : null}

      {related.length > 0 && (
        <section className="cs-related">
          <div className="con">
            <Reveal><div className="eyebrow" style={{ marginBottom: "26px" }}>أعمال أخرى</div></Reveal>
            <div className="cs-grid">
              {related.map((r, i) => (
                <Reveal key={r.slug} delay={i * 60}>
                  <Link prefetch={false} href={localePath(LOCALE, `/our-work/${r.slug}`)} className="cs-card">
                    <CaseFrame src={r.images[0]} alt={r.ar?.client ?? r.client} ratio="1 / 1" card />
                    <div className="cs-card-body">
                      <div className="cs-card-sector">{r.ar?.sector}</div>
                      <div className="cs-card-client">{r.ar?.client ?? r.client}</div>
                      <p className="cs-card-line">{r.ar?.tagline}</p>
                    </div>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="cs-enquiry" id="enquiry">
        <div className="con">
          <Reveal>
            <div className="eyebrow" style={{ marginBottom: "14px" }}>ابدأ مشروعك</div>
            <h2 className="cs-enquiry-h">
              أخبرنا بالمناسبة.<br />
              <span>ونخبرك بما ينبغي أن تُصنع منه.</span>
            </h2>
          </Reveal>
          <Reveal delay={90}>
            <div className="enquiry-panel cs-enquiry-panel"><EnquiryForm locale={LOCALE} /></div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
