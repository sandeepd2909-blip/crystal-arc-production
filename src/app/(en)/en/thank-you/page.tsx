import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Thank you",
  description: "Your Crystal Arc enquiry has been received.",
  robots: { index: false, follow: false },
  alternates: { canonical: "/en/thank-you" },
};

export default function ThankYouPage() {
  return (
    <main style={{ minHeight: "70vh", display: "grid", placeItems: "center", padding: "140px 24px 80px", textAlign: "center" }}>
      <section style={{ maxWidth: "620px" }}>
        <p className="eyebrow">Crystal Arc</p>
        <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2.6rem, 7vw, 5.2rem)", fontWeight: 400, lineHeight: 0.98, margin: "18px 0 24px", color: "var(--color-ivory)" }}>
          Thank you.<br /><em>We have your enquiry.</em>
        </h1>
        <p style={{ fontSize: "16px", lineHeight: 1.75, color: "var(--color-taupe)", marginBottom: "34px" }}>
          A Crystal Arc specialist will review your brief and get back to you shortly. If the deadline is urgent, WhatsApp is the fastest route.
        </p>
        <div style={{ display: "flex", justifyContent: "center", gap: "14px", flexWrap: "wrap" }}>
          <a className="btn-red" href="https://wa.me/971565364384" target="_blank" rel="noopener noreferrer">WhatsApp us</a>
          <Link className="btn-ghost" href="/en/our-work">See our work</Link>
        </div>
      </section>
    </main>
  );
}
