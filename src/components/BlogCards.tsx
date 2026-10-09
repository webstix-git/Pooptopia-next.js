import type { BlogPost } from "@/lib/blog";

export function BlogCards({ posts }: { posts: BlogPost[] }) {
  return (
    <ul className="blog-grid">
      {posts.map((post) => (
        <li key={post.href}>
          <a
            className="blog-card"
            href={post.href}
            {...(post.href.startsWith("http") ? { target: "_blank", rel: "noreferrer" } : {})}
          >
            <img src={post.image} alt="" />
            <div className="blog-card-body">
              <time dateTime={post.date}>{post.dateLabel}</time>
              <h3>{post.title}</h3>
            </div>
          </a>
        </li>
      ))}
    </ul>
  );
}
