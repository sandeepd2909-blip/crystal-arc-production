"use client";
import { useState } from "react";
import { Locale, DEFAULT_LOCALE } from "@/lib/i18n";
import { ui } from "@/lib/dictionaries/ui";

export default function BrochureDownload({ locale = DEFAULT_LOCALE }: { locale?: Locale }) {
  const t = ui(locale).brochure;
  const [form, setForm] = useState({ name: "", email: "", company: "" });
  const [state, setState] = useState<"idle" | "sending" | "done" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setState("sending");
    const formElement = e.currentTarget;
    const data = new URLSearchParams(new FormData(formElement) as unknown as Record<string, string>);

    try {
      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: data.toString(),
      });
      if (!response.ok) throw new Error(`Form submission failed: ${response.status}`);
      setState("done");
    } catch {
      setState("error");
    }
  };

  const inputStyle: React.CSSProperties = {
    width: "100%",
    background: "rgba(26,21,18,0.04)",
    border: "1px solid rgba(26,21,18,0.2)",
    color: "var(--color-ivory)",
    padding: "15px 18px",
    fontSize: "14px",
    fontFamily: "var(--font-sans)",
    outline: "none",
    display: "block",
  };

  if (state === "done") {
    return (
      <div style={{ textAlign: "center", padding: "32px 0" }}>
        <div
          style={{
            width: 52,
            height: 52,
            background: "rgba(140,104,32,0.08)",
            border: "1px solid rgba(140,104,32,0.3)",
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            margin: "0 auto 24px",
            fontSize: "22px",
            color: "var(--color-gold)",
          }}
        >
          ✓
        </div>
        <p
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "1.4rem",
            fontStyle: "italic",
            color: "var(--color-ivory)",
            marginBottom: "8px",
          }}
        >
          {locale === "ar" ? "وصلنا طلبكم." : "Request received."}
        </p>
        <p style={{ fontSize: "13px", color: "var(--color-taupe)", marginBottom: "10px" }}>
          {locale === "ar" ?"يمكنك تنزيل الكتالوج الآن. وقد استلم فريقنا طلبك أيضًا." :"Your request has reached our team. You can download the catalogue now."}
        </p>
        <a href="/brochure/trophies-awards.pdf" download className="btn-ghost">
          {locale === "ar" ? "تنزيل الكتالوج ←" : "Download catalogue →"}
        </a>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      name="brochure-request"
      method="POST"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      aria-label={locale === "ar" ? "طلب الكتيّب" : "Brochure request"}
      style={{ display: "flex", flexDirection: "column", gap: "10px" }}
    >
      <input type="hidden" name="form-name" value="brochure-request" />
      <p className="sr-only" aria-hidden="true"><label>Do not fill this out: <input name="bot-field" /></label></p>
      <label htmlFor="bd-name" className="sr-only">{t.name}</label>
      <input
        id="bd-name"
        name="name"
        type="text"
        placeholder={t.name}
        required
        value={form.name}
        onChange={handleChange}
        style={inputStyle}
      />
      <label htmlFor="bd-email" className="sr-only">{t.email}</label>
      <input
        id="bd-email"
        name="email"
        type="email"
        placeholder={t.email}
        required
        value={form.email}
        onChange={handleChange}
        style={inputStyle}
      />
      <label htmlFor="bd-company" className="sr-only">{t.company}</label>
      <input
        id="bd-company"
        name="company"
        type="text"
        placeholder={t.company}
        required
        value={form.company}
        onChange={handleChange}
        style={inputStyle}
      />
      <button
        type="submit"
        className="btn-red"
        disabled={state === "sending"}
        style={{
          marginTop: "16px",
          width: "100%",
          justifyContent: "center",
          opacity: state === "sending" ? 0.6 : 1,
          cursor: state === "sending" ? "not-allowed" : "pointer",
        }}
      >
        {state === "sending" ? t.sending : t.submit}
      </button>
      <p style={{ marginTop: "12px", fontSize: "11px", color: "var(--color-muted)", textAlign: "center", lineHeight: 1.5 }}>
        {t.note}
      </p>
      {state === "error" && (
        <p role="alert" style={{ marginTop: "6px", fontSize: "12px", color: "#9f2d2d", textAlign: "center", lineHeight: 1.5 }}>
          {locale === "ar" ? "تعذّر إرسال الطلب. يرجى المحاولة مرة أخرى." : "We could not send your request. Please try again."}
        </p>
      )}
    </form>
  );
}
