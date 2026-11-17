import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageBanner from "@/components/PageBanner";
import ProductCard from "@/components/ProductCard";
import { ArrowRight } from "@/components/Icons";
import { collections, subSections, catalogScenes } from "@/lib/data";

const wide = "mx-auto w-full max-w-[1760px] px-4 sm:px-8 lg:px-12";
// How many products a sub-category with its own page previews here.
const PREVIEW = 6;

export function generateStaticParams() {
  return collections.map((c) => ({ category: c.key }));
}

export async function generateMetadata({ params }) {
  const { category } = await params;
  const c = collections.find((x) => x.key === category);
  return c ? { title: `${c.title} | Dermaplex Professional`, description: c.tagline } : {};
}

export default async function CategoryPage({ params }) {
  const { category } = await params;
  const c = collections.find((x) => x.key === category);
  if (!c) notFound();

  const sections = subSections(c.key);
  const withProducts = sections.filter((s) => s.products.length);
  const comingSoon = sections.filter((s) => !s.products.length);

  return (
    <>
      <Header />
      <main>
        <PageBanner
          crumbs={[["Home", "/"], ["Products", "/products"], [c.title]]}
          eyebrow={c.tagline}
          title={c.title}
          text={`${withProducts.reduce((n, s) => n + s.products.length, 0)} products across ${withProducts.length} categories.`}
          cover={catalogScenes[c.key].bannerImage}
          coverMobile={catalogScenes[c.key].bannerMobile}
          coverMobileRatio={catalogScenes[c.key].mobileRatio}
          bg={catalogScenes[c.key].bannerBg}
          mobileBg={catalogScenes[c.key].mobileBg}
        />

        {/* Sub-category jump links */}
        <nav aria-label={`${c.title} categories`} className="sticky top-20 z-30 border-b border-forest/10 bg-cream/95 backdrop-blur">
          <ul className={`${wide} no-scrollbar flex gap-2 overflow-x-auto py-3`}>
            {withProducts.map((s) => (
              <li key={s.slug} className="shrink-0">
                <a
                  href={`#${s.slug}`}
                  className="inline-block rounded-full border border-forest/15 bg-white px-4 py-1.5 text-sm text-ink/80 transition-colors hover:border-forest hover:bg-forest hover:text-white"
                >
                  {s.name} <span className="opacity-60">({s.products.length})</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className={`${wide} space-y-14 py-14 lg:space-y-16 lg:py-16`}>
          {withProducts.map((s) => {
            const shown = s.ownPage ? s.products.slice(0, PREVIEW) : s.products;
            return (
              <section key={s.slug} id={s.slug} className="scroll-mt-36">
                <div className="flex flex-wrap items-end justify-between gap-4 border-b border-forest/10 pb-4">
                  <div>
                    <h2 className="font-serif text-2xl text-forest lg:text-3xl">{s.name}</h2>
                    <p className="mt-1 text-sm text-muted">
                      {s.products.length} {s.products.length === 1 ? "product" : "products"}
                    </p>
                  </div>
                  {s.ownPage && (
                    <Link
                      href={`/products/${c.key}/${s.slug}`}
                      className="inline-flex items-center gap-2 rounded-full bg-forest px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-forest-deep"
                    >
                      View all {s.products.length} <ArrowRight />
                    </Link>
                  )}
                </div>
                <div className="mt-8 grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
                  {shown.map((p) => (
                    <ProductCard key={p.name} product={p} />
                  ))}
                </div>
              </section>
            );
          })}

          {comingSoon.length > 0 && (
            <section id="coming-soon" className="scroll-mt-36 rounded-[2rem] bg-white/70 p-6 sm:p-8">
              <h2 className="font-serif text-2xl text-forest">Coming Soon</h2>
              <p className="mt-1 text-sm text-muted">
                More {c.title.toLowerCase()} ranges are on the way. Contact us for availability.
              </p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {comingSoon.map((s) => (
                  <li key={s.slug} className="rounded-full border border-dashed border-forest/25 px-4 py-1.5 text-sm text-ink/70">
                    {s.name}
                  </li>
                ))}
              </ul>
            </section>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}

