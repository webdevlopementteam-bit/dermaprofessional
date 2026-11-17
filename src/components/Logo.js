import Image from "next/image";

// The logo file is a square JPG with lots of white space; crop to the wordmark.
export default function Logo({ className = "h-12 w-40", onDark = false }) {
  return (
    <span
      className={`relative block overflow-hidden ${onDark ? "rounded-xl bg-white" : ""} ${className}`}
    >
      <Image
        src="/logo.jpg"
        alt="Dermaplex Professional"
        fill
        sizes="200px"
        className={`object-cover object-center ${onDark ? "" : "mix-blend-multiply"}`}
        priority
      />
    </span>
  );
}
