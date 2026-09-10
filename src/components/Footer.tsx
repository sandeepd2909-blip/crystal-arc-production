import Link from "next/link";
import Image from "next/image";
import { Locale, DEFAULT_LOCALE, localeHref } from "@/lib/i18n";
import { ui, UiDict } from "@/lib/dictionaries/ui";

/**
 * Link sets are built from the dictionary rather than declared as module-level
 * constants, so the labels follow the locale. They previously did not: the
 * footer took a `locale` prop and used it for hrefs only, which left the whole
 * footer in English on the Arabic pages.
 */
const productLinks = (t: UiDict) => [
  { label: t.nav.trophies, href: "/products/trophies-awards" },
  { label: t.nav.gifts, href: "/products/corporate-gifts" },
  { label: t.nav.boxes, href: "/products/boxes" },
  { label: t.nav.homeDecor, href: "/products/home-decor" },
];

const companyLinks = (t: UiDict) => [
  { label: t.nav.aboutUs, href: "/about" },
  { label: t.nav.ourWork, href: "/our-work" },
  { label: t.nav.craft, href: "/craft" },
  // Blog lives in the footer only, by request — deliberately not in Nav.
  { label: t.blog, href: "/blog" },
  // Careers, like the blog, is footer-only by request.
  { label: t.footer.careers, href: "/careers" },
  { label: t.nav.contact, href: "/contact" },
  // Industries was listed here too but has never been built — it 404'd on every
  // page in both languages. Restore the entry when the page exists rather than
  // shipping a link that goes nowhere.
];

export default function Footer({ locale = DEFAULT_LOCALE }: { locale?: Locale }) {
  const t = ui(locale);
  const href = (p: string) => localeHref(locale, p);

  const contactLinks = [
    { label: t.footer.requestProposal, href: href("/contact") },
    { label: t.cta.whatsapp, href: "https://wa.me/971565364384" },
    { label: t.footer.showroom, href: `${href("/contact")}#showroom` },
    { label: "+971 56 536 4384", href: "tel:+971565364384", ltr: true },
  ];

  return (
    <footer className="footer">
      <div className="con">
        <div className="footer-grid">
          <div className="footer-brand">
            <Image src="/logo.png" alt="Crystal Arc" width={40} height={40} />
            <p className="footer-tagline">{t.footer.tagline}</p>
          </div>

          <div className="footer-col">
            <h2 className="footer-h">{t.nav.products}</h2>
            <ul>
              {productLinks(t).map((l) => (
                <li key={l.href}>
                  <Link prefetch={false} href={href(l.href)}>
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-col">
            <h2 className="footer-h">{t.footer.company}</h2>
            <ul>
              {companyLinks(t).map((l) => (
                <li key={l.href}>
                  <Link prefetch={false} href={href(l.href)}>
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-col">
            <h2 className="footer-h">{t.footer.getInTouch}</h2>
            <ul>
              {contactLinks.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    target={l.href.startsWith("http") ? "_blank" : undefined}
                    rel={l.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    dir={l.ltr ? "ltr" : undefined}
                    style={l.ltr ? { display: "inline-block" } : undefined}
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            &copy; {new Date().getFullYear()} Crystal Arc LLC. {t.footer.rights}
          </p>
          <div style={{ display: "flex", gap: "24px" }}>
            <Link prefetch={false} href={href("/privacy")}>
              {t.footer.privacy}
            </Link>
            <Link prefetch={false} href={href("/terms")}>
              {t.footer.terms}
            </Link>
            <a href="/sitemap.xml">{t.footer.sitemap}</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
