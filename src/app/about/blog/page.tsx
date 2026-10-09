import type { Metadata } from "next";
import { BlogCards } from "@/components/BlogCards";
import { PageBanner } from "@/components/PageBanner";
import { blogPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Woof to Waste Blog - Pooptopia",
  description: "The Doggy Digest, the Woof to Waste blog from Pooptopia.",
};

export default function Page() {
  return (
    <main className="blog-page">
      <PageBanner
        title="Woof to Waste Blog"
        lede="Notes from the Pooptopia blog."
        image="/images/gallery/late-winter-yard.webp"
        position="center center"
      />
      <section className="blog-listing" data-screen-label="Blog listing">
        <div className="wrap blog-inner band-pad">
          <BlogCards posts={blogPosts.slice(0, 3)} />
        </div>
      </section>
    </main>
  );
}
