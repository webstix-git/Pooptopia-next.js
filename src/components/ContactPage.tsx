"use client";

import { useState, type FormEvent } from "react";
import {
  IconFacebook,
  IconInstagram,
  IconMail,
  IconPhone,
  IconPin,
  IconX,
  IconYelp,
  IconYouTube,
} from "@/components/Icons";
import { NewsletterForm } from "@/components/NewsletterForm";
import { PageBanner } from "@/components/PageBanner";
import { blogPosts } from "@/lib/blog";
import { ADDRESS_MAPS_URL, socials } from "@/lib/site";

const services = [
  "Pooptopia Premium Package",
  "Pooptopia Prestige Package",
  "Pooptopia Precision Clean",
  "Paw Protection by Pooptopia",
  "Pooptopia Playtime Pickup",
];

const socialIcons = {
  Facebook: IconFacebook,
  Instagram: IconInstagram,
  X: IconX,
  Yelp: IconYelp,
  YouTube: IconYouTube,
};

const counties = [
  "Kenosha County, WI",
  "Racine County, WI",
  "Walworth County, WI",
  "Lake County, IL",
];

const mapsQuery = "6806 55th St., Kenosha, WI 53144";
const mapsUrl = ADDRESS_MAPS_URL;
const mapsEmbed = `https://maps.google.com/maps?q=${encodeURIComponent(mapsQuery)}&z=14&output=embed`;

export function ContactPage() {
  const [sent, setSent] = useState(false);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.reportValidity()) return;

    const data = new FormData(form);
    const lines = [
      `Name: ${data.get("name")}`,
      `Phone: ${data.get("phone")}`,
      `Email: ${data.get("email")}`,
      `Service: ${data.get("service")}`,
      `Service area: ${data.get("county") || "Not specified"}`,
      "",
      String(data.get("message") || ""),
    ];
    window.location.href = `mailto:admin@pooptopia.dog?subject=${encodeURIComponent(
      "Pooptopia contact",
    )}&body=${encodeURIComponent(lines.join("\n"))}`;
    setSent(true);
  }

  return (
    <main className="contact-page">
      <PageBanner
        title="Contact Us"
        crumb="Contact"
        lede="Tell us about your yard and your dogs. Call, email, or send a note and we will be in touch."
      />

      <section className="contact-body" data-screen-label="Contact form">
        <div className="wrap contact-grid">
          <form className="contact-card" onSubmit={onSubmit}>
            <h2 className="titan">Contact Us</h2>
            <p className="contact-lead">Share a few details and we will follow up soon.</p>

            <div className="contact-fields">
              <label>
                <span className="contact-field-name">
                  Name <abbr className="contact-required" title="required">*</abbr>
                </span>
                <input name="name" type="text" autoComplete="name" required placeholder="Your name" />
              </label>
              <label>
                <span className="contact-field-name">
                  Phone <abbr className="contact-required" title="required">*</abbr>
                </span>
                <input
                  name="phone"
                  type="tel"
                  autoComplete="tel"
                  required
                  placeholder="(262) 555-0123"
                />
              </label>
              <label>
                <span className="contact-field-name">
                  Email <abbr className="contact-required" title="required">*</abbr>
                </span>
                <input
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  placeholder="you@email.com"
                />
              </label>
              <label>
                <span className="contact-field-name">
                  Service <abbr className="contact-required" title="required">*</abbr>
                </span>
                <select name="service" required defaultValue="">
                  <option value="" disabled>
                    Select a service
                  </option>
                  {services.map((service) => (
                    <option key={service} value={service}>
                      {service}
                    </option>
                  ))}
                </select>
              </label>
              <label className="contact-span">
                <span className="contact-field-name">Service area</span>
                <select name="county" defaultValue="">
                  <option value="">Select a county</option>
                  {counties.map((county) => (
                    <option key={county} value={county}>
                      {county}
                    </option>
                  ))}
                </select>
              </label>
              <label className="contact-span">
                <span className="contact-field-name">Message</span>
                <textarea name="message" rows={5} placeholder="Tell us about your yard and your dogs." />
              </label>
            </div>

            {sent ? (
              <p className="contact-success" role="status">
                <span className="contact-check" aria-hidden="true">
                  ✓
                </span>
                <span>
                  <strong>Thanks.</strong> Your note is ready to send to{" "}
                  <a href="mailto:admin@pooptopia.dog">admin@pooptopia.dog</a>. We will be in touch.
                </span>
              </p>
            ) : null}

            <button className="btn-solid" type="submit">
              Send Request
            </button>
          </form>

          <aside className="contact-side">
            <div className="contact-card">
              <h2 className="titan">Contact Details</h2>
              <ul className="contact-details">
                <li>
                  <span className="contact-icon">
                    <IconPin size={20} />
                  </span>
                  <span>
                    <span className="contact-label">Address</span>
                    <a href={mapsUrl} target="_blank" rel="noreferrer">
                      6806 55th St.
                      <br />
                      Kenosha, WI 53144
                    </a>
                  </span>
                </li>
                <li>
                  <span className="contact-icon">
                    <IconPhone size={20} />
                  </span>
                  <span>
                    <span className="contact-label">Phone</span>
                    <a href="tel:2623512147">(262) 351-2147</a>
                  </span>
                </li>
                <li>
                  <span className="contact-icon">
                    <IconMail size={20} />
                  </span>
                  <span>
                    <span className="contact-label">Email</span>
                    <a href="mailto:admin@pooptopia.dog">admin@pooptopia.dog</a>
                  </span>
                </li>
              </ul>
              <div className="contact-socials">
                <span className="contact-label">Follow</span>
                <ul>
                  {socials.map((item) => {
                    const Icon = socialIcons[item.label as keyof typeof socialIcons];
                    return (
                      <li key={item.label}>
                        <a href={item.href} target="_blank" rel="noreferrer" aria-label={item.label}>
                          <Icon size={36} />
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>

            <div className="contact-card">
              <div className="contact-map-head">
                <h2 className="titan">Directions</h2>
                <a href={mapsUrl} target="_blank" rel="noreferrer">
                  Open in Google Maps
                </a>
              </div>
              <iframe
                className="contact-map"
                title="Map of Pooptopia at 6806 55th St., Kenosha, WI"
                src={mapsEmbed}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </aside>
        </div>
      </section>

      <section className="newsletter" data-screen-label="Newsletter">
        <div className="wrap">
          <div className="newsletter-card">
            <div className="newsletter-copy">
              <span className="newsletter-badge">
                <IconMail size={16} />
                Newsletter
              </span>
              <h2 className="titan">
                Yard notes
                <br />
                from
                <br />
                <em className="em">Pooptopia.</em>
              </h2>
              <p>
                Sign up for updates from the family behind the visits, including notes from the
                Woof to Waste blog.
              </p>
              <ul className="newsletter-points">
                <li>
                  <span aria-hidden="true">✓</span> New Woof to Waste posts
                </li>
                <li>
                  <span aria-hidden="true">✓</span> Seasonal yard and dog care tips
                </li>
                <li>
                  <span aria-hidden="true">✓</span> Updates from Olive and Louie
                </li>
              </ul>
              <NewsletterForm />
            </div>
            <div className="newsletter-photo">
              <img src="/images/gallery/dogs-with-supplies.webp" alt="Dogs beside sanitation supplies" />
              <a className="newsletter-latest" href={blogPosts[0].href}>
                <img src={blogPosts[0].image} alt="" />
                <span>
                  <span className="newsletter-kicker">Latest from the blog</span>
                  <strong>{blogPosts[0].title}</strong>
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
