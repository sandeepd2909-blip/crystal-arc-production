import { Amiri, IBM_Plex_Sans_Arabic } from "next/font/google";

/**
 * Arabic faces. Deliberately in their own module so that importing them from
 * the Arabic root layout does not drag the (preloaded) Arabic subsets onto
 * every English page.
 *
 * The pairing mirrors the Latin one rather than defaulting to a generic UI
 * sans. Amiri is a naskh with real calligraphic modulation — the closest
 * Arabic counterpart to what Cormorant Garamond is doing in the headings, and
 * the right register for the Daum / Lalique tone the copy is written in.
 * IBM Plex Sans Arabic carries the body text: neutral, high legibility at
 * small sizes, and it has the weight range the UI actually uses.
 */

export const amiri = Amiri({
  subsets: ["arabic"],
  weight: ["400", "700"],
  variable: "--font-arabic-display",
  display: "swap",
  // See the note at the foot of this file — preloading these puts them on
  // the English critical path too.
  preload: false,
});

export const plexArabic = IBM_Plex_Sans_Arabic({
  subsets: ["arabic"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-arabic-body",
  display: "swap",
  // See the note at the foot of this file — preloading these puts them on
  // the English critical path too.
  preload: false,
});

export const arabicFontClass = `${amiri?.variable} ${plexArabic?.variable}`;

/*
 * preload is off deliberately.
 *
 * next/font hoists its preload links across the whole build rather than per
 * route group, so with preload: true the English pages emitted <link rel="preload">
 * for Amiri and Plex Arabic as well — measured as an identical nine-file preload
 * set on / and /ar. That is pure waste on the English side and it lands on the
 * critical path, which is the one thing the performance pass was protecting.
 *
 * Without the preload the faces still ship in the stylesheet with
 * display: swap, so an Arabic page fetches them as soon as it lays out Arabic
 * text. The cost is one paint in the fallback face on /ar; the saving is that
 * English never touches them.
 */
