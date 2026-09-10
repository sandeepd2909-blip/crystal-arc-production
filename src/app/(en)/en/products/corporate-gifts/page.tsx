import type { Metadata } from "next";
import { alternatesFor } from "@/lib/i18n";
import { ogUrl } from "@/lib/og";
import { mobileSrc } from "@/lib/mobileImages";
import Link from "next/link";
import FAQAccordion from "@/components/products/FAQAccordion";
import EnquiryForm from "@/components/products/EnquiryForm";
import BrochureDownload from "@/components/products/BrochureDownload";
import IndustriesStrip from "@/components/products/IndustriesStrip";
import TestimonialRotator from "@/components/products/TestimonialRotator";
import Reveal from "@/components/Reveal";
import SplitText from "@/components/SplitText";
import AnimatedNumber from "@/components/AnimatedNumber";
import MagneticButton from "@/components/MagneticButton";
import { getRelatedProducts } from "@/lib/products";
import { HOF_PHOTOS } from "@/lib/hof-photos";

const CDN = "https://cdn.prod.website-files.com/638c4b4310a6ce72185b8247";

const IMG = {
  crystal: "/cg-crystal-desk.webp",
  metal:   "/cg-branded-metal.webp",
  vvip:    "/cg-vvip-board.webp",
  sports:  "/cg-employee.webp",
  banner:  "/cg-banner.webp",
};

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

const OCCASIONS = [
  {
    num: "01",
    title: "Corporate Giveaways",
    sub: "Bespoke Pieces · Branded · Commission-Made",
    img: "/cg-giveaways.webp",
  },
  {
    num: "02",
    title: "Branded Metal Pieces",
    sub: "Pen Stands · Clocks · Plaques",
    img: "/cg-metal-v2.webp",
  },
  {
    num: "03",
    title: "National Day & Eid",
    sub: "UAE · Saudi NDF · Ramadan · Eid",
    img: "/cg-national-day.webp",
  },
  {
    num: "04",
    title: "VVIP & Board Gifts",
    sub: "Commission-Only · Ministerial",
    img: "/cg-vvip-v2.webp",
  },
  {
    num: "05",
    title: "Employee Programmes",
    sub: "Tiered · Named · Bulk Delivery",
    img: IMG.sports,
  },
];

const STATS = [
  { num: "25+", label: "Years\nCrafting Gifts" },
  { num: "15K+", label: "Corporate\nClients" },
  { num: "40,000+", label: "Pieces\nCommissioned" },
  { num: "6", label: "Production\nDivisions" },
  { num: "0%", label: "Work\nOutsourced" },
];



const TESTIMONIALS = [
  {
    quote: "For our National Day gifting programme, we commissioned 2,000 individually named crystal pieces. Crystal Arc delivered every unit on time, flawlessly. Not a single piece needed replacement.",
    name: "Head of Corporate Affairs",
    co: "Multinational Corporation, Dubai",
  },
  {
    quote: "We have relied on Crystal Arc for our VVIP client gift programme for three consecutive years. The quality justifies the premium every single time.",
    name: "Director of Client Relations",
    co: "Investment Bank, DIFC",
  },
  {
    quote: "For ministerial presentation gifts, discretion and standard are both non-negotiable. Crystal Arc understood that without being told.",
    name: "Protocol Manager",
    co: "Government Entity, Abu Dhabi",
  },
];

const FAQS = [
  {
    q: "Which occasions do you specialise in?",
    a: "National Day (UAE, Saudi, Bahrain), Eid & Ramadan, corporate milestones, client appreciation programmes, employee recognition, onboarding gifts, event giveaways, and VVIP single commissions. We handle recurring annual programmes and one-off brief projects equally well.",
  },
  {
    q: "Can each gift have a different recipient name?",
    a: "Yes. Individual personalisation (name, designation, department, message) is available on all products. We manage the data file and production sequencing. You upload a spreadsheet; we handle the rest.",
  },
  {
    q: "What is the minimum order quantity?",
    a: "25 pieces for standard branded runs. For executive or board-level single gifts there is no minimum. We regularly produce single VVIP commission pieces. Speak to us about what you need and we will advise the most cost-effective approach.",
  },
  {
    q: "Do you design the gift as well, or do we need to bring a brief?",
    a: "Both work. If you have a brand guideline and a product direction, we design from there. If you are starting from scratch, we present 3–4 concept directions based on your budget, occasion, and brand values. Design is included at no cost.",
  },
  {
    q: "Can you match our exact brand colours and logo?",
    a: "Yes. Pantone colour matching on all exterior finishes, laser engraving and UV printing for logos, heat foil for premium applications. We require your brand specification document at brief stage.",
  },
  {
    q: "Do you handle packaging separately?",
    a: "Our packaging team designs and produces the gift box alongside the gift itself, ensuring dimensional fit, visual coherence, and the same quality standard. Options include rigid board, leather wrap, fabric-covered boxes, with hot foil and deboss branding.",
  },
];

const waLink = `https://wa.me/971565364384?text=${encodeURIComponent(
  "Hi Crystal Arc, I'm interested in corporate gifts for an upcoming occasion. Please share more details."
)}`;

/* â"€â"€â"€ shared inline helpers â"€â"€â"€ */
const BG = (_src: string, brightness = 0.18) =>
  ({
    position: "absolute",
    inset: 0,
    width: "100%",
    height: "100%",
    objectFit: "cover" as const,
    objectPosition: "center",
    filter: `brightness(${brightness}) saturate(0.85)`,
    display: "block",
  } as React.CSSProperties);

export const metadata: Metadata = {
  title: "Corporate Gifts UAE & Marketing Products",
  description:
    "Luxury corporate gifts and branded marketing products, made in Dubai. Professional gifts, giveaways, National Day and VVIP commissions. GCC-wide delivery.",
  keywords: [
    "corporate gifts Dubai",
    "luxury corporate gifts UAE",
    "branded gifts manufacturer Dubai",
    "National Day gifts UAE",
    "executive gifts UAE",
    "VIP corporate gifts Middle East",
    "Eid gifts corporate UAE",
    "premium gifting Dubai",
  ],
  openGraph: {
    url: "https://www.crystalarc.net/en/products/corporate-gifts",
    title: "Luxury Corporate Gifts Dubai | Crystal Arc",
    description: "Premium branded corporate gifts manufactured in Dubai. Corporate giveaways, branded metal pieces, National Day collections, VVIP commissions. GCC-wide delivery.",
    images: [{ url: ogUrl("/cg-banner.webp"), width: 1200, height: 630, alt: "Luxury corporate gifts by Crystal Arc Dubai" }],
  },
  alternates: alternatesFor("en", "/products/corporate-gifts"),
};

const productJsonLd = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "Luxury Corporate Gifts Dubai",
  description: "Premium branded corporate gifts manufactured in Dubai. Corporate giveaways, branded metal pieces, National Day collections, VVIP commissions.",
  brand: { "@type": "Brand", name: "Crystal Arc" },
  manufacturer: { "@type": "Organization", name: "Crystal Arc", url: "https://www.crystalarc.net" },
  image: "https://www.crystalarc.net/cg-banner.webp",
  url: "https://www.crystalarc.net/en/products/corporate-gifts",
  offers: {
    "@type": "Offer",
    priceCurrency: "AED",
    availability: "https://schema.org/InStock",
    seller: { "@type": "Organization", name: "Crystal Arc" },
    areaServed: ["AE", "SA", "QA", "KW", "BH", "OM"],
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.crystalarc.net/en" },
    { "@type": "ListItem", position: 2, name: "Products", item: "https://www.crystalarc.net/en/products" },
    { "@type": "ListItem", position: 3, name: "Corporate Gifts", item: "https://www.crystalarc.net/en/products/corporate-gifts" },
  ],
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export default function CorporateGiftsPage() {
  const related = getRelatedProducts(["boxes", "trophies-awards", "home-decor"]);
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      {/* â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
          1 · HERO
      â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â• */}
      <section
        className="product-hero-split"
        style={{
          minHeight: "100vh",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          background: "var(--color-bg)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* top gold line */}
        <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "1px", background: "linear-gradient(to right, transparent, var(--color-gold), transparent)", opacity: 0.35, zIndex: 2 }} />

        {/* LEFT copy */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: "0 clamp(32px,5vw,80px)",
            paddingTop: "128px",
            paddingBottom: "80px",
            position: "relative",
            zIndex: 1,
          }}
        >
          <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "60%", background: "radial-gradient(ellipse at 30% 100%, rgba(201,149,74,0.06) 0%, transparent 70%)", pointerEvents: "none" }} />

          <Reveal immediate>
            <nav style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "10px", letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--color-taupe)", marginBottom: "36px" }}>
              <Link prefetch={false} href="/en/products" style={{ color: "var(--color-taupe)", textDecoration: "none" }}>Products</Link>
              <span style={{ color: "var(--color-muted)" }}>›</span>
              <span style={{ color: "var(--color-gold)" }}>Corporate Gifts</span>
            </nav>
          </Reveal>

          <Reveal delay={80} immediate>
            <div className="eyebrow" style={{ marginBottom: "20px" }}>
              Corporate Gifts &amp; Branded Marketing Products · Dubai, UAE
            </div>
          </Reveal>

          <h1
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(3.8rem, 7vw, 8.5rem)",
              fontWeight: 300,
              fontStyle: "italic",
              lineHeight: 0.9,
              color: "var(--color-ivory)",
              letterSpacing: "-0.025em",
              margin: "0 0 36px",
            }}
          >
            <SplitText text="Corporate Gifts" delay={140} stagger={0.08} duration={0.9} style={{ display: "block" }} />
            <SplitText text="in the UAE" delay={300} stagger={0.08} duration={0.9} style={{ display: "block" }} />
          </h1>

          <Reveal delay={200} immediate>
            <p style={{ fontSize: "15px", color: "var(--color-i60)", lineHeight: 1.9, maxWidth: "360px", marginBottom: "40px" }}>
              The professional gift, made properly: luxury corporate gifts and
              branded marketing products for procurement teams, agencies and HR
              departments across the UAE and the GCC. Crystal, metal and
              mixed-material pieces that people actually keep.
            </p>
          </Reveal>

          <Reveal delay={260} immediate>
            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", marginBottom: "52px" }}>
              <MagneticButton><a href="#enquiry" className="btn-red">Request a Proposal</a></MagneticButton>
              <MagneticButton><a href={waLink} className="btn-ghost" target="_blank" rel="noopener noreferrer">WhatsApp Us</a></MagneticButton>
            </div>
          </Reveal>

          <Reveal delay={320} immediate>
            <div style={{ display: "flex", gap: "24px", alignItems: "center" }}>
              <div style={{ width: "32px", height: "1px", background: "var(--color-gold)", opacity: 0.4 }} />
              <p style={{ fontSize: "11px", color: "var(--color-muted)", letterSpacing: "0.06em" }}>
                Emirates · DP World · Emaar · ADNOC
              </p>
            </div>
          </Reveal>
        </div>

        {/* RIGHT — showpiece */}
        <div className="hero-image-panel" style={{ position: "relative", background: "var(--color-s1)", borderLeft: "1px solid rgba(26,21,18,0.08)" }}>
          <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse at 50% 60%, rgba(201,149,74,0.09) 0%, transparent 60%)", pointerEvents: "none", zIndex: 0 }} />
          {/* Was a <model-viewer> pulling model-2.glb (3.4MB) plus a 249KB
              runtime, which blocked the main thread on desktop.
              See trophies-awards for why this is `cover` with a vh-based
              `sizes` — the panel's aspect ratio is the visitor's window. */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/cg-showpiece-v4-1400.webp"
            srcSet="/cg-showpiece-v4-700.webp 700w, /cg-showpiece-v4-1000.webp 1000w, /cg-showpiece-v4-1400.webp 1400w, /cg-showpiece-v4-1900.webp 1900w"
            sizes="(max-width: 960px) 100vw, 134vh"
            alt="A Crystal Arc corporate gift piece"
            width={1900}
            height={1419}
            fetchPriority="high"
            decoding="async"
            style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }}
          />
        </div>
      </section>

      <IndustriesStrip />


      {/* â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
          2 · WHAT WE GIFT — occasion grid
      â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â• */}
      <section style={{ background: "var(--color-bg)", borderTop: "1px solid rgba(26,21,18,0.08)" }}>

        <div className="con" style={{ paddingTop: "72px", paddingBottom: "40px" }}>
          <Reveal>
            <div className="sec-flex-between">
              <div>
                <div className="eyebrow" style={{ marginBottom: "14px" }}>What We Make</div>
                <h2
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "clamp(2.4rem,3.8vw,4rem)",
                    fontWeight: 300,
                    color: "var(--color-ivory)",
                    lineHeight: 1.05,
                  }}
                >
                  Five gift categories.
                  <em style={{ color: "var(--color-gold)", fontStyle: "italic", display: "block" }}>
                    One standard.
                  </em>
                </h2>
              </div>
              <p className="right-text" style={{ fontSize: "14px", color: "var(--color-taupe)", maxWidth: "280px", lineHeight: 1.8, textAlign: "right" }}>
                All designed, made, and finished in-house at our UAE facility.
              </p>
            </div>
          </Reveal>
        </div>

        {/* 5 equal occasion cards */}
        <div className="sec-5-grid" style={{ gap: "2px" }}>
          {OCCASIONS.map((c, i) => (
            <Reveal key={c.num} delay={i * 55}>
              <div className="cat-card-inner" style={{ position: "relative", overflow: "hidden", height: "100%" }}>
                <picture>
                  {mobileSrc(c.img) && <source media="(max-width: 640px)" srcSet={mobileSrc(c.img)} />}
                  { }
                  <img
                    src={c.img}
                    alt={c.title}
                    loading={i < 2 ? "eager" : "lazy"}
                    style={{
                      position: "absolute", inset: 0,
                      width: "100%", height: "100%",
                      objectFit: "cover", objectPosition: "center",
                      filter: "brightness(0.72) saturate(0.85)",
                      display: "block",
                      transition: "transform 0.7s ease, filter 0.4s",
                    }}
                  />
                </picture>
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(12,10,7,0.95) 0%, rgba(12,10,7,0.25) 38%, transparent 55%)" }} />

                <div style={{ position: "absolute", bottom: "24px", left: "22px", right: "22px" }}>
                  <div style={{ fontSize: "9px", letterSpacing: "0.22em", textTransform: "uppercase", color: "var(--color-gold)", fontWeight: 600, marginBottom: "10px", opacity: 0.75 }}>
                    {c.num}
                  </div>
                  <h3
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "clamp(1.1rem, 1.4vw, 1.45rem)",
                      fontWeight: 400,
                      color: "#EDE8DC",
                      lineHeight: 1.15,
                      marginBottom: "8px",
                    }}
                  >
                    {c.title}
                  </h3>
                  <div style={{ fontSize: "10px", letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--color-gold)", opacity: 0.6 }}>
                    {c.sub}
                  </div>
                </div>

                {/* Watermark number */}
                <div
                  style={{
                    position: "absolute",
                    top: "18px",
                    right: "20px",
                    fontFamily: "var(--font-display)",
                    fontSize: "3.5rem",
                    fontWeight: 300,
                    color: "var(--color-gold)",
                    opacity: 0.08,
                    lineHeight: 1,
                    userSelect: "none",
                  }}
                >
                  {c.num}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

      </section>

        {/* CTA under occasion cards */}
        <div className="con" style={{ paddingTop: "52px", paddingBottom: "80px", display: "flex", alignItems: "center", justifyContent: "center", gap: "20px", flexWrap: "wrap" }}>
          <a href="#enquiry" className="btn-red" style={{ textDecoration: "none" }}>Order Corporate Gifts</a>
          <a href={waLink} className="btn-ghost" target="_blank" rel="noopener noreferrer" style={{ fontSize: "10px" }}>Enquire on WhatsApp</a>
        </div>


      {/* â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
          3 · STATS
      â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â• */}
      <section style={{ position: "relative", overflow: "hidden" }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={IMG.banner} alt="" aria-hidden style={BG(IMG.banner, 0.14)} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg, rgba(12,10,7,0.6) 0%, rgba(12,10,7,0.3) 50%, rgba(12,10,7,0.6) 100%)" }} />
        <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse at 50% 50%, rgba(201,149,74,0.07) 0%, transparent 65%)" }} />

        <div className="stats-band" style={{ position: "relative", zIndex: 1 }}>
          <div className="con" style={{ display: "flex", alignItems: "stretch", justifyContent: "center", width: "100%" }}>
            {STATS.map((s, i) => (
              <Reveal key={s.num} delay={i * 80}>
                <div className="stat-item" style={{ borderRight: i < STATS.length - 1 ? "1px solid rgba(255,255,255,0.08)" : "none" }}>
                  <div className="stat-num"><AnimatedNumber value={s.num} /></div>
                  <div className="stat-label" style={{ whiteSpace: "pre-line" }}>{s.label}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>


      {/* â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
          4 · IMMERSIVE STATEMENT
      â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â• */}
      <section style={{ position: "relative", height: "34vh", minHeight: "260px", overflow: "hidden" }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={IMG.banner} alt="Crystal Arc corporate gift" style={{ ...BG(IMG.banner, 0.52), objectPosition: "center 40%" }}  loading="lazy" decoding="async"/>
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(12,10,7,0.88) 0%, rgba(12,10,7,0.55) 40%, rgba(12,10,7,0.65) 100%)" }} />

        <div
          className="con"
          style={{ position: "relative", zIndex: 1, height: "100%", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", textAlign: "center" }}
        >
          <Reveal>
            <div style={{ width: "32px", height: "1px", background: "var(--color-gold)", opacity: 0.5, margin: "0 auto 20px" }} />
          </Reveal>
          <Reveal delay={80}>
            <p
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(1.35rem, 2.2vw, 2.4rem)",
                fontStyle: "italic",
                fontWeight: 300,
                color: "#EDE8DC",
                lineHeight: 1.5,
                maxWidth: "560px",
              }}
            >
              &ldquo;The right gift doesn&apos;t get forgotten. It sits on
              their desk. It gets shown to guests. It works for your brand
              every day for years.&rdquo;
            </p>
          </Reveal>
          <Reveal delay={160}>
            <p style={{ marginTop: "16px", fontSize: "10px", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--color-gold)", opacity: 0.7 }}>
              Crystal Arc · UAE Manufacturing Facility
            </p>
          </Reveal>
        </div>
      </section>


      {/* â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
          5 · WHY CRYSTAL ARC — image split
      â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â• */}
      <section style={{ background: "var(--color-bg)" }}>
        <div className="sec-why-split" style={{ minHeight: "680px" }}>

          {/* Left — large image */}
          <div className="why-image-panel" style={{ position: "relative", overflow: "hidden" }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/cg-factory-grinding.webp" alt="Crystal Arc craftsperson at work, UAE facility" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", display: "block", filter: "brightness(0.55) saturate(0.8)" }}  loading="lazy" decoding="async"/>
            <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right, transparent 55%, rgba(237,232,220,0.97) 100%)" }} />
            <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse at 30% 70%, rgba(201,149,74,0.08) 0%, transparent 50%)" }} />

            <div
              style={{
                position: "absolute", bottom: "36px", left: "36px",
                background: "rgba(247,242,235,0.92)",
                backdropFilter: "blur(16px)",
                border: "1px solid rgba(201,149,74,0.3)",
                padding: "22px 28px",
              }}
            >
              <div style={{ fontFamily: "var(--font-display)", fontSize: "2.6rem", fontWeight: 300, color: "var(--color-gold)", lineHeight: 1, marginBottom: "6px" }}>200,000</div>
              <div style={{ fontSize: "9px", letterSpacing: "0.24em", textTransform: "uppercase", color: "var(--color-taupe)", fontWeight: 600 }}>Sq Ft · UAE Manufacturing Facility</div>
            </div>
          </div>

          {/* Right — 3 points */}
          <div
            className="why-text-panel"
            style={{
              background: "var(--color-s1)",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              padding: "80px clamp(40px,6vw,80px)",
              borderLeft: "1px solid rgba(26,21,18,0.08)",
            }}
          >
            <Reveal>
              <div className="eyebrow" style={{ marginBottom: "18px" }}>Why Crystal Arc</div>
              <h2
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(2.4rem,3.8vw,4rem)",
                  fontWeight: 300,
                  color: "var(--color-ivory)",
                  lineHeight: 1.1,
                  marginBottom: "52px",
                }}
              >
                Complete gift management, <em style={{ color: "var(--color-gold)", fontStyle: "italic", display: "block" }}>
                  brief to delivery.
                </em>
              </h2>
            </Reveal>

            {[
              {
                n: "01",
                t: "Per-Name Personalisation",
                b: "Every unit can carry a different name, designation, or message. Upload a spreadsheet. We handle sequencing, engraving, and per-unit packing.",
              },
              {
                n: "02",
                t: "Tiered Gifting Programmes",
                b: "Employee, manager, executive, board. We produce all four tiers from a single brief with consistent design language and escalating material quality.",
              },
              {
                n: "03",
                t: "Procurement-Team Ready",
                b: "NDAs, purchase order documentation, delivery scheduling, and per-unit packaging, all standard. No surprises for your procurement or admin team.",
              },
            ].map((d, i) => (
              <Reveal key={d.n} delay={i * 100}>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "36px 1fr",
                    gap: "20px",
                    paddingBottom: "28px",
                    marginBottom: "28px",
                    borderBottom: "1px solid rgba(26,21,18,0.10)",
                    alignItems: "start",
                  }}
                >
                  <span style={{ fontSize: "9px", letterSpacing: "0.18em", color: "var(--color-gold)", opacity: 0.55, fontWeight: 700, paddingTop: "4px" }}>{d.n}</span>
                  <div>
                    <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1.2rem", fontWeight: 400, color: "var(--color-ivory)", marginBottom: "9px", lineHeight: 1.2 }}>{d.t}</h3>
                    <p style={{ fontSize: "14px", color: "var(--color-taupe)", lineHeight: 1.8 }}>{d.b}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>



      {/* ── MATERIALS WE WORK WITH ── */}
      <section style={{ background: "var(--color-s1)", borderTop: "1px solid rgba(26,21,18,0.08)" }}>
        <div className="con mob-pad" style={{ paddingTop: "88px", paddingBottom: "72px" }}>

          {/* Header */}
          <div className="sec-mat-header">
            <Reveal>
              <div>
                <div className="eyebrow" style={{ marginBottom: "14px" }}>Materials We Work With</div>
                <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2.2rem,3.5vw,3.4rem)", fontWeight: 300, color: "var(--color-ivory)", lineHeight: 1.1 }}>
                  Every material.<br/><em style={{ color: "var(--color-gold)" }}>One roof.</em>
                </h2>
              </div>
            </Reveal>
            <Reveal delay={80}>
              <div>
                <p style={{ fontSize: "14px", color: "var(--color-taupe)", lineHeight: 1.85, marginBottom: "28px" }}>
                  We manufacture across crystal, metal, resin, wood, and combinations of all four, entirely in-house at our UAE facility. Tell us the occasion; we&apos;ll recommend the right material and finish.
                </p>
                <a href="#enquiry" className="btn-red" style={{ textDecoration: "none" }}>Get Material Advice</a>
              </div>
            </Reveal>
          </div>

          {/* 5-photo material strip */}
          <div className="sec-5-grid" style={{ gap: "3px" }}>
            {([
              { name: "Crystal", desc: "Optical clarity · 3D laser engraving", img: "/cg-mat-crystal.webp", badge: null },
              { name: "Metal", desc: "Brass · Steel · Zinc · Custom plating", img: "/cg-mat-metal.webp", badge: null },
              { name: "Resin", desc: "Full-colour casting · Unlimited form", img: "/cg-mat-resin.webp", badge: "Our Bestseller" },
              { name: "Wood", desc: "Natural oak · Walnut · Engraved", img: "/cg-mat-wood.webp", badge: null },
              { name: "Mixed & Hybrid", desc: "Combine any materials. We handle it all.",  img: "/cg-mat-mixed.webp", badge: null },
            ] as { name: string; desc: string; img: string; badge: string | null }[]).map((m, i) => (
              <Reveal key={m.name} delay={i * 55}>
                <div className="mat-card-inner" style={{ position: "relative", overflow: "hidden", aspectRatio: "3/4" }}>
                  <picture>
                    {mobileSrc(m.img) && <source media="(max-width: 640px)" srcSet={mobileSrc(m.img)} />}
                    { }
                    <img src={m.img} alt={m.name} loading="lazy" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", filter: "brightness(0.72) saturate(0.85)" }} />
                  </picture>
                  <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(12,10,7,0.95) 0%, rgba(12,10,7,0.15) 55%, transparent 80%)" }} />
                  {m.badge && (
                    <div style={{ position: "absolute", top: "16px", left: "16px", fontSize: "8px", letterSpacing: "0.22em", textTransform: "uppercase", color: "var(--color-gold)", fontWeight: 600, background: "rgba(12,10,7,0.55)", padding: "5px 10px", backdropFilter: "blur(4px)" }}>
                      {m.badge}
                    </div>
                  )}
                  <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "22px 18px" }}>
                    <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1.55rem", fontWeight: 300, color: "#EDE8DC", lineHeight: 1, marginBottom: "7px" }}>{m.name}</h3>
                    <p style={{ fontSize: "10px", letterSpacing: "0.08em", color: "rgba(237,232,220,0.55)", lineHeight: 1.5 }}>{m.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Footer line */}
          <Reveal>
            <div style={{ marginTop: "24px", display: "flex", alignItems: "center", gap: "14px" }}>
              <div style={{ width: "24px", height: "1px", background: "var(--color-gold)", opacity: 0.4, flexShrink: 0 }} />
              <p style={{ fontSize: "11px", color: "var(--color-muted)", letterSpacing: "0.06em" }}>
                All materials designed, manufactured and finished exclusively at our UAE facility. Zero outsourcing.
              </p>
            </div>
          </Reveal>

        </div>
      </section>



      <section style={{ background: "var(--color-bg)", borderTop: "1px solid rgba(26,21,18,0.09)" }}>

        <div className="con mob-pad" style={{ paddingTop: "100px", paddingBottom: "56px" }}>
          <Reveal>
            <div className="eyebrow" style={{ marginBottom: "16px" }}>How It Works</div>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(2.2rem,4vw,4.2rem)",
                fontWeight: 300,
                color: "var(--color-ivory)",
                lineHeight: 1.05,
              }}
            >
              Brief on Monday.
              <em style={{ color: "var(--color-gold)", fontStyle: "italic", display: "block" }}>
                Gifting-ready by Friday.
              </em>
            </h2>
          </Reveal>
        </div>

        {/* 4 equal photo cards */}
        <div className="sec-4-grid" style={{ gap: "2px" }}>
          {[
            {
              n: "01", t: "Brief Your Programme",
              b: "Occasion, quantity, budget band, recipient tiers, deadline, share via WhatsApp or the form. We come back in 2 hours with concept directions and reference pricing.",
              img: "/proc-cg-01.webp",
              p1: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2",
              p2: "",
            },
            {
              n: "02", t: "Design & Approve",
              b: "We produce 3D renders and a physical sample for runs of 50+. You approve the piece, the packaging, and the personalisation format, in writing, before a single unit is made.",
              img: "/proc-cg-02.webp",
              p1: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z",
              p2: "",
            },
            {
              n: "03", t: "Made & Personalised",
              b: "Design, production, laser engraving, packaging, all done in-house at our UAE facility. No third parties. Your per-name data file processed unit by unit, zero errors.",
              img: "/proc-cg-03.webp",
              p1: "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z",
              p2: "M15 12a3 3 0 11-6 0 3 3 0 016 0z",
            },
            {
              n: "04", t: "Delivered, Ready to Give",
              b: "Every gift individually packed, labelled, and ready for presentation, no assembly required. Tracked delivery across the UAE and GCC, with per-unit inspection before dispatch.",
              img: "/proc-cg-04.webp",
              p1: "M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z",
              p2: "M3.27 6.96L12 12.01l8.73-5.05M12 22.08V12",
            },
          ].map((p, i) => (
            <Reveal key={p.n} delay={i * 80}>
              <div
                className="proc-card-inner"
                style={{
                  position: "relative",
                  overflow: "hidden",
                  height: "100%",
                }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={p.img}
                  alt=""
                  aria-hidden
                  loading="lazy"
                  style={{
                    position: "absolute", inset: 0,
                    width: "100%", height: "100%",
                    objectFit: "cover", objectPosition: "center",
                    filter: "brightness(0.62) saturate(0.92)",
                    display: "block",
                  }}
                />
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(160deg, rgba(12,10,7,0.10) 0%, rgba(12,10,7,0.52) 45%, rgba(12,10,7,0.88) 100%)" }} />
                <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "2px", background: "linear-gradient(to right, var(--color-gold), transparent)", opacity: 0.45 }} />

                <div
                  style={{
                    position: "relative",
                    zIndex: 1,
                    padding: "44px 36px",
                    display: "flex",
                    flexDirection: "column",
                    height: "100%",
                  }}
                >
                  <div style={{ color: "var(--color-gold)", opacity: 0.8, marginBottom: "auto", paddingBottom: "28px" }}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="30" height="30">
                      <path strokeLinecap="round" strokeLinejoin="round" d={p.p1} />
                      {p.p2 && <path strokeLinecap="round" strokeLinejoin="round" d={p.p2} />}
                    </svg>
                  </div>

                  <div
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "3.5rem",
                      fontWeight: 300,
                      color: "var(--color-gold)",
                      opacity: 0.15,
                      lineHeight: 1,
                      marginBottom: "14px",
                      userSelect: "none",
                    }}
                  >
                    {p.n}
                  </div>

                  <h3
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "clamp(1.15rem, 1.3vw, 1.4rem)",
                      fontWeight: 400,
                      color: "#EDE8DC",
                      lineHeight: 1.2,
                      marginBottom: "16px",
                    }}
                  >
                    {p.t}
                  </h3>
                  <p style={{ fontSize: "13px", color: "rgba(237,232,220,0.62)", lineHeight: 1.8 }}>
                    {p.b}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

      </section>

        {/* CTA below process steps */}
        <div className="con" style={{ paddingBottom: "80px" }}>
          <Reveal>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "20px", flexWrap: "wrap" }}>
              <a href="#enquiry" className="btn-red" style={{ textDecoration: "none" }}>Request a Proposal</a>
              <a href={waLink} className="btn-ghost" target="_blank" rel="noopener noreferrer">Chat on WhatsApp</a>
            </div>
          </Reveal>
        </div>


      {/* â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
          7 · TRUSTED BY — animated ticker
      â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â• */}
      <section style={{ background: "var(--color-s1)", borderTop: "1px solid rgba(26,21,18,0.09)", borderBottom: "1px solid rgba(26,21,18,0.09)", overflow: "hidden", padding: "52px 0" }}>
        <Reveal>
          <div className="eyebrow" style={{ textAlign: "center", marginBottom: "36px" }}>
            Trusted by the Region&apos;s Most Recognised Names
          </div>
        </Reveal>
        <div style={{ position: "relative" }}>
          <div style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: "120px", background: "linear-gradient(to right, var(--color-s1), transparent)", zIndex: 2, pointerEvents: "none" }} />
          <div style={{ position: "absolute", right: 0, top: 0, bottom: 0, width: "120px", background: "linear-gradient(to left, var(--color-s1), transparent)", zIndex: 2, pointerEvents: "none" }} />
          <div className="logo-ticker-track" style={{ "--run": 6400 } as React.CSSProperties}>
            {[...LOGOS, ...LOGOS].map((logo, i) => (
              <div
                key={`${logo.alt}-${i}`}
                style={{
                  flexShrink: 0,
                  width: "200px",
                  height: "88px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "0 28px",
                }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={logo.src}
                  alt={logo.alt}
                  style={{
                    maxWidth: "130px",
                    maxHeight: "44px",
                    objectFit: "contain",
                    opacity: 0.48,
                    filter: "brightness(0)",
                    display: "block",
                    transition: "opacity 0.3s",
                  }}
                 loading="lazy" decoding="async"/>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
          8 · TESTIMONIALS
      â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â• */}
      <section style={{ background: "var(--color-s2)", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse at 50% 0%, rgba(201,149,74,0.06) 0%, transparent 55%)", pointerEvents: "none" }} />
        <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "1px", background: "linear-gradient(to right, transparent, rgba(201,149,74,0.35), transparent)" }} />

        <div className="con mob-pad" style={{ position: "relative", zIndex: 1, paddingTop: "72px", paddingBottom: "72px" }}>
          <Reveal>
            <div className="eyebrow" style={{ marginBottom: "40px" }}>What Our Clients Say</div>
          </Reveal>
          <Reveal delay={60}>
            <TestimonialRotator items={TESTIMONIALS} />
          </Reveal>
        </div>

        {/* Hall of Fame mini-reel */}
        <div style={{ position: "relative", zIndex: 2, borderTop: "1px solid rgba(26,21,18,0.10)", paddingTop: "56px", paddingBottom: "56px" }}>
          <div className="con" style={{ marginBottom: "28px" }}>
            <div className="eyebrow" style={{ fontSize: "10px", letterSpacing: "0.22em" }}>Hall of Fame &nbsp;&middot;&nbsp; Presented to the World&apos;s Finest</div>
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
        </div>
      </section>


      {/* â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
          9 · BROCHURE DOWNLOAD
      â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â• */}
      <section className="mob-pad" style={{ background: "var(--color-s1)", borderTop: "1px solid rgba(26,21,18,0.10)", padding: "100px 0" }}>
        <div className="con">
          <div className="sec-brochure-grid" style={{ gap: "80px", padding: "0" }}>

            {/* Col 1 — catalogue visual */}
            <div className="brochure-cover-col">
            <Reveal>
              <div style={{ position: "relative", paddingRight: "14px" }}>
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    transform: "rotate(4deg) translate(14px, 10px)",
                    border: "1px solid rgba(201,149,74,0.15)",
                    background: "var(--color-s2)",
                  }}
                />
                <div
                  style={{
                    position: "relative",
                    aspectRatio: "3/4",
                    border: "1px solid rgba(201,149,74,0.4)",
                    overflow: "hidden",
                  }}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={IMG.banner}
                    alt="Crystal Arc gifting lookbook cover"
                    style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", filter: "brightness(0.38) saturate(0.7)", display: "block" }}
                   loading="lazy" decoding="async"/>
                  <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(12,10,7,0.5) 0%, transparent 40%, rgba(12,10,7,0.7) 100%)" }} />
                  <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", justifyContent: "space-between", padding: "28px 24px" }}>
                    <div style={{ fontSize: "8px", letterSpacing: "0.35em", textTransform: "uppercase", color: "var(--color-gold)", fontWeight: 600 }}>
                      Crystal Arc
                    </div>
                    <div>
                      <div style={{ width: "100%", height: "1px", background: "var(--color-gold)", opacity: 0.4, marginBottom: "18px" }} />
                      <h3
                        style={{
                          fontFamily: "var(--font-display)",
                          fontSize: "1.6rem",
                          fontStyle: "italic",
                          fontWeight: 300,
                          color: "#EDE8DC",
                          lineHeight: 1.15,
                          marginBottom: "8px",
                        }}
                      >
                        Corporate<br />Gifting
                      </h3>
                      <div style={{ fontSize: "8px", letterSpacing: "0.22em", textTransform: "uppercase", color: "var(--color-taupe)" }}>
                        Gifting Lookbook · 2025
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
            </div>

            {/* Col 2 — copy */}
            <Reveal delay={80}>
              <div>
                <div className="eyebrow" style={{ marginBottom: "20px" }}>Gifting Lookbook</div>
                <h2
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "clamp(2.4rem,3.8vw,4rem)",
                    fontWeight: 300,
                    color: "var(--color-ivory)",
                    lineHeight: 1.05,
                    marginBottom: "24px",
                  }}
                >
                  Every gift we make,<br />
                  <em style={{ color: "var(--color-gold)", fontStyle: "italic" }}>in one place.</em>
                </h2>
                <p style={{ fontSize: "14px", color: "var(--color-taupe)", lineHeight: 1.85, marginBottom: "24px" }}>
                  Occasion categories, personalisation options, packaging
                  range, and reference pricing from 25 years of gifting programmes.
                </p>
                {["Occasion & gift category reference", "Personalisation & engraving options", "Packaging material guide", "Reference pricing by tier"].map((item) => (
                  <div
                    key={item}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "12px",
                      padding: "10px 0",
                      borderBottom: "1px solid rgba(26,21,18,0.09)",
                      fontSize: "13px",
                      color: "var(--color-i60)",
                    }}
                  >
                    <span style={{ width: "4px", height: "4px", borderRadius: "50%", background: "var(--color-gold)", flexShrink: 0, opacity: 0.7 }} />
                    {item}
                  </div>
                ))}
              </div>
            </Reveal>

            {/* Col 3 — form */}
            <Reveal from="right" delay={160}>
              <div style={{ background: "var(--color-s2)", border: "1px solid rgba(26,21,18,0.12)", padding: "44px 36px" }}>
                <p style={{ fontFamily: "var(--font-display)", fontSize: "1.1rem", fontStyle: "italic", color: "var(--color-ivory)", lineHeight: 1.6, marginBottom: "6px" }}>
                  Free to download.
                </p>
                <p style={{ fontSize: "12px", color: "var(--color-taupe)", lineHeight: 1.7, marginBottom: "28px" }}>
                  Enter your details and we&apos;ll send the PDF straight to your inbox.
                </p>
                <BrochureDownload />
              </div>
            </Reveal>

          </div>
        </div>
      </section>


      {/* â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
          11 · ENQUIRY
      â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â• */}
      <section
        id="enquiry"
        className="mob-pad"
        style={{ background: "#3D1010", padding: "110px 0", position: "relative", overflow: "hidden" }}
      >
        <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse at 50% 0%, rgba(201,149,74,0.08), transparent 55%)", pointerEvents: "none" }} />
        <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "1px", background: "linear-gradient(to right, transparent, rgba(201,149,74,0.35), transparent)" }} />

        <div className="con" style={{ position: "relative", zIndex: 1 }}>
          <div className="sec-enquiry-grid" style={{ gap: "96px" }}>

            <Reveal from="left">
              <div>
                <div className="eyebrow" style={{ marginBottom: "20px" }}>Start Your Gifting Programme</div>
                <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2.4rem,3.8vw,4rem)", fontWeight: 300, color: "#EDE8DC", lineHeight: 1.05, marginBottom: "24px" }}>
                  Tell us about<br />
                  <em style={{ color: "var(--color-gold)", fontStyle: "italic" }}>your gifts.</em>
                </h2>
                <p style={{ fontSize: "14px", color: "rgba(237,232,220,0.62)", lineHeight: 1.9, marginBottom: "44px", maxWidth: "340px" }}>
                  Share your occasion, quantity, and budget. We respond within
                  2 hours with concept directions, reference pricing, and a
                  production timeline, at no cost, no commitment.
                </p>
                {[
                  { label: "WhatsApp", val: "+971 56 536 4384", href: waLink },
                  { label: "Email", val: "info@crystalarc.net", href: "mailto:info@crystalarc.net" },
                ].map((c) => (
                  <div key={c.label} style={{ display: "grid", gridTemplateColumns: "72px 1fr", gap: "16px", padding: "14px 0", borderBottom: "1px solid rgba(237,232,220,0.1)", alignItems: "center" }}>
                    <span style={{ fontSize: "10px", letterSpacing: "0.18em", textTransform: "uppercase", color: "rgba(237,232,220,0.5)", fontWeight: 600 }}>{c.label}</span>
                    <a href={c.href} target={c.href.startsWith("http") ? "_blank" : undefined} rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined} style={{ fontSize: "15px", color: "#EDE8DC", textDecoration: "none" }}>{c.val}</a>
                  </div>
                ))}
              <div style={{ marginTop: "28px", border: "1px solid rgba(201,149,74,0.28)", background: "rgba(201,149,74,0.06)", padding: "20px 22px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "10px" }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--color-gold)" strokeWidth="2"><path d="M21 10c0 7-9 12-9 12s-9-5-9-12a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                  <span style={{ fontSize: "10px", letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--color-gold)", fontWeight: 600 }}>Head Office, Dubai</span>
                </div>
                <a href="https://maps.google.com/?q=Crystal+Arc+Dubai" target="_blank" rel="noopener noreferrer" style={{ fontSize: "14px", color: "#EDE8DC", textDecoration: "none", lineHeight: 1.7, display: "block" }}>
                  1901 Al Moosa Tower 1, Trade Center First<br />
                  Dubai, United Arab Emirates<br />
                  +971 4 347 9191
                </a>
              <p style={{ fontSize: "12px", color: "rgba(237,232,220,0.45)", marginTop: "10px", fontStyle: "italic" }}>Factory tours available on request.</p>
              </div>
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


      {/* ── FAQ ── */}
      <section className="mob-pad" style={{ background: "var(--color-bg)", padding: "100px 0", borderTop: "1px solid rgba(26,21,18,0.09)" }}>
        <div className="con">
          <div className="sec-faq-grid">
            <Reveal>
              <div className="faq-sticky-col" style={{ position: "sticky", top: "96px" }}>
                <div className="eyebrow" style={{ marginBottom: "16px" }}>Questions</div>
                <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2rem,2.8vw,2.8rem)", fontWeight: 300, color: "var(--color-ivory)", lineHeight: 1.15, marginBottom: "20px" }}>
                  Frequently Asked Questions
                </h2>
                <p style={{ fontSize: "13px", color: "var(--color-taupe)", lineHeight: 1.8, marginBottom: "24px" }}>
                  Can&apos;t find the answer? We reply on WhatsApp within minutes.
                </p>
                <a href={waLink} className="btn-ghost" target="_blank" rel="noopener noreferrer" style={{ fontSize: "10px", display: "inline-flex" }}>
                  Ask on WhatsApp
                </a>
              </div>
            </Reveal>
            <FAQAccordion faqs={FAQS} />
          </div>
        </div>
      </section>


      {/* EXPLORE OTHER CATEGORIES */}
      <section className="mob-pad" style={{ background: "var(--color-s1)", borderTop: "1px solid rgba(26,21,18,0.10)", padding: "88px 0" }}>
        <div className="con">
          <Reveal>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "52px" }}>
              <div>
                <div className="eyebrow" style={{ marginBottom: "12px" }}>Explore More</div>
                <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2rem,3vw,3rem)", fontWeight: 300, color: "var(--color-ivory)", lineHeight: 1.1 }}>
                  Other product categories
                </h2>
              </div>
              <Link prefetch={false} href="/en/products" style={{ fontSize: "10px", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--color-taupe)", textDecoration: "none" }}>
                View All →
              </Link>
            </div>
          </Reveal>
          <div className="related-products-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, minmax(0, 1fr))", gap: "2px" }}>
            {related.map((p, i) => (
              <Reveal key={p.slug} delay={i * 80}>
                <Link prefetch={false} href={`/en/products/${p.slug}`} style={{ display: "block", position: "relative", overflow: "hidden", textDecoration: "none", aspectRatio: "4/3" }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={p.categoryImage} alt={p.title} style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", filter: "brightness(0.8) saturate(0.95)" }}  loading="lazy" decoding="async"/>
                  <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(12,10,7,0.94) 0%, rgba(12,10,7,0.6) 34%, transparent 68%)" }} />
                  <div style={{ position: "absolute", bottom: "28px", left: "28px", right: "28px" }}>
                    <div style={{ fontSize: "9px", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--color-gold)", marginBottom: "10px", opacity: 0.75 }}>{p.category}</div>
                    <div style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.2rem, 1.8vw, 1.7rem)", fontWeight: 400, color: "#EDE8DC", lineHeight: 1.2, marginBottom: "14px" }}>{p.title}</div>
                    <span style={{ fontSize: "9px", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--color-gold)", opacity: 0.7 }}>View Category →</span>
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
