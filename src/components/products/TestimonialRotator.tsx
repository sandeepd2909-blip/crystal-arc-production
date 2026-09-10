"use client";
import { Locale, DEFAULT_LOCALE } from "@/lib/i18n";
import { ui } from "@/lib/dictionaries/ui";
import { useState, useEffect, useRef, useLayoutEffect } from "react";
import { m, AnimatePresence } from "framer-motion";

export interface TestimonialItem {
  quote: string;
  name: string;
  co: string;
}

const quoteTextStyle = {
  fontFamily: "var(--font-display)",
  fontSize: "clamp(1.65rem, 2.8vw, 2.7rem)",
  fontStyle: "italic",
  fontWeight: 300,
  lineHeight: 1.4,
} as const;

export default function TestimonialRotator({ items, locale = DEFAULT_LOCALE }: { items: TestimonialItem[]; locale?: Locale }) {
  const labels = ui(locale).testimonial;
  const [idx, setIdx] = useState(0);
  const [dir, setDir] = useState(1);
  const [quoteMinHeight, setQuoteMinHeight] = useState<number | undefined>(undefined);
  const measureRef = useRef<HTMLDivElement>(null);
  const timerRef = useRef<ReturnType<typeof setTimeout>>(undefined);

  // Measure the tallest quote at the current viewport width so switching
  // slides never changes the container height (which would shift the
  // pagination controls underneath it).
  useLayoutEffect(() => {
    function measure(){
      if (!measureRef.current) return;
      const children = Array.from(measureRef.current.children) as HTMLElement[];
      const max = children.reduce((m, el) => Math.max(m, el.getBoundingClientRect().height), 0);
      setQuoteMinHeight(max);
    }
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [items]);

  const go = (next: number) => {
    setDir(next > idx ? 1 : -1);
    setIdx(next);
    if (timerRef.current) clearTimeout(timerRef.current);
  };

  useEffect(() => {
    timerRef.current = setTimeout(() => {
      setDir(1);
      setIdx((i) => (i + 1) % items.length);
    }, 6500);
    return () => { if (timerRef.current) clearTimeout(timerRef.current); };
  }, [idx, items.length]);

  const t = items[idx];

  return (
    <div style={{ maxWidth: "820px", position: "relative" }}>
      {/* Hidden measurer: renders every quote off-screen so we can size the
          visible one to the tallest, preventing the pagination controls
          below from jumping when a shorter/longer quote is shown. */}
      <div ref={measureRef} aria-hidden style={{ position: "absolute", visibility: "hidden", pointerEvents: "none", zIndex: -1, width: "100%", maxWidth: "820px" }}>
        {items.map((item, i) => (
          <p key={i} style={{ ...quoteTextStyle, margin: 0 }}>&ldquo;{item.quote}&rdquo;</p>
        ))}
      </div>
      <AnimatePresence mode="wait">
        <m.div
          key={idx}
          initial={{ opacity: 0, y: dir * 14 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: dir * -14 }}
          transition={{ type: "spring", stiffness: 300, damping: 32 }}
        >
          <p style={{
            ...quoteTextStyle,
            color: "var(--color-ivory)",
            marginBottom: "32px",
            minHeight: quoteMinHeight ? `${quoteMinHeight}px` : undefined,
          }}>
            &ldquo;{t.quote}&rdquo;
          </p>
          <div style={{ display: "flex", alignItems: "center", gap: "18px" }}>
            <div style={{ width: "40px", height: "1px", background: "var(--color-gold)", opacity: 0.5, flexShrink: 0 }} />
            <div>
              <div style={{ fontSize: "11px", letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--color-ivory)", fontWeight: 600, marginBottom: "4px" }}>{t.name}</div>
              <div style={{ fontSize: "10px", letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--color-gold)", opacity: 0.65 }}>{t.co}</div>
            </div>
          </div>
        </m.div>
      </AnimatePresence>

      <div style={{ display: "flex", alignItems: "center", gap: "10px", marginTop: "36px", paddingTop: "28px", borderTop: "1px solid rgba(26,21,18,0.1)" }}>
        {items.map((_, i) => (
          <button
            key={i}
            onClick={() => go(i)}
            /* Real class, not a styling hook only: these render 6x2px and the
               only way CSS could reach them was via aria-label, which is
               translated — so the Arabic dots were never matched. */
            className="tst-dot"
            aria-label={`${ui(locale).a11y.goToTestimonial} ${i + 1}`}
            style={{
              width: i === idx ? "28px" : "6px",
              height: "2px",
              background: i === idx ? "var(--color-gold)" : "rgba(26,21,18,0.2)",
              border: "none",
              cursor: "pointer",
              padding: 0,
              transition: "all 0.35s ease",
              borderRadius: "2px",
            }}
          />
        ))}
        <span style={{ fontSize: "11px", letterSpacing: "0.1em", color: "var(--color-muted)", marginLeft: "8px" }}>
          {String(idx + 1).padStart(2, "0")} / {String(items.length).padStart(2, "0")}
        </span>
        <div style={{ marginLeft: "auto", display: "flex", gap: "8px" }}>
          {[-1, 1].map((d) => (
            <button
              key={d}
              onClick={() => go((idx + d + items.length) % items.length)}
              // Icon-only control: without a label it has no accessible name.
              className="tst-arrow"
              aria-label={d === -1 ? labels.prev : labels.next}
              style={{
                width: "44px", height: "44px",
                border: "1px solid rgba(26,21,18,0.15)",
                background: "none", cursor: "pointer",
                display: "flex", alignItems: "center", justifyContent: "center",
                color: "var(--color-taupe)",
              }}
            >
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                {d === -1 ? <path d="M7.5 1L2.5 6L7.5 11" /> : <path d="M4.5 1L9.5 6L4.5 11" />}
              </svg>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
