"use client";

import { useState } from "react";
import { PageBanner } from "@/components/PageBanner";
import { faqs } from "@/lib/site";

export function FaqPage() {
  const [open, setOpen] = useState(() => faqs.map(() => true));

  return (
    <main className="contact-page">
      <PageBanner
        title="FAQ"
        image="/images/sanitizing.webp"
        position="center 30%"
        lede="Helpful answers about visits, waste, and getting started. We pick up in Kenosha, Racine, and Walworth counties in Wisconsin and Lake County, Illinois."
      />

      <section className="faq-page" data-screen-label="FAQ list">
        <div className="wrap">
          <div className="faq-page-intro">
            <span className="eyebrow">FAQ</span>
            <h2 className="titan">
              Frequently Asked <em className="em">Questions</em>
            </h2>
            <p>Clear answers about a visit, from arrival to the gate photo.</p>
          </div>

          <div className="faq-page-list">
            {faqs.map((item, index) => {
              const isOpen = open[index];
              return (
                <div key={item.q} className={isOpen ? "faq-page-item is-open" : "faq-page-item"}>
                  <button
                    type="button"
                    className="faq-page-trigger"
                    aria-expanded={isOpen}
                    onClick={() =>
                      setOpen((current) =>
                        current.map((value, itemIndex) => (itemIndex === index ? !value : value)),
                      )
                    }
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
        </div>
      </section>
    </main>
  );
}
