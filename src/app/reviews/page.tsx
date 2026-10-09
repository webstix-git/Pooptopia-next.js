import type { Metadata } from "next";
import { PageBanner } from "@/components/PageBanner";
import { ReviewCard } from "@/components/ReviewCard";
import { getGoogleReviews } from "@/lib/google-reviews";

export const metadata: Metadata = {
  title: "Reviews - Pooptopia",
};

export default async function Page() {
  const feed = await getGoogleReviews();
  const reviews = feed?.reviews.slice(0, 12) ?? [];

  return (
    <main className="contact-page">
      <PageBanner
        title="Reviews"
        lede="Notes from yards we visit around Kenosha."
        image="/images/gallery/dogs-in-yard.webp"
      />
      <section className="reviews-page" data-screen-label="Reviews">
        <div className="wrap">
          <ul className="reviews-grid">
            {reviews.map((review) => (
              <li key={review.id}>
                <ReviewCard review={review} />
              </li>
            ))}
          </ul>
          {feed?.mapsUrl ? (
            <a className="section-btn reviews-more" href={feed.mapsUrl} target="_blank" rel="noreferrer">
              Read all Google reviews
            </a>
          ) : null}
        </div>
      </section>
    </main>
  );
}
