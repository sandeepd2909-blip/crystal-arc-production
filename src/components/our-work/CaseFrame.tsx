import { thumbSrcSet, CARD_SIZES } from "@/lib/thumbs";
/**
 * An image slot for the case studies.
 *
 * The frame owns the aspect ratio, not the image. That let the pages ship
 * before the photography existed, and it still matters: a study added later
 * reserves its space from the first render, so dropping files into
 * `/public/case-studies/` cannot reflow anything or shift CLS.
 *
 * All 29 current studies have photography, and every supplied file is square,
 * which is why callers pass `ratio="1 / 1"` throughout. Do not hand this a
 * landscape ratio without re-checking the crop — a 16:9 hero cut the tops off
 * standing trophies, which is what the square frames replaced.
 *
 * With no `src` it draws a quiet tonal panel rather than a grey box with a
 * broken-image icon. It reads as a deliberate empty frame, which is what it is.
 */
export default function CaseFrame({
  src,
  alt,
  ratio = "16 / 9",
  priority = false,
  card = false,
}: {
  src?: string;
  alt: string;
  /** CSS aspect-ratio for the frame. The image fills it with object-fit. */
  ratio?: string;
  priority?: boolean;
  /** Card-sized frame: offer the browser the small derivatives. A hero must
   *  not — handed a 400px option it will take it on a narrow phone and render
   *  soft across the full width. */
  card?: boolean;
}) {
  return (
    <div className="case-frame" style={{ aspectRatio: ratio }} data-empty={src ? undefined : "true"}>
      {src ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={src}
          {...(card ? { srcSet: thumbSrcSet(src), sizes: CARD_SIZES } : {})}
          alt={alt}
          loading={priority ? "eager" : "lazy"}
          decoding={priority ? "sync" : "async"}
          {...(priority ? { fetchPriority: "high" as const } : {})}
        />
      ) : (
        <span className="case-frame-mark" aria-hidden="true" />
      )}
    </div>
  );
}
