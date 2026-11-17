import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowRight, Whatsapp, Flask, Sparkle, Bottle, Shield } from "@/components/Icons";
import { collections, whatsappHref } from "@/lib/data";
import { plImg, plFormats, plSteps, plWhy, plEnquiry } from "@/lib/privateLabel";

export const metadata = {
  title: "Private Label Manufacturing | Dermaplex Professional",
  description:
    "Launch your own skin, hair and personal care brand with Dermaplex. We manufacture salon-grade products, supplied unlabelled for your branding.",
};

const wide = "mx-auto w-full max-w-[1760px] px-4 sm:px-8 lg:px-12";
const whyIcons = [Flask, Sparkle, Bottle, Shield];

function EnquiryButtons({ light = false }) {
  return (
    <div className="flex flex-wrap gap-2.5 sm:gap-3">
      <Link
        href="/contact"
        className={`inline-flex items-center gap-2 rounded-full px-4 py-3 text-sm sm:px-6 font-medium transition-colors ${
          light ? "bg-white text-forest hover:bg-cream" : "bg-forest text-white hover:bg-forest-deep"
        }`}
      >
        Enquire Now <ArrowRight />
      </Link>
      <a
        href={whatsappHref(plEnquiry)}
        target="_blank"
        rel="noopener noreferrer"
        className={`inline-flex items-center gap-2 rounded-full border px-4 py-3 text-sm sm:px-6 font-medium transition-colors ${
          light
            ? "border-white/60 text-white hover:bg-white hover:text-forest"
            : "border-[#2f7a4b]/30 bg-[#e8f0e6] text-[#2f7a4b] hover:border-[#2f7a4b] hover:bg-[#2f7a4b] hover:text-white"
        }`}
      >
        <Whatsapp className="size-4" /> Chat on WhatsApp
      </a>
    </div>
  );
}

// Desktop photo has the products on the left and open wall on the right, so the text sits right.
// The mobile photo is portrait with open wall on top: text above, photo pinned to the bottom.
function Banner() {
  return (
    <section className="relative overflow-hidden bg-[#f6e8d8] lg:bg-[#fdf6ec]">
      {/* Desktop: the whole photo at its own 3:2 ratio on the left (no zoom), fading into the wall colour. */}
      <div className="absolute inset-y-0 left-0 hidden aspect-[3/2] lg:block">
        <Image src="/private-label-banner.webp" alt="" fill priority sizes="60vw" className="object-cover" />
        <div className="absolute inset-y-0 right-0 w-2/5 bg-linear-to-r from-transparent to-[#fdf6ec]" />
      </div>
      <div className="absolute inset-x-0 bottom-0 aspect-[2/3] lg:hidden">
        <Image src="/private-label-mobile-banner.webp" alt="" fill priority sizes="100vw" className="object-cover" />
        <div className="absolute inset-x-0 top-0 h-1/2 bg-linear-to-b from-[#f6e8d8] via-[#f6e8d8]/70 to-transparent" />
      </div>

      {/* Mobile: the text overlaps the empty wall at the top of the photo, so only the products add height. */}
      <div className={`${wide} relative grid pb-[86vw] pt-10 lg:min-h-[32rem] lg:grid-cols-[1.1fr_1fr] lg:content-center lg:py-16 xl:min-h-[36rem] xl:grid-cols-[0.8fr_1fr]`}>
        <div className="max-w-xl lg:col-start-2">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-ink/80">
            <Link href="/" className="hover:text-brand">
              Home
            </Link>
            <span className="text-rose">/</span>
            <span className="font-medium text-forest">Private Label</span>
          </nav>
          <p className="eyebrow mt-6 max-lg:text-ink">Manufacturing for brands</p>
          <h1 className="mt-3 font-serif text-[2.6rem] leading-[1.05] text-forest sm:text-6xl">
            Your Brand, <span className="script">Our Expertise</span>
          </h1>
          <p className="mt-5 max-w-md leading-relaxed text-ink max-lg:font-medium sm:text-lg lg:text-ink/80">
            We make salon-grade skin, hair and personal care products and supply them unlabelled, ready to carry
            your own brand name.
          </p>
          <div className="mt-8">
            <EnquiryButtons />
          </div>
        </div>
      </div>
    </section>
  );
}

function Formats() {
  return (
    <section className="py-16 lg:py-20">
      <div className={wide}>
        <div className="max-w-2xl">
          <p className="eyebrow">Ready for your label</p>
          <h2 className="mt-3 font-serif text-4xl leading-tight text-forest sm:text-5xl">
            Products &amp; <span className="script">Packaging</span>
          </h2>
          <p className="mt-4 leading-relaxed text-muted">
            Choose the packaging that suits your product. Each one is filled with our formulation and supplied without a
            label, so you can add your own.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-x-4 gap-y-10 sm:grid-cols-3 lg:grid-cols-4">
          {plFormats.map((f) => (
            <article key={f.file} className="group flex flex-col">
              <div className="relative aspect-square overflow-hidden rounded-2xl bg-[radial-gradient(ellipse_at_50%_40%,#ffffff,#f1ebe1_75%)]">
                <Image
                  src={plImg(f.file)}
                  alt={`Unlabelled ${f.name.toLowerCase()}`}
                  fill
                  sizes="(min-width:1024px) 22vw, (min-width:640px) 30vw, 46vw"
                  className="object-contain p-8 drop-shadow-[0_12px_12px_rgba(60,45,20,0.18)] transition-transform duration-500 group-hover:scale-105 sm:p-10"
                />
              </div>
              <p className="mt-3 text-[11px] uppercase tracking-[0.18em] text-rose">Private label</p>
              <h3 className="mt-1 font-medium text-forest sm:text-lg">{f.name}</h3>
              <p className="mt-1 text-sm leading-snug text-muted">{f.use}</p>
              <div className="mt-auto grid gap-2 pt-4 sm:grid-cols-2">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-1.5 rounded-full border border-forest/20 px-3 py-2 text-xs font-medium text-forest transition-colors hover:border-forest hover:bg-forest hover:text-white sm:text-sm"
                >
                  Enquire <ArrowRight className="size-3.5" />
                </Link>
                <a
                  href={whatsappHref(`Hi Dermaplex, I'm interested in private label products in the "${f.name}". Please share details.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Ask about the ${f.name} on WhatsApp`}
                  className="inline-flex items-center justify-center gap-1.5 rounded-full border border-[#2f7a4b]/25 bg-[#e8f0e6] px-3 py-2 text-xs font-medium text-[#2f7a4b] transition-colors hover:border-[#2f7a4b] hover:bg-[#2f7a4b] hover:text-white sm:text-sm"
                >
                  <Whatsapp className="size-4" /> WhatsApp
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Process() {
  return (
    <section className="bg-sand py-16 lg:py-20">
      <div className={wide}>
        <div className="mx-auto max-w-2xl text-center">
          <p className="eyebrow">How it works</p>
          <h2 className="mt-3 font-serif text-4xl leading-tight text-forest sm:text-5xl">
            From Idea to <span className="script">Shelf</span>
          </h2>
        </div>
        <ol className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {plSteps.map(([title, text], i) => (
            <li key={title} className="relative rounded-3xl bg-white/80 p-7 shadow-[0_14px_40px_-26px_rgba(80,60,30,0.5)]">
              <span className="font-serif text-5xl text-rose/40">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="mt-3 font-serif text-xl text-forest">{title}</h3>
              <p className="mt-2 leading-relaxed text-muted">{text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function Range() {
  return (
    <section className="py-16 lg:py-20">
      <div className={`${wide} grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:gap-16`}>
        <div>
          <p className="eyebrow">Why partner with us</p>
          <h2 className="mt-3 font-serif text-4xl leading-tight text-forest sm:text-5xl">
            Built on <span className="script">Experience</span>
          </h2>
          <ul className="mt-8 space-y-6">
            {plWhy.map(([title, text], i) => {
              const Icon = whyIcons[i];
              return (
                <li key={title} className="flex gap-4">
                  <span className="grid size-12 shrink-0 place-items-center rounded-full bg-blush text-brand">
                    <Icon className="size-5" />
                  </span>
                  <div>
                    <h3 className="font-serif text-lg text-forest">{title}</h3>
                    <p className="mt-0.5 text-muted">{text}</p>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="rounded-[2rem] bg-sage p-6 sm:p-10">
          <h3 className="font-serif text-2xl text-forest sm:text-3xl">What We Can Make for You</h3>
          <p className="mt-2 text-muted">Product types available for private label across our three divisions.</p>
          <div className="mt-8 grid gap-8 sm:grid-cols-3">
            {collections.map((c) => (
              <div key={c.key}>
                <h4 className="font-medium text-forest">{c.title}</h4>
                <span className="mt-2 block h-0.5 w-8 bg-rose/60" />
                <ul className="mt-4 flex flex-wrap gap-2">
                  {c.subs.map((s) => (
                    <li key={s} className="rounded-full bg-white/80 px-3 py-1 text-sm text-ink/80">
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Cta() {
  return (
    <section className={`${wide} pb-16 lg:pb-20`}>
      <div className="relative overflow-hidden rounded-[2rem] bg-forest px-6 py-12 text-white sm:px-12 lg:py-14">
        <div className="absolute -right-20 -top-20 size-72 rounded-full bg-white/5" />
        <div className="absolute -bottom-24 right-40 size-56 rounded-full bg-white/5" />
        <div className="relative flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-xl">
            <h2 className="font-serif text-3xl leading-tight sm:text-4xl">Ready to Launch Your Own Brand?</h2>
            <p className="mt-3 leading-relaxed text-white/85">
              Tell us what you have in mind and our team will guide you on products, packaging and next steps.
            </p>
          </div>
          <EnquiryButtons light />
        </div>
      </div>
    </section>
  );
}

export default function PrivateLabelPage() {
  return (
    <>
      <Header />
      <main>
        <Banner />
        <Formats />
        <Process />
        <Range />
        <Cta />
      </main>
      <Footer />
    </>
  );
}
