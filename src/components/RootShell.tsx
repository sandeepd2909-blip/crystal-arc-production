import Script from "next/script";
import MotionProvider from "@/components/MotionProvider";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import WaFloat from "@/components/WaFloat";
import { Locale, dirOf } from "@/lib/i18n";
import { structuredData } from "@/lib/structured-data";

/**
 * The document shell both root layouts render.
 *
 * There are two root layouts — `(en)` and `(ar)` — because `<html lang>` and
 * `<html dir>` can only be set in a root layout, and they differ per locale.
 * Everything below `<html>` is identical, so it lives here rather than being
 * duplicated and drifting.
 *
 * Note that crossing between the two groups is a full document load, not a
 * client-side navigation. That is correct here: switching language should
 * replace the document, stylesheet direction and font set wholesale.
 */
export default function RootShell({
  locale,
  fontClass,
  children,
}: {
  locale: Locale;
  fontClass: string;
  children: React.ReactNode;
}) {
  return (
    <html lang={locale} dir={dirOf(locale)} className={fontClass}>
      <head>
        {/* Google Analytics 4 — Crystal Arc GA4.
            This is intentionally loaded directly from the site code because the
            existing GTM container is managed by a separate account. */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-9BTLVSM23Z"
          strategy="afterInteractive"
        />
        <Script id="crystal-arc-ga4" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){window.dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-9BTLVSM23Z');
          `}
        </Script>
        {/* Feed autodiscovery. This cannot live in the layout metadata: every
            page that sets its own `alternates` — the blog, the case studies —
            replaces the layout block wholesale, so the link silently vanished
            on exactly the pages that most needed it. */}
        <link rel="alternate" type="application/rss+xml" title="Crystal Arc — Journal" href="https://www.crystalarc.net/feed.xml" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData(locale)) }}
        />
      </head>
      <body>
        <MotionProvider>
        {/* WCAG 2.4.1 needs a way past the navigation. The nav carries seven
            top-level items with two dropdowns, so a keyboard or screen-reader
            user was tabbing through all of it on every one of 197 pages before
            reaching the content. Hidden until focused, then it appears. */}
        <a href="#main" className="skip-link">
          {locale === "ar" ? "تخطَّ إلى المحتوى" : "Skip to content"}
        </a>
        <Nav locale={locale} />
        <main id="main" tabIndex={-1}>{children}</main>
        <Footer locale={locale} />
        </MotionProvider>
        <WaFloat locale={locale} />
        {/* Existing GTM container. This is kept intact so its existing
            Google Ads and remarketing configuration continues to run. */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-5T6FJLT"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
            title="Google Tag Manager"
          />
        </noscript>
        <Script id="crystal-arc-gtm" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src= 'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-5T6FJLT');
          `}
        </Script>
      </body>
    </html>
  );
}
