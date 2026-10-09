"use client";

import { useState, type FormEvent } from "react";

export function NewsletterForm() {
  const [sent, setSent] = useState(false);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.reportValidity()) return;

    const email = String(new FormData(form).get("email") || "");
    window.location.href = `mailto:admin@pooptopia.dog?subject=${encodeURIComponent(
      "Newsletter signup",
    )}&body=${encodeURIComponent(`Please add ${email} to the Pooptopia newsletter.`)}`;
    setSent(true);
  }

  return (
    <form className="newsletter-form" onSubmit={onSubmit}>
      <label htmlFor="newsletter-email">Email</label>
      <div className="newsletter-row">
        <input
          id="newsletter-email"
          name="email"
          type="email"
          autoComplete="email"
          required
          placeholder="you@email.com"
        />
        <button className="btn-solid" type="submit">
          Subscribe
        </button>
      </div>
      {sent ? (
        <p className="newsletter-success" role="status">
          Thanks. Your signup note is ready to send to admin@pooptopia.dog.
        </p>
      ) : null}
    </form>
  );
}
