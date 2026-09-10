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

/** getRelatedProducts() reads lib/products.ts, which holds English titles.
 *  Mapped here rather than adding a locale to that module, so the shared data
 *  stays the single source of truth for slugs and images. */
/** Category labels from lib/products.ts, in Arabic. */
const AR_CAT: Record<string, string> = {
  Trophies: "الجوائز",
  Gifts: "الهدايا",
  Packaging: "التغليف",
  "Décor": "الديكور",
};

const AR_TITLE: Record<string, string> = {
  "trophies-awards": "الجوائز والكؤوس",
  "corporate-gifts": "الهدايا المؤسسية",
  boxes: "علب التقديم",
  "home-decor": "المقتنيات والديكور",
};

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
  { src: "/logos/Emirates_logo.svg",               alt: "Emirates" },
  { src: "/logos/ADNOC.svg",                       alt: "ADNOC" },
  { src: "/logos/DP_World_logo.svg",               alt: "DP World" },
  { src: "/logos/Aramco-.svg",                     alt: "Aramco" },
  { src: "/logos/Etihad-.svg",                     alt: "Etihad Airways" },
  { src: "/logos/Museum_of_the_Future_logo.svg",   alt: "Museum of the Future" },
  { src: "/logos/Dubai-Police-Logo.svg",           alt: "Dubai Police" },
  { src: "/logos/FIFA_Arab_Cup_logo.svg",          alt: "FIFA Arab Cup" },
  { src: "/logos/Emirates-NBD.webp",               alt: "Emirates NBD" },
  { src: "/logos/Majid_Al_Futtaim_logo.svg",       alt: "Majid Al Futtaim" },
  { src: "/logos/Sobha_-company-.svg",             alt: "Sobha Realty" },
  { src: "/logos/Saudi-Vision-2030.svg",           alt: "Saudi Vision 2030" },
  { src: "/logos/Al-Rajhi-Bank.svg",               alt: "Al Rajhi Bank" },
  { src: "/logos/First_Abu_Dhabi_Bank_Logo.svg",   alt: "First Abu Dhabi Bank" },
  { src: "/logos/Saudi-Esports-Federation.svg",    alt: "Saudi Esports" },
  { src: "/logos/Cartier_logo.svg",                alt: "Cartier" },
  { src: "/logos/adidas.webp",                      alt: "Adidas" },
  { src: "/logos/Etisalat.svg",                    alt: "Etisalat" },
  { src: "/logos/ENOC_DL_logo.svg",               alt: "ENOC" },
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
    title: "الهدايا الترويجية",
    sub: "قطع خاصة · تحمل العلامة · بالطلب",
    img: "/cg-giveaways.webp",
  },
  {
    num: "02",
    title: "القطع المعدنية المخصصة",
    sub: "حوامل أقلام · ساعات · دروع",
    img: "/cg-metal-v2.webp",
  },
  {
    num: "03",
    title: "اليوم الوطني والعيد",
    sub: "الإمارات · اليوم الوطني السعودي · رمضان · العيد",
    img: "/cg-national-day.webp",
  },
  {
    num: "04",
    title: "هدايا كبار الشخصيات ومجالس الإدارة",
    sub: "بالطلب الخاص · وزارية",
    img: "/cg-vvip-v2.webp",
  },
  {
    num: "05",
    title: "برامج تكريم الموظفين",
    sub: "متدرّجة · بأسماء · تسليم بالجملة",
    img: IMG.sports,
  },
];

const STATS = [
  { num: "+٢٥",     label: "عامًا\nفي صناعة الهدايا" },
  { num: "+١٥ ألف",    label: "عميل\nمؤسسي" },
  { num: "٤٠٬٠٠٠+", label: "قطعة\nمنفَّذة" },
  { num: "٦",       label: "أقسام\nإنتاجية" },
  { num: "٠٪",      label: "إسناد\nخارجي" },
];



const TESTIMONIALS = [
  {
    quote: "لبرنامج هدايا اليوم الوطني كلّفناهم بألفي قطعة كريستال تحمل أسماء فردية. سُلّمت كل قطعة في موعدها ودون خطأ واحد، ولم تحتج أي واحدة إلى استبدال.",
    name: "مدير الشؤون المؤسسية",
    co: "شركة متعددة الجنسيات، دبي",
  },
  {
    quote: "اعتمدنا على كريستال آرك في برنامج هدايا كبار عملائنا ثلاث سنوات متتالية. الجودة تبرّر الفارق في السعر كل مرة.",
    name: "مدير علاقات العملاء",
    co: "بنك استثماري، مركز دبي المالي",
  },
  {
    quote: "في هدايا التقديم الوزارية، التحفّظ والمعيار كلاهما غير قابل للتفاوض. أدركت كريستال آرك ذلك دون أن نقوله.",
    name: "مدير المراسم",
    co: "جهة حكومية، أبوظبي",
  },
];

const FAQS = [
  {
    q: "ما المناسبات التي تتخصصون فيها؟",
    a: "اليوم الوطني (الإمارات والسعودية والبحرين)، ورمضان والعيد، والمناسبات المؤسسية، وبرامج تقدير العملاء، وتكريم الموظفين، وهدايا الالتحاق بالعمل، وهدايا الفعاليات، والقطع المفردة لكبار الشخصيات. ونتعامل مع البرامج السنوية المتكررة والمشاريع المفردة بالكفاءة نفسها.",
  },
  {
    q: "هل يمكن أن تحمل كل هدية اسم مُهدى إليه مختلفًا؟",
    a: "نعم، التخصيص الفردي (الاسم والمسمّى والإدارة والرسالة) متاح على جميع المنتجات. نتولّى إدارة ملف البيانات وترتيب الإنتاج. ترفعون جدول بيانات ونتكفّل بالباقي.",
  },
  {
    q: "ما الحد الأدنى للطلب؟",
    a: "٢٥ قطعة للدفعات القياسية التي تحمل العلامة. أما الهدايا المفردة للإدارة التنفيذية أو مجلس الإدارة فلا حد أدنى لها، ننتج بانتظام قطعًا مفردة لكبار الشخصيات. أخبرونا باحتياجكم ونقترح الأنسب من حيث التكلفة.",
  },
  {
    q: "هل تصمّمون الهدية أم نحتاج إلى تقديم تصوّر جاهز؟",
    a: "كلاهما ممكن. إن كان لديكم دليل هوية واتجاه للمنتج صمّمنا انطلاقًا منه. وإن كنتم تبدأون من الصفر قدّمنا ٣ إلى ٤ توجّهات مبنية على الميزانية والمناسبة وقيم علامتكم. والتصميم مشمول دون تكلفة.",
  },
  {
    q: "هل يمكن مطابقة ألوان علامتنا وشعارها بدقة؟",
    a: "نعم. مطابقة ألوان بانتون على جميع التشطيبات الخارجية، وحفر ليزري وطباعة بالأشعة فوق البنفسجية للشعارات، ورقائق حرارية للتطبيقات الفاخرة. ونحتاج إلى مستند مواصفات هويتكم في مرحلة الطلب.",
  },
  {
    q: "هل التغليف يُطلب بشكل منفصل؟",
    a: "فريق التغليف لدينا يصمّم علبة الهدية وينتجها جنبًا إلى جنب مع الهدية نفسها، بما يضمن تناسب المقاسات والانسجام البصري ومعيار الجودة نفسه. وتشمل الخيارات الكرتون المقوّى واللف بالجلد والعلب المكسوّة بالقماش، مع الطباعة بالرقائق والحفر الغائر.",
  },
];

const waLink = `https://wa.me/971565364384?text=${encodeURIComponent(
  "مرحبًا كريستال آرك، أرغب في الاستفسار عن الهدايا المؤسسية لمناسبة قادمة. يرجى تزويدي بالتفاصيل."
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
  title: "هدايا شركات فاخرة",
  description:
    "هدايا شركات فاخرة تحمل علامتكم، كريستال ومعدن وخامات مركّبة، بتصنيع كامل في الإمارات. هدايا لكبار الشخصيات ولليوم الوطني ورمضان والعيد وبرامج التكريم.",
  keywords: [
    "هدايا مؤسسية الرياض",
    "هدايا اليوم الوطني السعودي",
    "هدايا رمضان والعيد للشركات",
    "هدايا فاخرة للشركات الخليج",
    "هدايا تحمل شعار الشركة",
    "هدايا كبار الشخصيات",
  ],
  openGraph: {
    url: "https://www.crystalarc.net/ar/products/corporate-gifts",
    title: "هدايا مؤسسية فاخرة | كريستال آرك",
    description:
      "هدايا مؤسسية فاخرة تحمل علامتكم، بتصنيع كامل في الإمارات وتوريد إلى دول الخليج.",
    images: [{ url: ogUrl("/cg-banner.webp"), width: 1200, height: 630, alt: "هدايا مؤسسية من كريستال آرك" }],
  },
  alternates: alternatesFor("ar", "/products/corporate-gifts"),
};

const productJsonLd = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "هدايا مؤسسية فاخرة في دبي",
  description: "هدايا مؤسسية فاخرة تحمل علامتكم، بتصنيع كامل في دبي. هدايا ترويجية، وقطع معدنية مخصصة، ومجموعات اليوم الوطني، وأعمال كبار الشخصيات بالطلب.",
  brand: { "@type": "Brand", name: "Crystal Arc" },
  manufacturer: { "@type": "Organization", name: "Crystal Arc", url: "https://www.crystalarc.net" },
  image: "https://www.crystalarc.net/cg-banner.webp",
  url: "https://www.crystalarc.net/ar/products/corporate-gifts",
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
    { "@type": "ListItem", position: 1, name: "الرئيسية", item: "https://www.crystalarc.net/ar" },
    { "@type": "ListItem", position: 2, name: "المنتجات", item: "https://www.crystalarc.net/ar/products" },
    { "@type": "ListItem", position: 3, name: "الهدايا المؤسسية", item: "https://www.crystalarc.net/ar/products/corporate-gifts" },
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
              <Link prefetch={false} href="/ar/products" style={{ color: "var(--color-taupe)", textDecoration: "none" }}>المنتجات</Link>
              <span style={{ color: "var(--color-muted)" }}>›</span>
              <span style={{ color: "var(--color-gold)" }}>الهدايا المؤسسية</span>
            </nav>
          </Reveal>

          <Reveal delay={80} immediate>
            <div className="eyebrow" style={{ marginBottom: "20px" }}>
              هدايا شركات فاخرة وهدايا دعائية، دبي، الإمارات
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
            <SplitText text="هدايا الشركات" delay={140} stagger={0.08} duration={0.9} style={{ display: "block" }} />
            <SplitText text="في الإمارات" delay={300} stagger={0.08} duration={0.9} style={{ display: "block" }} />
          </h1>

          <Reveal delay={200} immediate>
            <p style={{ fontSize: "15px", color: "var(--color-i60)", lineHeight: 1.9, maxWidth: "360px", marginBottom: "40px" }}>
              هدايا فاخرة تحمل علامتكم، لإدارات المشتريات والتسويق والموارد البشرية
              في أنحاء الخليج. قطع من الكريستال والمعدن والخامات المركّبة،              يحتفظ بها الناس فعلًا.
            </p>
          </Reveal>

          <Reveal delay={260} immediate>
            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", marginBottom: "52px" }}>
              <MagneticButton><a href="#enquiry" className="btn-red">اطلب عرضًا</a></MagneticButton>
              <MagneticButton><a href={waLink} className="btn-ghost" target="_blank" rel="noopener noreferrer">راسلنا على واتساب</a></MagneticButton>
            </div>
          </Reveal>

          <Reveal delay={320} immediate>
            <div style={{ display: "flex", gap: "24px", alignItems: "center" }}>
              <div style={{ width: "32px", height: "1px", background: "var(--color-gold)", opacity: 0.4 }} />
              <p style={{ fontSize: "11px", color: "var(--color-muted)", letterSpacing: "0.06em" }}>
                طيران الإمارات · موانئ دبي العالمية · إعمار · أدنوك
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
            alt="قطعة هدية مؤسسية من كريستال آرك"
            width={1900}
            height={1419}
            fetchPriority="high"
            decoding="async"
            style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }}
          />
        </div>
      </section>

      <IndustriesStrip locale="ar" />


      {/* â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
          2 · WHAT WE GIFT — occasion grid
      â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â• */}
      <section style={{ background: "var(--color-bg)", borderTop: "1px solid rgba(26,21,18,0.08)" }}>

        <div className="con" style={{ paddingTop: "72px", paddingBottom: "40px" }}>
          <Reveal>
            <div className="sec-flex-between">
              <div>
                <div className="eyebrow" style={{ marginBottom: "14px" }}>ما الذي نصنعه</div>
                <h2
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "clamp(2.4rem,3.8vw,4rem)",
                    fontWeight: 300,
                    color: "var(--color-ivory)",
                    lineHeight: 1.05,
                  }}
                >
                  خمس فئات من الهدايا.
                  <em style={{ color: "var(--color-gold)", fontStyle: "italic", display: "block" }}>
                    معيار واحد.
                  </em>
                </h2>
              </div>
              <p className="right-text" style={{ fontSize: "14px", color: "var(--color-taupe)", maxWidth: "280px", lineHeight: 1.8, textAlign: "right" }}>
                جميعها تُصمَّم وتُصنع وتُشطَّب داخليًا في منشأتنا بالإمارات.
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
          <a href="#enquiry" className="btn-red" style={{ textDecoration: "none" }}>اطلب هدايا مؤسسية</a>
          <a href={waLink} className="btn-ghost" target="_blank" rel="noopener noreferrer" style={{ fontSize: "10px" }}>استفسر عبر واتساب</a>
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
        <img src={IMG.banner} alt="هدية مؤسسية من كريستال آرك" style={{ ...BG(IMG.banner, 0.52), objectPosition: "center 40%" }}  loading="lazy" decoding="async"/>
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
              «الهدية الصحيحة لا تُنسى. تبقى على مكتبه. ويعرضها على ضيوفه. وتعمل لصالح علامتكم كل يوم لسنوات.»
            </p>
          </Reveal>
          <Reveal delay={160}>
            <p style={{ marginTop: "16px", fontSize: "10px", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--color-gold)", opacity: 0.7 }}>
              Crystal Arc · منشأة التصنيع في الإمارات
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
            <img src="/cg-factory-grinding.webp" alt="حرفيّ من كريستال آرك أثناء العمل في منشأتنا بالإمارات" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", display: "block", filter: "brightness(0.55) saturate(0.8)" }}  loading="lazy" decoding="async"/>
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
              <div style={{ fontFamily: "var(--font-display)", fontSize: "2.6rem", fontWeight: 300, color: "var(--color-gold)", lineHeight: 1, marginBottom: "6px" }}>٢٠٠٬٠٠٠</div>
              <div style={{ fontSize: "9px", letterSpacing: "0.24em", textTransform: "uppercase", color: "var(--color-taupe)", fontWeight: 600 }}>قدم مربعة · منشأة التصنيع في الإمارات</div>
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
              <div className="eyebrow" style={{ marginBottom: "18px" }}>لماذا كريستال آرك</div>
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
                إدارة كاملة للهدايا،                <em style={{ color: "var(--color-gold)", fontStyle: "italic", display: "block" }}>
                  من الطلب إلى التسليم.
                </em>
              </h2>
            </Reveal>

            {[
              {
                n: "01",
                t: "تخصيص باسم كل مُهدى إليه",
                b: "يمكن أن تحمل كل وحدة اسمًا أو مسمّى أو رسالة مختلفة. ارفعوا جدول بيانات، ونتولّى الترتيب والحفر والتعبئة لكل وحدة.",
              },
              {
                n: "02",
                t: "برامج هدايا متدرّجة",
                b: "موظف، ومدير، وتنفيذي، ومجلس إدارة، ننتج المستويات الأربعة من طلب واحد بلغة تصميم موحّدة وجودة خامات متدرّجة.",
              },
              {
                n: "03",
                t: "جاهز لفريق المشتريات",
                b: "اتفاقيات عدم إفصاح، ومستندات أوامر الشراء، وجدولة التسليم، وتغليف لكل وحدة، كلها معتادة لدينا. بلا مفاجآت لفريق المشتريات أو الإدارة.",
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
                <div className="eyebrow" style={{ marginBottom: "14px" }}>الخامات التي نعمل بها</div>
                <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2.2rem,3.5vw,3.4rem)", fontWeight: 300, color: "var(--color-ivory)", lineHeight: 1.1 }}>
                  كل الخامات.<br/><em style={{ color: "var(--color-gold)" }}>سقف واحد.</em>
                </h2>
              </div>
            </Reveal>
            <Reveal delay={80}>
              <div>
                <p style={{ fontSize: "14px", color: "var(--color-taupe)", lineHeight: 1.85, marginBottom: "28px" }}>
                  نصنع بالكريستال والمعدن والراتنج والخشب وتركيباتها جميعًا، داخليًا بالكامل في منشأتنا بالإمارات. أخبرونا بالمناسبة ونقترح الخامة والتشطيب الأنسب.
                </p>
                <a href="#enquiry" className="btn-red" style={{ textDecoration: "none" }}>استشارة في الخامات</a>
              </div>
            </Reveal>
          </div>

          {/* 5-photo material strip */}
          <div className="sec-5-grid" style={{ gap: "3px" }}>
            {([
              { name: "الكريستال",        desc: "نقاء بصري · حفر ليزري ثلاثي الأبعاد",     img: "/cg-mat-crystal.webp",     badge: null },
              { name: "المعدن",          desc: "نحاس · فولاذ · زنك · طلاء مخصص",     img: "/cg-mat-metal.webp",    badge: null },
              { name: "الراتنج",          desc: "صبّ بالألوان الكاملة · أشكال بلا حدود",      img: "/cg-mat-resin.webp",       badge: "الأكثر طلبًا" },
              { name: "الخشب",           desc: "بلوط طبيعي · جوز · محفور",           img: "/cg-mat-wood.webp",        badge: null },
              { name: "المركّب والهجين", desc: "ادمجوا أي خامات، ونتكفّل نحن بالباقي.",  img: "/cg-mat-mixed.webp",                                                                           badge: null },
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
                جميع الخامات تُصمَّم وتُصنع وتُشطَّب حصريًا في منشأتنا بالإمارات. دون أي إسناد خارجي.
              </p>
            </div>
          </Reveal>

        </div>
      </section>



      <section style={{ background: "var(--color-bg)", borderTop: "1px solid rgba(26,21,18,0.09)" }}>

        <div className="con mob-pad" style={{ paddingTop: "100px", paddingBottom: "56px" }}>
          <Reveal>
            <div className="eyebrow" style={{ marginBottom: "16px" }}>آلية العمل</div>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(2.2rem,4vw,4.2rem)",
                fontWeight: 300,
                color: "var(--color-ivory)",
                lineHeight: 1.05,
              }}
            >
              طلبكم يوم الاثنين.
              <em style={{ color: "var(--color-gold)", fontStyle: "italic", display: "block" }}>
                والهدايا جاهزة يوم الجمعة.
              </em>
            </h2>
          </Reveal>
        </div>

        {/* 4 equal photo cards */}
        <div className="sec-4-grid" style={{ gap: "2px" }}>
          {[
            {
              n: "01", t: "اشرحوا برنامجكم",
              b: "المناسبة والكمية ونطاق الميزانية ومستويات المُهدى إليهم والموعد، شاركوها عبر واتساب أو النموذج. ونعود إليكم خلال ساعتين بتوجّهات تصميمية وأسعار استرشادية.",
              img: "/proc-cg-01.webp",
              p1: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2",
              p2: "",
            },
            {
              n: "02", t: "التصميم والاعتماد",
              b: "ننتج نماذج ثلاثية الأبعاد وعيّنة فعلية للدفعات التي تتجاوز ٥٠ وحدة. وتعتمدون القطعة والتغليف وصيغة التخصيص، كتابةً، قبل صنع وحدة واحدة.",
              img: "/proc-cg-02.webp",
              p1: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z",
              p2: "",
            },
            {
              n: "03", t: "الصنع والتخصيص",
              b: "التصميم والإنتاج والحفر بالليزر والتغليف، كلها داخليًا في منشأتنا بالإمارات. بلا أطراف خارجية. ويُعالَج ملف الأسماء وحدةً وحدة، دون أخطاء.",
              img: "/proc-cg-03.webp",
              p1: "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z",
              p2: "M15 12a3 3 0 11-6 0 3 3 0 016 0z",
            },
            {
              n: "04", t: "تُسلَّم جاهزة للإهداء",
              b: "كل هدية تُعبّأ وتُوسم على حدة وتصل جاهزة للتقديم، دون أي تجميع. وتسليم متتبَّع في الإمارات والخليج، مع فحص كل وحدة قبل الشحن.",
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
              <a href="#enquiry" className="btn-red" style={{ textDecoration: "none" }}>اطلب عرضًا</a>
              <a href={waLink} className="btn-ghost" target="_blank" rel="noopener noreferrer">تواصل عبر واتساب</a>
            </div>
          </Reveal>
        </div>


      {/* â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
          7 · TRUSTED BY — animated ticker
      â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â• */}
      <section style={{ background: "var(--color-s1)", borderTop: "1px solid rgba(26,21,18,0.09)", borderBottom: "1px solid rgba(26,21,18,0.09)", overflow: "hidden", padding: "52px 0" }}>
        <Reveal>
          <div className="eyebrow" style={{ textAlign: "center", marginBottom: "36px" }}>
            موضع ثقة أبرز الجهات في المنطقة
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
            <div className="eyebrow" style={{ marginBottom: "40px" }}>ماذا يقول عملاؤنا</div>
          </Reveal>
          <Reveal delay={60}>
            <TestimonialRotator items={TESTIMONIALS} locale="ar" />
          </Reveal>
        </div>

        {/* Hall of Fame mini-reel */}
        <div style={{ position: "relative", zIndex: 2, borderTop: "1px solid rgba(26,21,18,0.10)", paddingTop: "56px", paddingBottom: "56px" }}>
          <div className="con" style={{ marginBottom: "28px" }}>
            <div className="eyebrow" style={{ fontSize: "10px", letterSpacing: "0.22em" }}>قاعة المشاهير &nbsp;&middot;&nbsp; تسلّمها ألمع الأسماء</div>
          </div>
          <div className="hof-mini-wrap">
            <div className="hof-mini-track" style={{ "--run": 7546 } as React.CSSProperties}>
              {[...HOF_PHOTOS, ...HOF_PHOTOS].map((p, i) => (
                <div key={i} className="hof-mini-tile">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={p.src} alt={p.arLabel}  loading="lazy" decoding="async"/>
                  <div className="hof-mini-caption">
                    <div style={{ fontSize: "9px", letterSpacing: "0.16em", textTransform: "uppercase", color: "rgba(255,255,255,0.85)", fontWeight: 600 }}>{p.arLabel}</div>
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
                    alt="غلاف دليل الهدايا من كريستال آرك"
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
                        مؤسسية<br />الهدايا
                      </h3>
                      <div style={{ fontSize: "8px", letterSpacing: "0.22em", textTransform: "uppercase", color: "var(--color-taupe)" }}>
                        دليل الهدايا · 2025
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
                <div className="eyebrow" style={{ marginBottom: "20px" }}>دليل الهدايا</div>
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
                  كل هدية نصنعها،<br />
                  <em style={{ color: "var(--color-gold)", fontStyle: "italic" }}>في مكان واحد.</em>
                </h2>
                <p style={{ fontSize: "14px", color: "var(--color-taupe)", lineHeight: 1.85, marginBottom: "24px" }}>
                  فئات المناسبات، وخيارات التخصيص، ومجموعة التغليف، وأسعار استرشادية من ٢٥ عامًا من برامج الهدايا.
                </p>
                {["دليل المناسبات وفئات الهدايا", "خيارات التخصيص والحفر", "دليل خامات التغليف", "أسعار استرشادية حسب المستوى"].map((item) => (
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
                  التحميل مجاني.
                </p>
                <p style={{ fontSize: "12px", color: "var(--color-taupe)", lineHeight: 1.7, marginBottom: "28px" }}>
                  أدخلوا بياناتكم ونرسل الملف إلى بريدكم مباشرة.
                </p>
                <BrochureDownload locale="ar" />
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
                <div className="eyebrow" style={{ marginBottom: "20px" }}>ابدأ برنامج هداياكم</div>
                <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2.4rem,3.8vw,4rem)", fontWeight: 300, color: "#EDE8DC", lineHeight: 1.05, marginBottom: "24px" }}>
                  أخبرونا عن<br />
                  <em style={{ color: "var(--color-gold)", fontStyle: "italic" }}>هداياكم.</em>
                </h2>
                <p style={{ fontSize: "14px", color: "rgba(237,232,220,0.62)", lineHeight: 1.9, marginBottom: "44px", maxWidth: "340px" }}>
                  شاركونا المناسبة والكمية والميزانية. نردّ خلال ساعتين بتوجّهات تصميمية وأسعار استرشادية وجدول إنتاج، دون تكلفة ودون التزام.
                </p>
                {[
                  { label: "WhatsApp", val: "+971 56 536 4384",   href: waLink },
                  { label: "البريد الإلكتروني",    val: "info@crystalarc.net", href: "mailto:info@crystalarc.net" },
                ].map((c) => (
                  <div key={c.label} style={{ display: "grid", gridTemplateColumns: "72px 1fr", gap: "16px", padding: "14px 0", borderBottom: "1px solid rgba(237,232,220,0.1)", alignItems: "center" }}>
                    <span style={{ fontSize: "10px", letterSpacing: "0.18em", textTransform: "uppercase", color: "rgba(237,232,220,0.5)", fontWeight: 600 }}>{c.label}</span>
                    <a href={c.href} target={c.href.startsWith("http") ? "_blank" : undefined} rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined} style={{ fontSize: "15px", color: "#EDE8DC", textDecoration: "none" }}>{c.val}</a>
                  </div>
                ))}
              <div style={{ marginTop: "28px", border: "1px solid rgba(201,149,74,0.28)", background: "rgba(201,149,74,0.06)", padding: "20px 22px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "10px" }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--color-gold)" strokeWidth="2"><path d="M21 10c0 7-9 12-9 12s-9-5-9-12a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                  <span style={{ fontSize: "10px", letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--color-gold)", fontWeight: 600 }}>المقر الرئيسي، دبي</span>
                </div>
                <a href="https://maps.google.com/?q=Crystal+Arc+Dubai" target="_blank" rel="noopener noreferrer" style={{ fontSize: "14px", color: "#EDE8DC", textDecoration: "none", lineHeight: 1.7, display: "block" }}>
                  ١٩٠١ برج الموسى ١، مركز التجارة الأول<br />
                  دبي، الإمارات العربية المتحدة<br />
                  +971 4 347 9191
                </a>
              <p style={{ fontSize: "12px", color: "rgba(237,232,220,0.45)", marginTop: "10px", fontStyle: "italic" }}>جولات المصنع متاحة عند الطلب.</p>
              </div>
              </div>
            </Reveal>

            <Reveal from="right" delay={120}>
              <div className="enquiry-panel">
                <EnquiryForm locale="ar" />
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
                <div className="eyebrow" style={{ marginBottom: "16px" }}>أسئلة</div>
                <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2rem,2.8vw,2.8rem)", fontWeight: 300, color: "var(--color-ivory)", lineHeight: 1.15, marginBottom: "20px" }}>
                  الأسئلة الشائعة
                </h2>
                <p style={{ fontSize: "13px", color: "var(--color-taupe)", lineHeight: 1.8, marginBottom: "24px" }}>
                  لم تجدوا إجابتكم؟ نردّ على واتساب خلال دقائق.
                </p>
                <a href={waLink} className="btn-ghost" target="_blank" rel="noopener noreferrer" style={{ fontSize: "10px", display: "inline-flex" }}>
                  استفسر عبر واتساب
                </a>
              </div>
            </Reveal>
            <FAQAccordion faqs={FAQS} />
          </div>
        </div>
      </section>


      {/* تصفَّح فئات أخرى */}
      <section className="mob-pad" style={{ background: "var(--color-s1)", borderTop: "1px solid rgba(26,21,18,0.10)", padding: "88px 0" }}>
        <div className="con">
          <Reveal>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "52px" }}>
              <div>
                <div className="eyebrow" style={{ marginBottom: "12px" }}>تصفَّح المزيد</div>
                <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2rem,3vw,3rem)", fontWeight: 300, color: "var(--color-ivory)", lineHeight: 1.1 }}>
                  فئات منتجات أخرى
                </h2>
              </div>
              <Link prefetch={false} href="/ar/products" style={{ fontSize: "10px", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--color-taupe)", textDecoration: "none" }}>
                عرض الكل ←
              </Link>
            </div>
          </Reveal>
          <div className="related-products-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, minmax(0, 1fr))", gap: "2px" }}>
            {related.map((p, i) => (
              <Reveal key={p.slug} delay={i * 80}>
                <Link prefetch={false} href={`/ar/products/${p.slug}`} style={{ display: "block", position: "relative", overflow: "hidden", textDecoration: "none", aspectRatio: "4/3" }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={p.categoryImage} alt={AR_TITLE[p.slug] ?? p.title} style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", filter: "brightness(0.8) saturate(0.95)" }}  loading="lazy" decoding="async"/>
                  <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(12,10,7,0.94) 0%, rgba(12,10,7,0.6) 34%, transparent 68%)" }} />
                  <div style={{ position: "absolute", bottom: "28px", left: "28px", right: "28px" }}>
                    <div style={{ fontSize: "9px", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--color-gold)", marginBottom: "10px", opacity: 0.75 }}>{AR_CAT[p.category] ?? p.category}</div>
                    <div style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.2rem, 1.8vw, 1.7rem)", fontWeight: 400, color: "#EDE8DC", lineHeight: 1.2, marginBottom: "14px" }}>{AR_TITLE[p.slug] ?? p.title}</div>
                    <span style={{ fontSize: "9px", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--color-gold)", opacity: 0.7 }}>تصفَّح الفئة ←</span>
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
