import type { Metadata } from "next";
import { alternatesFor } from "@/lib/i18n";
import { ogUrl } from "@/lib/og";
import Reveal from "@/components/Reveal";
import EnquiryForm from "@/components/products/EnquiryForm";

const CDN = "https://cdn.prod.website-files.com/638c4b4310a6ce72185b8247";

const waLink = `https://wa.me/971565364384?text=${encodeURIComponent(
  "مرحبًا كريستال آرك، أودّ مناقشة طلب خاص. يرجى تزويدي بالتفاصيل."
)}`;

export const metadata: Metadata = {
  title: "الحرفة · داخل منشأتنا في الإمارات",
  description:
    "كيف نصنع: الكريستال والمعدن والراتنج، من الرسم الأول إلى فحص الجودة الأخير. كل مرحلة داخل منشأتنا البالغة ٢٠٠٬٠٠٠ قدم مربعة في الإمارات.",
  keywords: [
    "تصنيع جوائز الكريستال",
    "مصنع جوائز الإمارات",
    "حرفة صناعة الجوائز",
    "الحفر بالليزر على الكريستال",
    "صب المعادن للجوائز",
  ],
  openGraph: {
    url: "https://www.crystalarc.net/ar/craft",
    title: "الحرفة | كريستال آرك · منشأة التصنيع في دبي",
    description: "الكريستال والمعدن والراتنج، من الرسم الأول إلى فحص الجودة الأخير، كل مرحلة داخل منشأتنا في الإمارات.",
    images: [{ url: ogUrl("/factory-3.webp"), width: 1200, height: 630, alt: "منشأة كريستال آرك للتصنيع" }],
  },
  alternates: alternatesFor("ar", "/craft"),
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
          alt="منشأة التصنيع التابعة لـ Crystal Arc في دبي"
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
            <div className="eyebrow" style={{ marginBottom: "44px" }}>كريستال آرك &nbsp;&middot;&nbsp; دبي، الإمارات &nbsp;&middot;&nbsp; تأسّست ٢٠٠٠</div>
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
            تُصنع باليد.<br />
            <em style={{ color: "var(--color-gold)" }}>مصنوعة لتبقى مدى العمر.</em>
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
              داخل منشأة في الإمارات مساحتها ٢٠٠٬٠٠٠ قدم مربعة، يصنع ٢٥٠ حرفيًا
              الأشياء التي تستحقّها أهم لحظات العالم.
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
                { n: "٢٠٠٬٠٠٠", l: "قدم مربعة مساحة المنشأة" },
                { n: "٢٥٠",     l: "حرفيًا" },
                { n: "٢٥",      l: "عامًا من الحرفة" },
                { n: "٠٪",      l: "إسناد خارجي" },
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
            <div className="eyebrow" style={{ marginBottom: "48px" }}>المعيار</div>
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
              ٢٠٠٬٠٠٠ قدم مربعة. ٢٥٠ حرفيًا.<br />
              <em style={{ color: "var(--color-gold)" }}>معيار واحد، منذ عام ٢٠٠٠.</em>
            </p>
          </Reveal>
          <Reveal delay={140}>
            <p style={{ fontSize: "15px", color: "var(--color-taupe)", lineHeight: 1.85, maxWidth: "580px", margin: "0 auto 44px" }}>
              كل قطعة من كريستال آرك تُصمَّم وتُقولب وتُحفر وتُشطَّب وتُفحص وتُغلَّف داخل منشأتنا بالإمارات. على يد الفريق نفسه. وتحت السقف نفسه. وهذه ليست ميزة تسويقية، بل ببساطة طريقتنا في العمل.
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
              <div className="eyebrow" style={{ marginBottom: "32px" }}>المنشأة</div>
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
                ٢٠٠٬٠٠٠
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
                قدم مربعة من مساحة تصنيع<br />مبنية لغرضها في دبي، الإمارات.
              </div>
              <p style={{ fontSize: "14px", color: "rgba(237,232,220,0.55)", lineHeight: 1.85, maxWidth: "400px" }}>
                ليس مستودعًا ولا منشأة مشتركة. بل مجمّع مخصّص بُني لغرض واحد: صنع الأشياء التي تستحقّها أهم لحظات العالم، داخليًا بالكامل، من الرسم الأول إلى العلبة الأخيرة.
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
                  { n: "٦",    l: "أقسام الإنتاج" },
                  { n: "٢٥٠",  l: "الحرفيون" },
                  { n: "٧",    l: "أنواع الخامات" },
                  { n: "٠",    l: "أطراف خارجية" },
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
              alt="لقطة جوية لمنشأة Crystal Arc في دبي"
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
            alt="مصمّم من Crystal Arc وعميل يراجعان قطعة وعيّنات خامات، وأرضية الإنتاج ظاهرة خلفهما"
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
            <div className="eyebrow" style={{ marginBottom: "28px" }}>من أين تبدأ</div>
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
              كل قطعة تبدأ<br />بحديث.
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
              ثم رسم. ثم نموذج تعتمدونه.
            </h3>
            <p style={{ fontSize: "14px", color: "var(--color-taupe)", lineHeight: 1.9, marginBottom: "24px" }}>
              يبعد مشغل التصميم عشر خطوات عن أرضية الإنتاج، وهذا القرب مقصود. فما يرسمه مصمّمونا يعرفون أنه قابل للتنفيذ. وما يحتاجه الإنتاج يستطيع التصميم تعديله فورًا. ولا يوجد سوء فهم بين الفكرة والغرض.
            </p>
            <p style={{ fontSize: "14px", color: "var(--color-taupe)", lineHeight: 1.9, marginBottom: "40px" }}>
              كل طلب يتحوّل إلى نموذج ثلاثي الأبعاد تعتمدونه قبل أن يُقطع غرام واحد من الخامة. وعندها فقط يبدأ العمل.
            </p>
            <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
              <div style={{ width: "32px", height: "1px", background: "var(--color-gold)", opacity: 0.4 }} />
              <p style={{ fontSize: "11px", color: "var(--color-muted)", letterSpacing: "0.08em" }}>التصميم · التصوّر · النموذج ثلاثي الأبعاد · اعتماد العميل</p>
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
            <div className="eyebrow" style={{ marginBottom: "16px" }}>الصناعة</div>
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
              هكذا تمرّ القطعة<br />
              <em style={{ color: "var(--color-gold)" }}>تنبض بالحياة.</em>
            </h2>
          </Reveal>
        </div>

        {/* Photo essay panels -- alternating image/text */}
        {[
          {
            eyebrow: "الكريستال والزجاج",
            title: "الضوء · محبوسًا في شكل.",
            body: "يُقصّ الكريستال البصري ويُشكَّل ويُحفر بالليزر بدقة تُقاس بأجزاء من المليمتر. والصورة ثلاثية الأبعاد داخل كل قطعة يحرقها شعاع الليزر لا يد الحرفي، لكن الاختيار والموضع والفحص الأخير تظل يدوية دائمًا. حين تمسكون قطعة كريستال من كريستال آرك، فأنتم تمسكون ثلاثة أيام من الدقة.",
            img: "/trophy-crystal.webp",
            right: false,
          },
          {
            eyebrow: "المعدن والصبّ",
            title: "ثِقَل يتحدّث قبل أن يُقرأ الاسم.",
            body: "يُصبّ النحاس. وتُسبك سبائك الزنك. ويُخرَط الفولاذ. ثم يُشطَّب كل سطح يدويًا، جليًا أو صقلًا أو تفريشًا أو طلاءً بالذهب أو الفضة أو الوردي أو العتيق. ثِقَل القطعة المعدنية من كريستال آرك ليس مصادفة؛ هو ثِقَل المناسبة التي تُخلّدها.",
            img: "/trophy-metal-mixed.webp",
            right: true,
          },
          {
            eyebrow: "الراتنج واللون",
            title: "أي لون. أي شكل. دون تنازل.",
            body: "الراتنج أكثر خاماتنا طلبًا لأنه يتيح أوسع مساحة للإبداع: صبّ بالألوان الكاملة، وشفافية، وأجسام مدمجة، وأشكال خاصة لا تحتملها خامة أخرى. كل صبّة تُطابَق لونيًا حسب المواصفات، وكل قالب يُصنع داخليًا. ما تطلبونه هو ما نصبّه.",
            img: "/craft-resin.webp",
            right: false,
          },
          {
            eyebrow: "التفاصيل والفحص",
            title: "آخر زوج من العيون.",
            body: "قبل أن تُوضع القطعة في علبتها، تمرّ على مراقبة الجودة، لا ماسح ضوئي ولا قائمة تحقّق. حرفيّ يمسكها تحت الضوء ويتخذ قرارًا. وإن لم تكن صحيحة، لا تخرج. في ٢٥ عامًا و٤٠٬٠٠٠ مشروع، لم يتزحزح هذا المعيار مرة واحدة.",
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
            <div className="eyebrow" style={{ marginBottom: "16px" }}>أصوات من المشغل</div>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(1.9rem, 3.2vw, 3.4rem)",
                fontWeight: 300,
                color: "var(--color-ivory)",
                lineHeight: 1.1,
                marginBottom: "80px",
                // 500px forced "الناس هم المعيار." to break mid-line.
                // Wide enough for it to sit on one line, still capped so it never
                // runs the full container width.
                maxWidth: "min(100%, 860px)",
              }}
            >
              الناس هم المعيار.<br />
              <em style={{ color: "var(--color-gold)" }}>لا الآلات.</em>
            </h2>
          </Reveal>

          <div style={{ display: "flex", flexDirection: "column", gap: "32px" }}>
            {[
              {
                role: "كبير الحفّارين",
                img: "/craft-engraver.webp",
                alt: "كبير الحفّارين في كريستال آرك على طاولة الحفر",
                tenure: "١٨ عامًا في كريستال آرك",
                quote: "يسألني الناس كم يستغرق حفر اسم. أقول لهم: الحفر نفسه ثلاث دقائق. أما أن تعرف أين تضعه بالضبط، وبأي عمق، وبأي زاوية، فذلك يستغرق ثمانية عشر عامًا. الآلة تستطيع القطع. والخبرة وحدها تعرف أين.",
              },
              {
                role: "المصمّم الأول",
                img: "/craft-designer.webp",
                alt: "المصمّم الأول في كريستال آرك على محطة التصميم",
                tenure: "١١ عامًا في كريستال آرك",
                quote: "يبدأ عملي بطلب وينتهي بقطعة لم يكن العميل يعلم أنه يتخيّلها. وبين هاتين النقطتين كل شيء، أحاديث ورسوم ونماذج ومراجعات، ثم اللحظة التي نتفق فيها جميعًا: نعم، هذه هي. تلك اللحظة أجمل ما في هذا العمل.",
              },
              {
                role: "مدير مراقبة الجودة",
                img: "/craft-qc.webp",
                alt: "مدير مراقبة الجودة في كريستال آرك يفحص جائزة منجزة",
                tenure: "١٤ عامًا في كريستال آرك",
                quote: "لم أُجِز يومًا قطعة لست فخورًا بها. هذا ليس معيارًا كتبه لي أحد، بل الطريقة الوحيدة التي أعرف بها كيف أؤدي هذا العمل. حين أعتمد قطعة، يذهب اسمي معها، حتى لو لم يعرف ذلك أحد سواي.",
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
                alt="أرضية الإنتاج في Crystal Arc"
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
              <div className="eyebrow" style={{ marginBottom: "44px" }}>الالتزام</div>
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
                ٢٥ عامًا. ٤٠٬٠٠٠ مشروع.<br />دون أي إسناد خارجي.
              </h2>
            </Reveal>
            <Reveal delay={140}>
              <p style={{ fontSize: "14px", color: "rgba(237,232,220,0.55)", lineHeight: 1.9, marginBottom: "56px", maxWidth: "580px", margin: "0 auto 56px" }}>
                التصميم، وصناعة القوالب، والصبّ، والحفر، والتشطيب، والفحص، والتغليف، كل مرحلة
                تجري داخل هذا المبنى. لم نُسنِد يومًا مرحلة واحدة إلى جهة خارجية.
                وعلى مدى ٢٥ عامًا و٤٠٬٠٠٠ مشروع، لم يتغيّر ذلك.
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
                  { n: "+٢٥",    l: "الأعوام" },
                  { n: "+٤٠٬٠٠٠", l: "المشاريع" },
                  { n: "٢٥٠",   l: "الحرفيون" },
                  { n: "٠٪",    l: "إسناد خارجي" },
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
                <div className="eyebrow" style={{ marginBottom: "24px" }}>اطلب قطعة</div>
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
                  أخبرونا بما تصنعونه.
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
                  كل طلب في كريستال آرك يبدأ بحديث.
                </p>
                {[
                  { label: "WhatsApp",  val: "+971 56 536 4384", href: waLink },
                  { label: "البريد الإلكتروني",     val: "info@crystalarc.net", href: "mailto:info@crystalarc.net" },
                  { label: "صالة العرض",  val: "دبي، الإمارات", href: "#" },
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
                <EnquiryForm locale="ar" />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

    </>
  );
}
