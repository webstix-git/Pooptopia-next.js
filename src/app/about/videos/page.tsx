import type { Metadata } from "next";
import { PageBanner } from "@/components/PageBanner";

export const metadata: Metadata = {
  title: "Pooptopia Videos - Pooptopia",
};

const videos = [
  {
    title: "Inside Pooptopia",
    text: "We had a chance to sit down the other day and create this video about why we decided to start a dog poop pickup service.",
    src: "https://player.vimeo.com/video/1081152204?badge=0&byline=0&h=25f1c776d6&portrait=0&title=0&autoplay=0&loop=0&muted=0&controls=1",
  },
  {
    title: "Pet Friendly",
    text: "At Pooptopia we love visits from your fury friends. But not all dogs like to visit while we pick up poop. Either way, we love your dogs all the same.",
    src: "https://player.vimeo.com/video/978234171?h=69325d8d33&autoplay=0&title=0&portrait=0&byline=0&badge=0&loop=0&muted=0&controls=1",
    href: "https://www.youtube.com/channel/UCKUr_VUp0KxB2nfruCkP42Q",
    linkLabel: "Check us out on Youtube",
  },
];

export default function Page() {
  return (
    <main className="contact-page">
      <PageBanner
        title="Pooptopia Videos"
        lede="See how a visit works, from arrival to the gate photo."
        image="/images/sanitizing.webp"
      />
      <section className="videos-page" data-screen-label="Pooptopia videos">
        <div className="wrap videos-list">
          {videos.map((video) => (
            <article className="videos-item" key={video.src}>
              <h2 className="titan">{video.title}</h2>
              <p>{video.text}</p>
              <div className="video-frame">
                <iframe
                  src={video.src}
                  title={video.title}
                  allow="fullscreen; picture-in-picture"
                  allowFullScreen
                />
              </div>
              {video.href ? (
                <a className="section-btn" href={video.href} target="_blank" rel="noreferrer">
                  {video.linkLabel}
                </a>
              ) : null}
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
