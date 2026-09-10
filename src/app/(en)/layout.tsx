import type { Metadata } from "next";
import { ogUrl } from "@/lib/og";
import "../globals.css";
import RootShell from "@/components/RootShell";
import { latinFontClass } from "@/lib/fonts";
import { alternatesFor } from "@/lib/i18n";

export const metadata: Metadata = {
  title: {
    default: "Crystal Arc | Custom Trophies & Corporate Gifts Dubai",
    template: "%s | Crystal Arc",
  },
  description:
    "Custom trophies, awards, corporate gifts and luxury packaging, manufactured in Dubai. 25+ years, zero outsourcing, delivered across the GCC.",
  metadataBase: new URL("https://www.crystalarc.net"),
  keywords: [
    "custom trophies Dubai",
    "trophy manufacturer UAE",
    "corporate gifts Dubai",
    "luxury awards Middle East",
    "bespoke trophies GCC",
    "crystal awards Dubai",
    "trophy manufacturer Dubai",
    "award manufacturer UAE",
    "luxury corporate gifts UAE",
    "custom awards GCC",
    "presentation boxes Dubai",
    "Crystal Arc Dubai",
  ],
  authors: [{ name: "Crystal Arc" }],
  creator: "Crystal Arc",
  publisher: "Crystal Arc",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
        url: "https://www.crystalarc.net/en",
type: "website",
    locale: "en_AE",
    alternateLocale: "ar_AE",
    siteName: "Crystal Arc",
    title: "Custom Trophies & Corporate Gifts Dubai | Crystal Arc",
    description:
      "Crystal Arc manufactures custom trophies, awards, corporate gifts, and luxury packaging in Dubai. 25+ years. 0% outsourced. Trusted by governments, sports federations, and Fortune 500 companies across the GCC.",
    images: [{ url: ogUrl("/factory-1.webp"), width: 1200, height: 630, alt: "Crystal Arc manufacturing facility, Dubai" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Crystal Arc | Custom Trophies, Awards & Corporate Gifts - Dubai",
    description:
      "Custom trophies, awards, corporate gifts and luxury packaging. Manufactured in Dubai. 25+ years, 0% outsourced.",
    images: [ogUrl("/factory-1.webp")],
  },
  alternates: alternatesFor("en", "/"),
  other: {
    "geo.region": "AE-DU",
    "geo.placename": "Dubai, United Arab Emirates",
    "geo.position": "25.2048;55.2708",
    ICBM: "25.2048, 55.2708",
  },
};

export default function EnglishRootLayout({ children }: { children: React.ReactNode }) {
  return (
    <RootShell locale="en" fontClass={latinFontClass}>
      {children}
    </RootShell>
  );
}
