import type { Metadata } from "next";
import { ogUrl } from "@/lib/og";
import { alternatesFor } from "@/lib/i18n";
import Reveal from "@/components/Reveal";
import GlbScene from "@/components/GlbScene";
import BrochureDownload from "@/components/products/BrochureDownload";
import EnquiryForm from "@/components/products/EnquiryForm";
import FAQAccordion from "@/components/products/FAQAccordion";

export const metadata: Metadata = {
  title: "Home & Décor, Lost-Wax Crystal, Dubai",
  description:
  "Sculpture and vessels in lost-wax crystal, made by hand at our UAE facility. Twenty-five days in the kiln, numbered and signed. Price on request.",
  keywords: [
  "lost wax crystal Dubai",
  "pate de verre sculpture UAE",
  "handmade crystal vase Dubai",
  "luxury glass sculpture Middle East",
  "crystal arc home collection",
  "commission crystal sculpture"],

  openGraph: {
    url: "https://www.crystalarc.net/en/products/home-decor",
    title: "Home & Décor | Crystal Arc",
    description:
    "Lost-wax crystal sculpture and vessels, made entirely by hand in Dubai. Each piece numbered and signed.",
    images: [{ url: ogUrl("/hd-hero.webp"), width: 1200, height: 630 }]
  },
  alternates: alternatesFor("en", "/products/home-decor")
};

const waLink = `https://wa.me/971565364384?text=${encodeURIComponent(
  "Hi Crystal Arc, I'd like to enquire about a piece from the Home & Décor collection."
)}`;

/* Coloured lost-wax sculpture */
const SCULPTURE = [
{ src: "/hd-s01.webp", alt: "Crystal sculpture of a face resting on cupped hands, in violet and amber" },
{ src: "/hd-s02.webp", alt: "Abstract crystal sculpture of flowing drapery in violet and rose" },
{ src: "/hd-s03.webp", alt: "Reclining lioness sculpted in amber crystal" },
{ src: "/hd-s04.webp", alt: "Leaping animal sculpture in green and amber crystal" },
{ src: "/hd-s05.webp", alt: "Amber crystal disc sculpture on a polished base" },
{ src: "/hd-s06.webp", alt: "Crystal landscape scene with deer, cast as a single tableau" }];


/* Vessels — coloured, then clear and frosted relief */
const VESSELS = [
{ src: "/hd-v01.webp", alt: "Green crystal vase with sculpted leaf surface and a lotus bloom" },
{ src: "/hd-v02.webp", alt: "Crystal vase with sculpted tulips in deep plum and amber" },
{ src: "/hd-v03.webp", alt: "Crystal vase with sculpted tulips in soft rose and green" },
{ src: "/hd-v04.webp", alt: "Crystal vase with a violet mosaic surface" },
{ src: "/hd-v05.webp", alt: "Small crystal vessel in blue and amber" },
{ src: "/hd-v06.webp", alt: "Clear crystal vase with frosted relief detail" },
{ src: "/hd-v07.webp", alt: "Clear crystal vase with sculpted frosted surface" },
{ src: "/hd-v08.webp", alt: "Clear crystal vase with frosted botanical relief" },
{ src: "/hd-v09.webp", alt: "Clear crystal vase with dense frosted relief" },
{ src: "/hd-v10.webp", alt: "Clear crystal vase with frosted relief on a marble console" },
{ src: "/hd-v11.webp", alt: "Clear crystal vase with sculpted frosted panels" }];


const STEPS = [
{
  num: "01",
  label: "The Mould",
  img: "/hd-process-1.webp",
  alt: "Molten crystal being worked into a mould under the press",
  text:
  "The form is modelled in wax, then encased. When the mould is fired the wax runs out and is gone. This is where lost wax takes its name. What remains is a hollow in the exact shape of the piece, and it exists only once."
},
{
  num: "02",
  label: "The Fire",
  img: "/hd-process-3.webp",
  alt: "The mouth of the furnace, glowing at working temperature",
  text:
  "Crystal is packed into the mould and the kiln is closed. Over twenty-five days it climbs, holds, and then cools, slowly enough that the piece does not fracture. Colour is not applied afterwards. It fuses into the crystal in the fire."
},
{
  num: "03",
  label: "The Hand",
  img: "/hd-process-2.webp",
  alt: "A craftsman finishing a crystal piece by flame at the bench",
  text:
  "The mould is broken away to release the piece, and cannot be used again. What comes out is raw. Every surface after that is ground, polished and finished by hand, by people who have spent years learning to judge it by eye."
}];


const FACTS = [
{ num: "25", sup: " days", label: "In the kiln\nfiring and cooling" },
{ num: "45", sup: " days", label: "From order\nto finished piece" },
{ num: "100", sup: "%", label: "Made in-house\nUAE facility" },
{ num: "1", sup: " of 1", label: "Every mould\nused once" }];


const FAQS = [
{
  q: "What is lost wax, and why does it take so long?",
  a: "The form is modelled in wax and encased in a mould. Firing the mould melts the wax away, leaving a cavity in the exact shape of the piece. Crystal is packed in, and the kiln then runs for around twenty-five days, climbing to temperature, holding, and cooling slowly. The cooling is the part that cannot be rushed: bring crystal down too quickly and it cracks. From order to finished piece is about forty-five days."
},
{
  q: "Is each piece really unique?",
  a: "Yes, by necessity. The mould has to be broken to get the piece out, so it can never be used again. Pieces are made in limited runs, and each one is numbered and signed."
},
{
  q: "How is the colour achieved?",
  a: "It is fused into the crystal during firing, not painted or coated on afterwards. That is why the colour sits inside the material and shifts with the light rather than sitting on the surface."
},
{
  q: "What does a piece cost?",
  a: "Price is on request. Size, complexity and colour all change the working time considerably, so we quote per piece rather than publish a list. Tell us which piece interests you and we will come back with a figure."
},
{
  q: "Can I commission something of my own?",
  a: "Yes. Private clients commission one-of-a-kind pieces and site-specific work, designed around a brief. The process is the same as for our own collection, the difference is that the form starts with you."
},
{
  q: "Do you work with interior designers and retailers?",
  a: "Yes. Retail and interior design partners carry the collection with wholesale terms and fulfilment from Dubai worldwide. Get in touch for the wholesale catalogue."
},
{
  q: "How are pieces packed and shipped?",
  a: "Each piece is hand-inspected, then packed in custom-fitted foam and crating built for its exact shape before it leaves the building. We ship across the GCC and internationally, with fragile-goods handling on every shipment."
}];



/* This page rendered its FAQs to readers but declared none of them — no
   FAQPage, no Product, no BreadcrumbList — while the other three product
   pages carried all three. */
const productJsonLd = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "Crystal Home & Décor",
  description: "Lost-wax crystal sculpture, vases and decorative objects, made by hand in Dubai.",
  brand: { "@type": "Brand", name: "Crystal Arc" },
  manufacturer: { "@type": "Organization", name: "Crystal Arc", url: "https://www.crystalarc.net" },
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_4c5afcede-1789716259851.png",
  url: "https://www.crystalarc.net/en/products/home-decor",
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
  { "@type": "ListItem", position: 3, name: "Home & Décor", item: "https://www.crystalarc.net/en/products/home-decor" }]

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
export default function HomeDecorPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      {/* ══════════════════════════════════════════════
           Hero
        ══════════════════════════════════════════════ */}
      <section className="hd-hero">
        {}
        {/* The banner is 100vw x 78vh below 560px, so its shape is the phone
             window — 0.62 on a Pixel, 0.75 on an iPhone 12. The desktop file is
             2000x917 landscape, which `cover` reduced to a 572-690px centre slice
             stretched up to 2.5x. The -m render is portrait for that frame. */}
        <picture>
          <source media="(max-width: 560px)" srcSet="/hd-hero-m.webp" />
          <img className="hd-hero-img" src="/hd-hero.webp" srcSet="/hd-hero-800.webp 800w, /hd-hero.webp 1600w" sizes="100vw" fetchPriority="high" alt="Crystal Arc home décor pieces arranged on a stone console in daylight" />
        </picture>
        <div className="hd-hero-scrim" />
        <div className="con" style={{ position: "relative", zIndex: 2, paddingBottom: "clamp(56px, 8vw, 110px)", paddingTop: "160px" }}>
          <div className="eyebrow" style={{ marginBottom: "22px", color: "#D8B65E" }}>Home &amp; Décor</div>
          <h1
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2.8rem, 5.6vw, 6rem)",
              fontWeight: 300,
              color: "#F7F2EB",
              lineHeight: 1.03,
              letterSpacing: "-0.01em",
              marginBottom: "26px",
              maxWidth: "16ch"
            }}>
            
            Objects of light,<br />
            <em style={{ fontStyle: "italic", color: "#E4C57A" }}>made entirely by hand.</em>
          </h1>
          <p style={{ fontSize: "clamp(14px, 1.35vw, 16.5px)", color: "rgba(247,242,235,0.82)", lineHeight: 1.85, maxWidth: "540px" }}>
            Sculpture and vessels in lost-wax crystal, cast, fired and finished entirely at our own UAE facility.
          </p>
        </div>
      </section>


      {/* ══════════════════════════════════════════════
           Opening statement
        ══════════════════════════════════════════════ */}
      <section className="mob-pad" style={{ background: "var(--color-bg)", padding: "clamp(80px, 10vw, 140px) 0" }}>
        <div className="con">
          <div className="hd-intro">
            <Reveal>
              <div>
                <div className="eyebrow" style={{ marginBottom: "22px" }}>The Collection</div>
                <h2
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "clamp(2rem, 3.4vw, 3.5rem)",
                    fontWeight: 300,
                    color: "var(--color-ivory)",
                    lineHeight: 1.12,
                    letterSpacing: "-0.01em"
                  }}>
                  
                  A method old enough<br />to have no shortcuts.
                </h2>
              </div>
            </Reveal>
            <Reveal delay={120}>
              <div>
                <p style={{ fontSize: "clamp(14.5px, 1.25vw, 16px)", color: "var(--color-i60)", lineHeight: 2.0, marginBottom: "26px" }}>
                  Lost wax is the way these pieces have always been made. A form is modelled, encased, and fired until the wax is gone and the crystal has taken its place. The kiln runs for twenty-five days. The mould is then broken to free the piece, and every surface is brought to finish by hand.
                </p>
                <p style={{ fontSize: "clamp(14.5px, 1.25vw, 16px)", color: "var(--color-i60)", lineHeight: 2.0, marginBottom: "26px" }}>
                  We own the whole of it, design, moulds, kilns, grinding, polishing, inspection, under one roof at our UAE facility. Nothing in this collection is finished by anyone else.
                </p>
                <div className="gold-line" style={{ margin: "30px 0" }} />
                <p style={{ fontSize: "13px", color: "var(--color-taupe)", lineHeight: 1.9, fontStyle: "italic" }}>
                  Pieces are made in limited runs, numbered and signed. Price on request.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>


      {/* ══════════════════════════════════════════════
           Sculpture — feature + grid
        ══════════════════════════════════════════════ */}
      <section className="hd-split" style={{ background: "var(--color-s1)", borderTop: "1px solid rgba(26,21,18,0.08)" }}>
        <div className="hd-split-img">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/hd-feature-equine.webp" alt="Horse's head sculpted in amber crystal, caught in daylight" loading="lazy" />
        </div>
        <Reveal from="right">
          <div className="hd-split-copy">
            <div className="eyebrow" style={{ marginBottom: "20px" }}>Sculpture</div>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(1.9rem, 3vw, 3.1rem)",
                fontWeight: 300,
                fontStyle: "italic",
                color: "var(--color-ivory)",
                lineHeight: 1.14,
                marginBottom: "24px"
              }}>
              
              Colour that lives<br />inside the crystal.
            </h2>
            <p style={{ fontSize: "15px", color: "var(--color-i60)", lineHeight: 2.0, maxWidth: "480px" }}>
              Because the colour is fused in the fire rather than laid on afterwards, it sits within the body of the piece. Move around one of these and it changes, amber deepening to rust, green pulling towards gold, as the light finds a different path through it.
            </p>
          </div>
        </Reveal>
      </section>

      <section className="mob-pad" style={{ background: "var(--color-bg)", padding: "clamp(64px, 8vw, 110px) 0" }}>
        <div className="con">
          <div className="hd-grid">
            {SCULPTURE.map((p, i) =>
            <Reveal key={p.src} delay={i % 3 * 90}>
                <figure className="hd-card">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={p.src} alt={p.alt} loading="lazy" />
                </figure>
              </Reveal>
            )}
          </div>
        </div>
      </section>


      {/* ══════════════════════════════════════════════
           Vessels — feature + grid
        ══════════════════════════════════════════════ */}
      <section className="hd-split hd-split--rev" style={{ background: "var(--color-s1)", borderTop: "1px solid rgba(26,21,18,0.08)" }}>
        <div className="hd-split-img">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/hd-feature-leaf.webp" alt="Green crystal vase with a sculpted leaf surface" loading="lazy" />
        </div>
        <Reveal from="left">
          <div className="hd-split-copy">
            <div className="eyebrow" style={{ marginBottom: "20px" }}>Vessels</div>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(1.9rem, 3vw, 3.1rem)",
                fontWeight: 300,
                fontStyle: "italic",
                color: "var(--color-ivory)",
                lineHeight: 1.14,
                marginBottom: "24px"
              }}>
              
              Vases carrying<br />their own relief.
            </h2>
            <p style={{ fontSize: "15px", color: "var(--color-i60)", lineHeight: 2.0, maxWidth: "480px" }}>
              Leaves, blooms and horses are not cut into the surface after the fact. They are part of the form the crystal was cast into. Some are left clear and frosted so the relief reads as shadow; others carry colour through the whole wall of the vessel.
            </p>
          </div>
        </Reveal>
      </section>

      <section className="mob-pad" style={{ background: "var(--color-bg)", padding: "clamp(64px, 8vw, 110px) 0" }}>
        <div className="con">
          <div className="hd-grid">
            {VESSELS.map((p, i) =>
            <Reveal key={p.src} delay={i % 3 * 90}>
                <figure className="hd-card">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={p.src} alt={p.alt} loading="lazy" />
                </figure>
              </Reveal>
            )}
          </div>
        </div>
      </section>


      {/* ══════════════════════════════════════════════
           Savoir-faire — the three steps
        ══════════════════════════════════════════════ */}
      <section className="mob-pad" style={{ background: "var(--color-s1)", padding: "clamp(84px, 10vw, 140px) 0", borderTop: "1px solid rgba(26,21,18,0.08)" }}>
        <div className="con">
          <Reveal>
            <div style={{ maxWidth: "620px", marginBottom: "clamp(48px, 6vw, 84px)" }}>
              <div className="eyebrow" style={{ marginBottom: "20px" }}>Savoir-faire</div>
              <h2
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(2rem, 3.4vw, 3.4rem)",
                  fontWeight: 300,
                  color: "var(--color-ivory)",
                  lineHeight: 1.12,
                  marginBottom: "22px"
                }}>
                
                Three stages.<br />None of them quick.
              </h2>
              <p style={{ fontSize: "15px", color: "var(--color-i60)", lineHeight: 2.0 }}>
                The sequence has not changed in a very long time, and there is no version of it that runs faster.
              </p>
            </div>
          </Reveal>

          <div className="hd-steps">
            {STEPS.map((s, i) =>
            <Reveal key={s.num} delay={i * 110}>
                <div>
                  <div className="hd-step-img">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={s.img} alt={s.alt} loading="lazy" />
                  </div>
                  <div style={{ display: "flex", alignItems: "baseline", gap: "14px", marginBottom: "14px" }}>
                    <span style={{ fontFamily: "var(--font-display)", fontSize: "1.5rem", fontWeight: 300, color: "var(--color-gold)" }}>{s.num}</span>
                    <span style={{ fontSize: "10px", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--color-ivory)", fontWeight: 600 }}>{s.label}</span>
                  </div>
                  <p style={{ fontSize: "14px", color: "var(--color-i60)", lineHeight: 1.95 }}>{s.text}</p>
                </div>
              </Reveal>
            )}
          </div>
        </div>
      </section>


      {/* ══════════════════════════════════════════════
           The hand behind the work
           Deliberately NOT a named testimonial: no craftsman has given us words
           to quote, so this is the house voice set beside a photograph of the
           floor, rather than an invented person with an invented tenure.
        ══════════════════════════════════════════════ */}
      <section className="hd-split" style={{ background: "var(--color-s1)", borderTop: "1px solid rgba(26,21,18,0.08)" }}>
        <div className="hd-split-img">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/hd-craftsman.webp" alt="A Crystal Arc craftsman finishing a piece at the grinding wheel" loading="lazy" />
        </div>
        <Reveal from="right">
          <div className="hd-split-copy">
            <div className="eyebrow" style={{ marginBottom: "24px" }}>The hand</div>
            <blockquote
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(1.6rem, 2.6vw, 2.6rem)",
                fontWeight: 300,
                fontStyle: "italic",
                color: "var(--color-ivory)",
                lineHeight: 1.32,
                margin: 0,
                marginBottom: "28px",
                maxWidth: "16ch"
              }}>
              
              The kiln decides when a piece is finished. Never the calendar.
            </blockquote>
            <div className="gold-line" style={{ margin: "0 0 26px" }} />
            <p style={{ fontSize: "14.5px", color: "var(--color-i60)", lineHeight: 2.0, maxWidth: "460px" }}>
              Judging when crystal has cooled enough to touch, where a surface still needs grinding, whether a piece leaves the building at all, none of it is measured by instrument. It is decided by people who have spent years learning to read it, and who make that call on every piece we ship.
            </p>
          </div>
        </Reveal>
      </section>


      {/* ══════════════════════════════════════════════
           Facts
           The tinted band stays the outer full-width block, with .con nested
           inside it — wrapping the band itself in .con would shrink the colour
           to 1280px and expose the section background at the edges.
        ══════════════════════════════════════════════ */}
      <section style={{ background: "var(--color-bg)", padding: "clamp(64px, 8vw, 104px) 0", borderTop: "1px solid rgba(26,21,18,0.08)" }}>
        <div className="con">
          <Reveal>
            <div className="hd-facts">
              {FACTS.map((f) =>
              <div key={f.label} className="hd-fact">
                  <div className="hd-fact-num">
                    {f.num}<span style={{ fontSize: "0.42em", letterSpacing: "0.02em" }}>{f.sup}</span>
                  </div>
                  <div style={{ marginTop: "14px", fontSize: "10px", letterSpacing: "0.17em", textTransform: "uppercase", color: "var(--color-taupe)", lineHeight: 1.9, whiteSpace: "pre-line" }}>
                    {f.label}
                  </div>
                </div>
              )}
            </div>
          </Reveal>
        </div>
      </section>


      {/* ══════════════════════════════════════════════
           Examine a piece — 3D
        ══════════════════════════════════════════════ */}
      <section className="hd-split" style={{ background: "var(--color-s1)", borderTop: "1px solid rgba(26,21,18,0.08)" }}>
        <Reveal from="left">
          <div className="hd-split-copy">
            <div className="eyebrow" style={{ marginBottom: "20px" }}>In the round</div>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(1.9rem, 3vw, 3.1rem)",
                fontWeight: 300,
                fontStyle: "italic",
                color: "var(--color-ivory)",
                lineHeight: 1.14,
                marginBottom: "24px"
              }}>
              
              Turn one over<br />before you decide.
            </h2>
            <p style={{ fontSize: "15px", color: "var(--color-i60)", lineHeight: 2.0, maxWidth: "460px", marginBottom: "34px" }}>
              These pieces are difficult to judge from a single photograph, the whole point of them is what happens as they move against the light. Drag to rotate.
            </p>
            <a href={waLink} target="_blank" rel="noopener noreferrer" className="btn-ghost" style={{ alignSelf: "flex-start", textDecoration: "none" }}>
              Enquire about a piece
            </a>
          </div>
        </Reveal>
        <div style={{ position: "relative", background: "var(--color-bg)", borderLeft: "1px solid rgba(26,21,18,0.08)", minHeight: "520px" }}>
          <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse at 50% 50%, rgba(140,104,32,0.09) 0%, transparent 65%)", pointerEvents: "none", zIndex: 0 }} />
          <GlbScene
            src="/model-1.glb"
            alt="Crystal Arc home décor piece, rotatable 3D model"
            rotationSpeed="4deg/s"
            style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }} />
          
          <div style={{ position: "absolute", bottom: "26px", left: "50%", transform: "translateX(-50%)", fontSize: "8px", letterSpacing: "0.24em", textTransform: "uppercase", color: "rgba(26,21,18,0.4)", whiteSpace: "nowrap", zIndex: 2 }}>
            Drag to rotate
          </div>
        </div>
      </section>


      {/* ══════════════════════════════════════════════
           Brochure
        ══════════════════════════════════════════════ */}
      <section className="mob-pad brochure-section" style={{ background: "var(--color-bg)", padding: "clamp(72px, 9vw, 120px) 0", borderTop: "1px solid rgba(26,21,18,0.08)" }}>
        <div className="con">
          <div className="sec-brochure-grid" style={{ gap: "56px" }}>

            <Reveal from="left">
              <div>
                <div className="eyebrow" style={{ marginBottom: "20px" }}>Catalogue</div>
                <h2
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "clamp(1.9rem, 2.8vw, 2.9rem)",
                    fontWeight: 300,
                    color: "var(--color-ivory)",
                    lineHeight: 1.1,
                    marginBottom: "22px"
                  }}>
                  
                  The collection,<br />
                  <em style={{ color: "var(--color-gold)", fontStyle: "italic" }}>in full.</em>
                </h2>
                <p style={{ fontSize: "14px", color: "var(--color-taupe)", lineHeight: 1.85 }}>
                  Every piece in the Home &amp; Décor collection, with dimensions, colourways and edition sizes.
                </p>
              </div>
            </Reveal>

            <Reveal delay={100}>
              <div>
                {["Full collection with dimensions", "Colourways and edition sizes", "Commission process", "Retail and wholesale terms"].map((item) =>
                <div
                  key={item}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "12px",
                    padding: "11px 0",
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


      {/* ══════════════════════════════════════════════
           Enquiry
        ══════════════════════════════════════════════ */}
      <section className="mob-pad" style={{ background: "var(--color-s1)", padding: "clamp(80px, 10vw, 120px) 0", borderTop: "1px solid rgba(26,21,18,0.08)" }}>
        <div className="con">
          <div className="sec-enquiry-grid" style={{ gap: "80px" }}>

            <Reveal from="left">
              <div>
                <div className="eyebrow" style={{ marginBottom: "24px" }}>Enquiries</div>
                <h2
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "clamp(2.2rem, 3.6vw, 3.7rem)",
                    fontWeight: 300,
                    color: "var(--color-ivory)",
                    lineHeight: 1.1,
                    marginBottom: "18px"
                  }}>
                  
                  Commission a piece.<br />
                  <em style={{ color: "var(--color-gold)" }}>Or carry the collection.</em>
                </h2>
                <p style={{ fontSize: "14px", color: "var(--color-i60)", lineHeight: 1.9, marginBottom: "36px" }}>
                  Private clients commission one-of-a-kind pieces and site-specific work. Retail and interior design partners carry the collection with wholesale terms and fulfilment from Dubai worldwide. Price is quoted per piece.
                </p>
                {[
                { label: "WhatsApp", val: "+971 56 536 4384", href: waLink },
                { label: "Email", val: "info@crystalarc.net", href: "mailto:info@crystalarc.net" }].
                map((c) =>
                <div
                  key={c.label}
                  style={{
                    display: "grid",
                    gridTemplateColumns: "80px 1fr",
                    gap: "16px",
                    padding: "14px 0",
                    borderBottom: "1px solid rgba(26,21,18,0.12)",
                    alignItems: "center"
                  }}>
                  
                    <span style={{ fontSize: "9px", letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--color-taupe)", fontWeight: 600 }}>{c.label}</span>
                    <a
                    href={c.href}
                    target={c.href.startsWith("http") ? "_blank" : undefined}
                    rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    style={{ fontSize: "15px", color: "var(--color-ivory)", textDecoration: "none" }}>
                    
                      {c.val}
                    </a>
                  </div>
                )}
                <div style={{ marginTop: "28px", border: "1px solid rgba(140,104,32,0.28)", background: "rgba(140,104,32,0.06)", padding: "20px 22px" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "10px" }}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--color-gold)" strokeWidth="2"><path d="M21 10c0 7-9 12-9 12s-9-5-9-12a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg>
                    <span style={{ fontSize: "10px", letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--color-gold)", fontWeight: 600 }}>Head Office, Dubai</span>
                  </div>
                  <a href="https://maps.google.com/?q=Crystal+Arc+Dubai" target="_blank" rel="noopener noreferrer" style={{ fontSize: "14px", color: "var(--color-ivory)", textDecoration: "none", lineHeight: 1.7, display: "block" }}>
                    1901 Al Moosa Tower 1, Trade Center First<br />
                    Dubai, United Arab Emirates<br />
                    +971 4 347 9191
                  </a>
                  <p style={{ fontSize: "12px", color: "var(--color-taupe)", marginTop: "10px", fontStyle: "italic" }}>Factory tours available on request.</p>
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


      {/* ══════════════════════════════════════════════
           FAQ
        ══════════════════════════════════════════════ */}
      <section className="mob-pad" style={{ background: "var(--color-bg)", padding: "clamp(72px, 9vw, 100px) 0", borderTop: "1px solid rgba(26,21,18,0.09)" }}>
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

    </>);

}