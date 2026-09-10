import type { Metadata } from "next";
import { ogUrl } from "@/lib/og";
import { alternatesFor } from "@/lib/i18n";
import Reveal from "@/components/Reveal";
import GlbScene from "@/components/GlbScene";
import BrochureDownload from "@/components/products/BrochureDownload";
import EnquiryForm from "@/components/products/EnquiryForm";
import FAQAccordion from "@/components/products/FAQAccordion";

export const metadata: Metadata = {
  title: "المقتنيات والديكور",
  description:
    "قطع كريستال مصبوبة بأسلوب الشمع المفقود في منشأتنا بالإمارات، خمسة وعشرون يومًا في الفرن لكل حمولة، وقالب يُتلف مع كل قطعة، وإصدارات محدودة مرقّمة.",
  keywords: [
    "مقتنيات كريستال فاخرة",
    "تحف ديكور الرياض",
    "قطع كريستال بالطلب",
    "ديكور فنادق فاخرة",
    "الصب بالشمع المفقود",
    "تحف فنية للشركات",
  ],
  openGraph: {
    url: "https://www.crystalarc.net/ar/products/home-decor",
    title: "المقتنيات والديكور | كريستال آرك",
    description: "قطع كريستال بأسلوب الصبّ بالشمع المفقود، بإصدارات محدودة وصناعة يدوية كاملة.",
    images: [{ url: ogUrl("/hd-hero.webp"), width: 1200, height: 630, alt: "قطعة ديكور من كريستال آرك" }],
  },
  alternates: alternatesFor("ar", "/products/home-decor"),
};

const waLink = `https://wa.me/971565364384?text=${encodeURIComponent(
  "مرحبًا كريستال آرك، أرغب في الاستفسار عن قطعة من مجموعة المقتنيات والديكور."
)}`;

/* Coloured lost-wax sculpture */
const SCULPTURE = [
  { src: "/hd-s01.webp", alt: "منحوتة كريستال لوجه يستند إلى كفّين، بالبنفسجي والكهرماني" },
  { src: "/hd-s02.webp", alt: "منحوتة كريستال مجرّدة لثنيات منسابة بالبنفسجي والوردي" },
  { src: "/hd-s03.webp", alt: "لبؤة مستلقية منحوتة في كريستال كهرماني" },
  { src: "/hd-s04.webp", alt: "منحوتة حيوان قافز من كريستال أخضر وكهرماني" },
  { src: "/hd-s05.webp", alt: "منحوتة قرص من كريستال كهرماني على قاعدة مصقولة" },
  { src: "/hd-s06.webp", alt: "مشهد طبيعي من الكريستال بغزلان، مصبوب كلوحة واحدة" },
];

/* Vessels — coloured, then clear and frosted relief */
const VESSELS = [
  { src: "/hd-v01.webp", alt: "مزهرية كريستال خضراء بسطح أوراق منحوت وزهرة لوتس" },
  { src: "/hd-v02.webp", alt: "مزهرية كريستال بزهور توليب منحوتة بالبرقوقي الغامق والكهرماني" },
  { src: "/hd-v03.webp", alt: "مزهرية كريستال بزهور توليب منحوتة بالوردي الفاتح والأخضر" },
  { src: "/hd-v04.webp", alt: "مزهرية كريستال بسطح فسيفسائي بنفسجي" },
  { src: "/hd-v05.webp", alt: "وعاء كريستال صغير بالأزرق والكهرماني" },
  { src: "/hd-v06.webp", alt: "مزهرية كريستال شفافة بتفاصيل نقش مصنفر" },
  { src: "/hd-v07.webp", alt: "مزهرية كريستال شفافة بسطح مصنفر منحوت" },
  { src: "/hd-v08.webp", alt: "مزهرية كريستال شفافة بنقش نباتي مصنفر" },
  { src: "/hd-v09.webp", alt: "مزهرية كريستال شفافة بنقش مصنفر كثيف" },
  { src: "/hd-v10.webp", alt: "مزهرية كريستال شفافة بنقش مصنفر على طاولة رخامية" },
  { src: "/hd-v11.webp", alt: "مزهرية كريستال شفافة بألواح مصنفرة منحوتة" },
];

const STEPS = [
  {
    num: "01",
    label: "القالب",
    img: "/hd-process-1.webp",
    alt: "كريستال منصهر يُشكَّل في القالب تحت المكبس",
    text:
      "يُنحت الشكل بالشمع ثم يُغلَّف. وعند حرق القالب يسيل الشمع ويختفي، ومن هنا جاء اسم الشمع المفقود. ويبقى تجويف بشكل القطعة تمامًا، ولا يوجد إلا مرة واحدة.",
  },
  {
    num: "02",
    label: "النار",
    img: "/hd-process-3.webp",
    alt: "فوهة الفرن متوهّجة عند حرارة التشغيل",
    text:
      "يُعبّأ الكريستال في القالب ويُغلق الفرن. وعلى مدى خمسة وعشرين يومًا ترتفع الحرارة، ثم تثبت، ثم تبرّد، ببطء يكفي ألّا تتشقّق القطعة. واللون لا يُضاف بعد ذلك، بل يندمج في الكريستال داخل النار.",
  },
  {
    num: "03",
    label: "اليد",
    img: "/hd-process-2.webp",
    alt: "حرفيّ يشطّب قطعة كريستال باللهب على الطاولة",
    text:
      "يُكسر القالب لإخراج القطعة، ولا يُستخدم ثانية. وما يخرج يكون خامًا. وكل سطح بعد ذلك يُجلى ويُصقل ويُشطَّب باليد، على يد من أمضوا سنوات يتعلّمون الحكم عليه بالعين.",
  },
];

const FACTS = [
  { num: "٢٥", sup: " يومًا", label: "في الفرن\nحرقًا وتبريدًا" },
  { num: "٤٥", sup: " يومًا", label: "من الطلب\nإلى القطعة النهائية" },
  { num: "١٠٠", sup: "%", label: "تصنيع داخلي\nمنشأة الإمارات" },
  { num: "١", sup: " من ١", label: "كل قالب\nيُستخدم مرة" },
];

const FAQS = [
  {
    q: "ما الصبّ بالشمع المفقود، ولماذا يستغرق كل هذا الوقت؟",
    a: "يُنحت الشكل بالشمع ويُغلَّف بقالب. وعند حرق القالب يذوب الشمع ويخرج، فيبقى تجويف بشكل القطعة تمامًا. يُعبّأ الكريستال داخله، ثم يعمل الفرن نحو خمسة وعشرين يومًا، يرتفع بالحرارة، ثم يثبّت، ثم يبرّد ببطء. والتبريد هو ما لا يمكن استعجاله: فإنزال حرارة الكريستال بسرعة يشقّه. ومن الطلب إلى القطعة النهائية نحو خمسة وأربعين يومًا.",
  },
  {
    q: "هل كل قطعة فريدة فعلًا؟",
    a: "نعم، بحكم الضرورة. فالقالب يجب أن يُكسر لإخراج القطعة، ولا يمكن استخدامه مرة أخرى. وتُصنع القطع في إصدارات محدودة، وكل واحدة مرقّمة وموقّعة.",
  },
  {
    q: "كيف يتحقّق اللون؟",
    a: "يُدمج في الكريستال أثناء الحرق، ولا يُدهن ولا يُطلى بعده. ولهذا يستقر اللون داخل الخامة ويتبدّل مع الضوء بدل أن يجلس على السطح.",
  },
  {
    q: "كم تبلغ تكلفة القطعة؟",
    a: "السعر عند الطلب. فالحجم والتعقيد واللون تغيّر زمن العمل تغييرًا كبيرًا، لذلك نسعّر كل قطعة على حدة بدل نشر قائمة. أخبرونا بالقطعة التي تهمّكم ونعود إليكم بالرقم.",
  },
  {
    q: "هل يمكنني تكليفكم بقطعة خاصة بي؟",
    a: "نعم. يكلّفنا عملاء خاصون بقطع فريدة وأعمال مخصصة لموقع بعينه، تُصمَّم حول طلبهم. والآلية هي نفسها المتّبعة في مجموعتنا، والفارق أن الشكل يبدأ منكم.",
  },
  {
    q: "هل تعملون مع مصمّمي الديكور ومتاجر التجزئة؟",
    a: "نعم. يعرض شركاء التجزئة والتصميم الداخلي المجموعة بشروط الجملة مع التوريد من دبي إلى العالم. تواصلوا معنا للحصول على كتالوج الجملة.",
  },
  {
    q: "كيف تُغلَّف القطع وتُشحن؟",
    a: "تُفحص كل قطعة يدويًا، ثم تُعبّأ في إسفنج مقصوص على مقاسها وصندوق مصنوع لشكلها تحديدًا قبل أن تغادر المبنى. ونشحن إلى دول الخليج وخارجها، مع تعامل خاص بالبضائع القابلة للكسر في كل شحنة.",
  },
];


/* This page rendered its FAQs to readers but declared none of them — no
   FAQPage, no Product, no BreadcrumbList — while the other three product
   pages carried all three. */
const productJsonLd = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "قطع الكريستال للمنزل والديكور",
  description: "منحوتات ومزهريات وقطع ديكور من الكريستال بتقنية الشمع المفقود، تُصنع يدويًا في دبي.",
  brand: { "@type": "Brand", name: "Crystal Arc" },
  manufacturer: { "@type": "Organization", name: "Crystal Arc", url: "https://www.crystalarc.net" },
  image: "https://www.crystalarc.net/hd-hero.webp",
  url: "https://www.crystalarc.net/ar/products/home-decor",
  offers: {
    "@type": "Offer",
    priceCurrency: "AED",
    priceSpecification: { "@type": "PriceSpecification", priceCurrency: "AED", minPrice: "1" },
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
    { "@type": "ListItem", position: 3, name: "المنزل والديكور", item: "https://www.crystalarc.net/ar/products/home-decor" },
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
        { }
        {/* The banner is 100vw x 78vh below 560px, so its shape is the phone
            window — 0.62 on a Pixel, 0.75 on an iPhone 12. The desktop file is
            2000x917 landscape, which `cover` reduced to a 572-690px centre slice
            stretched up to 2.5x. The -m render is portrait for that frame. */}
        <picture>
          <source media="(max-width: 560px)" srcSet="/hd-hero-m.webp" />
          <img className="hd-hero-img" src="/hd-hero.webp" srcSet="/hd-hero-800.webp 800w, /hd-hero.webp 1600w" sizes="100vw" fetchPriority="high" alt="قطع ديكور من كريستال آرك على طاولة حجرية في ضوء النهار" />
        </picture>
        <div className="hd-hero-scrim" />
        <div className="con" style={{ position: "relative", zIndex: 2, paddingBottom: "clamp(56px, 8vw, 110px)", paddingTop: "160px" }}>
          <div className="eyebrow" style={{ marginBottom: "22px", color: "#D8B65E" }}>المقتنيات والديكور</div>
          <h1
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2.8rem, 5.6vw, 6rem)",
              fontWeight: 300,
              color: "#F7F2EB",
              lineHeight: 1.03,
              letterSpacing: "-0.01em",
              marginBottom: "26px",
              maxWidth: "16ch",
            }}
          >
            أشياء من ضوء،<br />
            <em style={{ fontStyle: "italic", color: "#E4C57A" }}>مصنوعة باليد بالكامل.</em>
          </h1>
          <p style={{ fontSize: "clamp(14px, 1.35vw, 16.5px)", color: "rgba(247,242,235,0.82)", lineHeight: 1.85, maxWidth: "540px" }}>
            منحوتات وأوعية من الكريستال بتقنية الشمع المفقود، تُصبّ وتُحرق وتُشطَّب بالكامل في منشأتنا بالإمارات.
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
                <div className="eyebrow" style={{ marginBottom: "22px" }}>المجموعة</div>
                <h2
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "clamp(2rem, 3.4vw, 3.5rem)",
                    fontWeight: 300,
                    color: "var(--color-ivory)",
                    lineHeight: 1.12,
                    letterSpacing: "-0.01em",
                  }}
                >
                  طريقة من القِدَم<br />ألّا يكون فيها أي اختصار.
                </h2>
              </div>
            </Reveal>
            <Reveal delay={120}>
              <div>
                <p style={{ fontSize: "clamp(14.5px, 1.25vw, 16px)", color: "var(--color-i60)", lineHeight: 2.0, marginBottom: "26px" }}>
                  الصبّ بالشمع المفقود هو الطريقة التي صُنعت بها هذه القطع دائمًا. يُنحت الشكل ويُغلَّف ويُحرق حتى يزول الشمع ويحلّ الكريستال مكانه. ويعمل الفرن خمسة وعشرين يومًا. ثم يُكسر القالب لتحرير القطعة، ويُشطَّب كل سطح باليد.
                </p>
                <p style={{ fontSize: "clamp(14.5px, 1.25vw, 16px)", color: "var(--color-i60)", lineHeight: 2.0, marginBottom: "26px" }}>
                  نملك العملية كاملة، التصميم والقوالب والأفران والجلي والصقل والفحص، تحت سقف واحد في منشأتنا بالإمارات. ولا يُشطِّب أحد غيرنا أي قطعة في هذه المجموعة.
                </p>
                <div className="gold-line" style={{ margin: "30px 0" }} />
                <p style={{ fontSize: "13px", color: "var(--color-taupe)", lineHeight: 1.9, fontStyle: "italic" }}>
                  تُصنع القطع في إصدارات محدودة، مرقّمة وموقّعة. والسعر عند الطلب.
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
          <img src="/hd-feature-equine.webp" alt="رأس حصان منحوت في كريستال كهرماني في ضوء النهار" loading="lazy" />
        </div>
        <Reveal from="right">
          <div className="hd-split-copy">
            <div className="eyebrow" style={{ marginBottom: "20px" }}>المنحوتات</div>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(1.9rem, 3vw, 3.1rem)",
                fontWeight: 300,
                fontStyle: "italic",
                color: "var(--color-ivory)",
                lineHeight: 1.14,
                marginBottom: "24px",
              }}
            >
              لون يسكن<br />داخل الكريستال.
            </h2>
            <p style={{ fontSize: "15px", color: "var(--color-i60)", lineHeight: 2.0, maxWidth: "480px" }}>
              لأن اللون يندمج في النار بدل أن يُوضع بعدها، فهو يستقر داخل جسد القطعة. تحرّكوا حولها فتتغيّر، الكهرماني يعمّق إلى صدئي، والأخضر يميل إلى ذهبي، كلما وجد الضوء مسارًا مختلفًا عبرها.
            </p>
          </div>
        </Reveal>
      </section>

      <section className="mob-pad" style={{ background: "var(--color-bg)", padding: "clamp(64px, 8vw, 110px) 0" }}>
        <div className="con">
          <div className="hd-grid">
            {SCULPTURE.map((p, i) => (
              <Reveal key={p.src} delay={(i % 3) * 90}>
                <figure className="hd-card">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={p.src} alt={p.alt} loading="lazy" />
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>


      {/* ══════════════════════════════════════════════
          Vessels — feature + grid
      ══════════════════════════════════════════════ */}
      <section className="hd-split hd-split--rev" style={{ background: "var(--color-s1)", borderTop: "1px solid rgba(26,21,18,0.08)" }}>
        <div className="hd-split-img">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/hd-feature-leaf.webp" alt="مزهرية كريستال خضراء بسطح أوراق منحوت" loading="lazy" />
        </div>
        <Reveal from="left">
          <div className="hd-split-copy">
            <div className="eyebrow" style={{ marginBottom: "20px" }}>الأوعية</div>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(1.9rem, 3vw, 3.1rem)",
                fontWeight: 300,
                fontStyle: "italic",
                color: "var(--color-ivory)",
                lineHeight: 1.14,
                marginBottom: "24px",
              }}
            >
              أوعية تحمل<br />نقشها الخاص.
            </h2>
            <p style={{ fontSize: "15px", color: "var(--color-i60)", lineHeight: 2.0, maxWidth: "480px" }}>
              الأوراق والأزهار والخيول ليست محفورة في السطح لاحقًا، بل جزء من الشكل الذي صُبّ فيه الكريستال. بعضها يُترك شفافًا ومصنفرًا ليُقرأ النقش كظل، وبعضها يحمل اللون عبر جدار الوعاء كاملًا.
            </p>
          </div>
        </Reveal>
      </section>

      <section className="mob-pad" style={{ background: "var(--color-bg)", padding: "clamp(64px, 8vw, 110px) 0" }}>
        <div className="con">
          <div className="hd-grid">
            {VESSELS.map((p, i) => (
              <Reveal key={p.src} delay={(i % 3) * 90}>
                <figure className="hd-card">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={p.src} alt={p.alt} loading="lazy" />
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>


      {/* ══════════════════════════════════════════════
          Craft know-how — the three steps
      ══════════════════════════════════════════════ */}
      <section className="mob-pad" style={{ background: "var(--color-s1)", padding: "clamp(84px, 10vw, 140px) 0", borderTop: "1px solid rgba(26,21,18,0.08)" }}>
        <div className="con">
          <Reveal>
            <div style={{ maxWidth: "620px", marginBottom: "clamp(48px, 6vw, 84px)" }}>
              <div className="eyebrow" style={{ marginBottom: "20px" }}>الدراية الحرفية</div>
              <h2
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(2rem, 3.4vw, 3.4rem)",
                  fontWeight: 300,
                  color: "var(--color-ivory)",
                  lineHeight: 1.12,
                  marginBottom: "22px",
                }}
              >
                ثلاث مراحل.<br />ولا واحدة منها سريعة.
              </h2>
              <p style={{ fontSize: "15px", color: "var(--color-i60)", lineHeight: 2.0 }}>
                لم يتغيّر هذا التسلسل منذ زمن بعيد، ولا توجد منه نسخة أسرع.
              </p>
            </div>
          </Reveal>

          <div className="hd-steps">
            {STEPS.map((s, i) => (
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
            ))}
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
          <img src="/hd-craftsman.webp" alt="حرفيّ من كريستال آرك يشطّب قطعة على عجلة الجلي" loading="lazy" />
        </div>
        <Reveal from="right">
          <div className="hd-split-copy">
            <div className="eyebrow" style={{ marginBottom: "24px" }}>اليد</div>
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
                maxWidth: "16ch",
              }}
            >
              الفرن هو من يقرّر متى تكتمل القطعة. لا التقويم.
            </blockquote>
            <div className="gold-line" style={{ margin: "0 0 26px" }} />
            <p style={{ fontSize: "14.5px", color: "var(--color-i60)", lineHeight: 2.0, maxWidth: "460px" }}>
              تقدير متى برد الكريستال بما يكفي للمسه، وأين ما زال السطح يحتاج جليًا، وهل تغادر القطعة المبنى أصلًا، لا يُقاس شيء من ذلك بجهاز. بل يقرّره من أمضوا سنوات يتعلّمون قراءته، ويتخذون هذا القرار في كل قطعة نشحنها.
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
              {FACTS.map((f) => (
                <div key={f.label} className="hd-fact">
                  <div className="hd-fact-num">
                    {f.num}<span style={{ fontSize: "0.42em", letterSpacing: "0.02em" }}>{f.sup}</span>
                  </div>
                  <div style={{ marginTop: "14px", fontSize: "10px", letterSpacing: "0.17em", textTransform: "uppercase", color: "var(--color-taupe)", lineHeight: 1.9, whiteSpace: "pre-line" }}>
                    {f.label}
                  </div>
                </div>
              ))}
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
            <div className="eyebrow" style={{ marginBottom: "20px" }}>من كل زاوية</div>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(1.9rem, 3vw, 3.1rem)",
                fontWeight: 300,
                fontStyle: "italic",
                color: "var(--color-ivory)",
                lineHeight: 1.14,
                marginBottom: "24px",
              }}
            >
              أدِر القطعة<br />قبل أن تقرّروا.
            </h2>
            <p style={{ fontSize: "15px", color: "var(--color-i60)", lineHeight: 2.0, maxWidth: "460px", marginBottom: "34px" }}>
              يصعب الحكم على هذه القطع من صورة واحدة، فجوهرها ما يحدث حين تتحرّك في الضوء. اسحبوا للتدوير.
            </p>
            <a href={waLink} target="_blank" rel="noopener noreferrer" className="btn-ghost" style={{ alignSelf: "flex-start", textDecoration: "none" }}>
              استفسر عن قطعة
            </a>
          </div>
        </Reveal>
        <div style={{ position: "relative", background: "var(--color-bg)", borderLeft: "1px solid rgba(26,21,18,0.08)", minHeight: "520px" }}>
          <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse at 50% 50%, rgba(140,104,32,0.09) 0%, transparent 65%)", pointerEvents: "none", zIndex: 0 }} />
          <GlbScene
            src="/model-1.glb"
            alt="قطعة ديكور من كريستال آرك، نموذج ثلاثي الأبعاد قابل للتدوير"
            rotationSpeed="4deg/s"
            style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}
          />
          <div style={{ position: "absolute", bottom: "26px", left: "50%", transform: "translateX(-50%)", fontSize: "8px", letterSpacing: "0.24em", textTransform: "uppercase", color: "rgba(26,21,18,0.4)", whiteSpace: "nowrap", zIndex: 2 }}>
            اسحبوا للتدوير
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
                <div className="eyebrow" style={{ marginBottom: "20px" }}>الكتالوج</div>
                <h2
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "clamp(1.9rem, 2.8vw, 2.9rem)",
                    fontWeight: 300,
                    color: "var(--color-ivory)",
                    lineHeight: 1.1,
                    marginBottom: "22px",
                  }}
                >
                  المجموعة،<br />
                  <em style={{ color: "var(--color-gold)", fontStyle: "italic" }}>بالكامل.</em>
                </h2>
                <p style={{ fontSize: "14px", color: "var(--color-taupe)", lineHeight: 1.85 }}>
                  كل قطعة في مجموعة المقتنيات والديكور، بمقاساتها وألوانها وأحجام إصداراتها.
                </p>
              </div>
            </Reveal>

            <Reveal delay={100}>
              <div>
                {["المجموعة كاملة بالمقاسات", "الألوان وأحجام الإصدارات", "آلية الطلب الخاص", "شروط التجزئة والجملة"].map((item) => (
                  <div
                    key={item}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "12px",
                      padding: "11px 0",
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

            <Reveal from="right" delay={160}>
              <div style={{ background: "var(--color-s1)", border: "1px solid rgba(26,21,18,0.12)", padding: "44px 36px" }}>
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


      {/* ══════════════════════════════════════════════
          Enquiry
      ══════════════════════════════════════════════ */}
      <section className="mob-pad" style={{ background: "var(--color-s1)", padding: "clamp(80px, 10vw, 120px) 0", borderTop: "1px solid rgba(26,21,18,0.08)" }}>
        <div className="con">
          <div className="sec-enquiry-grid" style={{ gap: "80px" }}>

            <Reveal from="left">
              <div>
                <div className="eyebrow" style={{ marginBottom: "24px" }}>الاستفسارات</div>
                <h2
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "clamp(2.2rem, 3.6vw, 3.7rem)",
                    fontWeight: 300,
                    color: "var(--color-ivory)",
                    lineHeight: 1.1,
                    marginBottom: "18px",
                  }}
                >
                  اطلب قطعة خاصة.<br />
                  <em style={{ color: "var(--color-gold)" }}>أو اعرضوا المجموعة.</em>
                </h2>
                <p style={{ fontSize: "14px", color: "var(--color-i60)", lineHeight: 1.9, marginBottom: "36px" }}>
                  يكلّفنا عملاء خاصون بقطع فريدة وأعمال مخصصة لموقع بعينه. ويعرض شركاء التجزئة والتصميم الداخلي المجموعة بشروط الجملة مع التوريد من دبي إلى العالم. ويُسعَّر كل قطعة على حدة.
                </p>
                {[
                  { label: "WhatsApp", val: "+971 56 536 4384", href: waLink },
                  { label: "البريد الإلكتروني", val: "info@crystalarc.net", href: "mailto:info@crystalarc.net" },
                ].map((c) => (
                  <div
                    key={c.label}
                    style={{
                      display: "grid",
                      gridTemplateColumns: "80px 1fr",
                      gap: "16px",
                      padding: "14px 0",
                      borderBottom: "1px solid rgba(26,21,18,0.12)",
                      alignItems: "center",
                    }}
                  >
                    <span style={{ fontSize: "9px", letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--color-taupe)", fontWeight: 600 }}>{c.label}</span>
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
                <div style={{ marginTop: "28px", border: "1px solid rgba(140,104,32,0.28)", background: "rgba(140,104,32,0.06)", padding: "20px 22px" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "10px" }}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--color-gold)" strokeWidth="2"><path d="M21 10c0 7-9 12-9 12s-9-5-9-12a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg>
                    <span style={{ fontSize: "10px", letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--color-gold)", fontWeight: 600 }}>المقر الرئيسي، دبي</span>
                  </div>
                  <a href="https://maps.google.com/?q=Crystal+Arc+Dubai" target="_blank" rel="noopener noreferrer" style={{ fontSize: "14px", color: "var(--color-ivory)", textDecoration: "none", lineHeight: 1.7, display: "block" }}>
                    ١٩٠١ برج الموسى ١، مركز التجارة الأول<br />
                    دبي، الإمارات العربية المتحدة<br />
                    +971 4 347 9191
                  </a>
                  <p style={{ fontSize: "12px", color: "var(--color-taupe)", marginTop: "10px", fontStyle: "italic" }}>جولات المصنع متاحة عند الطلب.</p>
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


      {/* ══════════════════════════════════════════════
          FAQ
      ══════════════════════════════════════════════ */}
      <section className="mob-pad" style={{ background: "var(--color-bg)", padding: "clamp(72px, 9vw, 100px) 0", borderTop: "1px solid rgba(26,21,18,0.09)" }}>
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

    </>
  );
}
