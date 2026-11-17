// Full-width home banner video. Always muted (no sound control), which also lets browsers autoplay it.
export default function VideoBanner({ src, poster, label }) {
  return (
    <section id="home" aria-label={label} className="relative bg-cream">
      <video
        src={src}
        poster={poster}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        disablePictureInPicture
        className="block aspect-video max-h-[calc(100vh-7.5rem)] w-full object-cover"
      />

      {/* A very light wash of the page colour, fading fully into it at the bottom. */}
      <div className="pointer-events-none absolute inset-0 bg-cream/10" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/4 bg-linear-to-t from-cream via-cream/40 to-transparent" />
    </section>
  );
}
