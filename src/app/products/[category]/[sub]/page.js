import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageBanner from "@/components/PageBanner";
import ProductCard from "@/components/ProductCard";
import { collections, subSections, facialKits, catalogScenes } from "@/lib/data";

const wide = "mx-auto w-full max-w-[1760px] px-4 sm:px-8 lg:px-12";

// Only sub-categories too big for a section on the category page get their own page.
export function generateStaticParams() {
  return collections.flatMap((c) =>
    subSections(c.key)
      .filter((s) => s.ownPage)
      .map((s) => ({ category: c.key, sub: s.slug }))
  );
}


const find = (category, sub) => {
  const c = collections.find((x) => x.key === category);
  const s = c && subSections(c.key).find((x) => x.slug === sub && x.ownPage);
  return { c, s };
};

export async function generateMetadata({ params }) {
  const { category, sub } = await params;
  const { s } = find(category, sub);
  return s ? { title: `${s.name} | Dermaplex Professional` } : {};
}

export default async function SubCategoryPage({ params }) {
  const { category, sub } = await params;
  const { c, s } = find(category, sub);
  if (!s) notFound();

  return (
    <>
      <Header />
      <main>
        <PageBanner
          crumbs={[["Home", "/"], ["Products", "/products"], [c.title, `/products/${c.key}`], [s.name]]}
          eyebrow={c.title}
          title={s.name}
          text={`${s.products.length} products in our ${s.name.toLowerCase()} range.`}
          {...(s.slug === "facial-kits"
            ? {
                cover: catalogScenes.facialKitsBanner.image,
                coverMobile: catalogScenes.facialKitsBanner.mobile,
                coverWide: true,
                bg: catalogScenes.facialKitsBanner.bg,
                mobileBg: catalogScenes.facialKitsBanner.mobileBg,
              }
            : {
                cover: catalogScenes[c.key].bannerImage,
                coverMobile: catalogScenes[c.key].bannerMobile,
                coverMobileRatio: catalogScenes[c.key].mobileRatio,
                bg: catalogScenes[c.key].bannerBg,
                mobileBg: catalogScenes[c.key].mobileBg,
              })}
        />

        {s.slug === "facial-kits" && (
          <section className="border-b border-forest/10 bg-white/60">
            <ul className={`${wide} grid grid-cols-2 gap-3 py-8 lg:grid-cols-4`}>
              {facialKits.map((k) => (
                <li key={k.name + k.steps} className="rounded-2xl border border-forest/10 bg-white p-4 text-center">
                  <p className="text-sm font-medium text-forest">{k.name}</p>
                  <p className="mt-1 font-serif text-2xl text-[#c9944a]">{k.steps}</p>
                  <p className="text-xs text-muted">{k.use}</p>
                </li>
              ))}
            </ul>
          </section>
        )}

        <section className={`${wide} py-14 lg:py-16`}>
          <div className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
            {s.products.map((p) => (
              <ProductCard key={p.name} product={p} />
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
