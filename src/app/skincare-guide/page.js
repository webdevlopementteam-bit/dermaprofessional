import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageBanner from "@/components/PageBanner";
import ConcernExplorer from "@/components/ConcernExplorer";
import { Bottle, Dropper, Jar, Sun, Plus, Minus, Leaf } from "@/components/Icons";
import { guideTabs, skinTypes, routine, ingredients, concerns, tips, guideFaqs, guideBanner } from "@/lib/guide";

export const metadata = {
  title: "Skincare Guide | Dermaplex Professional",
  description: "Skin types, a simple daily routine, key ingredients and common skin concerns — expert skincare guidance from Dermaplex.",
};

const wide = "mx-auto w-full max-w-[1760px] px-4 sm:px-8 lg:px-12";
const routineIcons = { bottle: Bottle, dropper: Dropper, jar: Jar, sun: Sun };


function Heading({ id, eyebrow, title, text }) {
  return (
    <div id={id} className="scroll-mt-36">
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="mt-2 font-serif text-4xl text-forest sm:text-5xl">{title}</h2>
      {text && <p className="mt-3 text-muted">{text}</p>}
    </div>
  );
}

export default function SkincareGuidePage() {
  return (
    <>
      <Header />
      <main>
        <PageBanner
          crumbs={[["Home", "/"], ["Skincare Guide"]]}
          eyebrow="Expert skincare guidance"
          title="Skincare Guide"
          text="Simple steps for healthier, brighter & more radiant skin."
          {...guideBanner}
        />

        <nav aria-label="Guide sections" className="sticky top-20 z-30 border-b border-forest/10 bg-cream/95 backdrop-blur">
          <ul className={`${wide} no-scrollbar flex gap-2 overflow-x-auto py-3`}>
            {guideTabs.map(([label, id]) => (
              <li key={id} className="shrink-0">
                <a
                  href={`#${id}`}
                  className="inline-block rounded-full border border-forest/15 bg-white px-4 py-1.5 text-sm text-ink/80 transition-colors hover:border-forest hover:bg-forest hover:text-white"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className={`${wide} space-y-20 py-16 lg:space-y-24 lg:py-20`}>
          {/* Skin types */}
          <section>
            <Heading
              id="skin-types"
              eyebrow="Understand your skin"
              title="Skin Types"
              text="Identify your skin type to choose the right products and care routine."
            />
            <ul className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
              {skinTypes.map((t) => (
                <li key={t.name} className="flex flex-col items-center rounded-3xl border border-forest/10 bg-white/70 p-5 text-center">
                  {/* Photos are face close-ups; zoom into the cheek so the skin texture shows. */}
                  <span className="relative size-28 overflow-hidden rounded-full ring-4 ring-white sm:size-32">
                    <Image src={t.photo} alt={t.name} fill sizes="128px" className="scale-[2.2] object-cover object-[48%_62%]" />
                  </span>
                  <h3 className="mt-4 font-serif text-xl text-forest">{t.name}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted">{t.text}</p>
                </li>
              ))}
            </ul>
          </section>

          {/* Daily routine */}
          <section>
            <Heading
              id="routine"
              eyebrow="Daily care essentials"
              title="Daily Skincare Routine"
              text="A simple step-by-step routine for healthy and glowing skin."
            />
            <ol className="mt-10 grid grid-cols-2 gap-x-4 gap-y-10 lg:grid-cols-4">
              {routine.map((r, i) => {
                const Icon = routineIcons[r.icon];
                return (
                  <li key={r.step} className="relative flex flex-col items-center text-center">
                    <span className="grid size-20 place-items-center rounded-full bg-[#e3ecdc] text-forest">
                      <Icon className="size-8" />
                    </span>
                    <p className="mt-4 text-sm text-muted">Step {r.step}</p>
                    <h3 className="font-serif text-2xl text-forest">{r.title}</h3>
                    <p className="mt-2 max-w-[14rem] text-sm leading-relaxed text-muted">{r.text}</p>
                    {i < routine.length - 1 && (
                      <span className="absolute -right-2 top-8 hidden text-2xl text-forest/40 lg:block" aria-hidden>
                        ›
                      </span>
                    )}
                  </li>
                );
              })}
            </ol>
          </section>

          {/* Ingredients */}
          <section>
            <Heading
              id="ingredients"
              eyebrow="Key ingredients"
              title="Ingredients That Make a Difference"
              text="Discover the powerful ingredients used in skincare and their benefits."
            />
            <ul className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
              {ingredients.map((g) => (
                <li key={g.name} className="overflow-hidden rounded-3xl border border-forest/10 bg-white/70">
                  <div className="relative aspect-[3/2]">
                    <Image src={g.photo} alt={g.name} fill sizes="(min-width:1024px) 20vw, 50vw" className="object-cover" />
                  </div>
                  <div className="p-4 sm:p-5">
                    <h3 className="font-serif text-lg text-forest sm:text-xl">{g.name}</h3>
                    <p className="mt-1 text-sm text-muted">{g.text}</p>
                  </div>
                </li>
              ))}
            </ul>
          </section>

          {/* Concerns */}
          <section>
            <Heading
              id="concerns"
              eyebrow="Common skin concerns"
              title="Skin Concerns"
              text="Learn about common skin concerns and how to manage them."
            />
            <ConcernExplorer concerns={concerns} />
          </section>

          {/* Tips */}
          <section>
            <Heading id="tips" eyebrow="Expert advice" title="Skincare Tips" text="Small habits that make a big difference." />
            <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {tips.map(([title, text], i) => (
                <li key={title} className="flex gap-4 rounded-3xl border border-forest/10 bg-white/70 p-6">
                  <span className="grid size-11 shrink-0 place-items-center rounded-full bg-forest font-serif text-white">
                    {i + 1}
                  </span>
                  <div>
                    <h3 className="font-serif text-xl text-forest">{title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted">{text}</p>
                  </div>
                </li>
              ))}
            </ul>
          </section>

          {/* FAQs */}
          <section className="grid gap-8 lg:grid-cols-[1fr_1.6fr]">
            <div>
              <Heading id="faqs" eyebrow="Frequently asked questions" title="Skincare FAQs" />
              <p className="mt-3 flex items-center gap-2 text-muted">
                <Leaf className="size-4 text-leaf" /> Quick answers to common skincare questions.
              </p>
            </div>
            <div className="divide-y divide-forest/10 overflow-hidden rounded-3xl border border-forest/10 bg-white/60">
              {guideFaqs.map((f, i) => (
                <details key={f.q} open={i === 0} className="group px-6 py-5 open:bg-white/70 sm:px-8">
                  <summary className="flex cursor-pointer items-center justify-between gap-4 font-serif text-lg text-forest">
                    {f.q}
                    <span className="grid size-9 shrink-0 place-items-center rounded-full border border-forest/30 text-forest">
                      <Plus className="size-4 group-open:hidden" />
                      <Minus className="hidden size-4 group-open:block" />
                    </span>
                  </summary>
                  <p className="mt-3 leading-relaxed text-muted">{f.a}</p>
                </details>
              ))}
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
