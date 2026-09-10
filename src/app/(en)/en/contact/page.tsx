import type { Metadata } from "next";
import { alternatesFor } from "@/lib/i18n";
import { ogUrl } from "@/lib/og";
import EnquiryForm from "@/components/products/EnquiryForm";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Contact · Request a Quote",
  description:
    "Contact Crystal Arc Dubai for custom trophies, corporate gifts, and luxury packaging. WhatsApp, email, or visit our showroom. We respond within 2 hours.",
  keywords: [
    "contact Crystal Arc",
    "trophy manufacturer contact Dubai",
    "request trophy quote UAE",
    "custom award enquiry Dubai",
    "corporate gift quote UAE",
    "Crystal Arc Dubai office",
    "Crystal Arc Abu Dhabi",
    "Crystal Arc Riyadh",
    "trophy manufacturer phone number Dubai",
  ],
  openGraph: {
    url: "https://www.crystalarc.net/en/contact",
    title: "Contact Crystal Arc | Dubai Trophy & Gift Manufacturer",
    description: "WhatsApp, call, or email Crystal Arc Dubai. We respond within 2 hours with a full proposal. Offices in Dubai, Abu Dhabi, and Riyadh.",
    images: [{ url: ogUrl("/factory-1.webp"), width: 1200, height: 630, alt: "Crystal Arc Dubai" }],
  },
  alternates: alternatesFor("en", "/contact"),
};

const OFFICES = [
  {
    city: "Dubai",
    badge: "Head Office",
    lines: ["Crystal Arc Factory LLC", "1901 Al Moosa Tower 1", "Trade Center First, Dubai, UAE"],
    phone: "+971 4 347 9191",
    toll: "800 279 7272",
    note: "Factory tours available on request.",
  },
  {
    city: "Abu Dhabi",
    badge: "UAE",
    lines: ["Rolex Building 6, Sheikh Rashid Bin Saeed Street", "Al Danah Zone 1, 2nd Floor, Office 02", "Abu Dhabi, UAE"],
    phone: "+971 2 644 4220",
  },
  {
    city: "Riyadh",
    badge: "Kingdom of Saudi Arabia",
    lines: ["4513 King Abdulaziz Road", "As Sulimaniyah, 12243", "Riyadh, Saudi Arabia"],
    phone: "Enquiries via WhatsApp",
  },
];

const waLink = "https://wa.me/971565364384";

export default function ContactPage() {
  return (
    <>

      {/* â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
          1 · HERO — full-viewport, factory background
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
          src="/factory-1.webp" srcSet="/factory-1-800.webp 800w, /factory-1.webp 1600w" sizes="100vw" fetchPriority="high"
          alt="Crystal Arc manufacturing facility, Dubai"
          style={{
            position: "absolute", inset: 0,
            width: "100%", height: "100%",
            objectFit: "cover", objectPosition: "center 40%",
            filter: "brightness(0.2) saturate(0.65)",
            display: "block",
          }}
        />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(12,10,7,0.55) 0%, rgba(12,10,7,0.45) 50%, rgba(12,10,7,0.92) 100%)" }} />
        <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "1px", background: "linear-gradient(to right, transparent, rgba(201,149,74,0.5), transparent)" }} />

        <div
          className="con"
          style={{
            position: "relative",
            zIndex: 1,
            textAlign: "center",
            paddingTop: "140px",
            paddingBottom: "120px",
          }}
        >
          <Reveal>
            <div className="eyebrow" style={{ marginBottom: "44px" }}>
              Crystal Arc &nbsp;&middot;&nbsp; Dubai, UAE &nbsp;&middot;&nbsp; Est. 2000
            </div>
          </Reveal>

          <Reveal delay={80}>
            <h1
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(3.2rem, 7vw, 8rem)",
                fontWeight: 300,
                color: "#EDE8DC",
                lineHeight: 1.06,
                marginBottom: "28px",
                letterSpacing: "-0.025em",
              }}
            >
              Tell us what<br />
              <em style={{ color: "var(--color-gold)" }}>you&rsquo;re creating.</em>
            </h1>
          </Reveal>

          <Reveal delay={160}>
            <p
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(1.1rem, 1.8vw, 1.45rem)",
                fontStyle: "italic",
                fontWeight: 300,
                color: "rgba(237,232,220,0.65)",
                lineHeight: 1.65,
                maxWidth: "520px",
                margin: "0 auto 64px",
              }}
            >
              Every Crystal Arc piece starts with a conversation.
              We respond within 2 hours, no sales calls, just a proposal.
            </p>
          </Reveal>

          {/* Quick actions */}
          <Reveal delay={240}>
            <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap", marginBottom: "80px" }}>
              <a href="#enquiry" className="btn-red">
                Send a brief
              </a>
              <a
                href={waLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost"
              >
                WhatsApp us
              </a>
            </div>
          </Reveal>

          {/* Stat strip */}
          <Reveal delay={300}>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                gap: "clamp(24px, 5vw, 72px)",
                flexWrap: "wrap",
                paddingTop: "44px",
                borderTop: "1px solid rgba(237,232,220,0.12)",
              }}
            >
              {[
                { n: "25+",   l: "Years manufacturing" },
                { n: "20+",   l: "Countries served" },
                { n: "3",     l: "UAE + KSA offices" },
                { n: "2 hrs", l: "Response time" },
              ].map((s) => (
                <div key={s.l} style={{ textAlign: "center" }}>
                  <div style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.6rem, 2.4vw, 2.4rem)", fontWeight: 300, color: "var(--color-gold)", lineHeight: 1, letterSpacing: "-0.02em" }}>
                    {s.n}
                  </div>
                  <div className="eyebrow" style={{ marginTop: "7px", opacity: 0.5, color: "#EDE8DC" }}>{s.l}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>


      {/* â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
          2 · HOW TO REACH US — 3 channel cards
      â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â• */}
      <section style={{ background: "var(--color-s1)", borderTop: "1px solid rgba(26,21,18,0.08)" }}>
        <div className="con" style={{ paddingTop: "88px", paddingBottom: "88px" }}>
          <Reveal>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "52px" }}>
              <div>
                <div className="eyebrow" style={{ marginBottom: "14px" }}>How to reach us</div>
                <h2
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "clamp(2.4rem, 3.8vw, 4rem)",
                    fontWeight: 300,
                    color: "var(--color-ivory)",
                    lineHeight: 1.05,
                  }}
                >
                  Three ways in.
                  <em style={{ color: "var(--color-gold)", fontStyle: "italic", display: "block" }}>
                    All lead to a proposal.
                  </em>
                </h2>
              </div>
            </div>
          </Reveal>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, minmax(0, 1fr))", gap: "2px" }}>

            {/* WhatsApp */}
            <Reveal delay={0}>
              <a
                href={waLink}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  background: "var(--color-bg)",
                  padding: "44px 40px",
                  textDecoration: "none",
                  borderTop: "2px solid rgba(37,211,102,0.6)",
                  height: "100%",
                }}
              >
                <div style={{ marginBottom: "24px" }}>
                  <svg width="36" height="36" viewBox="0 0 24 24" fill="#25D366">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                </div>
                <div style={{ fontSize: "9px", letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(37,211,102,0.85)", fontWeight: 700, marginBottom: "10px" }}>
                  Most direct
                </div>
                <h3
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "clamp(1.3rem, 1.8vw, 1.8rem)",
                    fontWeight: 400,
                    color: "var(--color-ivory)",
                    marginBottom: "10px",
                    lineHeight: 1.1,
                  }}
                >
                  WhatsApp
                </h3>
                <p style={{ fontSize: "15px", color: "var(--color-taupe)", marginBottom: "8px" }}>
                  +971 56 536 4384
                </p>
                <p style={{ fontSize: "13px", color: "var(--color-muted)", lineHeight: 1.7, marginBottom: "32px", flexGrow: 1 }}>
                  Typically within the hour. Send a message, photo reference, or voice note.
                </p>
                <span style={{ fontSize: "10px", letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--color-gold)", borderBottom: "1px solid var(--color-gold)", paddingBottom: "2px", alignSelf: "flex-start" }}>
                  Message us now &rarr;
                </span>
              </a>
            </Reveal>

            {/* Phone */}
            <Reveal delay={80}>
              <a
                href="tel:+97143479191"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  background: "var(--color-bg)",
                  padding: "44px 40px",
                  textDecoration: "none",
                  borderTop: "2px solid rgba(140,104,32,0.4)",
                  height: "100%",
                }}
              >
                <div style={{ marginBottom: "24px", color: "var(--color-gold)" }}>
                  <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                  </svg>
                </div>
                <div className="eyebrow" style={{ marginBottom: "10px", opacity: 0.6 }}>
                  Call us
                </div>
                <h3
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "clamp(1.3rem, 1.8vw, 1.8rem)",
                    fontWeight: 400,
                    color: "var(--color-ivory)",
                    marginBottom: "10px",
                    lineHeight: 1.1,
                  }}
                >
                  Phone
                </h3>
                <p style={{ fontSize: "15px", color: "var(--color-taupe)", marginBottom: "4px" }}>
                  +971 4 347 9191
                </p>
                <p style={{ fontSize: "13px", color: "var(--color-muted)", marginBottom: "8px" }}>
                  Toll-free: 800 279 7272
                </p>
                <p style={{ fontSize: "13px", color: "var(--color-muted)", lineHeight: 1.7, marginBottom: "32px", flexGrow: 1 }}>
                  Monday, Saturday, 9 am, 6 pm GST.
                </p>
                <span style={{ fontSize: "10px", letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--color-gold)", borderBottom: "1px solid var(--color-gold)", paddingBottom: "2px", alignSelf: "flex-start" }}>
                  Call Dubai HQ &rarr;
                </span>
              </a>
            </Reveal>

            {/* Email */}
            <Reveal delay={160}>
              <a
                href="mailto:info@crystalarc.net"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  background: "var(--color-bg)",
                  padding: "44px 40px",
                  textDecoration: "none",
                  borderTop: "2px solid rgba(140,104,32,0.4)",
                  height: "100%",
                }}
              >
                <div style={{ marginBottom: "24px", color: "var(--color-gold)" }}>
                  <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>
                </div>
                <div className="eyebrow" style={{ marginBottom: "10px", opacity: 0.6 }}>
                  Enquiries &amp; RFQs
                </div>
                <h3
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "clamp(1.3rem, 1.8vw, 1.8rem)",
                    fontWeight: 400,
                    color: "var(--color-ivory)",
                    marginBottom: "10px",
                    lineHeight: 1.1,
                  }}
                >
                  Email
                </h3>
                <p style={{ fontSize: "15px", color: "var(--color-taupe)", marginBottom: "8px" }}>
                  info@crystalarc.net
                </p>
                <p style={{ fontSize: "13px", color: "var(--color-muted)", lineHeight: 1.7, marginBottom: "32px", flexGrow: 1 }}>
                  Detailed briefs, RFQs, and documents. We respond within 2 hours during business hours.
                </p>
                <span style={{ fontSize: "10px", letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--color-gold)", borderBottom: "1px solid var(--color-gold)", paddingBottom: "2px", alignSelf: "flex-start" }}>
                  Send an email &rarr;
                </span>
              </a>
            </Reveal>

          </div>
        </div>
      </section>


      {/* â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
          3 · OFFICES + WHAT HAPPENS NEXT
      â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â• */}
      <section style={{ background: "var(--color-bg)", borderTop: "1px solid rgba(26,21,18,0.08)" }}>
        <div className="con" style={{ paddingTop: "100px", paddingBottom: "100px" }}>
          <div className="contact-split">

            {/* LEFT — offices */}
            <Reveal from="left">
              <div>
                <div className="eyebrow" style={{ marginBottom: "14px" }}>Our offices</div>
                <h2
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "clamp(2.4rem, 3.8vw, 4rem)",
                    fontWeight: 300,
                    color: "var(--color-ivory)",
                    lineHeight: 1.05,
                    marginBottom: "48px",
                  }}
                >
                  Find us.
                  <em style={{ color: "var(--color-gold)", fontStyle: "italic", display: "block" }}>
                    Or we&rsquo;ll come to you.
                  </em>
                </h2>

                <div style={{ display: "flex", flexDirection: "column", gap: "1px", background: "rgba(26,21,18,0.08)" }}>
                  {OFFICES.map((o) => (
                    <div key={o.city} style={{ background: "var(--color-s1)", padding: "24px 28px" }}>
                      <div style={{ display: "flex", alignItems: "baseline", gap: "10px", marginBottom: "10px" }}>
                        <span style={{ fontFamily: "var(--font-display)", fontSize: "1.25rem", color: "var(--color-ivory)" }}>
                          {o.city}
                        </span>
                        <span style={{ fontSize: "8px", letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--color-gold)", opacity: 0.6, fontWeight: 600 }}>
                          {o.badge}
                        </span>
                      </div>
                      {o.lines.map((l, i) => (
                        <p key={i} style={{ fontSize: "13px", color: "var(--color-muted)", lineHeight: 1.7 }}>{l}</p>
                      ))}
                      <div style={{ fontSize: "14px", color: "var(--color-taupe)", marginTop: "8px" }}>{o.phone}</div>
                      {o.toll && <div style={{ fontSize: "12px", color: "var(--color-muted)" }}>Toll-free: {o.toll}</div>}
                      {o.note && <div style={{ fontSize: "11px", color: "var(--color-gold)", opacity: 0.65, marginTop: "7px", fontStyle: "italic" }}>{o.note}</div>}
                    </div>
                  ))}
                </div>

                <p style={{ fontSize: "12px", color: "var(--color-muted)", lineHeight: 1.85, marginTop: "20px", paddingTop: "20px", borderTop: "1px solid rgba(26,21,18,0.08)" }}>
                  Projects completed in <strong style={{ color: "var(--color-taupe)" }}>20+ countries</strong>, the Americas to the Middle East, Africa and South Asia.
                </p>
              </div>
            </Reveal>

            {/* RIGHT — what happens next */}
            <Reveal from="right" delay={120}>
              <div>
                <div className="eyebrow" style={{ marginBottom: "14px" }}>The process</div>
                <h2
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "clamp(2.4rem, 3.8vw, 4rem)",
                    fontWeight: 300,
                    color: "var(--color-ivory)",
                    lineHeight: 1.05,
                    marginBottom: "48px",
                  }}
                >
                  What happens
                  <em style={{ color: "var(--color-gold)", fontStyle: "italic", display: "block" }}>
                    after you reach out.
                  </em>
                </h2>

                {[
                  { n: "01", t: "We review your brief", b: "Every submission is read within 2 hours by a senior account manager - not a chatbot." },
                  { n: "02", t: "You receive a proposal", b: "Tailored quote, material options, 3D renders where applicable, and a confirmed production timeline." },
                  { n: "03", t: "Production on your approval", b: "Nothing goes into production until you sign off in writing. Zero surprises on quality or cost." },
                ].map((s, i) => (
                  <div
                    key={s.n}
                    style={{
                      display: "grid",
                      gridTemplateColumns: "36px 1fr",
                      gap: "20px",
                      paddingBottom: i < 2 ? "28px" : 0,
                      marginBottom: i < 2 ? "28px" : 0,
                      borderBottom: i < 2 ? "1px solid rgba(26,21,18,0.09)" : "none",
                      alignItems: "start",
                    }}
                  >
                    <span style={{ fontSize: "9px", letterSpacing: "0.18em", color: "var(--color-gold)", opacity: 0.55, fontWeight: 700, paddingTop: "4px" }}>{s.n}</span>
                    <div>
                      <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1.2rem", fontWeight: 400, color: "var(--color-ivory)", marginBottom: "9px", lineHeight: 1.2 }}>{s.t}</h3>
                      <p style={{ fontSize: "14px", color: "var(--color-taupe)", lineHeight: 1.8 }}>{s.b}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>

          </div>
        </div>
      </section>


      {/* â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
          4 · ENQUIRY FORM — dark maroon, final CTA
      â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â• */}
      <section
        id="enquiry"
        style={{ background: "#3D1010", padding: "110px 0", position: "relative", overflow: "hidden" }}
      >
        <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse at 50% 0%, rgba(201,149,74,0.08), transparent 55%)", pointerEvents: "none" }} />
        <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "1px", background: "linear-gradient(to right, transparent, rgba(201,149,74,0.35), transparent)" }} />

        <div className="con" style={{ position: "relative", zIndex: 1 }}>
          <div className="contact-split">

            {/* LEFT — copy + contact lines */}
            <Reveal from="left">
              <div>
                <div className="eyebrow" style={{ marginBottom: "20px" }}>Start your project</div>
                <h2
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "clamp(2.4rem, 3.8vw, 4rem)",
                    fontWeight: 300,
                    color: "#EDE8DC",
                    lineHeight: 1.05,
                    marginBottom: "24px",
                  }}
                >
                  Tell us about
                  <em style={{ color: "var(--color-gold)", fontStyle: "italic", display: "block" }}>
                    your project.
                  </em>
                </h2>
                <p style={{ fontSize: "14px", color: "rgba(237,232,220,0.62)", lineHeight: 1.9, marginBottom: "44px", maxWidth: "340px" }}>
                  Share your brief. We respond within 2 hours with a proposal,
                  3D concept renders, and a production timeline, at no cost,
                  no commitment.
                </p>
                {[
                  { label: "WhatsApp", val: "+971 56 536 4384", href: waLink },
                  { label: "Email",    val: "info@crystalarc.net", href: "mailto:info@crystalarc.net" },
                  { label: "Showroom", val: "Dubai, UAE",          href: "#" },
                ].map((c) => (
                  <div key={c.label} style={{ display: "grid", gridTemplateColumns: "80px 1fr", gap: "16px", padding: "14px 0", borderBottom: "1px solid rgba(237,232,220,0.1)", alignItems: "center" }}>
                    <span style={{ fontSize: "10px", letterSpacing: "0.18em", textTransform: "uppercase", color: "rgba(237,232,220,0.45)", fontWeight: 600 }}>{c.label}</span>
                    <a href={c.href} target={c.href.startsWith("http") ? "_blank" : undefined} rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined} style={{ fontSize: "15px", color: "#EDE8DC", textDecoration: "none" }}>{c.val}</a>
                  </div>
                ))}
              </div>
            </Reveal>

            {/* RIGHT — form on cream background */}
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
