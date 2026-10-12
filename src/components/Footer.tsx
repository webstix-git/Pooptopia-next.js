import Link from "next/link";
import { IconCalendarPlain, IconMail, IconPhone, IconPin, IconFacebook, IconInstagram, IconX, IconYelp, IconYouTube } from "@/components/Icons";
import { ADDRESS_MAPS_URL, socials } from "@/lib/site";

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/about/our-why", label: "About Us" },
  { href: "/reviews", label: "Reviews" },
  { href: "/services", label: "Pooptopia Services" },
  { href: "/about/service-area", label: "Service Area" },
  { href: "/gallery", label: "Gallery" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
];

const socialIcons = {
  Facebook: IconFacebook,
  Instagram: IconInstagram,
  X: IconX,
  Yelp: IconYelp,
  YouTube: IconYouTube,
};

const footerServices = [
  { href: "/services", label: "Pooptopia Premium Package" },
  { href: "/services", label: "Pooptopia Prestige Package" },
  { href: "/services", label: "Pooptopia Precision Clean" },
  { href: "/services", label: "Paw Protection by Pooptopia" },
  { href: "/services", label: "Pooptopia Playtime Pickup" },
];

export function Footer() {
  return (
    <footer id="contact" className="site-footer">
      <div className="footer-inner">
        <div className="footer-grid">
          <div className="footer-brand">
            <span className="footer-logo-lockup">
              <img src="/images/logo-mark-white.png" alt="" className="footer-logo-mark" />
              <img src="/images/logo-wordmark-white.png" alt="Pooptopia" className="footer-logo-wordmark" />
            </span>
            <span className="titan footer-tagline">The little details matter.</span>
            <span className="footer-blurb">
              Locally owned, family-run dog waste removal &amp; yard sanitation since 2023.
            </span>
            <div className="footer-socials">
              {socials.map((item) => {
                const Icon = socialIcons[item.label as keyof typeof socialIcons];
                return (
                  <a key={item.label} href={item.href} aria-label={item.label} target="_blank" rel="noreferrer">
                    <Icon />
                  </a>
                );
              })}
            </div>
          </div>
          <div className="footer-col">
            <strong>Quick Links</strong>
            {quickLinks.map((item) => (
              <Link key={item.href} href={item.href}>
                {item.label}
              </Link>
            ))}
          </div>
          <div className="footer-col">
            <strong>Services</strong>
            {footerServices.map((item) => (
              <Link key={item.label} href={item.href}>
                {item.label}
              </Link>
            ))}
          </div>
          <div className="footer-col">
            <strong>Contact Us</strong>
            <div className="footer-contact">
              <a
                className="footer-contact-item"
                href={ADDRESS_MAPS_URL}
                target="_blank"
                rel="noreferrer"
              >
                <IconPin size={18} />
                <span>
                  6806 55th St.
                  <br />
                  Kenosha, WI 53144
                </span>
              </a>
              <a className="footer-contact-item" href="tel:2623512147">
                <IconPhone size={18} />
                <span>(262) 351-2147</span>
              </a>
              <a className="footer-contact-item" href="mailto:admin@pooptopia.dog">
                <IconMail size={18} />
                <span>admin@pooptopia.dog</span>
              </a>
              <span className="footer-contact-item">
                <IconCalendarPlain size={18} />
                <span>
                  Hours
                  <br />
                  09:00 am – 05:00 pm
                </span>
              </span>
            </div>
          </div>
        </div>
        <div className="footer-bar">
          <span>© 2026 Pooptopia. All rights reserved.</span>
          <div className="footer-links">
            <Link href="/sitemap">Sitemap</Link>
            <Link href="/service-index">AI Readiness Service Index</Link>
            <Link href="/privacy-policy">Privacy Policy</Link>
            <Link href="/ai-policy">AI Policy</Link>
            <a
              className="footer-credit"
              href="https://www.webstix.com/"
              target="_blank"
              rel="noreferrer"
            >
              Website Designed by
              <img src="/images/webstix-logo.png" alt="webstix" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
