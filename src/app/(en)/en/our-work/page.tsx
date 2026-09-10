import type { Metadata } from "next";
import { ogUrl } from "@/lib/og";
import { alternatesFor } from "@/lib/i18n";
import Reveal from "@/components/Reveal";
import EnquiryForm from "@/components/products/EnquiryForm";
import HofGallery from "@/components/our-work/HofGallery";
import Link from "next/link";
import { localePath } from "@/lib/i18n";
import { CASE_STUDIES, SECTORS } from "@/lib/case-studies";
import CaseStudyGrid from "@/components/our-work/CaseStudyGrid";

const waLink = `https://wa.me/971565364384?text=${encodeURIComponent(
  "Hi Crystal Arc, I'd like to discuss a project."
)}`;

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
  { src: "/logos/Al-Rajhi-Bank.svg", alt: "Al Rajhi Bank" },
  { src: "/logos/First_Abu_Dhabi_Bank_Logo.svg", alt: "First Abu Dhabi Bank" },
  { src: "/logos/Saudi-Esports-Federation.svg", alt: "Saudi Esports" },
  { src: "/logos/Cartier_logo.svg", alt: "Cartier" },
  { src: "/logos/adidas.webp", alt: "Adidas" },
  { src: "/logos/Etisalat.svg", alt: "Etisalat" },
  { src: "/logos/ENOC_DL_logo.svg", alt: "ENOC" },
  { src: "/logos/Abu-Dhabi-Ports.webp", alt: "Abu Dhabi Ports" },
  { src: "/logos/Ministry-of-Health-Kuwait.webp", alt: "Ministry of Health, Kuwait" },
  { src: "/logos/Royal-Commission-Jubail-Yanbu.webp", alt: "Royal Commission for Jubail and Yanbu" },
  { src: "/logos/Makkah-Route-Initiative.webp", alt: "Makkah Route Initiative" },
  { src: "/logos/Saudi-Cricket-SACF.webp", alt: "Saudi Cricket" },
  { src: "/logos/Nafis.webp", alt: "Nafis" },
  { src: "/logos/Fujairah-International-Airport.webp", alt: "Fujairah International Airport" },
  { src: "/logos/Dubai-Airwing.webp", alt: "Dubai Airwing" },
  { src: "/logos/Dubai-Marathon.webp", alt: "Dubai Marathon" },
  { src: "/logos/Aamro-Freight-Shipping.webp", alt: "Aamro Freight & Shipping" },
  { src: "/logos/Grosvenor-House.webp", alt: "Grosvenor House Dubai" },
  { src: "/logos/KAYALI.webp", alt: "KAYALI" },
  { src: "/logos/Ferrari-Owners-Club-UAE.webp", alt: "Ferrari Owners Club UAE" },
];

export const metadata: Metadata = {
  title: "Our Work · Hall of Fame",
  description:
    "Twenty-five years of pieces presented to heads of state, world champions, royalty and global icons across five continents. Explore the Crystal Arc Hall of Fame.",
  keywords: [
    "crystal arc our work",
    "crystal arc hall of fame",
    "trophy gallery Dubai",
    "bespoke award portfolio UAE",
    "crystal arc clients",
  ],
  openGraph: {
    url: "https://www.crystalarc.net/en/our-work",
    title: "Our Work | Crystal Arc · Hall of Fame, Dubai",
    description:
      "Twenty-five years of pieces presented to heads of state, world champions, royalty and global icons across five continents.",
    images: [{ url: ogUrl("/hof-mag-06.webp"), width: 1200, height: 630, alt: "Crystal Arc Hall of Fame" }],
  },
  alternates: alternatesFor("en", "/our-work"),
};

export default function OurWorkPage() {
  return (
    <>
      {/* ══════════════════════════════════════
          1 · HERO
      ══════════════════════════════════════ */}
      <section
        style={{
          position: "relative",
          minHeight: "80vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
          background: "#0C0A07",
        }}
      >
        { }
        {/* The furnace, not a dignitary. This was hof-mag-17 — the Trump photo —
            at brightness(0.2) under a 55-92% scrim, so under 9% of it reached
            the screen: a 200KB download rendering as a black rectangle, with a
            politically loaded subject nobody could actually see.

            Manufacturing is the differentiator on this page. Competitors
            resell; this photograph says we make. Brightness and scrim are set
            so it reads as a photograph rather than a texture, while the
            headline stays legible over the centre — the craftsman sits in the
            left third, which is why the type is centred rather than ranged. */}
        <img
          src="/factory-3.webp"
          alt=""
          aria-hidden
          style={{
            position: "absolute", inset: 0,
            width: "100%", height: "100%",
            objectFit: "cover", objectPosition: "center 45%",
            filter: "brightness(0.5) saturate(0.85)",
            display: "block",
          }}
        />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(12,10,7,0.45) 0%, rgba(12,10,7,0.63) 55%, rgba(12,10,7,0.82) 100%)" }} />
        {/* A ground for the copy, not for the photograph. The furnace glow is
            the brightest thing in the frame and it sits dead centre, exactly
            where the gold italic line falls — legible-ish at 1440, marginal on
            a phone where the crop pushes the flame further behind the type.
            Darkening the whole image is what produced the black rectangle this
            replaced, so the weight goes behind the text block only and the
            photograph stays readable out to the edges. */}
        <div style={{ position: "absolute", inset: 0, background: "radial-gradient(58% 52% at 50% 46%, rgba(12,10,7,0.62) 0%, rgba(12,10,7,0.34) 55%, rgba(12,10,7,0) 100%)" }} />
        <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "1px", background: "linear-gradient(to right, transparent, rgba(201,149,74,0.5), transparent)" }} />

        <div
          style={{
            position: "relative",
            zIndex: 1,
            textAlign: "center",
            padding: "140px clamp(24px, 8vw, 160px) 100px",
            maxWidth: "980px",
            margin: "0 auto",
          }}
        >
          <Reveal>
            <div className="eyebrow" style={{ marginBottom: "44px" }}>Our Work &nbsp;&middot;&nbsp; Hall of Fame</div>
          </Reveal>

          <h1
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(3rem, 6.5vw, 7rem)",
              fontWeight: 300,
              color: "#EDE8DC",
              lineHeight: 1.08,
              marginBottom: "32px",
            }}
          >
            Presented to the moments<br />
            <em style={{ color: "var(--color-gold)" }}>the world remembers.</em>
          </h1>

          <Reveal delay={120}>
            <p
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(1.1rem, 1.8vw, 1.5rem)",
                fontStyle: "italic",
                fontWeight: 300,
                color: "rgba(237,232,220,0.68)",
                lineHeight: 1.65,
                maxWidth: "560px",
                margin: "0 auto 64px",
              }}
            >
              Heads of state. World champions. Royalty. Global icons.
              Every piece on this page was cut, cast and finished by hand in our own
              Dubai factory, then handed to someone who will never forget it.
            </p>
          </Reveal>

          <Reveal delay={200}>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                gap: "clamp(24px, 5vw, 72px)",
                flexWrap: "wrap",
              }}
            >
              {[
                { n: "25+", l: "Years of craft" },
                { n: "40,000+", l: "Pieces delivered" },
                { n: "5", l: "Continents" },
                { n: "0%", l: "Outsourced" },
              ].map((s) => (
                <div key={s.l} style={{ textAlign: "center" }}>
                  <div style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.8rem, 2.8vw, 2.6rem)", fontWeight: 300, color: "var(--color-gold)", lineHeight: 1 }}>{s.n}</div>
                  <div style={{ fontSize: "9px", letterSpacing: "0.18em", textTransform: "uppercase", color: "rgba(237,232,220,0.45)", marginTop: "6px" }}>{s.l}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        {/* Arc wave */}
        <div style={{ position: "absolute", bottom: "-1px", left: 0, right: 0, lineHeight: 0 }}>
          <svg viewBox="0 0 1440 64" preserveAspectRatio="none" style={{ width: "100%", display: "block" }}>
            <path d="M0,48 Q360,8 720,40 Q1080,72 1440,28 L1440,64 L0,64 Z" fill="var(--color-bg)" />
          </svg>
        </div>
      </section>


      {/* ══════════════════════════════════════
          2 · CASE STUDIES — the index
          Named commissions, grouped by sector. This is the part of Our Work
          that can rank: 29 pages of specific, first-hand project detail that
          no competitor can write, each linking down to the product page it
          supports.
      ══════════════════════════════════════ */}
      <section style={{ background: "var(--color-s1)", padding: "96px 0 104px", borderTop: "1px solid rgba(26,21,18,0.08)" }}>
        <div className="con">
          <Reveal>
            <div className="eyebrow" style={{ marginBottom: "16px" }}>Case Studies</div>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(2.2rem, 3.8vw, 4rem)",
                fontWeight: 300,
                color: "var(--color-ivory)",
                lineHeight: 1.1,
                marginBottom: "12px",
                maxWidth: "680px",
              }}
            >
              The commissions,<br />
              <span style={{ fontStyle: "italic", color: "var(--color-gold)" }}>in full.</span>
            </h2>
            <p style={{ fontSize: "14px", color: "var(--color-taupe)", lineHeight: 1.8, maxWidth: "560px", marginBottom: "48px" }}>
              Twenty-nine projects, from the brief through the material choices to the
              ceremony the piece was made for, written by the people who made them.
            </p>
          </Reveal>

          <CaseStudyGrid
            items={CASE_STUDIES}
            sectors={[...SECTORS]}
            basePath={localePath("en", "/our-work")}
          />
        </div>
      </section>

      {/* ══════════════════════════════════════
          2 · FILTERABLE GALLERY
      ══════════════════════════════════════ */}
      <section style={{ background: "var(--color-bg)", padding: "100px 0 120px" }}>
        <div className="con">
          <Reveal>
            <div className="eyebrow" style={{ marginBottom: "16px" }}>The Range</div>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(2.2rem, 3.8vw, 4rem)",
                fontWeight: 300,
                color: "var(--color-ivory)",
                lineHeight: 1.1,
                marginBottom: "12px",
                maxWidth: "680px",
              }}
            >
              Every piece has a story.<br />
              <span style={{ fontStyle: "italic", color: "var(--color-gold)" }}>Filter by what it is made from.</span>
            </h2>
            <p style={{ fontSize: "14px", color: "var(--color-taupe)", lineHeight: 1.8, maxWidth: "540px", marginBottom: "56px" }}>
              A working archive of commissioned pieces in crystal, metal and resin. Every one
              designed, cast, engraved and finished inside our own UAE facility.
            </p>
          </Reveal>

          <HofGallery />
        </div>
      </section>


      {/* ══════════════════════════════════════
          3 · QUOTE
      ══════════════════════════════════════ */}
      <section style={{ background: "var(--color-s2)", padding: "88px 0", borderTop: "1px solid rgba(26,21,18,0.08)", borderBottom: "1px solid rgba(26,21,18,0.08)" }}>
        <div className="con" style={{ maxWidth: "820px", textAlign: "center" }}>
          <Reveal>
            <div style={{ fontFamily: "var(--font-display)", fontSize: "4rem", color: "var(--color-gold)", opacity: 0.2, lineHeight: 0.5, marginBottom: "8px" }}>&ldquo;</div>
            <p
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(1.35rem, 2.4vw, 2.2rem)",
                fontStyle: "italic",
                fontWeight: 300,
                color: "var(--color-ivory)",
                lineHeight: 1.55,
                marginBottom: "24px",
              }}
            >
              We don&apos;t make products. We make the objects people remember the moment by.
            </p>
            <div style={{ fontSize: "10px", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--color-taupe)", opacity: 0.8 }}>
              Crystal Arc · est. 2000
            </div>
          </Reveal>
        </div>
      </section>


      {/* ══════════════════════════════════════
          4 · TRUSTED BY — Logo ticker
      ══════════════════════════════════════ */}
      <section style={{ background: "var(--color-s1)", padding: "64px 0", position: "relative", overflow: "hidden" }}>
        <div className="con" style={{ marginBottom: "40px" }}>
          <Reveal>
            <div className="eyebrow">Trusted By</div>
          </Reveal>
        </div>
        <div style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: "120px", background: "linear-gradient(to right, var(--color-s1), transparent)", zIndex: 2, pointerEvents: "none" }} />
        <div style={{ position: "absolute", right: 0, top: 0, bottom: 0, width: "120px", background: "linear-gradient(to left, var(--color-s1), transparent)", zIndex: 2, pointerEvents: "none" }} />
        <div style={{ overflow: "hidden" }}>
          <div className="logo-ticker-track" style={{ "--run": 6400 } as React.CSSProperties}>
            {[...LOGOS, ...LOGOS].map((l, i) => (
              <div key={`${l.alt}-${i}`} style={{ flexShrink: 0, width: "200px", height: "88px", display: "flex", alignItems: "center", justifyContent: "center", padding: "0 28px" }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={l.src} alt={l.alt} style={{ maxWidth: "100%", maxHeight: "100%", objectFit: "contain", opacity: 0.55, filter: "brightness(0)" }}  loading="lazy" decoding="async"/>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* ══════════════════════════════════════
          5 · CTA — Commission your piece
      ══════════════════════════════════════ */}
      <section className="mob-pad" style={{ background: "var(--color-s1)", padding: "120px 0", borderTop: "1px solid rgba(26,21,18,0.08)" }}>
        <div className="con">
          <div className="sec-enquiry-grid" style={{ gap: "80px" }}>
            <Reveal from="left">
              <div>
                <div className="eyebrow" style={{ marginBottom: "24px" }}>Join the Hall of Fame</div>
                <h2
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "clamp(2.4rem, 3.8vw, 4rem)",
                    fontWeight: 300,
                    color: "var(--color-ivory)",
                    lineHeight: 1.1,
                    marginBottom: "18px",
                  }}
                >
                  Tell us what you&apos;re creating.
                </h2>
                <p
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "clamp(1.1rem, 1.6vw, 1.5rem)",
                    fontStyle: "italic",
                    color: "var(--color-gold)",
                    marginBottom: "40px",
                    opacity: 0.85,
                  }}
                >
                  Every Crystal Arc brief starts with a conversation.
                </p>
                {[
                  { label: "WhatsApp", val: "+971 56 536 4384", href: waLink },
                  { label: "Email", val: "info@crystalarc.net", href: "mailto:info@crystalarc.net" },
                  { label: "Showroom", val: "Dubai, UAE", href: "#" },
                ].map((c) => (
                  <div
                    key={c.label}
                    style={{
                      display: "grid",
                      gridTemplateColumns: "80px 1fr",
                      gap: "16px",
                      padding: "14px 0",
                      borderBottom: "1px solid rgba(26,21,18,0.1)",
                      alignItems: "center",
                    }}
                  >
                    <span style={{ fontSize: "9px", letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--color-muted)", fontWeight: 600 }}>{c.label}</span>
                    <a
                      href={c.href}
                      target={c.href.startsWith("http") ? "_blank" : undefined}
                      rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      style={{ fontSize: "15px", color: "var(--color-ivory)", textDecoration: "none" }}
                    >
                      {c.val}
                    </a>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal from="right" delay={120}>
              <div className="enquiry-panel">
                <EnquiryForm />
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
