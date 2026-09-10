/* eslint-disable react/no-unescaped-entities */
import EnquiryFormAnalytics from "@/components/EnquiryFormAnalytics";
import type { Metadata } from "next";
import { alternatesFor } from "@/lib/i18n";
import HomeClient from "@/components/HomeClient";
import "../../home.css";

export const metadata: Metadata = {
  alternates: alternatesFor("en", "/"),
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
            alt="Mohammed Bin Rashid Al Maktoum Creative Sports Award, made by Crystal Arc"
            width={1900}
            height={1419}
            fetchPriority="high"
            decoding="async"
          />
          <span className="trophy-label">Handcrafted · Dubai</span>
        </div>
        <div className="hero-inner">
          <div>
            <div className="eyebrow reveal">Dubai · 25 Years of Craft</div>
            <h1 className="reveal d1">
              The Pieces<br/>
              <span className="cycle-wrap"><span id="cycle-word"></span><span className="tw-cursor"></span></span><br/>
              <span style={{ color: 'var(--i60)' }}>Want the World<br/>to Remember</span>
            </h1>
            <p className="hero-sub reveal d2">
              Crystal Arc designs and manufactures the trophies, gifts, and presentation pieces that mark the moments <strong>governments, brands, and institutions</strong> want the world to remember.
            </p>
            <div className="hero-actions reveal d3">
              <a href="#contact" className="btn-red">Request a Custom Piece</a>
              <a href="https://wa.me/971565364384?text=Hi%20Crystal%20Arc%2C%20I%E2%80%99m%20interested%20in%20bespoke%20crystal%20trophies%20or%20corporate%20gifts.%20Please%20assist." className="btn-wa" target="_blank">
                <span className="wa-dot"><svg viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.125.558 4.122 1.532 5.856L.058 23.486a.5.5 0 00.609.61l5.749-1.519A11.95 11.95 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.9a9.9 9.9 0 01-5.031-1.37l-.361-.214-3.714.981.993-3.648-.250-.374A9.9 9.9 0 012.1 12C2.1 6.535 6.535 2.1 12 2.1S21.9 6.535 21.9 12 17.465 21.9 12 21.9z"/></svg></span>
                Chat on WhatsApp
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
          <div className="stat reveal"><div className="stat-n" data-count="25" data-suffix="+">25+</div><div className="stat-l">Years of Craft</div></div>
          <div className="stat reveal d1"><div className="stat-n" data-count="15000" data-suffix="+">15K+</div><div className="stat-l">Clients Served</div></div>
          <div className="stat reveal d2"><div className="stat-n" data-count="40000" data-suffix="+">40K+</div><div className="stat-l">Projects Completed</div></div>
          <div className="stat reveal d3"><div className="stat-n" data-count="250" data-suffix="">250</div><div className="stat-l">Master Artisans</div></div>
        </div>
      </div>

      {/* PRODUCTS */}
      <section className="products" id="products">
        <div className="con">
          <div className="prod-head">
            <div>
              <div className="sec-eye reveal">What We Make</div>
              <h2 className="reveal d1">Four Categories.<br/><em>Infinite Possibilities.</em></h2>
            </div>
            <div className="reveal d1">
              <p>From crystal trophies presented to heads of state, to bespoke corporate gifts that open conversations. Every piece begins as a blank page and ends as something irreplaceable.</p>
              <a href="/en/products" className="link-gold">View full catalogue →</a>
            </div>
          </div>
          <div className="prod-grid">
            <a className="pc c1 product-shot reveal" href="/en/products/trophies-awards">
              <picture>
                <source media="(max-width: 620px)" srcSet="/hp-cat-trophies-m.webp"/>
                <img src="/hp-cat-trophies-v2.webp" alt="Trophies &amp; Awards"/>
              </picture>
              <div className="pc-ov"></div><div className="pc-info"><div className="pc-cat">01</div><h3 className="pc-name">Trophies &amp; Awards</h3></div>
              <div className="pc-arr"><svg viewBox="0 0 16 16" strokeWidth="1.5"><path d="M3 13L13 3M13 3H6M13 3v7" strokeLinecap="round" strokeLinejoin="round"/></svg></div>
            </a>
            <a className="pc c2 product-shot reveal d1" href="/en/products/corporate-gifts">
              <picture>
                <source media="(max-width: 620px)" srcSet="/hp-cat-corporate-m.webp"/>
                <img src="/hp-cat-corporate-v2.webp" alt="Corporate Gifts" loading="lazy" decoding="async"/>
              </picture>
              <div className="pc-ov"></div><div className="pc-info"><div className="pc-cat">02</div><h3 className="pc-name">Corporate Gifts</h3></div>
              <div className="pc-arr"><svg viewBox="0 0 16 16" strokeWidth="1.5"><path d="M3 13L13 3M13 3H6M13 3v7" strokeLinecap="round" strokeLinejoin="round"/></svg></div>
            </a>
            <a className="pc c4 product-shot reveal d1" href="/en/products/home-decor">
              <picture>
                <source media="(max-width: 620px)" srcSet="/hp-cat-homedecor-m.webp"/>
                <img src="/hp-cat-homedecor-v2.webp" alt="Home &amp; Décor" loading="lazy" decoding="async"/>
              </picture>
              <div className="pc-ov"></div><div className="pc-info"><div className="pc-cat">03</div><h3 className="pc-name">Home &amp; Décor</h3></div>
              <div className="pc-arr"><svg viewBox="0 0 16 16" strokeWidth="1.5"><path d="M3 13L13 3M13 3H6M13 3v7" strokeLinecap="round" strokeLinejoin="round"/></svg></div>
            </a>
            <a className="pc c5 product-shot reveal d2" href="/en/products/boxes">
              <picture>
                <source media="(max-width: 620px)" srcSet="/hp-cat-boxes-m.webp"/>
                <img src="/hp-cat-boxes-v2.webp" alt="Luxury Boxes" loading="lazy" decoding="async"/>
              </picture>
              <div className="pc-ov"></div><div className="pc-info"><div className="pc-cat">04</div><h3 className="pc-name">Luxury Boxes</h3></div>
              <div className="pc-arr"><svg viewBox="0 0 16 16" strokeWidth="1.5"><path d="M3 13L13 3M13 3H6M13 3v7" strokeLinecap="round" strokeLinejoin="round"/></svg></div>
            </a>
          </div>
        </div>
      </section>


      {/* GALLERY — infinite auto-scroll marquee, pauses on hover */}
      <div className="gallery">
        <div className="gt-track">
          <div className="g-item"><img src="/slide-01.webp" loading="lazy" width="600" height="750" alt="Crystal Arc commissioned trophy, award or corporate gift"/></div>
          <div className="g-item"><img src="/slide-02.webp" loading="lazy" width="600" height="750" alt="Crystal Arc commissioned trophy, award or corporate gift"/></div>
          <div className="g-item"><img src="/slide-03.webp" loading="lazy" width="600" height="750" alt="Crystal Arc commissioned trophy, award or corporate gift"/></div>
          <div className="g-item"><img src="/slide-04.webp" loading="lazy" width="600" height="750" alt="Crystal Arc commissioned trophy, award or corporate gift"/></div>
          <div className="g-item"><img src="/slide-05.webp" loading="lazy" width="600" height="750" alt="Crystal Arc commissioned trophy, award or corporate gift"/></div>
          <div className="g-item"><img src="/slide-06.webp" loading="lazy" width="600" height="750" alt="Crystal Arc commissioned trophy, award or corporate gift"/></div>
          <div className="g-item"><img src="/slide-07.webp" loading="lazy" width="600" height="750" alt="Crystal Arc commissioned trophy, award or corporate gift"/></div>
          <div className="g-item"><img src="/slide-08.webp" loading="lazy" width="600" height="750" alt="Crystal Arc commissioned trophy, award or corporate gift"/></div>
          <div className="g-item"><img src="/slide-09.webp" loading="lazy" width="600" height="750" alt="Crystal Arc commissioned trophy, award or corporate gift"/></div>
          <div className="g-item"><img src="/slide-10.webp" loading="lazy" width="600" height="750" alt="Crystal Arc commissioned trophy, award or corporate gift"/></div>
          <div className="g-item"><img src="/slide-11.webp" loading="lazy" width="600" height="750" alt="Crystal Arc commissioned trophy, award or corporate gift"/></div>
          {/* Duplicated for seamless loop */}
          <div className="g-item"><img src="/slide-01.webp" loading="lazy" width="600" height="750" alt="Crystal Arc commissioned trophy, award or corporate gift"/></div>
          <div className="g-item"><img src="/slide-02.webp" loading="lazy" width="600" height="750" alt="Crystal Arc commissioned trophy, award or corporate gift"/></div>
          <div className="g-item"><img src="/slide-03.webp" loading="lazy" width="600" height="750" alt="Crystal Arc commissioned trophy, award or corporate gift"/></div>
          <div className="g-item"><img src="/slide-04.webp" loading="lazy" width="600" height="750" alt="Crystal Arc commissioned trophy, award or corporate gift"/></div>
          <div className="g-item"><img src="/slide-05.webp" loading="lazy" width="600" height="750" alt="Crystal Arc commissioned trophy, award or corporate gift"/></div>
          <div className="g-item"><img src="/slide-06.webp" loading="lazy" width="600" height="750" alt="Crystal Arc commissioned trophy, award or corporate gift"/></div>
          <div className="g-item"><img src="/slide-07.webp" loading="lazy" width="600" height="750" alt="Crystal Arc commissioned trophy, award or corporate gift"/></div>
          <div className="g-item"><img src="/slide-08.webp" loading="lazy" width="600" height="750" alt="Crystal Arc commissioned trophy, award or corporate gift"/></div>
          <div className="g-item"><img src="/slide-09.webp" loading="lazy" width="600" height="750" alt="Crystal Arc commissioned trophy, award or corporate gift"/></div>
          <div className="g-item"><img src="/slide-10.webp" loading="lazy" width="600" height="750" alt="Crystal Arc commissioned trophy, award or corporate gift"/></div>
          <div className="g-item"><img src="/slide-11.webp" loading="lazy" width="600" height="750" alt="Crystal Arc commissioned trophy, award or corporate gift"/></div>
        </div>
        {/* Second row — reverse direction */}
        <div className="gt-track-rev">
          <div className="g-item"><img src="/slide-12.webp" loading="lazy" width="600" height="750" alt="Crystal Arc commissioned trophy, award or corporate gift"/></div>
          <div className="g-item"><img src="/slide-13.webp" loading="lazy" width="600" height="750" alt="Crystal Arc commissioned trophy, award or corporate gift"/></div>
          <div className="g-item"><img src="/slide-14.webp" loading="lazy" width="600" height="750" alt="Crystal Arc commissioned trophy, award or corporate gift"/></div>
          <div className="g-item"><img src="/slide-15.webp" loading="lazy" width="600" height="750" alt="Crystal Arc commissioned trophy, award or corporate gift"/></div>
          <div className="g-item"><img src="/slide-16.webp" loading="lazy" width="600" height="750" alt="Crystal Arc commissioned trophy, award or corporate gift"/></div>
          <div className="g-item"><img src="/slide-17.webp" loading="lazy" width="600" height="750" alt="Crystal Arc commissioned trophy, award or corporate gift"/></div>
          <div className="g-item"><img src="/slide-18.webp" loading="lazy" width="600" height="750" alt="Crystal Arc commissioned trophy, award or corporate gift"/></div>
          <div className="g-item"><img src="/slide-19.webp" loading="lazy" width="600" height="750" alt="Crystal Arc commissioned trophy, award or corporate gift"/></div>
          <div className="g-item"><img src="/slide-20.webp" loading="lazy" width="600" height="750" alt="Crystal Arc commissioned trophy, award or corporate gift"/></div>
          <div className="g-item"><img src="/slide-21.webp" loading="lazy" width="600" height="750" alt="Crystal Arc commissioned trophy, award or corporate gift"/></div>
          <div className="g-item"><img src="/slide-22.webp" loading="lazy" width="600" height="750" alt="Crystal Arc commissioned trophy, award or corporate gift"/></div>
          {/* Duplicated for seamless reverse loop */}
          <div className="g-item"><img src="/slide-12.webp" loading="lazy" width="600" height="750" alt="Crystal Arc commissioned trophy, award or corporate gift"/></div>
          <div className="g-item"><img src="/slide-13.webp" loading="lazy" width="600" height="750" alt="Crystal Arc commissioned trophy, award or corporate gift"/></div>
          <div className="g-item"><img src="/slide-14.webp" loading="lazy" width="600" height="750" alt="Crystal Arc commissioned trophy, award or corporate gift"/></div>
          <div className="g-item"><img src="/slide-15.webp" loading="lazy" width="600" height="750" alt="Crystal Arc commissioned trophy, award or corporate gift"/></div>
          <div className="g-item"><img src="/slide-16.webp" loading="lazy" width="600" height="750" alt="Crystal Arc commissioned trophy, award or corporate gift"/></div>
          <div className="g-item"><img src="/slide-17.webp" loading="lazy" width="600" height="750" alt="Crystal Arc commissioned trophy, award or corporate gift"/></div>
          <div className="g-item"><img src="/slide-18.webp" loading="lazy" width="600" height="750" alt="Crystal Arc commissioned trophy, award or corporate gift"/></div>
          <div className="g-item"><img src="/slide-19.webp" loading="lazy" width="600" height="750" alt="Crystal Arc commissioned trophy, award or corporate gift"/></div>
          <div className="g-item"><img src="/slide-20.webp" loading="lazy" width="600" height="750" alt="Crystal Arc commissioned trophy, award or corporate gift"/></div>
          <div className="g-item"><img src="/slide-21.webp" loading="lazy" width="600" height="750" alt="Crystal Arc commissioned trophy, award or corporate gift"/></div>
          <div className="g-item"><img src="/slide-22.webp" loading="lazy" width="600" height="750" alt="Crystal Arc commissioned trophy, award or corporate gift"/></div>
        </div>
      </div>

      {/* RED TEXT MARQUEE — brand credentials ribbon */}
      <div className="marquee-band">
        <div className="mb-track">
          <span className="mb-item">Crystal Arc</span><span className="mb-sep">◆</span>
          <span className="mb-item">Crafted in Dubai</span><span className="mb-sep">◆</span>
          <span className="mb-item">Designed for Legacy</span><span className="mb-sep">◆</span>
          <span className="mb-item">Bespoke Manufacture</span><span className="mb-sep">◆</span>
          <span className="mb-item">Since 2000</span><span className="mb-sep">◆</span>
          <span className="mb-item">Gulf's Finest Awards</span><span className="mb-sep">◆</span>
          <span className="mb-item">UAE · KSA · Qatar</span><span className="mb-sep">◆</span>
          <span className="mb-item">250 Master Artisans</span><span className="mb-sep">◆</span>
          <span className="mb-item">Zero Outsourcing</span><span className="mb-sep">◆</span>
          <span className="mb-item">Crystal Arc</span><span className="mb-sep">◆</span>
          <span className="mb-item">Crafted in Dubai</span><span className="mb-sep">◆</span>
          <span className="mb-item">Designed for Legacy</span><span className="mb-sep">◆</span>
          <span className="mb-item">Bespoke Manufacture</span><span className="mb-sep">◆</span>
          <span className="mb-item">Since 2000</span><span className="mb-sep">◆</span>
          <span className="mb-item">Gulf's Finest Awards</span><span className="mb-sep">◆</span>
          <span className="mb-item">UAE · KSA · Qatar</span><span className="mb-sep">◆</span>
          <span className="mb-item">250 Master Artisans</span><span className="mb-sep">◆</span>
          <span className="mb-item">Zero Outsourcing</span><span className="mb-sep">◆</span>
        </div>
      </div>

      {/* OCCASIONS — deep wine background, brighter images */}
      <section className="occasions" id="occasions">
        <div className="occ-head">
          <div>
            <div className="sec-eye reveal">Industries We Serve</div>
            <h2 className="reveal d1">Built for the<br/><em>Moments That<br/>Define Legacies</em></h2>
          </div>
          <p className="reveal d1">From national celebrations to boardroom milestones, 25 years of understanding that every occasion demands its own language. Here's who we speak it for.</p>
        </div>
        <div className="occ-strip">
          <div className="occ-card reveal">
            <img src="/occ-government-v2.webp" loading="lazy" alt="Crystal Arc awards presented at a government ceremony" />
            <div className="occ-ov"></div>
            <div className="occ-content"><span className="occ-num">01</span><h3 className="occ-title">Government &amp; Sovereign</h3><p className="occ-desc">State ceremonies, national days, diplomatic gifts</p></div>
          </div>
          <div className="occ-card reveal d1">
            <img src="/occ-corporate-v2.webp" loading="lazy" alt="Crystal Arc corporate awards presented at a company event" />
            <div className="occ-ov"></div>
            <div className="occ-content"><span className="occ-num">02</span><h3 className="occ-title">Corporate &amp; MNCs</h3><p className="occ-desc">Employee recognition, partner gifting, milestones</p></div>
          </div>
          <div className="occ-card reveal d2">
            <img src="/occ-sports-v2.webp" loading="lazy" alt="Crystal Arc trophies presented at a sports championship" />
            <div className="occ-ov"></div>
            <div className="occ-content"><span className="occ-num">03</span><h3 className="occ-title">Sports &amp; Entertainment</h3><p className="occ-desc">Championships, tournaments, podium moments</p></div>
          </div>
          <div className="occ-card reveal d3">
            <img src="/occ-luxury-v2.webp" loading="lazy" alt="Crystal Arc luxury pieces on display" />
            <div className="occ-ov"></div>
            <div className="occ-content"><span className="occ-num">04</span><h3 className="occ-title">Luxury Retail &amp; Events</h3><p className="occ-desc">VVIP gifting, exclusive launches, branded collections</p></div>
          </div>
          <div className="occ-card reveal d4">
            <img src="/occ-advertising-v2.webp" loading="lazy" alt="Crystal Arc commissioned piece" />
            <div className="occ-ov"></div>
            <div className="occ-content"><span className="occ-num">05</span><h3 className="occ-title">Advertising &amp; Media</h3><p className="occ-desc">Award shows, campaign accolades, industry recognitions</p></div>
          </div>
        </div>
      </section>

      {/* TRUST WALL — photos + quote + logos, all in one */}
      <section className="hof" id="trust">

        {/* Header */}
        <div className="hof-head reveal">
          <div>
            <div className="eyebrow">Hall of Fame</div>
            <h2>The world's biggest stages.<br/><em style={{ color: 'var(--gold)' }}>The world's most important moments.</em></h2>
          </div>
          <p className="hof-sub">Our work has been presented to heads of state, world champions, royalty, and global icons across five continents.</p>
        </div>

        {/* 9:16 portrait reel — 33 photos, continuous scroll, duplicated for seamless loop */}
        <div className="hof-reel">
          <div className="hof-reel-track" style={{ "--run": 8775 } as React.CSSProperties}>
            <div className="hof-photo"><img src="/hof-fcb.webp" alt="FC Barcelona" loading="eager"/><div className="hof-photo-ov"></div><div className="hof-photo-cap"><div className="hof-cap-name">FC Barcelona</div><div className="hof-cap-role">Sports &middot; Spain</div></div></div>
            <div className="hof-photo"><img src="/hof-best-corporate-awards.webp" alt="Corporate Awards" loading="eager"/><div className="hof-photo-ov"></div><div className="hof-photo-cap"><div className="hof-cap-name">Corporate Excellence Awards</div><div className="hof-cap-role">Craftsmanship &middot; UAE</div></div></div>
            <div className="hof-photo"><img src="/hof-king-charles-new.webp" alt="King Charles III" loading="eager"/><div className="hof-photo-ov"></div><div className="hof-photo-cap"><div className="hof-cap-name">His Majesty King Charles III</div><div className="hof-cap-role">Royal Household &middot; United Kingdom</div></div></div>
            <div className="hof-photo"><img src="/hof-pope-gifting.webp" alt="Pope Francis" loading="eager"/><div className="hof-photo-ov"></div><div className="hof-photo-cap"><div className="hof-cap-name">His Holiness Pope Francis</div><div className="hof-cap-role">Diplomatic &middot; Vatican</div></div></div>
            <div className="hof-photo"><img src="/hof-jackie-chan-new.webp" alt="Jackie Chan" loading="eager"/><div className="hof-photo-ov"></div><div className="hof-photo-cap"><div className="hof-cap-name">Jackie Chan</div><div className="hof-cap-role">Entertainment &middot; Global Stage</div></div></div>
            <div className="hof-photo"><img src="/hof-vip-gift-new.webp" alt="Mohamed Salah" loading="lazy"/><div className="hof-photo-ov"></div><div className="hof-photo-cap"><div className="hof-cap-name">Mohamed Salah &amp; H.H. Sheikh Hamdan</div><div className="hof-cap-role">Football &middot; UAE Presentation</div></div></div>
            <div className="hof-photo"><img src="/hof-best-custom-awards-ksa.webp" alt="Custom Awards KSA" loading="lazy"/><div className="hof-photo-ov"></div><div className="hof-photo-cap"><div className="hof-cap-name">Custom Awards &middot; Saudi Arabia</div><div className="hof-cap-role">Excellence &middot; KSA</div></div></div>
            <div className="hof-photo"><img src="/hof-fazza.webp" alt="Sheikh Hamdan" loading="lazy"/><div className="hof-photo-ov"></div><div className="hof-photo-cap"><div className="hof-cap-name">H.H. Sheikh Hamdan bin Mohammed</div><div className="hof-cap-role">Crown Prince &middot; Dubai, UAE</div></div></div>
            <div className="hof-photo"><img src="/hof-mag-03.webp" alt="Esports Award" loading="lazy"/><div className="hof-photo-ov"></div><div className="hof-photo-cap"><div className="hof-cap-name">Esports Championship Award</div><div className="hof-cap-role">Gaming &middot; UAE</div></div></div>
            <div className="hof-photo"><img src="/hof-amitabh-bachchan.webp" alt="Amitabh Bachchan" loading="lazy"/><div className="hof-photo-ov"></div><div className="hof-photo-cap"><div className="hof-cap-name">Amitabh Bachchan</div><div className="hof-cap-role">Entertainment &middot; India</div></div></div>
            <div className="hof-photo"><img src="/hof-mag-06.webp" alt="Cristiano Ronaldo" loading="lazy"/><div className="hof-photo-ov"></div><div className="hof-photo-cap"><div className="hof-cap-name">Cristiano Ronaldo</div><div className="hof-cap-role">Football &middot; Al-Nassr, Saudi Arabia</div></div></div>
            <div className="hof-photo"><img src="/hof-best-custom-corporate-trophies.webp" alt="Corporate Trophies" loading="lazy"/><div className="hof-photo-ov"></div><div className="hof-photo-cap"><div className="hof-cap-name">Bespoke Corporate Trophies</div><div className="hof-cap-role">Manufacturing &middot; UAE</div></div></div>
            <div className="hof-photo"><img src="/hof-arabab.webp" alt="Expo 2020 Dubai" loading="lazy"/><div className="hof-photo-ov"></div><div className="hof-photo-cap"><div className="hof-cap-name">Expo 2020 Dubai &middot; Award Ceremony</div><div className="hof-cap-role">Government &middot; UAE</div></div></div>
            <div className="hof-photo"><img src="/hof-mag-05.webp" alt="State Award" loading="lazy"/><div className="hof-photo-ov"></div><div className="hof-photo-cap"><div className="hof-cap-name">State Award Presentation</div><div className="hof-cap-role">Diplomatic &middot; UAE</div></div></div>
            <div className="hof-photo"><img src="/hof-mag-07.webp" alt="Trevor Noah" loading="lazy"/><div className="hof-photo-ov"></div><div className="hof-photo-cap"><div className="hof-cap-name">Trevor Noah</div><div className="hof-cap-role">Entertainment &middot; Global Stage</div></div></div>
            <div className="hof-photo"><img src="/hof-mag-04.webp" alt="Novak Djokovic" loading="lazy"/><div className="hof-photo-ov"></div><div className="hof-photo-cap"><div className="hof-cap-name">Novak Djokovic &amp; H.H. Sheikh Hamdan</div><div className="hof-cap-role">Tennis &middot; Dubai Championship</div></div></div>
            <div className="hof-photo"><img src="/hof-corporate-trophies.webp" alt="Corporate Trophies" loading="lazy"/><div className="hof-photo-ov"></div><div className="hof-photo-cap"><div className="hof-cap-name">Corporate Trophy Collection</div><div className="hof-cap-role">Awards &middot; UAE</div></div></div>
            <div className="hof-photo"><img src="/hof-mag-09.webp" alt="Sultan Al-Qasimi" loading="lazy"/><div className="hof-photo-ov"></div><div className="hof-photo-cap"><div className="hof-cap-name">H.H. Sultan Al-Qasimi</div><div className="hof-cap-role">Ruler &middot; Emirate of Sharjah</div></div></div>
            <div className="hof-photo"><img src="/hof-mag-01.webp" alt="State Gift" loading="lazy"/><div className="hof-photo-ov"></div><div className="hof-photo-cap"><div className="hof-cap-name">State Gift Presentation</div><div className="hof-cap-role">Diplomatic &middot; GCC</div></div></div>
            <div className="hof-photo"><img src="/hof-mag-14.webp" alt="Disney+" loading="lazy"/><div className="hof-photo-ov"></div><div className="hof-photo-cap"><div className="hof-cap-name">Disney+ &middot; 1 Billion Milestone</div><div className="hof-cap-role">Entertainment &middot; Global</div></div></div>
            <div className="hof-photo"><img src="/hof-mag-08.webp" alt="João Félix" loading="lazy"/><div className="hof-photo-ov"></div><div className="hof-photo-cap"><div className="hof-cap-name">Jo&atilde;o F&eacute;lix</div><div className="hof-cap-role">Football &middot; UAE</div></div></div>
            <div className="hof-photo"><img src="/hof-custom-metal-awards.webp" alt="Metal Awards" loading="lazy"/><div className="hof-photo-ov"></div><div className="hof-photo-cap"><div className="hof-cap-name">Custom Metal Awards</div><div className="hof-cap-role">Craftsmanship &middot; UAE</div></div></div>
            <div className="hof-photo"><img src="/hof-mag-15.webp" alt="Sheikh Hamdan" loading="lazy"/><div className="hof-photo-ov"></div><div className="hof-photo-cap"><div className="hof-cap-name">H.H. Sheikh Hamdan bin Mohammed</div><div className="hof-cap-role">Leadership &middot; UAE</div></div></div>
            <div className="hof-photo"><img src="/hof-mag-16.webp" alt="João Félix" loading="lazy"/><div className="hof-photo-ov"></div><div className="hof-photo-cap"><div className="hof-cap-name">Jo&atilde;o F&eacute;lix</div><div className="hof-cap-role">Football &middot; Saudi Arabia</div></div></div>
            <div className="hof-photo"><img src="/hof-customised-corporate-awards.webp" alt="Corporate Awards" loading="lazy"/><div className="hof-photo-ov"></div><div className="hof-photo-cap"><div className="hof-cap-name">Customised Corporate Awards</div><div className="hof-cap-role">Excellence &middot; GCC</div></div></div>
            <div className="hof-photo"><img src="/hof-mag-02.webp" alt="UAE Award" loading="lazy"/><div className="hof-photo-ov"></div><div className="hof-photo-cap"><div className="hof-cap-name">UAE Sustainability Award</div><div className="hof-cap-role">Government &middot; UAE</div></div></div>
            <div className="hof-photo"><img src="/hof-mag-10.webp" alt="Gianni Infantino" loading="lazy"/><div className="hof-photo-ov"></div><div className="hof-photo-cap"><div className="hof-cap-name">Gianni Infantino &amp; H.H. Sheikh Hamdan</div><div className="hof-cap-role">FIFA President &middot; UAE</div></div></div>
            <div className="hof-photo"><img src="/hof-customised-plaque.webp" alt="Bespoke Plaque" loading="lazy"/><div className="hof-photo-ov"></div><div className="hof-photo-cap"><div className="hof-cap-name">Bespoke Recognition Plaque</div><div className="hof-cap-role">Craftsmanship &middot; UAE</div></div></div>
            <div className="hof-photo"><img src="/hof-mag-12.webp" alt="Saudi Ceremony" loading="lazy"/><div className="hof-photo-ov"></div><div className="hof-photo-cap"><div className="hof-cap-name">Saudi State Ceremony</div><div className="hof-cap-role">Government &middot; Saudi Arabia</div></div></div>
            <div className="hof-photo"><img src="/hof-mag-11.webp" alt="Al-Hilal FC" loading="lazy"/><div className="hof-photo-ov"></div><div className="hof-photo-cap"><div className="hof-cap-name">Al-Hilal FC</div><div className="hof-cap-role">Saudi Pro League &middot; Football</div></div></div>
            <div className="hof-photo"><img src="/hof-customized-corporate-gift.webp" alt="Corporate Gift" loading="lazy"/><div className="hof-photo-ov"></div><div className="hof-photo-cap"><div className="hof-cap-name">Customised Corporate Gift</div><div className="hof-cap-role">Corporate &middot; GCC</div></div></div>
            <div className="hof-photo"><img src="/hof-mag-13.webp" alt="Simone Inzaghi" loading="lazy"/><div className="hof-photo-ov"></div><div className="hof-photo-cap"><div className="hof-cap-name">Simone Inzaghi</div><div className="hof-cap-role">Football Manager &middot; Italy</div></div></div>
            <div className="hof-photo"><img src="/hof-mag-17.webp" alt="Donald Trump" loading="lazy"/><div className="hof-photo-ov"></div><div className="hof-photo-cap"><div className="hof-cap-name">President Donald J. Trump</div><div className="hof-cap-role">Business &amp; Diplomacy &middot; United States</div></div></div>
            {/* duplicate set for seamless loop */}
            <div className="hof-photo"><img src="/hof-fcb.webp" alt="" loading="lazy"/><div className="hof-photo-ov"></div><div className="hof-photo-cap"><div className="hof-cap-name">FC Barcelona</div><div className="hof-cap-role">Sports &middot; Spain</div></div></div>
            <div className="hof-photo"><img src="/hof-best-corporate-awards.webp" alt="" loading="lazy"/><div className="hof-photo-ov"></div><div className="hof-photo-cap"><div className="hof-cap-name">Corporate Excellence Awards</div><div className="hof-cap-role">Craftsmanship &middot; UAE</div></div></div>
            <div className="hof-photo"><img src="/hof-king-charles-new.webp" alt="" loading="lazy"/><div className="hof-photo-ov"></div><div className="hof-photo-cap"><div className="hof-cap-name">His Majesty King Charles III</div><div className="hof-cap-role">Royal Household &middot; United Kingdom</div></div></div>
            <div className="hof-photo"><img src="/hof-pope-gifting.webp" alt="" loading="lazy"/><div className="hof-photo-ov"></div><div className="hof-photo-cap"><div className="hof-cap-name">His Holiness Pope Francis</div><div className="hof-cap-role">Diplomatic &middot; Vatican</div></div></div>
            <div className="hof-photo"><img src="/hof-jackie-chan-new.webp" alt="" loading="lazy"/><div className="hof-photo-ov"></div><div className="hof-photo-cap"><div className="hof-cap-name">Jackie Chan</div><div className="hof-cap-role">Entertainment &middot; Global Stage</div></div></div>
            <div className="hof-photo"><img src="/hof-vip-gift-new.webp" alt="" loading="lazy"/><div className="hof-photo-ov"></div><div className="hof-photo-cap"><div className="hof-cap-name">Mohamed Salah &amp; H.H. Sheikh Hamdan</div><div className="hof-cap-role">Football &middot; UAE Presentation</div></div></div>
            <div className="hof-photo"><img src="/hof-best-custom-awards-ksa.webp" alt="" loading="lazy"/><div className="hof-photo-ov"></div><div className="hof-photo-cap"><div className="hof-cap-name">Custom Awards &middot; Saudi Arabia</div><div className="hof-cap-role">Excellence &middot; KSA</div></div></div>
            <div className="hof-photo"><img src="/hof-fazza.webp" alt="" loading="lazy"/><div className="hof-photo-ov"></div><div className="hof-photo-cap"><div className="hof-cap-name">H.H. Sheikh Hamdan bin Mohammed</div><div className="hof-cap-role">Crown Prince &middot; Dubai, UAE</div></div></div>
            <div className="hof-photo"><img src="/hof-mag-03.webp" alt="" loading="lazy"/><div className="hof-photo-ov"></div><div className="hof-photo-cap"><div className="hof-cap-name">Esports Championship Award</div><div className="hof-cap-role">Gaming &middot; UAE</div></div></div>
            <div className="hof-photo"><img src="/hof-amitabh-bachchan.webp" alt="" loading="lazy"/><div className="hof-photo-ov"></div><div className="hof-photo-cap"><div className="hof-cap-name">Amitabh Bachchan</div><div className="hof-cap-role">Entertainment &middot; India</div></div></div>
            <div className="hof-photo"><img src="/hof-mag-06.webp" alt="" loading="lazy"/><div className="hof-photo-ov"></div><div className="hof-photo-cap"><div className="hof-cap-name">Cristiano Ronaldo</div><div className="hof-cap-role">Football &middot; Al-Nassr, Saudi Arabia</div></div></div>
            <div className="hof-photo"><img src="/hof-best-custom-corporate-trophies.webp" alt="" loading="lazy"/><div className="hof-photo-ov"></div><div className="hof-photo-cap"><div className="hof-cap-name">Bespoke Corporate Trophies</div><div className="hof-cap-role">Manufacturing &middot; UAE</div></div></div>
            <div className="hof-photo"><img src="/hof-arabab.webp" alt="" loading="lazy"/><div className="hof-photo-ov"></div><div className="hof-photo-cap"><div className="hof-cap-name">Expo 2020 Dubai &middot; Award Ceremony</div><div className="hof-cap-role">Government &middot; UAE</div></div></div>
            <div className="hof-photo"><img src="/hof-mag-05.webp" alt="" loading="lazy"/><div className="hof-photo-ov"></div><div className="hof-photo-cap"><div className="hof-cap-name">State Award Presentation</div><div className="hof-cap-role">Diplomatic &middot; UAE</div></div></div>
            <div className="hof-photo"><img src="/hof-mag-07.webp" alt="" loading="lazy"/><div className="hof-photo-ov"></div><div className="hof-photo-cap"><div className="hof-cap-name">Trevor Noah</div><div className="hof-cap-role">Entertainment &middot; Global Stage</div></div></div>
            <div className="hof-photo"><img src="/hof-mag-04.webp" alt="" loading="lazy"/><div className="hof-photo-ov"></div><div className="hof-photo-cap"><div className="hof-cap-name">Novak Djokovic &amp; H.H. Sheikh Hamdan</div><div className="hof-cap-role">Tennis &middot; Dubai Championship</div></div></div>
            <div className="hof-photo"><img src="/hof-corporate-trophies.webp" alt="" loading="lazy"/><div className="hof-photo-ov"></div><div className="hof-photo-cap"><div className="hof-cap-name">Corporate Trophy Collection</div><div className="hof-cap-role">Awards &middot; UAE</div></div></div>
            <div className="hof-photo"><img src="/hof-mag-09.webp" alt="" loading="lazy"/><div className="hof-photo-ov"></div><div className="hof-photo-cap"><div className="hof-cap-name">H.H. Sultan Al-Qasimi</div><div className="hof-cap-role">Ruler &middot; Emirate of Sharjah</div></div></div>
            <div className="hof-photo"><img src="/hof-mag-01.webp" alt="" loading="lazy"/><div className="hof-photo-ov"></div><div className="hof-photo-cap"><div className="hof-cap-name">State Gift Presentation</div><div className="hof-cap-role">Diplomatic &middot; GCC</div></div></div>
            <div className="hof-photo"><img src="/hof-mag-14.webp" alt="" loading="lazy"/><div className="hof-photo-ov"></div><div className="hof-photo-cap"><div className="hof-cap-name">Disney+ &middot; 1 Billion Milestone</div><div className="hof-cap-role">Entertainment &middot; Global</div></div></div>
            <div className="hof-photo"><img src="/hof-mag-08.webp" alt="" loading="lazy"/><div className="hof-photo-ov"></div><div className="hof-photo-cap"><div className="hof-cap-name">Jo&atilde;o F&eacute;lix</div><div className="hof-cap-role">Football &middot; UAE</div></div></div>
            <div className="hof-photo"><img src="/hof-custom-metal-awards.webp" alt="" loading="lazy"/><div className="hof-photo-ov"></div><div className="hof-photo-cap"><div className="hof-cap-name">Custom Metal Awards</div><div className="hof-cap-role">Craftsmanship &middot; UAE</div></div></div>
            <div className="hof-photo"><img src="/hof-mag-15.webp" alt="" loading="lazy"/><div className="hof-photo-ov"></div><div className="hof-photo-cap"><div className="hof-cap-name">H.H. Sheikh Hamdan bin Mohammed</div><div className="hof-cap-role">Leadership &middot; UAE</div></div></div>
            <div className="hof-photo"><img src="/hof-mag-16.webp" alt="" loading="lazy"/><div className="hof-photo-ov"></div><div className="hof-photo-cap"><div className="hof-cap-name">Jo&atilde;o F&eacute;lix</div><div className="hof-cap-role">Football &middot; Saudi Arabia</div></div></div>
            <div className="hof-photo"><img src="/hof-customised-corporate-awards.webp" alt="" loading="lazy"/><div className="hof-photo-ov"></div><div className="hof-photo-cap"><div className="hof-cap-name">Customised Corporate Awards</div><div className="hof-cap-role">Excellence &middot; GCC</div></div></div>
            <div className="hof-photo"><img src="/hof-mag-02.webp" alt="" loading="lazy"/><div className="hof-photo-ov"></div><div className="hof-photo-cap"><div className="hof-cap-name">UAE Sustainability Award</div><div className="hof-cap-role">Government &middot; UAE</div></div></div>
            <div className="hof-photo"><img src="/hof-mag-10.webp" alt="" loading="lazy"/><div className="hof-photo-ov"></div><div className="hof-photo-cap"><div className="hof-cap-name">Gianni Infantino &amp; H.H. Sheikh Hamdan</div><div className="hof-cap-role">FIFA President &middot; UAE</div></div></div>
            <div className="hof-photo"><img src="/hof-customised-plaque.webp" alt="" loading="lazy"/><div className="hof-photo-ov"></div><div className="hof-photo-cap"><div className="hof-cap-name">Bespoke Recognition Plaque</div><div className="hof-cap-role">Craftsmanship &middot; UAE</div></div></div>
            <div className="hof-photo"><img src="/hof-mag-12.webp" alt="" loading="lazy"/><div className="hof-photo-ov"></div><div className="hof-photo-cap"><div className="hof-cap-name">Saudi State Ceremony</div><div className="hof-cap-role">Government &middot; Saudi Arabia</div></div></div>
            <div className="hof-photo"><img src="/hof-mag-11.webp" alt="" loading="lazy"/><div className="hof-photo-ov"></div><div className="hof-photo-cap"><div className="hof-cap-name">Al-Hilal FC</div><div className="hof-cap-role">Saudi Pro League &middot; Football</div></div></div>
            <div className="hof-photo"><img src="/hof-customized-corporate-gift.webp" alt="" loading="lazy"/><div className="hof-photo-ov"></div><div className="hof-photo-cap"><div className="hof-cap-name">Customised Corporate Gift</div><div className="hof-cap-role">Corporate &middot; GCC</div></div></div>
            <div className="hof-photo"><img src="/hof-mag-13.webp" alt="" loading="lazy"/><div className="hof-photo-ov"></div><div className="hof-photo-cap"><div className="hof-cap-name">Simone Inzaghi</div><div className="hof-cap-role">Football Manager &middot; Italy</div></div></div>
            <div className="hof-photo"><img src="/hof-mag-17.webp" alt="" loading="lazy"/><div className="hof-photo-ov"></div><div className="hof-photo-cap"><div className="hof-cap-name">President Donald J. Trump</div><div className="hof-cap-role">Business &amp; Diplomacy &middot; United States</div></div></div>
          </div>
        </div>

        {/* Quote strip — centred */}
        <div className="hof-qt">
          <div style={{ maxWidth: '720px', margin: '0 auto', padding: '0 48px' }}>
            <div className="hof-qt-mark" style={{ display: 'block', textAlign: 'center' }}>&ldquo;</div>
            <p className="hof-qt-text">"For three years, Crystal Arc has been our exclusive partner for every board-level recognition piece. The standard never varies by a single unit."</p>
            <div className="hof-qt-attr">Head of Corporate Affairs, Investment Bank &middot; DIFC, Dubai</div>
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
            <div className="tl"><img src="/logos/Sharjah-Sports-Council.svg" alt="Sharjah Sports" loading="lazy" decoding="async"/></div>
            <div className="tl"><img src="/logos/Makkah-Excellence-Award.svg" alt="Makkah Excellence" loading="lazy" decoding="async"/></div>
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
            <div className="tl"><img src="/logos/Sharjah-Sports-Council.svg" alt="Sharjah Sports" loading="lazy" decoding="async"/></div>
            <div className="tl"><img src="/logos/Makkah-Excellence-Award.svg" alt="Makkah Excellence" loading="lazy" decoding="async"/></div>
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
          <img src="/factory-c1.webp" alt="Crystal Arc Factory, Dubai" loading="lazy" decoding="async"/>
          <div className="factory-over">
            <div className="fac-num">200,000 <em>SQ FT</em></div>
            <div className="fac-lbl">Manufacturing Facility · Dubai, UAE</div>
            <div className="fac-sub">The largest award &amp; trophy manufacturing facility in the Middle East. Every piece, designed, crafted, finished, and dispatched under one roof.</div>
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
              <div className="sec-eye reveal">The Craft</div>
              <h2 className="reveal d1">Made by Hand.<br/><em>Refined by<br/>25 Years.</em></h2>
              <div className="gold-line reveal d2"></div>
              <p className="reveal d2">We don't outsource. Every piece that carries the Crystal Arc name is designed, crafted, quality-checked, and packed inside our UAE facility, by 250 artisans who have spent their careers doing this and nothing else.</p>
              <p className="reveal d3" style={{ color: 'var(--muted)', fontSize: '13px' }}>From a single bespoke commission to a 5,000-unit corporate run, the standard is identical.</p>
              <div className="pillars">
                <div className="pillar reveal"><div className="p-num">01</div><div><div className="p-title">In-House Design</div><div className="p-desc">3D renders presented for approval before a single piece of crystal is cut.</div></div></div>
                <div className="pillar reveal d1"><div className="p-num">02</div><div><div className="p-title">Precision Manufacturing</div><div className="p-desc">CNC precision meets artisan hand-finishing, the tolerances of a machine, the soul of a craftsman.</div></div></div>
                <div className="pillar reveal d2"><div className="p-num">03</div><div><div className="p-title">Zero-Defect Dispatch</div><div className="p-desc">Every piece signed off individually. If it isn't perfect, it doesn't leave the floor.</div></div></div>
              </div>
            </div>
          </div>
      </section>

      {/* PROCESS — From Vision to Presentation Piece */}
      <section className="process" id="process">
        <div className="con">
          <div className="process-head">
            <div>
              <div className="sec-eye reveal">How We Work</div>
              <h2 className="reveal d1">Brief on Monday.<br/><em>Sealed case on Friday.</em></h2>
            </div>
            <p className="reveal d1">From first conversation to final dispatch. Every stage is transparent, in-house, and built around your deadline. Five steps. Zero surprises.</p>
          </div>
          <div className="journey">
            <div className="jstep reveal">
              <div className="jstep-icon">
                <svg viewBox="0 0 24 24"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
              </div>
              <div className="jstep-n">01</div>
              <div className="jstep-title">Brief &amp; Concept</div>
              <p className="jstep-desc">You share the event, audience, and message. We ask, sketch, and lock the vision together.</p>
            </div>
            <div className="jstep reveal d1">
              <div className="jstep-icon">
                <svg viewBox="0 0 24 24"><polygon points="12,2 2,7 12,12 22,7"/><polyline points="2,17 12,22 22,17"/><polyline points="2,12 12,17 22,12"/></svg>
              </div>
              <div className="jstep-n">02</div>
              <div className="jstep-title">3D Design</div>
              <p className="jstep-desc">A photorealistic render for your approval. Not a single crystal is cut until you say yes.</p>
            </div>
            <div className="jstep reveal d2">
              <div className="jstep-icon">
                <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>
              </div>
              <div className="jstep-n">03</div>
              <div className="jstep-title">Manufacturing</div>
              <p className="jstep-desc">CNC cutting, casting, sandblasting, engraving, all in-house across 200,000 sq ft. Zero outsourcing.</p>
            </div>
            <div className="jstep reveal d3">
              <div className="jstep-icon">
                <svg viewBox="0 0 24 24"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
              </div>
              <div className="jstep-n">04</div>
              <div className="jstep-title">Artisan Finishing</div>
              <p className="jstep-desc">Hand-polishing, gold plating, assembly. 250 craftspeople whose careers are built around exactly this.</p>
            </div>
            <div className="jstep reveal d4">
              <div className="jstep-icon">
                <svg viewBox="0 0 24 24"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22,4 12,14.01 9,11.01"/></svg>
              </div>
              <div className="jstep-n">05</div>
              <div className="jstep-title">QC &amp; Delivery</div>
              <p className="jstep-desc">Every piece signed off individually. White-glove packaging. On-time to your event, guaranteed.</p>
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
              <span className="trust-n">15,000<sup>+</sup></span>
              <div className="trust-n-label">Clients.<br/>Zero Compromises.</div>
            </div>
            <div className="trust-intro">
              <p>The Gulf's governments, its most iconic brands, its largest corporations, and its greatest sports moments. They've all trusted Crystal Arc to make the piece that stood on the stage.</p>
              <p>40,000+ completed projects. 25 years. Not a single one we're not proud of.</p>
            </div>
          </div>

          {/* Testimonials — editorial split panel */}
          <div className="testi-outer reveal">
            <div className="testi-split">

              {/* LEFT: heading + cycling quote + nav */}
              <div className="testi-left">
                <div className="testi-eyebrow-sm">Client Voices</div>
                <h3 className="testi-heading">Trusted By<em>Our Clients</em></h3>

                <div className="tq-slide" id="tq-slide">
                  <p className="tq-text" id="tq-text">Crystal Arc didn't just deliver trophies. They delivered the centrepiece of our entire ceremony, pieces that felt genuinely worthy of the achievement they represented.</p>
                  <div className="tq-attr">
                    <div className="tq-attr-bar"></div>
                    <div>
                      <div className="tq-attr-name" id="tq-name">VP Corporate Affairs</div>
                      <div className="tq-attr-role" id="tq-role">Emirates Group</div>
                    </div>
                  </div>
                </div>

                <div className="tq-controls">
                  <div className="tq-progress" id="tq-progress"></div>
                  <button className="tql-btn active" data-idx="0" aria-label="Show testimonial 1">
                    <img src="/logos/Emirates_logo.svg" alt="Emirates" loading="lazy" decoding="async"/>
                  </button>
                </div>
              </div>

              {/* RIGHT: single image, crossfaded per testimonial */}
              <div className="testi-right" id="tq-img-wrap">
                <img className="active" src="/testi-emirates.webp" alt="Crystal Arc client work" loading="lazy" decoding="async"/>
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
              <div className="sec-eye reveal">Get in Touch</div>
              <h2 className="reveal d1">Tell Us About<br/><em>Your Vision</em></h2>
              <div className="gold-line reveal d2"></div>
              <p className="reveal d2">We respond within 2 hours. Full quote within 24 hours. No commitment, no cost, just a conversation about what you want to create.</p>
              <div className="office-cards reveal d2">
                <div className="ofc">
                  <div className="ofc-lbl">Head Office, Dubai</div>
                  <div className="ofc-name">Crystal Arc Factory LLC</div>
                  <div className="ofc-addr">1901 Al Moosa Tower 1, Trade Center First, Dubai, United Arab Emirates</div>
                  <div className="ofc-tel">+971 4 347 9191 <span className="ofc-dot">·</span> 800 279 7272</div>
                  <div className="ofc-addr" style={{ marginTop: '6px', fontStyle: 'italic', opacity: '.75' }}>Factory tours available on request.</div>
                </div>
                <div className="ofc">
                  <div className="ofc-lbl">Abu Dhabi Office</div>
                  <div className="ofc-name">Abu Dhabi</div>
                  <div className="ofc-addr">Rolex Building 6, Sheikh Rashid Bin Saeed Street, Al Danah Zone 1, Second Floor, Office No. 02, Abu Dhabi, UAE</div>
                  <div className="ofc-tel">+971 2 644 4220</div>
                </div>
                <div className="ofc">
                  <div className="ofc-lbl">KSA Office, Riyadh</div>
                  <div className="ofc-name">Saudi Arabia</div>
                  <div className="ofc-addr">4513 King Abdulaziz Road, As Sulimaniyah, 12243, Saudi Arabia</div>
                </div>
              </div>
              <a href="https://wa.me/971565364384?text=Hi%20Crystal%20Arc%2C%20I%E2%80%99m%20interested%20in%20bespoke%20crystal%20trophies%20or%20corporate%20gifts.%20Please%20assist." className="wa-big reveal d3" target="_blank">
                <span className="wa-dot"><svg viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.125.558 4.122 1.532 5.856L.058 23.486a.5.5 0 00.609.61l5.749-1.519A11.95 11.95 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.9a9.9 9.9 0 01-5.031-1.37l-.361-.214-3.714.981.993-3.648-.250-.374A9.9 9.9 0 012.1 12C2.1 6.535 6.535 2.1 12 2.1S21.9 6.535 21.9 12 17.465 21.9 12 21.9z"/></svg></span>
                <div><div className="wa-big-t">WhatsApp, Fastest Response</div><div className="wa-big-s">Typically replies within the hour</div></div>
              </a>
            </div>

            <form className="form-box reveal d1" name="homepage-enquiry-en" method="POST" action="/en/thank-you" data-netlify="true" data-netlify-honeypot="bot-field">
              <input type="hidden" name="form-name" value="homepage-enquiry-en" />
              <p className="sr-only" aria-hidden="true"><label>Do not fill this out: <input name="bot-field" /></label></p>
              <div className="form-title">Send an Enquiry</div>
              <div className="f-row">
                <div className="fg"><label htmlFor="hp-text-1">Your Name <span className="req">*</span></label><input id="hp-text-1" name="name" type="text" required placeholder="Full name"/></div>
                <div className="fg"><label htmlFor="hp-text-2">Company</label><input id="hp-text-2" name="company" type="text" placeholder="Organisation"/></div>
              </div>
              <div className="f-row">
                <div className="fg"><label htmlFor="hp-email-1">Email <span className="req">*</span></label><input id="hp-email-1" name="email" type="email" required placeholder="you@company.com"/></div>
                <div className="fg"><label htmlFor="hp-tel-1">Phone</label><input id="hp-tel-1" name="phone" type="tel" placeholder="+971 ..."/></div>
              </div>
              <div className="fg full">
                <label htmlFor="hp-brief">Tell us about your project <span className="req">*</span></label>
                <textarea id="hp-brief" name="message" required placeholder="Event, product type, quantity, timeline, anything that helps us understand what you need."></textarea>
              </div>
              <button type="submit" className="btn-submit">
                Send Enquiry
                <svg viewBox="0 0 20 20" strokeWidth="1.5"><path d="M4 10h12M10 4l6 6-6 6" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </button>
              <p className="form-note">No spam. No follow-up calls. Just a proposal.</p>
            </form>
            <EnquiryFormAnalytics />
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <HomeClient />
    </>
  );
}
