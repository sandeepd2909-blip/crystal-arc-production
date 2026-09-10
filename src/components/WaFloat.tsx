"use client";

import { Locale, DEFAULT_LOCALE } from "@/lib/i18n";
import { ui } from "@/lib/dictionaries/ui";

declare global {
  interface Window {
    gtag?: (
      command: string,
      eventName: string,
      params?: Record<string, string>
    ) => void;
  }
}

export default function WaFloat({
  locale = DEFAULT_LOCALE,
}: {
  locale?: Locale;
}) {
  const t = ui(locale).a11y;

  const waHref = `https://wa.me/971565364384?text=${encodeURIComponent(
    ui(locale).cta.waMessage
  )}`;

  const handleWhatsAppClick = () => {
    console.log("WHATSAPP GA4 CLICK");

    if (
      typeof window !== "undefined" &&
      typeof window.gtag === "function"
    ) {
      window.gtag("event", "whatsapp_link_sticky", {
        event_category: "engagement",
        event_label: "Chat on WhatsApp",
        transport_type: "beacon",
      });
    } else {
      console.warn("GA4 gtag is not available");
    }
  };

  return (
    <a
      href={waHref}
      className="wa-float"
      target="_blank"
      rel="noopener noreferrer"
      aria-label={t.whatsapp}
      onClick={handleWhatsAppClick}
    >
      <svg
        viewBox="0 0 32 32"
        aria-hidden="true"
        focusable="false"
      >
        <path
          fill="currentColor"
          d="M19.11 17.17c-.27-.14-1.61-.79-1.86-.88-.25-.09-.43-.14-.61.14-.18.27-.7.88-.86 1.06-.16.18-.32.2-.59.07-.27-.14-1.13-.42-2.15-1.34-.79-.7-1.32-1.56-1.47-1.82-.16-.27-.02-.41.12-.55.12-.12.27-.32.41-.48.14-.16.18-.27.27-.45.09-.18.05-.34-.02-.48-.07-.14-.61-1.48-.84-2.03-.22-.53-.45-.46-.61-.47h-.52c-.18 0-.48.07-.73.34-.25.27-.95.93-.95 2.27s.97 2.64 1.11 2.82c.14.18 1.9 2.91 4.6 4.08.64.28 1.14.45 1.53.57.64.2 1.22.17 1.68.1.51-.08 1.61-.66 1.84-1.29.23-.64.23-1.18.16-1.29-.07-.11-.25-.18-.52-.32z"
        />
        <path
          fill="currentColor"
          d="M16.03 3.2c-7.07 0-12.8 5.73-12.8 12.8 0 2.25.59 4.36 1.62 6.19L3.2 28.8l6.79-1.62a12.74 12.74 0 0 0 6.04 1.52h.01c7.07 0 12.8-5.73 12.8-12.8s-5.73-12.7-12.81-12.7zm0 23.35h-.01c-1.95 0-3.86-.52-5.53-1.51l-.4-.24-4.03.96.97-3.93-.26-.4a10.61 10.61 0 0 1-1.63-5.64c0-5.87 4.78-10.65 10.66-10.65 2.84 0 5.52 1.11 7.53 3.12a10.57 10.57 0 0 1 3.12 7.54c0 5.87-4.78 10.65-10.65 10.65z"
        />
      </svg>
    </a>
  );
}