import type { Metadata } from "next";
import { SitemapPage } from "@/components/SitemapPage";

export const metadata: Metadata = {
  title: "Sitemap - Pooptopia",
  description: "Every page on the Pooptopia site, from services and the service area to contact and policies.",
};

export default function Page() {
  return <SitemapPage />;
}
