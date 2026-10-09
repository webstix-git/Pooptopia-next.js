"use client";

import { useEffect, useRef, useState, type PointerEvent } from "react";

const slides = [
  {
    src: "/images/hero-before-after.webp",
    alt: "Before and after a yard visit: waste marked across the lawn, then a clean yard",
  },
  {
    src: "/images/hero-yard-trees.jpg",
    alt: "Before and after a backyard visit: waste marked near the fence and trees, then a clear lawn",
  },
  {
    src: "/images/hero-yard-open.jpg",
    alt: "Before and after a large lawn visit: waste marked across the grass, then a clear yard",
  },
  {
    src: "/images/hero-yard-planter.webp",
    alt: "Before and after a lawn beside a planter: waste marked on the grass, then the lawn cleared",
  },
];

const DRAG_THRESHOLD = 48;

export function HeroSlider() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [dragX, setDragX] = useState(0);
  const [dragging, setDragging] = useState(false);
  const frameRef = useRef<HTMLDivElement>(null);
  const indexRef = useRef(index);
  const dragStart = useRef<number | null>(null);
  const wheelAt = useRef(0);

  indexRef.current = index;

  const go = (next: number) => {
    setIndex(((next % slides.length) + slides.length) % slides.length);
  };

  useEffect(() => {
    if (paused) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = window.setInterval(() => {
      setIndex((current) => (current + 1) % slides.length);
    }, 5000);
    return () => window.clearInterval(id);
  }, [paused]);

  useEffect(() => {
    const frame = frameRef.current;
    if (!frame) return;

    const onWheel = (event: WheelEvent) => {
      if (Math.abs(event.deltaX) < 12 || Math.abs(event.deltaX) <= Math.abs(event.deltaY)) return;
      event.preventDefault();
      const now = Date.now();
      if (now - wheelAt.current < 450) return;
      wheelAt.current = now;
      const current = indexRef.current;
      const next = event.deltaX > 0 ? current + 1 : current - 1;
      setIndex(((next % slides.length) + slides.length) % slides.length);
    };

    frame.addEventListener("wheel", onWheel, { passive: false });
    return () => frame.removeEventListener("wheel", onWheel);
  }, []);

  const onPointerDown = (event: PointerEvent<HTMLDivElement>) => {
    if (event.button !== 0) return;
    dragStart.current = event.clientX;
    setDragging(true);
    setDragX(0);
    try {
      event.currentTarget.setPointerCapture(event.pointerId);
    } catch {
      // Pointer capture is only available for a real pointer.
    }
    setPaused(true);
  };

  const onPointerMove = (event: PointerEvent<HTMLDivElement>) => {
    if (dragStart.current === null) return;
    setDragX(event.clientX - dragStart.current);
  };

  const finishDrag = (clientX: number) => {
    if (dragStart.current === null) return;
    const delta = clientX - dragStart.current;
    dragStart.current = null;
    setDragging(false);
    setDragX(0);
    if (delta <= -DRAG_THRESHOLD) go(indexRef.current + 1);
    else if (delta >= DRAG_THRESHOLD) go(indexRef.current - 1);
  };

  return (
    <div
      className="hero-slider"
      role="region"
      aria-roledescription="carousel"
      aria-label="Before and after yards"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      <div
        ref={frameRef}
        className="hero-slider-frame"
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={(event) => finishDrag(event.clientX)}
        onPointerCancel={() => {
          dragStart.current = null;
          setDragging(false);
          setDragX(0);
        }}
      >
        <div
          className={dragging ? "hero-slider-track is-dragging" : "hero-slider-track"}
          style={{ transform: `translateX(calc(${-index * 100}% + ${dragX}px))` }}
        >
          {slides.map((slide, slideIndex) => (
            <img
              key={slide.src}
              src={slide.src}
              alt={slide.alt}
              draggable={false}
              aria-hidden={slideIndex !== index}
            />
          ))}
        </div>
      </div>
      <div className="hero-slider-dots">
        {slides.map((slide, slideIndex) => (
          <button
            key={slide.src}
            type="button"
            className={slideIndex === index ? "is-active" : undefined}
            aria-label={`Show photo ${slideIndex + 1} of ${slides.length}`}
            aria-current={slideIndex === index ? "true" : undefined}
            onClick={() => go(slideIndex)}
          />
        ))}
      </div>
    </div>
  );
}
