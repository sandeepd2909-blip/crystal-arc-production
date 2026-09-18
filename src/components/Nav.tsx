"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { m, AnimatePresence } from "framer-motion";
import { Locale, DEFAULT_LOCALE, localePath, localeHref, splitLocale, hasArabic, hasEnglish, LOCALE_SHORT } from "@/lib/i18n";
import { ui } from "@/lib/dictionaries/ui";

type SubItem = { label: string; href: string };
type NavItem  = { label: string; href: string; sub?: SubItem[] };

function buildNav(t: ReturnType<typeof ui>): NavItem[] {
  return [
    { label: t.nav.home, href: "/" },
    {
      label: t.nav.products,
      href: "/products",
      sub: [
        { label: t.nav.trophies,  href: "/products/trophies-awards" },
        { label: t.nav.gifts,     href: "/products/corporate-gifts" },
        { label: t.nav.boxes,     href: "/products/boxes" },
        { label: t.nav.homeDecor, href: "/products/home-decor" },
      ],
    },
    { label: t.nav.craft,   href: "/craft" },
    { label: t.nav.ourWork, href: "/our-work" },
    {
      label: t.nav.about,
      href: "/about",
      sub: [
        { label: t.nav.aboutUs, href: "/about" },
        { label: t.nav.contact, href: "/contact" },
      ],
    },
  ];
}

/**
 * `pathname` is the real URL, so on the Arabic site it carries the `/ar`
 * prefix while `item.href` is locale-free. Compare on the bare path.
 */
function isActive(item: NavItem, pathname: string) {
  const { path } = splitLocale(pathname);
  if (item.href === "/") return path === "/";
  return path === item.href || path.startsWith(item.href + "/");
}

export default function Nav({ locale = DEFAULT_LOCALE }: { locale?: Locale }) {
  const t = ui(locale);
  const navItems = buildNav(t);
  // localeHref, not localePath: falls back to the English URL rather than
  // linking an Arabic page that has not been written yet.
  const href = (p: string) => localeHref(locale, p);
  // the prefilled message was an English literal, so /ar opened WhatsApp in English
  const waHref = `https://wa.me/971565364384?text=${encodeURIComponent(t.cta.waMessage)}`;
  const [scrolled, setScrolled]         = useState(false);
  const [menuOpen, setMenuOpen]         = useState(false);
  const [openSub, setOpenSub]           = useState<string | null>(null);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const pathname = usePathname();

  // Crossing locales replaces the document, so the switcher is a plain anchor.
  const otherLocale: Locale = locale === "ar" ? "en" : "ar";
  const barePath = splitLocale(pathname).path;
  // Either direction can 404, so both are guarded. Going to Arabic on a page
  // with no translation falls back to the Arabic homepage; coming back to
  // English from an Arabic-only blog post falls back to the English blog,
  // which is the nearest thing to where the reader was.
  //
  // "Coming back to English always has a target" used to be the assumption
  // here. It was true of the fixed routes and false of exactly one post.
  const canSwitch = otherLocale === "ar" ? hasArabic(barePath) : hasEnglish(barePath);
  const fallback = barePath.startsWith("/blog/") ? "/blog" : "/";
  const switchHref = canSwitch
    ? localePath(otherLocale, barePath)
    : localePath(otherLocale, fallback);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  function openMenu(href: string) {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setActiveDropdown(href);
  }

  function scheduleClose() {
    closeTimer.current = setTimeout(() => setActiveDropdown(null), 220);
  }

  function cancelClose() {
    if (closeTimer.current) clearTimeout(closeTimer.current);
  }

  return (
    <>
      <nav className={`nav-root${scrolled ? " scrolled" : ""}`}>
        <div className="con nav-inner">
          <a href={href("/")} className="nav-logo">
            <Image src="/logo.png" alt="Crystal Arc" width={160} height={44} priority />
          </a>

          {/* Desktop links */}
          <ul className="nav-links" style={{ display: "flex" }}>
            {navItems.map((item) => (
              <li
                key={item.href}
                style={{ position: "relative" }}
                onMouseEnter={() => item.sub && openMenu(item.href)}
                onMouseLeave={() => item.sub && scheduleClose()}
              >
                {item.href === "/" ? (
                  <a
                    href={href(item.href)}
                    className={isActive(item, pathname) ? "active" : ""}
                    style={{ paddingBottom: "4px", display: "flex", alignItems: "center", gap: "4px" }}
                  >
                    {item.label}
                  </a>
                ) : (
                  <Link prefetch={false}
                    href={href(item.href)}
                    className={isActive(item, pathname) ? "active" : ""}
                    style={{ paddingBottom: "4px", display: "flex", alignItems: "center", gap: "4px" }}
                  >
                    {item.label}
                    {item.sub && (
                      <m.svg
                        animate={{ rotate: activeDropdown === item.href ? 180 : 0 }}
                        transition={{ duration: 0.2 }}
                        width="10" height="6" viewBox="0 0 10 6" fill="none"
                        style={{ opacity: 0.6, marginTop: "1px" }}
                      >
                        <path d="M1 1l4 4 4-4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
                      </m.svg>
                    )}
                  </Link>
                )}

                {/* Dropdown */}
                <AnimatePresence>
                  {item.sub && activeDropdown === item.href && (
                    <m.div
                      className="nav-dropdown-js"
                      initial={{ opacity: 0, y: -6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -6 }}
                      transition={{ duration: 0.18, ease: "easeOut" }}
                      onMouseEnter={cancelClose}
                      onMouseLeave={scheduleClose}
                    >
                      {item.sub.map((s) => (
                        <Link prefetch={false}
                          key={s.href}
                          href={href(s.href)}
                          onClick={() => setActiveDropdown(null)}
                        >
                          {s.label}
                        </Link>
                      ))}
                    </m.div>
                  )}
                </AnimatePresence>

                {/* Active underline */}
                {!item.sub && isActive(item, pathname) && (
                  <m.span
                    layoutId="nav-underline"
                    style={{
                      position: "absolute",
                      bottom: -2,
                      left: 0,
                      right: 0,
                      height: "1px",
                      background: "var(--color-gold)",
                      borderRadius: "1px",
                    }}
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </li>
            ))}
            <li className="nav-lang">
              <LangToggle locale={locale} switchHref={switchHref} label={t.a11y.language} />
            </li>
            <li className="nav-cta">
              <a
                href={waHref}
                className="btn-nav-cta"
                target="_blank"
                rel="noopener noreferrer"
              >
                {t.nav.quote}
              </a>
            </li>
          </ul>

          {/* Mobile hamburger */}
          <button
            className="mob-toggle"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={t.a11y.toggleMenu}
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              flexDirection: "column",
              gap: "5px",
              padding: "6px",
            }}
          >
            <m.span
              animate={menuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.25 }}
              style={{ display: "block", width: "22px", height: "1.5px", background: "var(--color-ivory)", transformOrigin: "center" }}
            />
            <m.span
              animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
              transition={{ duration: 0.2 }}
              style={{ display: "block", width: "22px", height: "1.5px", background: "var(--color-ivory)" }}
            />
            <m.span
              animate={menuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.25 }}
              style={{ display: "block", width: "22px", height: "1.5px", background: "var(--color-ivory)", transformOrigin: "center" }}
            />
          </button>
        </div>
      </nav>

      {/* Mobile full-screen drawer */}
      <AnimatePresence>
        {menuOpen && (
          <m.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            style={{
              position: "fixed",
              inset: 0,
              background: "#F7F2EB",
              zIndex: 99,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              padding: "0 40px",
              overflowY: "auto",
            }}
          >
            {navItems.map((item, i) => (
              <m.div key={item.href} initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + i * 0.07, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}>
                {/* Main item */}
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                  {item.href === "/" ? (
                    <a
                      href={href(item.href)}
                      onClick={() => setMenuOpen(false)}
                      style={{
                        display: "block",
                        fontFamily: "var(--font-display)",
                        fontSize: "clamp(2.2rem, 7vw, 3.2rem)",
                        fontWeight: 300,
                        color: "#1A1512",
                        textDecoration: "none",
                        lineHeight: 1.25,
                        paddingBlock: "14px",
                      }}
                    >
                      {item.label}
                    </a>
                  ) : (
                    <Link prefetch={false}
                      href={href(item.href)}
                      onClick={() => setMenuOpen(false)}
                      style={{
                        display: "block",
                        fontFamily: "var(--font-display)",
                        fontSize: "clamp(2.2rem, 7vw, 3.2rem)",
                        fontWeight: 300,
                        color: "#1A1512",
                        textDecoration: "none",
                        lineHeight: 1.25,
                        paddingBlock: "14px",
                      }}
                    >
                      {item.label}
                    </Link>
                  )}
                  {item.sub && (
                    <button
                      onClick={() => setOpenSub(openSub === item.href ? null : item.href)}
                      style={{ background: "none", border: "none", cursor: "pointer", padding: "8px", color: "#1A1512" }}
                      aria-label={t.a11y.toggleSubmenu}
                    >
                      <m.svg animate={{ rotate: openSub === item.href ? 180 : 0 }} transition={{ duration: 0.2 }}
                        width="14" height="8" viewBox="0 0 10 6" fill="none">
                        <path d="M1 1l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </m.svg>
                    </button>
                  )}
                </div>
                {/* Sub-items */}
                <AnimatePresence>
                  {item.sub && openSub === item.href && (
                    <m.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }}
                      style={{ overflow: "hidden", paddingLeft: "16px" }}>
                      {item.sub.map((s) => (
                        <Link prefetch={false} key={s.href} href={href(s.href)} onClick={() => setMenuOpen(false)}
                          style={{
                            display: "block",
                            fontFamily: "var(--font-sans)",
                            fontSize: "12px",
                            fontWeight: 500,
                            letterSpacing: "0.1em",
                            textTransform: "uppercase",
                            color: "rgba(26,21,18,0.6)",
                            textDecoration: "none",
                            paddingBlock: "10px",
                            borderBottom: "1px solid rgba(26,21,18,0.06)",
                          }}>
                          {s.label}
                        </Link>
                      ))}
                    </m.div>
                  )}
                </AnimatePresence>
                <div style={{ borderBottom: "1px solid rgba(26,21,18,0.1)" }} />
              </m.div>
            ))}
            <m.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + navItems.length * 0.07, duration: 0.5 }}
              style={{ marginTop: "32px" }}>
              <a
                href={waHref}
                className="btn-red"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMenuOpen(false)}
              >
                {t.nav.quote}
              </a>
              <LangToggle
                locale={locale}
                switchHref={switchHref}
                label={t.a11y.language}
                block
                onNavigate={() => setMenuOpen(false)}
              />
            </m.div>
          </m.div>
        )}
      </AnimatePresence>
    </>
  );
}

/**
 * The language toggle.
 *
 * Shows both languages at once with the current one filled, rather than a
 * single link naming the other language. The old control read "العربية" on the * English pages and"English" on the Arabic ones, which named the destination
 * but never the current state, and looked like a label rather than a control.
 *
 * Two details worth keeping:
 *
 * The physical order is fixed — EN first, عربي second — in both locales, so
 * `direction: ltr` is forced on the container. Left to inherit, RTL would
 * reverse the two halves and the whole control would appear to jump sides when
 * you switched language, when the only thing that should move is the highlight.
 *
 * The current language is a `<span>`, not a link. It is the page you are on,
 * so there is nowhere for it to go; `aria-current` marks it for screen readers
 * and keyboard users tab straight to the one option that does something.
 */
function LangToggle({
  locale,
  switchHref,
  label,
  block = false,
  onNavigate,
}: {
  locale: Locale;
  switchHref: string;
  label: string;
  block?: boolean;
  onNavigate?: () => void;
}) {
  return (
    <div
      className={block ? "lang-seg lang-seg-block" : "lang-seg"}
      data-active={locale}
      role="group"
      aria-label={label}
    >
      <span className="lang-seg-ind" aria-hidden="true" />
      {(["en", "ar"] as const).map((l) =>
        l === locale ? (
          <span key={l} className="lang-seg-i is-on" aria-current="true" lang={l}>
            {LOCALE_SHORT[l]}
          </span>
        ) : (
          <a
            key={l}
            className="lang-seg-i"
            href={switchHref}
            lang={l}
            hrefLang={l}
            onClick={onNavigate}
          >
            {LOCALE_SHORT[l]}
          </a>
        ),
      )}
    </div>
  );
}
