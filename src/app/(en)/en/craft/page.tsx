import type { Metadata } from "next";
import { alternatesFor } from "@/lib/i18n";
import { ogUrl } from "@/lib/og";
import Reveal from "@/components/Reveal";
import EnquiryForm from "@/components/products/EnquiryForm";

const CDN = "https://cdn.prod.website-files.com/638c4b4310a6ce72185b8247";

const waLink = `https://wa.me/971565364384?text=${encodeURIComponent(
  "Hi Crystal Arc, I'd like to discuss a commission. Please share more details."
)}`;

export const metadata: Metadata = {
  title: "Trophy Manufacturer Dubai · Inside the Factory",
  description:
    "A trophy manufacturer in Dubai with a 200,000 sq ft facility: 250 craftspeople, factory-direct, zero outsourcing, and the standard behind every piece.",
  keywords: [
    "crystal arc manufacturing",
    "trophy manufacturing Dubai",
    "handcraft awards UAE",
    "luxury award production",
    "UAE manufacturing facility",
    "bespoke trophy making",
    "how trophies are made UAE",
    "award manufacturing process Dubai",
  ],
  openGraph: {
    url: "https://www.crystalarc.net/en/craft",
    title: "How We Make | Crystal Arc · Dubai Manufacturing Facility",
    description: "Inside Crystal Arc's 200,000 sq ft UAE manufacturing facility. 250 craftspeople. Zero outsourcing. The people, the machines, and the standard behind every piece.",
    images: [{ url: ogUrl("/factory-3.webp"), width: 1200, height: 630, alt: "Crystal Arc manufacturing facility Dubai" }],
  },
  alternates: alternatesFor("en", "/craft"),
};

export default function CraftPage() {
  return (
    <>

      {/* â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
          1 · HERO -- Made by hand
      â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â• */}
      <section
        style={{
          position: "relative",
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/factory-3.webp" srcSet="/factory-3-800.webp 800w, /factory-3.webp 1600w" sizes="100vw" fetchPriority="high"
          alt="Crystal Arc manufacturing facility, Dubai"
          style={{
            position: "absolute", inset: 0,
            width: "100%", height: "100%",
            objectFit: "cover", objectPosition: "center 35%",
            filter: "brightness(0.4) saturate(0.9)",
            display: "block",
          }}
        />
        {/* Kept heaviest at the foot of the frame: the stat strip sits there and is
            the lowest-contrast element on the hero. */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              // Soft pool behind the centred headline: the gold line lands over the
              // furnace flame, which is the one place gold-on-image loses contrast.
              "radial-gradient(ellipse 58% 62% at 50% 46%, rgba(12,10,7,0.52) 0%, rgba(12,10,7,0.26) 58%, rgba(12,10,7,0) 100%), " +
              "linear-gradient(to bottom, rgba(12,10,7,0.5) 0%, rgba(12,10,7,0.36) 50%, rgba(12,10,7,0.82) 100%)",
          }}
        />
        <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "1px", background: "linear-gradient(to right, transparent, rgba(201,149,74,0.5), transparent)" }} />

        <div
          style={{
            position: "relative",
            zIndex: 1,
            textAlign: "center",
            padding: "140px clamp(24px, 8vw, 160px) 120px",
            maxWidth: "1000px",
            margin: "0 auto",
          }}
        >
          <Reveal>
            <div className="eyebrow" style={{ marginBottom: "44px" }}>Crystal Arc &nbsp;&middot;&nbsp; Dubai, UAE &nbsp;&middot;&nbsp; Est. 2000</div>
          </Reveal>

          <h1
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(3.2rem, 7vw, 8rem)",
              fontWeight: 300,
              color: "#EDE8DC",
              lineHeight: 1.06,
              marginBottom: "32px",
            }}
          >
            Made by hand.<br />
            <em style={{ color: "var(--color-gold)" }}>Built to last a lifetime.</em>
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
              Inside a 200,000 sq ft UAE facility, 250 craftspeople
              make the objects the world&apos;s most important moments deserve.
            </p>
          </Reveal>

          {/* Stat strip */}
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
                { n: "200,000", l: "sq ft facility" },
                { n: "250",     l: "craftspeople" },
                { n: "25",      l: "years of craft" },
                { n: "0%",      l: "outsourced" },
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


      {/* â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
          2 · OPENING STATEMENT -- Editorial declaration
      â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â• */}
      <section style={{ background: "var(--color-bg)", padding: "120px 0" }}>
        <div
          style={{
            maxWidth: "840px",
            margin: "0 auto",
            padding: "0 clamp(24px, 6vw, 80px)",
            textAlign: "center",
          }}
        >
          <Reveal>
            <div className="eyebrow" style={{ marginBottom: "48px" }}>The Standard</div>
          </Reveal>
          <Reveal delay={80}>
            <p
              style={{
                fontSize: "clamp(1.8rem, 3.2vw, 3.2rem)",
                fontFamily: "var(--font-display)",
                fontWeight: 300,
                color: "var(--color-ivory)",
                lineHeight: 1.2,
                marginBottom: "36px",
              }}
            >
              200,000 sq ft. 250 craftspeople.<br />
              <em style={{ color: "var(--color-gold)" }}>One standard, since 2000.</em>
            </p>
          </Reveal>
          <Reveal delay={140}>
            <p style={{ fontSize: "15px", color: "var(--color-taupe)", lineHeight: 1.85, maxWidth: "580px", margin: "0 auto 44px" }}>
              Every Crystal Arc piece is designed, tooled, engraved, finished, inspected and packaged
              inside our UAE facility. By the same team. Under the same roof.
              That&apos;s not a selling point. It&apos;s just how we work.
            </p>
          </Reveal>
          <Reveal delay={200}>
            <div style={{ width: "48px", height: "1px", background: "var(--color-gold)", margin: "0 auto", opacity: 0.4 }} />
          </Reveal>
        </div>
      </section>


      {/* â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
          3 · THE SCALE -- 200,000 sq ft typographic
      â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â• */}
      <section style={{ position: "relative", overflow: "hidden", background: "#3D1010" }}>
        <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse at 100% 50%, rgba(201,149,74,0.07) 0%, transparent 60%)", pointerEvents: "none" }} />
        <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "1px", background: "linear-gradient(to right, transparent, rgba(201,149,74,0.3), transparent)" }} />

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            minHeight: "520px",
            alignItems: "stretch",
          }}
        >
          {/* Left -- typographic */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              padding: "clamp(56px, 7vw, 104px) clamp(40px, 5vw, 80px)",
              position: "relative",
              zIndex: 1,
            }}
          >
            <Reveal>
              <div className="eyebrow" style={{ marginBottom: "32px" }}>The Facility</div>
              <div
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(4rem, 9vw, 10rem)",
                  fontWeight: 300,
                  color: "var(--color-gold)",
                  lineHeight: 0.9,
                  letterSpacing: "-0.02em",
                  marginBottom: "24px",
                }}
              >
                200,000
              </div>
              <div
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(1.2rem, 2vw, 1.8rem)",
                  fontStyle: "italic",
                  color: "#EDE8DC",
                  marginBottom: "32px",
                }}
              >
                square feet of purpose-built manufacturing<br />space in Dubai, UAE.
              </div>
              <p style={{ fontSize: "14px", color: "rgba(237,232,220,0.55)", lineHeight: 1.85, maxWidth: "400px" }}>
                Not a warehouse. Not a shared facility. A dedicated complex built around one purpose:
                making the objects the world&apos;s most significant moments deserve, entirely in-house,
                from the first sketch to the final box.
              </p>
            </Reveal>
            <Reveal delay={100}>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "24px",
                  marginTop: "48px",
                  paddingTop: "40px",
                  borderTop: "1px solid rgba(237,232,220,0.1)",
                  maxWidth: "400px",
                }}
              >
                {[
                  { n: "6",    l: "Production divisions" },
                  { n: "250",  l: "Craftspeople" },
                  { n: "7",    l: "Material types" },
                  { n: "0",    l: "Third parties" },
                ].map((s) => (
                  <div key={s.l}>
                    <div style={{ fontFamily: "var(--font-display)", fontSize: "2.2rem", fontWeight: 300, color: "#EDE8DC", lineHeight: 1 }}>{s.n}</div>
                    <div style={{ fontSize: "9px", letterSpacing: "0.16em", textTransform: "uppercase", color: "rgba(237,232,220,0.45)", marginTop: "4px" }}>{s.l}</div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

          {/* Right -- facility photo */}
          <div style={{ position: "relative", overflow: "hidden", minHeight: "520px" }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/factory-aerial.jpg"
              alt="Crystal Arc facility aerial, Dubai"
              style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "22% 40%", filter: "brightness(0.65) saturate(0.8)" }}
             loading="lazy" decoding="async"/>
            <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right, #3D1010 0%, transparent 30%)" }} />
          </div>
        </div>
      </section>


      {/* â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
          4 · THE DESIGN FLOOR -- Where it starts
      â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â• */}
      <section style={{ display: "grid", gridTemplateColumns: "1fr 1fr", minHeight: "620px" }}>

        {/* Left -- factory interior photo */}
        <div style={{ position: "relative", overflow: "hidden" }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/craft-conversation.webp"
            alt="A Crystal Arc designer and client reviewing a piece and material samples, with the production floor visible beyond"
            style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 45%", display: "block" }}
           loading="lazy" decoding="async"/>
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right, transparent 60%, var(--color-s1) 100%)" }} />
        </div>

        {/* Right -- copy */}
        <div
          style={{
            background: "var(--color-s1)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: "clamp(56px, 7vw, 104px) clamp(40px, 5vw, 80px)",
          }}
        >
          <Reveal from="right">
            <div className="eyebrow" style={{ marginBottom: "28px" }}>Where It Begins</div>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(2rem, 3vw, 3.5rem)",
                fontWeight: 300,
                color: "var(--color-ivory)",
                lineHeight: 1.15,
                marginBottom: "8px",
              }}
            >
              Every piece starts<br />as a conversation.
            </h2>
            <h3
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(1.1rem, 1.6vw, 1.5rem)",
                fontStyle: "italic",
                fontWeight: 300,
                color: "var(--color-gold)",
                marginBottom: "32px",
                opacity: 0.85,
              }}
            >
              Then a sketch. Then a render you approve.
            </h3>
            <p style={{ fontSize: "14px", color: "var(--color-taupe)", lineHeight: 1.9, marginBottom: "24px" }}>
              Our design studio sits ten steps from the production floor, and that proximity is deliberate.
              What our designers draw, they know can be built. What production needs, design can immediately refine.
              There are no misunderstandings between the idea and the object.
            </p>
            <p style={{ fontSize: "14px", color: "var(--color-taupe)", lineHeight: 1.9, marginBottom: "40px" }}>
              Every brief becomes a 3D render you sign off on before a single gram of material is cut.
              Then, and only then, does the work begin.
            </p>
            <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
              <div style={{ width: "32px", height: "1px", background: "var(--color-gold)", opacity: 0.4 }} />
              <p style={{ fontSize: "11px", color: "var(--color-muted)", letterSpacing: "0.08em" }}>Design · Concept · 3D Render · Client Approval</p>
            </div>
          </Reveal>
        </div>
      </section>


      {/* â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
          5 · THE MAKING -- Photo essay, not a list
      â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â• */}
      <section style={{ background: "var(--color-bg)", padding: "100px 0 0" }}>
        <div className="con" style={{ paddingBottom: "72px" }}>
          <Reveal>
            <div className="eyebrow" style={{ marginBottom: "16px" }}>The Making</div>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(2.4rem, 4vw, 4.4rem)",
                fontWeight: 300,
                color: "var(--color-ivory)",
                lineHeight: 1.08,
                maxWidth: "680px",
              }}
            >
              Here is how a piece<br />
              <em style={{ color: "var(--color-gold)" }}>comes alive.</em>
            </h2>
          </Reveal>
        </div>

        {/* Photo essay panels -- alternating image/text */}
        {[
          {
            eyebrow: "Crystal & Glass",
            title: "Light, held in form.",
            body: "Optical-grade crystal is cut, shaped and laser-engraved at tolerances measured in fractions of a millimetre. The 3D image inside every crystal piece is burned by laser beam, not carved by hand, but the selection, the placement, and the final inspection always are. When you hold a Crystal Arc crystal piece, you are holding three days of precision.",
            img: "/trophy-crystal.webp",
            right: false,
          },
          {
            eyebrow: "Metal & Cast",
            title: "Weight that speaks before the name does.",
            body: "Brass is poured. Zinc alloy is cast. Steel is machined. Then, by hand, every surface is finished, ground, polished, brushed or plated in gold, silver, rose or antique. The weight of a Crystal Arc metal piece is not accidental. It is the weight of the occasion it marks.",
            img: "/trophy-metal-mixed.webp",
            right: true,
          },
          {
            eyebrow: "Resin & Colour",
            title: "Any colour. Any form. No compromise.",
            body: "Resin is our most requested material because it allows the most creativity: full-colour casting, translucency, embedded objects, custom shapes that no other material can hold. Each pour is colour-matched to specification. Each mould is made in-house. What you brief is what we cast.",
            img: "/craft-resin.webp",
            right: false,
          },
          {
            eyebrow: "Detail & Inspection",
            title: "The last pair of eyes.",
            body: "Before a piece is boxed, it passes through Quality Control, not a scanner, not a checklist. A craftsperson holds it under a light and makes a decision. If it is not right, it does not leave. In 25 years and 40,000 projects, that standard has never moved.",
            img: "/craft-inspection.webp",
            right: true,
          },
        ].map((panel, i) => (
          <div
            key={panel.eyebrow}
            style={{
              display: "grid",
              gridTemplateColumns: panel.right ? "1fr 1fr" : "1fr 1fr",
              minHeight: "clamp(480px, 42vw, 680px)",
              borderTop: "1px solid rgba(26,21,18,0.08)",
            }}
          >
            {/* Image */}
            <div
              style={{
                position: "relative",
                overflow: "hidden",
                height: "100%",
                minHeight: "clamp(480px, 42vw, 680px)",
                order: panel.right ? 1 : 0,
              }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={panel.img}
                alt={panel.title}
                loading="lazy"
                style={{
                  position: "absolute", inset: 0,
                  width: "100%", height: "100%",
                  objectFit: "cover", objectPosition: "center",
                  filter: "brightness(0.72) saturate(0.85)",
                  display: "block",
                }}
              />
              <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(12,10,7,0.7) 0%, transparent 50%)" }} />
              {/* Eyebrow on photo */}
              <div style={{ position: "absolute", top: "28px", left: "28px", fontSize: "8px", letterSpacing: "0.28em", textTransform: "uppercase", color: "var(--color-gold)", fontWeight: 600 }}>
                {String(i + 1).padStart(2, "0")}
              </div>
            </div>

            {/* Copy */}
            <Reveal from={panel.right ? "right" : "left"} delay={60}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  padding: "clamp(48px, 6vw, 88px) clamp(32px, 5vw, 72px)",
                  background: i % 2 === 0 ? "var(--color-bg)" : "var(--color-s1)",
                  height: "100%",
                }}
              >
                <div className="eyebrow" style={{ marginBottom: "20px" }}>{panel.eyebrow}</div>
                <h3
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "clamp(1.6rem, 2.4vw, 2.6rem)",
                    fontWeight: 300,
                    fontStyle: "italic",
                    color: "var(--color-ivory)",
                    lineHeight: 1.2,
                    marginBottom: "28px",
                  }}
                >
                  {panel.title}
                </h3>
                <p style={{ fontSize: "14px", color: "var(--color-taupe)", lineHeight: 1.9, maxWidth: "460px" }}>
                  {panel.body}
                </p>
              </div>
            </Reveal>
          </div>
        ))}
      </section>


      {/* â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
          6 · VOICES FROM THE WORKSHOP
      â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â• */}
      <section style={{ background: "var(--color-s2)", borderTop: "1px solid rgba(26,21,18,0.08)", padding: "120px 0" }}>
        <div className="con">
          <Reveal>
            <div className="eyebrow" style={{ marginBottom: "16px" }}>Voices from the Workshop</div>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(1.9rem, 3.2vw, 3.4rem)",
                fontWeight: 300,
                color: "var(--color-ivory)",
                lineHeight: 1.1,
                marginBottom: "80px",
                // 500px forced "The people are the standard." to break mid-line.
                // Wide enough for it to sit on one line, still capped so it never
                // runs the full container width.
                maxWidth: "min(100%, 860px)",
              }}
            >
              The people are the standard.<br />
              <em style={{ color: "var(--color-gold)" }}>Not the machines.</em>
            </h2>
          </Reveal>

          <div style={{ display: "flex", flexDirection: "column", gap: "32px" }}>
            {[
              {
                role: "Chief Engraver",
                img: "/craft-engraver.webp",
                alt: "Crystal Arc chief engraver at the engraving bench",
                tenure: "18 years at Crystal Arc",
                quote: "People ask me how long it takes to engrave a name. I tell them: the engraving takes three minutes. Knowing exactly where to place it, at what depth, at what angle. That takes eighteen years. A machine can cut. Only experience knows where.",
              },
              {
                role: "Lead Designer",
                img: "/craft-designer.webp",
                alt: "Crystal Arc lead designer at the design workstation",
                tenure: "11 years at Crystal Arc",
                quote: "My job begins with a brief and ends with a piece that the client did not know they were imagining. Between those two points is everything, conversations, sketches, renders, revisions, and the moment when we all agree that yes, this is it. That moment is the best part of this work.",
              },
              {
                role: "Head of Quality Control",
                img: "/craft-qc.webp",
                alt: "Crystal Arc head of quality control inspecting a finished trophy",
                tenure: "14 years at Crystal Arc",
                quote: "I have never once passed a piece I was not proud of. That is not a standard someone wrote for me. It is the only way I know how to do this job. When I sign off on a piece, my name goes with it, even when no one else knows that.",
              },
            ].map((v, i) => (
              <Reveal key={v.role} delay={i * 80}>
                <div
                  className="craft-voice"
                  style={{
                    paddingBottom: "32px",
                    borderBottom: i < 2 ? "1px solid rgba(26,21,18,0.1)" : "none",
                  }}
                >
                  <div>
                    <div className="craft-voice-photo">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={v.img} alt={v.alt} loading="lazy" />
                    </div>
                    <div style={{ fontSize: "11px", letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--color-ivory)", fontWeight: 600, marginBottom: "6px" }}>{v.role}</div>
                    <div style={{ fontSize: "11px", color: "var(--color-muted)", letterSpacing: "0.06em" }}>{v.tenure}</div>
                  </div>
                  <div>
                    <p
                      style={{
                        fontFamily: "var(--font-display)",
                        fontSize: "clamp(1.2rem, 1.8vw, 1.65rem)",
                        fontStyle: "italic",
                        fontWeight: 300,
                        color: "var(--color-i60)",
                        lineHeight: 1.65,
                      }}
                    >
                      {v.quote}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>


      {/* â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
          7 · FACILITY PHOTO STRIP -- Inside the building
      â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â• */}
      <section style={{ padding: "0", lineHeight: 0, background: "var(--color-bg)" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "3px" }}>
          {["/factory-1.webp", "/factory-2.webp", "/factory-3.webp"].map((src, i) => (
            <div key={src} style={{ position: "relative", aspectRatio: "4/3", overflow: "hidden" }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={src}
                alt="Crystal Arc production facility"
                loading="lazy"
                style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", filter: "brightness(0.8) saturate(0.85)" }}
              />
            </div>
          ))}
        </div>
      </section>


      {/* â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
          8 · THE STANDARD -- Zero outsourcing manifesto
      â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â• */}
      <section style={{ position: "relative", overflow: "hidden" }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/craft-commitment.webp"
          alt=""
          aria-hidden
          style={{
            position: "absolute", inset: 0,
            width: "100%", height: "100%",
            objectFit: "cover", objectPosition: "center 42%",
            filter: "brightness(0.7) saturate(1)",
            display: "block",
          }}
         loading="lazy" decoding="async"/>
        {/* The copy sits centred over a LIGHT photograph, so the scrim is a radial
            one — dark enough in the middle to carry white type, easing off at the
            edges so the outer trophies still read. A flat 90% black over
            brightness(0.12), as before, made the background invisible. */}
        <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 70% 80% at 50% 50%, rgba(12,10,7,0.76) 0%, rgba(12,10,7,0.6) 45%, rgba(12,10,7,0.26) 100%)" }} />
        <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "1px", background: "linear-gradient(to right, transparent, rgba(201,149,74,0.35), transparent)" }} />

        <div className="con" style={{ position: "relative", zIndex: 1, padding: "120px clamp(24px, 6vw, 80px)" }}>
          <div style={{ maxWidth: "820px", margin: "0 auto", textAlign: "center" }}>
            <Reveal>
              <div className="eyebrow" style={{ marginBottom: "44px" }}>The Commitment</div>
            </Reveal>
            <Reveal delay={80}>
              <h2
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(2rem, 3.8vw, 4.4rem)",
                  fontWeight: 300,
                  color: "#EDE8DC",
                  lineHeight: 1.15,
                  marginBottom: "44px",
                }}
              >
                25 years. 40,000 projects.<br />Zero outsourcing.
              </h2>
            </Reveal>
            <Reveal delay={140}>
              <p style={{ fontSize: "14px", color: "rgba(237,232,220,0.55)", lineHeight: 1.9, marginBottom: "56px", maxWidth: "580px", margin: "0 auto 56px" }}>
                Design, tooling, casting, engraving, finishing, inspection, packaging. Every process
                happens inside this building. We have never outsourced a single stage.
                In 25 years and 40,000 projects, that has never changed.
              </p>
            </Reveal>

            {/* Stats row */}
            <Reveal delay={180}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  gap: "clamp(32px, 6vw, 80px)",
                  paddingTop: "52px",
                  borderTop: "1px solid rgba(237,232,220,0.1)",
                  flexWrap: "wrap",
                }}
              >
                {[
                  { n: "25+",    l: "Years" },
                  { n: "40,000+", l: "Projects" },
                  { n: "250",   l: "Craftspeople" },
                  { n: "0%",    l: "Outsourced" },
                ].map((s) => (
                  <div key={s.l} style={{ textAlign: "center" }}>
                    <div style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2.2rem, 3.5vw, 3.8rem)", fontWeight: 300, color: "var(--color-gold)", lineHeight: 1 }}>{s.n}</div>
                    <div style={{ fontSize: "9px", letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(237,232,220,0.4)", marginTop: "8px" }}>{s.l}</div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>


      {/* â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
          9 · CTA -- Commission your piece
      â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â• */}
      <section className="mob-pad" style={{ background: "var(--color-s1)", padding: "120px 0", borderTop: "1px solid rgba(26,21,18,0.08)" }}>
        <div className="con">
          <div className="sec-enquiry-grid" style={{ gap: "80px" }}>
            <Reveal from="left">
              <div>
                <div className="eyebrow" style={{ marginBottom: "24px" }}>Commission a Piece</div>
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
                  { label: "WhatsApp",  val: "+971 56 536 4384", href: waLink },
                  { label: "Email",     val: "info@crystalarc.net", href: "mailto:info@crystalarc.net" },
                  { label: "Showroom",  val: "Dubai, UAE", href: "#" },
                ].map((c) => (
                  <div
                    key={c.label}
                    style={{
                      display: "grid",
                      gridTemplateColumns: "80px 1fr",
                      gap: "16px",
                      padding: "14px 0",
                      borderBottom: "1px solid rgba(237,232,220,0.1)",
                      alignItems: "center",
                    }}
                  >
                    <span style={{ fontSize: "9px", letterSpacing: "0.18em", textTransform: "uppercase", color: "rgba(237,232,220,0.5)", fontWeight: 600 }}>{c.label}</span>
                    <a
                      href={c.href}
                      target={c.href.startsWith("http") ? "_blank" : undefined}
                      rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      style={{ fontSize: "15px", color: "#EDE8DC", textDecoration: "none" }}
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
