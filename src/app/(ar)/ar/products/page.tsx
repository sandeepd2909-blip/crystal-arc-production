import type { Metadata } from "next";
import { ogUrl } from "@/lib/og";
import { alternatesFor, localeHref } from "@/lib/i18n";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import { HOF_PHOTOS } from "@/lib/hof-photos";
import EnquiryForm from "@/components/products/EnquiryForm";

export const metadata: Metadata = {
  title: "منتجاتنا · الجوائز والهدايا والتغليف",
  description:
    "دروع كريستال وجوائز مخصصة وهدايا مؤسسية وتغليف فاخر ومقتنيات ديكور، كلها بتصنيع داخلي في منشأتنا بالإمارات. أكثر من ٢٥ عامًا، وتوريد إلى دول الخليج.",
  keywords: [
    "دروع كريستال الرياض",
    "جوائز مخصصة السعودية",
    "هدايا مؤسسية الرياض",
    "علب تقديم فاخرة",
    "مقتنيات ديكور فاخرة",
    "مصنع جوائز الخليج",
    "تصنيع دروع تكريم",
  ],
  openGraph: {
    url: "https://www.crystalarc.net/ar/products",
    title: "منتجاتنا · جوائز ودروع وهدايا مؤسسية | كريستال آرك",
    description:
      "دروع كريستال وجوائز مخصصة وهدايا مؤسسية وتغليف فاخر ومقتنيات ديكور، كلها بتصنيع داخلي في منشأتنا بالإمارات.",
    images: [{ url: ogUrl("/trophy-main.webp"), width: 1200, height: 630, alt: "منتجات كريستال آرك" }],
  },
  alternates: alternatesFor("ar", "/products"),
};

const PRODUCTS = [
  {
    slug: "trophies-awards",
    category: "الجوائز",
    title: "الجوائز والكؤوس",
    desc: "المصنّع الرائد للجوائز المخصصة في الخليج، للبطولات والجهات الحكومية ومراسم كبار الشخصيات.",
    img: "/hp-cat-trophies-v2.webp",
  },
  {
    slug: "corporate-gifts",
    category: "الهدايا",
    title: "الهدايا المؤسسية",
    desc: "هدايا فاخرة تحمل علامتكم، للبنوك وشركات الطيران والفنادق العالمية وكبرى الشركات في المنطقة.",
    img: "/hp-cat-corporate-v2.webp",
  },
  {
    slug: "boxes",
    category: "التغليف",
    title: "علب التقديم",
    desc: "تغليف يوحي بالقيمة قبل أن تُفتح الهدية. كرتون مقوّى، وخشب، وجلد، وبطانات مخمل.",
    img: "/hp-cat-boxes-v2.webp",
  },
  {
    slug: "home-decor",
    category: "الديكور",
    title: "المقتنيات والديكور",
    desc: "قطع كريستال ومعدن بالطلب الخاص، للمساكن الفاخرة وفنادق الخمس نجوم وبهو الشركات.",
    img: "/hp-cat-homedecor-v2.webp",
  },
];

const LOGOS = [
  { src: "/logos/Emirates_logo.svg", alt: "طيران الإمارات" },
  { src: "/logos/ADNOC.svg", alt: "أدنوك" },
  { src: "/logos/DP_World_logo.svg", alt: "موانئ دبي العالمية" },
  { src: "/logos/Aramco-.svg", alt: "أرامكو" },
  { src: "/logos/Etihad-.svg", alt: "الاتحاد للطيران" },
  { src: "/logos/Museum_of_the_Future_logo.svg", alt: "متحف المستقبل" },
  { src: "/logos/Dubai-Police-Logo.svg", alt: "شرطة دبي" },
  { src: "/logos/FIFA_Arab_Cup_logo.svg", alt: "كأس العرب" },
  { src: "/logos/Emirates-NBD.webp", alt: "بنك الإمارات دبي الوطني" },
  { src: "/logos/Majid_Al_Futtaim_logo.svg", alt: "ماجد الفطيم" },
  { src: "/logos/Sobha_-company-.svg", alt: "شوبا العقارية" },
  { src: "/logos/Saudi-Vision-2030.svg", alt: "رؤية السعودية ٢٠٣٠" },
];

const STATS = [
  { num: "+٢٥", label: "عامًا في التصنيع" },
  { num: "٢٠٠٬٠٠٠", label: "قدم مربعة في الإمارات" },
  { num: "+١٥ ألف", label: "عميل" },
  { num: "٠٪", label: "إسناد خارجي" },
];

const WHY = [
  {
    num: "٠١",
    title: "بلا إسناد خارجي",
    body: "التصميم والقوالب والحفر والتشطيب والتغليف، كل مرحلة داخل منشأتنا البالغة ٢٠٠٬٠٠٠ قدم مربعة في الإمارات. الجودة لا تُوكَل إلى غيرنا.",
  },
  {
    num: "٠٢",
    title: "٢٥ عامًا من الخبرة",
    body: "تأسّسنا في دبي عام ٢٠٠٠. سُلّمت جوائزنا على منصات الفورمولا ١، وفي المراسم الحكومية، وفي المحافل الأولمبية في أنحاء الخليج.",
  },
  {
    num: "٠٣",
    title: "طلب واحد. فريق واحد.",
    body: "لكل مشروع مصمّم ومدير إنتاج مخصّصان، نقطة تواصل واحدة من الرسم الأول إلى التسليم النهائي.",
  },
];

const STEPS = [
  { num: "٠١", text: "نراجع طلبكم خلال ساعتين" },
  { num: "٠٢", text: "نرسل عرضًا مفصّلًا أو نقترح مكالمة" },
  { num: "٠٣", text: "يبدأ الإنتاج بعد موافقتكم الخطية" },
];

export default function ArabicProductsPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section style={{ background: "var(--color-bg)", borderBottom: "1px solid rgba(26,21,18,0.08)", position: "relative", overflow: "hidden" }}>
        {/* Decorative image — mirrored to the left for RTL */}
        <div style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: "42%", pointerEvents: "none" }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/trophy-main.webp" alt="" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center", opacity: 0.18, display: "block" }} />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to left, var(--color-bg) 0%, transparent 40%)" }} />
        </div>

        <div className="con" style={{ position: "relative", zIndex: 1, paddingTop: "148px", paddingBottom: "88px" }}>
          <Reveal>
            <div className="eyebrow">منتجاتنا</div>
          </Reveal>
          <Reveal delay={80}>
            <h1
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(2.6rem, 5vw, 5.6rem)",
                fontWeight: 400,
                color: "var(--color-ivory)",
                lineHeight: 1.35,
                margin: "18px 0 22px",
                maxWidth: "760px",
              }}
            >
              صناعة إماراتية.
              <em style={{ color: "var(--color-gold)", display: "block" }}>تُعرَف في كل مكان.</em>
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p style={{ fontSize: "15px", color: "var(--color-taupe)", lineHeight: 1.95, marginBottom: "40px", maxWidth: "520px" }}>
              أربع فئات من المنتجات، ومعيار واحد لا يتغيّر. كل قطعة تُصمَّم حول طلبكم وتُصنَّع دون تنازل
              داخل منشأتنا البالغة ٢٠٠٬٠٠٠ قدم مربعة في الإمارات.
            </p>
          </Reveal>
          <Reveal delay={220}>
            <div style={{ display: "flex", gap: "14px", flexWrap: "wrap" }}>
              <a
                href="https://wa.me/971565364384?text=%D9%85%D8%B1%D8%AD%D8%A8%D9%8B%D8%A7%20%D9%83%D8%B1%D9%8A%D8%B3%D8%AA%D8%A7%D9%84%20%D8%A2%D8%B1%D9%83%D8%8C%20%D8%A3%D9%88%D8%AF%20%D9%85%D9%86%D8%A7%D9%82%D8%B4%D8%A9%20%D9%85%D8%B4%D8%B1%D9%88%D8%B9."
                className="btn-wa"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12 0C5.373 0 0 5.373 0 12c0 2.125.558 4.122 1.532 5.856L.058 23.486a.5.5 0 00.609.61l5.749-1.519A11.95 11.95 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.9a9.9 9.9 0 01-5.031-1.37l-.361-.214-3.714.981.993-3.648-.235-.374A9.9 9.9 0 012.1 12C2.1 6.535 6.535 2.1 12 2.1S21.9 6.535 21.9 12 17.465 21.9 12 21.9z" />
                </svg>
                راسلنا على واتساب
              </a>
              <Link prefetch={false} href={localeHref("ar", "/contact")} className="btn-red">
                اطلب عرضًا
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Products Grid ── */}
      <section style={{ background: "var(--color-bg)", padding: "3px 0 0" }}>
        <div className="prod-listing-grid">
          {PRODUCTS.map((p) => (
            <Link prefetch={false} key={p.slug} href={localeHref("ar", `/products/${p.slug}`)} className="prod-listing-card">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={p.img} alt={p.title} loading="lazy" decoding="async" />
              <div className="prod-listing-overlay" />
              <div className="prod-listing-content">
                <div className="prod-listing-eye">{p.category}</div>
                <div className="prod-listing-title">{p.title}</div>
                <div className="prod-listing-desc">{p.desc}</div>
                <span className="prod-listing-cta">تصفَّح الفئة ←</span>
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
              <div key={s.label} style={{ textAlign: "center", borderInlineEnd: "1px solid rgba(201,149,74,0.12)" }}>
                <div style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2.4rem, 4.4vw, 4.4rem)", fontWeight: 400, color: "var(--color-gold)", lineHeight: 1.2 }}>
                  {s.num}
                </div>
                <div style={{ fontSize: "11px", color: "var(--color-taupe)", fontWeight: 600, marginTop: "10px" }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── لماذا Crystal Arc ── */}
      <section style={{ background: "var(--color-s1)", padding: "88px 0" }}>
        <div className="con">
          <div className="roof-grid">
            <Reveal>
              <div className="roof-img">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/prodcat-factory.webp" alt="منشأة كريستال آرك للتصنيع في دبي" loading="lazy" decoding="async" />
              </div>
            </Reveal>
            <div>
              <Reveal>
                <div className="eyebrow" style={{ marginBottom: "16px" }}>لماذا كريستال آرك</div>
                <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2rem, 3.6vw, 3.6rem)", fontWeight: 400, color: "var(--color-ivory)", lineHeight: 1.4, marginBottom: "64px", maxWidth: "600px" }}>
                  كل شيء تحت
                  <em style={{ color: "var(--color-gold)" }}> سقف واحد.</em>
                </h2>
              </Reveal>
              <div className="sec-3-grid" style={{ gap: "32px", gridTemplateColumns: "1fr" }}>
                {WHY.map((item) => (
                  <Reveal key={item.num}>
                    <div>
                      <div style={{ fontFamily: "var(--font-display)", fontSize: "1.1rem", color: "var(--color-gold)", marginBottom: "14px" }}>{item.num}</div>
                      <div style={{ fontSize: "13px", color: "var(--color-ivory)", fontWeight: 600, marginBottom: "12px" }}>{item.title}</div>
                      <p style={{ fontSize: "14px", color: "var(--color-taupe)", lineHeight: 1.95 }}>{item.body}</p>
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
          <div className="eyebrow" style={{ justifyContent: "center", marginBottom: "36px" }}>
            موضع ثقة أبرز الجهات في المنطقة
          </div>
        </Reveal>
        <div style={{ position: "relative" }}>
          <div style={{ position: "absolute", insetInlineStart: 0, top: 0, bottom: 0, width: "120px", background: "linear-gradient(to right, var(--color-s2), transparent)", zIndex: 2, pointerEvents: "none" }} />
          <div style={{ position: "absolute", insetInlineEnd: 0, top: 0, bottom: 0, width: "120px", background: "linear-gradient(to left, var(--color-s2), transparent)", zIndex: 2, pointerEvents: "none" }} />
          <div className="logo-ticker-track" style={{ "--run": 2400 } as React.CSSProperties}>
            {[...LOGOS, ...LOGOS].map((logo, i) => (
              <div key={`${logo.alt}-${i}`} style={{ flexShrink: 0, width: "200px", height: "88px", display: "flex", alignItems: "center", justifyContent: "center", padding: "0 28px" }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={logo.src} alt={logo.alt} style={{ maxWidth: "130px", maxHeight: "44px", objectFit: "contain", opacity: 0.48, filter: "brightness(0)", display: "block" }} loading="lazy" decoding="async" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Hall of Fame ── */}
      <section style={{ background: "var(--color-s2)", position: "relative", overflow: "hidden", paddingTop: "56px", paddingBottom: "56px", borderTop: "1px solid rgba(26,21,18,0.09)" }}>
        <div className="con" style={{ marginBottom: "28px" }}>
          <Reveal>
            <div className="eyebrow" style={{ fontSize: "11px" }}>
              قاعة المشاهير &nbsp;&middot;&nbsp; تسلّمها ألمع الأسماء
            </div>
          </Reveal>
        </div>
        <div className="hof-mini-wrap">
          <div className="hof-mini-track" style={{ "--run": 7546 } as React.CSSProperties}>
            {[...HOF_PHOTOS, ...HOF_PHOTOS].map((p, i) => (
              <div key={i} className="hof-mini-tile">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={p.src} alt={p.arLabel} loading="lazy" decoding="async" />
                <div className="hof-mini-caption">
                  <div style={{ fontSize: "10px", color: "rgba(255,255,255,0.85)", fontWeight: 600 }} lang="en" dir="ltr">
                    {p.arLabel}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Enquiry Form ── */}
      <section style={{ background: "var(--color-s2)", borderTop: "1px solid rgba(201,149,74,0.12)", padding: "88px 0" }} id="contact">
        <div className="con">
          <div className="sec-enquiry-grid" style={{ gap: "80px" }}>
            <div>
              <Reveal>
                <div className="eyebrow" style={{ marginBottom: "20px" }}>اطلب عرضًا</div>
                <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.9rem, 3.2vw, 3.4rem)", fontWeight: 400, color: "var(--color-ivory)", lineHeight: 1.4, marginBottom: "20px" }}>
                  أخبرونا بما تصنعونه.
                  <em style={{ color: "var(--color-gold)", display: "block" }}>ونتكفّل نحن بالباقي.</em>
                </h2>
              </Reveal>
              <Reveal delay={80}>
                <p style={{ fontSize: "14px", color: "var(--color-taupe)", lineHeight: 1.95, marginBottom: "40px" }}>
                  شاركونا التفاصيل، المناسبة، الكمية، الموعد، والميزانية. نردّ خلال ساعتين بعرض مفصّل.
                </p>
                <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                  {STEPS.map((step) => (
                    <div key={step.num} style={{ display: "flex", gap: "16px", alignItems: "flex-start" }}>
                      <span style={{ fontFamily: "var(--font-display)", fontSize: "1.1rem", color: "var(--color-gold)", flexShrink: 0, marginTop: "2px" }}>{step.num}</span>
                      <span style={{ fontSize: "13px", color: "var(--color-taupe)", lineHeight: 1.9 }}>{step.text}</span>
                    </div>
                  ))}
                </div>
                <div style={{ marginTop: "40px", paddingTop: "32px", borderTop: "1px solid rgba(201,149,74,0.15)", display: "flex", flexDirection: "column", gap: "10px" }}>
                  <a href="https://wa.me/971565364384" target="_blank" rel="noopener noreferrer" style={{ fontSize: "12px", color: "var(--color-taupe)", textDecoration: "none" }}>
                    واتساب:{" "}
                    <span style={{ color: "var(--color-gold)" }} dir="ltr">
                      +971 56 536 4384
                    </span>
                  </a>
                  <a href="mailto:info@crystalarc.net" style={{ fontSize: "12px", color: "var(--color-taupe)", textDecoration: "none" }}>
                    البريد:{" "}
                    <span style={{ color: "var(--color-gold)" }} dir="ltr">
                      info@crystalarc.net
                    </span>
                  </a>
                </div>
              </Reveal>
            </div>
            <div className="enquiry-panel">
              <EnquiryForm locale="ar" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
