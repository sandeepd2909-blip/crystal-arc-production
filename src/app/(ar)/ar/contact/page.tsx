import type { Metadata } from "next";
import { ogUrl } from "@/lib/og";
import { alternatesFor } from "@/lib/i18n";
import EnquiryForm from "@/components/products/EnquiryForm";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "اتصل بنا · اطلب عرض سعر",
  description:
    "تواصلوا مع كريستال آرك للدروع المخصصة وهدايا الشركات والتغليف الفاخر. واتساب أو بريد أو زيارة صالة العرض. مكاتب في الرياض وأبوظبي ودبي.",
  keywords: [
    "كريستال آرك الرياض",
    "طلب عرض سعر دروع",
    "مصنع جوائز الرياض",
    "استفسار هدايا مؤسسية",
    "أرقام كريستال آرك",
    "تواصل مصنع دروع",
  ],
  openGraph: {
    url: "https://www.crystalarc.net/ar/contact",
    title: "تواصلوا مع كريستال آرك | مصنّع الجوائز والهدايا المؤسسية",
    description: "واتساب أو اتصال أو بريد إلكتروني. نردّ خلال ساعتين بعرض متكامل. مكاتبنا في الرياض وأبوظبي ودبي.",
    images: [{ url: ogUrl("/factory-1.webp"), width: 1200, height: 630, alt: "كريستال آرك دبي" }],
  },
  alternates: alternatesFor("ar", "/contact"),
};

/**
 * Riyadh leads on the Arabic site — this version is aimed at the Saudi and
 * Qatari market, so the Kingdom office comes first rather than Dubai HQ.
 *
 * NOTE: the Riyadh phone below is a UAE mobile standing in for a Saudi line.
 * Awaiting the real number from the client; it is the more visible gap here
 * than on the English site, since this page leads with that office.
 */
const OFFICES = [
  {
    city: "الرياض",
    badge: "المملكة العربية السعودية",
    lines: ["٤٥١٣ طريق الملك عبدالعزيز", "حي السليمانية، ١٢٢٤٣", "الرياض، المملكة العربية السعودية"],
    phone: "للاستفسارات عبر واتساب",
  },
  {
    city: "دبي",
    badge: "المقر الرئيسي",
    lines: ["كريستال آرك فاكتوري ذ.م.م", "١٩٠١ برج الموسى ١", "مركز التجارة الأول، دبي، الإمارات"],
    phone: "+971 4 347 9191",
    toll: "800 279 7272",
    note: "جولات المصنع متاحة عند الطلب.",
  },
  {
    city: "أبوظبي",
    badge: "الإمارات",
    lines: ["مبنى رولكس ٦، شارع الشيخ راشد بن سعيد", "منطقة الدانة ١، الطابق الثاني، مكتب ٠٢", "أبوظبي، الإمارات"],
    phone: "+971 2 644 4220",
  },
];

const waLink =
  "https://wa.me/971565364384?text=%D9%85%D8%B1%D8%AD%D8%A8%D9%8B%D8%A7%20%D9%83%D8%B1%D9%8A%D8%B3%D8%AA%D8%A7%D9%84%20%D8%A2%D8%B1%D9%83";

const STATS = [
  { n: "+٢٥", l: "عامًا في التصنيع" },
  { n: "+٢٠", l: "دولة تسلّمنا لها" },
  { n: "٣", l: "مكاتب في الخليج" },
  { n: "ساعتان", l: "زمن الاستجابة" },
];

const STEPS = [
  {
    n: "٠١",
    t: "نراجع طلبكم",
    b: "كل طلب يقرأه مدير حسابات أول خلال ساعتين، لا ردود آلية.",
  },
  {
    n: "٠٢",
    t: "يصلكم العرض",
    b: "عرض سعر مفصّل، وخيارات الخامات، ونماذج ثلاثية الأبعاد عند الحاجة، وجدول إنتاج مؤكَّد.",
  },
  {
    n: "٠٣",
    t: "الإنتاج بعد موافقتكم",
    b: "لا يدخل أي عمل مرحلة الإنتاج قبل موافقتكم الخطية. بلا مفاجآت في الجودة أو التكلفة.",
  },
];

export default function ArabicContactPage() {
  return (
    <>
      {/* ── 1 · HERO ── */}
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
          src="/factory-1.webp"
          srcSet="/factory-1-800.webp 800w, /factory-1.webp 1600w"
          sizes="100vw"
          fetchPriority="high"
          alt="منشأة كريستال آرك للتصنيع في دبي"
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center 40%",
            filter: "brightness(0.2) saturate(0.65)",
            display: "block",
          }}
        />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(12,10,7,0.55) 0%, rgba(12,10,7,0.45) 50%, rgba(12,10,7,0.92) 100%)" }} />
        <div style={{ position: "absolute", top: 0, insetInlineStart: 0, insetInlineEnd: 0, height: "1px", background: "linear-gradient(to right, transparent, rgba(201,149,74,0.5), transparent)" }} />

        <div className="con" style={{ position: "relative", zIndex: 1, textAlign: "center", paddingTop: "140px", paddingBottom: "120px" }}>
          <Reveal>
            <div className="eyebrow" style={{ justifyContent: "center", marginBottom: "44px" }}>
              كريستال آرك &nbsp;&middot;&nbsp; دبي، الإمارات &nbsp;&middot;&nbsp; تأسّست ٢٠٠٠
            </div>
          </Reveal>

          <Reveal delay={80}>
            <h1
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(2.6rem, 6vw, 6.5rem)",
                fontWeight: 400,
                color: "#EDE8DC",
                lineHeight: 1.35,
                marginBottom: "28px",
              }}
            >
              أخبرونا بما
              <br />
              <em style={{ color: "var(--color-gold)" }}>تصنعونه.</em>
            </h1>
          </Reveal>

          <Reveal delay={160}>
            <p
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(1.05rem, 1.7vw, 1.4rem)",
                fontWeight: 400,
                color: "rgba(237,232,220,0.65)",
                lineHeight: 1.9,
                maxWidth: "600px",
                margin: "0 auto 64px",
              }}
            >
              كل قطعة من كريستال آرك تبدأ بحديث. نردّ خلال ساعتين، بلا مكالمات بيع، بعرض سعر فقط.
            </p>
          </Reveal>

          <Reveal delay={240}>
            <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap", marginBottom: "80px" }}>
              <a href="#enquiry" className="btn-red">
                أرسل طلبك
              </a>
              <a href={waLink} target="_blank" rel="noopener noreferrer" className="btn-ghost">
                راسلنا على واتساب
              </a>
            </div>
          </Reveal>

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
              {STATS.map((s) => (
                <div key={s.l} style={{ textAlign: "center" }}>
                  <div style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.5rem, 2.2vw, 2.2rem)", fontWeight: 400, color: "var(--color-gold)", lineHeight: 1.2 }}>
                    {s.n}
                  </div>
                  <div style={{ fontSize: "11px", marginTop: "7px", opacity: 0.5, color: "#EDE8DC" }}>{s.l}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── 2 · HOW TO REACH US ── */}
      <section style={{ background: "var(--color-s1)", borderTop: "1px solid rgba(26,21,18,0.08)" }}>
        <div className="con" style={{ paddingTop: "88px", paddingBottom: "88px" }}>
          <Reveal>
            <div style={{ marginBottom: "52px" }}>
              <div className="eyebrow" style={{ marginBottom: "14px" }}>كيف تصلون إلينا</div>
              <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2rem, 3.4vw, 3.4rem)", fontWeight: 400, color: "var(--color-ivory)", lineHeight: 1.4 }}>
                ثلاث طرق للتواصل.
                <em style={{ color: "var(--color-gold)", display: "block" }}>وكلها تنتهي بعرض سعر.</em>
              </h2>
            </div>
          </Reveal>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, minmax(0, 1fr))", gap: "2px" }}>
            {/* WhatsApp */}
            <Reveal delay={0}>
              <a
                href={waLink}
                target="_blank"
                rel="noopener noreferrer"
                style={{ display: "flex", flexDirection: "column", background: "var(--color-bg)", padding: "44px 40px", textDecoration: "none", borderTop: "2px solid rgba(37,211,102,0.6)", height: "100%" }}
              >
                <div style={{ marginBottom: "24px" }}>
                  <svg width="36" height="36" viewBox="0 0 24 24" fill="#25D366">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                </div>
                <div style={{ fontSize: "10px", color: "rgba(37,211,102,0.85)", fontWeight: 700, marginBottom: "10px" }}>الأسرع</div>
                <h3 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.2rem, 1.7vw, 1.7rem)", fontWeight: 400, color: "var(--color-ivory)", marginBottom: "10px", lineHeight: 1.3 }}>
                  واتساب
                </h3>
                <p style={{ fontSize: "15px", color: "var(--color-taupe)", marginBottom: "8px" }} dir="ltr">
                  +971 56 536 4384
                </p>
                <p style={{ fontSize: "13px", color: "var(--color-muted)", lineHeight: 1.9, marginBottom: "32px", flexGrow: 1 }}>
                  عادةً خلال ساعة. أرسلوا رسالة أو صورة مرجعية أو رسالة صوتية.
                </p>
                <span style={{ fontSize: "11px", color: "var(--color-gold)", borderBottom: "1px solid var(--color-gold)", paddingBottom: "2px", alignSelf: "flex-start" }}>
                  راسلونا الآن ←
                </span>
              </a>
            </Reveal>

            {/* Phone */}
            <Reveal delay={80}>
              <a
                href="tel:+97143479191"
                style={{ display: "flex", flexDirection: "column", background: "var(--color-bg)", padding: "44px 40px", textDecoration: "none", borderTop: "2px solid rgba(140,104,32,0.4)", height: "100%" }}
              >
                <div style={{ marginBottom: "24px", color: "var(--color-gold)" }}>
                  <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                  </svg>
                </div>
                <div className="eyebrow" style={{ marginBottom: "10px", opacity: 0.6 }}>اتصلوا بنا</div>
                <h3 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.2rem, 1.7vw, 1.7rem)", fontWeight: 400, color: "var(--color-ivory)", marginBottom: "10px", lineHeight: 1.3 }}>
                  الهاتف
                </h3>
                <p style={{ fontSize: "15px", color: "var(--color-taupe)", marginBottom: "4px" }} dir="ltr">
                  +971 4 347 9191
                </p>
                <p style={{ fontSize: "13px", color: "var(--color-muted)", marginBottom: "8px" }}>
                  الرقم المجاني: <span dir="ltr">800 279 7272</span>
                </p>
                <p style={{ fontSize: "13px", color: "var(--color-muted)", lineHeight: 1.9, marginBottom: "32px", flexGrow: 1 }}>
                  الاثنين، السبت، ٩ صباحًا، ٦ مساءً بتوقيت الخليج.
                </p>
                <span style={{ fontSize: "11px", color: "var(--color-gold)", borderBottom: "1px solid var(--color-gold)", paddingBottom: "2px", alignSelf: "flex-start" }}>
                  اتصلوا بالمقر الرئيسي ←
                </span>
              </a>
            </Reveal>

            {/* Email */}
            <Reveal delay={160}>
              <a
                href="mailto:info@crystalarc.net"
                style={{ display: "flex", flexDirection: "column", background: "var(--color-bg)", padding: "44px 40px", textDecoration: "none", borderTop: "2px solid rgba(140,104,32,0.4)", height: "100%" }}
              >
                <div style={{ marginBottom: "24px", color: "var(--color-gold)" }}>
                  <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>
                </div>
                <div className="eyebrow" style={{ marginBottom: "10px", opacity: 0.6 }}>الاستفسارات وطلبات التسعير</div>
                <h3 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.2rem, 1.7vw, 1.7rem)", fontWeight: 400, color: "var(--color-ivory)", marginBottom: "10px", lineHeight: 1.3 }}>
                  البريد الإلكتروني
                </h3>
                <p style={{ fontSize: "15px", color: "var(--color-taupe)", marginBottom: "8px" }} dir="ltr">
                  info@crystalarc.net
                </p>
                <p style={{ fontSize: "13px", color: "var(--color-muted)", lineHeight: 1.9, marginBottom: "32px", flexGrow: 1 }}>
                  للطلبات المفصّلة وكراسات الشروط والمستندات. نردّ خلال ساعتين في أوقات العمل.
                </p>
                <span style={{ fontSize: "11px", color: "var(--color-gold)", borderBottom: "1px solid var(--color-gold)", paddingBottom: "2px", alignSelf: "flex-start" }}>
                  أرسلوا بريدًا ←
                </span>
              </a>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── 3 · OFFICES + PROCESS ── */}
      <section style={{ background: "var(--color-bg)", borderTop: "1px solid rgba(26,21,18,0.08)" }}>
        <div className="con" style={{ paddingTop: "100px", paddingBottom: "100px" }}>
          <div className="contact-split">
            <Reveal from="right">
              <div>
                <div className="eyebrow" style={{ marginBottom: "14px" }}>مكاتبنا</div>
                <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2rem, 3.4vw, 3.4rem)", fontWeight: 400, color: "var(--color-ivory)", lineHeight: 1.4, marginBottom: "48px" }}>
                  تفضّلوا بزيارتنا.
                  <em style={{ color: "var(--color-gold)", display: "block" }}>أو نأتي إليكم.</em>
                </h2>

                <div style={{ display: "flex", flexDirection: "column", gap: "1px", background: "rgba(26,21,18,0.08)" }}>
                  {OFFICES.map((o) => (
                    <div key={o.city} style={{ background: "var(--color-s1)", padding: "24px 28px" }}>
                      <div style={{ display: "flex", alignItems: "baseline", gap: "10px", marginBottom: "10px" }}>
                        <span style={{ fontFamily: "var(--font-display)", fontSize: "1.35rem", color: "var(--color-ivory)" }}>{o.city}</span>
                        <span style={{ fontSize: "10px", color: "var(--color-gold)", opacity: 0.6, fontWeight: 600 }}>{o.badge}</span>
                      </div>
                      {o.lines.map((l, i) => (
                        <p key={i} style={{ fontSize: "13px", color: "var(--color-muted)", lineHeight: 1.9 }}>
                          {l}
                        </p>
                      ))}
                      <div style={{ fontSize: "14px", color: "var(--color-taupe)", marginTop: "8px" }} dir="ltr">
                        {o.phone}
                      </div>
                      {o.toll && (
                        <div style={{ fontSize: "12px", color: "var(--color-muted)" }}>
                          الرقم المجاني: <span dir="ltr">{o.toll}</span>
                        </div>
                      )}
                      {o.note && <div style={{ fontSize: "11px", color: "var(--color-gold)", opacity: 0.65, marginTop: "7px" }}>{o.note}</div>}
                    </div>
                  ))}
                </div>

                <p style={{ fontSize: "12px", color: "var(--color-muted)", lineHeight: 1.95, marginTop: "20px", paddingTop: "20px", borderTop: "1px solid rgba(26,21,18,0.08)" }}>
                  أنجزنا مشاريع في <strong style={{ color: "var(--color-taupe)" }}>أكثر من ٢٠ دولة</strong>، من الأمريكتين إلى الشرق الأوسط وأفريقيا وجنوب آسيا.
                </p>
              </div>
            </Reveal>

            <Reveal from="left" delay={120}>
              <div>
                <div className="eyebrow" style={{ marginBottom: "14px" }}>آلية العمل</div>
                <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2rem, 3.4vw, 3.4rem)", fontWeight: 400, color: "var(--color-ivory)", lineHeight: 1.4, marginBottom: "48px" }}>
                  ماذا يحدث
                  <em style={{ color: "var(--color-gold)", display: "block" }}>بعد تواصلكم.</em>
                </h2>

                {STEPS.map((s, i) => (
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
                    <span style={{ fontSize: "11px", color: "var(--color-gold)", opacity: 0.55, fontWeight: 700, paddingTop: "4px" }}>{s.n}</span>
                    <div>
                      <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1.3rem", fontWeight: 400, color: "var(--color-ivory)", marginBottom: "9px", lineHeight: 1.4 }}>{s.t}</h3>
                      <p style={{ fontSize: "14px", color: "var(--color-taupe)", lineHeight: 1.95 }}>{s.b}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── 4 · ENQUIRY FORM ── */}
      <section id="enquiry" style={{ background: "#3D1010", padding: "110px 0", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse at 50% 0%, rgba(201,149,74,0.08), transparent 55%)", pointerEvents: "none" }} />
        <div style={{ position: "absolute", top: 0, insetInlineStart: 0, insetInlineEnd: 0, height: "1px", background: "linear-gradient(to right, transparent, rgba(201,149,74,0.35), transparent)" }} />

        <div className="con" style={{ position: "relative", zIndex: 1 }}>
          <div className="contact-split">
            <Reveal from="right">
              <div>
                <div className="eyebrow" style={{ marginBottom: "20px" }}>ابدأوا مشروعكم</div>
                <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2rem, 3.4vw, 3.4rem)", fontWeight: 400, color: "#EDE8DC", lineHeight: 1.4, marginBottom: "24px" }}>
                  أخبرونا عن
                  <em style={{ color: "var(--color-gold)", display: "block" }}>مشروعكم.</em>
                </h2>
                <p style={{ fontSize: "14px", color: "rgba(237,232,220,0.62)", lineHeight: 1.95, marginBottom: "44px", maxWidth: "380px" }}>
                  شاركونا التفاصيل. نردّ خلال ساعتين بعرض سعر، ونماذج تصوّرية ثلاثية الأبعاد، وجدول إنتاج، دون تكلفة ودون التزام.
                </p>
                {[
                  { label: "واتساب", val: "+971 56 536 4384", href: waLink, ltr: true },
                  { label: "البريد", val: "info@crystalarc.net", href: "mailto:info@crystalarc.net", ltr: true },
                  { label: "صالة العرض", val: "دبي، الإمارات", href: "#", ltr: false },
                ].map((c) => (
                  <div key={c.label} style={{ display: "grid", gridTemplateColumns: "90px 1fr", gap: "16px", padding: "14px 0", borderBottom: "1px solid rgba(237,232,220,0.1)", alignItems: "center" }}>
                    <span style={{ fontSize: "11px", color: "rgba(237,232,220,0.45)", fontWeight: 600 }}>{c.label}</span>
                    <a
                      href={c.href}
                      target={c.href.startsWith("http") ? "_blank" : undefined}
                      rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      style={{ fontSize: "15px", color: "#EDE8DC", textDecoration: "none" }}
                      dir={c.ltr ? "ltr" : undefined}
                    >
                      {c.val}
                    </a>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal from="left" delay={120}>
              <div className="enquiry-panel">
                <EnquiryForm locale="ar" />
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
