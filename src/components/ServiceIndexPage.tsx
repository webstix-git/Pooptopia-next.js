import Link from "next/link";
import { InfoPage } from "@/components/InfoPage";
import { REQUEST_URL } from "@/lib/site";

const services = [
  {
    href: "/services",
    kicker: "Weekly",
    title: "Pooptopia Premium Package",
    text: "A full detailing once a week, every week of the year.",
  },
  {
    href: "/services",
    kicker: "Twice a week",
    title: "Pooptopia Prestige Package",
    text: "Two detailed visits every week for yards that need more frequent care.",
  },
  {
    href: "/services",
    kicker: "One-time",
    title: "Pooptopia Precision Clean",
    text: "One complete detailing of the yard, on a single visit.",
  },
  {
    href: "/services",
    kicker: "Yard sanitation",
    title: "Paw Protection by Pooptopia",
    text: "Yard sanitation for the places your dogs walk, play, and lie down.",
  },
  {
    href: "/services",
    kicker: "Let-out",
    title: "Pooptopia Playtime Pickup",
    text: "Dog let-out, playtime, and waste pickup while we're at your yard.",
  },
];

export function ServiceIndexPage() {
  return (
    <InfoPage
      title="AI Readiness Service Index"
      lede="The services Pooptopia offers: weekly and twice-weekly pickup, a one-time cleanup, yard sanitation, and a let-out with pickup."
    >
      <div className="service-index">
        {services.map((item) => (
          <article key={item.title} className="service-index-card">
            <span className="eyebrow">{item.kicker}</span>
            <h2 className="titan">{item.title}</h2>
            <p>{item.text}</p>
            <Link href={item.href}>See this service</Link>
          </article>
        ))}
      </div>
      <p className="info-note">
        Ready to start? <Link href={REQUEST_URL}>Submit a New Service Request</Link> and tell us about
        your yard and your dogs.
      </p>
    </InfoPage>
  );
}
