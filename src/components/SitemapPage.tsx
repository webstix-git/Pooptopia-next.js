import Link from "next/link";
import { PageBanner } from "@/components/PageBanner";
import { CLIENT_LOGIN, DOG_PARK_URL, NOW_HIRING_URL } from "@/lib/site";

type SitemapLink = {
  href: string;
  label: string;
  external?: boolean;
};

type SitemapGroup = {
  title: string;
  href?: string;
  links?: SitemapLink[];
};

const groups: SitemapGroup[] = [
  { title: "Home", href: "/" },
  {
    title: "About",
    links: [
      { href: "/about/our-why", label: "Our Why" },
      { href: "/about/service-area", label: "Service Area" },
      { href: "/about/videos", label: "Pooptopia Videos" },
      { href: "/about/blog", label: "Woof to Waste Blog" },
      { href: "/reviews", label: "Reviews" },
    ],
  },
  {
    title: "Services",
    links: [
      { href: "/services", label: "Pooptopia Services" },
      { href: "/services/new-request", label: "New Service Request" },
    ],
  },
  { title: "Gallery", href: "/gallery" },
  {
    title: "Resources",
    links: [
      { href: CLIENT_LOGIN, label: "Client Log-In", external: true },
      { href: DOG_PARK_URL, label: "Pooptopia Dog Park", external: true },
      { href: NOW_HIRING_URL, label: "Now Hiring", external: true },
      { href: "/faq", label: "FAQ" },
    ],
  },
  { title: "Contact", href: "/contact" },
];

function SitemapAnchor({ item }: { item: SitemapLink }) {
  if (item.external) {
    return (
      <a href={item.href} target="_blank" rel="noreferrer">
        {item.label}
      </a>
    );
  }

  return <Link href={item.href}>{item.label}</Link>;
}

export function SitemapPage() {
  return (
    <main className="contact-page sitemap-page">
      <PageBanner
        title="Sitemap"
        lede="Every page on the Pooptopia site, from services and the service area to contact."
      />
      <div className="wrap sitemap-list">
        <p className="sitemap-kicker">Site navigation</p>
        <h1>Pages</h1>
        {groups.map((group) => (
          <section key={group.title} className="sitemap-group">
            <h2>
              {group.href ? <Link href={group.href}>{group.title}</Link> : group.title}
            </h2>
            {group.links ? (
              <ul>
                {group.links.map((item) => (
                  <li key={item.label}>
                    <SitemapAnchor item={item} />
                  </li>
                ))}
              </ul>
            ) : null}
          </section>
        ))}
      </div>
    </main>
  );
}
