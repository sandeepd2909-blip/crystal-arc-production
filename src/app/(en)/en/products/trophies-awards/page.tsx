import type { Metadata } from "next";
import { alternatesFor } from "@/lib/i18n";
import { ogUrl } from "@/lib/og";
import { mobileSrc } from "@/lib/mobileImages";
import Link from "next/link";
import FAQAccordion from "@/components/products/FAQAccordion";
import EnquiryForm from "@/components/products/EnquiryForm";
import TestimonialRotator from "@/components/products/TestimonialRotator";
import BrochureDownload from "@/components/products/BrochureDownload";
import IndustriesStrip from "@/components/products/IndustriesStrip";
import Reveal from "@/components/Reveal";
import SplitText from "@/components/SplitText";
import AnimatedNumber from "@/components/AnimatedNumber";
import MagneticButton from "@/components/MagneticButton";
import { getRelatedProducts } from "@/lib/products";
import { HOF_PHOTOS } from "@/lib/hof-photos";

const CDN = "https://cdn.prod.website-files.com/638c4b4310a6ce72185b8247";

const IMG = {
  sports: "/trophy-collection.webp",
  metal: "/trophy-metal-mixed.webp",
  vvip: "/factory-1.webp",
  uae: "/trophy-main.webp"
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
{ src: "/logos/Ferrari-Owners-Club-UAE.webp", alt: "Ferrari Owners Club UAE" }];


const CATEGORIES = [
{
  num: "01",
  title: "Crystal Trophies",
  sub: "Optical K9 · 3D Laser Engraved",
  img: "/ta-cat-crystal.webp",
  objPos: "center 50%"
},
{
  num: "02",
  title: "Plaques & Recognition",
  sub: "Mounted · Framed · Custom",
  img: "/ta-cat-plaques.webp",
  objPos: "center 50%"
},
{
  num: "03",
  title: "Metal & Mixed Materials",
  sub: "Metal · Resin · Wood",
  img: "/ta-cat-metal-mixed.webp",
  objPos: "center 50%"
},
{
  num: "04",
  title: "Medals",
  sub: "Zinc · Crystal · Custom Ribbon",
  img: "/ta-cat-medals.webp",
  objPos: "center 50%"
},
{
  num: "05",
  title: "Sports & Championship",
  sub: "Cups · Shields · Podium Pieces",
  img: "/ta-cat-sports.webp",
  objPos: "center 50%"
}];


const STATS = [
{ num: "25+", label: "Years\nManufacturing" },
{ num: "15K+", label: "Trophies\nDelivered" },
{ num: "200K", label: "Sq Ft\nFacility" },
{ num: "6", label: "Production\nDivisions" },
{ num: "0%", label: "Work\nOutsourced" }];




const TESTIMONIALS = [
{
  quote: "Crystal Arc delivered the official trophies for our championship series on time, flawlessly. The craftsmanship exceeded anything we had seen from other manufacturers in the region.",
  name: "Events Director",
  co: "Sports Federation, UAE"
},
{
  quote: "For ministerial recognition awards, we needed someone who understood protocol and artistry equally. Crystal Arc handled every detail with complete discretion.",
  name: "Protocol Officer",
  co: "Government Ministry, Abu Dhabi"
},
{
  quote: "We have commissioned over 500 custom trophy pieces over three years. The consistency, the quality, and the reliability are unmatched.",
  name: "Head of Corporate Communications",
  co: "Multinational Corporation, Dubai"
}];


const FAQS = [
{
  q: "What is the minimum order quantity?",
  a: "There is no minimum. We regularly produce single VVIP presentation pieces. For production runs we can accommodate from 1 to 10,000+ units with no change in craftsmanship standard."
},
{
  q: "How quickly can we receive a completed order?",
  a: "Standard lead time is 5–15 working days depending on design complexity and quantity. We have completed urgent VVIP orders in as little as 6 hours. All timelines are confirmed in writing before production begins."
},
{
  q: "Can we get a prototype before the full production run?",
  a: "Yes, and for orders over 50 pieces we strongly recommend it. We produce pre-production prototypes to validate materials, proportions, and finishes at no additional lead-time cost."
},
{
  q: "Do you handle engraving, branding, and packaging?",
  a: "Everything is done in-house: engraving, laser etching, brand embossing, UV printing, and custom gift packaging, all produced at our UAE facility, nothing sent to third parties."
},
{
  q: "Do you ship outside the UAE?",
  a: "Yes. We ship across the GCC, Saudi Arabia, Qatar, Bahrain, Kuwait, Oman, and internationally. All shipments use secure packaging designed for finished trophy surfaces."
},
{
  q: "Do you work with government and national events?",
  a: "A significant portion of our work is for government ministries, national day ceremonies, and state-level sports events across the UAE, Saudi Arabia, and Qatar. We operate with full discretion."
},
{
  q: "Where is your Dubai showroom, and can I visit?",
  a: "Yes. The showroom is on Al Manara Road at Interchange 3, Al Quoz, Dubai, and you are welcome without an appointment during business hours, Monday to Saturday, 9am to 6pm. You can see finished trophies and awards in the hand, compare crystal against metal and resin, and talk a brief through with the team. Factory visits are arranged on request."
},
{
  q: "Do you have glass and crystal trophies I can look at near me in Dubai?",
  a: "The showroom holds finished work across every material we manufacture, optical crystal, glass, metal, resin and mixed pieces, so you can judge weight, clarity and engraving before commissioning anything. Everything on display was made in our own Dubai factory."
},
{
  q: "Can I have a trophy engraved the same week?",
  a: "Often, yes. Engraving is done in-house on laser and rotary machines, so short-notice work does not wait on a third party. Tell us the date you need and we will say plainly whether it is achievable."
}];


const waLink = `https://wa.me/971565364384?text=${encodeURIComponent(
  "Hi Crystal Arc, I'm interested in custom trophies and awards. Please share more details."
)}`;

export const metadata: Metadata = {
  title: "Custom Trophies & Awards Dubai",
  description:
  "Crystal awards, glass trophies and custom metal and resin sculpture, made in Dubai. Trophy engraving in-house. 25+ years, zero outsourcing, GCC-wide delivery.",
  keywords: [
  "custom trophies Dubai",
  "trophy manufacturer UAE",
  "bespoke awards Middle East",
  "sports trophies UAE",
  "crystal trophies manufacturer",
  "custom awards GCC",
  "trophy manufacturer Dubai",
  "metal trophies UAE"],

  openGraph: {
    url: "https://www.crystalarc.net/en/products/trophies-awards",
    title: "Custom Trophies & Awards Dubai | Crystal Arc",
    description: "Bespoke trophies and awards manufactured in Dubai, crystal, metal, resin, and fully custom sculptures. Trusted by sports federations, governments, and Fortune 500 companies across the GCC.",
    images: [{ url: ogUrl("/trophy-main.webp"), width: 1200, height: 630, alt: "Custom trophies and awards by Crystal Arc Dubai" }]
  },
  alternates: alternatesFor("en", "/products/trophies-awards")
};

/* ─── shared inline helpers ─── */
const BG = (_src: string, brightness = 0.18) =>
({
  position: "absolute",
  inset: 0,
  width: "100%",
  height: "100%",
  objectFit: "cover" as const,
  objectPosition: "center",
  filter: `brightness(${brightness}) saturate(0.85)`,
  display: "block"
}) as React.CSSProperties;

const productJsonLd = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "Custom Trophies & Awards",
  description: "Bespoke trophies and awards manufactured in Dubai, crystal, metal, resin, and fully custom sculptures.",
  brand: { "@type": "Brand", name: "Crystal Arc" },
  manufacturer: { "@type": "Organization", name: "Crystal Arc", url: "https://www.crystalarc.net" },
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_477380874-1789716259914.png",
  url: "https://www.crystalarc.net/en/products/trophies-awards",
  offers: {
    "@type": "Offer",
    priceCurrency: "AED",
    priceSpecification: { "@type": "PriceSpecification", priceCurrency: "AED", minPrice: "1" },
    availability: "https://schema.org/InStock",
    seller: { "@type": "Organization", name: "Crystal Arc" },
    areaServed: ["AE", "SA", "QA", "KW", "BH", "OM"]
  }
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
  { "@type": "ListItem", position: 1, name: "Home", item: "https://www.crystalarc.net/en" },
  { "@type": "ListItem", position: 2, name: "Products", item: "https://www.crystalarc.net/en/products" },
  { "@type": "ListItem", position: 3, name: "Trophies & Awards", item: "https://www.crystalarc.net/en/products/trophies-awards" }]

};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a }
  }))
};

/* ─── Page ─── */
export default function TrophiesAwardsPage() {
  const related = getRelatedProducts(["boxes", "corporate-gifts", "home-decor"]);
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      {/* ══════════════════════════════════════════════════
           1 · HERO
        ══════════════════════════════════════════════════ */}
      <section
        className="product-hero-split"
        style={{
          minHeight: "100vh",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          background: "var(--color-bg)",
          position: "relative",
          overflow: "hidden"
        }}>
        
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
            zIndex: 1
          }}>
          
          {/* subtle glow behind copy */}
          <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "60%", background: "radial-gradient(ellipse at 30% 100%, rgba(201,149,74,0.06) 0%, transparent 70%)", pointerEvents: "none" }} />

          <Reveal immediate>
            <nav style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "10px", letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--color-taupe)", marginBottom: "36px" }}>
              <Link prefetch={false} href="/en/products" style={{ color: "var(--color-taupe)", textDecoration: "none" }}>Products</Link>
              <span style={{ color: "var(--color-muted)" }}>›</span>
              <span style={{ color: "var(--color-gold)" }}>Trophies &amp; Awards</span>
            </nav>
          </Reveal>

          <Reveal delay={80} immediate>
            <div className="eyebrow" style={{ marginBottom: "20px" }}>
              Bespoke Trophy Maker &amp; Crystal Awards Manufacturer · Dubai, UAE
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
              margin: "0 0 36px"
            }}>
            
            <SplitText text="Custom Trophies" delay={140} stagger={0.08} duration={0.9} style={{ display: "block" }} />
            <SplitText text="& Awards" delay={300} stagger={0.08} duration={0.9} style={{ display: "block" }} />
          </h1>

          <Reveal delay={200} immediate>
            <p style={{ fontSize: "15px", color: "var(--color-i60)", lineHeight: 1.9, maxWidth: "360px", marginBottom: "40px" }}>
              Custom trophies and crystal awards in Dubai, for sports
              championships, recognition galas, national ceremonies and VVIP
              presentations. Cut, engraved and hand-finished in our own factory.
              Showroom in Al Quoz, delivery across the GCC.
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
                Emirates · Abu Dhabi Grand Prix · Museum of the Future
              </p>
            </div>
          </Reveal>
        </div>

        {/* RIGHT — showpiece */}
        <div className="hero-image-panel" style={{ position: "relative", background: "var(--color-s1)", borderLeft: "1px solid rgba(26,21,18,0.08)" }}>
          <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse at 50% 60%, rgba(201,149,74,0.09) 0%, transparent 60%)", pointerEvents: "none", zIndex: 0 }} />
          {/* Was a <model-viewer> pulling model-5.glb — 5.3MB and 258k triangles,
               which alone gave this page a 27s total blocking time on desktop.
                `cover`, not `contain`: this panel is half the viewport width by
               100vh, so its aspect ratio is whatever the visitor's window
               happens to be — 0.80 on a MacBook, 0.89 at 1920x1080, 1.19 on an
               ultrawide. No fixed image size fills all of those, and `contain`
               left empty bands at every size but one. The supplied render is
               landscape with the piece centred and plenty of backdrop, so
               cropping to fill is safe at any window shape.
                `sizes` is in vh because under `cover` the drawn width is set by
               the panel's *height* (100vh x the 1.339 image aspect), not its
               width. */

          }
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/ta-showpiece-v3-1400.webp"
            srcSet="/ta-showpiece-v3-700.webp 700w, /ta-showpiece-v3-1000.webp 1000w, /ta-showpiece-v3-1400.webp 1400w, /ta-showpiece-v3-1900.webp 1900w"
            sizes="(max-width: 960px) 100vw, 134vh"
            alt="A Crystal Arc bespoke trophy"
            width={1900}
            height={1419}
            fetchPriority="high"
            decoding="async"
            style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }} />
          
        </div>
      </section>

      <IndustriesStrip />


      {/* ══════════════════════════════════════════════════
           2 · WHAT WE MAKE — category grid
        ══════════════════════════════════════════════════ */}
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
                    lineHeight: 1.05
                  }}>
                  
                  Five trophy types.
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

        {/* 5 equal category cards */}
        <div className="sec-5-grid" style={{ gap: "2px" }}>
          {CATEGORIES.map((c, i) =>
          <Reveal key={c.num} delay={i * 55}>
              <div className="cat-card-inner" style={{ position: "relative", overflow: "hidden", height: "100%" }}>
                <picture>
                  {mobileSrc(c.img) && <source media="(max-width: 640px)" srcSet={mobileSrc(c.img)} />}
                  {}
                  <img
                  src={c.img}
                  alt={c.title}
                  loading={i < 2 ? "eager" : "lazy"}
                  style={{
                    position: "absolute", inset: 0,
                    width: "100%", height: "100%",
                    objectFit: "cover", objectPosition: c.objPos ?? "center",
                    filter: "brightness(0.72) saturate(0.85)",
                    display: "block",
                    transition: "transform 0.7s ease, filter 0.4s"
                  }} />
                
                </picture>
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(12,10,7,0.95) 0%, rgba(12,10,7,0.25) 38%, transparent 55%)" }} />

                {/* Category info */}
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
                    marginBottom: "8px"
                  }}>
                  
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
                  fontSize: "3rem",
                  fontWeight: 300,
                  color: "var(--color-gold)",
                  opacity: 0.1,
                  lineHeight: 1,
                  userSelect: "none"
                }}>
                
                  {c.num}
                </div>
              </div>
            </Reveal>
          )}
        </div>

        {/* CTA under category cards */}
        <div className="con" style={{ paddingTop: "52px", paddingBottom: "80px", display: "flex", alignItems: "center", gap: "20px", flexWrap: "wrap" }}>
          <a href="#enquiry" className="btn-red" style={{ textDecoration: "none" }}>Order Custom Trophies</a>
          <a href={waLink} className="btn-ghost" target="_blank" rel="noopener noreferrer" style={{ fontSize: "10px" }}>Enquire on WhatsApp</a>
        </div>
      </section>


      {/* ══════════════════════════════════════════════════
           3 · STATS — background image
        ══════════════════════════════════════════════════ */}
      <section style={{ position: "relative", overflow: "hidden" }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/trophy-collection.webp" alt="" aria-hidden style={BG("/trophy-collection.webp", 0.18)} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg, rgba(12,10,7,0.6) 0%, rgba(12,10,7,0.3) 50%, rgba(12,10,7,0.6) 100%)" }} />
        <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse at 50% 50%, rgba(140,104,32,0.07) 0%, transparent 65%)" }} />

        <div className="stats-band" style={{ position: "relative", zIndex: 1 }}>
          <div className="con" style={{ display: "flex", alignItems: "stretch", justifyContent: "center", width: "100%" }}>
            {STATS.map((s, i) =>
            <Reveal key={s.num} delay={i * 80}>
                <div className="stat-item" style={{ borderRight: i < STATS.length - 1 ? "1px solid rgba(255,255,255,0.08)" : "none" }}>
                  <div className="stat-num"><AnimatedNumber value={s.num} /></div>
                  <div className="stat-label" style={{ whiteSpace: "pre-line" }}>{s.label}</div>
                </div>
              </Reveal>
            )}
          </div>
        </div>
      </section>


      {/* ══════════════════════════════════════════════════
           4 · IMMERSIVE STATEMENT — full-bleed
        ══════════════════════════════════════════════════ */}
      <section style={{ position: "relative", padding: "clamp(72px, 9vh, 116px) 0", overflow: "hidden" }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/trophy-collection.webp" alt="Crystal Arc trophies" style={{ ...BG("/trophy-collection.webp", 0.52), objectPosition: "center 40%" }} loading="lazy" decoding="async" />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(12,10,7,0.88) 0%, rgba(12,10,7,0.55) 40%, rgba(12,10,7,0.65) 100%)" }} />

        <div
          className="con"
          style={{ position: "relative", zIndex: 1, display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", textAlign: "center" }}>
          
          <Reveal>
            <div style={{ width: "32px", height: "1px", background: "var(--color-gold)", opacity: 0.5, margin: "0 auto 24px" }} />
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
                maxWidth: "560px"
              }}>
              
                &ldquo;Every trophy is engineered for the moment it represents.
                Built to be carried, photographed, and displayed for decades.&rdquo;
            </p>
          </Reveal>
          <Reveal delay={160}>
            <p style={{ marginTop: "20px", fontSize: "10px", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--color-gold)", opacity: 0.7 }}>
              Crystal Arc · UAE Manufacturing Facility
            </p>
          </Reveal>
        </div>
      </section>


      {/* ══════════════════════════════════════════════════
           5 · WHY CRYSTAL ARC — image split
        ══════════════════════════════════════════════════ */}
      <section style={{ background: "var(--color-bg)" }}>
        <div className="sec-why-split" style={{ minHeight: "680px" }}>

          {/* Left — large image */}
          <div className="why-image-panel" style={{ position: "relative", overflow: "hidden" }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/factory.jpg" alt="Crystal Arc manufacturing facility, Dubai" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "22% 50%", display: "block", filter: "brightness(0.55) saturate(0.8)" }} loading="lazy" decoding="async" />
            <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right, transparent 55%, rgba(237,232,220,0.97) 100%)" }} />
            <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse at 30% 70%, rgba(201,149,74,0.08) 0%, transparent 50%)" }} />

            {/* floating stat */}
            <div
              style={{
                position: "absolute", bottom: "36px", left: "36px",
                background: "rgba(247,242,235,0.92)",
                backdropFilter: "blur(16px)",
                border: "1px solid rgba(140,104,32,0.3)",
                padding: "22px 28px"
              }}>
              
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
              borderLeft: "1px solid rgba(26,21,18,0.08)"
            }}>
            
            <Reveal>
              <div className="eyebrow" style={{ marginBottom: "18px" }}>Why Crystal Arc</div>
              <h2
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(2.4rem,3.8vw,4rem)",
                  fontWeight: 300,
                  color: "var(--color-ivory)",
                  lineHeight: 1.1,
                  marginBottom: "52px"
                }}>
                
                The only manufacturer
                <em style={{ color: "var(--color-gold)", fontStyle: "italic", display: "block" }}>
                  that does everything in-house.
                </em>
              </h2>

            </Reveal>

            {[
            {
              n: "01",
              t: "Fully In-House Production",
              b: "Our 200,000 sq ft UAE facility handles design, prototyping, casting, engraving, and finishing under one roof, no quality gaps, no supplier delays."
            },
            {
              n: "02",
              t: "Designed for Your Brief",
              b: "We work from your vision, not from a catalogue. Every trophy is designed specifically for your event, your brand, and your recipient."
            },
            {
              n: "03",
              t: "Reliable, Confirmed Timelines",
              b: "Standard orders complete in 5–15 working days. Urgent requirements are assessed case by case. Every timeline is confirmed in writing before production begins, no surprises later."
            }].
            map((d, i) =>
            <Reveal key={d.n} delay={i * 100}>
                <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "36px 1fr",
                  gap: "20px",
                  paddingBottom: "28px",
                  marginBottom: "28px",
                  borderBottom: "1px solid rgba(26,21,18,0.10)",
                  alignItems: "start"
                }}>
                
                  <span style={{ fontSize: "9px", letterSpacing: "0.18em", color: "var(--color-gold)", opacity: 0.55, fontWeight: 700, paddingTop: "4px" }}>{d.n}</span>
                  <div>
                    <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1.2rem", fontWeight: 400, color: "var(--color-ivory)", marginBottom: "9px", lineHeight: 1.2 }}>{d.t}</h3>
                    <p style={{ fontSize: "14px", color: "var(--color-taupe)", lineHeight: 1.8 }}>{d.b}</p>
                  </div>
                </div>
              </Reveal>
            )}
          </div>
        </div>
      </section>


      {/* ══════════════════════════════════════════════════
           5b · MATERIALS WE WORK WITH
        ══════════════════════════════════════════════════ */}
      <section style={{ background: "var(--color-s1)", borderTop: "1px solid rgba(26,21,18,0.08)" }}>
        <div className="con mob-pad" style={{ paddingTop: "88px", paddingBottom: "72px" }}>

          {/* Header */}
          <div className="sec-mat-header">
            <Reveal>
              <div>
                <div className="eyebrow" style={{ marginBottom: "14px" }}>Materials We Work With</div>
                <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2.2rem,3.5vw,3.4rem)", fontWeight: 300, color: "var(--color-ivory)", lineHeight: 1.1 }}>
                  Every material.<br /><em style={{ color: "var(--color-gold)" }}>One roof.</em>
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
            { name: "Crystal", desc: "Optical clarity · 3D laser engraving", img: "/trophy-crystal.webp", badge: null },
            { name: "Metal", desc: "Brass · Steel · Zinc · Custom plating", img: "/trophy-metal-mixed.webp", badge: null },
            { name: "Resin", desc: "Full-colour casting · Unlimited form", img: "/trophy-main.webp", badge: "Our Bestseller" },
            { name: "Wood", desc: "Natural oak · Walnut · Engraved", img: "/ta-mat-wood.webp", badge: null },
            { name: "Mixed & Hybrid", desc: "Any combination · Fully custom", img: "/ta-mat-mixed-hybrid.webp", badge: null }] as
            {name: string;desc: string;img: string;badge: string | null;}[]).map((m, i) =>
            <Reveal key={m.name} delay={i * 55}>
                <div className="mat-card-inner" style={{ position: "relative", overflow: "hidden", aspectRatio: "3/4" }}>
                  <picture>
                    {mobileSrc(m.img) && <source media="(max-width: 640px)" srcSet={mobileSrc(m.img)} />}
                    {}
                    <img src={m.img} alt={m.name} loading="lazy" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", filter: "brightness(0.72) saturate(0.85)" }} />
                  </picture>
                  <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(12,10,7,0.95) 0%, rgba(12,10,7,0.15) 55%, transparent 80%)" }} />
                  {m.badge &&
                <div style={{ position: "absolute", top: "16px", left: "16px", fontSize: "8px", letterSpacing: "0.22em", textTransform: "uppercase", color: "var(--color-gold)", fontWeight: 600, background: "rgba(12,10,7,0.55)", padding: "5px 10px", backdropFilter: "blur(4px)" }}>
                      {m.badge}
                    </div>
                }
                  <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "22px 18px" }}>
                    <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1.55rem", fontWeight: 300, color: "#EDE8DC", lineHeight: 1, marginBottom: "7px" }}>{m.name}</h3>
                    <p style={{ fontSize: "10px", letterSpacing: "0.08em", color: "rgba(237,232,220,0.55)", lineHeight: 1.5 }}>{m.desc}</p>
                  </div>
                </div>
              </Reveal>
            )}
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


      {/* ══════════════════════════════════════════════════
           6 · PROCESS — photo cards with icons
        ══════════════════════════════════════════════════ */}
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
                lineHeight: 1.05
              }}>
              
              Brief on Monday.
              <em style={{ color: "var(--color-gold)", fontStyle: "italic", display: "block" }}>
                Sealed case on Friday.
              </em>
            </h2>
          </Reveal>
        </div>

        {/* 4 equal photo cards */}
        <div className="sec-4-grid" style={{ gap: "2px" }}>
          {[
          {
            n: "01", t: "Tell Us What You Need",
            b: "WhatsApp, fill the form, or call. Occasion, quantity, deadline. We come back in 2 hours with concept directions and 3D renders. Completely free.",
            img: "/proc-tro-01.webp",
            p1: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",
            p2: ""
          },
          {
            n: "02", t: "Approve Before We Build",
            b: "You pick a direction, we refine. For 50+ pieces we produce a physical sample first, hold it, feel it, sign it off. Not a render. The actual thing.",
            img: "/proc-tro-02.webp",
            p1: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z",
            p2: ""
          },
          {
            n: "03", t: "We Make Everything",
            b: "Casting, engraving, plating, finishing, packaging, all done in-house at our UAE facility. No third parties. No hand-offs. No excuses.",
            img: "/proc-tro-03.webp",
            p1: "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z",
            p2: "M15 12a3 3 0 11-6 0 3 3 0 016 0z"
          },
          {
            n: "04", t: "Packed & Tracked to You",
            b: "Every piece individually inspected before it leaves. Packed for trophy surfaces, not dumped in a box, and tracked door-to-door across the GCC.",
            img: "/proc-tro-04.webp",
            p1: "M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z",
            p2: "M3.27 6.96L12 12.01l8.73-5.05M12 22.08V12"
          }].
          map((p, i) =>
          <Reveal key={p.n} delay={i * 80}>
              <div
              className="proc-card-inner"
              style={{
                position: "relative",
                overflow: "hidden",
                height: "100%"
              }}>
              
                {/* Background photo */}
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
                  display: "block"
                }} />
              
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(160deg, rgba(12,10,7,0.10) 0%, rgba(12,10,7,0.52) 45%, rgba(12,10,7,0.88) 100%)" }} />
                {/* Gold top accent line */}
                <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "2px", background: "linear-gradient(to right, var(--color-gold), transparent)", opacity: 0.45 }} />

                {/* Content */}
                <div
                style={{
                  position: "relative",
                  zIndex: 1,
                  padding: "44px 36px",
                  display: "flex",
                  flexDirection: "column",
                  height: "100%"
                }}>
                
                  {/* Icon */}
                  <div style={{ color: "var(--color-gold)", opacity: 0.8, marginBottom: "auto", paddingBottom: "28px" }}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="30" height="30">
                      <path strokeLinecap="round" strokeLinejoin="round" d={p.p1} />
                      {p.p2 && <path strokeLinecap="round" strokeLinejoin="round" d={p.p2} />}
                    </svg>
                  </div>

                  {/* Ghost number */}
                  <div
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "3.5rem",
                    fontWeight: 300,
                    color: "var(--color-gold)",
                    opacity: 0.15,
                    lineHeight: 1,
                    marginBottom: "14px",
                    userSelect: "none"
                  }}>
                  
                    {p.n}
                  </div>

                  <h3
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "clamp(1.15rem, 1.3vw, 1.4rem)",
                    fontWeight: 400,
                    color: "#EDE8DC",
                    lineHeight: 1.2,
                    marginBottom: "16px"
                  }}>
                  
                    {p.t}
                  </h3>
                  <p style={{ fontSize: "13px", color: "rgba(237,232,220,0.62)", lineHeight: 1.8 }}>
                    {p.b}
                  </p>
                </div>
              </div>
            </Reveal>
          )}
        </div>

        {/* CTA strip below process steps */}
        <div className="con" style={{ paddingBottom: "80px" }}>
          <Reveal>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "20px", flexWrap: "wrap" }}>
              <a href="#enquiry" className="btn-red" style={{ textDecoration: "none" }}>Request a Proposal</a>
              <a href={waLink} className="btn-ghost" target="_blank" rel="noopener noreferrer">Chat on WhatsApp</a>
            </div>
          </Reveal>
        </div>
      </section>


      {/* ══════════════════════════════════════════════════
           7 · TRUSTED BY
        ══════════════════════════════════════════════════ */}
      {/* ══════════════════════════════════════════════════
           7 · TRUSTED BY — animated ticker
        ══════════════════════════════════════════════════ */}
      <section style={{ background: "var(--color-s1)", borderTop: "1px solid rgba(26,21,18,0.09)", borderBottom: "1px solid rgba(26,21,18,0.09)", overflow: "hidden", padding: "52px 0" }}>
        <Reveal>
          <div className="eyebrow" style={{ textAlign: "center", marginBottom: "36px" }}>
            Trusted by the Region&apos;s Most Recognised Names
          </div>
        </Reveal>
        {/* Ticker track — logos duplicated for seamless loop */}
        <div style={{ position: "relative" }}>
          {/* fade edges */}
          <div style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: "120px", background: "linear-gradient(to right, var(--color-s1), transparent)", zIndex: 2, pointerEvents: "none" }} />
          <div style={{ position: "absolute", right: 0, top: 0, bottom: 0, width: "120px", background: "linear-gradient(to left, var(--color-s1), transparent)", zIndex: 2, pointerEvents: "none" }} />
          <div className="logo-ticker-track" style={{ "--run": 6400 } as React.CSSProperties}>
            {[...LOGOS, ...LOGOS].map((logo, i) =>
            <div
              key={`${logo.alt}-${i}`}
              style={{
                flexShrink: 0,
                width: "200px",
                height: "88px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "0 28px"
              }}>
              
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
                  transition: "opacity 0.3s"
                }}
                loading="lazy" decoding="async" />
              </div>
            )}
          </div>
        </div>
      </section>


      {/* ══════════════════════════════════════════════════
           8 · TESTIMONIALS — full-bleed, no cards
        ══════════════════════════════════════════════════ */}
      <section style={{ background: "var(--color-s2)", position: "relative", overflow: "hidden" }}>
        {/* subtle radial glow */}
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
              {[...HOF_PHOTOS, ...HOF_PHOTOS].map((p, i) =>
              <div key={i} className="hof-mini-tile">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={p.src} alt={p.label} loading="lazy" decoding="async" />
                  <div className="hof-mini-caption">
                    <div style={{ fontSize: "9px", letterSpacing: "0.16em", textTransform: "uppercase", color: "rgba(255,255,255,0.85)", fontWeight: 600 }}>{p.label}</div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>


      {/* ══════════════════════════════════════════════════
           9 · BROCHURE DOWNLOAD — with catalogue visual
        ══════════════════════════════════════════════════ */}
      <section style={{ background: "var(--color-s2)", borderTop: "1px solid rgba(201,149,74,0.12)", borderBottom: "1px solid rgba(201,149,74,0.12)", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse at 85% 50%, rgba(201,149,74,0.06) 0%, transparent 55%)", pointerEvents: "none" }} />
        <div className="con" style={{ position: "relative", zIndex: 1 }}>
          <div className="sec-brochure-grid" style={{ gap: "64px", padding: "96px 0" }}>

            {/* Col 1 — catalogue cover mockup */}
            <div className="brochure-cover-col">
            <Reveal from="left">
              <div style={{ position: "relative" }}>
                {/* Shadow card behind */}
                <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      transform: "rotate(4deg) translate(14px, 10px)",
                      border: "1px solid rgba(201,149,74,0.15)",
                      background: "var(--color-s3)"
                    }} />
                  
                {/* Main catalogue card */}
                <div
                    style={{
                      position: "relative",
                      aspectRatio: "3/4",
                      border: "1px solid rgba(201,149,74,0.4)",
                      overflow: "hidden"
                    }}>
                    
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                      src="/hp-cat-trophies-v2.webp"
                      alt="Crystal Arc catalogue cover"
                      style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", filter: "brightness(0.38) saturate(0.7)", display: "block" }}
                      loading="lazy" decoding="async" />
                  {/* gradient overlay */}
                  <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(12,10,7,0.5) 0%, transparent 40%, rgba(12,10,7,0.7) 100%)" }} />
                  {/* cover text */}
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
                            marginBottom: "8px"
                          }}>
                          
                        Trophies &amp;<br />Awards
                      </h3>
                      <div style={{ fontSize: "8px", letterSpacing: "0.22em", textTransform: "uppercase", color: "var(--color-taupe)" }}>
                        Product Catalogue · 2025
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
                <div className="eyebrow" style={{ marginBottom: "20px" }}>Product Catalogue</div>
                <h2
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "clamp(2.4rem,3.8vw,4rem)",
                    fontWeight: 300,
                    color: "var(--color-ivory)",
                    lineHeight: 1.05,
                    marginBottom: "24px"
                  }}>
                  
                  Everything we make,<br />
                  <em style={{ color: "var(--color-gold)", fontStyle: "italic" }}>in one place.</em>
                </h2>
                <p style={{ fontSize: "14px", color: "var(--color-taupe)", lineHeight: 1.85, marginBottom: "24px" }}>
                  Materials, finishes, dimensions, and reference photography
                  from 25 years of commissioned work, sent over on request.
                </p>
                {["Trophy types across all materials", "Finish & engraving options", "Sizing reference guide", "Previous client work samples"].map((item) =>
                <div
                  key={item}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "12px",
                    padding: "10px 0",
                    borderBottom: "1px solid rgba(26,21,18,0.09)",
                    fontSize: "13px",
                    color: "var(--color-i60)"
                  }}>
                  
                    <span style={{ width: "4px", height: "4px", borderRadius: "50%", background: "var(--color-gold)", flexShrink: 0, opacity: 0.7 }} />
                    {item}
                  </div>
                )}
              </div>
            </Reveal>

            {/* Col 3 — form */}
            <Reveal from="right" delay={160}>
              <div style={{ background: "var(--color-s1)", border: "1px solid rgba(26,21,18,0.12)", padding: "44px 36px" }}>
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


      {/* ══════════════════════════════════════════════════
           10 · FAQ
        ══════════════════════════════════════════════════ */}
      {/* ══════════════════════════════════════════════════
           11 · ENQUIRY — final CTA with background
        ══════════════════════════════════════════════════ */}
      <section
        id="enquiry"
        className="mob-pad"
        style={{ background: "#3D1010", padding: "110px 0", position: "relative", overflow: "hidden" }}>
        
        <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse at 50% 0%, rgba(201,149,74,0.08), transparent 55%)", pointerEvents: "none" }} />
        <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "1px", background: "linear-gradient(to right, transparent, rgba(201,149,74,0.35), transparent)" }} />

        <div className="con" style={{ position: "relative", zIndex: 1 }}>
          <div className="sec-enquiry-grid" style={{ gap: "96px" }}>

            <Reveal from="left">
              <div>
                <div className="eyebrow" style={{ marginBottom: "20px" }}>Start Your Project</div>
                <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2.4rem,3.8vw,4rem)", fontWeight: 300, color: "#EDE8DC", lineHeight: 1.05, marginBottom: "24px" }}>
                  Tell us about<br />
                  <em style={{ color: "var(--color-gold)", fontStyle: "italic" }}>your trophy.</em>
                </h2>
                <p style={{ fontSize: "14px", color: "rgba(237,232,220,0.62)", lineHeight: 1.9, marginBottom: "44px", maxWidth: "340px" }}>
                  Share your brief. We respond within 2 hours with a proposal,
                  3D concept renders, and a production timeline, at no cost,
                  no commitment.
                </p>
                {[
                { label: "WhatsApp", val: "+971 56 536 4384", href: waLink },
                { label: "Email", val: "info@crystalarc.net", href: "mailto:info@crystalarc.net" }].
                map((c) =>
                <div key={c.label} style={{ display: "grid", gridTemplateColumns: "72px 1fr", gap: "16px", padding: "14px 0", borderBottom: "1px solid rgba(237,232,220,0.1)", alignItems: "center" }}>
                    <span style={{ fontSize: "10px", letterSpacing: "0.18em", textTransform: "uppercase", color: "rgba(237,232,220,0.5)", fontWeight: 600 }}>{c.label}</span>
                    <a href={c.href} target={c.href.startsWith("http") ? "_blank" : undefined} rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined} style={{ fontSize: "15px", color: "#EDE8DC", textDecoration: "none" }}>{c.val}</a>
                  </div>
                )}
              <div style={{ marginTop: "28px", border: "1px solid rgba(201,149,74,0.28)", background: "rgba(201,149,74,0.06)", padding: "20px 22px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "10px" }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--color-gold)" strokeWidth="2"><path d="M21 10c0 7-9 12-9 12s-9-5-9-12a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg>
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
            {related.map((p, i) =>
            <Reveal key={p.slug} delay={i * 80}>
                <Link prefetch={false} href={`/en/products/${p.slug}`} style={{ display: "block", position: "relative", overflow: "hidden", textDecoration: "none", aspectRatio: "4/3" }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={p.categoryImage} alt={p.title} style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", filter: "brightness(0.8) saturate(0.95)" }} loading="lazy" decoding="async" />
                  <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(12,10,7,0.94) 0%, rgba(12,10,7,0.6) 34%, transparent 68%)" }} />
                  <div style={{ position: "absolute", bottom: "28px", left: "28px", right: "28px" }}>
                    <div style={{ fontSize: "9px", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--color-gold)", marginBottom: "10px", opacity: 0.75 }}>{p.category}</div>
                    <div style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.2rem, 1.8vw, 1.7rem)", fontWeight: 400, color: "#EDE8DC", lineHeight: 1.2, marginBottom: "14px" }}>{p.title}</div>
                    <span style={{ fontSize: "9px", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--color-gold)", opacity: 0.7 }}>View Category →</span>
                  </div>
                </Link>
              </Reveal>
            )}
          </div>
        </div>
      </section>

    </>);

}