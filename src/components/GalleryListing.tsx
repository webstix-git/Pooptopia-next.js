"use client";

import { useEffect, useState } from "react";
import { gallery, type GalleryCategory } from "@/lib/site";

const filters: { id: GalleryCategory; label: string }[] = [
  { id: "before-after", label: "Before & after" },
  { id: "dogs", label: "Dogs & family" },
  { id: "cleaning", label: "Cleaning & sanitizing" },
];

export function GalleryListing() {
  const [filter, setFilter] = useState<GalleryCategory>("before-after");
  const [index, setIndex] = useState(0);
  const [open, setOpen] = useState(false);

  const items = gallery.filter((item) => item.category === filter);
  const current = items[index] ?? items[0];

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
      if (event.key === "ArrowLeft") setIndex((value) => (value - 1 + items.length) % items.length);
      if (event.key === "ArrowRight") setIndex((value) => (value + 1) % items.length);
    };
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [open, items.length]);

  function choose(next: GalleryCategory) {
    setFilter(next);
    setIndex(0);
    setOpen(false);
  }

  function step(delta: number) {
    setIndex((value) => (value + delta + items.length) % items.length);
  }

  if (!current) return null;

  return (
    <>
      <div className="gallery-filters">
        {filters.map((item) => {
          const selected = item.id === filter;
          return (
            <button
              key={item.id}
              type="button"
              className={selected ? "gallery-chip is-active" : "gallery-chip"}
              aria-pressed={selected}
              onClick={() => choose(item.id)}
            >
              {item.label}
            </button>
          );
        })}
      </div>
      <ul className="gallery-grid">
        {items.map((item, itemIndex) => (
          <li key={item.src}>
            <button type="button" aria-label={item.title} onClick={() => { setIndex(itemIndex); setOpen(true); }}>
              <img src={item.src} alt="" />
            </button>
          </li>
        ))}
      </ul>
      {open ? (
        <div
          className="lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={current.title}
          onClick={() => setOpen(false)}
        >
          <img className="lightbox-blur" src={current.src} alt="" aria-hidden="true" />
          <div className="lightbox-card" onClick={(event) => event.stopPropagation()}>
            <button type="button" className="lightbox-close" aria-label="Close" onClick={() => setOpen(false)}>
              ×
            </button>
            <button type="button" className="gallery-arrow is-prev" aria-label="Previous photo" onClick={() => step(-1)}>
              ‹
            </button>
            <button type="button" className="gallery-arrow is-next" aria-label="Next photo" onClick={() => step(1)}>
              ›
            </button>
            <img className="lightbox-photo" src={current.src} alt="" />
          </div>
        </div>
      ) : null}
    </>
  );
}
