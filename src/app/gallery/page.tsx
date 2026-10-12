import type { Metadata } from "next";
import { GalleryListing } from "@/components/GalleryListing";
import { PageBanner } from "@/components/PageBanner";

export const metadata: Metadata = {
  title: "Gallery - Pooptopia",
};

export default function Page() {
  return (
    <main className="contact-page">
      <PageBanner
        title="Gallery"
        lede="Before and after photos from real visits, the dogs we work for, and the cleaning and sanitizing that happens on every route."
        image="/images/gallery-snow-yard.jpg"
        position="center center"
      />
      <section className="gallery-page" data-screen-label="Gallery listing">
        <div className="wrap gallery-listing">
          <GalleryListing />
        </div>
      </section>
    </main>
  );
}
