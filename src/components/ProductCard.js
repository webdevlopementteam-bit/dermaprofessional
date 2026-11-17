import Image from "next/image";
import Link from "next/link";
import { whatsappHref } from "@/lib/data";
import { ArrowRight, Whatsapp } from "./Icons";

export default function ProductCard({ product }) {
  return (
    <article className="group flex flex-col">
      <div className="relative aspect-square overflow-hidden rounded-2xl bg-[#f4efe6]">
        <Image
          src={product.src}
          alt={product.name}
          fill
          sizes="(min-width:1280px) 18vw, (min-width:768px) 30vw, 46vw"
          className="object-contain p-4 mix-blend-multiply transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <p className="mt-3 text-[11px] uppercase tracking-[0.18em] text-rose">{product.tag}</p>
      <h3 className="mt-1 text-sm font-medium text-forest sm:text-base">{product.name}</h3>
      <div className="mt-auto grid gap-2 pt-3">
        <Link
          href="/contact"
          className="inline-flex items-center justify-center gap-1.5 rounded-full border border-forest/20 px-3 py-2 text-xs font-medium text-forest transition-colors hover:border-forest hover:bg-forest hover:text-white sm:text-sm"
        >
          Enquire Now <ArrowRight className="size-3.5" />
        </Link>
        <a
          href={whatsappHref(`Hi Dermaplex, I'm interested in "${product.name}". Please share details and price.`)}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Ask about ${product.name} on WhatsApp`}
          className="inline-flex items-center justify-center gap-1.5 rounded-full border border-[#2f7a4b]/25 bg-[#e8f0e6] px-3 py-2 text-xs font-medium text-[#2f7a4b] transition-colors hover:border-[#2f7a4b] hover:bg-[#2f7a4b] hover:text-white sm:text-sm"
        >
          <Whatsapp className="size-4" /> WhatsApp
        </a>
      </div>
    </article>
  );
}
