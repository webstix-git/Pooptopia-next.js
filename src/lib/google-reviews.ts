export type GoogleReview = {
  id: string;
  author: string;
  authorUrl: string;
  photoUrl: string | null;
  rating: number;
  text: string;
  relativeTime: string;
};

export type GoogleReviewFeed = {
  name: string;
  rating: number | null;
  total: number | null;
  mapsUrl: string;
  reviews: GoogleReview[];
};

type PlaceDetails = {
  displayName?: { text?: string };
  googleMapsUri?: string;
  rating?: number;
  userRatingCount?: number;
  reviews?: {
    name?: string;
    rating?: number;
    relativePublishTimeDescription?: string;
    text?: { text?: string };
    authorAttribution?: {
      displayName?: string;
      uri?: string;
      photoUri?: string;
    };
  }[];
};

function recencyRank(relativeTime: string) {
  const text = relativeTime.toLowerCase();
  const amount = Number(text.match(/\d+/)?.[0] ?? 1);
  if (text.includes("minute") || text.includes("hour") || text.includes("just now")) return amount / 24;
  if (text.includes("yesterday")) return 1;
  if (text.includes("day")) return amount;
  if (text.includes("week")) return amount * 7;
  if (text.includes("month")) return amount * 30;
  if (text.includes("year")) return amount * 365;
  return Number.MAX_SAFE_INTEGER;
}

function byNewest(reviews: GoogleReview[]) {
  return reviews
    .map((review, order) => ({ review, order }))
    .sort(
      (a, b) => recencyRank(a.review.relativeTime) - recencyRank(b.review.relativeTime) || a.order - b.order,
    )
    .map((item) => item.review);
}

const PLACE_ID = "ChIJmYLCrYQCo6IRdFrNg2S6fcI";
const MAPS_FALLBACK = `https://www.google.com/maps/search/?api=1&query=Pooptopia&query_place_id=${PLACE_ID}`;
const REVIEW_LIMIT = 12;

const publishedReviews: GoogleReviewFeed = {
  name: "Pooptopia",
  rating: 5,
  total: 75,
  mapsUrl: MAPS_FALLBACK,
  reviews: [
    {
      id: "taryn-ross",
      author: "Taryn Ross",
      authorUrl: MAPS_FALLBACK,
      photoUrl: null,
      rating: 5,
      relativeTime: "3 months ago",
      text: "Kim and David go above and beyond - we highly recommend this team for yard clean up!",
    },
    {
      id: "andrea-lowe",
      author: "andrea lowe",
      authorUrl: MAPS_FALLBACK,
      photoUrl: null,
      rating: 5,
      relativeTime: "4 months ago",
      text: "I saw a flyer for Pooptopia at our vet’s office and thought, what the heck, I’ll give them a call and see what the scoop is. Neither my husband nor I like picking up the poops so this service was a no brainer.\n\nThe team is always on time or early and communicate everything (via text was my preference), they clean up, sanitize, and let us know if anything looks off with the poops. Absolutely recommend Pooptopia, we have them come out weekly but if you have a few dogs they offer twice a week too!\n\nPooptopia is Grizz and Millie approved, even if they bark at the girls when they’re here 😆",
    },
    {
      id: "shannon-dwyer",
      author: "Shannon Dwyer",
      authorUrl: MAPS_FALLBACK,
      photoUrl: null,
      rating: 5,
      relativeTime: "4 months ago",
      text: "Pooptopia is fantastic! Their team is always friendly, reliable, and does a great job keeping our yard clean. They even pulled some weeds for me during their visit, which was completely unexpected and so appreciated.\n\nIt’s clear they truly care about their customers and take pride in their work. I highly recommend Pooptopia to anyone looking for dependable, professional service!",
    },
    {
      id: "carrie-karich",
      author: "Carrie Karich",
      authorUrl: MAPS_FALLBACK,
      photoUrl: null,
      rating: 5,
      relativeTime: "4 months ago",
      text: "Kim & David do a wonderful job removing my large Goldendoodles waste from my yard. They are very thorough and efficient. Communication is amazing. I love having a clean yard and I’m always ready for company without having to worry about cleaning the yard first. I highly recommend this service to anyone with a dog!",
    },
    {
      id: "elizabeth-modder",
      author: "Elizabeth Modder",
      authorUrl: MAPS_FALLBACK,
      photoUrl: null,
      rating: 5,
      relativeTime: "5 months ago",
      text: "Pooptopia really is the best, and I don’t say that lightly. There’s something about the way they operate that feels rare: the care is real, the attention to detail is thoughtful and consistent, and everything they do is grounded in a kind of quiet integrity you don’t often come across anymore. But more than anything, it’s how much they genuinely love dogs. You can feel it in every interaction.\n\nIf you love your “poopers” the way I love mine, reach out to Pooptopia. They don’t just do the job. They show up with a level of care that goes beyond what you even knew to expect.",
    },
    {
      id: "catherine-johnson",
      author: "Catherine Johnson",
      authorUrl: MAPS_FALLBACK,
      photoUrl: null,
      rating: 5,
      relativeTime: "5 months ago",
      text: "The Best Thing to Happen to My Yard!\nI've been using Pooptopia for their weekly dog poop removal service, and they do an absolutely amazing job! My yard is clean, fresh, and completely poop-free every week without me having to lift a finger. They are reliable, thorough, and never miss a spot. It's such a game-changer. I can actually enjoy my yard again! If you have dogs and are tired of dealing with the mess, do yourself a favor and call Pooptopia. You won't regret it! Highly recommend! 🐾💩✨",
    },
    {
      id: "edmond-dallas",
      author: "Edmond Dallas",
      authorUrl: MAPS_FALLBACK,
      photoUrl: null,
      rating: 5,
      relativeTime: "5 months ago",
      text: "After searching for someone to do a Spring Clean up, Pooptopia was quick on the response and had first appointment scheduled. They are commited to providing excellent customer service.\nHave been using their service for close to 4 months. They provide detail information about arrival times and after service picture proof along with any information regarding their clean up. Have had no issues with using them and would highly recommend Pooptopia.\nThanks for providing great service Kim & David.",
    },
    {
      id: "ann",
      author: "Ann",
      authorUrl: MAPS_FALLBACK,
      photoUrl: null,
      rating: 5,
      relativeTime: "5 months ago",
      text: "They are very responsive, efficient and detailed oriented.",
    },
    {
      id: "justin",
      author: "Justin",
      authorUrl: MAPS_FALLBACK,
      photoUrl: null,
      rating: 5,
      relativeTime: "5 months ago",
      text: "Over winter my doggy left a lot of doggy landmines. Pooptopia was fast cleaning up, price ended up being cheaper than the quote. They cleaned up all his toys and even is chewing sticks that feel from the trees.",
    },
    {
      id: "nicole-visintainer",
      author: "Nicole Visintainer",
      authorUrl: MAPS_FALLBACK,
      photoUrl: null,
      rating: 5,
      relativeTime: "5 months ago",
      text: "Pooptopia is an excellent and very professional service from start to finish! They are reasonable in price too! I was embarrassed about our yard and how I let it go over winter and couldnt keep up with it and they were understanding and not judgmental whatsoever and helped me feel better about it.I was so thankful to have found them to help!!! I will definitely be continuing services with them in the future! They even brought dog treats for our doggies too!\n\nChoose Pooptopia\nYou wont be disappointed",
    },
    {
      id: "j-w",
      author: "J W",
      authorUrl: MAPS_FALLBACK,
      photoUrl: null,
      rating: 5,
      relativeTime: "5 months ago",
      text: "Kim, David and staff are not only wonderful people to work with, but they do such a thorough job cleaning up after the dogs and sanitizing each of the areas.\nWe really appreciate the services they provide!",
    },
    {
      id: "debbie-marino",
      author: "Debbie Marino",
      authorUrl: MAPS_FALLBACK,
      photoUrl: null,
      rating: 5,
      relativeTime: "5 months ago",
      text: "Kim and her husband are absolutely wonderful! They have great communication and do an excellent job cleaning up & sanitizing the Poop.\nThey give you a heads up when they will arrive, what they did and then a written report as well.\nThey’re just great & we’re very happy!",
    },
  ],
};

export async function getGoogleReviews(): Promise<GoogleReviewFeed | null> {
  const key = process.env.GOOGLE_PLACES_API_KEY;
  if (!key) return { ...publishedReviews, reviews: byNewest(publishedReviews.reviews) };

  try {
    const placeId = process.env.GOOGLE_PLACE_ID || PLACE_ID;
    const details = await fetch(
      `https://places.googleapis.com/v1/places/${encodeURIComponent(placeId)}`,
      {
        headers: {
          "X-Goog-Api-Key": key,
          "X-Goog-FieldMask":
            "displayName,rating,userRatingCount,googleMapsUri,reviews",
        },
        next: { revalidate: 60 * 15 },
      },
    );
    if (!details.ok) return { ...publishedReviews, reviews: byNewest(publishedReviews.reviews) };

    const place = (await details.json()) as PlaceDetails;
    const fromApi = (place.reviews ?? [])
      .filter((review) => review.authorAttribution?.displayName && review.rating)
      .slice(0, REVIEW_LIMIT)
      .map((review, index) => ({
        id: review.name || `${review.authorAttribution?.displayName}-${index}`,
        author: review.authorAttribution?.displayName || "Google reviewer",
        authorUrl: review.authorAttribution?.uri || place.googleMapsUri || MAPS_FALLBACK,
        photoUrl: review.authorAttribution?.photoUri || null,
        rating: review.rating || 0,
        text: review.text?.text?.trim() || "",
        relativeTime: review.relativePublishTimeDescription || "",
      }));
    const seen = new Set(fromApi.map((review) => review.author.toLowerCase()));
    const reviews = [...fromApi];
    for (const review of publishedReviews.reviews) {
      if (reviews.length >= REVIEW_LIMIT) break;
      if (seen.has(review.author.toLowerCase())) continue;
      seen.add(review.author.toLowerCase());
      reviews.push(review);
    }

    if (place.rating == null && place.userRatingCount == null && !reviews.length) {
      return { ...publishedReviews, reviews: byNewest(publishedReviews.reviews) };
    }

    return {
      name: place.displayName?.text || "Pooptopia",
      rating: place.rating ?? null,
      total: place.userRatingCount ?? null,
      mapsUrl: place.googleMapsUri || MAPS_FALLBACK,
      reviews: byNewest(reviews.length ? reviews : publishedReviews.reviews),
    };
  } catch {
    return { ...publishedReviews, reviews: byNewest(publishedReviews.reviews) };
  }
}
