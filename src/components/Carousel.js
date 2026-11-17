"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowLeft, ArrowRight } from "./Icons";

export default function Carousel({ children, label, dots = true }) {
  const track = useRef(null);
  const [pages, setPages] = useState(1);
  const [page, setPage] = useState(0);

  useEffect(() => {
    const el = track.current;
    const update = () => {
      // clientWidth is 0 before layout (or while hidden); dividing by it gives Infinity, which
      // would crash Array.from below. Treat that case as a single page.
      if (!el.clientWidth) return setPages(1);
      const n = Math.min(30, Math.max(1, Math.ceil(el.scrollWidth / el.clientWidth - 0.05)));
      const max = el.scrollWidth - el.clientWidth;
      setPages(n);
      setPage(max > 0 ? Math.round((el.scrollLeft / max) * (n - 1)) : 0);
    };
    update();
    el.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      el.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  const scrollByPage = (dir) =>
    track.current.scrollBy({ left: dir * track.current.clientWidth * 0.9, behavior: "smooth" });

  const goTo = (i) => {
    const el = track.current;
    el.scrollTo({ left: (i / Math.max(1, pages - 1)) * (el.scrollWidth - el.clientWidth), behavior: "smooth" });
  };

  const arrow =
    "absolute top-1/2 z-10 hidden -translate-y-1/2 rounded-full border border-forest/20 bg-white p-2.5 text-forest shadow-sm transition hover:border-brand hover:text-brand disabled:opacity-30 md:block";

  return (
    <div className="relative" role="region" aria-label={label}>
      <button type="button" aria-label="Previous" onClick={() => scrollByPage(-1)} disabled={page === 0} className={`${arrow} -left-5`}>
        <ArrowLeft />
      </button>
      <div
        ref={track}
        className="no-scrollbar -mb-8 flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth pb-10 pt-2 sm:gap-5"
      >
        {children}
      </div>
      <button type="button" aria-label="Next" onClick={() => scrollByPage(1)} disabled={page >= pages - 1} className={`${arrow} -right-5`}>
        <ArrowRight />
      </button>

      {dots && pages > 1 && (
        <div className="mt-6 flex justify-center gap-2">
          {Array.from({ length: pages }, (_, i) => (
            <button
              key={i}
              type="button"
              aria-label={`Go to slide ${i + 1}`}
              onClick={() => goTo(i)}
              className={`h-1.5 rounded-full transition-all ${i === page ? "w-6 bg-forest" : "w-1.5 bg-forest/25"}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
