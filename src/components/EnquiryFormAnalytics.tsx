"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    gtag?: (
      command: string,
      eventName: string,
      params?: Record<string, string>
    ) => void;
  }
}

export default function EnquiryFormAnalytics() {
  useEffect(() => {
    const form = document.querySelector<HTMLFormElement>(
      'form[name="homepage-enquiry-en"]'
    );

    if (!form) return;

    const handleSubmit = () => {
      window.gtag?.("event", "form_submit", {
        form_id: "homepage-enquiry-en",
        form_name: "homepage-enquiry-en",
        form_destination: "/en/thank-you",
        transport_type: "beacon",
      });
    };

    form.addEventListener("submit", handleSubmit);

    return () => {
      form.removeEventListener("submit", handleSubmit);
    };
  }, []);

  return null;
}