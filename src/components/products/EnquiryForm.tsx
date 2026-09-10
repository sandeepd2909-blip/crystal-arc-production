"use client";

import { useState } from "react";
import { Locale, DEFAULT_LOCALE } from "@/lib/i18n";
import { ui } from "@/lib/dictionaries/ui";

export default function EnquiryForm({ locale = DEFAULT_LOCALE }: { locale?: Locale }) {
  const t = ui(locale).form;
  const PRODUCTS = t.products;
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const form = e.currentTarget;
    const data = new URLSearchParams(new FormData(form) as unknown as Record<string, string>);

    try {
      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: data.toString(),
      });
      if (!response.ok) throw new Error(`Form submission failed: ${response.status}`);
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div style={{ padding: "56px 0", textAlign: "center" }}>
        <div
          style={{
            width: "52px",
            height: "52px",
            border: "1px solid var(--color-gold)",
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            margin: "0 auto 28px",
            color: "var(--color-gold)",
            fontSize: "22px",
          }}
        >
          ✓
        </div>
        <p style={{ fontFamily: "var(--font-display)", fontSize: "1.7rem", fontStyle: "italic", color: "var(--color-ivory)", marginBottom: "10px" }}>
          {t.sentTitle}
        </p>
        <p style={{ fontSize: "14px", color: "var(--color-taupe)", lineHeight: 1.7 }}>
          {t.sentBody}
        </p>
      </div>
    );
  }

  const fieldWrap: React.CSSProperties = {
    position: "relative",
    paddingBottom: "2px",
    marginBottom: "8px",
  };

  const label: React.CSSProperties = {
    display: "block",
    fontSize: "12px",
    letterSpacing: "0.2em",
    textTransform: "uppercase",
    color: "var(--color-gold)",
    opacity: 0.7,
    fontWeight: 600,
    marginBottom: "8px",
    fontFamily: "var(--font-sans)",
  };

  const input: React.CSSProperties = {
    width: "100%",
    background: "transparent",
    border: "none",
    borderBottom: "1px solid rgba(26,21,18,0.22)",
    outline: "none",
    padding: "12px 0 14px",
    fontSize: "15px",
    color: "var(--color-ivory)",
    fontFamily: "inherit",
    caretColor: "var(--color-gold)",
    transition: "border-color 0.2s",
  };

  return (
    <form
      name="product-enquiry"
      method="POST"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      onSubmit={handleSubmit}
    >
      <input type="hidden" name="form-name" value="product-enquiry" />
      <p className="sr-only" aria-hidden="true">
        <label>Do not fill this out: <input name="bot-field" /></label>
      </p>
      <div className="enquiry-field-row" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0 32px" }}>
        <div style={fieldWrap}>
          <label htmlFor="f-name" style={label}>{t.name}</label>
          <input id="f-name" name="name" type="text" required placeholder={t.namePlaceholder} style={input} />
        </div>
        <div style={fieldWrap}>
          <label htmlFor="f-email" style={label}>{t.email}</label>
          <input id="f-email" name="email" type="email" required placeholder={t.emailPlaceholder} style={input} />
        </div>
      </div>

      <div className="enquiry-field-row" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0 32px", marginTop: "28px" }}>
        <div style={fieldWrap}>
          <label htmlFor="f-phone" style={label}>{t.phone}</label>
          <input id="f-phone" name="phone" type="tel" placeholder={t.phonePlaceholder} style={input} />
        </div>
        <div style={fieldWrap}>
          <label htmlFor="f-product" style={label}>{t.interest}</label>
          <select
            id="f-product"
            name="product"
            required
            defaultValue=""
            style={{ ...input, cursor: "pointer", appearance: "none", color: "var(--color-taupe)" }}
          >
            <option value="" disabled style={{ background: "#F7F2EB" }}>{t.selectCategory}</option>
            {PRODUCTS.map((p) => (
              <option key={p} value={p} style={{ background: "#F7F2EB", color: "#1A1512" }}>{p}</option>
            ))}
          </select>
        </div>
      </div>

      <div style={{ marginTop: "28px" }}>
        <label htmlFor="f-message" style={label}>{t.brief}</label>
        <textarea
          id="f-message"
          name="message"
          rows={4}
          placeholder={t.briefPlaceholder}
          style={{
            ...input,
            resize: "none",
            lineHeight: 1.75,
          }}
        />
      </div>

      {/* Gold line under textarea */}
      <div style={{ height: "1px", background: "rgba(26,21,18,0.18)", marginTop: "-1px", marginBottom: "36px" }} />

      <div style={{ display: "flex", alignItems: "center", gap: "20px", flexWrap: "wrap" }}>
        <button
          type="submit"
          className="btn-red"
          disabled={status === "sending"}
          style={{
            minWidth: "180px",
            justifyContent: "center",
            opacity: status === "sending" ? 0.6 : 1,
            cursor: status === "sending" ? "not-allowed" : "pointer",
          }}
        >
          {status === "sending" ? t.sending : t.send}
        </button>
        <div>
          <p style={{ fontSize: "13px", color: "var(--color-taupe)", lineHeight: 1.65, marginBottom: "3px" }}>
            {t.respond}
          </p>
          <p style={{ fontSize: "12px", color: "var(--color-muted)", lineHeight: 1.5 }}>
            {t.noSpam}
          </p>
        </div>
      </div>
      {status === "error" && (
        <p role="alert" style={{ marginTop: "18px", color: "#9f2d2d", fontSize: "13px", lineHeight: 1.6 }}>
          {locale === "ar"
            ? "تعذّر إرسال الطلب. يرجى المحاولة مرة أخرى أو مراسلتنا عبر واتساب."
            : "We could not send your enquiry. Please try again or contact us on WhatsApp."}
        </p>
      )}
    </form>
  );
}
