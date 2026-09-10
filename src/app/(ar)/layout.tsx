import type { Metadata } from "next";
import { ogUrl } from "@/lib/og";
import "../globals.css";
import "./rtl.css";
import RootShell from "@/components/RootShell";
import { latinFontClass } from "@/lib/fonts";
import { arabicFontClass } from "@/lib/fonts-arabic";
import { alternatesFor } from "@/lib/i18n";

export const metadata: Metadata = {
  title: {
    default: "كريستال آرك | جوائز وكؤوس وهدايا مؤسسية، دبي",
    template: "%s | كريستال آرك",
  },
  description:
    "جوائز وكؤوس ودروع وهدايا مؤسسية وتغليف فاخر، بالتصنيع الكامل في دبي. أكثر من ٢٥ عامًا، دون إسناد خارجي، وتوريد إلى دول الخليج.",
  metadataBase: new URL("https://www.crystalarc.net"),
  keywords: [
    "دروع تكريم الرياض",
    "جوائز مخصصة السعودية",
    "مصنع جوائز دبي",
    "هدايا مؤسسية الرياض",
    "دروع كريستال",
    "كؤوس رياضية",
    "هدايا اليوم الوطني",
    "تصنيع جوائز الإمارات",
    "دروع تكريم مخصصة",
    "هدايا فاخرة للشركات",
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
    url: "https://www.crystalarc.net/ar",
    type: "website",
    locale: "ar_AE",
    alternateLocale: "en_AE",
    siteName: "Crystal Arc",
    title: "جوائز وهدايا مؤسسية بتصنيع خليجي | كريستال آرك",
    description:
      "نصمّم ونصنع الجوائز والدروع والهدايا المؤسسية والتغليف الفاخر داخل منشأتنا في الإمارات. أكثر من ٢٥ عامًا من العمل مع الجهات الحكومية والاتحادات الرياضية وكبرى الشركات في المنطقة.",
    images: [{ url: ogUrl("/factory-1.webp"), width: 1200, height: 630, alt: "منشأة كريستال آرك للتصنيع في دبي" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "كريستال آرك | جوائز وكؤوس وهدايا مؤسسية",
    description: "جوائز ودروع وهدايا مؤسسية وتغليف فاخر، بتصنيع كامل في دبي.",
    images: [ogUrl("/factory-1.webp")],
  },
  alternates: alternatesFor("ar", "/"),
  other: {
    // The Arabic site leads with Riyadh — it is aimed at Saudi and Qatar first,
    // where the buying market is, not at the Dubai walk-in trade.
    "geo.region": "SA-01",
    "geo.placename": "الرياض، المملكة العربية السعودية",
    "geo.position": "24.7136;46.6753",
    ICBM: "24.7136, 46.6753",
  },
};

export default function ArabicRootLayout({ children }: { children: React.ReactNode }) {
  return (
    <RootShell locale="ar" fontClass={`${latinFontClass} ${arabicFontClass}`}>
      {children}
    </RootShell>
  );
}
