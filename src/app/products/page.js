import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageBanner from "@/components/PageBanner";
import { ArrowRight, Leaf, Drop, Sparkle, Flask, Shield, Sun, SunShield, Face, Bubbles } from "@/components/Icons";
import { collections, products, subSections, collectionCards } from "@/lib/data";

export const metadata = {
  title: "Our Products | Dermaplex Professional",
  description: "Explore Dermaplex Professional hair care, skin care and personal care collections.",
};

const wide = "mx-auto w-full max-w-[1760px] px-4 sm:px-8 lg:px-12";

// Icon per sub-category name; anything unlisted falls back to a leaf.
const subIcons = {
  "Hair Shampoo": Leaf,
  "Hair Mask": Drop,
  "Hair Spa": Sparkle,
  "Hair Serum": Flask,
  "Hair Treatments": Shield,
  "Face Wash": Drop,
  Sunscreen: Sun,
  "Face Pack": Face,
  "D-Tan Pack": SunShield,
  "Facial Kits": Sparkle,
  Moisturizer: Bubbles,
  "Sheet Masks": Face,
  "Gel Wax": Drop,
  "Liposoluble Wax": Flask,
  "Brazilian Wax": Leaf,
  "Korean Gel Wax": Sparkle,
};

function CollectionCard({ c }) {
  const card = collectionCards[c.key];
  const count = products.filter((p) => p.cat === c.key).length;
  // List up to 5 sub-categories that have products (more would run behind the photo),
  // but count every category in the range.
  const subs = subSections(c.key).filter((s) => s.products.length).slice(0, 5);
  return (
    <article
      className="group relative flex flex-col overflow-hidden rounded-[2rem] shadow-[0_20px_50px_-30px_rgba(80,60,30,0.5)] lg:min-h-[44rem]"
      style={{ backgroundColor: card.bg }}
    >
      {/* Photo is wider than the card and anchored bottom-right, so its product lands in the
          card's right half; the top edge fades into the card colour. */}
      <div className="relative order-last -mt-4 ml-[-20%] aspect-[3/2] w-[120%] transition-transform lg:absolute lg:-right-[18%] lg:bottom-0 lg:order-0 lg:mt-0 lg:ml-0 lg:w-[140%] duration-700 group-hover:scale-[1.02]">
        <Image src={card.photo} alt={`${c.title} collection`} fill sizes="(min-width:1024px) 45vw, 140vw" className="object-cover" />
        <div
          className="absolute inset-x-0 top-0 h-[35%]"
          style={{ background: `linear-gradient(to bottom, ${card.bg}, ${card.bg}00)` }}
        />
      </div>

      <div className="relative flex flex-1 flex-col p-7 pb-0 sm:p-9 sm:pb-0 lg:pb-9">
        <p className="text-xs uppercase tracking-[0.3em] text-ink/70">Our collection</p>
        <h2 className="mt-3 font-serif text-[2.6rem] leading-none sm:text-5xl" style={{ color: card.accent }}>
          {c.title}
        </h2>
        <p className="mt-3 max-w-xs leading-relaxed text-ink/75 lg:mt-4">{card.text}</p>
        <p className="mt-4 w-fit rounded-full bg-white/80 lg:mt-5 px-4 py-1.5 text-sm text-ink/85">
          {count} Products <span className="mx-1 text-ink/40">·</span> {c.subs.length} Categories
        </p>

        <ul className="relative z-10 mt-5 space-y-1.5 lg:mt-6 lg:space-y-3">
          {subs.map((s) => {
            const Icon = subIcons[s.name] || Leaf;
            return (
              <li key={s.slug}>
                <Link
                  href={`/products/${c.key}#${s.slug}`}
                  className="group/s flex w-fit items-center gap-3 text-sm text-ink/85 transition-colors hover:text-ink"
                >
                  <span
                    className="grid size-9 shrink-0 place-items-center lg:size-11 rounded-full bg-white/55 transition-colors group-hover/s:bg-white"
                    style={{ color: card.accent }}
                  >
                    <Icon className="size-5" />
                  </span>
                  {s.name}
                </Link>
              </li>
            );
          })}
        </ul>

        <Link
          href={`/products/${c.key}`}
          className="relative z-10 mt-6 inline-flex w-fit lg:mt-auto lg:translate-y-0 items-center gap-2 rounded-full px-7 py-3.5 text-sm font-medium text-white shadow-lg transition-opacity hover:opacity-90"
          style={{ backgroundColor: card.accent }}
        >
          Explore {c.title} <ArrowRight />
        </Link>
      </div>
    </article>
  );
}

export default function ProductsPage() {
  return (
    <>
      <Header />
      <main>
        <PageBanner
          crumbs={[["Home", "/"], ["Our Products"]]}
          eyebrow="Our products"
          title="Care for Every"
          script="Need"
          text={`${products.length}+ professional products across hair care, skin care and personal care — pick a collection to explore.`}
          cover="/product-banner.webp"
          coverMobile="/mobile-product-banner.webp"
          coverWide
          bg="#fdf6f0"
          mobileBg="#f6dfcc"
        >
          <div className="mt-6 flex flex-wrap gap-3 lg:mt-7">
            <Link
              href="#collections"
              className="inline-flex items-center gap-2 rounded-full bg-forest px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-forest-deep sm:px-6 sm:py-3"
            >
              Explore Products <ArrowRight />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full border border-forest/40 bg-white/40 px-5 py-2.5 text-sm sm:px-6 sm:py-3 font-medium text-forest transition-colors hover:border-brand hover:text-brand"
            >
              Contact Us <ArrowRight />
            </Link>
          </div>
        </PageBanner>

        <section id="collections" className="scroll-mt-20 py-16 lg:py-20">
          <div className={`${wide} grid gap-6 lg:grid-cols-3`}>
            {collections.map((c) => (
              <CollectionCard key={c.key} c={c} />
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
