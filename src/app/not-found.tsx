import type { Metadata } from "next";
import "./globals.css";
import { latinFontClass } from "@/lib/fonts";

export const metadata: Metadata = {
  title: "Page not found | Crystal Arc",
  robots: { index: false, follow: true },
};

/**
 * The 404.
 *
 * It renders its own <html>/<body> because the app has two root layouts —
 * (en) and (ar) — and Next cannot know which one a missing route belonged to,
 * so no root layout applies here.
 *
 * For the same reason it is bilingual rather than picking a language: someone
 * mistyping a URL under /ar should not be answered in English, and we have no
 * reliable signal either way. Both routes home are offered.
 */
export default function NotFound() {
  return (
    <html lang="en" className={latinFontClass}>
      <body
        style={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "var(--color-bg)",
          padding: "48px 24px",
        }}
      >
        <main style={{ maxWidth: "560px", width: "100%", textAlign: "center" }}>
          <div
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(4rem, 12vw, 7rem)",
              fontWeight: 300,
              color: "var(--color-gold)",
              lineHeight: 1,
              marginBottom: "8px",
            }}
          >
            404
          </div>

          <p
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(1.3rem, 3vw, 1.9rem)",
              fontWeight: 300,
              color: "var(--color-ivory)",
              lineHeight: 1.4,
              marginBottom: "10px",
            }}
          >
            This page could not be found.
          </p>
          <p
            lang="ar"
            dir="rtl"
            style={{
              fontSize: "1.05rem",
              color: "var(--color-taupe)",
              lineHeight: 1.9,
              marginBottom: "40px",
            }}
          >
            الصفحة غير موجودة.
          </p>

          <div style={{ display: "flex", gap: "12px", justifyContent: "center", flexWrap: "wrap" }}>
            <a href="/en" className="btn-red">
              Back to Crystal Arc
            </a>
            <a href="/ar" className="btn-ghost" lang="ar" dir="rtl">
              العودة إلى الصفحة الرئيسية
            </a>
          </div>
        </main>
      </body>
    </html>
  );
}
