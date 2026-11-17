import Image from "next/image";
import { catalogImg } from "@/lib/data";

// A soft studio scene: product cutouts standing on a pale pedestal over a radial glow.
// Placeholder until dedicated photography is supplied for each slot.
export default function ProductScene({ items, bg = "#f4e7d6", className = "", sizes = "30vw" }) {
  const wide = items.length > 1;
  return (
    <div
      className={`relative overflow-hidden ${className}`}
      style={{ background: `radial-gradient(ellipse at 50% 40%, #ffffffcc, ${bg} 70%)` }}
    >
      <div className="absolute inset-x-[12%] bottom-[9%] h-[14%] rounded-[50%] bg-white/55 shadow-[0_18px_30px_-18px_rgba(60,45,20,0.45)]" />
      <div className={`absolute inset-x-[14%] bottom-[15%] top-[12%] flex items-end justify-center ${wide ? "gap-[2%]" : ""}`}>
        {items.map((name, i) => (
          <div
            key={name}
            className={`relative h-full ${wide ? (i === 1 ? "z-10 w-[40%]" : "w-[32%] h-[88%]") : "w-[70%]"}`}
          >
            <Image
              src={catalogImg(name)}
              alt=""
              fill
              sizes={sizes}
              className="object-contain object-bottom drop-shadow-[0_16px_18px_rgba(60,45,20,0.3)]"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
