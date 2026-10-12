import type { ReactNode } from "react";
import { blogPosts } from "@/lib/blog";
import { REQUEST_URL } from "@/lib/site";

export function BlogPostLayout({ children }: { children: ReactNode }) {
  const related = blogPosts.slice(0, 3);

  return (
    <div className="blog-layout">
      <div className="blog-main">{children}</div>
      <aside className="blog-aside">
        <div className="blog-aside-card">
          <p className="blog-aside-kicker">Related posts</p>
          <ul className="blog-related">
            {related.map((post) => (
              <li key={post.href}>
                <a
                  href={post.href}
                  {...(post.href.startsWith("http") ? { target: "_blank", rel: "noreferrer" } : {})}
                >
                  <img src={post.image} alt="" />
                  <span>
                    <time dateTime={post.date}>{post.dateLabel}</time>
                    <strong>{post.title}</strong>
                  </span>
                </a>
              </li>
            ))}
          </ul>
          <a className="blog-aside-more" href="/about/blog">
            All Doggy Digest posts
          </a>
        </div>
        <div className="blog-aside-card is-help">
          <p className="blog-aside-kicker">Pooptopia</p>
          <h2>Need the yard picked up?</h2>
          <p>Family-run dog waste removal and yard sanitation in Kenosha, WI.</p>
          <a href="tel:2623512147">(262) 351-2147</a>
          <a href="mailto:admin@pooptopia.dog">admin@pooptopia.dog</a>
          <a className="blog-aside-cta" href={REQUEST_URL}>
            Request Service
          </a>
        </div>
      </aside>
    </div>
  );
}
