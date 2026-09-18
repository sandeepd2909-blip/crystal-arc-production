import { Cormorant_Garamond, Plus_Jakarta_Sans } from "next/font/google";

/**
 * Latin faces. Loaded by both locales — the Arabic pages still set the brand
 * name, phone numbers and Latin product terms in these.
 */

export const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  // Audited across every page: only 300 and 400 are actually rendered at any
  // size (500 appeared on 3 elements, 600 on none). Each dropped weight is a
  // separate ~25KB file on the critical path, and the H1 is the LCP element on
  // several pages — so trimming these moves LCP directly.
  weight: ["300", "400"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
  preload: true,
});

export const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  // 700 was rendered on 24 elements site-wide; 600 covers them.
  weight: ["400", "500", "600"],
  variable: "--font-jakarta",
  display: "swap",
  preload: true,
});

export const latinFontClass = `${cormorant?.variable} ${jakarta?.variable}`;
