import type { Metadata } from "next";
import { thumbSrcSet, BLOG_THUMB_SIZES } from "@/lib/thumbs";
import { ogImages } from "@/lib/og";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import { SITE_URL, localePath } from "@/lib/i18n";
import { postBySlug, allSlugs, relatedPosts, formatDate, articleSchema, blogAlternates } from "@/lib/blog";
import { studiesForPost } from "@/lib/crosslinks";
import { topicsForPost } from "@/lib/blog-tags";
import { CARD_SIZES } from "@/lib/thumbs";
import "../../../../blog.css";

const LOCALE = "ar" as const;

/** Static export needs the full slug list at build time. */
export function generateStaticParams() {
  return allSlugs(LOCALE).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const p = postBySlug(LOCALE, slug);
  if (!p) return {};
  return {
    // seoTitle is the trimmed <title>; p.title stays full for the h1 and OG
    title: p.seoTitle,
    description: p.description,
    alternates: blogAlternates(LOCALE, slug),
    openGraph: {
      url: `${SITE_URL}${localePath(LOCALE, `/blog/${slug}`)}`,
      title: p.title,
      description: p.description,
      type: "article",
      publishedTime: p.date,
      images: ogImages(p.hero, p.title),
    },
  };
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const p = postBySlug(LOCALE, slug);
  if (!p) return null;
  const related = relatedPosts(LOCALE, slug, 3);
  const work = studiesForPost(LOCALE, slug, 2);
  const topics = topicsForPost(slug);

  const crumbs = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "الرئيسية", item: `${SITE_URL}${localePath(LOCALE, "/")}` },
      { "@type": "ListItem", position: 2, name: "المدونة", item: `${SITE_URL}${localePath(LOCALE, "/blog")}` },
      { "@type": "ListItem", position: 3, name: p.title, item: `${SITE_URL}${localePath(LOCALE, `/blog/${slug}`)}` },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema(p, LOCALE)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(crumbs) }} />
      <article style={{ padding: "clamp(120px, 16vh, 170px) 0 80px" }}>
        <div className="blg-wrap">
          <Reveal immediate>
            <Link prefetch={false} href={localePath(LOCALE, "/blog")} className="blg-meta"
              style={{ textDecoration: "none", display: "inline-block", marginBottom: "22px" }}>
              → كل المقالات
            </Link>
            <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.9rem, 4.4vw, 3rem)",
              fontWeight: 300, color: "var(--color-ivory)", lineHeight: 1.15, marginBottom: "16px" }}>
              {p.title}
            </h1>
            <div className="blg-meta" style={{ marginBottom: "34px" }}>
              {formatDate(p.date, LOCALE)} &middot; {p.readingMinutes} دقائق قراءة
            </div>
          </Reveal>

          {p.hero ? (
            <Reveal delay={80} immediate>
              <div className="blg-thumb" style={{ aspectRatio: "16/9", marginBottom: "38px" }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={p.hero} alt={p.heroAltAr ?? ""} fetchPriority="high" decoding="async" />
              </div>
            </Reveal>
          ) : null}

          {/* Body is sanitised at build time in convert-blog: no script, no
              iframe, no inline styles, links rewritten to the new routes. */}
          <div className="blg-body" dangerouslySetInnerHTML={{ __html: p.html }} />
        </div>
      </article>

      {topics.length ? (
        <section className="blg-post-topics">
          <div className="blg-wrap">
            <div className="blg-topics">
              {topics.map((t) => (
                <Link key={t.slug} prefetch={false} href={localePath(LOCALE, `/blog/topic/${t.slug}`)} className="blg-topic">
                  {t.ar}
                </Link>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      {work.length ? (
        <section className="xl-work">
          <div className="blg-wrap">
            <div className="eyebrow" style={{ marginBottom: "22px" }}>من أعمالنا</div>
            <div className="xl-work-grid">
              {work.map((w) => (
                <Link prefetch={false} key={w.slug} href={localePath(LOCALE, `/our-work/${w.slug}`)} className="xl-work-card">
                  {w.images[0] ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img src={w.images[0]} srcSet={thumbSrcSet(w.images[0])} sizes={CARD_SIZES} alt="" loading="lazy" decoding="async" />
                  ) : null}
                  <div className="xl-work-body">
                    <div className="xl-work-client">{w.ar?.client ?? w.client}</div>
                    <div className="xl-work-tag">{w.ar?.tagline ?? w.tagline}</div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      {related.length ? (
        <section style={{ background: "var(--color-s1)", padding: "70px 0 90px" }}>
          <div className="blg-wrap">
            <div className="eyebrow" style={{ marginBottom: "22px" }}>اقرأ المزيد</div>
            <div className="blg-list">
              {related.map((r) => (
                <Link prefetch={false} key={r.slug} href={localePath(LOCALE, `/blog/${r.slug}`)}
                  className={r.hero ? "blg-card" : "blg-card blg-card-notx"}>
                  {r.hero ? (
                    <div className="blg-thumb">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={r.hero} srcSet={thumbSrcSet(r.hero)} sizes={BLOG_THUMB_SIZES} alt="" loading="lazy" decoding="async" />
                    </div>
                  ) : null}
                  <div>
                    <div className="blg-card-t">{r.title}</div>
                    <div className="blg-meta">{formatDate(r.date, LOCALE)}</div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      ) : null}
    </>
  );
}
