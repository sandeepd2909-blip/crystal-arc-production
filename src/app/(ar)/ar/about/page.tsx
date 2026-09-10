import type { Metadata } from "next";
import { alternatesFor } from "@/lib/i18n";
import { ogUrl } from "@/lib/og";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import SplitText from "@/components/SplitText";
import AnimatedNumber from "@/components/AnimatedNumber";
import MagneticButton from "@/components/MagneticButton";
import EnquiryForm from "@/components/products/EnquiryForm";
import { HOF_PHOTOS } from "@/lib/hof-photos";

const LOGOS = [
  { src: "/logos/Emirates_logo.svg",              alt: "Emirates" },
  { src: "/logos/DP_World_logo.svg",              alt: "DP World" },
  { src: "/logos/ADNOC.svg",                      alt: "ADNOC" },
  { src: "/logos/Museum_of_the_Future_logo.svg",  alt: "Museum of the Future" },
  { src: "/logos/Dubai-Police-Logo.svg",          alt: "Dubai Police" },
  { src: "/logos/FIFA_Arab_Cup_logo.svg",         alt: "FIFA Arab Cup" },
  { src: "/logos/Majid_Al_Futtaim_logo.svg",      alt: "Majid Al Futtaim" },
  { src: "/logos/Sobha_-company-.svg",            alt: "Sobha Realty" },
  { src: "/logos/Emirates-NBD.webp",               alt: "Emirates NBD" },
  { src: "/logos/First_Abu_Dhabi_Bank_Logo.svg",  alt: "First Abu Dhabi Bank" },
  { src: "/logos/Aramco-.svg",                    alt: "Aramco" },
  { src: "/logos/Saudi-Vision-2030.svg",          alt: "Saudi Vision 2030" },
];



// Same four category images the homepage uses (hp-cat-*-v2), so the two pages
// show the identical set. These are all centre-weighted studio shots, unlike the
// previous banners, so they take a plain centre crop rather than per-image offsets.
const PRODUCTS = [
  {
    title: "الجوائز والكؤوس",
    sub: "كريستال · معدن · راتنج · مركّب",
    img: "/about-cat-trophies.webp",
    href: "/ar/products/trophies-awards",
    objPos: "center",
  },
  {
    title: "الهدايا المؤسسية",
    sub: "تحمل العلامة · مخصصة · لكبار الشخصيات",
    img: "/about-cat-corporate.webp",
    href: "/ar/products/corporate-gifts",
    objPos: "center",
  },
  {
    title: "علب التقديم",
    sub: "كرتون مقوّى · جلد · خشب",
    img: "/about-cat-boxes.webp",
    href: "/ar/products/boxes",
    objPos: "center",
  },
  {
    title: "المقتنيات والديكور",
    sub: "منحوتات · بهو · بالطلب الخاص",
    img: "/about-cat-homedecor.webp",
    href: "/ar/products/home-decor",
    objPos: "center",
  },
];

const BELIEFS = [
  {
    num: "01",
    statement: "نصنع القطعة واللحظة التي تصنعها.",
    sub: "كل قطعة من كريستال آرك مصنوعة لتبقى، لتقف في خزانة عرض، وتُسلَّم في حفل، وتمثّل الإنجاز الذي استحقّها.",
    img: "/occ-luxury.webp",
  },
  {
    num: "02",
    statement: "لا يخرج من هذا المبنى ما لا نقدّمه لرئيس دولة.",
    sub: "معيار الفحص نفسه يسري على قطعة مكتب واحدة وعلى دفعة بطولة من عشرة آلاف وحدة. لا توجد هنا درجات للجودة.",
    img: "/occ-government.webp",
  },
  {
    num: "03",
    statement: "الإسناد الخارجي تنازل عن الجودة، ولم نقدّمه يومًا.",
    sub: "التصميم والقوالب والحفر والتجميع والتشطيب والتغليف، كل مرحلة تجري داخل منشأتنا البالغة ٢٠٠٬٠٠٠ قدم مربعة في الإمارات.",
    img: "/factory-3.webp",
  },
];

const SHOWCASE = [
  "/slide-01.webp", "/slide-03.webp", "/slide-05.webp",
  "/slide-07.webp", "/slide-09.webp", "/slide-11.webp",
];

const waLink = `https://wa.me/971565364384?text=${encodeURIComponent(
  "مرحبًا كريستال آرك، أودّ مناقشة مشروع. يرجى تزويدي بالتفاصيل."
)}`;

const BG = (src: string, brightness = 0.18) =>
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
  title: "من نحن · مصنّع جوائز في دبي منذ عام ٢٠٠٠",
  description:
    "تأسّست كريستال آرك في دبي عام ٢٠٠٠. منشأة مملوكة بالكامل على مساحة ٢٠٠٬٠٠٠ قدم مربعة، وستة أقسام إنتاجية، ودون إسناد أي مرحلة إلى جهة خارجية.",
  keywords: [
    "عن كريستال آرك",
    "مصنع جوائز دبي",
    "مصنّع دروع تكريم الإمارات",
    "شركة تصنيع جوائز الخليج",
    "منشأة تصنيع جوائز",
  ],
  openGraph: {
    url: "https://www.crystalarc.net/ar/about",
    title: "من نحن | كريستال آرك · مصنّع الجوائز الفاخرة منذ عام ٢٠٠٠",
    description: "منشأة مملوكة بالكامل في الإمارات، وستة أقسام إنتاجية، ودون إسناد أي مرحلة إلى جهة خارجية.",
    images: [{ url: ogUrl("/factory-1.webp"), width: 1200, height: 630, alt: "مصنع كريستال آرك في دبي" }],
  },
  alternates: alternatesFor("ar", "/about"),
};

export default function AboutPage() {
  return (
    <>

      {/* â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
          1 · HERO — Founder quote over real factory
      â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â• */}
      <section className="about-hero">
        {/* Portrait of the two founders the quote is attributed to. The subject
            sits on the right of the frame with the left deliberately dark, so the
            copy runs down the left and the scrim is horizontal rather than a flat
            wash — that keeps their faces clear instead of dimming them out. */}
        {/* Art direction rather than plain srcset. The hero box is portrait on a
            phone (~390x776) while this photograph is 2.33 wide, so cover was
            scaling the landscape frame up and showing about a fifth of it — and
            at 3x DPR the browser still pulled the 1920w file for it. Phones get
            a portrait crop of the two founders instead. */}
        <picture>
          <source media="(max-width: 900px)" srcSet="/about-founders-portrait.webp" />
          <source media="(min-width: 901px)" srcSet="/about-founders.webp" />
          { }
          <img
            className="about-hero-img"
            src="/about-founders.webp"
            fetchPriority="high"
            alt="فيصل صديق المطوع ومستنصر جولوالا، مؤسّسا كريستال آرك، في صالة العرض بدبي"
          />
        </picture>
        <div className="about-hero-scrim" />
        <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "1px", background: "linear-gradient(to right, transparent, rgba(201,149,74,0.5), transparent)", zIndex: 2 }} />

        <div className="about-hero-copy">
          <Reveal>
            <div className="eyebrow" style={{ marginBottom: "52px" }}>كريستال آرك &nbsp;&middot;&nbsp; دبي، الإمارات &nbsp;&middot;&nbsp; تأسّست ٢٠٠٠</div>
          </Reveal>

          <h1
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2.35rem, 6vw, 7rem)",
              fontStyle: "italic",
              fontWeight: 300,
              color: "#EDE8DC",
              lineHeight: 1.1,
              marginBottom: "36px",
            }}
          >
            <SplitText text={`«إن كنتم تستطيعون أن تحلموا به،`} delay={80} stagger={0.055} duration={1} style={{ display: "block" }} />
            <SplitText text={`فنحن نستطيع صنعه.»`} delay={380} stagger={0.055} duration={1} style={{ display: "block" }} />
          </h1>

          <Reveal delay={160}>
            <p
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(1.1rem, 1.8vw, 1.55rem)",
                fontStyle: "italic",
                fontWeight: 300,
                color: "rgba(237,232,220,0.72)",
                lineHeight: 1.65,
                maxWidth: "640px",
                margin: "0 auto 52px",
              }}
            >
              هذا هو مستوى الإبداع والابتكار والحرفة<br />لدينا في كريستال آرك.
            </p>
          </Reveal>

          <Reveal delay={220}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "20px" }}>
              <div style={{ width: "48px", height: "1px", background: "var(--color-gold)", opacity: 0.5 }} />
              <div style={{ textAlign: "left" }}>
                <div style={{ fontSize: "12px", letterSpacing: "0.18em", textTransform: "uppercase", color: "#EDE8DC", fontWeight: 600, marginBottom: "5px" }}>
                  فيصل صديق المطوع ومستنصر جولوالا
                </div>
                <div style={{ fontSize: "11px", letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--color-gold)", opacity: 0.65 }}>
                  المؤسّسان والمديران، كريستال آرك
                </div>
              </div>
              <div style={{ width: "48px", height: "1px", background: "var(--color-gold)", opacity: 0.5 }} />
            </div>
          </Reveal>
        </div>
      </section>


      {/* â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
          2 · THE STORY — Narrative + factory image
      â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â• */}
      <section style={{ display: "grid", gridTemplateColumns: "1fr 1fr", minHeight: "640px" }}>

        {/* Left — factory image */}
        <div style={{ position: "relative", overflow: "hidden", minHeight: "500px" }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/factory-1.webp"
            alt="منشأة الإنتاج في كريستال آرك"
            style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 30%", display: "block" }}
           loading="lazy" decoding="async"/>
          {/* right-side vignette to blend into text section */}
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right, transparent 55%, var(--color-s2) 100%)" }} />
        </div>

        {/* Right — story copy */}
        <div
          style={{
            background: "var(--color-s2)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: "clamp(56px, 7vw, 104px) clamp(40px, 5vw, 80px)",
          }}
        >
          <Reveal from="right">
            <div className="eyebrow" style={{ marginBottom: "32px" }}>قصتنا</div>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(2rem, 3.2vw, 3.8rem)",
                fontWeight: 300,
                color: "var(--color-ivory)",
                lineHeight: 1.15,
                marginBottom: "28px",
              }}
            >
              صُنعت في دبي.<br />
              <span style={{ fontStyle: "italic", color: "var(--color-gold)" }}>لأرقى لحظات العالم.</span>
            </h2>
            <p style={{ fontSize: "15px", color: "var(--color-taupe)", lineHeight: 1.85, marginBottom: "24px" }}>
              في عام ٢٠٠٠ رأى مؤسّسانا فجوة: أهم المناسبات في الخليج، الأعياد الوطنية والبطولات والأوسمة الرسمية والمحطات المؤسسية، كانت تُخلَّد بقطع لا تعكس ثِقَل المناسبة. فأسّسا كريستال آرك لتغيير ذلك.
            </p>
            <p style={{ fontSize: "15px", color: "var(--color-taupe)", lineHeight: 1.85, marginBottom: "40px" }}>
              وبعد خمسة وعشرين عامًا، تعمل كريستال آرك من منشأة مساحتها ٢٠٠٬٠٠٠ قدم مربعة في دبي، بتصنيع داخلي كامل، وتخدم جهات حكومية وعلامات عالمية واتحادات رياضية في الخليج وخارجه. ولا تزال كل قطعة تُصنع بالقناعة نفسها التي بدأت بها الشركة: أن يكون الغرض جديرًا باللحظة التي يُخلّدها.
            </p>
            <div style={{ display: "flex", gap: "40px" }}>
              {[
                { val: "تأسّست ٢٠٠٠", label: "دبي، الإمارات" },
                { val: "٢٥ عامًا",  label: "متواصل" },
                { val: "٠٪",        label: "إسناد خارجي" },
              ].map((s) => (
                <div key={s.val}>
                  <div style={{ fontFamily: "var(--font-display)", fontSize: "1.6rem", fontWeight: 300, color: "var(--color-gold)", marginBottom: "4px" }}>{s.val}</div>
                  <div style={{ fontSize: "9px", letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--color-muted)" }}>{s.label}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

      </section>


      {/* â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
          3 · WHAT WE MAKE — 4 image cards
      â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â• */}
      <section style={{ background: "var(--color-bg)" }}>
        <div className="con" style={{ paddingTop: "96px", paddingBottom: "48px" }}>
          <Reveal>
            <div className="eyebrow" style={{ marginBottom: "16px" }}>ما الذي نصنعه</div>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(2.2rem, 3.5vw, 4rem)",
                fontWeight: 300,
                color: "var(--color-ivory)",
                lineHeight: 1.15,
                marginBottom: "56px",
              }}
            >
              أربعة خطوط إنتاج.<br />
              <span style={{ fontStyle: "italic", color: "var(--color-gold)" }}>معيار واحد.</span>
            </h2>
          </Reveal>
        </div>

        {/* 4-col image card grid */}
        <div className="about-cat-grid">
          {PRODUCTS.map((p, i) => (
            <Reveal key={p.title} delay={i * 80}>
              <Link prefetch={false} href={p.href} style={{ textDecoration: "none", display: "block" }}>
                <div
                  style={{
                    position: "relative",
                    minHeight: "480px",
                    overflow: "hidden",
                    cursor: "pointer",
                  }}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={p.img}
                    alt={p.title}
                    style={{
                      position: "absolute",
                      inset: 0,
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      objectPosition: p.objPos,
                      // Matches the homepage's .pc.product-shot treatment: the image
                      // stays at full brightness and only the caption band is darkened,
                      // rather than dimming the whole tile.
                      filter: "brightness(1) saturate(1)",
                      display: "block",
                      transition: "transform 0.6s ease, filter 0.4s ease",
                    }}
                   loading="lazy" decoding="async"/>
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      // Same idea as the homepage — image full brightness, dark band
                      // only under the caption — but these tiles are shorter than the
                      // homepage's, so the subject sits lower and the band has to reach
                      // a little further up to keep the gold eyebrow legible.
                      background:
                        "linear-gradient(to top, rgba(12,10,7,1) 0%, rgba(12,10,7,0.92) 20%, rgba(12,10,7,0.35) 34%, transparent 48%), linear-gradient(to bottom, rgba(12,10,7,0.45) 0%, transparent 22%)",
                    }}
                  />
                  <div
                    style={{
                      position: "absolute",
                      bottom: 0,
                      left: 0,
                      right: 0,
                      padding: "32px 28px",
                    }}
                  >
                    <div style={{ fontSize: "10px", letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--color-gold)", marginBottom: "10px", opacity: 0.8 }}>{p.sub}</div>
                    <div
                      style={{
                        fontFamily: "var(--font-display)",
                        fontSize: "clamp(1.3rem, 1.8vw, 1.8rem)",
                        fontWeight: 300,
                        color: "#EDE8DC",
                        lineHeight: 1.2,
                      }}
                    >
                      {p.title}
                    </div>
                    <div style={{ display: "flex", alignItems: "center", gap: "8px", marginTop: "16px" }}>
                      <div style={{ width: "24px", height: "1px", background: "var(--color-gold)", opacity: 0.5 }} />
                      <span style={{ fontSize: "10px", letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--color-gold)", opacity: 0.7 }}>تصفَّح المجموعة</span>
                    </div>
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>


      {/* â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
          4 · THE RECORD — Typographic stats over factory
      â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â• */}
      <section style={{ position: "relative", padding: "120px 0", overflow: "hidden" }}>
        { }
        {/* Backdrop only — the vans and the signage were reading strongly enough
            to compete with the figures sitting on top of them. */}
        <img src="/factory-aerial.jpg" alt="" aria-hidden style={{ ...BG("/factory-aerial.jpg", 0.13), objectPosition: "center 50%" }}  loading="lazy" decoding="async"/>
        <div style={{ position: "absolute", inset: 0, background: "rgba(12,10,7,0.9)" }} />
        <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "1px", background: "linear-gradient(to right, transparent, rgba(201,149,74,0.3), transparent)" }} />

        <div className="con" style={{ position: "relative", zIndex: 1 }}>
          <Reveal>
            <div className="eyebrow" style={{ marginBottom: "72px", textAlign: "center" }}>السجل</div>
          </Reveal>

          <div className="record-stats-grid" style={{ borderLeft: "1px solid rgba(255,255,255,0.1)" }}>
            {[
              { num: "٢٥",      sup: "+",  label: "عامًا من\nالعمل المتواصل" },
              { num: "٢٠٠٬٠٠٠", sup: "",   label: "قدم مربعة\nمنشأة الإمارات" },
              { num: "٤٠٬٠٠٠",  sup: "+",  label: "مشروع\nمنجز" },
              { num: "٠",       sup: "%",  label: "إسناد\nخارجي" },
            ].map((s, i) => (
              <Reveal key={s.label} delay={i * 80}>
                <div style={{ borderRight: "1px solid rgba(255,255,255,0.1)", padding: "0 clamp(10px, 1.5vw, 22px)", textAlign: "center" }}>
                  <div
                    className="record-stat-num"
                    style={{
                      fontFamily: "var(--font-display)",
                      fontWeight: 300,
                      color: "var(--color-gold)",
                      lineHeight: 1,
                      marginBottom: "16px",
                      letterSpacing: "-0.02em",
                      whiteSpace: "nowrap",
                    }}
                  >
                    <AnimatedNumber value={s.num + s.sup} />
                  </div>
                  <div style={{ fontSize: "10px", letterSpacing: "0.18em", textTransform: "uppercase", color: "rgba(237,232,220,0.55)", lineHeight: 1.8, whiteSpace: "pre-line" }}>
                    {s.label}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>


      {/* â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
          5 · THE FACILITY — Factory image split
      â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â• */}
      <section className="about-facility">

        {/* Single production-floor image filling the column. Was a stacked pair
            with the building exterior below; the caption moves onto this one so
            the facility detail is not lost. */}
        <div style={{ position: "relative", overflow: "hidden", minHeight: "580px" }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/factory-3.webp" alt="أرضية الإنتاج في كريستال آرك، دبي" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 40%", display: "block" }} loading="lazy" decoding="async" />
          <div style={{ position: "absolute", bottom: "14px", right: "18px", fontSize: "12px", letterSpacing: "0.16em", textTransform: "uppercase", color: "rgba(237,232,220,0.72)", textShadow: "0 1px 6px rgba(0,0,0,0.5)" }}>٢٠٠٬٠٠٠ قدم مربعة · دبي، الإمارات</div>
        </div>

        <div
          style={{
            background: "var(--color-s1)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: "clamp(48px, 6vw, 96px) clamp(32px, 5vw, 72px)",
          }}
        >
          <Reveal from="right">
            <div className="eyebrow" style={{ marginBottom: "28px" }}>المنشأة</div>
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
              كل شيء تحت سقف واحد.
            </h2>
            <h3
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(1.5rem, 2.2vw, 2.4rem)",
                fontStyle: "italic",
                fontWeight: 300,
                color: "var(--color-gold)",
                lineHeight: 1.2,
                marginBottom: "32px",
                opacity: 0.85,
              }}
            >
              عن قصد.
            </h3>
            <p style={{ fontSize: "15px", color: "var(--color-taupe)", lineHeight: 1.85, marginBottom: "36px", maxWidth: "400px" }}>
              من الرسم الأول إلى العلبة الأخيرة، كل خطوة، التصميم والقوالب والحفر والتجميع والتشطيب والفحص والتغليف، تجري داخل منشأتنا بالإمارات. بنيناها هكذا لأن الجودة لا تُوكَل إلى غيرنا.
            </p>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "20px",
                paddingTop: "32px",
                borderTop: "1px solid rgba(26,21,18,0.12)",
              }}
            >
              {[
                { val: "٢٠٠٬٠٠٠ قدم مربعة", label: "منشأة مملوكة" },
                { val: "دبي، الإمارات",    label: "تعمل بكامل طاقتها" },
                { val: "داخليًا",      label: "جميع المراحل" },
                { val: "منذ عام ٢٠٠٠",    label: "٢٥ عامًا متواصلة" },
              ].map((s) => (
                <div key={s.val}>
                  <div style={{ fontSize: "13px", color: "var(--color-ivory)", fontWeight: 600, marginBottom: "4px", letterSpacing: "0.04em" }}>{s.val}</div>
                  <div style={{ fontSize: "9px", letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--color-muted)" }}>{s.label}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

      </section>


      {/* â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
          6 · WHAT WE BELIEVE — 3 beliefs with images
      â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â• */}
      <section style={{ background: "var(--color-bg)", padding: "120px 0" }}>
        <div className="con">

          <Reveal>
            <div className="eyebrow" style={{ marginBottom: "16px" }}>ما نؤمن به</div>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(2rem, 3.2vw, 3.5rem)",
                fontWeight: 300,
                color: "var(--color-ivory)",
                lineHeight: 1.15,
                marginBottom: "80px",
                maxWidth: "540px",
              }}
            >
              ثلاثة مبادئ.<br />
              <span style={{ fontStyle: "italic", color: "var(--color-gold)" }}>غير قابل للتفاوض.</span>
            </h2>
          </Reveal>

          <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
            {BELIEFS.map((b, i) => (
              <Reveal key={b.num} delay={i * 80}>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    minHeight: "340px",
                    overflow: "hidden",
                    ...(i % 2 === 1 ? { direction: "rtl" } : {}),
                  }}
                >
                  {/* Image side */}
                  <div style={{ position: "relative", overflow: "hidden", direction: "ltr" }}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={b.img}
                      alt={b.statement}
                      style={{
                        position: "absolute",
                        inset: 0,
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        objectPosition: "center 40%",
                        filter: "brightness(0.55) saturate(0.7)",
                        display: "block",
                      }}
                     loading="lazy" decoding="async"/>
                    {/* number overlay */}
                    <div
                      style={{
                        position: "absolute",
                        top: "32px",
                        left: "32px",
                        fontSize: "clamp(4rem, 8vw, 8rem)",
                        fontFamily: "var(--font-display)",
                        fontWeight: 300,
                        color: "rgba(201,149,74,0.25)",
                        lineHeight: 1,
                        userSelect: "none",
                      }}
                    >
                      {b.num}
                    </div>
                  </div>

                  {/* Copy side */}
                  <div
                    style={{
                      background: "var(--color-s1)",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      padding: "clamp(40px, 5vw, 72px)",
                      direction: "ltr",
                    }}
                  >
                    <div style={{ fontSize: "10px", letterSpacing: "0.22em", textTransform: "uppercase", color: "var(--color-gold)", marginBottom: "24px", fontWeight: 700 }}>{b.num}</div>
                    <p
                      style={{
                        fontFamily: "var(--font-display)",
                        fontSize: "clamp(1.4rem, 2.2vw, 2.4rem)",
                        fontStyle: "italic",
                        fontWeight: 300,
                        color: "var(--color-ivory)",
                        lineHeight: 1.3,
                        marginBottom: "20px",
                      }}
                    >
                      {b.statement}
                    </p>
                    <p style={{ fontSize: "14px", color: "var(--color-taupe)", lineHeight: 1.8, maxWidth: "460px" }}>
                      {b.sub}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>


      {/* â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
          7 · SHOWCASE STRIP — 6 product slide images
      â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â• */}
      <section style={{ background: "var(--color-bg)", paddingBottom: "0" }}>
        <div className="con" style={{ paddingBottom: "40px" }}>
          <Reveal>
            <div className="eyebrow">من مشغلنا</div>
          </Reveal>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(6, minmax(0, 1fr))", gap: "3px" }}>
          {SHOWCASE.map((src, i) => (
            <div key={i} style={{ position: "relative", aspectRatio: "3/4", overflow: "hidden" }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={src}
                alt={`من منتجات Crystal Arc ${i + 1}`}
                style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "center", filter: "brightness(0.85) saturate(0.9)", display: "block" }}
               loading="lazy" decoding="async"/>
            </div>
          ))}
        </div>
      </section>


      {/* â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
          8 · HALL OF FAME — Spotlight + filmstrip
      â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â• */}
      <section style={{ background: "var(--color-bg)", borderTop: "1px solid rgba(26,21,18,0.09)" }}>
        <div className="con" style={{ paddingTop: "96px", paddingBottom: "48px" }}>
          <Reveal>
            <div className="eyebrow" style={{ marginBottom: "20px" }}>قاعة المشاهير</div>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(2rem, 3.5vw, 4.2rem)",
                fontWeight: 300,
                color: "var(--color-ivory)",
                lineHeight: 1.15,
                marginBottom: "12px",
                maxWidth: "700px",
              }}
            >
              خمسة وعشرون عامًا من اللحظات<br />
              <span style={{ fontStyle: "italic", color: "var(--color-gold)" }}>نفخر بتقديمه.</span>
            </h2>
            <p style={{ fontSize: "14px", color: "var(--color-taupe)", lineHeight: 1.75, maxWidth: "480px", marginBottom: "32px" }}>
              رؤساء دول. أبطال رياضة. نجوم ترفيه عالميون. كل قطعة من كريستال آرك كانت حاضرة في اللحظة التي سيتذكّرونها.
            </p>
            <Link
              prefetch={false}
              href="/ar/our-work"
              style={{ fontSize: "11px", letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--color-gold)", textDecoration: "none", fontWeight: 600, marginBottom: "52px", display: "inline-block" }}
            >
              شاهد المعرض كاملًا &larr;
            </Link>
          </Reveal>
        </div>
        <div className="hof-mini-wrap" style={{ "--tile-w": "220px", "--tile-h": "390px" } as React.CSSProperties}>
          <div className="hof-mini-track" style={{ "--run": 8286 } as React.CSSProperties}>
            {[...HOF_PHOTOS, ...HOF_PHOTOS].map((p, i) => (
              <div key={i} className="hof-mini-tile" style={{ width: "220px", height: "390px" }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={p.src} alt={p.arLabel} style={{ objectPosition: "center 15%" }}  loading="lazy" decoding="async"/>
                <div className="hof-mini-caption">
                  <div style={{ fontSize: "9px", letterSpacing: "0.16em", textTransform: "uppercase", color: "rgba(237,232,220,0.7)", fontWeight: 600 }}>{p.arLabel}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
          9 · MANIFESTO — Full-bleed immersive
      â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â• */}
      <section style={{ position: "relative", padding: "clamp(64px, 8vh, 104px) 0", overflow: "hidden" }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/occ-luxury.webp" alt="" aria-hidden style={{ ...BG("/occ-luxury.webp", 0.5), objectPosition: "center 40%" }}  loading="lazy" decoding="async"/>
        <div style={{ position: "absolute", inset: 0, background: "rgba(12,10,7,0.62)" }} />
        <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "1px", background: "linear-gradient(to right, transparent, rgba(201,149,74,0.35), transparent)" }} />

        <div className="con" style={{ position: "relative", zIndex: 1, height: "100%", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", textAlign: "center" }}>
          <div style={{ width: "32px", height: "1px", background: "var(--color-gold)", opacity: 0.6, margin: "0 auto 28px" }} />
          <Reveal>
            <p
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(1.35rem, 2.4vw, 2.6rem)",
                fontStyle: "italic",
                fontWeight: 300,
                color: "#EDE8DC",
                lineHeight: 1.55,
                maxWidth: "620px",
              }}
            >
              «نحن لا نصنع منتجات. نصنع الأشياء التي يتذكّر الناس اللحظة بها.»
            </p>
          </Reveal>
        </div>
      </section>


      {/* â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
          10 · TRUSTED BY — Logo ticker
      â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â• */}
      <section style={{ background: "var(--color-s1)", padding: "64px 0", borderTop: "1px solid rgba(26,21,18,0.09)" }}>
        <div className="con" style={{ marginBottom: "40px" }}>
          <Reveal>
            <div className="eyebrow">موضع ثقة</div>
          </Reveal>
        </div>
        <div style={{ overflow: "hidden" }}>
          <div className="logo-ticker-track" style={{ "--run": 1640 } as React.CSSProperties}>
            {[...LOGOS, ...LOGOS].map((l, i) => (
              /* eslint-disable-next-line @next/next/no-img-element */
              <img
                key={i}
                src={l.src}
                alt={l.alt}
                style={{ height: "32px", width: "auto", opacity: 0.45, filter: "brightness(0)", flexShrink: 0, marginRight: "72px" }}
               loading="lazy" decoding="async"/>
            ))}
          </div>
        </div>
      </section>


      {/* â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
          11 · CTA — Work with us + form
      â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â• */}
      <section style={{ background: "var(--color-s2)", padding: "120px 0", borderTop: "1px solid rgba(201,149,74,0.12)" }}>
        <div className="con">
          <div className="contact-split">

            <div>
              <Reveal>
                <div className="eyebrow" style={{ marginBottom: "32px" }}>اعملوا معنا</div>
                <h2
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "clamp(2.2rem, 3.5vw, 4rem)",
                    fontWeight: 300,
                    color: "var(--color-ivory)",
                    lineHeight: 1.15,
                    marginBottom: "12px",
                  }}
                >
                  أخبرونا بما<br />ما تصنعونه.
                </h2>
                <p
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "clamp(1.2rem, 1.8vw, 1.6rem)",
                    fontStyle: "italic",
                    fontWeight: 300,
                    color: "var(--color-gold)",
                    marginBottom: "44px",
                  }}
                >
                  كل طلب في كريستال آرك يبدأ بحديث.
                </p>
                <div style={{ display: "flex", gap: "16px", flexWrap: "wrap", marginBottom: "52px" }}>
                  <MagneticButton><Link prefetch={false} href="/ar/contact" className="btn-red">اطلب عرضًا</Link></MagneticButton>
                  <MagneticButton><a href={waLink} target="_blank" rel="noopener noreferrer" className="btn-wa">راسلنا على واتساب</a></MagneticButton>
                </div>
                {/* Contact & direct channels */}
                <div style={{ display: "flex", flexDirection: "column", gap: "8px", marginBottom: "40px" }}>
                  <a href={waLink} target="_blank" rel="noopener noreferrer" style={{ fontSize: "15px", color: "var(--color-ivory)", textDecoration: "none" }}>WhatsApp · +971 56 536 4384</a>
                  <a href="mailto:info@crystalarc.net" style={{ fontSize: "15px", color: "var(--color-taupe)", textDecoration: "none" }}>info@crystalarc.net</a>
                </div>
                {/* Offices */}
                <div style={{ display: "flex", flexDirection: "column", gap: "28px" }}>
                  {[
                    {
                      city: "دبي",
                      address: "الطابق التاسع عشر، برج الموسى ١\nشارع الشيخ زايد، مقابل متحف المستقبل",
                      phone: "+971 4 347 9191",
                      href: "https://maps.google.com/?q=Al+Moosa+Tower+1+Sheikh+Zayed+Road+Dubai",
                    },
                    {
                      city: "أبوظبي",
                      address: "مبنى رولكس ٦، شارع الشيخ راشد بن سعيد\nمنطقة الدانة ١، الطابق الثاني، مكتب رقم ٠٢",
                      phone: "+971 2 644 4220",
                      href: "https://maps.google.com/?q=Rolex+Building+6+Sheikh+Rashid+Bin+Saeed+Street+Abu+Dhabi",
                    },
                    {
                      city: "الرياض، السعودية",
                      address: "٤٥١٣ طريق الملك عبدالعزيز\nحي السليمانية، ١٢٢٤٣",
                      phone: "للاستفسارات عبر واتساب",
                      href: "https://maps.google.com/?q=4513+King+Abdulaziz+Road+Riyadh",
                    },
                  ].map((o) => (
                    <div key={o.city}>
                      <div style={{ fontSize: "11px", letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--color-gold)", marginBottom: "6px", fontWeight: 600 }}>{o.city}</div>
                      <a href={o.href} target="_blank" rel="noopener noreferrer" style={{ display: "block", fontSize: "14px", color: "var(--color-taupe)", textDecoration: "none", lineHeight: 1.7, whiteSpace: "pre-line" }}>{o.address}</a>
                      <div style={{ fontSize: "14px", color: "var(--color-ivory)", marginTop: "4px" }}>{o.phone}</div>
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>

            <Reveal delay={80} from="right">
              <div className="enquiry-panel enquiry-panel--bordered">
                <p style={{ fontSize: "11px", letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--color-gold)", marginBottom: "32px", fontWeight: 600 }}>أرسل طلبك</p>
                <EnquiryForm locale="ar" />
              </div>
            </Reveal>

          </div>
        </div>
      </section>

    </>
  );
}
