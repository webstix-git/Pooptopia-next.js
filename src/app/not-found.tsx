import type { Metadata } from "next";
import { SitemapPage } from "@/components/SitemapPage";

export const metadata: Metadata = {
  title: "Page not found - Pooptopia",
  description: "That address is not a page on the Pooptopia site. Choose a page from the list.",
};

export default function NotFound() {
  return (
    <SitemapPage
      title="Page not found"
      lede="That address is not a page on the Pooptopia site. Choose a page from the list below."
    />
  );
}
