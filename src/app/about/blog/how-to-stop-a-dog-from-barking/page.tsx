import type { Metadata } from "next";
import { BlogArticle } from "@/components/BlogArticle";
import { BlogPostLayout } from "@/components/BlogPostLayout";
import { PageBanner } from "@/components/PageBanner";
import { barkingArticle } from "@/lib/barking-article";

export const metadata: Metadata = {
  title: "How to Stop a Dog from Barking: A Guide to Sanity - Pooptopia",
  description:
    "If you’ve ever had your dog suddenly go full alert mode because a leaf blew past the window, or bark at absolutely nothing, then you know the struggle of excessive barking.",
};

export default function Page() {
  return (
    <main className="contact-page">
      <PageBanner
        title="How to Stop a Dog from Barking: A Guide to Sanity"
        lede="February 20, 2025"
        image="/images/blog/olive-barking.jpg"
        position="center 30%"
      />
      <section className="blog-post" data-screen-label="Blog post">
        <div className="wrap">
          <BlogPostLayout>
            <BlogArticle blocks={barkingArticle} />
          </BlogPostLayout>
        </div>
      </section>
    </main>
  );
}
