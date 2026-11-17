import Image from "next/image";
import Link from "next/link";
import { Swoosh } from "./Icons";
import ProductScene from "./ProductScene";

const wide = "mx-auto w-full max-w-[1760px] px-4 sm:px-8 lg:px-12";

// Banner for inner product pages: breadcrumb + title on the left with, on the right, one of:
//  - cover: a full-bleed photo whose left side is empty for the text (optional coverMobile:
//    a portrait photo with empty top that fills the banner on small screens),
//  - photo: a photo in the right half that fades into the banner colour,
//  - scene: product cutouts on a soft pedestal (placeholder until photography arrives).
export default function PageBanner({
  crumbs,
  eyebrow,
  title,
  script,
  text,
  photo,
  scene,
  cover,
  coverMobile,
  // width/height of the mobile photo, so it is shown uncropped
  coverMobileRatio = "941/1672",
  // true for very wide photos (≈2.5:1+) that can fill the banner; others sit in the right 62%
  coverWide = false,
  mobileBg,
  bg = "#f4e7d6",
  children,
}) {
  return (
    <section className="relative overflow-hidden" style={{ backgroundColor: bg, "--banner-mobile-bg": mobileBg || bg }}>
      {cover && (
        <div
          className={`absolute hidden ${coverWide ? "inset-0" : "inset-y-0 right-0 w-[62%]"} ${
            coverMobile ? "lg:block" : "md:block"
          }`}
        >
          <Image src={cover} alt="" fill priority sizes={coverWide ? "100vw" : "62vw"} className="object-cover object-right" />
          <div
            className={`absolute inset-y-0 left-0 ${coverWide ? "w-[40%]" : "w-1/4"}`}
            style={{ background: `linear-gradient(to right, ${bg}${coverWide ? "cc" : ""}, ${bg}00)` }}
          />
        </div>
      )}
      {cover && coverMobile && (
        // Pinned to the bottom at its natural ratio; anything above it is the photo's top colour,
        // so a tall text block never pushes the products under the text.
        <div className="absolute inset-0 bg-(--banner-mobile-bg) lg:hidden">
          <div className="absolute inset-x-0 bottom-0" style={{ aspectRatio: coverMobileRatio }}>
            <Image src={coverMobile} alt="" fill priority sizes="100vw" className="object-cover" />
            <div className="absolute inset-x-0 top-0 h-1/4 bg-linear-to-b from-(--banner-mobile-bg) to-transparent" />
          </div>
        </div>
      )}
      {scene && !cover && (
        <ProductScene
          items={scene}
          bg={bg}
          sizes="(min-width:1024px) 25vw, 60vw"
          className="aspect-[4/3] sm:aspect-[16/9] lg:absolute lg:inset-y-0 lg:right-0 lg:aspect-auto lg:w-[52%]"
        />
      )}
      {photo && (
        <div className="relative aspect-[4/3] sm:aspect-[16/9] lg:absolute lg:inset-y-0 lg:right-0 lg:aspect-auto lg:w-[52%]">
          <Image src={encodeURI(photo)} alt="" fill priority sizes="(min-width:1024px) 52vw, 100vw" className="object-cover" />
          <div
            className="absolute inset-y-0 left-0 hidden w-1/3 lg:block"
            style={{ background: `linear-gradient(to right, ${bg}, ${bg}00)` }}
          />
          <div
            className="absolute inset-x-0 bottom-0 h-1/4 lg:hidden"
            style={{ background: `linear-gradient(to top, ${bg}, ${bg}00)` }}
          />
        </div>
      )}
      <div
        className={`${wide} relative grid lg:content-center lg:py-16 ${
          cover && coverMobile
            ? "min-h-[177.7vw] content-start pb-[96vw] pt-16 lg:min-h-[34rem] lg:pb-16"
            : cover
              ? "py-12 md:min-h-[28rem] md:content-center lg:min-h-[32rem]"
              : "py-12 lg:min-h-[26rem]"
        }`}
      >
        {/* On the mobile photo banners the text sits on a busy photo, so it is set darker there. */}
        <div className={`max-w-xl ${coverMobile ? "max-lg:[&_.eyebrow]:text-ink" : ""}`}>
          <nav
            aria-label="Breadcrumb"
            className={`flex flex-wrap items-center gap-2 text-xs uppercase tracking-[0.2em] ${coverMobile ? "text-ink/85 lg:text-muted" : "text-muted"}`}
          >
            {crumbs.map(([label, href], i) => (
              <span key={label} className="flex items-center gap-2">
                {i > 0 && <span className="text-rose">/</span>}
                {href ? (
                  <Link href={href} className="hover:text-brand">
                    {label}
                  </Link>
                ) : (
                  <span className="font-medium text-forest">{label}</span>
                )}
              </span>
            ))}
          </nav>
          {eyebrow && <p className="eyebrow mt-6">{eyebrow}</p>}
          <h1 className="mt-3 font-serif text-[2.6rem] leading-[1.05] text-forest sm:text-6xl">
            {title} {script && <span className="script">{script}</span>}
          </h1>
          {script && <Swoosh className="ml-[30%] mt-1 w-24 text-rose" />}
          {text && (
            <p className={`mt-4 max-w-md leading-relaxed sm:text-lg ${coverMobile ? "text-ink max-lg:max-w-[17rem] max-lg:text-[0.95rem] max-lg:font-medium lg:text-ink/75" : "text-ink/75"}`}>
              {text}
            </p>
          )}
          {children}
        </div>
      </div>

      {/* Cover without a mobile version: show the photo under the text on small screens. */}
      {cover && !coverMobile && (
        <div className="relative aspect-[16/10] md:hidden">
          <Image src={cover} alt="" fill sizes="100vw" className="object-cover object-[62%_center]" />
          <div className="absolute inset-x-0 top-0 h-1/4" style={{ background: `linear-gradient(to bottom, ${bg}, ${bg}00)` }} />
        </div>
      )}
    </section>
  );
}
