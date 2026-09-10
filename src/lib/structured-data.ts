import { Locale, LOCALE_TAG, SITE_URL, localePath } from "./i18n";

/**
 * LocalBusiness + WebSite graph, per locale.
 *
 * The `@id` values are deliberately locale-independent: both language versions
 * describe the same single business, so they must resolve to one node rather
 * than two competing ones. Only `url`, `inLanguage` and the human-readable
 * strings vary.
 */

const DESCRIPTION: Record<Locale, string> = {
  en: "Crystal Arc is Dubai's premier manufacturer of custom trophies, awards, corporate gifts, and luxury packaging. Established in 2000, 200,000 sq ft UAE facility, 0% outsourced.",
  ar: "كريستال آرك مصنع رائد في دبي للجوائز والكؤوس والدروع والهدايا المؤسسية والتغليف الفاخر، بالتصميم والتصنيع الكامل داخل منشأتنا في الإمارات. تأسّس عام 2000 على مساحة 200,000 قدم مربعة، دون إسناد أي مرحلة إلى جهة خارجية.",
};

const SITE_DESCRIPTION: Record<Locale, string> = {
  en: "Custom trophies, awards, corporate gifts and luxury packaging. Manufactured in Dubai.",
  ar: "جوائز وكؤوس ودروع وهدايا مؤسسية وتغليف فاخر، بتصنيع كامل في دبي.",
};

export function structuredData(locale: Locale) {
  const url = `${SITE_URL}${localePath(locale, "/")}`;

  return [
    {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "@id": `${SITE_URL}/#business`,
      name: "Crystal Arc",
      alternateName: locale === "ar" ? ["Crystal Arc Factory LLC", "كريستال آرك"] : "Crystal Arc Factory LLC",
      url,
      inLanguage: LOCALE_TAG[locale],
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/logo.png`,
        width: 200,
        height: 60,
      },
      image: `${SITE_URL}/factory-1.webp`,
      description: DESCRIPTION[locale],
      foundingDate: "2000",
      founders: [
        { "@type": "Person", name: "Faisal Almutawa" },
        { "@type": "Person", name: "Mustansir Golwala" },
      ],
      address: {
        "@type": "PostalAddress",
        streetAddress: "1901 Al Moosa Tower 1, Trade Center First",
        addressLocality: "Dubai",
        addressRegion: "Dubai",
        addressCountry: "AE",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 25.2225,
        longitude: 55.2822,
      },
      telephone: "+97143479191",
      email: "info@crystalarc.net",
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
          opens: "09:00",
          closes: "18:00",
        },
      ],
      currenciesAccepted: "AED, USD",
      paymentAccepted: "Bank Transfer, Cheque",
      areaServed: ["AE", "SA", "QA", "KW", "BH", "OM", "US", "GB", "IN"],
      contactPoint: [
        {
          "@type": "ContactPoint",
          telephone: "+971-4-347-9191",
          contactType: "customer service",
          areaServed: ["AE", "SA", "QA", "KW", "BH", "OM"],
          availableLanguage: ["English", "Arabic"],
        },
        {
          "@type": "ContactPoint",
          telephone: "+971-56-536-4384",
          contactType: "sales",
          contactOption: "WhatsApp",
        },
      ],
      hasMap: "https://maps.google.com/?q=Crystal+Arc+Dubai",
      department: [
        {
          "@type": "LocalBusiness",
          name: "Crystal Arc - Abu Dhabi",
          address: {
            "@type": "PostalAddress",
            streetAddress: "Rolex Building 6, Sheikh Rashid Bin Saeed Street, Al Danah Zone 1, 2nd Floor, Office 02",
            addressLocality: "Abu Dhabi",
            addressCountry: "AE",
          },
          telephone: "+97126444220",
        },
        {
          "@type": "LocalBusiness",
          name: "Crystal Arc - Riyadh",
          address: {
            "@type": "PostalAddress",
            streetAddress: "4513 King Abdulaziz Road, As Sulimaniyah, 12243",
            addressLocality: "Riyadh",
            addressCountry: "SA",
          },
          // TODO: this is a UAE mobile standing in for the Riyadh line.
          // Awaiting the real Saudi number from the client.
          telephone: "+971503371388",
        },
      ],
      /* Entity links. This is how a search or answer engine confirms that the
         Crystal Arc on this site is the same Crystal Arc it has seen
         elsewhere, and it was shipping as an empty array — declared and
         doing nothing.

         Only add a profile that has been verified as Crystal Arc's own. A
         sameAs pointing at the wrong account asserts an identity that is not
         theirs, which is worse than omitting it. All six were supplied by
         Crystal Arc and each was followed to a live profile before being added;
         the Facebook entry is the page the share link resolves to, and the
         tracking parameters that came with the originals are stripped. */
      sameAs: [
        "https://www.linkedin.com/company/crystalarcuae/",
        "https://www.instagram.com/crystalarc.official",
        "https://www.facebook.com/crystalarc",
        "https://www.youtube.com/@crystalarc9037",
        "https://x.com/crystalarc_uae",
        "https://www.tiktok.com/@crystal_arc",
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url,
      name: "Crystal Arc",
      description: SITE_DESCRIPTION[locale],
      inLanguage: LOCALE_TAG[locale],
      publisher: { "@id": `${SITE_URL}/#business` },
      /* No `potentialAction`/SearchAction here on purpose.
         It used to declare a sitelinks searchbox pointing at
         /products?q={search_term_string}. There is no search page, and this
         is a static export, so nothing reads a query string — the site was
         advertising a search that could never run and inviting Google to
         render a searchbox that goes nowhere. Only add this back alongside a
         real search route that actually answers `q`. */
    },
  ];
}
