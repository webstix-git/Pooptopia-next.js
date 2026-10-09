import type { Metadata } from "next";
import { PageBanner } from "@/components/PageBanner";
import { ServiceOfferings } from "@/components/ServiceOfferings";

export const metadata: Metadata = {
  title: "Pooptopia Services - Pooptopia",
  description:
    "Regular and one-time dog waste removal, designed around the needs of each yard and each dog.",
};

export default function Page() {
  return (
    <main className="contact-page">
      <PageBanner
        title="Pooptopia Services"
        lede="Regular and one-time cleanup, designed around the needs of each yard and each dog."
        image="/images/team-arrival.webp"
      />
      <ServiceOfferings />
    </main>
  );
}
