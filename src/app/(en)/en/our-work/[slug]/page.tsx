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
  allCaseStudySlugs,
  relatedCaseStudies,
  caseStudyAlternates,
  CASE_STUDIES_PUBLISHED,
  CASE_STUDIES_UPDATED,
} from "@/lib/case-studies";
import { postsForStudy } from "@/lib/crosslinks";

const LOCALE = "en" as const;

const PRODUCT_LABEL: Record<string, string> = {
  "trophies-awards": "Trophies & Awards",
  "corporate-gifts": "Corporate Gifts",
  boxes: "Presentation Boxes",
  "home-decor": "Home & Décor",
};

export function generateStaticParams() {
  return allCaseStudySlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const c = caseStudyBySlug(slug);
  if (!c) return {};
  const url = `${SITE_URL}${localePath(LOCALE, `/our-work/${slug}`)}`;
  const alt = caseStudyAlternates(LOCALE, slug);
  return {
    title: c.seoTitle,
    description: c.description,
    keywords: c.keywords,
    openGraph: {
      url,
      title: c.seoTitle,
      description: c.description,
      type: "article",
      images: ogImages(c.images[0], `${c.client}, Crystal Arc`),
    },
    // The Arabic editions land in batches, so the alternate is declared per
    // study rather than per section. caseStudyAlternates omits ar-AE until
    // that study has actually been written — an hreflang pointing at a 404
    // makes Google drop the cluster for the page.
    alternates: {
      canonical: url,
      ...(alt.languages
        ? { languages: Object.fromEntries(Object.entries(alt.languages).map(([k, v]) => [k, `${SITE_URL}${v}`])) }
        : {}),
    },
  };
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const c = caseStudyBySlug(slug);
  if (!c) notFound();

  const related = relatedCaseStudies(slug);
  const reading = postsForStudy(LOCALE, slug, 3);
  const productHref = localePath(LOCALE, `/products/${c.productSlug}`);
  const url = `${SITE_URL}${localePath(LOCALE, `/our-work/${slug}`)}`;
  const region = c.market === "KSA" ? "Saudi Arabia" : "United Arab Emirates";

  /* The one line worth setting apart. Taken from the last section — which is
     always the outcome — so it reads as the conclusion rather than a fragment
     lifted from the middle of the build story. */
  const closing = c.sections[c.sections.length - 1]?.p[0] ?? "";
  const pull =
    closing.length > 240 ? closing.slice(0, closing.indexOf(".", 150) + 1) : closing;

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        headline: c.seoTitle,
        description: c.description,
        url,
        inLanguage: "en-AE",
        datePublished: CASE_STUDIES_PUBLISHED,
        dateModified: CASE_STUDIES_UPDATED,
        about: { "@type": "Organization", name: c.client },
        author: { "@type": "Organization", name: "Crystal Arc" },
        publisher: { "@type": "Organization", name: "Crystal Arc" },
      },
      ...(c.faqs.length
        ? [{
            "@type": "FAQPage",
            mainEntity: c.faqs.map((f) => ({
              "@type": "Question",
              name: f.q,
              acceptedAnswer: { "@type": "Answer", text: f.a },
            })),
          }]
        : []),
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}${localePath(LOCALE, "/")}` },
          { "@type": "ListItem", position: 2, name: "Our Work", item: `${SITE_URL}${localePath(LOCALE, "/our-work")}` },
          { "@type": "ListItem", position: 3, name: c.client, item: url },
        ],
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      {/* ── 1 · HERO — full-bleed frame, copy sitting on it ── */}
      <section className="cs-hero">
        <div className="con cs-hero-inner">
          <div className="cs-hero-copy">
          <Reveal immediate>
            <nav aria-label="Breadcrumb" className="cs-crumb">
              <Link prefetch={false} href={localePath(LOCALE, "/our-work")}>Our Work</Link>
              <span>›</span>
              <span className="cs-crumb-here">{c.client}</span>
            </nav>
          </Reveal>
          <Reveal delay={70} immediate>
            <div className="cs-sector">{c.sector} &nbsp;&middot;&nbsp; {region}</div>
          </Reveal>
          <Reveal delay={120} immediate>
            <h1 className="cs-title">{c.client}</h1>
          </Reveal>
          <Reveal delay={170} immediate>
            <p className="cs-tagline">{c.tagline}</p>
          </Reveal>
          </div>
          <CaseFrame src={c.images[0]} alt={`${c.client}, ${c.tagline}`} ratio="1 / 1" priority />
        </div>
      </section>

      {/* ── 2 · AT A GLANCE ── */}
      <section className="cs-facts">
        <div className="con cs-facts-inner">
          {c.logo && (
            // eslint-disable-next-line @next/next/no-img-element
            <img className="cs-logo" src={c.logo} alt={c.client} loading="lazy" />
          )}
          <dl className="cs-facts-list">
            {Object.entries(c.specs).map(([k, v]) => (
              <div key={k}><dt>{k}</dt><dd>{v}</dd></div>
            ))}
          </dl>
        </div>
      </section>

      {/* ── 3 · THE STORY — alternating, so images have somewhere to live ── */}
      <article className="cs-body">
        {c.sections.map((s, i) => {
          const img = c.images[i + 1];
          const flip = i % 2 === 1;
          return (
            <section key={s.h + i} className={`cs-block${flip ? " cs-block--flip" : ""}`}>
              <div className="con cs-block-inner">
                <Reveal>
                  <div className="cs-block-copy">
                    <h2 className="cs-h2">{s.h}</h2>
                    {s.p.map((para, j) => (
                      <p key={j} className="cs-p">{para}</p>
                    ))}
                  </div>
                </Reveal>
                {img && (
                  <Reveal delay={80}>
                    <div className="cs-block-media">
                      <CaseFrame src={img} alt={c.imageAlts?.[i + 1] ?? `${c.client}, ${s.h}`} ratio="1 / 1" />
                    </div>
                  </Reveal>
                )}
              </div>
            </section>
          );
        })}
      </article>

      {/* ── 4 · PULL QUOTE ── */}
      {pull && (
        <section className="cs-pull">
          <div className="con">
            <Reveal>
              <p className="cs-pull-text">{pull}</p>
              <div className="cs-pull-rule" />
              <p className="cs-pull-attr">{c.client} &nbsp;&middot;&nbsp; {region}</p>
            </Reveal>
          </div>
        </section>
      )}

      {/* ── 5 · FAQ — question-form headings catch the long-tail "who made
             the X trophy" queries, and the block emits FAQPage schema. Every
             answer is derived from this study's own content; none are
             invented. ── */}
      {c.faqs.length > 0 && (
        <section className="cs-faq">
          <div className="con">
            <Reveal><div className="eyebrow" style={{ marginBottom: "22px" }}>Common Questions</div></Reveal>
            <div className="cs-faq-list">
              {c.faqs.map((f, i) => (
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

      {/* ── 6 · WHAT IT SUPPORTS ── */}
      <section className="cs-next">
        <div className="con cs-next-inner">
          <Reveal>
            <p className="cs-next-copy">
              Every piece described here was designed, manufactured and finished at our own
              200,000 sq ft facility in the UAE, with nothing outsourced.
            </p>
            <div className="cs-next-links">
              <Link prefetch={false} href={productHref} className="btn-red">
                See our {PRODUCT_LABEL[c.productSlug] ?? "range"}
              </Link>
              <Link prefetch={false} href={localePath(LOCALE, "/contact")} className="btn-ghost">
                Request a quote
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── 6 · RELATED ── */}
      {reading.length ? (
        <section className="xl-read">
          <div className="con">
            <div className="eyebrow" style={{ marginBottom: "18px" }}>Further reading</div>
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
            <Reveal><div className="eyebrow" style={{ marginBottom: "26px" }}>More Work</div></Reveal>
            <div className="cs-grid">
              {related.map((r, i) => (
                <Reveal key={r.slug} delay={i * 60}>
                  <Link prefetch={false} href={localePath(LOCALE, `/our-work/${r.slug}`)} className="cs-card">
                    <CaseFrame src={r.images[0]} alt={r.client} ratio="1 / 1" card />
                    <div className="cs-card-body">
                      <div className="cs-card-sector">{r.sector}</div>
                      <div className="cs-card-client">{r.client}</div>
                      <p className="cs-card-line">{r.tagline}</p>
                    </div>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* EnquiryForm is a bare form — it carries no container, no background
          and no padding of its own, so it has to be given a panel. Dropped in
          unwrapped it runs the full viewport width with its fields against the
          window edge. Every other page that uses it wraps it the same way. */}
      <section className="cs-enquiry" id="enquiry">
        <div className="con">
          <Reveal>
            <div className="eyebrow" style={{ marginBottom: "14px" }}>Start a Project</div>
            <h2 className="cs-enquiry-h">
              Tell us what the moment is.<br />
              <span>We will tell you what it should be made of.</span>
            </h2>
          </Reveal>
          <Reveal delay={90}>
            <div className="enquiry-panel cs-enquiry-panel">
              <EnquiryForm locale={LOCALE} />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
