"use client";

import { useState } from "react";
import { faqs } from "@/lib/site";

export function FaqList() {
  const [open, setOpen] = useState(() => faqs.map(() => true));

  function toggle(index: number) {
    setOpen((current) => current.map((value, itemIndex) => (itemIndex === index ? !value : value)));
  }

  return (
    <div className="faq-page-list">
      {faqs.map((item, index) => {
        const isOpen = open[index];
        return (
          <div key={item.q} className={isOpen ? "faq-page-item is-open" : "faq-page-item"}>
            <button
              type="button"
              className="faq-page-trigger"
              aria-expanded={isOpen}
              onClick={() => toggle(index)}
            >
              <span>{item.q}</span>
              <span className="faq-page-sign" aria-hidden="true">
                {isOpen ? "–" : "+"}
              </span>
            </button>
            {isOpen ? <p className="faq-page-answer">{item.a}</p> : null}
          </div>
        );
      })}
    </div>
  );
}
