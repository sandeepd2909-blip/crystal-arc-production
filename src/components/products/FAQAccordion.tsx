"use client";

import { useState } from "react";
import type { ProductFAQ } from "@/lib/products";

export default function FAQAccordion({ faqs }: { faqs: ProductFAQ[] }) {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div>
      {faqs.map((faq, i) => {
        const isOpen = open === i;
        return (
          <div key={i} className={`faq-item${isOpen ? " open" : ""}`}>
            <button
              className="faq-trigger"
              onClick={() => setOpen(isOpen ? null : i)}
              aria-expanded={isOpen}
            >
              <span className="faq-question">{faq.q}</span>
              <span className="faq-icon">{isOpen ? "−" : "+"}</span>
            </button>
            <div
              className="faq-answer"
              style={{ maxHeight: isOpen ? "400px" : "0" }}
            >
              <p className="faq-answer-inner">{faq.a}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
