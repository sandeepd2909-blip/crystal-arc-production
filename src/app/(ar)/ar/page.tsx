import type { Metadata } from "next";
import { alternatesFor } from "@/lib/i18n";
import HomeClient from "@/components/HomeClient";
import "../../home.css";

export const metadata: Metadata = {
  // The layout template appends " | كريستال آرك", so the brand must not be
  // repeated here — it was, giving /ar a 66-character title with the name
  // at both ends.
  title: "جوائز وكؤوس وهدايا مؤسسية بتصنيع خليجي",
  description:
    "دروع وجوائز وهدايا شركات وتغليف فاخر، بتصنيع كامل داخل منشأتنا في الإمارات. أكثر من ٢٥ عامًا مع الجهات الحكومية والاتحادات الرياضية وكبرى الشركات في الخليج.",
  alternates: alternatesFor("ar", "/"),
};

/**
 * The homepage. Previously a hand-written public/index.html that sat outside
 * Next entirely and carried its own copies of the nav and footer — two
 * implementations to keep in sync, and it would have become four once Arabic
 * was added. It now renders inside the shared layout like every other page.
 */
export default function HomePage() {
  return (
    <>
      {/* Thin spectrum line pinned above the nav — homepage only, as before. */}
      <div className="spectrum-top" />

      {/* HERO */}
      <section className="hero">
        <div className="hero-bg"></div>
        <div className="hero-glow"></div>
        <div className="hero-grad"></div>
          <div className="hero-3d reveal d2">
          {/* Was a <model-viewer> pulling model.glb (1.7MB) plus a 1.4MB HDR
              and a 249KB runtime. The box has a fixed height and a fluid
              width, so the supplied landscape render is cropped to fill by
              `object-fit: cover` in home.css rather than sized to fit. */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/hero-showpiece-v3-1400.webp"
            srcSet="/hero-showpiece-v3-700.webp 700w, /hero-showpiece-v3-1000.webp 1000w, /hero-showpiece-v3-1400.webp 1400w, /hero-showpiece-v3-1900.webp 1900w"
            sizes="(max-width: 960px) 100vw, 134vh"
            alt="جائزة محمد بن راشد آل مكتوم للإبداع الرياضي، من صنع Crystal Arc"
            width={1900}
            height={1419}
            fetchPriority="high"
            decoding="async"
          />
          <span className="trophy-label">صناعة يدوية · دبي</span>
        </div>
        <div className="hero-inner">
          <div>
            <div className="eyebrow reveal">صناعة إماراتية · أكثر من ٢٥ عامًا</div>
            <h1 className="reveal d1">
              القطع التي<br/>
              <span className="cycle-wrap"><span id="cycle-word"></span><span className="tw-cursor"></span></span><br/>
              <span style={{ color: 'var(--i60)' }}>تُخلّدها&lt;br/&gt;في الذاكرة</span>
            </h1>
            <p className="hero-sub reveal d2">
              نصمّم ونصنّع الجوائز والهدايا وقطع التقديم التي تُخلّد اللحظات التي تريد <strong>الجهات الحكومية والعلامات والمؤسسات</strong> أن يتذكّرها العالم.
            </p>
            <div className="hero-actions reveal d3">
              <a href="#contact" className="btn-red">اطلب قطعة خاصة</a>
              <a href="https://wa.me/971565364384?text=%D9%85%D8%B1%D8%AD%D8%A8%D9%8B%D8%A7%20%D9%83%D8%B1%D9%8A%D8%B3%D8%AA%D8%A7%D9%84%20%D8%A2%D8%B1%D9%83%D8%8C%20%D8%A3%D8%B1%D8%BA%D8%A8%20%D9%81%D9%8A%20%D8%A7%D9%84%D8%A7%D8%B3%D8%AA%D9%81%D8%B3%D8%A7%D8%B1%20%D8%B9%D9%86%20%D8%AC%D9%88%D8%A7%D8%A6%D8%B2%20%D9%83%D8%B1%D9%8A%D8%B3%D8%AA%D8%A7%D9%84%20%D8%A3%D9%88%20%D9%87%D8%AF%D8%A7%D9%8A%D8%A7%20%D9%85%D8%A4%D8%B3%D8%B3%D9%8A%D8%A9%20%D9%85%D8%AE%D8%B5%D9%91%D8%B5%D8%A9.%20%D9%8A%D8%B1%D8%AC%D9%89%20%D8%A7%D9%84%D9%85%D8%B3%D8%A7%D8%B9%D8%AF%D8%A9." className="btn-wa" target="_blank">
                <span className="wa-dot"><svg viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.125.558 4.122 1.532 5.856L.058 23.486a.5.5 0 00.609.61l5.749-1.519A11.95 11.95 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.9a9.9 9.9 0 01-5.031-1.37l-.361-.214-3.714.981.993-3.648-.250-.374A9.9 9.9 0 012.1 12C2.1 6.535 6.535 2.1 12 2.1S21.9 6.535 21.9 12 17.465 21.9 12 21.9z"/></svg></span>
                تواصل عبر واتساب
              </a>
            </div>
          </div>
        </div>
        <div className="hero-arc">
          <svg viewBox="0 0 1440 80" preserveAspectRatio="none" fill="none">
            <path d="M0,55 Q360,5 720,45 Q1080,85 1440,35 L1440,80 L0,80 Z" fill="#F7F2EB"/>
            <path d="M0,55 Q360,5 720,45 Q1080,85 1440,35" stroke="rgba(201,149,74,.22)" strokeWidth="1" fill="none"/>
          </svg>
        </div>
      </section>

      {/* STATS — GOLD BACKGROUND */}
      <div className="stats-bar">
        <div className="stats-in">
          <div className="stat reveal"><div className="stat-n" data-count="25" data-suffix="+">+٢٥</div><div className="stat-l">عامًا من الحرفة</div></div>
          <div className="stat reveal d1"><div className="stat-n" data-count="15000" data-suffix="+">+١٥ ألف</div><div className="stat-l">عميل</div></div>
          <div className="stat reveal d2"><div className="stat-n" data-count="40000" data-suffix="+">+٤٠ ألف</div><div className="stat-l">مشروع منجز</div></div>
          <div className="stat reveal d3"><div className="stat-n" data-count="250" data-suffix="">٢٥٠</div><div className="stat-l">حرفيًا متخصصًا</div></div>
        </div>
      </div>

      {/* PRODUCTS */}
      <section className="products" id="products">
        <div className="con">
          <div className="prod-head">
            <div>
              <div className="sec-eye reveal">ما الذي نصنعه</div>
              <h2 className="reveal d1">أربع فئات.<br/><em>وإمكانات لا تنتهي.</em></h2>
            </div>
            <div className="reveal d1">
              <p>من جوائز الكريستال التي تُقدَّم لرؤساء الدول، إلى الهدايا المؤسسية التي تفتح الأبواب، كل قطعة تبدأ من صفحة بيضاء وتنتهي إلى شيء لا يُستبدل.</p>
              <a href="/ar/products" className="link-gold">تصفَّح الكتالوج الكامل ←</a>
            </div>
          </div>
          <div className="prod-grid">
            <a className="pc c1 product-shot reveal" href="/ar/products/trophies-awards">
              <picture>
                <source media="(max-width: 620px)" srcSet="/hp-cat-trophies-m.webp"/>
                <img src="/hp-cat-trophies-v2.webp" alt="الجوائز والكؤوس"/>
              </picture>
              <div className="pc-ov"></div><div className="pc-info"><div className="pc-cat">01</div><h3 className="pc-name">الجوائز والكؤوس</h3></div>
              <div className="pc-arr"><svg viewBox="0 0 16 16" strokeWidth="1.5"><path d="M3 13L13 3M13 3H6M13 3v7" strokeLinecap="round" strokeLinejoin="round"/></svg></div>
            </a>
            <a className="pc c2 product-shot reveal d1" href="/ar/products/corporate-gifts">
              <picture>
                <source media="(max-width: 620px)" srcSet="/hp-cat-corporate-m.webp"/>
                <img src="/hp-cat-corporate-v2.webp" alt="الهدايا المؤسسية" loading="lazy" decoding="async"/>
              </picture>
              <div className="pc-ov"></div><div className="pc-info"><div className="pc-cat">02</div><h3 className="pc-name">الهدايا المؤسسية</h3></div>
              <div className="pc-arr"><svg viewBox="0 0 16 16" strokeWidth="1.5"><path d="M3 13L13 3M13 3H6M13 3v7" strokeLinecap="round" strokeLinejoin="round"/></svg></div>
            </a>
            <a className="pc c4 product-shot reveal d1" href="/ar/products/home-decor">
              <picture>
                <source media="(max-width: 620px)" srcSet="/hp-cat-homedecor-m.webp"/>
                <img src="/hp-cat-homedecor-v2.webp" alt="المقتنيات والديكور" loading="lazy" decoding="async"/>
              </picture>
              <div className="pc-ov"></div><div className="pc-info"><div className="pc-cat">03</div><h3 className="pc-name">المقتنيات والديكور</h3></div>
              <div className="pc-arr"><svg viewBox="0 0 16 16" strokeWidth="1.5"><path d="M3 13L13 3M13 3H6M13 3v7" strokeLinecap="round" strokeLinejoin="round"/></svg></div>
            </a>
            <a className="pc c5 product-shot reveal d2" href="/ar/products/boxes">
              <picture>
                <source media="(max-width: 620px)" srcSet="/hp-cat-boxes-m.webp"/>
                <img src="/hp-cat-boxes-v2.webp" alt="علب التقديم الفاخرة" loading="lazy" decoding="async"/>
              </picture>
              <div className="pc-ov"></div><div className="pc-info"><div className="pc-cat">04</div><h3 className="pc-name">علب التقديم الفاخرة</h3></div>
              <div className="pc-arr"><svg viewBox="0 0 16 16" strokeWidth="1.5"><path d="M3 13L13 3M13 3H6M13 3v7" strokeLinecap="round" strokeLinejoin="round"/></svg></div>
            </a>
          </div>
        </div>
      </section>


      {/* GALLERY — infinite auto-scroll marquee, pauses on hover */}
      <div className="gallery">
        <div className="gt-track">
          <div className="g-item"><img src="/slide-01.webp" loading="lazy" width="600" height="750" alt="قطعة من تنفيذ كريستال آرك"/></div>
          <div className="g-item"><img src="/slide-02.webp" loading="lazy" width="600" height="750" alt="قطعة من تنفيذ كريستال آرك"/></div>
          <div className="g-item"><img src="/slide-03.webp" loading="lazy" width="600" height="750" alt="قطعة من تنفيذ كريستال آرك"/></div>
          <div className="g-item"><img src="/slide-04.webp" loading="lazy" width="600" height="750" alt="قطعة من تنفيذ كريستال آرك"/></div>
          <div className="g-item"><img src="/slide-05.webp" loading="lazy" width="600" height="750" alt="قطعة من تنفيذ كريستال آرك"/></div>
          <div className="g-item"><img src="/slide-06.webp" loading="lazy" width="600" height="750" alt="قطعة من تنفيذ كريستال آرك"/></div>
          <div className="g-item"><img src="/slide-07.webp" loading="lazy" width="600" height="750" alt="قطعة من تنفيذ كريستال آرك"/></div>
          <div className="g-item"><img src="/slide-08.webp" loading="lazy" width="600" height="750" alt="قطعة من تنفيذ كريستال آرك"/></div>
          <div className="g-item"><img src="/slide-09.webp" loading="lazy" width="600" height="750" alt="قطعة من تنفيذ كريستال آرك"/></div>
          <div className="g-item"><img src="/slide-10.webp" loading="lazy" width="600" height="750" alt="قطعة من تنفيذ كريستال آرك"/></div>
          <div className="g-item"><img src="/slide-11.webp" loading="lazy" width="600" height="750" alt="قطعة من تنفيذ كريستال آرك"/></div>
          {/* Duplicated for seamless loop */}
          <div className="g-item"><img src="/slide-01.webp" loading="lazy" width="600" height="750" alt="قطعة من تنفيذ كريستال آرك"/></div>
          <div className="g-item"><img src="/slide-02.webp" loading="lazy" width="600" height="750" alt="قطعة من تنفيذ كريستال آرك"/></div>
          <div className="g-item"><img src="/slide-03.webp" loading="lazy" width="600" height="750" alt="قطعة من تنفيذ كريستال آرك"/></div>
          <div className="g-item"><img src="/slide-04.webp" loading="lazy" width="600" height="750" alt="قطعة من تنفيذ كريستال آرك"/></div>
          <div className="g-item"><img src="/slide-05.webp" loading="lazy" width="600" height="750" alt="قطعة من تنفيذ كريستال آرك"/></div>
          <div className="g-item"><img src="/slide-06.webp" loading="lazy" width="600" height="750" alt="قطعة من تنفيذ كريستال آرك"/></div>
          <div className="g-item"><img src="/slide-07.webp" loading="lazy" width="600" height="750" alt="قطعة من تنفيذ كريستال آرك"/></div>
          <div className="g-item"><img src="/slide-08.webp" loading="lazy" width="600" height="750" alt="قطعة من تنفيذ كريستال آرك"/></div>
          <div className="g-item"><img src="/slide-09.webp" loading="lazy" width="600" height="750" alt="قطعة من تنفيذ كريستال آرك"/></div>
          <div className="g-item"><img src="/slide-10.webp" loading="lazy" width="600" height="750" alt="قطعة من تنفيذ كريستال آرك"/></div>
          <div className="g-item"><img src="/slide-11.webp" loading="lazy" width="600" height="750" alt="قطعة من تنفيذ كريستال آرك"/></div>
        </div>
        {/* Second row — reverse direction */}
        <div className="gt-track-rev">
          <div className="g-item"><img src="/slide-12.webp" loading="lazy" width="600" height="750" alt="قطعة من تنفيذ كريستال آرك"/></div>
          <div className="g-item"><img src="/slide-13.webp" loading="lazy" width="600" height="750" alt="قطعة من تنفيذ كريستال آرك"/></div>
          <div className="g-item"><img src="/slide-14.webp" loading="lazy" width="600" height="750" alt="قطعة من تنفيذ كريستال آرك"/></div>
          <div className="g-item"><img src="/slide-15.webp" loading="lazy" width="600" height="750" alt="قطعة من تنفيذ كريستال آرك"/></div>
          <div className="g-item"><img src="/slide-16.webp" loading="lazy" width="600" height="750" alt="قطعة من تنفيذ كريستال آرك"/></div>
          <div className="g-item"><img src="/slide-17.webp" loading="lazy" width="600" height="750" alt="قطعة من تنفيذ كريستال آرك"/></div>
          <div className="g-item"><img src="/slide-18.webp" loading="lazy" width="600" height="750" alt="قطعة من تنفيذ كريستال آرك"/></div>
          <div className="g-item"><img src="/slide-19.webp" loading="lazy" width="600" height="750" alt="قطعة من تنفيذ كريستال آرك"/></div>
          <div className="g-item"><img src="/slide-20.webp" loading="lazy" width="600" height="750" alt="قطعة من تنفيذ كريستال آرك"/></div>
          <div className="g-item"><img src="/slide-21.webp" loading="lazy" width="600" height="750" alt="قطعة من تنفيذ كريستال آرك"/></div>
          <div className="g-item"><img src="/slide-22.webp" loading="lazy" width="600" height="750" alt="قطعة من تنفيذ كريستال آرك"/></div>
          {/* Duplicated for seamless reverse loop */}
          <div className="g-item"><img src="/slide-12.webp" loading="lazy" width="600" height="750" alt="قطعة من تنفيذ كريستال آرك"/></div>
          <div className="g-item"><img src="/slide-13.webp" loading="lazy" width="600" height="750" alt="قطعة من تنفيذ كريستال آرك"/></div>
          <div className="g-item"><img src="/slide-14.webp" loading="lazy" width="600" height="750" alt="قطعة من تنفيذ كريستال آرك"/></div>
          <div className="g-item"><img src="/slide-15.webp" loading="lazy" width="600" height="750" alt="قطعة من تنفيذ كريستال آرك"/></div>
          <div className="g-item"><img src="/slide-16.webp" loading="lazy" width="600" height="750" alt="قطعة من تنفيذ كريستال آرك"/></div>
          <div className="g-item"><img src="/slide-17.webp" loading="lazy" width="600" height="750" alt="قطعة من تنفيذ كريستال آرك"/></div>
          <div className="g-item"><img src="/slide-18.webp" loading="lazy" width="600" height="750" alt="قطعة من تنفيذ كريستال آرك"/></div>
          <div className="g-item"><img src="/slide-19.webp" loading="lazy" width="600" height="750" alt="قطعة من تنفيذ كريستال آرك"/></div>
          <div className="g-item"><img src="/slide-20.webp" loading="lazy" width="600" height="750" alt="قطعة من تنفيذ كريستال آرك"/></div>
          <div className="g-item"><img src="/slide-21.webp" loading="lazy" width="600" height="750" alt="قطعة من تنفيذ كريستال آرك"/></div>
          <div className="g-item"><img src="/slide-22.webp" loading="lazy" width="600" height="750" alt="قطعة من تنفيذ كريستال آرك"/></div>
        </div>
      </div>

      {/* RED TEXT MARQUEE — brand credentials ribbon */}
      <div className="marquee-band">
        <div className="mb-track">
          <span className="mb-item">Crystal Arc</span><span className="mb-sep">◆</span>
          <span className="mb-item">صناعة في دبي</span><span className="mb-sep">◆</span>
          <span className="mb-item">تُصنع لتبقى</span><span className="mb-sep">◆</span>
          <span className="mb-item">تصنيع خاص</span><span className="mb-sep">◆</span>
          <span className="mb-item">منذ عام ٢٠٠٠</span><span className="mb-sep">◆</span>
          <span className="mb-item">أرقى جوائز الخليج</span><span className="mb-sep">◆</span>
          <span className="mb-item">الإمارات · السعودية · قطر</span><span className="mb-sep">◆</span>
          <span className="mb-item">٢٥٠ حرفيًا</span><span className="mb-sep">◆</span>
          <span className="mb-item">بلا إسناد خارجي</span><span className="mb-sep">◆</span>
          <span className="mb-item">Crystal Arc</span><span className="mb-sep">◆</span>
          <span className="mb-item">صناعة في دبي</span><span className="mb-sep">◆</span>
          <span className="mb-item">تُصنع لتبقى</span><span className="mb-sep">◆</span>
          <span className="mb-item">تصنيع خاص</span><span className="mb-sep">◆</span>
          <span className="mb-item">منذ عام ٢٠٠٠</span><span className="mb-sep">◆</span>
          <span className="mb-item">أرقى جوائز الخليج</span><span className="mb-sep">◆</span>
          <span className="mb-item">الإمارات · السعودية · قطر</span><span className="mb-sep">◆</span>
          <span className="mb-item">٢٥٠ حرفيًا</span><span className="mb-sep">◆</span>
          <span className="mb-item">بلا إسناد خارجي</span><span className="mb-sep">◆</span>
        </div>
      </div>

      {/* OCCASIONS — deep wine background, brighter images */}
      <section className="occasions" id="occasions">
        <div className="occ-head">
          <div>
            <div className="sec-eye reveal">القطاعات التي نخدمها</div>
            <h2 className="reveal d1">صُنعت من أجل<br/><em>اللحظات التي<br/>تصنع الإرث</em></h2>
          </div>
          <p className="reveal d1">من الاحتفالات الوطنية إلى محطات مجالس الإدارة، ٢٥ عامًا علّمتنا أن لكل مناسبة لغتها الخاصة. وهؤلاء من نتحدّث بها نيابةً عنهم.</p>
        </div>
        <div className="occ-strip">
          <div className="occ-card reveal">
            <img src="/occ-government-v2.webp" loading="lazy" alt="جوائز كريستال آرك في مراسم حكومية" />
            <div className="occ-ov"></div>
            <div className="occ-content"><span className="occ-num">01</span><h3 className="occ-title">الجهات الحكومية والسيادية</h3><p className="occ-desc">المراسم الرسمية · الأعياد الوطنية · الهدايا الدبلوماسية</p></div>
          </div>
          <div className="occ-card reveal d1">
            <img src="/occ-corporate-v2.webp" loading="lazy" alt="جوائز كريستال آرك المؤسسية في فعالية لإحدى الشركات" />
            <div className="occ-ov"></div>
            <div className="occ-content"><span className="occ-num">02</span><h3 className="occ-title">الشركات والمؤسسات</h3><p className="occ-desc">تكريم الموظفين · هدايا الشركاء · المناسبات المؤسسية</p></div>
          </div>
          <div className="occ-card reveal d2">
            <img src="/occ-sports-v2.webp" loading="lazy" alt="كؤوس كريستال آرك في بطولة رياضية" />
            <div className="occ-ov"></div>
            <div className="occ-content"><span className="occ-num">03</span><h3 className="occ-title">الرياضة والترفيه</h3><p className="occ-desc">البطولات · الدوريات · لحظات منصات التتويج</p></div>
          </div>
          <div className="occ-card reveal d3">
            <img src="/occ-luxury-v2.webp" loading="lazy" alt="قطع كريستال آرك الفاخرة معروضة" />
            <div className="occ-ov"></div>
            <div className="occ-content"><span className="occ-num">04</span><h3 className="occ-title">التجزئة الفاخرة والفعاليات</h3><p className="occ-desc">هدايا كبار الشخصيات · الإطلاقات الحصرية · المجموعات الخاصة</p></div>
          </div>
          <div className="occ-card reveal d4">
            <img src="/occ-advertising-v2.webp" loading="lazy" alt="قطعة من تنفيذ كريستال آرك" />
            <div className="occ-ov"></div>
            <div className="occ-content"><span className="occ-num">05</span><h3 className="occ-title">الإعلان والإعلام</h3><p className="occ-desc">حفلات الجوائز · تكريم الحملات · جوائز القطاع</p></div>
          </div>
        </div>
      </section>

      {/* TRUST WALL — photos + quote + logos, all in one */}
      <section className="hof" id="trust">

        {/* Header */}
        <div className="hof-head reveal">
          <div>
            <div className="eyebrow">قاعة المشاهير</div>
            <h2>أكبر منصات العالم.<br/><em style={{ color: 'var(--gold)' }}>وأهم لحظاته.</em></h2>
          </div>
          <p className="hof-sub">قُدِّمت أعمالنا لرؤساء دول وأبطال عالم وأفراد أُسر حاكمة وشخصيات بارزة في خمس قارات.</p>
        </div>

        {/* 9:16 portrait reel — 33 photos, continuous scroll, duplicated for seamless loop */}
        <div className="hof-reel">
          <div className="hof-reel-track" style={{ "--run": 8775 } as React.CSSProperties}>
            <div className="hof-photo"><img src="/hof-fcb.webp" alt="نادي برشلونة" loading="eager"/><div className="hof-photo-ov"></div><div className="hof-photo-cap"><div className="hof-cap-name">نادي برشلونة</div><div className="hof-cap-role">رياضة &middot; إسبانيا</div></div></div>
            <div className="hof-photo"><img src="/hof-best-corporate-awards.webp" alt="جوائز مؤسسية" loading="eager"/><div className="hof-photo-ov"></div><div className="hof-photo-cap"><div className="hof-cap-name">جوائز التميّز المؤسسي</div><div className="hof-cap-role">حرفة &middot; الإمارات</div></div></div>
            <div className="hof-photo"><img src="/hof-king-charles-new.webp" alt="الملك تشارلز الثالث" loading="eager"/><div className="hof-photo-ov"></div><div className="hof-photo-cap"><div className="hof-cap-name">جلالة الملك تشارلز الثالث</div><div className="hof-cap-role">الديوان الملكي &middot; المملكة المتحدة</div></div></div>
            <div className="hof-photo"><img src="/hof-pope-gifting.webp" alt="البابا فرنسيس" loading="eager"/><div className="hof-photo-ov"></div><div className="hof-photo-cap"><div className="hof-cap-name">قداسة البابا فرنسيس</div><div className="hof-cap-role">دبلوماسي &middot; الفاتيكان</div></div></div>
            <div className="hof-photo"><img src="/hof-jackie-chan-new.webp" alt="جاكي شان" loading="eager"/><div className="hof-photo-ov"></div><div className="hof-photo-cap"><div className="hof-cap-name">جاكي شان</div><div className="hof-cap-role">ترفيه &middot; منصة عالمية</div></div></div>
            <div className="hof-photo"><img src="/hof-vip-gift-new.webp" alt="محمد صلاح" loading="lazy"/><div className="hof-photo-ov"></div><div className="hof-photo-cap"><div className="hof-cap-name">محمد صلاح وسمو الشيخ حمدان</div><div className="hof-cap-role">كرة قدم &middot; تقديم في الإمارات</div></div></div>
            <div className="hof-photo"><img src="/hof-best-custom-awards-ksa.webp" alt="جوائز مخصصة، السعودية" loading="lazy"/><div className="hof-photo-ov"></div><div className="hof-photo-cap"><div className="hof-cap-name">جوائز مخصصة &middot; السعودية</div><div className="hof-cap-role">تميّز &middot; السعودية</div></div></div>
            <div className="hof-photo"><img src="/hof-fazza.webp" alt="الشيخ حمدان" loading="lazy"/><div className="hof-photo-ov"></div><div className="hof-photo-cap"><div className="hof-cap-name">سمو الشيخ حمدان بن محمد</div><div className="hof-cap-role">ولي العهد &middot; دبي، الإمارات</div></div></div>
            <div className="hof-photo"><img src="/hof-mag-03.webp" alt="جائزة الرياضات الإلكترونية" loading="lazy"/><div className="hof-photo-ov"></div><div className="hof-photo-cap"><div className="hof-cap-name">جائزة بطولة الرياضات الإلكترونية</div><div className="hof-cap-role">ألعاب &middot; الإمارات</div></div></div>
            <div className="hof-photo"><img src="/hof-amitabh-bachchan.webp" alt="أميتاب باتشان" loading="lazy"/><div className="hof-photo-ov"></div><div className="hof-photo-cap"><div className="hof-cap-name">أميتاب باتشان</div><div className="hof-cap-role">ترفيه &middot; الهند</div></div></div>
            <div className="hof-photo"><img src="/hof-mag-06.webp" alt="كريستيانو رونالدو" loading="lazy"/><div className="hof-photo-ov"></div><div className="hof-photo-cap"><div className="hof-cap-name">كريستيانو رونالدو</div><div className="hof-cap-role">كرة قدم &middot; النصر، السعودية</div></div></div>
            <div className="hof-photo"><img src="/hof-best-custom-corporate-trophies.webp" alt="جوائز مؤسسية" loading="lazy"/><div className="hof-photo-ov"></div><div className="hof-photo-cap"><div className="hof-cap-name">جوائز مؤسسية خاصة</div><div className="hof-cap-role">تصنيع &middot; الإمارات</div></div></div>
            <div className="hof-photo"><img src="/hof-arabab.webp" alt="إكسبو ٢٠٢٠ دبي" loading="lazy"/><div className="hof-photo-ov"></div><div className="hof-photo-cap"><div className="hof-cap-name">إكسبو ٢٠٢٠ دبي &middot; حفل الجوائز</div><div className="hof-cap-role">حكومي &middot; الإمارات</div></div></div>
            <div className="hof-photo"><img src="/hof-mag-05.webp" alt="جائزة رسمية" loading="lazy"/><div className="hof-photo-ov"></div><div className="hof-photo-cap"><div className="hof-cap-name">تقديم جائزة رسمية</div><div className="hof-cap-role">دبلوماسي &middot; الإمارات</div></div></div>
            <div className="hof-photo"><img src="/hof-mag-07.webp" alt="تريفور نوا" loading="lazy"/><div className="hof-photo-ov"></div><div className="hof-photo-cap"><div className="hof-cap-name">تريفور نوا</div><div className="hof-cap-role">ترفيه &middot; منصة عالمية</div></div></div>
            <div className="hof-photo"><img src="/hof-mag-04.webp" alt="نوفاك ديوكوفيتش" loading="lazy"/><div className="hof-photo-ov"></div><div className="hof-photo-cap"><div className="hof-cap-name">نوفاك ديوكوفيتش وسمو الشيخ حمدان</div><div className="hof-cap-role">تنس &middot; بطولة دبي</div></div></div>
            <div className="hof-photo"><img src="/hof-corporate-trophies.webp" alt="جوائز مؤسسية" loading="lazy"/><div className="hof-photo-ov"></div><div className="hof-photo-cap"><div className="hof-cap-name">مجموعة الجوائز المؤسسية</div><div className="hof-cap-role">جوائز &middot; الإمارات</div></div></div>
            <div className="hof-photo"><img src="/hof-mag-09.webp" alt="سلطان القاسمي" loading="lazy"/><div className="hof-photo-ov"></div><div className="hof-photo-cap"><div className="hof-cap-name">صاحب السمو الشيخ سلطان القاسمي</div><div className="hof-cap-role">حاكم &middot; إمارة الشارقة</div></div></div>
            <div className="hof-photo"><img src="/hof-mag-01.webp" alt="هدية رسمية" loading="lazy"/><div className="hof-photo-ov"></div><div className="hof-photo-cap"><div className="hof-cap-name">تقديم هدية رسمية</div><div className="hof-cap-role">دبلوماسي &middot; الخليج</div></div></div>
            <div className="hof-photo"><img src="/hof-mag-14.webp" alt="Disney+" loading="lazy"/><div className="hof-photo-ov"></div><div className="hof-photo-cap"><div className="hof-cap-name">Disney+ &middot; مليار مشاهدة</div><div className="hof-cap-role">ترفيه &middot; عالمي</div></div></div>
            <div className="hof-photo"><img src="/hof-mag-08.webp" alt="جواو فيليكس" loading="lazy"/><div className="hof-photo-ov"></div><div className="hof-photo-cap"><div className="hof-cap-name">جواو فيليكس</div><div className="hof-cap-role">كرة قدم &middot; الإمارات</div></div></div>
            <div className="hof-photo"><img src="/hof-custom-metal-awards.webp" alt="جوائز معدنية" loading="lazy"/><div className="hof-photo-ov"></div><div className="hof-photo-cap"><div className="hof-cap-name">جوائز معدنية مخصصة</div><div className="hof-cap-role">حرفة &middot; الإمارات</div></div></div>
            <div className="hof-photo"><img src="/hof-mag-15.webp" alt="الشيخ حمدان" loading="lazy"/><div className="hof-photo-ov"></div><div className="hof-photo-cap"><div className="hof-cap-name">سمو الشيخ حمدان بن محمد</div><div className="hof-cap-role">قيادة &middot; الإمارات</div></div></div>
            <div className="hof-photo"><img src="/hof-mag-16.webp" alt="جواو فيليكس" loading="lazy"/><div className="hof-photo-ov"></div><div className="hof-photo-cap"><div className="hof-cap-name">جواو فيليكس</div><div className="hof-cap-role">كرة قدم &middot; السعودية</div></div></div>
            <div className="hof-photo"><img src="/hof-customised-corporate-awards.webp" alt="جوائز مؤسسية" loading="lazy"/><div className="hof-photo-ov"></div><div className="hof-photo-cap"><div className="hof-cap-name">جوائز مؤسسية مخصصة</div><div className="hof-cap-role">تميّز &middot; الخليج</div></div></div>
            <div className="hof-photo"><img src="/hof-mag-02.webp" alt="جائزة إماراتية" loading="lazy"/><div className="hof-photo-ov"></div><div className="hof-photo-cap"><div className="hof-cap-name">جائزة الإمارات للاستدامة</div><div className="hof-cap-role">حكومي &middot; الإمارات</div></div></div>
            <div className="hof-photo"><img src="/hof-mag-10.webp" alt="جياني إنفانتينو" loading="lazy"/><div className="hof-photo-ov"></div><div className="hof-photo-cap"><div className="hof-cap-name">جياني إنفانتينو وسمو الشيخ حمدان</div><div className="hof-cap-role">رئيس الاتحاد الدولي لكرة القدم &middot; الإمارات</div></div></div>
            <div className="hof-photo"><img src="/hof-customised-plaque.webp" alt="درع خاص" loading="lazy"/><div className="hof-photo-ov"></div><div className="hof-photo-cap"><div className="hof-cap-name">درع تكريم خاص</div><div className="hof-cap-role">حرفة &middot; الإمارات</div></div></div>
            <div className="hof-photo"><img src="/hof-mag-12.webp" alt="مراسم سعودية" loading="lazy"/><div className="hof-photo-ov"></div><div className="hof-photo-cap"><div className="hof-cap-name">مراسم رسمية سعودية</div><div className="hof-cap-role">حكومي &middot; السعودية</div></div></div>
            <div className="hof-photo"><img src="/hof-mag-11.webp" alt="نادي الهلال" loading="lazy"/><div className="hof-photo-ov"></div><div className="hof-photo-cap"><div className="hof-cap-name">نادي الهلال</div><div className="hof-cap-role">دوري روشن السعودي &middot; كرة قدم</div></div></div>
            <div className="hof-photo"><img src="/hof-customized-corporate-gift.webp" alt="هدية مؤسسية" loading="lazy"/><div className="hof-photo-ov"></div><div className="hof-photo-cap"><div className="hof-cap-name">هدية مؤسسية مخصصة</div><div className="hof-cap-role">شركات &middot; الخليج</div></div></div>
            <div className="hof-photo"><img src="/hof-mag-13.webp" alt="سيموني إنزاغي" loading="lazy"/><div className="hof-photo-ov"></div><div className="hof-photo-cap"><div className="hof-cap-name">سيموني إنزاغي</div><div className="hof-cap-role">مدرب كرة قدم &middot; إيطاليا</div></div></div>
            <div className="hof-photo"><img src="/hof-mag-17.webp" alt="دونالد ترامب" loading="lazy"/><div className="hof-photo-ov"></div><div className="hof-photo-cap"><div className="hof-cap-name">الرئيس دونالد ترامب</div><div className="hof-cap-role">أعمال ودبلوماسية &middot; الولايات المتحدة</div></div></div>
            {/* duplicate set for seamless loop */}
            <div className="hof-photo"><img src="/hof-fcb.webp" alt="" loading="lazy"/><div className="hof-photo-ov"></div><div className="hof-photo-cap"><div className="hof-cap-name">نادي برشلونة</div><div className="hof-cap-role">رياضة &middot; إسبانيا</div></div></div>
            <div className="hof-photo"><img src="/hof-best-corporate-awards.webp" alt="" loading="lazy"/><div className="hof-photo-ov"></div><div className="hof-photo-cap"><div className="hof-cap-name">جوائز التميّز المؤسسي</div><div className="hof-cap-role">حرفة &middot; الإمارات</div></div></div>
            <div className="hof-photo"><img src="/hof-king-charles-new.webp" alt="" loading="lazy"/><div className="hof-photo-ov"></div><div className="hof-photo-cap"><div className="hof-cap-name">جلالة الملك تشارلز الثالث</div><div className="hof-cap-role">الديوان الملكي &middot; المملكة المتحدة</div></div></div>
            <div className="hof-photo"><img src="/hof-pope-gifting.webp" alt="" loading="lazy"/><div className="hof-photo-ov"></div><div className="hof-photo-cap"><div className="hof-cap-name">قداسة البابا فرنسيس</div><div className="hof-cap-role">دبلوماسي &middot; الفاتيكان</div></div></div>
            <div className="hof-photo"><img src="/hof-jackie-chan-new.webp" alt="" loading="lazy"/><div className="hof-photo-ov"></div><div className="hof-photo-cap"><div className="hof-cap-name">جاكي شان</div><div className="hof-cap-role">ترفيه &middot; منصة عالمية</div></div></div>
            <div className="hof-photo"><img src="/hof-vip-gift-new.webp" alt="" loading="lazy"/><div className="hof-photo-ov"></div><div className="hof-photo-cap"><div className="hof-cap-name">محمد صلاح وسمو الشيخ حمدان</div><div className="hof-cap-role">كرة قدم &middot; تقديم في الإمارات</div></div></div>
            <div className="hof-photo"><img src="/hof-best-custom-awards-ksa.webp" alt="" loading="lazy"/><div className="hof-photo-ov"></div><div className="hof-photo-cap"><div className="hof-cap-name">جوائز مخصصة &middot; السعودية</div><div className="hof-cap-role">تميّز &middot; السعودية</div></div></div>
            <div className="hof-photo"><img src="/hof-fazza.webp" alt="" loading="lazy"/><div className="hof-photo-ov"></div><div className="hof-photo-cap"><div className="hof-cap-name">سمو الشيخ حمدان بن محمد</div><div className="hof-cap-role">ولي العهد &middot; دبي، الإمارات</div></div></div>
            <div className="hof-photo"><img src="/hof-mag-03.webp" alt="" loading="lazy"/><div className="hof-photo-ov"></div><div className="hof-photo-cap"><div className="hof-cap-name">جائزة بطولة الرياضات الإلكترونية</div><div className="hof-cap-role">ألعاب &middot; الإمارات</div></div></div>
            <div className="hof-photo"><img src="/hof-amitabh-bachchan.webp" alt="" loading="lazy"/><div className="hof-photo-ov"></div><div className="hof-photo-cap"><div className="hof-cap-name">أميتاب باتشان</div><div className="hof-cap-role">ترفيه &middot; الهند</div></div></div>
            <div className="hof-photo"><img src="/hof-mag-06.webp" alt="" loading="lazy"/><div className="hof-photo-ov"></div><div className="hof-photo-cap"><div className="hof-cap-name">كريستيانو رونالدو</div><div className="hof-cap-role">كرة قدم &middot; النصر، السعودية</div></div></div>
            <div className="hof-photo"><img src="/hof-best-custom-corporate-trophies.webp" alt="" loading="lazy"/><div className="hof-photo-ov"></div><div className="hof-photo-cap"><div className="hof-cap-name">جوائز مؤسسية خاصة</div><div className="hof-cap-role">تصنيع &middot; الإمارات</div></div></div>
            <div className="hof-photo"><img src="/hof-arabab.webp" alt="" loading="lazy"/><div className="hof-photo-ov"></div><div className="hof-photo-cap"><div className="hof-cap-name">إكسبو ٢٠٢٠ دبي &middot; حفل الجوائز</div><div className="hof-cap-role">حكومي &middot; الإمارات</div></div></div>
            <div className="hof-photo"><img src="/hof-mag-05.webp" alt="" loading="lazy"/><div className="hof-photo-ov"></div><div className="hof-photo-cap"><div className="hof-cap-name">تقديم جائزة رسمية</div><div className="hof-cap-role">دبلوماسي &middot; الإمارات</div></div></div>
            <div className="hof-photo"><img src="/hof-mag-07.webp" alt="" loading="lazy"/><div className="hof-photo-ov"></div><div className="hof-photo-cap"><div className="hof-cap-name">تريفور نوا</div><div className="hof-cap-role">ترفيه &middot; منصة عالمية</div></div></div>
            <div className="hof-photo"><img src="/hof-mag-04.webp" alt="" loading="lazy"/><div className="hof-photo-ov"></div><div className="hof-photo-cap"><div className="hof-cap-name">نوفاك ديوكوفيتش وسمو الشيخ حمدان</div><div className="hof-cap-role">تنس &middot; بطولة دبي</div></div></div>
            <div className="hof-photo"><img src="/hof-corporate-trophies.webp" alt="" loading="lazy"/><div className="hof-photo-ov"></div><div className="hof-photo-cap"><div className="hof-cap-name">مجموعة الجوائز المؤسسية</div><div className="hof-cap-role">جوائز &middot; الإمارات</div></div></div>
            <div className="hof-photo"><img src="/hof-mag-09.webp" alt="" loading="lazy"/><div className="hof-photo-ov"></div><div className="hof-photo-cap"><div className="hof-cap-name">صاحب السمو الشيخ سلطان القاسمي</div><div className="hof-cap-role">حاكم &middot; إمارة الشارقة</div></div></div>
            <div className="hof-photo"><img src="/hof-mag-01.webp" alt="" loading="lazy"/><div className="hof-photo-ov"></div><div className="hof-photo-cap"><div className="hof-cap-name">تقديم هدية رسمية</div><div className="hof-cap-role">دبلوماسي &middot; الخليج</div></div></div>
            <div className="hof-photo"><img src="/hof-mag-14.webp" alt="" loading="lazy"/><div className="hof-photo-ov"></div><div className="hof-photo-cap"><div className="hof-cap-name">Disney+ &middot; مليار مشاهدة</div><div className="hof-cap-role">ترفيه &middot; عالمي</div></div></div>
            <div className="hof-photo"><img src="/hof-mag-08.webp" alt="" loading="lazy"/><div className="hof-photo-ov"></div><div className="hof-photo-cap"><div className="hof-cap-name">جواو فيليكس</div><div className="hof-cap-role">كرة قدم &middot; الإمارات</div></div></div>
            <div className="hof-photo"><img src="/hof-custom-metal-awards.webp" alt="" loading="lazy"/><div className="hof-photo-ov"></div><div className="hof-photo-cap"><div className="hof-cap-name">جوائز معدنية مخصصة</div><div className="hof-cap-role">حرفة &middot; الإمارات</div></div></div>
            <div className="hof-photo"><img src="/hof-mag-15.webp" alt="" loading="lazy"/><div className="hof-photo-ov"></div><div className="hof-photo-cap"><div className="hof-cap-name">سمو الشيخ حمدان بن محمد</div><div className="hof-cap-role">قيادة &middot; الإمارات</div></div></div>
            <div className="hof-photo"><img src="/hof-mag-16.webp" alt="" loading="lazy"/><div className="hof-photo-ov"></div><div className="hof-photo-cap"><div className="hof-cap-name">جواو فيليكس</div><div className="hof-cap-role">كرة قدم &middot; السعودية</div></div></div>
            <div className="hof-photo"><img src="/hof-customised-corporate-awards.webp" alt="" loading="lazy"/><div className="hof-photo-ov"></div><div className="hof-photo-cap"><div className="hof-cap-name">جوائز مؤسسية مخصصة</div><div className="hof-cap-role">تميّز &middot; الخليج</div></div></div>
            <div className="hof-photo"><img src="/hof-mag-02.webp" alt="" loading="lazy"/><div className="hof-photo-ov"></div><div className="hof-photo-cap"><div className="hof-cap-name">جائزة الإمارات للاستدامة</div><div className="hof-cap-role">حكومي &middot; الإمارات</div></div></div>
            <div className="hof-photo"><img src="/hof-mag-10.webp" alt="" loading="lazy"/><div className="hof-photo-ov"></div><div className="hof-photo-cap"><div className="hof-cap-name">جياني إنفانتينو وسمو الشيخ حمدان</div><div className="hof-cap-role">رئيس الاتحاد الدولي لكرة القدم &middot; الإمارات</div></div></div>
            <div className="hof-photo"><img src="/hof-customised-plaque.webp" alt="" loading="lazy"/><div className="hof-photo-ov"></div><div className="hof-photo-cap"><div className="hof-cap-name">درع تكريم خاص</div><div className="hof-cap-role">حرفة &middot; الإمارات</div></div></div>
            <div className="hof-photo"><img src="/hof-mag-12.webp" alt="" loading="lazy"/><div className="hof-photo-ov"></div><div className="hof-photo-cap"><div className="hof-cap-name">مراسم رسمية سعودية</div><div className="hof-cap-role">حكومي &middot; السعودية</div></div></div>
            <div className="hof-photo"><img src="/hof-mag-11.webp" alt="" loading="lazy"/><div className="hof-photo-ov"></div><div className="hof-photo-cap"><div className="hof-cap-name">نادي الهلال</div><div className="hof-cap-role">دوري روشن السعودي &middot; كرة قدم</div></div></div>
            <div className="hof-photo"><img src="/hof-customized-corporate-gift.webp" alt="" loading="lazy"/><div className="hof-photo-ov"></div><div className="hof-photo-cap"><div className="hof-cap-name">هدية مؤسسية مخصصة</div><div className="hof-cap-role">شركات &middot; الخليج</div></div></div>
            <div className="hof-photo"><img src="/hof-mag-13.webp" alt="" loading="lazy"/><div className="hof-photo-ov"></div><div className="hof-photo-cap"><div className="hof-cap-name">سيموني إنزاغي</div><div className="hof-cap-role">مدرب كرة قدم &middot; إيطاليا</div></div></div>
            <div className="hof-photo"><img src="/hof-mag-17.webp" alt="" loading="lazy"/><div className="hof-photo-ov"></div><div className="hof-photo-cap"><div className="hof-cap-name">الرئيس دونالد ترامب</div><div className="hof-cap-role">أعمال ودبلوماسية &middot; الولايات المتحدة</div></div></div>
          </div>
        </div>

        {/* Quote strip — centred */}
        <div className="hof-qt">
          <div style={{ maxWidth: '720px', margin: '0 auto', padding: '0 48px' }}>
            <div className="hof-qt-mark" style={{ display: 'block', textAlign: 'center' }}>&ldquo;</div>
            <p className="hof-qt-text">«على مدى ثلاث سنوات، كانت كريستال آرك شريكنا الحصري في كل قطعة تكريم على مستوى مجلس الإدارة. والمعيار لا يتغيّر ولو بقطعة واحدة.»</p>
            <div className="hof-qt-attr">مدير الشؤون المؤسسية، بنك استثماري · مركز دبي المالي</div>
          </div>
        </div>

        {/* Logo tickers — 2 rows, full color, equal-size containers */}
        <div className="hof-logos">
          {/* Row 1: left scroll */}
          <div className="hof-lt">
            <div className="tl"><img src="/logos/Emirates_logo.svg" alt="Emirates" loading="lazy" decoding="async"/></div>
            <div className="tl"><img src="/logos/ADNOC.svg" alt="ADNOC" loading="lazy" decoding="async"/></div>
            <div className="tl"><img src="/logos/Aramco-.svg" alt="Aramco" loading="lazy" decoding="async"/></div>
            <div className="tl"><img src="/logos/DP_World_logo.svg" alt="DP World" loading="lazy" decoding="async"/></div>
            <div className="tl"><img src="/logos/Etihad-.svg" alt="Etihad" loading="lazy" decoding="async"/></div>
            <div className="tl"><img src="/logos/Emirates-NBD.webp" alt="Emirates NBD" loading="lazy" decoding="async"/></div>
            <div className="tl"><img src="/logos/Dubai-Police-Logo.svg" alt="Dubai Police" loading="lazy" decoding="async"/></div>
            <div className="tl"><img src="/logos/Museum_of_the_Future_logo.svg" alt="Museum of the Future" loading="lazy" decoding="async"/></div>
            <div className="tl"><img src="/logos/FIFA_Arab_Cup_logo.svg" alt="FIFA Arab Cup" loading="lazy" decoding="async"/></div>
            <div className="tl"><img src="/logos/Majid_Al_Futtaim_logo.svg" alt="Majid Al Futtaim" loading="lazy" decoding="async"/></div>
            <div className="tl"><img src="/logos/Sobha_-company-.svg" alt="Sobha" loading="lazy" decoding="async"/></div>
            <div className="tl"><img src="/logos/Saudi-Vision-2030.svg" alt="Saudi Vision 2030" loading="lazy" decoding="async"/></div>
            <div className="tl"><img src="/logos/Al-Rajhi-Bank.svg" alt="Al Rajhi Bank" loading="lazy" decoding="async"/></div>
            <div className="tl"><img src="/logos/First_Abu_Dhabi_Bank_Logo.svg" alt="First Abu Dhabi Bank" loading="lazy" decoding="async"/></div>
            <div className="tl"><img src="/logos/Saudi-Esports-Federation.svg" alt="Saudi Esports" loading="lazy" decoding="async"/></div>
            <div className="tl"><img src="/logos/Abu-Dhabi-Ports.webp" alt="Abu Dhabi Ports" loading="lazy" decoding="async"/></div>
            <div className="tl"><img src="/logos/Dubai-Airwing.webp" alt="Dubai Airwing" loading="lazy" decoding="async"/></div>
            <div className="tl"><img src="/logos/Fujairah-International-Airport.webp" alt="Fujairah International Airport" loading="lazy" decoding="async"/></div>
            <div className="tl"><img src="/logos/Aamro-Freight-Shipping.webp" alt="Aamro Freight &amp; Shipping" loading="lazy" decoding="async"/></div>
            <div className="tl"><img src="/logos/Grosvenor-House.webp" alt="Grosvenor House Dubai" loading="lazy" decoding="async"/></div>
            <div className="tl"><img src="/logos/KAYALI.webp" alt="KAYALI" loading="lazy" decoding="async"/></div>
            <div className="tl"><img src="/logos/Nafis.webp" alt="Nafis" loading="lazy" decoding="async"/></div>
            {/* duplicate for seamless loop */}
            <div className="tl"><img src="/logos/Emirates_logo.svg" alt="Emirates" loading="lazy" decoding="async"/></div>
            <div className="tl"><img src="/logos/ADNOC.svg" alt="ADNOC" loading="lazy" decoding="async"/></div>
            <div className="tl"><img src="/logos/Aramco-.svg" alt="Aramco" loading="lazy" decoding="async"/></div>
            <div className="tl"><img src="/logos/DP_World_logo.svg" alt="DP World" loading="lazy" decoding="async"/></div>
            <div className="tl"><img src="/logos/Etihad-.svg" alt="Etihad" loading="lazy" decoding="async"/></div>
            <div className="tl"><img src="/logos/Emirates-NBD.webp" alt="Emirates NBD" loading="lazy" decoding="async"/></div>
            <div className="tl"><img src="/logos/Dubai-Police-Logo.svg" alt="Dubai Police" loading="lazy" decoding="async"/></div>
            <div className="tl"><img src="/logos/Museum_of_the_Future_logo.svg" alt="Museum of the Future" loading="lazy" decoding="async"/></div>
            <div className="tl"><img src="/logos/FIFA_Arab_Cup_logo.svg" alt="FIFA Arab Cup" loading="lazy" decoding="async"/></div>
            <div className="tl"><img src="/logos/Majid_Al_Futtaim_logo.svg" alt="Majid Al Futtaim" loading="lazy" decoding="async"/></div>
            <div className="tl"><img src="/logos/Sobha_-company-.svg" alt="Sobha" loading="lazy" decoding="async"/></div>
            <div className="tl"><img src="/logos/Saudi-Vision-2030.svg" alt="Saudi Vision 2030" loading="lazy" decoding="async"/></div>
            <div className="tl"><img src="/logos/Al-Rajhi-Bank.svg" alt="Al Rajhi Bank" loading="lazy" decoding="async"/></div>
            <div className="tl"><img src="/logos/First_Abu_Dhabi_Bank_Logo.svg" alt="First Abu Dhabi Bank" loading="lazy" decoding="async"/></div>
            <div className="tl"><img src="/logos/Saudi-Esports-Federation.svg" alt="Saudi Esports" loading="lazy" decoding="async"/></div>
            <div className="tl"><img src="/logos/Abu-Dhabi-Ports.webp" alt="Abu Dhabi Ports" loading="lazy" decoding="async"/></div>
            <div className="tl"><img src="/logos/Dubai-Airwing.webp" alt="Dubai Airwing" loading="lazy" decoding="async"/></div>
            <div className="tl"><img src="/logos/Fujairah-International-Airport.webp" alt="Fujairah International Airport" loading="lazy" decoding="async"/></div>
            <div className="tl"><img src="/logos/Aamro-Freight-Shipping.webp" alt="Aamro Freight &amp; Shipping" loading="lazy" decoding="async"/></div>
            <div className="tl"><img src="/logos/Grosvenor-House.webp" alt="Grosvenor House Dubai" loading="lazy" decoding="async"/></div>
            <div className="tl"><img src="/logos/KAYALI.webp" alt="KAYALI" loading="lazy" decoding="async"/></div>
            <div className="tl"><img src="/logos/Nafis.webp" alt="Nafis" loading="lazy" decoding="async"/></div>
          </div>
          {/* Row 2: right scroll */}
          <div className="hof-lt hof-lt-rev">
            <div className="tl"><img src="/logos/Cartier_logo.svg" alt="Cartier" loading="lazy" decoding="async"/></div>
            <div className="tl"><img src="/logos/DHL.webp" alt="DHL" loading="lazy" decoding="async"/></div>
            <div className="tl"><img src="/logos/adidas.webp" alt="Adidas" loading="lazy" decoding="async"/></div>
            <div className="tl"><img src="/logos/Etisalat.svg" alt="Etisalat" loading="lazy" decoding="async"/></div>
            <div className="tl"><img src="/logos/Association_of_Tennis_Professionals_logo.svg" alt="ATP" loading="lazy" decoding="async"/></div>
            <div className="tl"><img src="/logos/ENOC_DL_logo.svg" alt="ENOC" loading="lazy" decoding="async"/></div>
            <div className="tl"><img src="/logos/Sharjah-Sports-Council.svg" alt="الشارقة الرياضي" loading="lazy" decoding="async"/></div>
            <div className="tl"><img src="/logos/Makkah-Excellence-Award.svg" alt="جائزة مكة للتميّز" loading="lazy" decoding="async"/></div>
            <div className="tl"><img src="/logos/Mahd-Sports-Academy.svg" alt="Mahd Sports" loading="lazy" decoding="async"/></div>
            <div className="tl"><img src="/logos/DP_World-T20-.svg" alt="DP World T20" loading="lazy" decoding="async"/></div>
            <div className="tl"><img src="/logos/Leo-Burnett.webp" alt="Leo Burnett" loading="lazy" decoding="async"/></div>
            <div className="tl"><img src="/logos/Abu-Dhabi-Grand-Prix.png" alt="Abu Dhabi Grand Prix" loading="lazy" decoding="async"/></div>
            <div className="tl"><img src="/logos/Deyaar-Development.png" alt="Deyaar" loading="lazy" decoding="async"/></div>
            <div className="tl"><img src="/logos/EXPO-City-Dubai.webp" alt="Expo City Dubai" loading="lazy" decoding="async"/></div>
            <div className="tl"><img src="/logos/Nespresso_logo.png" alt="Nespresso" loading="lazy" decoding="async"/></div>
            <div className="tl"><img src="/logos/Ministry-of-Health-Kuwait.webp" alt="Ministry of Health, Kuwait" loading="lazy" decoding="async"/></div>
            <div className="tl"><img src="/logos/Royal-Commission-Jubail-Yanbu.webp" alt="Royal Commission for Jubail and Yanbu" loading="lazy" decoding="async"/></div>
            <div className="tl"><img src="/logos/Makkah-Route-Initiative.webp" alt="Makkah Route Initiative" loading="lazy" decoding="async"/></div>
            <div className="tl"><img src="/logos/Saudi-Cricket-SACF.webp" alt="Saudi Cricket" loading="lazy" decoding="async"/></div>
            <div className="tl"><img src="/logos/Dubai-Marathon.webp" alt="Dubai Marathon" loading="lazy" decoding="async"/></div>
            <div className="tl"><img src="/logos/Ferrari-Owners-Club-UAE.webp" alt="Ferrari Owners Club UAE" loading="lazy" decoding="async"/></div>
            {/* duplicate */}
            <div className="tl"><img src="/logos/Cartier_logo.svg" alt="Cartier" loading="lazy" decoding="async"/></div>
            <div className="tl"><img src="/logos/DHL.webp" alt="DHL" loading="lazy" decoding="async"/></div>
            <div className="tl"><img src="/logos/adidas.webp" alt="Adidas" loading="lazy" decoding="async"/></div>
            <div className="tl"><img src="/logos/Etisalat.svg" alt="Etisalat" loading="lazy" decoding="async"/></div>
            <div className="tl"><img src="/logos/Association_of_Tennis_Professionals_logo.svg" alt="ATP" loading="lazy" decoding="async"/></div>
            <div className="tl"><img src="/logos/ENOC_DL_logo.svg" alt="ENOC" loading="lazy" decoding="async"/></div>
            <div className="tl"><img src="/logos/Sharjah-Sports-Council.svg" alt="الشارقة الرياضي" loading="lazy" decoding="async"/></div>
            <div className="tl"><img src="/logos/Makkah-Excellence-Award.svg" alt="جائزة مكة للتميّز" loading="lazy" decoding="async"/></div>
            <div className="tl"><img src="/logos/Mahd-Sports-Academy.svg" alt="Mahd Sports" loading="lazy" decoding="async"/></div>
            <div className="tl"><img src="/logos/DP_World-T20-.svg" alt="DP World T20" loading="lazy" decoding="async"/></div>
            <div className="tl"><img src="/logos/Leo-Burnett.webp" alt="Leo Burnett" loading="lazy" decoding="async"/></div>
            <div className="tl"><img src="/logos/Abu-Dhabi-Grand-Prix.png" alt="Abu Dhabi Grand Prix" loading="lazy" decoding="async"/></div>
            <div className="tl"><img src="/logos/Deyaar-Development.png" alt="Deyaar" loading="lazy" decoding="async"/></div>
            <div className="tl"><img src="/logos/EXPO-City-Dubai.webp" alt="Expo City Dubai" loading="lazy" decoding="async"/></div>
            <div className="tl"><img src="/logos/Nespresso_logo.png" alt="Nespresso" loading="lazy" decoding="async"/></div>
            <div className="tl"><img src="/logos/Ministry-of-Health-Kuwait.webp" alt="Ministry of Health, Kuwait" loading="lazy" decoding="async"/></div>
            <div className="tl"><img src="/logos/Royal-Commission-Jubail-Yanbu.webp" alt="Royal Commission for Jubail and Yanbu" loading="lazy" decoding="async"/></div>
            <div className="tl"><img src="/logos/Makkah-Route-Initiative.webp" alt="Makkah Route Initiative" loading="lazy" decoding="async"/></div>
            <div className="tl"><img src="/logos/Saudi-Cricket-SACF.webp" alt="Saudi Cricket" loading="lazy" decoding="async"/></div>
            <div className="tl"><img src="/logos/Dubai-Marathon.webp" alt="Dubai Marathon" loading="lazy" decoding="async"/></div>
            <div className="tl"><img src="/logos/Ferrari-Owners-Club-UAE.webp" alt="Ferrari Owners Club UAE" loading="lazy" decoding="async"/></div>
          </div>
        </div>
      </section>

      {/* CRAFT — factory, not studio */}
      <section className="craft">
        {/* Full-width factory scale moment */}
        <div className="factory-banner">
          <img src="/factory-c1.webp" alt="مصنع كريستال آرك، دبي" loading="lazy" decoding="async"/>
          <div className="factory-over">
            <div className="fac-num">٢٠٠٬٠٠٠ <em>قدم مربعة</em></div>
            <div className="fac-lbl">منشأة التصنيع · دبي، الإمارات</div>
            <div className="fac-sub">أكبر منشأة لتصنيع الجوائز والدروع في الشرق الأوسط. كل قطعة تُصمَّم وتُصنع وتُشطَّب وتُشحن تحت سقف واحد.</div>
            <div className="fac-line"></div>
          </div>
        </div>
        <div className="craft-grid">
          <div className="craft-photos reveal">
            <div><img src="/factory-c1.webp" loading="lazy" alt="" /></div>
            <div><img src="/factory-c2.webp" loading="lazy" alt="" /></div>
            <div><img src="/factory-c3.webp" loading="lazy" alt="" /></div>
          </div>
          <div className="craft-copy" style={{ padding: '56px 80px 56px 64px' }}>
              <div className="sec-eye reveal">الحرفة</div>
              <h2 className="reveal d1">تُصنع باليد.<br/><em>وتُصقلها<br/>٢٥ سنة.</em></h2>
              <div className="gold-line reveal d2"></div>
              <p className="reveal d2">لا نُسند شيئًا إلى الخارج. كل قطعة تحمل اسم كريستال آرك تُصمَّم وتُصنع وتُفحص وتُغلَّف داخل منشأتنا في الإمارات، على يد ٢٥٠ حرفيًا أمضوا حياتهم المهنية في هذا العمل وحده.</p>
              <p className="reveal d3" style={{ color: 'var(--muted)', fontSize: '13px' }}>من قطعة واحدة بالطلب الخاص إلى دفعة من ٥٬٠٠٠ وحدة، المعيار واحد.</p>
              <div className="pillars">
                <div className="pillar reveal"><div className="p-num">01</div><div><div className="p-title">التصميم داخليًا</div><div className="p-desc">نماذج ثلاثية الأبعاد تُعرض للاعتماد قبل أن تُقطع أول قطعة كريستال.</div></div></div>
                <div className="pillar reveal d1"><div className="p-num">02</div><div><div className="p-title">تصنيع بدقة</div><div className="p-desc">دقة آلات التحكم الرقمي مع تشطيب الحرفي بيده، انضباط الآلة وروح الصانع.</div></div></div>
                <div className="pillar reveal d2"><div className="p-num">03</div><div><div className="p-title">تسليم بلا عيوب</div><div className="p-desc">كل قطعة تُعتمد على حدة. وإن لم تكن مثالية، لا تغادر أرض المصنع.</div></div></div>
              </div>
            </div>
          </div>
      </section>

      {/* PROCESS — From Vision to Presentation Piece */}
      <section className="process" id="process">
        <div className="con">
          <div className="process-head">
            <div>
              <div className="sec-eye reveal">آلية العمل</div>
              <h2 className="reveal d1">طلبكم يوم الاثنين.<br/><em>وصندوق مُغلَق يوم الجمعة.</em></h2>
            </div>
            <p className="reveal d1">من أول حديث إلى الشحن الأخير، كل مرحلة واضحة، وتجري داخليًا، وتُبنى حول موعدكم. خمس خطوات. وبلا مفاجآت.</p>
          </div>
          <div className="journey">
            <div className="jstep reveal">
              <div className="jstep-icon">
                <svg viewBox="0 0 24 24"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
              </div>
              <div className="jstep-n">01</div>
              <div className="jstep-title">الطلب والتصوّر</div>
              <p className="jstep-desc">تشاركوننا المناسبة والجمهور والرسالة. نسأل ونرسم ونثبّت التصوّر معًا.</p>
            </div>
            <div className="jstep reveal d1">
              <div className="jstep-icon">
                <svg viewBox="0 0 24 24"><polygon points="12,2 2,7 12,12 22,7"/><polyline points="2,17 12,22 22,17"/><polyline points="2,12 12,17 22,12"/></svg>
              </div>
              <div className="jstep-n">02</div>
              <div className="jstep-title">التصميم ثلاثي الأبعاد</div>
              <p className="jstep-desc">نموذج واقعي لاعتمادكم. ولا تُقطع قطعة كريستال واحدة قبل موافقتكم.</p>
            </div>
            <div className="jstep reveal d2">
              <div className="jstep-icon">
                <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>
              </div>
              <div className="jstep-n">03</div>
              <div className="jstep-title">التصنيع</div>
              <p className="jstep-desc">القص بالتحكم الرقمي والصبّ والسفع الرملي والحفر، كلها داخليًا على مساحة ٢٠٠٬٠٠٠ قدم مربعة. دون أي إسناد خارجي.</p>
            </div>
            <div className="jstep reveal d3">
              <div className="jstep-icon">
                <svg viewBox="0 0 24 24"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
              </div>
              <div className="jstep-n">04</div>
              <div className="jstep-title">التشطيب الحرفي</div>
              <p className="jstep-desc">صقل يدوي وطلاء بالذهب وتجميع. على يد ٢٥٠ حرفيًا بُنيت حياتهم المهنية على هذا العمل تحديدًا.</p>
            </div>
            <div className="jstep reveal d4">
              <div className="jstep-icon">
                <svg viewBox="0 0 24 24"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22,4 12,14.01 9,11.01"/></svg>
              </div>
              <div className="jstep-n">05</div>
              <div className="jstep-title">الفحص والتسليم</div>
              <p className="jstep-desc">كل قطعة تُعتمد على حدة. وتغليف بعناية فائقة. وتسليم في موعد مناسبتكم، مضمون.</p>
            </div>
          </div>
        </div>
      </section>


      {/* LOGO STRIP — kept for legacy compatibility, hidden */}
      <section style={{ display: 'none' }}>
        <div className="logo-ticker">
          <div className="lt-track" style={{ "--run": 2640 } as React.CSSProperties}>
            <div className="lt-logo"><img src="/logos/Emirates_logo.svg" alt="Emirates" loading="lazy" decoding="async"/></div>
            <div className="lt-logo"><img src="/logos/DP_World_logo.svg" alt="DP World" loading="lazy" decoding="async"/></div>
            <div className="lt-logo"><img src="/logos/Abu-Dhabi-Grand-Prix.png" alt="Abu Dhabi Grand Prix" loading="lazy" decoding="async"/></div>
            <div className="lt-logo"><img src="/logos/Museum_of_the_Future_logo.svg" alt="Museum of the Future" loading="lazy" decoding="async"/></div>
            <div className="lt-logo"><img src="/logos/Dubai-Police-Logo.svg" alt="Dubai Police" loading="lazy" decoding="async"/></div>
            <div className="lt-logo"><img src="/logos/FIFA_Arab_Cup_logo.svg" alt="FIFA Arab Cup" loading="lazy" decoding="async"/></div>
            <div className="lt-logo"><img src="/logos/Deyaar-Development.png" alt="Deyaar" loading="lazy" decoding="async"/></div>
            <div className="lt-logo"><img src="/logos/Sobha_-company-.svg" alt="Sobha" loading="lazy" decoding="async"/></div>
            <div className="lt-logo"><img src="/logos/Emirates_logo.svg" alt="Emirates" loading="lazy" decoding="async"/></div>
            <div className="lt-logo"><img src="/logos/DP_World_logo.svg" alt="DP World" loading="lazy" decoding="async"/></div>
            <div className="lt-logo"><img src="/logos/Abu-Dhabi-Grand-Prix.png" alt="Abu Dhabi Grand Prix" loading="lazy" decoding="async"/></div>
            <div className="lt-logo"><img src="/logos/Museum_of_the_Future_logo.svg" alt="Museum of the Future" loading="lazy" decoding="async"/></div>
            <div className="lt-logo"><img src="/logos/Dubai-Police-Logo.svg" alt="Dubai Police" loading="lazy" decoding="async"/></div>
            <div className="lt-logo"><img src="/logos/FIFA_Arab_Cup_logo.svg" alt="FIFA Arab Cup" loading="lazy" decoding="async"/></div>
            <div className="lt-logo"><img src="/logos/Deyaar-Development.png" alt="Deyaar" loading="lazy" decoding="async"/></div>
            <div className="lt-logo"><img src="/logos/Sobha_-company-.svg" alt="Sobha" loading="lazy" decoding="async"/></div>
          </div>
        </div>
      </section>

      {/* TRUST — redesigned for maximum authority impact */}
      <section className="trust">
        <div className="con">

          {/* Big number + intro */}
          <div className="trust-hero reveal">
            <div className="trust-num-block">
              <span className="trust-n">١٥٬٠٠٠<sup>+</sup></span>
              <div className="trust-n-label">عميل.&lt;br/&gt;وبلا أي تنازل.</div>
            </div>
            <div className="trust-intro">
              <p>حكومات الخليج، وأبرز علاماته التجارية، وكبرى شركاته، وأعظم لحظاته الرياضية، جميعها وثقت بكريستال آرك لتصنع القطعة التي وقفت على المنصة.</p>
              <p>أكثر من ٤٠٬٠٠٠ مشروع منجز. ٢٥ عامًا. وليس بينها مشروع واحد لا نفخر به.</p>
            </div>
          </div>

          {/* Testimonials — editorial split panel */}
          <div className="testi-outer reveal">
            <div className="testi-split">

              {/* LEFT: heading + cycling quote + nav */}
              <div className="testi-left">
                <div className="testi-eyebrow-sm">آراء العملاء</div>
                <h3 className="testi-heading">موضع ثقة<em>عملاؤنا</em></h3>

                <div className="tq-slide" id="tq-slide">
                  <p className="tq-text" id="tq-text">لم تسلّمنا كريستال آرك جوائز فحسب، بل سلّمتنا القطعة المحورية في حفلنا كلّه، قطعًا بدت جديرة فعلًا بالإنجاز الذي تمثّله.</p>
                  <div className="tq-attr">
                    <div className="tq-attr-bar"></div>
                    <div>
                      <div className="tq-attr-name" id="tq-name">نائب رئيس الشؤون المؤسسية</div>
                      <div className="tq-attr-role" id="tq-role">مجموعة الإمارات</div>
                    </div>
                  </div>
                </div>

                <div className="tq-controls">
                  <div className="tq-progress" id="tq-progress"></div>
                  <button className="tql-btn active" data-idx="0" aria-label="عرض الشهادة ١">
                    <img src="/logos/Emirates_logo.svg" alt="Emirates" loading="lazy" decoding="async"/>
                  </button>
                </div>
              </div>

              {/* RIGHT: single image, crossfaded per testimonial */}
              <div className="testi-right" id="tq-img-wrap">
                <img className="active" src="/testi-emirates.webp" alt="من أعمال كريستال آرك لعملائها" loading="lazy" decoding="async"/>
              </div>

            </div>
          </div>

        </div>
      </section>


      {/* CONTACT */}
      <section className="contact" id="contact">
        <div className="con">
          <div className="contact-grid">
            <div className="contact-info">
              <div className="sec-eye reveal">تواصلوا معنا</div>
              <h2 className="reveal d1">أخبرونا عن<br/><em>تصوّركم</em></h2>
              <div className="gold-line reveal d2"></div>
              <p className="reveal d2">نردّ خلال ساعتين. وعرض سعر كامل خلال ٢٤ ساعة. دون التزام ودون تكلفة، مجرّد حديث عمّا تودّون صنعه.</p>
              <div className="office-cards reveal d2">
                <div className="ofc">
                  <div className="ofc-lbl">المقر الرئيسي، دبي</div>
                  <div className="ofc-name">كريستال آرك فاكتوري ذ.م.م</div>
                  <div className="ofc-addr">١٩٠١ برج الموسى ١، مركز التجارة الأول، دبي، الإمارات العربية المتحدة</div>
                  <div className="ofc-tel">+971 4 347 9191 <span className="ofc-dot">·</span> 800 279 7272</div>
                  <div className="ofc-addr" style={{ marginTop: '6px', fontStyle: 'italic', opacity: '.75' }}>جولات المصنع متاحة عند الطلب.</div>
                </div>
                <div className="ofc">
                  <div className="ofc-lbl">مكتب أبوظبي</div>
                  <div className="ofc-name">أبوظبي</div>
                  <div className="ofc-addr">مبنى رولكس ٦، شارع الشيخ راشد بن سعيد، منطقة الدانة ١، الطابق الثاني، مكتب رقم ٠٢، أبوظبي، الإمارات</div>
                  <div className="ofc-tel">+971 2 644 4220</div>
                </div>
                <div className="ofc">
                  <div className="ofc-lbl">مكتب السعودية، الرياض</div>
                  <div className="ofc-name">المملكة العربية السعودية</div>
                  <div className="ofc-addr">٤٥١٣ طريق الملك عبدالعزيز، حي السليمانية، ١٢٢٤٣، المملكة العربية السعودية</div>
                </div>
              </div>
              <a href="https://wa.me/971565364384?text=%D9%85%D8%B1%D8%AD%D8%A8%D9%8B%D8%A7%20%D9%83%D8%B1%D9%8A%D8%B3%D8%AA%D8%A7%D9%84%20%D8%A2%D8%B1%D9%83%D8%8C%20%D8%A3%D8%B1%D8%BA%D8%A8%20%D9%81%D9%8A%20%D8%A7%D9%84%D8%A7%D8%B3%D8%AA%D9%81%D8%B3%D8%A7%D8%B1%20%D8%B9%D9%86%20%D8%AC%D9%88%D8%A7%D8%A6%D8%B2%20%D9%83%D8%B1%D9%8A%D8%B3%D8%AA%D8%A7%D9%84%20%D8%A3%D9%88%20%D9%87%D8%AF%D8%A7%D9%8A%D8%A7%20%D9%85%D8%A4%D8%B3%D8%B3%D9%8A%D8%A9%20%D9%85%D8%AE%D8%B5%D9%91%D8%B5%D8%A9.%20%D9%8A%D8%B1%D8%AC%D9%89%20%D8%A7%D9%84%D9%85%D8%B3%D8%A7%D8%B9%D8%AF%D8%A9." className="wa-big reveal d3" target="_blank">
                <span className="wa-dot"><svg viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.125.558 4.122 1.532 5.856L.058 23.486a.5.5 0 00.609.61l5.749-1.519A11.95 11.95 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.9a9.9 9.9 0 01-5.031-1.37l-.361-.214-3.714.981.993-3.648-.250-.374A9.9 9.9 0 012.1 12C2.1 6.535 6.535 2.1 12 2.1S21.9 6.535 21.9 12 17.465 21.9 12 21.9z"/></svg></span>
                <div><div className="wa-big-t">واتساب، الأسرع في الرد</div><div className="wa-big-s">الرد عادةً خلال ساعة</div></div>
              </a>
            </div>

            <form className="form-box reveal d1" name="homepage-enquiry-ar" method="POST" action="/ar/thank-you" data-netlify="true" data-netlify-honeypot="bot-field">
              <input type="hidden" name="form-name" value="homepage-enquiry-ar" />
              <p className="sr-only" aria-hidden="true"><label>Do not fill this out: <input name="bot-field" /></label></p>
              <div className="form-title">أرسل استفسارًا</div>
              <div className="f-row">
                <div className="fg"><label htmlFor="hp-text-1">الاسم <span className="req">*</span></label><input id="hp-text-1" name="name" type="text" required placeholder="الاسم الكامل"/></div>
                <div className="fg"><label htmlFor="hp-text-2">جهة العمل</label><input id="hp-text-2" name="company" type="text" placeholder="جهة العمل"/></div>
              </div>
              <div className="f-row">
                <div className="fg"><label htmlFor="hp-email-1">البريد الإلكتروني <span className="req">*</span></label><input id="hp-email-1" name="email" type="email" required placeholder="ahmed@company.sa"/></div>
                <div className="fg"><label htmlFor="hp-tel-1">رقم الهاتف</label><input id="hp-tel-1" name="phone" type="tel" placeholder="+971 ..."/></div>
              </div>
              <div className="fg full">
                <label htmlFor="hp-brief">أخبرونا عن مشروعكم <span className="req">*</span></label>
                <textarea id="hp-brief" name="message" required placeholder="المناسبة، ونوع المنتج، والكمية، والموعد، أي تفصيل يساعدنا على فهم ما تحتاجونه."></textarea>
              </div>
              <button type="submit" className="btn-submit">
                أرسل الطلب
                <svg viewBox="0 0 20 20" strokeWidth="1.5"><path d="M4 10h12M10 4l6 6-6 6" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </button>
              <p className="form-note">بلا رسائل مزعجة ولا مكالمات متابعة. عرض سعر فقط.</p>
            </form>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <HomeClient locale="ar" />
    </>
  );
}
