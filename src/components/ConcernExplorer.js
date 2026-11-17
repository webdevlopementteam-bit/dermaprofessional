"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Drop, Sun, Jar, Sparkle, Face, Leaf, Shield } from "./Icons";

const icons = { drop: Drop, sun: Sun, jar: Jar, sparkle: Sparkle, face: Face };

function InfoColumn({ Icon, title, items }) {
  return (
    <div>
      <span className="grid size-14 place-items-center rounded-full bg-[#e3ecdc] text-forest">
        <Icon className="size-6" />
      </span>
      <h4 className="mt-4 font-serif text-xl text-forest">{title}</h4>
      <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm text-ink/75 marker:text-forest/50">
        {items.map((i) => (
          <li key={i}>{i}</li>
        ))}
      </ul>
    </div>
  );
}

export default function ConcernExplorer({ concerns }) {
  const [active, setActive] = useState(0);
  const strip = useRef(null);
  const c = concerns[active];

  const select = (i) => {
    const n = (i + concerns.length) % concerns.length;
    setActive(n);
    strip.current?.children[n]?.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
  };

  return (
    <>
      <div className="relative mt-8">
        <button
          type="button"
          aria-label="Previous concern"
          onClick={() => select(active - 1)}
          className="absolute -left-3 top-1/2 z-10 hidden -translate-y-1/2 rounded-full bg-white p-3 text-forest shadow-md transition-colors hover:text-brand md:block"
        >
          <ArrowLeft />
        </button>
        <div ref={strip} role="tablist" className="no-scrollbar flex snap-x gap-3 overflow-x-auto px-1 pb-2 md:grid md:grid-cols-5 md:px-8">
          {concerns.map((x, i) => {
            const Icon = icons[x.icon] || Leaf;
            const on = i === active;
            return (
              <button
                key={x.name}
                type="button"
                role="tab"
                aria-selected={on}
                onClick={() => select(i)}
                className={`relative flex w-36 shrink-0 snap-center flex-col items-center gap-3 rounded-2xl border px-3 py-5 text-center transition-colors md:w-auto ${
                  on ? "border-forest bg-[#eef3e8]" : "border-forest/10 bg-white hover:border-forest/40"
                }`}
              >
                <span
                  className={`grid size-14 place-items-center rounded-full transition-colors ${
                    on ? "bg-forest text-white" : "bg-blush text-rose"
                  }`}
                >
                  <Icon className="size-6" />
                </span>
                <span className="font-serif text-forest">{x.name}</span>
                {on && <span className="absolute -bottom-px left-1/2 h-1 w-10 -translate-x-1/2 rounded-full bg-forest" />}
              </button>
            );
          })}
        </div>
        <button
          type="button"
          aria-label="Next concern"
          onClick={() => select(active + 1)}
          className="absolute -right-3 top-1/2 z-10 hidden -translate-y-1/2 rounded-full bg-white p-3 text-forest shadow-md transition-colors hover:text-brand md:block"
        >
          <ArrowRight />
        </button>
      </div>

      <div className="mt-6 rounded-[2rem] border border-forest/10 bg-[radial-gradient(ellipse_at_top_right,#eef3e8,#fbf8f1_60%)] p-6 sm:p-10">
        <h3 className="font-serif text-4xl text-forest sm:text-5xl">{c.name}</h3>
        <p className="mt-3 max-w-3xl leading-relaxed text-ink/75 sm:text-lg">{c.text}</p>

        <div className="mt-8 grid gap-8 sm:grid-cols-3 sm:divide-x sm:divide-forest/10 [&>*]:sm:pl-8 [&>*:first-child]:sm:pl-0">
          <InfoColumn Icon={Drop} title="Common Causes" items={c.causes} />
          <InfoColumn Icon={Leaf} title="How to Care" items={c.care} />
          <InfoColumn Icon={Shield} title="Recommended Ingredients" items={c.ingredients} />
        </div>

        <div className="mt-10 rounded-3xl bg-[#e9efe1] p-5 sm:p-7">
          <div className="flex flex-wrap items-end justify-between gap-3">
            <div>
              <h4 className="font-serif text-2xl text-forest">Recommended Products for {c.name}</h4>
              <p className="mt-1 text-sm text-muted">Products from our range that suit {c.name.toLowerCase()}-prone skin.</p>
            </div>
            <Link href="/products/skin" className="inline-flex items-center gap-2 font-medium text-forest hover:text-brand">
              View All <ArrowRight />
            </Link>
          </div>
          <ul className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
            {c.products.map((p) => (
              <li key={p.name} className="flex flex-col items-center rounded-2xl bg-white p-4 text-center">
                <div className="relative aspect-square w-full">
                  <Image src={p.src} alt={p.name} fill sizes="(min-width:1024px) 15vw, 40vw" className="object-contain mix-blend-multiply" />
                </div>
                <p className="mt-3 font-serif text-forest">{p.name}</p>
                <Link
                  href={`/products/${p.cat}`}
                  className="mt-1 inline-flex items-center gap-1 text-xs text-ink/70 transition-colors hover:text-brand"
                >
                  View Details <ArrowRight className="size-3.5" />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
