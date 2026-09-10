import Reveal from "@/components/Reveal";
import { Locale, DEFAULT_LOCALE } from "@/lib/i18n";
import { ui } from "@/lib/dictionaries/ui";

const IMGS = [
  "/occ-government-v2.webp",
  "/occ-corporate-v2.webp",
  "/occ-sports-v2.webp",
  "/occ-luxury-v2.webp",
  "/occ-advertising-v2.webp",
];

/* Phones get separately-rendered files. The desktop set is 764x1146 portrait
   for a 1/1 card; below 640px the card becomes a 16/9 band, which meant a
   centred crop of a portrait photo upscaled ~1.6x. These are rendered at the
   band's own shape. Breakpoint matches the .ind-grid rule in globals.css. */
const IMGS_M = [
  "/occ-government-m.webp",
  "/occ-corporate-m.webp",
  "/occ-sports-m.webp",
  "/occ-luxury-m.webp",
  "/occ-advertising-m.webp",
];

export default function IndustriesStrip({ locale = DEFAULT_LOCALE }: { locale?: Locale }) {
  const t = ui(locale).industries;
  const INDUSTRIES = t.items.map((title, i) => ({ title, img: IMGS[i], imgM: IMGS_M[i] }));
  return (
    <section style={{ background: "var(--color-s1)", padding: "56px 0", borderTop: "1px solid rgba(26,21,18,0.08)", borderBottom: "1px solid rgba(26,21,18,0.08)" }}>
      <div className="con">
        <Reveal>
          <div className="eyebrow" style={{ marginBottom: "20px" }}>{t.eyebrow}</div>
        </Reveal>
        <div className="ind-grid" style={{ gap: "8px" }}>
          {INDUSTRIES.map((ind, i) => (
            <Reveal key={ind.title} delay={i * 60}>
              <div style={{ position: "relative", overflow: "hidden", aspectRatio: "1 / 1" }}>
                <picture>
                  <source media="(max-width: 640px)" srcSet={ind.imgM} />
                  { }
                  <img
                    src={ind.img}
                    alt={ind.title}
                    loading="lazy"
                    style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", filter: "brightness(0.75) saturate(0.9)" }}
                  />
                </picture>
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(12,10,7,0.88) 0%, rgba(12,10,7,0.1) 55%, transparent 75%)" }} />
                <div style={{ position: "absolute", bottom: "12px", left: "12px", right: "12px" }}>
                  <div style={{ fontFamily: "var(--font-display)", fontSize: "0.9rem", fontWeight: 400, color: "#EDE8DC", lineHeight: 1.15 }}>
                    {ind.title}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
