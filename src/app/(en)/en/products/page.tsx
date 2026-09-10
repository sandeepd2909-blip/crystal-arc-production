import type { Metadata } from "next";
import { ogUrl } from "@/lib/og";
import { alternatesFor } from "@/lib/i18n";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import { HOF_PHOTOS } from "@/lib/hof-photos";
import EnquiryForm from "@/components/products/EnquiryForm";

export const metadata: Metadata = {
  title: "Products, Trophies, Gifts & Packaging",
  description:
    "Crystal trophies, bespoke awards, corporate gifts, luxury packaging, and home decor - all manufactured in-house in the UAE. 25+ years. GCC delivery.",
  keywords: [
    "crystal trophies Dubai",
    "custom awards UAE",
    "corporate gifts Dubai",
    "luxury packaging UAE",
    "presentation boxes Dubai",
    "home decor Dubai",
    "bespoke awards manufacturer GCC",
    "trophy manufacturer UAE products",
  ],
  openGraph: {
    url: "https://www.crystalarc.net/en/products",
    title: "Products - Custom Trophies, Awards & Corporate Gifts | Crystal Arc Dubai",
    description: "Crystal trophies, bespoke awards, corporate gifts, luxury packaging, and home décor - all manufactured in-house in the UAE.",
    images: [{ url: ogUrl("/trophy-main.webp"), width: 1200, height: 630, alt: "Crystal Arc products" }],
  },
  alternates: alternatesFor("en", "/products"),
};

const PRODUCTS = [
  {
    slug: "trophies-awards",
    category: "Trophies",
    title: "Trophies & Awards",
    desc: "The GCC's leading bespoke trophy manufacturer, championship circuits, governments, and VVIP ceremonies.",
    img: "/hp-cat-trophies-v2.webp",
  },
  {
    slug: "corporate-gifts",
    category: "Gifts",
    title: "Corporate Gifts",
    desc: "Premium branded gifts for banks, airlines, luxury hotels, and Fortune 500 companies across the region.",
    img: "/hp-cat-corporate-v2.webp",
  },
  {
    slug: "boxes",
    category: "Packaging",
    title: "Presentation Boxes",
    desc: "Packaging that signals quality before the gift is even seen. Rigid board, wood, leather, velvet interiors.",
    img: "/hp-cat-boxes-v2.webp",
  },
  {
    slug: "home-decor",
    category: "Décor",
    title: "Home & Décor",
    desc: "Commission-only crystal and metal décor for luxury residences, five-star hotels, and corporate lobbies.",
    img: "/hp-cat-homedecor-v2.webp",
  },
];

const LOGOS = [
  { src: "/logos/Emirates_logo.svg", alt: "Emirates" },
  { src: "/logos/ADNOC.svg", alt: "ADNOC" },
  { src: "/logos/DP_World_logo.svg", alt: "DP World" },
  { src: "/logos/Aramco-.svg", alt: "Aramco" },
  { src: "/logos/Etihad-.svg", alt: "Etihad Airways" },
  { src: "/logos/Museum_of_the_Future_logo.svg", alt: "Museum of the Future" },
  { src: "/logos/Dubai-Police-Logo.svg", alt: "Dubai Police" },
  { src: "/logos/FIFA_Arab_Cup_logo.svg", alt: "FIFA Arab Cup" },
  { src: "/logos/Emirates-NBD.webp", alt: "Emirates NBD" },
  { src: "/logos/Majid_Al_Futtaim_logo.svg", alt: "Majid Al Futtaim" },
  { src: "/logos/Sobha_-company-.svg", alt: "Sobha Realty" },
  { src: "/logos/Saudi-Vision-2030.svg", alt: "Saudi Vision 2030" },
];

const STATS = [
  { num: "25+", label: "Years Manufacturing" },
  { num: "200,000", label: "Sq Ft UAE Facility"  },
  { num: "15K+", label: "Clients Served"      },
  { num: "0%", label: "Work Outsourced"     },
];

export default function ProductsPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section style={{ background: "var(--color-bg)", borderBottom: "1px solid rgba(26,21,18,0.08)", position: "relative", overflow: "hidden" }}>
        {/* Decorative product image — right side */}
        <div style={{ position: "absolute", right: 0, top: 0, bottom: 0, width: "42%", pointerEvents: "none" }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/trophy-main.webp" alt="" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center", opacity: 0.18, display: "block" }} />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right, var(--color-bg) 0%, transparent 40%)" }} />
        </div>

        <div className="con" style={{ position: "relative", zIndex: 1, paddingTop: "148px", paddingBottom: "88px" }}>
          <Reveal>
            <div className="eyebrow">Our Products</div>
          </Reveal>
          <Reveal delay={80}>
            <h1 style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(3rem, 5.5vw, 6.5rem)",
              fontWeight: 300,
              color: "var(--color-ivory)",
              lineHeight: 1.02,
              margin: "18px 0 22px",
              maxWidth: "680px",
            }}>
              Made in the UAE.
              <em style={{ color: "var(--color-gold)", fontStyle: "italic", display: "block" }}>
                Recognised Everywhere.
              </em>
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p style={{ fontSize: "15px", color: "var(--color-taupe)", lineHeight: 1.8, marginBottom: "40px", maxWidth: "460px" }}>
              Four product categories. One standard: exceptional. Every piece designed around your brief and
              manufactured without compromise in our 200,000&nbsp;sq&nbsp;ft UAE facility.
            </p>
          </Reveal>
          <Reveal delay={220}>
            <div style={{ display: "flex", gap: "14px", flexWrap: "wrap" }}>
              <a
                href="https://wa.me/971565364384?text=Hi%20Crystal%20Arc%2C%20I%27d%20like%20to%20discuss%20a%20project."
                className="btn-wa"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12 0C5.373 0 0 5.373 0 12c0 2.125.558 4.122 1.532 5.856L.058 23.486a.5.5 0 00.609.61l5.749-1.519A11.95 11.95 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.9a9.9 9.9 0 01-5.031-1.37l-.361-.214-3.714.981.993-3.648-.235-.374A9.9 9.9 0 012.1 12C2.1 6.535 6.535 2.1 12 2.1S21.9 6.535 21.9 12 17.465 21.9 12 21.9z" />
                </svg>
                WhatsApp Us
              </a>
              <Link prefetch={false} href="/en/contact" className="btn-red">Request a Proposal</Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Products Grid ── */}
      <section style={{ background: "var(--color-bg)", padding: "3px 0 0" }}>
        <div className="prod-listing-grid">
          {PRODUCTS.map((p) => (
            <Link prefetch={false}
              key={p.slug}
              href={`/en/products/${p.slug}`}
              className="prod-listing-card"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={p.img} alt={p.title}  loading="lazy" decoding="async"/>
              <div className="prod-listing-overlay" />
              <div className="prod-listing-content">
                <div className="prod-listing-eye">{p.category}</div>
                <div className="prod-listing-title">{p.title}</div>
                <div className="prod-listing-desc">{p.desc}</div>
                <span className="prod-listing-cta">View Category →</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ── Stats Band ── */}
      <section style={{ background: "var(--color-s2)", borderTop: "1px solid rgba(201,149,74,0.12)", borderBottom: "1px solid rgba(201,149,74,0.12)", padding: "64px 0" }}>
        <div className="con">
          <div className="sec-4-grid" style={{ gap: "32px" }}>
            {STATS.map((s) => (
              <div key={s.num} style={{ textAlign: "center", borderRight: "1px solid rgba(201,149,74,0.12)" }}>
                <div style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2.8rem, 5vw, 5rem)", fontWeight: 300, color: "var(--color-gold)", lineHeight: 1 }}>
                  {s.num}
                </div>
                <div style={{ fontSize: "10px", letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--color-taupe)", fontWeight: 600, marginTop: "10px" }}>
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why Crystal Arc ── */}
      <section style={{ background: "var(--color-s1)", padding: "88px 0" }}>
        <div className="con">
          <div className="roof-grid">
            <Reveal>
              <div className="roof-img">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/prodcat-factory.webp" alt="Crystal Arc manufacturing facility, Dubai"  loading="lazy" decoding="async"/>
              </div>
            </Reveal>
            <div>
              <Reveal>
                <div className="eyebrow" style={{ marginBottom: "16px" }}>Why Crystal Arc</div>
                <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2.4rem, 4vw, 4.2rem)", fontWeight: 300, color: "var(--color-ivory)", lineHeight: 1.1, marginBottom: "64px", maxWidth: "540px" }}>
                  Everything under
                  <em style={{ color: "var(--color-gold)", fontStyle: "italic" }}> one roof.</em>
                </h2>
              </Reveal>
              <div className="sec-3-grid" style={{ gap: "32px", gridTemplateColumns: "1fr" }}>
                {[
                  {
                    num: "01",
                    title: "Zero Outsourcing",
                    body: "Design, tooling, engraving, finishing, and packaging. Every process in our 200,000 sq ft UAE facility. Quality cannot be delegated.",
                  },
                  {
                    num: "02",
                    title: "25 Years of Pedigree",
                    body: "Founded in Dubai in 2000. Our trophies have been handed on Formula 1 podiums, at government ceremonies, and at Olympic events across the GCC.",
                  },
                  {
                    num: "03",
                    title: "One Brief. One Team.",
                    body: "Every project gets a dedicated designer and production manager, one point of contact from first sketch to final delivery.",
                  },
                ].map((item) => (
                  <Reveal key={item.num}>
                    <div>
                      <div style={{ fontFamily: "var(--font-display)", fontSize: "1rem", color: "var(--color-gold)", letterSpacing: "0.1em", marginBottom: "14px" }}>{item.num}</div>
                      <div style={{ fontSize: "11px", letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--color-ivory)", fontWeight: 600, marginBottom: "12px" }}>{item.title}</div>
                      <p style={{ fontSize: "14px", color: "var(--color-taupe)", lineHeight: 1.75 }}>{item.body}</p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Logo Ticker ── */}
      <section style={{ background: "var(--color-s2)", borderTop: "1px solid rgba(26,21,18,0.09)", borderBottom: "1px solid rgba(26,21,18,0.09)", overflow: "hidden", padding: "52px 0" }}>
        <Reveal>
          <div className="eyebrow" style={{ textAlign: "center", marginBottom: "36px" }}>Trusted by the Region&apos;s Most Recognised Names</div>
        </Reveal>
        <div style={{ position: "relative" }}>
          <div style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: "120px", background: "linear-gradient(to right, var(--color-s2), transparent)", zIndex: 2, pointerEvents: "none" }} />
          <div style={{ position: "absolute", right: 0, top: 0, bottom: 0, width: "120px", background: "linear-gradient(to left, var(--color-s2), transparent)", zIndex: 2, pointerEvents: "none" }} />
          <div className="logo-ticker-track" style={{ "--run": 2400 } as React.CSSProperties}>
            {[...LOGOS, ...LOGOS].map((logo, i) => (
              <div key={`${logo.alt}-${i}`} style={{ flexShrink: 0, width: "200px", height: "88px", display: "flex", alignItems: "center", justifyContent: "center", padding: "0 28px" }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={logo.src} alt={logo.alt} style={{ maxWidth: "130px", maxHeight: "44px", objectFit: "contain", opacity: 0.48, filter: "brightness(0)", display: "block" }}  loading="lazy" decoding="async"/>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Hall of Fame ── */}
      <section style={{ background: "var(--color-s2)", position: "relative", overflow: "hidden", paddingTop: "56px", paddingBottom: "56px", borderTop: "1px solid rgba(26,21,18,0.09)" }}>
        <div className="con" style={{ marginBottom: "28px" }}>
          <Reveal>
            <div className="eyebrow" style={{ fontSize: "10px", letterSpacing: "0.22em" }}>
              Hall of Fame &nbsp;&middot;&nbsp; Received by the World&apos;s Finest
            </div>
          </Reveal>
        </div>
        <div className="hof-mini-wrap">
          <div className="hof-mini-track" style={{ "--run": 7546 } as React.CSSProperties}>
            {[...HOF_PHOTOS, ...HOF_PHOTOS].map((p, i) => (
              <div key={i} className="hof-mini-tile">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={p.src} alt={p.label}  loading="lazy" decoding="async"/>
                <div className="hof-mini-caption">
                  <div style={{ fontSize: "9px", letterSpacing: "0.16em", textTransform: "uppercase", color: "rgba(255,255,255,0.85)", fontWeight: 600 }}>{p.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Enquiry Form ── */}
      <section style={{ background: "var(--color-s2)", borderTop: "1px solid rgba(201,149,74,0.12)", padding: "88px 0" }}>
        <div className="con">
          <div className="sec-enquiry-grid" style={{ gap: "80px" }}>
            {/* Left */}
            <div>
              <Reveal>
                <div className="eyebrow" style={{ marginBottom: "20px" }}>Get a Proposal</div>
                <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2.2rem, 3.5vw, 4rem)", fontWeight: 300, color: "var(--color-ivory)", lineHeight: 1.1, marginBottom: "20px" }}>
                  Tell us what you&apos;re creating.
                  <em style={{ color: "var(--color-gold)", fontStyle: "italic", display: "block" }}>We handle the rest.</em>
                </h2>
              </Reveal>
              <Reveal delay={80}>
                <p style={{ fontSize: "14px", color: "var(--color-taupe)", lineHeight: 1.8, marginBottom: "40px" }}>
                  Share your brief, event, quantity, timeline, budget. We respond within 2 hours with a tailored proposal.
                </p>
                <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                  {[
                    { num: "01", text: "We review your brief within 2 hours" },
                    { num: "02", text: "We send a tailored proposal or suggest a call" },
                    { num: "03", text: "Production begins after your written approval" },
                  ].map((step) => (
                    <div key={step.num} style={{ display: "flex", gap: "16px", alignItems: "flex-start" }}>
                      <span style={{ fontFamily: "var(--font-display)", fontSize: "1rem", color: "var(--color-gold)", flexShrink: 0, marginTop: "2px" }}>{step.num}</span>
                      <span style={{ fontSize: "13px", color: "var(--color-taupe)", lineHeight: 1.7 }}>{step.text}</span>
                    </div>
                  ))}
                </div>
                <div style={{ marginTop: "40px", paddingTop: "32px", borderTop: "1px solid rgba(201,149,74,0.15)", display: "flex", flexDirection: "column", gap: "10px" }}>
                  <a href="https://wa.me/971565364384" target="_blank" rel="noopener noreferrer" style={{ fontSize: "12px", color: "var(--color-taupe)", textDecoration: "none" }}>
                    WhatsApp: <span style={{ color: "var(--color-gold)" }}>+971 56 536 4384</span>
                  </a>
                  <a href="mailto:info@crystalarc.net" style={{ fontSize: "12px", color: "var(--color-taupe)", textDecoration: "none" }}>
                    Email: <span style={{ color: "var(--color-gold)" }}>info@crystalarc.net</span>
                  </a>
                </div>
              </Reveal>
            </div>
            {/* Right — form */}
            <div className="enquiry-panel">
              <EnquiryForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
