import Link from "next/link";
import { PageBanner } from "@/components/PageBanner";
import { REQUEST_URL } from "@/lib/site";

export function OurWhyPage() {
  return (
    <main className="contact-page">
      <PageBanner
        title="Our Why"
        lede="For Tico. With Olive and Louie."
        image="/images/about-family.jpg"
        position="50% 35%"
      />

      <section className="about-band" data-screen-label="Welcome">
        <div className="wrap about-grid">
          <div className="about-copy">
            <span className="eyebrow">Welcome to Pooptopia</span>
            <h2 className="titan">
              A family business in <em className="em">Kenosha.</em>
            </h2>
            <p>
              Pooptopia began in January of 2023 as a simple idea between Kim and David: if dogs
              give us unconditional love, the least we can do is give them a clean, safe yard to
              enjoy.
            </p>
            <p>
              What started as a family solution quickly became a family business. Alongside us is
              Logan, who has grown up watching what it means to show up, do the job right, and take
              pride in the little details. Olive and Louie are our four-legged quality control team
              and a daily reminder of why this work matters.
            </p>
            <p>
              We are locally owned and family-run. We treat every yard with the same care we would
              want for Olive and Louie.
            </p>
          </div>
          <div className="about-photo">
            <img src="/images/about-family.jpg" alt="Kim, David, and Logan with Olive and Louie" />
          </div>
        </div>
      </section>

      <section className="about-band is-soft" data-screen-label="Our Why">
        <div className="wrap about-grid is-flip">
          <div className="about-copy">
            <span className="eyebrow">Our Why</span>
            <h2 className="titan">
              For Tico. <em className="em">With Olive and Louie.</em>
            </h2>
            <p>
              We lost our first dog, Tico, unexpectedly in August 2021. He was only 4 ½ years old.
              Tico had epilepsy and grand mal seizures about every 30 days. While he was staying at
              a local dog daycare, he had a seizure. Improper care afterward left irreversible
              damage, and we had to say goodbye.
            </p>
            <p>
              After that, we looked for a way to honor Tico and help other dog owners. We became
              particular about caring for Olive and Louie: what they ate, who trained them, who else
              took care of them, and cleaning up after them in the backyard.
            </p>
            <p>
              In the fall of 2023 we saw the need for a dog waste pickup service in our area. Some
              families do not have the time or ability to keep up with the yard. Pooptopia is how we
              help, while carrying forward what we learned from Tico.
            </p>
          </div>
          <div className="about-photo">
            <img src="/images/blog/olive-and-louie.jpg" alt="Olive and Louie" />
          </div>
        </div>
      </section>

      <section className="about-band" data-screen-label="Louie and Olive">
        <div className="wrap about-grid">
          <div className="about-copy">
            <span className="eyebrow">Louie &amp; Olive</span>
            <h2 className="titan">
              A clean yard <em className="em">matters.</em>
            </h2>
            <p>
              When we first brought Olive home, she was suffering from parasites, as many puppies
              do. That experience showed us how much a clean yard and proper waste removal can
              matter while a puppy gets well.
            </p>
            <p>
              A two-person team details the yard on every visit. We sanitize sticky spots so waste
              is not tracked into the house, haul the waste away, and sanitize our equipment
              between yards. We contact you before we arrive and again when we leave, with a photo
              confirming the gate is securely latched.
            </p>
            <Link className="section-btn" href={REQUEST_URL}>
              Request Service
            </Link>
          </div>
          <div className="about-photo">
            <img src="/images/gallery/dogs-in-yard.webp" alt="Dogs in a clean yard" />
          </div>
        </div>
      </section>
    </main>
  );
}
