import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Reveal from "@/components/Reveal";
import { thumbSrcSet, BLOG_THUMB_SIZES } from "@/lib/thumbs";
import { ogImages } from "@/lib/og";
import { SITE_URL, localePath, LOCALE_TAG } from "@/lib/i18n";
import { formatDate } from "@/lib/blog";
import { allTopics, topicBySlug, postsForTopic, topicsWithPosts } from "@/lib/blog-tags";
import "../../../../../blog.css";

const LOCALE = "en" as const;

/**
 * A topic archive.
 *
 * Only topics that actually have English posts are built. An archive with
 * nothing in it is a worse page than no page at all — it is a thin result for
 * a crawler and a dead end for a reader — and the English and Arabic sets are
 * not the same, so each locale generates its own list.
 */
export function generateStaticParams() {
  return topicsWithPosts(LOCALE).map((t) => ({ topic: t.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ topic: string }> }): Promise<Metadata> {
  const { topic } = await params;
  const t = topicBySlug(topic);
  if (!t) return {};
  const posts = postsForTopic(LOCALE, topic);
  const url = `${SITE_URL}${localePath(LOCALE, `/blog/topic/${topic}`)}`;
  const title = `${t.en} · Crystal Arc Journal`;
  const description = `${posts.length} article${posts.length === 1 ? "" : "s"} on ${t.en.toLowerCase()} from Crystal Arc, a Dubai trophy and corporate gift manufacturer.`;
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: { title, description, url, type: "website", images: ogImages(posts[0]?.hero, t.en) },
  };
}

export default async function TopicArchive({ params }: { params: Promise<{ topic: string }> }) {
  const { topic } = await params;
  const t = topicBySlug(topic);
  if (!t) notFound();
  const posts = postsForTopic(LOCALE, topic);
  if (!posts.length) notFound();

  const schema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: t.en,
    url: `${SITE_URL}${localePath(LOCALE, `/blog/topic/${topic}`)}`,
    inLanguage: LOCALE_TAG[LOCALE],
    isPartOf: { "@type": "Blog", name: "Crystal Arc Journal", url: `${SITE_URL}${localePath(LOCALE, "/blog")}` },
    hasPart: posts.slice(0, 20).map((p) => ({
      "@type": "BlogPosting",
      headline: p.seoTitle || p.title,
      url: `${SITE_URL}${localePath(LOCALE, `/blog/${p.slug}`)}`,
      datePublished: p.date,
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <section style={{ padding: "clamp(120px, 16vh, 170px) 0 32px" }}>
        <div className="blg-wrap">
          <Reveal immediate>
            <nav aria-label="Breadcrumb" className="blg-crumb">
              <Link prefetch={false} href={localePath(LOCALE, "/blog")}>Journal</Link>
              <span> › </span>
              <span>{t.en}</span>
            </nav>
            <h1 className="blg-h1">{t.en}</h1>
            <p className="blg-sub">
              {posts.length} article{posts.length === 1 ? "" : "s"}
            </p>
          </Reveal>
        </div>
      </section>

      <section style={{ padding: "0 0 40px" }}>
        <div className="blg-wrap">
          <div className="blg-topics">
            {allTopics().map((x) => (
              <Link key={x.slug} prefetch={false}
                href={localePath(LOCALE, `/blog/topic/${x.slug}`)}
                className={x.slug === topic ? "blg-topic is-on" : "blg-topic"}>
                {x.en}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: "0 0 100px" }}>
        <div className="blg-wrap">
          <div className="blg-list">
            {posts.map((p) => (
              <Link prefetch={false} key={p.slug} href={localePath(LOCALE, `/blog/${p.slug}`)}
                className={p.hero ? "blg-card" : "blg-card blg-card-notx"}>
                {p.hero ? (
                  <div className="blg-thumb">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={p.hero} srcSet={thumbSrcSet(p.hero)} sizes={BLOG_THUMB_SIZES}
                      alt="" loading="lazy" decoding="async" />
                  </div>
                ) : null}
                <div>
                  <div className="blg-card-t">{p.title}</div>
                  <div className="blg-meta">{formatDate(p.date, LOCALE)}</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
