import type { Metadata } from "next";
import { thumbSrcSet, BLOG_THUMB_SIZES } from "@/lib/thumbs";
import { ogImages } from "@/lib/og";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import { alternatesFor, SITE_URL, localePath, LOCALE_TAG } from "@/lib/i18n";
import { postsFor, formatDate } from "@/lib/blog";
import { topicsWithPosts } from "@/lib/blog-tags";
import "../../../blog.css";

const LOCALE = "en" as const;

export const metadata: Metadata = {
  title: "Trophies, Awards & Corporate Gifting",
  description: "Three years of writing on trophy design, materials, corporate recognition and gifting across the GCC, from the Dubai factory floor.",
  alternates: alternatesFor(LOCALE, "/blog"),
  openGraph: { url: "https://www.crystalarc.net/en/blog", title: "Trophies, Awards & Corporate Gifting", description: "Three years of writing on trophy design, materials, corporate recognition and gifting across the GCC, from the Dubai factory floor.", type: "website", images: ogImages(undefined, "Crystal Arc") },
};

export default function BlogIndex() {
  const posts = postsFor(LOCALE);
  const schema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "Trophies, Awards & Corporate Gifting",
    url: `${SITE_URL}${localePath(LOCALE, "/blog")}`,
    inLanguage: LOCALE_TAG[LOCALE],
    blogPost: posts.slice(0, 10).map((p) => ({
      "@type": "BlogPosting",
      headline: p.title,
      datePublished: p.date,
      url: `${SITE_URL}${localePath(LOCALE, `/blog/${p.slug}`)}`,
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section style={{ padding: "clamp(120px, 16vh, 170px) 0 40px" }}>
        <div className="blg-wrap">
          <Reveal>
            <div className="eyebrow" style={{ marginBottom: "14px" }}>Blog</div>
            <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2.1rem, 5vw, 3.4rem)",
              fontWeight: 300, color: "var(--color-ivory)", lineHeight: 1.1, marginBottom: "14px" }}>
              Notes from the factory floor.
            </h1>
            <p style={{ fontSize: "15px", color: "var(--color-taupe)", lineHeight: 1.8, maxWidth: "540px" }}>
              Fifty-five pieces on trophy design, materials, recognition programmes and corporate gifting, written by the people who make the work.
            </p>
          </Reveal>
        </div>
      </section>

      <section style={{ padding: "0 0 8px" }}>
        <div className="blg-wrap">
          <div className="blg-topics">
            {topicsWithPosts("en").map((t) => (
              <Link key={t.slug} prefetch={false} href={localePath("en", `/blog/topic/${t.slug}`)} className="blg-topic">
                {t.en}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: "10px 0 100px" }}>
        <div className="blg-wrap">
          <div className="blg-list">
            {posts.map((p, i) => (
              <Reveal key={p.slug} delay={Math.min(i, 6) * 50}>
                <Link prefetch={false} href={localePath(LOCALE, `/blog/${p.slug}`)}
                  className={p.hero ? "blg-card" : "blg-card blg-card-notx"}>
                  {p.hero ? (
                    <div className="blg-thumb">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={p.hero} srcSet={thumbSrcSet(p.hero)} sizes={BLOG_THUMB_SIZES} alt="" loading={i < 3 ? "eager" : "lazy"} decoding="async" />
                    </div>
                  ) : null}
                  <div>
                    <div className="blg-card-t">{p.title}</div>
                    <div className="blg-card-d">{p.description}</div>
                    <div className="blg-meta">
                      {formatDate(p.date, LOCALE)} &middot; {p.readingMinutes} min read
                    </div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
