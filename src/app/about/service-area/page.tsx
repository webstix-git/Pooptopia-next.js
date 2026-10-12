import type { Metadata } from "next";
import { PageBanner } from "@/components/PageBanner";
import { ServiceArea } from "@/components/ServiceArea";

export const metadata: Metadata = {
  title: "Service Area - Pooptopia",
  description:
    "Pooptopia serves Kenosha, Racine, and Walworth counties in Wisconsin and Lake County, Illinois.",
};

export default function Page() {
  return (
    <main className="service-area-page">
      <PageBanner
        title="Service Area"
        image="/images/gallery-snow-yard.jpg"
        position="center center"
      />
      <ServiceArea />
    </main>
  );
}
