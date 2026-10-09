import type { Metadata } from "next";
import { BlogArticle } from "@/components/BlogArticle";
import { BlogPostLayout } from "@/components/BlogPostLayout";
import { PageBanner } from "@/components/PageBanner";
import { skunkArticle } from "@/lib/skunk-article";

export const metadata: Metadata = {
  title: "How to Get Rid of Skunk Smell on Your Dog - Pooptopia",
  description:
    "We all love our dogs, until they come barreling into the house, tail wagging, eyes bright, smelling like they just got back from a week-long road trip with a skunk.",
};

export default function Page() {
  return (
    <main className="contact-page">
      <PageBanner
        title="How to Get Rid of Skunk Smell on Your Dog"
        lede="February 13, 2025"
        image="/images/blog/olive-bath.jpg"
        position="center 30%"
      />
      <section className="blog-post" data-screen-label="Blog post">
        <div className="wrap">
          <BlogPostLayout>
            <BlogArticle blocks={skunkArticle} />
          </BlogPostLayout>
        </div>
      </section>
    </main>
  );
}
