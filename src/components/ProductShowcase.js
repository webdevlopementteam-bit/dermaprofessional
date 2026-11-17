"use client";

import { useState } from "react";
import Image from "next/image";
import Carousel from "./Carousel";

const tabs = [
  { key: "all", label: "All Products" },
  { key: "hair", label: "Hair Care" },
  { key: "skin", label: "Skin Care" },
  { key: "personal", label: "Personal Care" },
];

export default function ProductShowcase({ products }) {
  const [tab, setTab] = useState("all");
  const list = tab === "all" ? products : products.filter((p) => p.cat === tab);

  return (
    <>
      <div className="no-scrollbar -mx-4 mt-8 flex gap-2 overflow-x-auto px-4" role="tablist" aria-label="Product categories">
        {tabs.map((t) => {
          const count = t.key === "all" ? products.length : products.filter((p) => p.cat === t.key).length;
          return (
            <button
              key={t.key}
              type="button"
              role="tab"
              aria-selected={tab === t.key}
              onClick={() => setTab(t.key)}
              className={`shrink-0 rounded-full border px-4 py-2 text-sm transition-colors ${
                tab === t.key
                  ? "border-forest bg-forest text-white"
                  : "border-forest/20 text-ink/75 hover:border-forest hover:text-forest"
              }`}
            >
              {t.label} <span className="opacity-60">({count})</span>
            </button>
          );
        })}
      </div>

      <div className="mt-8">
        {/* Remount per tab so the carousel's page count and scroll position reset. */}
        <Carousel key={tab} label="Products" dots={false}>
          {list.map((p) => (
            <article
              key={p.name}
              className="group w-[46%] shrink-0 snap-start sm:w-[31%] lg:w-[calc((100%-5*1.25rem)/6)]"
            >
              <div className="relative aspect-square overflow-hidden rounded-2xl bg-[#f4efe6]">
                <Image
                  src={p.src}
                  alt={p.name}
                  fill
                  sizes="(min-width:1024px) 16vw, (min-width:640px) 31vw, 46vw"
                  className="object-contain p-4 mix-blend-multiply transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <p className="mt-3 text-[11px] uppercase tracking-[0.18em] text-rose">{p.tag}</p>
              <h3 className="mt-1 text-sm font-medium text-forest">{p.name}</h3>
            </article>
          ))}
        </Carousel>
      </div>
    </>
  );
}
