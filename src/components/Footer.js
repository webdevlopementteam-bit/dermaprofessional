import Image from "next/image";
import Link from "next/link";
import Logo from "./Logo";
import { navLinks, collections, subHref, socialLinks, contact, directionsHref } from "@/lib/data";
import { Leaf, Heart, Sparkle, Facebook, Instagram, Youtube, Phone, Mail, MapPin } from "./Icons";

const socialIcons = { Facebook, Instagram, YouTube: Youtube };

const wide = "mx-auto w-full max-w-[1760px] px-4 sm:px-8 lg:px-12";

function ColumnTitle({ children }) {
  return (
    <>
      <h4 className="font-serif text-xl text-white sm:text-2xl">{children}</h4>
      <span className="mt-3 block h-0.5 w-8 bg-[#d9a066]" />
    </>
  );
}

export default function Footer() {
  const columns = [
    ["Quick Links", navLinks.map((l) => [l.label, l.href])],
    ...collections.map((c) => [c.title, c.subs.slice(0, 6).map((s) => [s, subHref(c.key, s)])]),
  ];
  return (
    <footer className="relative overflow-hidden bg-forest-deep text-white">
      <Image src="/footer-bg.jpg" alt="" fill sizes="100vw" className="object-cover" />
      {/* Calms the leaves in the corners so the text on top stays readable. */}
      <div className="absolute inset-0 bg-linear-to-b from-forest-deep/75 via-forest-deep/60 to-forest-deep/90" />

      <div className={`${wide} relative`}>
        {/* Brand + social */}
        <div className="flex flex-col gap-8 border-b border-white/15 py-12 lg:flex-row lg:items-center lg:justify-between lg:py-14">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:gap-8">
            <Logo onDark className="h-16 w-52 shrink-0" />
            <p className="max-w-md text-lg leading-relaxed text-white/90">
              Professional care for healthier skin and hair with trusted formulations.
            </p>
          </div>
          <div>
            <h3 className="font-serif text-2xl">Stay Connected</h3>
            <p className="mt-1 text-white/80">Follow us for the latest updates and skincare tips.</p>
            <div className="mt-4 flex gap-3">
              {socialLinks.map(([label, href]) => {
                const Icon = socialIcons[label];
                return (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="grid size-12 place-items-center rounded-full bg-white shadow-md transition-transform hover:-translate-y-0.5"
                  >
                    <Icon className="size-6" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Links + contact */}
        <div className="grid grid-cols-2 gap-x-6 gap-y-10 py-12 sm:grid-cols-3 lg:grid-cols-5 lg:py-14">
          {columns.map(([title, links]) => (
            <div key={title}>
              <ColumnTitle>{title}</ColumnTitle>
              <ul className="mt-5 space-y-3 text-white/85 sm:text-[1.05rem]">
                {links.map(([l, href]) => (
                  <li key={l}>
                    <Link href={href} className="transition-colors hover:text-[#e8c08f]">
                      {l}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="col-span-2 sm:col-span-1">
            <ColumnTitle>Contact Us</ColumnTitle>
            <ul className="mt-5 space-y-4 text-white/85 sm:text-[1.05rem]">
              <li>
                <a href={`tel:${contact.phone.replace(/[^+\d]/g, "")}`} className="inline-flex items-center gap-3 hover:text-[#e8c08f]">
                  <Phone className="size-5 shrink-0 text-[#e8c08f]" /> {contact.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${contact.email}`} className="inline-flex items-center gap-3 break-all text-[0.95rem] hover:text-[#e8c08f] lg:text-sm">
                  <Mail className="size-5 shrink-0 text-[#e8c08f]" /> {contact.email}
                </a>
              </li>
              <li>
                <a
                  href={directionsHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-start gap-3 hover:text-[#e8c08f]"
                >
                  <MapPin className="mt-0.5 size-5 shrink-0 text-[#e8c08f]" />
                  <span>
                    {contact.address[0]} {contact.address[1]}
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col gap-4 border-t border-white/15 py-6 text-white/85 md:flex-row md:items-center md:justify-between md:gap-8">
          <p>
            © 2026 Dermaplex Professional. All Rights Reserved.{" "}
            <span className="whitespace-nowrap">
              Powered by{" "}
              <a
                href="https://www.cybertricksmedia.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-[#e8c08f] underline-offset-4 hover:underline"
              >
                Cybertricksmedia Pvt Ltd
              </a>
            </span>
          </p>
          <ul className="flex flex-wrap items-center gap-x-6 gap-y-2">
            {[
              [Leaf, "Pure Care"],
              [Heart, "Real Results"],
              [Sparkle, "A Healthier You"],
            ].map(([Icon, t]) => (
              <li key={t} className="flex items-center gap-2">
                <Icon className="size-4 text-[#e8c08f]" /> {t}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
