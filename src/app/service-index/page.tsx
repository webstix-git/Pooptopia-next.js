import type { Metadata } from "next";
import { ServiceIndexPage } from "@/components/ServiceIndexPage";

export const metadata: Metadata = {
  title: "AI Readiness Service Index - Pooptopia",
  description:
    "Pooptopia services: weekly Premium, twice-weekly Prestige, one-time Precision Clean, Paw Protection, and Playtime Pickup.",
};

export default function Page() {
  return <ServiceIndexPage />;
}
