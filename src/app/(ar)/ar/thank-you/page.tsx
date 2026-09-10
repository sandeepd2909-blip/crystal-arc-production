import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "شكرًا لكم",
  description: "تم استلام استفساركم لدى كريستال آرك.",
  robots: { index: false, follow: false },
  alternates: { canonical: "/ar/thank-you" },
};

export default function ThankYouPageArabic() {
  return (
    <main style={{ minHeight: "70vh", display: "grid", placeItems: "center", padding: "140px 24px 80px", textAlign: "center" }}>
      <section style={{ maxWidth: "620px" }}>
        <p className="eyebrow">كريستال آرك</p>
        <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2.6rem, 7vw, 5.2rem)", fontWeight: 400, lineHeight: 1.1, margin: "18px 0 24px", color: "var(--color-ivory)" }}>
          شكرًا لكم.<br /><em>استلمنا استفساركم.</em>
        </h1>
        <p style={{ fontSize: "16px", lineHeight: 1.9, color: "var(--color-taupe)", marginBottom: "34px" }}>
          سيراجع فريق كريستال آرك طلبكم ويتواصل معكم قريبًا. وإذا كان الموعد عاجلًا، فالواتساب هو الأسرع.
        </p>
        <div style={{ display: "flex", justifyContent: "center", gap: "14px", flexWrap: "wrap" }}>
          <a className="btn-red" href="https://wa.me/971565364384" target="_blank" rel="noopener noreferrer">راسلنا على واتساب</a>
          <Link className="btn-ghost" href="/ar/our-work">تصفّح أعمالنا</Link>
        </div>
      </section>
    </main>
  );
}
