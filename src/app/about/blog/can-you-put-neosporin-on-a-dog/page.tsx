import type { Metadata } from "next";
import { BlogArticle } from "@/components/BlogArticle";
import { BlogPostLayout } from "@/components/BlogPostLayout";
import { PageBanner } from "@/components/PageBanner";
import { neosporinArticle } from "@/lib/neosporin-article";

export const metadata: Metadata = {
  title: "Can You Put Neosporin on a Dog? What You Need to Know - Pooptopia",
  description:
    "If you’ve ever owned a dog, you know that at some point, they’re going to come limping inside with a mysterious scrape, scratch, or cut.",
};

export default function Page() {
  return (
    <main className="contact-page">
      <PageBanner
        title="Can You Put Neosporin on a Dog? What You Need to Know"
        lede="February 27, 2025"
        image="/images/blog/olive-and-louie.jpg"
        position="center 30%"
      />
      <section className="blog-post" data-screen-label="Blog post">
        <div className="wrap">
          <BlogPostLayout>
            <BlogArticle blocks={neosporinArticle} />
          </BlogPostLayout>
        </div>
      </section>
    </main>
  );
}
