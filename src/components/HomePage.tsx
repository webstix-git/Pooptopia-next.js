import { FaqList } from "@/components/FaqList";
import { GoogleReviews } from "@/components/GoogleReviews";
import { HeroSlider } from "@/components/HeroSlider";
import { Gallery } from "@/components/Gallery";
import { NewsletterForm } from "@/components/NewsletterForm";
import { IconCamera, IconForm, IconMail, IconSpark } from "@/components/Icons";
import { ServiceArea } from "@/components/ServiceArea";
import { BlogCards } from "@/components/BlogCards";
import { blogPosts } from "@/lib/blog";
import { getGoogleReviews } from "@/lib/google-reviews";
import { ServiceOfferings } from "@/components/ServiceOfferings";
import { REQUEST_URL } from "@/lib/site";

const howSteps = [
  {
    n: "1",
    title: "Request",
    kicker: "Tell us about your yard",
    body: "Submit a New Service Request. Tell us about your yard and your dogs, and we will be in touch.",
    icon: <IconForm size={28} />,
  },
  {
    n: "2",
    title: "Detail",
    kicker: "A two-person team",
    body: "Two people carefully detail the yard, sanitize sticky spots, and haul the waste away.",
    icon: <IconSpark size={28} />,
  },
  {
    n: "3",
    title: "Confirm",
    kicker: "Gate photo, every visit",
    body: "Before we leave, you get an update with photos, including confirmation that your gate is securely latched.",
    icon: <IconCamera size={28} />,
  },
];

const steps: {
  title: string;
  body: string;
}[] = [
  {
    title: "A two-person team",
    body: "Two people carefully detail the yard, thorough and consistent rather than rushing through.",
  },
  {
    title: "Sticky spots, sanitized",
    body: "We clean and sanitize sticky spots so waste is not tracked into the house.",
  },
  {
    title: "Waste hauled away, equipment sanitized",
    body: "The waste leaves with us, and our equipment is sanitized between yards.",
  },
  {
    title: "We stay in touch",
    body: "You hear from us before each visit and again when we leave.",
  },
  {
    title: "Gate photo and departure update",
    body: "Before we leave, you get an update with photos, including confirmation that your gate is securely latched.",
  },
  {
    title: "Eyes on the yard and the dogs",
    body: "We pay attention to unusual stool and to changes around the yard.",
  },
];

export async function HomePage() {
  const googleReviews = await getGoogleReviews();

  return (
    <main id="top">
        <section className="hero" data-screen-label="Hero">
          <div className="hero-grid">
            <div className="hero-copy">
              <div className="eyebrow-row hero-kicker">
                <span className="hero-dot" aria-hidden="true" />
                Yard care · Kenosha, WI
              </div>
              <h1 className="titan">
                The little details <em className="em">matter.</em>
              </h1>
              <p>
                Family-run dog waste removal and yard sanitation. A two-person team details your
                yard, sanitizes as they go, hauls the waste away, and sends a photo confirming your
                gate is secured.
              </p>
              <div className="hero-actions">
              <a className="btn-outline" href="tel:2623512147">
                Call (262) 351-2147
              </a>
              {googleReviews?.rating != null && googleReviews.total != null ? (
                <a
                  className="hero-google"
                  href={googleReviews.mapsUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  <svg className="hero-google-mark" viewBox="0 0 48 48" aria-hidden="true">
                    <path
                      fill="#FFC107"
                      d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 12.955 4 4 12.955 4 24s8.955 20 20 20 20-8.955 20-20c0-1.341-.138-2.65-.389-3.917z"
                    />
                    <path
                      fill="#FF3D00"
                      d="M6.306 14.691l6.571 4.819C14.655 15.108 18.961 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 16.318 4 9.656 8.337 6.306 14.691z"
                    />
                    <path
                      fill="#4CAF50"
                      d="M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238A11.91 11.91 0 0 1 24 36c-5.202 0-9.619-3.317-11.283-7.946l-6.522 5.025C9.505 39.556 16.227 44 24 44z"
                    />
                    <path
                      fill="#1976D2"
                      d="M43.611 20.083H42V20H24v8h11.303a12.04 12.04 0 0 1-4.087 5.571l.003-.002 6.19 5.238C36.971 39.205 44 34 44 24c0-1.341-.138-2.65-.389-3.917z"
                    />
                  </svg>
                  <span className="hero-google-copy">
                    <span className="hero-google-name">{googleReviews.name}</span>
                    <span className="hero-google-score">
                      <strong>{googleReviews.rating.toFixed(1)}</strong>
                      <span className="hero-google-star" aria-hidden="true">
                        ★
                      </span>
                      <span className="hero-google-count">
                        ({googleReviews.total.toLocaleString()} {googleReviews.total === 1 ? "review" : "reviews"})
                      </span>
                    </span>
                  </span>
                </a>
              ) : null}
              </div>
            </div>
            <div className="hero-media">
              <HeroSlider />
            </div>
          </div>
        </section>

        <ServiceOfferings />

        <section className="how" id="how" data-screen-label="How it works">
          <div className="wrap">
            <div className="how-head">
              <span className="eyebrow">How it works</span>
              <h2 className="titan">
                Clean Yard. <em className="em">Zero Hassle.</em>
              </h2>
              <p>Three steps from request to a clean, secured yard.</p>
            </div>
            <ol className="how-grid">
              {howSteps.map((step) => (
                <li key={step.n} className={step.n === "3" ? "how-step is-last" : "how-step"}>
                  <div className="how-mark">
                    <span className="how-bubble">{step.icon}</span>
                    <span className="how-num">{step.n}</span>
                  </div>
                  <span className="how-kicker">Step {step.n}</span>
                  <h3 className="titan">{step.title}</h3>
                  <p>
                    <strong>{step.kicker}</strong> {step.body}
                  </p>
                </li>
              ))}
            </ol>
            <div className="how-foot">
              <p>Ready for step one?</p>
              <a className="how-cta" href={REQUEST_URL}>
                Start a service request
              </a>
            </div>
          </div>
        </section>

        <section className="every-visit" data-screen-label="Every visit">
          <div className="wrap">
            <div className="every-visit-top">
              <div className="every-visit-copy">
                <span className="eyebrow">Every Visit</span>
                <h2 className="titan">
                  We <em className="em">detail</em>
                  <br />
                  your yard.
                </h2>
                <p className="lede">
                  A two-person team details your yard on every visit. They sanitize sticky spots as
                  they go so waste is not tracked into the house, haul the waste away, and sanitize
                  their equipment between yards. You hear from us before we arrive and again when we
                  leave, with a photo confirming the gate is securely latched. We also pay attention
                  to unusual stool and to changes around the yard.
                </p>
                <a className="section-btn" href={REQUEST_URL}>
                  Request service for your yard
                </a>
              </div>
              <div className="every-visit-photo">
                <img src="/images/mowing.webp" alt="A pass across the lawn" />
              </div>
            </div>
            <ul className="visit-grid">
              {steps.map((step) => (
                <li key={step.title} className="visit-card">
                  <h3>{step.title}</h3>
                  <p>{step.body}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section id="why" className="why" data-screen-label="Our Why">
          <div className="wrap why-grid band-pad">
            <div className="why-photo">
              <img
                src="/images/family.webp"
                alt="Olive and Louie with the Pooptopia family"
              />
            </div>
            <div className="why-copy">
              <span className="eyebrow">Our Why</span>
              <h2 className="titan">
                For Tico. <em className="em-soft">With Olive and Louie.</em>
              </h2>
              <p className="why-lead">
                After we unexpectedly lost our dog, Tico, we became much more conscious about the
                care, safety, and health of our dogs. When we later brought Olive and Louie into our
                family, those experiences, including dealing with parasites, showed us how important
                a clean yard and proper waste removal can be. In 2023 we saw the need for a
                dependable service in our area, and Pooptopia became a way to help other dog families
                while carrying forward what we learned from Tico.
              </p>
              <p className="why-lead">
                We treat every yard with the same care we would want for Olive and Louie. That means
                protecting the dogs, being thorough and consistent, paying attention to unusual stool
                or changes around the yard, and showing up when we say we will.
              </p>
              <a className="section-btn why-more" href="/about/our-why">
                Read more about our family
              </a>
            </div>
          </div>
        </section>

        <ServiceArea showFullLink />

        <section id="gallery" className="gallery" data-screen-label="Gallery">
          <div className="wrap gallery-inner">
            <div className="gallery-head">
              <span className="eyebrow">Gallery</span>
              <h2 className="titan section-title">
                Real yards.
                <br />
                <em className="em">Real team.</em>
              </h2>
              <p className="gallery-intro">
                Before and after photos from real visits, the dogs we work for, and the cleaning and
                sanitizing that happens on every route.
              </p>
            </div>
            <Gallery />
          </div>
        </section>

        <section id="videos" className="videos" data-screen-label="Videos & Blog">
          <div className="wrap split band-pad">
            <div className="video-frame">
              <iframe
                src="https://player.vimeo.com/video/1081152204?badge=0&byline=0&h=25f1c776d6&portrait=0&title=0"
                title="What is Pooptopia?"
                allow="fullscreen; picture-in-picture"
              />
            </div>
            <div className="videos-copy">
              <span className="eyebrow">Pooptopia Videos</span>
              <h2 className="titan">
                What is <em className="em">Pooptopia?</em>
              </h2>
              <p>
                See how a visit works, from arrival to gate photo. For more on yard health,
                parasites and keeping your dogs safe, read the Woof to Waste blog.
              </p>
              <div className="btn-row">
                <a className="btn-solid" href="/about/videos">
                  All videos
                </a>
                <a className="btn-ghost" href="/about/blog">
                  Woof to Waste Blog
                </a>
              </div>
            </div>
          </div>
        </section>

        <section id="blog" className="blog-band" data-screen-label="Blog">
          <div className="wrap blog-inner band-pad">
            <div className="blog-head">
              <div className="stack">
                <span className="eyebrow">Woof to Waste</span>
                <h2 className="titan section-title">
                  The Doggy <em className="em">Digest.</em>
                </h2>
              </div>
            </div>
            <BlogCards posts={blogPosts.slice(0, 3)} />
            <a className="section-btn blog-all" href="/about/blog">
              Read all blogs
            </a>
          </div>
        </section>

        {googleReviews && googleReviews.reviews.length > 0 ? (
          <GoogleReviews feed={googleReviews} />
        ) : null}

        <section id="faq" className="faq" data-screen-label="FAQ">
          <div className="wrap band-pad">
            <div className="faq-page-intro">
              <span className="eyebrow">FAQ</span>
              <h2 className="titan">
                Frequently Asked <em className="em">Questions</em>
              </h2>
              <p>Clear answers about a visit, from arrival to the gate photo.</p>
            </div>
            <FaqList />
            <a className="section-btn faq-more" href="/faq">
              See all frequently asked questions
            </a>
          </div>
        </section>

        <section className="newsletter" data-screen-label="Newsletter">
          <div className="wrap">
            <div className="newsletter-card">
              <div className="newsletter-copy">
                <span className="newsletter-badge">
                  <IconMail size={16} />
                  Newsletter
                </span>
                <h2 className="titan">
                  Yard notes
                  <br />
                  from
                  <br />
                  <em className="em">Pooptopia.</em>
                </h2>
                <p>
                  Sign up for updates from the family behind the visits, including notes from the
                  Woof to Waste blog.
                </p>
                <ul className="newsletter-points">
                  <li>
                    <span aria-hidden="true">✓</span> New Woof to Waste posts
                  </li>
                  <li>
                    <span aria-hidden="true">✓</span> Seasonal yard and dog care tips
                  </li>
                  <li>
                    <span aria-hidden="true">✓</span> Updates from Olive and Louie
                  </li>
                </ul>
                <NewsletterForm />
              </div>
              <div className="newsletter-photo">
                <img src="/images/gallery/dogs-with-supplies.webp" alt="Dogs beside sanitation supplies" />
                <a className="newsletter-latest" href={blogPosts[0].href}>
                  <img src={blogPosts[0].image} alt="" />
                  <span>
                    <span className="newsletter-kicker">Latest from the blog</span>
                    <strong>{blogPosts[0].title}</strong>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </section>
    </main>
  );
}
