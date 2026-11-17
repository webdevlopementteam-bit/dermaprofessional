"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import Logo from "./Logo";
import { navLinks, collections, subHref, catalogImg, catalogScenes, socialLinks, contact } from "@/lib/data";
import { Menu, Close, ChevronDown, ArrowRight, Phone, Mail, Facebook, Instagram, Youtube } from "./Icons";

const socialIcons = { Facebook, Instagram, YouTube: Youtube };

// Thin contact strip above the header; it scrolls away while the header stays sticky.
function TopBar() {
  return (
    <div className="bg-forest-deep text-white/90">
      <div className="mx-auto flex h-10 max-w-7xl items-center justify-between gap-4 px-4 text-[0.8rem] sm:px-6 sm:text-sm lg:px-8">
        <div className="flex items-center gap-5">
          <a href={`tel:${contact.phone.replace(/[^+d]/g, "")}`} className="inline-flex items-center gap-2 hover:text-[#e8c08f]">
            <Phone className="size-4 text-[#e8c08f]" /> {contact.phone}
          </a>
          <a href={`mailto:${contact.email}`} className="hidden items-center gap-2 hover:text-[#e8c08f] md:inline-flex">
            <Mail className="size-4 text-[#e8c08f]" /> {contact.email}
          </a>
        </div>
        <div className="flex items-center gap-2">
          {socialLinks.map(([label, href]) => {
            const Icon = socialIcons[label];
            return (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="grid size-7 place-items-center rounded-full bg-white transition-transform hover:-translate-y-0.5"
              >
                <Icon className="size-4" />
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
}

// Positioned against the sticky header (not the nav item), so the panel is centred on the page.
function MegaMenu() {
  return (
    <div className="invisible absolute inset-x-0 top-full z-50 translate-y-2 px-4 pt-3 opacity-0 transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100">
      <div className="mx-auto grid max-w-6xl grid-cols-[1fr_1.7fr_1fr_15rem] gap-7 rounded-3xl border border-forest/10 bg-white p-7 shadow-[0_30px_70px_-25px_rgba(31,61,44,0.4)]">
        {collections.map((c) => (
          <div key={c.key}>
            <Link href={`/products/${c.key}`} className="group/h flex items-center gap-3">
              <span className="relative size-14 shrink-0 overflow-hidden rounded-2xl" style={{ backgroundColor: c.bg }}>
                <Image src={catalogImg(catalogScenes[c.key].menu)} alt="" fill sizes="56px" className="object-contain p-1.5" />
              </span>
              <span>
                <span className="block font-serif text-lg leading-tight text-forest transition-colors group-hover/h:text-brand">
                  {c.title}
                </span>
                <span className="block text-[10px] uppercase tracking-[0.16em] text-muted">{c.tagline}</span>
              </span>
            </Link>
            <div className="my-4 h-px bg-forest/10" />
            <ul className={`grid gap-x-4 gap-y-1 text-[0.95rem] text-ink/75 ${c.subs.length > 8 ? "grid-cols-2" : ""}`}>
              {c.subs.map((s) => (
                <li key={s}>
                  <Link
                    href={subHref(c.key, s)}
                    className="group/l flex items-center gap-2 whitespace-nowrap rounded-lg px-2 py-1.5 transition-colors hover:bg-cream hover:text-forest"
                  >
                    <span className="size-1 rounded-full bg-rose/50 transition-colors group-hover/l:bg-brand" />
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <Link
          href="/products/skin/facial-kits"
          className="group/p relative flex min-h-64 flex-col justify-end overflow-hidden rounded-2xl p-5 text-white"
        >
          <span className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_30%,#4a7a5c,#1f3d2c_75%)]" />
          <span className="absolute inset-x-[18%] bottom-[38%] top-[6%] transition-transform duration-700 group-hover/p:scale-105">
            <Image
              src={catalogImg(catalogScenes.menuPromo)}
              alt="Derma Argan Protein Facial Kit"
              fill
              sizes="200px"
              className="object-contain drop-shadow-[0_14px_16px_rgba(0,0,0,0.35)]"
            />
          </span>
          <span className="absolute inset-x-0 bottom-0 h-1/2 bg-linear-to-t from-forest-deep via-forest-deep/80 to-transparent" />
          <span className="relative text-[10px] uppercase tracking-[0.2em] text-white/75">Skin care</span>
          <span className="relative mt-1 font-serif text-2xl leading-tight">Facial Kit Collection</span>
          <span className="relative mt-1 text-xs text-white/75">Premium, affordable &amp; salon kits</span>
          <span className="relative mt-3 inline-flex items-center gap-1.5 text-sm font-medium">
            Explore <ArrowRight />
          </span>
        </Link>
      </div>
    </div>
  );
}

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const isActive = (href) => (href === "/" ? pathname === "/" : pathname.startsWith(href));

  return (
    <>
      <TopBar />
      <header className="sticky top-0 z-50 border-b border-black/5 bg-cream/90 backdrop-blur">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-6 px-4 sm:px-6 lg:px-8">
          <Link href="/" aria-label="Dermaplex home">
            <Logo className="h-14 w-44 sm:h-16 sm:w-52" />
          </Link>
  
          <nav className="hidden items-center gap-6 self-stretch lg:flex xl:gap-9" aria-label="Main">
            {navLinks.map((l) =>
              l.mega ? (
                <div key={l.href} className="group flex items-center self-stretch">
                  <Link
                    href={l.href}
                    className="flex items-center gap-1 whitespace-nowrap text-base xl:text-[1.0625rem] text-ink/80 transition-colors hover:text-brand"
                  >
                    {l.label} <ChevronDown className="size-3.5 transition-transform group-hover:rotate-180" />
                  </Link>
                  <MegaMenu />
                </div>
              ) : (
                <Link
                  key={l.href}
                  href={l.href}
                  className={`whitespace-nowrap text-base xl:text-[1.0625rem] transition-colors hover:text-brand ${
                    isActive(l.href) ? "font-medium text-leaf" : "text-ink/80"
                  }`}
                >
                  {l.label}
                </Link>
              )
            )}
          </nav>
  
          <div className="flex items-center gap-3">
            <Link
              href="/contact"
              className="hidden rounded-full bg-forest px-6 py-3 text-[0.95rem] font-medium text-white transition-colors hover:bg-forest-deep sm:inline-block lg:hidden xl:inline-block"
            >
              Get in Touch
            </Link>
            <button
              type="button"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
              className="rounded-full p-2 text-forest lg:hidden"
            >
              {open ? <Close /> : <Menu />}
            </button>
          </div>
        </div>
  
        {open && (
          <nav
            className="max-h-[calc(100vh-5rem)] overflow-y-auto border-t border-black/5 bg-cream px-4 pb-6 pt-2 lg:hidden"
            aria-label="Mobile"
          >
            {navLinks.map((l) =>
              l.mega ? (
                <div key={l.href} className="border-b border-black/5 py-3">
                  <Link
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className={`text-lg ${isActive(l.href) ? "font-medium text-leaf" : "text-ink/85"}`}
                  >
                    {l.label}
                  </Link>
                  {collections.map((c) => (
                    <details key={c.key} className="group/d mt-2 pl-3">
                      <summary className="flex cursor-pointer items-center justify-between py-1.5 text-base font-medium text-forest">
                        {c.title} <ChevronDown className="size-4 transition-transform group-open/d:rotate-180" />
                      </summary>
                      <Link
                        href={`/products/${c.key}`}
                        onClick={() => setOpen(false)}
                        className="mb-1 mt-1 inline-flex items-center gap-1 pl-1 text-sm font-medium text-brand"
                      >
                        View all {c.title} <ArrowRight className="size-3.5" />
                      </Link>
                      <ul className="grid grid-cols-2 gap-x-4 gap-y-1 pb-2 pl-1 text-[0.95rem] text-ink/70">
                        {c.subs.map((s) => (
                          <li key={s}>
                            <Link href={subHref(c.key, s)} onClick={() => setOpen(false)} className="block py-1">
                              {s}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </details>
                  ))}
                  <Link
                    href="/products/skin/facial-kits"
                    onClick={() => setOpen(false)}
                    className="mt-3 flex items-center gap-3 rounded-2xl bg-[radial-gradient(ellipse_at_30%_30%,#4a7a5c,#1f3d2c_75%)] p-3 text-white"
                  >
                    <span className="relative size-14 shrink-0">
                      <Image
                        src={catalogImg(catalogScenes.menuPromo)}
                        alt=""
                        fill
                        sizes="56px"
                        className="object-contain drop-shadow-[0_6px_8px_rgba(0,0,0,0.35)]"
                      />
                    </span>
                    <span className="flex-1">
                      <span className="block text-[10px] uppercase tracking-[0.2em] text-white/75">Skin care</span>
                      <span className="block font-serif text-lg leading-tight">Facial Kit Collection</span>
                    </span>
                    <ArrowRight className="mr-1 size-4" />
                  </Link>
                </div>
              ) : (
                <Link
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className={`block border-b border-black/5 py-3 ${isActive(l.href) ? "font-medium text-leaf" : "text-ink/85"}`}
                >
                  {l.label}
                </Link>
              )
            )}
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="mt-4 inline-block rounded-full bg-forest px-6 py-3 text-base font-medium text-white"
            >
              Get in Touch
            </Link>
          </nav>
        )}
      </header>
    </>
  );
}
