"use client";

import { useEffect, useLayoutEffect, useRef, useState, type TransitionEvent } from "react";
import type { GoogleReviewFeed } from "@/lib/google-reviews";
import { ReviewCard } from "@/components/ReviewCard";

function columnsFor(width: number) {
  return width <= 900 ? 1 : 3;
}

export function GoogleReviews({ feed }: { feed: GoogleReviewFeed }) {
  const viewportRef = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(0);
  const [perView, setPerView] = useState(3);
  const [paused, setPaused] = useState(false);
  const [cycle, setCycle] = useState(0);
  const [motion, setMotion] = useState(true);
  const count = feed.reviews.length;
  const canSlide = count > perView;
  const loop = count > perView;
  const slides = loop ? [...feed.reviews, ...feed.reviews.slice(0, perView)] : feed.reviews;

  useLayoutEffect(() => {
    const node = viewportRef.current;
    if (!node) return;
    const apply = () => {
      const next = columnsFor(node.clientWidth);
      setPerView((current) => (current === next ? current : next));
    };
    apply();
    const observer = new ResizeObserver(apply);
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    setMotion(false);
    setIndex(0);
    const id = window.requestAnimationFrame(() => setMotion(true));
    return () => window.cancelAnimationFrame(id);
  }, [perView]);

  useEffect(() => {
    if (paused || !canSlide) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = window.setInterval(() => {
      setMotion(true);
      setIndex((current) => (loop ? current + perView : (current + perView) % count));
    }, 6000);
    return () => window.clearInterval(id);
  }, [paused, canSlide, count, cycle, loop, perView]);

  useEffect(() => {
    if (!loop || index < count || !motion) return;
    const id = window.setTimeout(() => {
      setMotion(false);
      setIndex((current) => (current >= count ? current % count : current));
    }, 700);
    return () => window.clearTimeout(id);
  }, [index, motion, loop, count]);

  function settle(event: TransitionEvent<HTMLUListElement>) {
    if (event.propertyName !== "transform" || !loop || index < count) return;
    setMotion(false);
    setIndex(index % count);
  }

  function step(delta: number) {
    setCycle((current) => current + 1);
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const amount = delta * perView;
    if (!loop || reduce) {
      setMotion(!reduce);
      setIndex((current) => (current + amount + count) % count);
      return;
    }
    if (delta < 0 && index % count === 0) {
      setMotion(false);
      setIndex(count);
      window.requestAnimationFrame(() => {
        window.requestAnimationFrame(() => {
          setMotion(true);
          setIndex(count - perView);
        });
      });
      return;
    }
    setMotion(true);
    setIndex((current) => current + amount);
  }

  return (
    <section
      className="google-reviews"
      data-screen-label="Google reviews"
      aria-roledescription="carousel"
      aria-label="Google reviews"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget as Node | null)) setPaused(false);
      }}
    >
      <div className="wrap">
        <div className="google-reviews-head">
          <span className="eyebrow">Google reviews</span>
          <h2 className="titan">
            Neighbors on <em className="em">Google.</em>
          </h2>
        </div>

        <div className="google-reviews-row">
          {canSlide ? (
            <button type="button" className="google-reviews-arrow" aria-label="Previous reviews" onClick={() => step(-1)}>
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M14.5 6.5 9 12l5.5 5.5" />
              </svg>
            </button>
          ) : null}
          <div className="google-reviews-viewport" ref={viewportRef}>
            <ul
              className={motion ? "google-reviews-track" : "google-reviews-track is-instant"}
              style={{
                width: `${(slides.length / perView) * 100}%`,
                transform: `translate3d(-${(index * 100) / slides.length}%, 0, 0)`,
              }}
              onTransitionEnd={settle}
            >
              {slides.map((review, position) => (
                <li key={`${review.id}-${position}`} aria-hidden={position >= count ? true : undefined}>
                  <ReviewCard review={review} compact />
                </li>
              ))}
            </ul>
          </div>
          {canSlide ? (
            <button type="button" className="google-reviews-arrow" aria-label="Next reviews" onClick={() => step(1)}>
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M9.5 6.5 15 12l-5.5 5.5" />
              </svg>
            </button>
          ) : null}
        </div>

        <a className="section-btn google-reviews-more" href="/reviews">
          Read all Google reviews
        </a>
      </div>
    </section>
  );
}
