import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowRight, Leaf, Flask, Heart, Sparkle, Shield, Drop, Swoosh } from "@/components/Icons";
import { products, collections, facialKits } from "@/lib/data";

export const metadata = {
  title: "About Us | Dermaplex Professional",
  description:
    "Dermaplex Professional brings salon-grade hair, skin and personal care together — crafted with the goodness of nature and backed by science.",
};

const wide = "mx-auto w-full max-w-[1760px] px-4 sm:px-8 lg:px-12";

function Button({ href, children, variant = "solid" }) {
  const styles = {
    solid: "bg-forest text-white hover:bg-forest-deep",
    outline: "border border-forest/40 text-forest hover:border-brand hover:text-brand",
    light: "bg-cream text-forest hover:bg-white",
    ghost: "border border-white/50 text-white hover:bg-white hover:text-forest",
  };
  return (
    <Link
      href={href}
      className={`inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-colors ${styles[variant]}`}
    >
      {children} <ArrowRight />
    </Link>
  );
}

/* --------------------------------- Banner --------------------------------- */
function Banner() {
  return (
    <section className="relative overflow-hidden bg-[#fdf2e4] lg:bg-[#f4e7d6]">
      {/* Mobile: portrait photo fills the section top to bottom; its empty top half holds the text. */}
      <div className="absolute inset-0 lg:hidden">
        <Image src="/about-mobile-v2.webp" alt="Derma Argan and Dermaplex hair care products on a stone ledge" fill priority sizes="100vw" className="object-cover object-bottom" />
      </div>
      {/* Desktop: photo covers only the right ~70% so it isn't over-zoomed; its left edge fades
          into the section colour behind the text. */}
      <div className="absolute inset-y-0 right-0 hidden w-[70%] lg:block">
        <Image src="/about-hero.webp" alt="" fill priority sizes="70vw" className="object-cover object-right" />
        <div className="absolute inset-y-0 left-0 w-1/4 bg-linear-to-r from-[#f4e7d6] to-transparent" />
      </div>

      <div className={`${wide} relative grid min-h-[177.7vw] content-start pt-8 lg:min-h-[36rem] lg:content-center lg:py-20`}>
        <div className="max-w-xl">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-muted">
            <Link href="/" className="hover:text-brand">
              Home
            </Link>
            <span className="text-rose">/</span>
            <span className="text-forest">About Us</span>
          </nav>
          <h1 className="mt-4 font-serif text-[2.6rem] leading-[1.05] lg:mt-6 lg:text-5xl text-forest sm:text-6xl xl:text-7xl">
            Care That Comes
            <br />
            From <span className="script">the Heart</span>
          </h1>
          <Swoosh className="ml-[42%] mt-1 w-28 text-rose" />
          <p className="mt-3 max-w-[16.5rem] text-[0.9rem] leading-relaxed text-ink/75 sm:max-w-md sm:text-lg lg:mt-5">
            Dermaplex Professional brings together the goodness of nature and the precision of
            science — creating hair, skin and personal care that salons trust and you can enjoy at
            home.
          </p>
          <div className="mt-5 flex flex-col items-start gap-2.5 sm:flex-row sm:flex-wrap lg:mt-8 lg:gap-3">
            <Button href="/#collections">Explore Products</Button>
            <Button href="/contact" variant="outline">
              Contact Us
            </Button>
          </div>
        </div>
      </div>

    </section>
  );
}

/* ---------------------------------- Story --------------------------------- */
function Story() {
  return (
    <section className="relative flex flex-col overflow-hidden bg-[#fdf8ee] lg:block">
      <div className="relative order-last aspect-[1371/1147] lg:absolute lg:inset-y-0 lg:left-0 lg:aspect-auto lg:w-[55%]">
        <Image
          src="/our-story.webp"
          alt="Derma Argan Blue Tea Facial Kit, Korean Rice Water Facial Kit and Skin Glow Face Wash"
          fill
          sizes="(min-width:1024px) 55vw, 100vw"
          className="object-cover object-left"
        />
        <div className="absolute inset-y-0 right-0 hidden w-2/5 bg-linear-to-r from-transparent to-[#fdf8ee] lg:block" />
        <div className="absolute inset-x-0 top-0 h-1/5 bg-linear-to-b from-[#fdf8ee] to-transparent lg:hidden" />
      </div>

      <div className={`${wide} relative grid pb-2 pt-16 lg:min-h-[44rem] lg:grid-cols-2 lg:items-center lg:py-24`}>
        <div className="hidden lg:block" />
        <div className="max-w-xl">
          <p className="eyebrow">Our story</p>
          <h2 className="mt-3 font-serif text-4xl leading-tight text-forest sm:text-5xl">
            Born From a Love for
            <br />
            <span className="script">Real Care</span>
          </h2>
          <div className="mt-6 space-y-4 leading-relaxed text-ink/75">
            <p>
              Dermaplex began with a simple belief: professional-quality care shouldn&apos;t be
              complicated. Everyone deserves products that are gentle, effective and made with
              ingredients they can trust.
            </p>
            <p>
              Under the Dermaplex and Derma Argan names, we craft everything from face washes and
              facial kits to keratin shampoos, hair spa creams and waxing solutions — each one
              blending botanicals like argan, vitamin C and rice water with modern formulation.
            </p>
            <p>
              Today our range is used by salon professionals and families alike, with one goal in
              mind: healthy skin, beautiful hair and a happier you.
            </p>
          </div>
          <ul className="mt-8 grid grid-cols-2 gap-4 text-sm text-ink/85">
            {["Salon-grade formulas", "Nature-inspired ingredients", "For all skin & hair types", "Home & professional packs"].map(
              (t) => (
                <li key={t} className="flex items-center gap-2.5">
                  <span className="grid size-6 shrink-0 place-items-center rounded-full bg-forest text-white">
                    <Leaf className="size-3" />
                  </span>
                  {t}
                </li>
              )
            )}
          </ul>
        </div>
      </div>
    </section>
  );
}

/* ---------------------------------- Stats --------------------------------- */
function Stats() {
  // Counted from the product catalogue so the numbers stay accurate as products change.
  const count = (cat) => products.filter((p) => p.cat === cat).length;
  const kits = products.filter((p) => p.tag === "Facial Kit").length;
  const stats = [
    [`${products.length}+`, "Professional products"],
    [collections.length, "Care collections"],
    [`${kits}+`, "Facial kit variants"],
    [count("hair"), "Hair care solutions"],
  ];
  return (
    <section className="relative overflow-hidden bg-forest-deep text-white">
      <Image src="/footer-bg.jpg" alt="" fill sizes="100vw" className="object-cover" />
      <div className={`${wide} relative grid grid-cols-2 gap-y-10 py-14 lg:grid-cols-4 lg:py-16`}>
        {stats.map(([n, label], i) => (
          <div
            key={label}
            className={`text-center ${i % 2 ? "" : "border-r border-white/15"} lg:border-r ${i === 3 ? "lg:border-r-0" : ""}`}
          >
            <p className="font-serif text-5xl text-[#e8c08f] sm:text-6xl">{n}</p>
            <p className="mt-2 text-sm text-white/75 sm:text-base">{label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

/* --------------------------------- Values --------------------------------- */
function Values() {
  const values = [
    [Flask, "Thoughtful Formulations", "Every product is formulated with care to deliver visible, long-lasting results."],
    [Leaf, "Inspired by Nature", "Argan, botanicals and fruit extracts bring nature's goodness into every jar."],
    [Shield, "Gentle & Skin Friendly", "Made to be kind to skin and hair, suitable for everyday use."],
    [Sparkle, "Salon Professional", "Trusted by experts, with salon-size packs for professional use."],
  ];
  return (
    <section className="bg-[radial-gradient(ellipse_at_top,#fdf8f1,#f6eee2_70%)] py-20 lg:py-24">
      <div className={wide}>
        <div className="mx-auto max-w-2xl text-center">
          <p className="eyebrow">What we stand for</p>
          <h2 className="mt-3 font-serif text-4xl text-forest sm:text-5xl">
            Our Core <span className="script">Values</span>
          </h2>
          <p className="mt-4 leading-relaxed text-muted">
            The principles behind every formula we create and every product we share.
          </p>
        </div>
        <div className="mt-10 grid grid-cols-2 gap-3 sm:gap-5 lg:mt-12 lg:grid-cols-4">
          {values.map(([Icon, title, text], i) => (
            <article
              key={title}
              className="group relative overflow-hidden rounded-3xl bg-white/80 p-4 text-center shadow-[0_20px_45px_-30px_rgba(80,60,30,0.5)] sm:rounded-[2rem] sm:p-7 sm:text-left ring-1 ring-white transition-transform hover:-translate-y-1"
            >
              <span className="absolute right-6 top-5 hidden font-serif text-5xl text-blush sm:block">0{i + 1}</span>
              <span className="relative mx-auto grid size-12 place-items-center rounded-full bg-[#e3ecdc] sm:mx-0 sm:size-14 text-forest transition-colors group-hover:bg-forest group-hover:text-white">
                <Icon className="size-6" />
              </span>
              <h3 className="relative mt-4 font-serif text-lg leading-snug text-forest sm:mt-6 sm:text-2xl">{title}</h3>
              <p className="relative mt-2 text-xs leading-relaxed text-muted sm:mt-3 sm:text-sm">{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------------------- Our range -------------------------------- */
// Uploaded photo per collection, in the same order as `collections` (hair, skin, personal).
const rangePhotos = {
  hair: ["/collection-1.webp", "Derma Argan Keratin Shampoo"],
  skin: ["/collection-2.webp", "Derma Argan Hydra Facial Kit"],
  personal: ["/collection-3.webp", "Derma Argan White Chocolate Brazilian Wax"],
};

function Range() {
  return (
    <section className="py-20 lg:py-24">
      <div className={wide}>
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="eyebrow">What we make</p>
            <h2 className="mt-3 font-serif text-4xl text-forest sm:text-5xl">
              Three Collections, <span className="script">One Promise</span>
            </h2>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-muted lg:text-base">
            From the salon chair to your bathroom shelf — complete care for hair, skin and body.
          </p>
        </div>
        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {collections.map((c) => (
            <Link
              key={c.key}
              href={`/#${c.key}`}
              style={{ backgroundColor: c.bg }}
              className="group flex flex-col overflow-hidden rounded-[2rem] shadow-[0_18px_50px_-30px_rgba(80,60,30,0.5)]"
            >
              <div className="relative aspect-[1369/1149] overflow-hidden">
                <Image
                  src={rangePhotos[c.key][0]}
                  alt={rangePhotos[c.key][1]}
                  fill
                  sizes="(min-width:1024px) 33vw, 100vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div
                  className="absolute inset-x-0 bottom-0 h-1/5"
                  style={{ background: `linear-gradient(to top, ${c.bg}, ${c.bg}00)` }}
                />
              </div>
              <div className="flex flex-1 items-end justify-between gap-4 p-6 sm:p-7">
                <div>
                  <p className="text-[11px] uppercase tracking-[0.2em] text-rose">{c.tagline}</p>
                  <h3 className="mt-2 font-serif text-3xl text-forest">{c.title}</h3>
                  <p className="mt-1 text-sm text-muted">{c.subs.length} product categories</p>
                </div>
                <span className="grid size-11 shrink-0 place-items-center rounded-full bg-white text-forest shadow-sm transition-colors group-hover:bg-forest group-hover:text-white">
                  <ArrowRight />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------------------- Approach -------------------------------- */
function Approach() {
  const steps = [
    [Leaf, "Choose Pure Ingredients", "We start with nature's best — argan, vitamin C, rice water, keratin and more."],
    [Flask, "Formulate With Science", "Ingredients are balanced into formulas that work for real skin and hair concerns."],
    [Drop, "Test for Gentleness", "Every product is made to feel good on skin and hair, for everyday use."],
    [Heart, "Deliver Real Results", "From salon to home — care that leaves you looking and feeling your best."],
  ];
  return (
    <section className="bg-sage py-20 lg:py-24">
      <div className={`${wide} grid items-center gap-14 lg:grid-cols-[1fr_1.15fr] lg:gap-20`}>
        <div>
          <p className="eyebrow">Our approach</p>
          <h2 className="mt-3 font-serif text-4xl leading-tight text-forest sm:text-5xl">
            Where Nature Meets
            <br />
            <span className="script">Science</span>
          </h2>
          <p className="mt-5 max-w-md leading-relaxed text-ink/75">
            Every Dermaplex product follows the same simple path — so what reaches you is gentle,
            effective and worth trusting.
          </p>
          <div className="relative mt-8 aspect-[1672/941] max-w-xl overflow-hidden rounded-[2rem] shadow-[0_25px_50px_-30px_rgba(60,80,40,0.5)]">
            <Image
              src="/our-approach.webp"
              alt="Dermaplex Professional Moisturizing Shampoo on a stone with leaves and flowers"
              fill
              sizes="(min-width:1024px) 40vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>

        <ol className="relative space-y-5 before:absolute before:bottom-8 before:left-7 before:top-8 before:w-px before:bg-forest/20">
          {steps.map(([Icon, title, text], i) => (
            <li key={title} className="relative flex gap-5 rounded-[1.75rem] bg-white/70 p-5 sm:p-6">
              <span className="relative z-10 grid size-14 shrink-0 place-items-center rounded-full bg-forest text-white">
                <Icon className="size-6" />
              </span>
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-rose">Step 0{i + 1}</p>
                <h3 className="mt-1 font-serif text-2xl text-forest">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{text}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

/* ----------------------------------- CTA ---------------------------------- */
function Cta() {
  return (
    <section className="py-20">
      <div className={wide}>
        <div className="relative overflow-hidden rounded-[2.5rem]">
          <Image
            src="/about-contact.webp"
            alt="Derma Argan Hair Serum on a stone with argan nuts"
            fill
            sizes="100vw"
            className="object-cover object-[80%_center] md:object-right"
          />
          <div className="absolute inset-0 bg-[#0f2a1c]/55 md:bg-transparent md:bg-linear-to-r md:from-[#0f2a1c]/60 md:to-transparent md:to-60%" />
          <div className="relative max-w-xl px-7 py-14 text-white sm:px-12 lg:py-24">
            <p className="eyebrow text-white/70!">Start your journey</p>
            <h2 className="mt-3 font-serif text-4xl leading-tight sm:text-5xl">
              Find the Care Your Skin &amp; Hair Deserve
            </h2>
            <p className="mt-4 text-white/80">
              Explore our {products.length}+ products and {facialKits.length} facial kit ranges, or
              talk to our team for help choosing the right one.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href="/#bestsellers" variant="light">
                Shop Now
              </Button>
              <Button href="/contact" variant="ghost">
                Get in Touch
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function AboutPage() {
  return (
    <>
      <Header />
      <main>
        <Banner />
        <Story />
        <Stats />
        <Values />
        <Range />
        <Approach />
        <Cta />
      </main>
      <Footer />
    </>
  );
}
