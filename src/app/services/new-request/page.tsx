import type { Metadata } from "next";
import { PageBanner } from "@/components/PageBanner";
import { ServiceRequestForm } from "@/components/ServiceRequestForm";

export const metadata: Metadata = {
  title: "New Service Request - Pooptopia",
  description:
    "Request dog waste removal from Pooptopia. Tell us about your yard and your dogs in Kenosha, Racine, Walworth, or Lake County.",
};

export default function Page() {
  return (
    <main className="contact-page">
      <PageBanner
        title="New Service Request"
        lede="Tell us about your yard and your dogs."
        image="/images/team-arrival.webp"
      />
      <section className="request-page">
        <ServiceRequestForm />
      </section>
    </main>
  );
}
