import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Carousel from "@/components/Carousel";
import ProductShowcase from "@/components/ProductShowcase";
import Footer from "@/components/Footer";
import VideoBanner from "@/components/VideoBanner";
import {
  ArrowRight,
  Leaf,
  Drop,
  Sparkle,
  Flask,
  Heart,
  Sun,
  Face,
  SunShield,
  CurvedArrow,
  Shield,
  Star,
  Plus,
  Minus,
  Swoosh,
} from "@/components/Icons";
import {
  productImg,
  categories,
  products,
  ritual,
  testimonials,
  faqs,
  collections,
  facialKits,
  subHref,
  brands,
} from "@/lib/data";

const container = "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8";
// Near edge-to-edge width, used by the larger image-led sections.
const wide = "mx-auto w-full max-w-[1760px] px-4 sm:px-8 lg:px-12";

// Organic pebble outlines for the testimonial cards.
const blobs = [
  "3.5rem 5rem 4rem 6rem / 4rem 3rem 5.5rem 4.5rem",
  "5rem 3.5rem 5.5rem 4rem / 3rem 4.5rem 4rem 5.5rem",
  "4rem 6rem 3.5rem 5rem / 5rem 3.5rem 5rem 4rem",
  "6rem 4rem 5rem 3.5rem / 3.5rem 5rem 4rem 5rem",
];

function PrimaryButton({ href, children, light = false }) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-colors ${light
          ? "border border-white/70 text-white hover:bg-white hover:text-forest"
          : "bg-forest text-white hover:bg-forest-deep"
        }`}
    >
      {children} <ArrowRight />
    </Link>
  );
}

function Badge({ children, className = "" }) {
  return (
    <div
      className={`flex size-32 items-center justify-center rounded-full border border-white/70 bg-white/45 text-center font-serif text-sm uppercase leading-snug tracking-[0.18em] text-forest shadow-[0_10px_40px_-10px_rgba(0,0,0,0.15)] backdrop-blur-md ${className}`}
    >
      {children}
    </div>
  );
}

/* ------------------------- Hero (image banner) --------------------------
   Replaced by the video banner below; kept commented out to switch back later.
   To restore: uncomment this function and <Hero /> in Home, and remove <VideoBanner />. */
// function Hero() {
//   return (
//     <section id="home" className="relative flex flex-col overflow-hidden lg:min-h-[640px] lg:justify-center">
//       {/* Mobile: portrait background with products at the bottom; text sits in the empty top. */}
//       <div className="absolute inset-0 bg-[#fcefdf] lg:hidden" />
//       <div className="absolute inset-x-0 bottom-0 aspect-[971/1620] lg:hidden">
//         <Image src="/mobile-hero.jpg" alt="Dermaplex and Derma Argan products" fill priority sizes="100vw" className="object-cover" />
//         <div className="absolute inset-x-0 top-0 h-1/3 bg-linear-to-b from-[#fcefdf] to-transparent" />
//       </div>
//       <div className="relative order-2 hidden lg:absolute lg:inset-y-0 lg:block lg:left-[26%] lg:right-0 lg:order-0 lg:h-auto">
//         <Image
//           src={encodeURI("/Pink Argan Spa Product Showcase.webp")}
//           alt="Dermaplex and Derma Argan products arranged with argan nuts and leaves"
//           fill
//           priority
//           sizes="(min-width:1024px) 78vw, 100vw"
//           className="object-cover object-[78%_center] lg:object-right"
//         />
//         <div className="absolute inset-0 hidden bg-linear-to-r from-cream via-cream/80 via-20% to-transparent to-45% lg:block" />
//         <div className="absolute inset-x-0 top-0 h-16 bg-linear-to-b from-cream to-transparent lg:hidden" />
//       </div>
//
//       <div className={`${wide} relative z-10 pb-[100vw] pt-10 text-center lg:py-20 lg:text-left`}>
//         <div className="mx-auto max-w-xl lg:mx-0">
//           <p className="eyebrow">Science meets nature</p>
//           <h1 className="mt-4 font-serif text-[2.75rem] leading-[1.05] text-forest sm:text-6xl lg:mt-5 lg:text-7xl">
//             Healthy Skin
//             <br />
//             Happier <span className="script">You</span>
//           </h1>
//           <p className="mx-auto mt-5 max-w-sm text-[0.95rem] leading-relaxed text-ink/75 sm:text-lg lg:mx-0 lg:mt-6 lg:text-muted">
//             Thoughtfully crafted skincare &amp; haircare solutions enriched with the goodness of
//             nature and backed by science.
//           </p>
//           <div className="mt-7 lg:mt-8">
//             <PrimaryButton href="/products">Explore Our Products</PrimaryButton>
//           </div>
//           <ul className="mt-7 grid grid-cols-3 divide-x divide-forest/15 text-xs text-ink/80 lg:mt-10 lg:flex lg:flex-wrap lg:gap-x-7 lg:gap-y-3 lg:divide-x-0 lg:text-sm">
//             {["Gentle Formulas", "Nature Inspired", "Everyday Care"].map((t) => (
//               <li key={t} className="flex flex-col items-center gap-1.5 px-1 lg:flex-row lg:gap-2 lg:px-0">
//                 <span className="grid size-9 place-items-center rounded-full bg-white/60 lg:size-auto lg:bg-transparent">
//                   <Leaf className="size-4 text-leaf" />
//                 </span>
//                 {t}
//               </li>
//             ))}
//           </ul>
//         </div>
//       </div>
//
//     </section>
//   );
// }

/* ------------------------------- Categories ------------------------------- */
function Categories() {
  return (
    <section id="products" className="py-20">
      <div className={wide}>
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="eyebrow">Explore our range</p>
            <h2 className="mt-3 font-serif text-4xl leading-tight text-forest sm:text-5xl">
              Skincare For
              <br />
              Every <span className="script">You</span>
            </h2>
          </div>
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center md:gap-10">
            <p className="max-w-sm text-sm leading-relaxed text-muted">
              From everyday essentials to targeted treatments, our range is designed to support
              your skin and hair goals.
            </p>
            <Link
              href="/products"
              className="inline-flex w-fit shrink-0 items-center gap-2 rounded-full border border-forest/40 px-5 py-2.5 text-sm font-medium text-forest transition-colors hover:border-brand hover:text-brand"
            >
              View All <ArrowRight />
            </Link>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-2 items-end gap-3 sm:gap-4 md:grid-cols-3 xl:grid-cols-6">
          {categories.map((c) => (
            <Link
              key={c.title}
              href={c.href}
              className={`group relative block overflow-hidden bg-[#f7efe4] shadow-[0_14px_40px_-22px_rgba(80,60,30,0.45)] transition-transform duration-300 hover:-translate-y-1.5 ${c.shape}`}
            >
              <div className="absolute inset-x-0 top-0 bottom-12 overflow-hidden sm:bottom-14">
                <Image
                  src={encodeURI(c.photo)}
                  alt={c.title}
                  fill
                  sizes="(min-width:1024px) 20vw, (min-width:768px) 33vw, 50vw"
                  className="object-cover object-[center_40%] transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="absolute inset-x-0 bottom-0 h-[45%] bg-linear-to-t from-[#f7efe4] from-35% via-[#f7efe4]/80 via-60% to-transparent" />
              <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-2 p-4 sm:p-5">
                <div className="min-w-0">
                  <h3 className="font-medium text-ink sm:text-[1.05rem]">{c.title}</h3>
                  <p className="mt-0.5 text-[11px] leading-snug text-ink/70 sm:text-xs lg:whitespace-nowrap lg:text-[11px] xl:text-xs">{c.tagline}</p>
                </div>
                <span className="grid size-9 shrink-0 place-items-center rounded-full bg-white text-ink shadow-md transition-colors group-hover:bg-forest group-hover:text-white">
                  <ArrowRight className="size-4" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

/* --------------------------------- Brands --------------------------------- */
function Brands() {
  return (
    <section id="brands" className="bg-[#fbf7f1] pb-4 pt-20">
      <div className={wide}>
        <div className="mx-auto max-w-2xl text-center">
          <p className="eyebrow">Our family of brands</p>
          <h2 className="mt-3 font-serif text-4xl leading-tight text-forest sm:text-5xl">
            Brands You Can <span className="script">Trust</span>
          </h2>
          <Swoosh className="mx-auto mt-2 w-24 text-rose" />
          <p className="mt-4 leading-relaxed text-muted">
            Three professional ranges, one promise: quality care for healthier skin and hair.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-3 lg:gap-8">
          {brands.map((b) => (
            <div
              key={b.name}
              className="flex flex-col items-center rounded-[2rem] border border-forest/10 bg-white px-6 pb-10 pt-10 text-center shadow-[0_14px_40px_-26px_rgba(80,60,30,0.5)]"
            >
              <div className="relative h-24 w-full max-w-[16rem] sm:h-28">
                <Image src={b.logo} alt={b.name} fill sizes="(min-width:768px) 20vw, 70vw" className="object-contain" />
              </div>
              <span className="mt-8 block h-px w-16 bg-rose/40" />
              <p className="mt-5 max-w-xs leading-relaxed text-muted">{b.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------- Philosophy ------------------------------- */
function Philosophy() {
  return (
    <section id="philosophy" className="relative flex flex-col overflow-hidden bg-sand lg:min-h-[560px] lg:justify-center">
      <div className="absolute inset-0 bg-[#fdf1df] lg:hidden" />
      <div className="absolute inset-x-0 bottom-0 aspect-[971/1620] lg:hidden">
        <Image src="/mobile-philosophy.jpg" alt="Woman with glowing skin applying cream, beside an argan nut dripping oil" fill sizes="100vw" className="object-cover" />
        <div className="absolute inset-x-0 top-0 h-1/3 bg-linear-to-b from-[#fdf1df] to-transparent" />
      </div>
      <div className="relative hidden lg:absolute lg:inset-0 lg:block lg:h-auto">
        <Image
          src={encodeURI("/Radiant Skincare with Argan and Botanicals.webp")}
          alt="Woman with glowing skin applying cream, beside an argan nut dripping oil"
          fill
          sizes="100vw"
          className="object-cover object-left lg:object-center"
        />
        <div className="absolute inset-0 hidden bg-[radial-gradient(ellipse_32%_65%_at_50%_55%,rgba(250,246,239,0.88),rgba(250,246,239,0.55)_55%,transparent_100%)] lg:block" />
      </div>

      <div className={`${container} relative z-10 w-full pb-[84vw] pt-12 text-center lg:py-20 lg:text-left`}>
        <div className="mx-auto max-w-md lg:ml-[34%] xl:ml-[36%]">
          <p className="eyebrow">Our philosophy</p>
          <h2 className="mt-4 font-serif text-[2.6rem] leading-tight text-forest sm:text-5xl">
            Real Care
            <br />
            Real <span className="script">Confidence</span>
          </h2>
          <p className="mt-6 text-sm leading-relaxed text-ink/75 sm:text-base">
            We believe skincare is more than just a routine — it&apos;s a moment of self-care. Our
            formulations combine natural ingredients with modern science to give you visible,
            healthy and long-lasting results.
          </p>
          <ul className="mt-7 grid grid-cols-3 divide-x divide-forest/15 text-xs text-ink/80 lg:mt-8 lg:flex lg:flex-wrap lg:gap-6 lg:divide-x-0">
            {[
              [Flask, "Thoughtful", "Formulations"],
              [Leaf, "Inspired", "by Nature"],
              [Heart, "For Everyday", "Wellness"],
            ].map(([Icon, a, b]) => (
              <li key={a} className="flex flex-col items-center gap-2 px-1 lg:flex-row lg:gap-2.5 lg:px-0">
                <span className="grid size-11 place-items-center rounded-full bg-white/60 text-forest lg:size-10 lg:border lg:border-forest/30 lg:bg-transparent">
                  <Icon className="size-4.5" />
                </span>
                <span className="leading-tight">
                  {a}
                  <br />
                  {b}
                </span>
              </li>
            ))}
          </ul>
          <div className="mt-7 lg:mt-8">
            <PrimaryButton href="/about">Our Story</PrimaryButton>
          </div>
        </div>
      </div>

      <Badge className="absolute right-3 top-5 z-10 size-20! text-[9px]! sm:size-28! sm:text-xs! lg:hidden xl:left-[64%] xl:right-auto xl:top-12 xl:flex xl:size-32! xl:text-sm!">
        Goodness
        <br />
        in every
        <br />
        drop
      </Badge>
    </section>
  );
}

/* ------------------------------- Bestsellers ------------------------------ */
function Bestsellers() {
  return (
    <section id="bestsellers" className="pt-20 pb-10">
      <div className={wide}>
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="eyebrow">Our bestsellers</p>
            <h2 className="mt-3 font-serif text-4xl text-forest sm:text-5xl">
              Loved by <span className="script">Many</span>
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-muted">
            Explore our complete range of professional hair, skin and personal care — thoughtfully formulated for real, visible results.
          </p>
        </div>

        <ProductShowcase products={products} />
      </div>
    </section>
  );
}

/* ------------------------------ Collections ------------------------------- */
function Collections() {
  return (
    <section id="collections" className="relative overflow-hidden bg-[#fbf7f1] pb-20 pt-10 lg:pb-36">
      <div className={`${wide} relative`}>
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="eyebrow">Our collections</p>
            <h2 className="mt-3 font-serif text-4xl leading-tight text-forest sm:text-5xl">
              Shop by <span className="script">Collection</span>
            </h2>
            <svg viewBox="0 0 120 12" className="ml-[38%] mt-1 w-24 text-[#a08a6a]" aria-hidden>
              <path d="M2 9C35 2 80 1 118 7" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
            </svg>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-muted md:mr-36 lg:text-base">
            Professional hair, skin and personal care — everything your salon or home routine
            needs, under one trusted name.
          </p>
        </div>

        <div className="mt-8 grid gap-5 lg:mt-10 lg:grid-cols-3">
          {collections.map((c) => (
            <article
              key={c.key}
              id={c.key}
              style={{ backgroundColor: c.bg }}
              className="group relative flex scroll-mt-24 flex-col overflow-hidden rounded-[2rem] shadow-[0_18px_50px_-30px_rgba(80,60,30,0.5)] 2xl:min-h-[23rem]"
            >
              {/* Wide screens: a product-centred crop fills the card's left half top to bottom and
                  fades into the card colour on its right, with the content beside it.
                  Narrower screens: the full photo sits on top of the card. */}
              <div className="relative order-first aspect-[93/100] overflow-hidden sm:aspect-[1180/941] 2xl:absolute 2xl:inset-y-0 2xl:left-0 2xl:order-0 2xl:aspect-auto 2xl:h-auto 2xl:w-[52%]">
                <Image
                  src={c.mobile}
                  alt={c.title}
                  fill
                  sizes="(min-width:1024px) 33vw, 100vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.04] 2xl:hidden"
                />
                <Image
                  src={encodeURI(c.photo)}
                  alt=""
                  fill
                  sizes="18vw"
                  className="hidden object-cover object-center transition-transform duration-700 group-hover:scale-[1.04] 2xl:block"
                />
                <div
                  className="absolute inset-y-0 right-0 hidden w-[30%] 2xl:block"
                  style={{ background: `linear-gradient(to left, ${c.bg} 5%, ${c.bg}99 45%, ${c.bg}00)` }}
                />
                <div
                  className="absolute inset-x-0 bottom-0 h-1/4 2xl:hidden"
                  style={{ background: `linear-gradient(to top, ${c.bg}, ${c.bg}00)` }}
                />
              </div>

              <div className="relative flex flex-1 flex-col p-6 sm:p-7 2xl:ml-auto 2xl:w-[52%] 2xl:justify-center 2xl:pl-2 2xl:pr-6">
                <p className="text-[11px] uppercase tracking-[0.2em] text-rose">{c.tagline}</p>
                <h3 className="mt-2 font-serif text-3xl text-forest xl:text-4xl">{c.title}</h3>
                <ul className="mt-5 flex flex-wrap gap-1.5">
                  {c.subs.map((s) => (
                    <li key={s}>
                      <Link
                        href={subHref(c.key, s)}
                        className="inline-block whitespace-nowrap rounded-full border border-forest/10 bg-white/75 px-3 py-1 text-xs text-ink/85 backdrop-blur-sm transition-colors hover:border-forest hover:bg-forest hover:text-white"
                      >
                        {s}
                      </Link>
                    </li>
                  ))}
                </ul>
                <Link
                  href={`/products/${c.key}`}
                  className="mt-auto inline-flex items-center gap-2 pt-7 font-medium text-forest transition-colors hover:text-brand"
                >
                  Explore {c.title} <ArrowRight />
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* Heading row on top, kits in their own full-width row, so nothing gets squeezed. */}
        <div className="relative mt-5 overflow-hidden rounded-[2rem] bg-white/80 p-6 shadow-[0_18px_50px_-32px_rgba(80,60,30,0.5)] sm:p-8">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="eyebrow">Skin care</p>
              <h3 className="mt-2 font-serif text-3xl text-forest sm:text-4xl">Facial Kit Collection</h3>
              <p className="mt-2 text-sm text-muted sm:text-base">
                From premium multi-step rituals to salon-size kits.
              </p>
            </div>
            <Link
              href="/products/skin/facial-kits"
              className="relative inline-flex w-fit shrink-0 items-center gap-2 rounded-full bg-forest px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-forest-deep"
            >
              View All Facial Kits <ArrowRight />
            </Link>
          </div>
          <ul className="relative mt-6 grid grid-cols-2 gap-3 xl:grid-cols-4">
            {facialKits.map((k) => (
              <li
                key={k.name + k.steps}
                className="flex flex-col items-center gap-2 rounded-2xl border border-forest/10 bg-white p-3 text-center transition-shadow hover:shadow-md sm:flex-row sm:gap-4 sm:pr-4 sm:text-left"
              >
                <div className="relative size-20 shrink-0 sm:size-24">
                  <Image
                    src={productImg(k.file)}
                    alt={`${k.name} ${k.steps}`}
                    fill
                    sizes="96px"
                    className="scale-110 object-contain mix-blend-multiply"
                  />
                </div>
                <div className="min-w-0">
                  <p className="text-sm font-medium leading-snug text-forest">{k.name}</p>
                  <p className="mt-1 whitespace-nowrap font-serif text-2xl text-[#c9944a]">{k.steps}</p>
                  <p className="whitespace-nowrap text-xs text-muted">{k.use}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

/* ---------------------------- Featured product ---------------------------- */
function Featured() {
  return (
    // Not overflow-hidden: on desktop the bottle deliberately pokes out above the section.
    <section className="relative z-10 bg-[#fbf0dd] text-ink lg:bg-[#fbe7b5]">
      {/* Mobile: portrait splash pinned to the bottom, bottle stands on it. */}
      <div className="absolute inset-0 overflow-hidden lg:hidden">
        <div className="absolute inset-x-0 bottom-0 aspect-[941/1672]">
          <Image src="/mobile-featured.jpg" alt="" fill sizes="100vw" className="object-cover" />
          <div className="absolute inset-x-0 top-0 h-1/4 bg-linear-to-b from-[#fbf0dd] to-transparent" />
        </div>
      </div>
      <div className="absolute inset-0 hidden overflow-hidden lg:block">
        <Image
          src={encodeURI("/Golden Citrus Cream Splash.webp")}
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-center brightness-[0.9] saturate-[0.9]"
        />
        {/* Tone down the glare, then frost the text (left) and icon (right) zones for legibility. */}
        <div className="absolute inset-0 bg-[#3d2606]/10" />
        <div className="absolute inset-0 bg-[#fffaf0]/65 lg:bg-transparent lg:bg-linear-to-r lg:from-[#fffaf0]/90 lg:via-[#fffaf0]/60 lg:via-25% lg:to-transparent lg:to-42%" />
        <div className="absolute inset-0 hidden bg-linear-to-l from-[#fffaf0]/75 via-[#fffaf0]/35 via-20% to-transparent to-38% lg:block" />
      </div>

      <div className="relative mx-auto grid w-full max-w-[1760px] items-center gap-7 px-5 pb-6 pt-14 sm:px-8 lg:grid-cols-[1fr_17rem_1fr] lg:gap-10 lg:px-14 lg:py-28 xl:px-20">
        <div className="mx-auto max-w-md text-center lg:mx-0 lg:text-left">
          <p className="eyebrow">Featured product</p>
          <h2 className="mt-4 font-serif text-[2.6rem] leading-[1.05] text-forest sm:text-5xl xl:text-6xl">
            Derma Shield
            <br />
            <span className="text-[#c8601a]">Sun Protection</span>
          </h2>
          <p className="mt-5 text-[0.95rem] leading-relaxed text-ink/80 sm:text-base">
            A lightweight SPF 30 PA++ sun protection cream that shields your skin from harsh sun,
            helps prevent tanning and keeps skin soft — made for all skin types.
          </p>
          <div className="mt-8 hidden lg:block">
            <PrimaryButton href="#bestsellers">Know More</PrimaryButton>
          </div>
          <ul className="mt-8 hidden flex-wrap gap-x-6 gap-y-3 text-sm text-ink/85 lg:flex">
            {["SPF 30 PA++", "Lightweight Feel", "Daily Use"].map((t) => (
              <li key={t} className="flex items-center gap-2">
                <Leaf className="size-4 text-[#d0702a]" /> {t}
              </li>
            ))}
          </ul>
        </div>

        <div className="order-3 text-center lg:hidden">
          <PrimaryButton href="#bestsellers">Know More</PrimaryButton>
        </div>

        <div className="relative order-4 mx-auto h-[23rem] w-full max-w-56 sm:h-[26rem] sm:max-w-60 lg:order-0 lg:h-full lg:max-w-none lg:self-stretch">
          <div className="absolute inset-x-0 bottom-0 top-0 lg:-bottom-20 lg:-top-[10rem]">
            <div className="absolute inset-x-8 bottom-3 h-8 rounded-full bg-[#7a4a10]/35 blur-xl" />
            <Image
              src="/derma-sunscreen-trimmed.webp"
              alt="Dermaplex Derma Shield SPF 30 sun protection cream"
              fill
              sizes="(min-width:1024px) 16rem, 60vw"
              className="-rotate-[7deg] object-contain object-bottom drop-shadow-[0_22px_25px_rgba(120,70,10,0.35)]"
            />
          </div>
        </div>

        <ul className="order-2 grid grid-cols-3 divide-x divide-[#c8a46a]/30 lg:order-0 lg:justify-self-end lg:gap-4 lg:divide-x-0">
          {[
            [Sun, "Shields From", "Sun Damage"],
            [Shield, "Helps Prevent", "Tanning"],
            [Drop, "Keeps Skin", "Soft & Smooth"],
          ].map(([Icon, a, b]) => (
            <li key={a} className="flex flex-col items-center px-1 text-center text-[13px] text-ink/85 sm:text-sm">
              <span className="grid size-14 place-items-center rounded-full bg-white/45 text-ink shadow-[0_8px_24px_-10px_rgba(150,90,10,0.45)] ring-1 ring-white/60 backdrop-blur-sm sm:size-24">
                <Icon className="size-7" />
              </span>
              <span className="mt-3 leading-tight">
                {a}
                <br />
                {b}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* --------------------------- Trust strip (new) ---------------------------- */
function TrustStrip() {
  const items = [
    [Sparkle, "Salon Professional", "Range for experts & home"],
    [Leaf, "Nature Inspired", "Argan, botanicals & fruit extracts"],
    [Shield, "Skin Friendly", "Made for all skin types"],
    [Heart, "Complete Care", "Hair, skin & personal care"],
  ];
  return (
    <section className="border-b border-forest/10 bg-cream">
      <div className={`${container} grid grid-cols-2 gap-x-4 gap-y-8 py-10 lg:grid-cols-4 lg:gap-8 lg:py-12`}>
        {items.map(([Icon, title, text]) => (
          <div key={title} className="flex flex-col items-center gap-3 text-center sm:flex-row sm:items-start sm:gap-4 sm:text-left">
            <span className="grid size-12 shrink-0 place-items-center rounded-full bg-blush text-brand">
              <Icon className="size-5" />
            </span>
            <div>
              <h3 className="font-serif text-base text-forest sm:text-lg">{title}</h3>
              <p className="mt-0.5 text-sm text-muted">{text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* --------------------------- Glow ritual (new) ---------------------------- */
function Ritual() {
  return (
    <section
      id="ritual"
      className="relative overflow-hidden bg-[radial-gradient(ellipse_at_top,#fdf8f1,#f6eee2_70%)] py-20"
    >
      <div className={`${container} relative`}>
        <div className="mx-auto max-w-2xl text-center">
          <p className="eyebrow">Skincare guide</p>
          <h2 className="mt-3 font-serif text-4xl text-forest sm:text-5xl">
            Your Simple Glow <span className="script">Ritual</span>
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
            Three easy steps for healthy, radiant skin — pick the products that match your skin
            goals.
          </p>
        </div>

        <div className="mt-10 grid gap-10 md:mt-12 md:grid-cols-3 md:gap-8 lg:gap-14">
          {ritual.map((r, i) => {
            const Icon = { drop: Drop, face: Face, shield: SunShield }[r.icon];
            return (
              <article key={r.step} className="relative mx-auto w-full max-w-sm md:max-w-none">
                <div className="relative mx-auto aspect-[131/120] w-full max-w-sm">
                  <Image
                    src={encodeURI(r.photo)}
                    alt={r.title}
                    fill
                    sizes="(min-width:768px) 30vw, 90vw"
                    className="object-contain mix-blend-multiply"
                  />
                  <span
                    className={`absolute left-[2%] top-[12%] grid size-16 place-items-center rounded-full bg-white/80 font-serif text-3xl shadow-sm backdrop-blur sm:size-20 sm:text-4xl ${r.number}`}
                  >
                    {r.step}
                  </span>
                </div>

                <div
                  className="relative z-10 mx-auto -mt-[16%] max-w-sm bg-white/85 px-6 pb-7 pt-8 shadow-[0_18px_40px_-26px_rgba(80,60,30,0.5)] ring-1 ring-white backdrop-blur-sm"
                  style={{ borderRadius: "50% 50% 2.5rem 2.5rem / 3.5rem 3.5rem 2.5rem 2.5rem" }}
                >
                  <div className="flex items-center gap-4">
                    <span className={`grid size-14 shrink-0 place-items-center rounded-full text-white ${r.accent}`}>
                      <Icon className="size-6" />
                    </span>
                    <h3 className="font-serif text-3xl text-forest">{r.title}</h3>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-muted sm:pl-[4.5rem]">{r.text}</p>
                </div>

                {i < ritual.length - 1 && (
                  <CurvedArrow className="absolute -right-11 top-[34%] z-20 hidden w-14 text-forest/70 md:block lg:-right-16 lg:w-20" />
                )}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* --------------------------- Hair care (new) ------------------------------ */
function HairCare() {
  return (
    // On xl+ the section is locked to the photo's aspect ratio, so the products (left 55% of the
    // photo) never slide under the content, whatever the screen width. Content sizes scale with
    // the viewport so they always fit the photo's height. Below xl the photo stacks above the text.
    <section id="haircare" className="relative overflow-hidden bg-[#e6e9d9] xl:aspect-[2052/766] xl:bg-[#e9eee3]">
      {/* Below xl: portrait photo pinned to the bottom with the products; text sits above them. */}
      <div className="absolute inset-x-0 bottom-0 aspect-[941/1672] xl:hidden">
        <Image src="/mobile-hair-care.jpg" alt="Derma Argan hair care products on stone pedestals" fill sizes="100vw" className="object-cover" />
        <div className="absolute inset-x-0 top-0 h-1/4 bg-linear-to-b from-[#e6e9d9] to-transparent" />
      </div>
      <div className="relative hidden xl:absolute xl:inset-0 xl:block">
        <Image
          src="/hair-care-showcase.jpg"
          alt="Derma Argan Nano Plastia Shampoo, Onion Hair Spa and Moroccan Argan Oil Hair Spa on stone pedestals"
          fill
          sizes="(min-width:1280px) 100vw, 180vw"
          className="object-cover"
        />
      </div>

      <div className="relative flex flex-col justify-center px-4 pb-[84vw] pt-14 text-center sm:px-8 xl:absolute xl:text-left xl:inset-y-0 xl:left-[56%] xl:right-[3%] xl:p-0">
        <div className="mx-auto max-w-xl xl:mx-0 xl:max-w-none">
          <p className="eyebrow">Professional hair care</p>
          <h2 className="mt-3 font-serif text-[2.3rem] leading-tight text-forest sm:text-5xl xl:mt-[0.8vw] xl:text-[clamp(2.25rem,3.1vw,3.9rem)]">
            Salon-Grade Care for
            <br />
            Beautiful <span className="script">Hair</span>
          </h2>
          <svg viewBox="0 0 120 12" className="mx-auto mt-1 w-24 translate-x-14 text-rose xl:ml-[29%] xl:translate-x-0" aria-hidden>
            <path d="M2 9C35 2 80 1 118 7" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
          </svg>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed xl:mx-0 text-ink/75 sm:text-base xl:mt-[0.8vw] xl:text-[clamp(0.9rem,0.95vw,1.15rem)]">
            From keratin shampoos to biotin masks and argan-rich serums, our hair range repairs,
            nourishes and smoothens — the same care salons trust, now for your home routine.
          </p>
          <ul className="mx-auto mt-7 grid max-w-xl grid-cols-2 gap-x-3 gap-y-4 text-left text-sm xl:mx-0 text-ink/85 xl:mt-[1.6vw] xl:gap-[1.1vw] xl:text-[clamp(0.85rem,0.9vw,1.05rem)]">
            {[
              [Leaf, "Repairs damaged hair"],
              [Sparkle, "Controls frizz & dryness"],
              [Drop, "Enriched with argan oil"],
              [Flask, "Keratin & biotin care"],
            ].map(([Icon, t]) => (
              <li key={t} className="flex items-center gap-3 sm:gap-4">
                <span className="grid size-11 shrink-0 sm:size-14 place-items-center rounded-full bg-[#dfe8d8] text-forest xl:size-[clamp(2.5rem,2.8vw,3.5rem)]">
                  <Icon className="size-5 sm:size-6 xl:size-[45%]" />
                </span>
                {t}
              </li>
            ))}
          </ul>
          <div className="mt-8 xl:mt-[1.8vw]">
            <PrimaryButton href="/products/hair">Shop Hair Care</PrimaryButton>
          </div>
        </div>
      </div>
    </section>
  );
}

/* --------------------------- Testimonials (new) --------------------------- */
function Testimonials() {
  return (
    <section className="py-20">
      <div className={wide}>
        <div className="text-center">
          <p className="eyebrow">Real people. Real results.</p>
          <h2 className="mt-3 font-serif text-3xl text-forest sm:text-5xl">
            What Our Customers <span className="script">Say</span>
          </h2>
          <Swoosh className="mx-auto mt-1 w-20 text-rose sm:w-24 sm:translate-x-36" />
        </div>

        <div className="mt-10 md:px-6">
          <Carousel label="Customer reviews">
            {testimonials.map((t, i) => (
              <figure
                key={t.name}
                // Slightly different organic outline per card, like pebbles.
                style={{ borderRadius: blobs[i % blobs.length] }}
                className="relative flex w-[85%] shrink-0 snap-start flex-col bg-white/80 px-7 pb-8 pt-7 shadow-[0_20px_45px_-28px_rgba(80,60,30,0.45)] ring-1 ring-white sm:w-[46%] lg:w-[calc((100%-3*1.25rem)/4)] lg:px-9"
              >
                <div className="flex items-center gap-4">
                  <span className="grid size-14 shrink-0 place-items-center rounded-full bg-blush font-serif text-4xl leading-none text-rose">
                    <span className="mt-4">&ldquo;</span>
                  </span>
                  <div className="flex gap-1 text-gold">
                    {Array.from({ length: 5 }, (_, k) => (
                      <Star key={k} />
                    ))}
                  </div>
                </div>
                <blockquote className="mt-5 flex-1 leading-relaxed text-ink/85 sm:text-[1.05rem]">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <span className="mt-6 h-px w-12 bg-rose/50" />
                <figcaption className="mt-5 flex items-center gap-3">
                  <span className="grid size-12 place-items-center rounded-full bg-blush font-serif text-lg text-brand">
                    {t.name[0]}
                  </span>
                  <span>
                    <span className="block font-medium text-forest">{t.name}</span>
                    <span className="block text-sm text-muted">Verified Customer</span>
                  </span>
                </figcaption>
              </figure>
            ))}
          </Carousel>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------- FAQ (new) -------------------------------- */
function Faq() {
  return (
    <section id="contact" className="bg-[#f6efe5] py-20">
      <div className={`${wide} grid items-start gap-10 lg:grid-cols-[1.25fr_1fr] xl:gap-16`}>
        <div>
          <p className="eyebrow">Frequently asked questions</p>
          <h2 className="mt-3 font-serif text-4xl leading-none text-forest sm:text-5xl xl:text-6xl">
            A Little Clarity
            <span className="script mt-1 block text-[1.15em] text-[#d06a4f]">for your care</span>
          </h2>
          <span className="mt-2 block h-px w-full max-w-sm bg-linear-to-r from-[#d06a4f]/70 to-transparent" />
          <p className="mt-5 max-w-md leading-relaxed text-muted">
            Find answers to common questions about our products, ingredients and skincare routine.
          </p>

          <div className="mt-8 divide-y divide-forest/10 overflow-hidden rounded-3xl border border-forest/10 bg-white/60">
            {faqs.map((f, i) => (
              <details key={f.q} open={i === 0} className="group px-6 py-5 open:bg-white/70 sm:px-8">
                <summary className="flex cursor-pointer items-center justify-between gap-4 font-serif text-lg text-forest sm:text-xl">
                  {f.q}
                  <span className="grid size-10 shrink-0 place-items-center rounded-full border border-[#d06a4f]/60 text-[#d06a4f] transition-colors group-hover:bg-[#d06a4f] group-hover:text-white">
                    <Plus className="size-4 group-open:hidden" />
                    <Minus className="hidden size-4 group-open:block" />
                  </span>
                </summary>
                <p className="mt-3 max-w-2xl leading-relaxed text-muted">{f.a}</p>
              </details>
            ))}
          </div>
        </div>

        <div className="relative flex min-h-[36rem] overflow-hidden rounded-[2rem] sm:min-h-[38rem] lg:sticky lg:top-24 lg:min-h-[44rem]">
          <Image
            src={encodeURI("/Radiant Skincare with Argan and Botanicals.webp")}
            alt="Woman with glowing skin applying cream"
            fill
            sizes="(min-width:1024px) 40vw, 100vw"
            className="object-cover object-[22%_15%] lg:object-[16%_center]"
          />
          {/* Green panel with a soft curved top edge. */}
          <div
            className="relative mt-auto w-full bg-forest-deep px-7 pb-9 pt-12 text-white sm:px-10"
            style={{ borderRadius: "60% 40% 0 0 / 3.5rem 2rem 0 0" }}
          >
            <p className="flex items-center gap-3 text-[11px] uppercase tracking-[0.25em] text-white/75">
              <span className="h-px w-8 bg-[#d06a4f]" /> We&apos;re here to help
            </p>
            <h3 className="mt-3 font-serif text-3xl sm:text-4xl">Still Have Questions?</h3>
            <p className="mt-3 max-w-sm text-white/80">
              We&apos;re here to help you find the right products and the best care for your skin.
            </p>
            <Link
              href="/contact"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-cream px-6 py-3 text-sm font-medium text-forest transition-colors hover:bg-white"
            >
              Contact Us <ArrowRight />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <>
      <Header />
      <main>
        {/* <Hero /> */}
        <VideoBanner src="/video-banner.mp4" poster="/video-banner-poster.webp" label="Dermaplex Professional" />
        <Categories />
        <Philosophy />
        <Bestsellers />
        <Collections />
        <Featured />
        <TrustStrip />
        <Ritual />
        <HairCare />
        <Brands />
        <Testimonials />
        <Faq />
      </main>
      <Footer />
    </>
  );
}
