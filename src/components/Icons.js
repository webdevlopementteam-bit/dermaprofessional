const base = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": true,
};

export const ArrowRight = ({ className = "size-4" }) => (
  <svg viewBox="0 0 24 24" className={className} {...base}>
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);

export const ArrowLeft = ({ className = "size-4" }) => (
  <svg viewBox="0 0 24 24" className={className} {...base}>
    <path d="M19 12H5M11 6l-6 6 6 6" />
  </svg>
);

export const Search = ({ className = "size-5" }) => (
  <svg viewBox="0 0 24 24" className={className} {...base}>
    <circle cx="11" cy="11" r="7" />
    <path d="m20 20-3.5-3.5" />
  </svg>
);

export const Leaf = ({ className = "size-5" }) => (
  <svg viewBox="0 0 24 24" className={className} {...base}>
    <path d="M5 19c0-8 5-13 14-14-1 9-6 14-14 14Z" />
    <path d="M5 19 13 11" />
  </svg>
);

export const Drop = ({ className = "size-5" }) => (
  <svg viewBox="0 0 24 24" className={className} {...base}>
    <path d="M12 3s6 6.5 6 11a6 6 0 0 1-12 0c0-4.5 6-11 6-11Z" />
    <path d="M9.5 14.5a2.5 2.5 0 0 0 2.5 2.5" />
  </svg>
);

export const Sparkle = ({ className = "size-5" }) => (
  <svg viewBox="0 0 24 24" className={className} {...base}>
    <path d="M12 3v4M12 17v4M3 12h4M17 12h4M6 6l2.5 2.5M15.5 15.5 18 18M6 18l2.5-2.5M15.5 8.5 18 6" />
    <circle cx="12" cy="12" r="2.5" />
  </svg>
);

export const Flask = ({ className = "size-5" }) => (
  <svg viewBox="0 0 24 24" className={className} {...base}>
    <path d="M9 3h6M10 3v6l-5 9a2 2 0 0 0 1.8 3h10.4a2 2 0 0 0 1.8-3l-5-9V3" />
    <path d="M7.5 14h9" />
  </svg>
);

export const Heart = ({ className = "size-5" }) => (
  <svg viewBox="0 0 24 24" className={className} {...base}>
    <path d="M12 20s-7-4.5-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 5.5-7 10-7 10Z" />
  </svg>
);

export const Sun = ({ className = "size-5" }) => (
  <svg viewBox="0 0 24 24" className={className} {...base}>
    <circle cx="12" cy="12" r="4" />
    <path d="M12 2v2M12 20v2M2 12h2M20 12h2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
  </svg>
);

export const Bubbles = ({ className = "size-5" }) => (
  <svg viewBox="0 0 24 24" className={className} {...base}>
    <circle cx="9" cy="14" r="5" />
    <circle cx="17" cy="7" r="3" />
    <circle cx="18" cy="16" r="1.5" />
  </svg>
);

export const Shield = ({ className = "size-5" }) => (
  <svg viewBox="0 0 24 24" className={className} {...base}>
    <path d="M12 3 5 6v6c0 4.5 3 7.5 7 9 4-1.5 7-4.5 7-9V6l-7-3Z" />
    <path d="m9 12 2 2 4-4" />
  </svg>
);

export const Face = ({ className = "size-5" }) => (
  <svg viewBox="0 0 24 24" className={className} {...base}>
    <path d="M12 3c-4 0-6.5 3-6.5 7.5 0 5 3 10.5 6.5 10.5s6.5-5.5 6.5-10.5C18.5 6 16 3 12 3Z" />
    <path d="M9 10.5h1.5M13.5 10.5H15M10.5 15.5c1 .7 2 .7 3 0" />
  </svg>
);

export const SunShield = ({ className = "size-5" }) => (
  <svg viewBox="0 0 24 24" className={className} {...base}>
    <path d="M12 3 5 6v6c0 4.5 3 7.5 7 9 4-1.5 7-4.5 7-9V6l-7-3Z" />
    <circle cx="12" cy="12" r="2.3" />
    <path d="M12 7.5v1.2M12 15.3v1.2M7.5 12h1.2M15.3 12h1.2" />
  </svg>
);

export const ChevronDown = ({ className = "size-3.5" }) => (
  <svg viewBox="0 0 24 24" className={className} {...base}>
    <path d="m6 9 6 6 6-6" />
  </svg>
);

export const CurvedArrow = ({ className = "w-20" }) => (
  <svg viewBox="0 0 90 30" className={className} {...base} strokeWidth={1.4}>
    <path d="M3 24C25 6 55 4 84 14" />
    <path d="m77 7 7 7-9 3" />
  </svg>
);

export const Star =({ className = "size-4" }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden>
    <path d="m12 3 2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1-4.4-4.3 6.1-.9L12 3Z" />
  </svg>
);

// Decorative line-art sprig used as a corner ornament.
export const LeafBranch = ({ className = "w-40" }) => (
  <svg viewBox="0 0 160 170" className={className} {...base} strokeWidth={1.1}>
    <path d="M150 4C120 40 92 80 40 166" />
    <path d="M128 38c-18-2-30 6-36 18 14 2 28-4 36-18Z" />
    <path d="M132 34c4-16 16-24 26-26-2 14-12 24-26 26Z" />
    <path d="M108 70c-18-4-32 2-40 14 14 4 30 0 40-14Z" />
    <path d="M112 64c6-16 20-22 30-22-4 14-16 22-30 22Z" />
    <path d="M86 104c-18-4-32 2-40 14 14 4 30-1 40-14Z" />
    <path d="M90 98c6-15 19-21 29-21-4 13-15 21-29 21Z" />
    <path d="M64 138c-14-4-26 1-33 11 12 3 25 0 33-11Z" />
  </svg>
);

export const Minus = ({ className = "size-4" }) => (
  <svg viewBox="0 0 24 24" className={className} {...base}>
    <path d="M5 12h14" />
  </svg>
);

// Hand-drawn underline flourish used under script words.
export const Swoosh = ({ className = "w-24" }) => (
  <svg viewBox="0 0 120 12" className={className} aria-hidden>
    <path d="M2 9C35 2 80 1 118 7" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
  </svg>
);

export const Plus = ({ className = "size-4" }) => (
  <svg viewBox="0 0 24 24" className={className} {...base}>
    <path d="M12 5v14M5 12h14" />
  </svg>
);

export const Menu = ({ className = "size-6" }) => (
  <svg viewBox="0 0 24 24" className={className} {...base}>
    <path d="M4 7h16M4 12h16M4 17h16" />
  </svg>
);

export const Close = ({ className = "size-6" }) => (
  <svg viewBox="0 0 24 24" className={className} {...base}>
    <path d="M6 6l12 12M18 6 6 18" />
  </svg>
);

export const Phone = ({ className = "size-5" }) => (
  <svg viewBox="0 0 24 24" className={className} {...base}>
    <path d="M5 4h3l1.5 4-2 1.5a11 11 0 0 0 7 7l1.5-2 4 1.5v3a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2Z" />
  </svg>
);

export const Mail = ({ className = "size-5" }) => (
  <svg viewBox="0 0 24 24" className={className} {...base}>
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="m3.5 6 8.5 7 8.5-7" />
  </svg>
);

export const MapPin = ({ className = "size-5" }) => (
  <svg viewBox="0 0 24 24" className={className} {...base}>
    <path d="M12 21s-7-6-7-11.5a7 7 0 0 1 14 0C19 15 12 21 12 21Z" />
    <circle cx="12" cy="9.5" r="2.5" />
  </svg>
);

export const Clock = ({ className = "size-5" }) => (
  <svg viewBox="0 0 24 24" className={className} {...base}>
    <circle cx="12" cy="12" r="9" />
    <path d="M12 7v5l3 2" />
  </svg>
);

export const Bottle = ({ className = "size-5" }) => (
  <svg viewBox="0 0 24 24" className={className} {...base}>
    <path d="M9 3h6v3H9zM8 6h8l1 3v10a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2V9l1-3Z" />
    <path d="M7 12h10" />
  </svg>
);

export const Dropper = ({ className = "size-5" }) => (
  <svg viewBox="0 0 24 24" className={className} {...base}>
    <path d="M10 3h4v4h-4zM9 7h6M11 7v8a1 1 0 0 0 2 0V7" />
    <path d="M12 18v3" />
  </svg>
);

export const Jar = ({ className = "size-5" }) => (
  <svg viewBox="0 0 24 24" className={className} {...base}>
    <rect x="5" y="4" width="14" height="4" rx="1" />
    <path d="M6 8h12v10a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V8Z" />
    <path d="M9 13h6" />
  </svg>
);

// Brand logos in their own colours (not currentColor), for use on a white chip.
export const Facebook = ({ className = "size-5" }) => (
  <svg viewBox="0 0 24 24" className={className} aria-hidden>
    <path
      fill="#1877F2"
      d="M9.1 23.7v-8H6.63V12h2.47v-1.58c0-4.08 1.85-5.98 5.86-5.98.76 0 2.07.15 2.61.3v3.33c-.28-.03-.78-.05-1.39-.05-1.97 0-2.73.75-2.73 2.69V12h3.92l-.67 3.67h-3.25v8.25C19.4 23.24 24 18.18 24 12.04 24 5.4 18.63.04 12 .04S0 5.4 0 12.04c0 5.63 3.87 10.35 9.1 11.66Z"
    />
  </svg>
);

export const Instagram = ({ className = "size-5" }) => (
  <svg viewBox="0 0 24 24" className={className} aria-hidden>
    <defs>
      <radialGradient id="ig-grad" cx="30%" cy="107%" r="150%">
        <stop offset="0" stopColor="#fdf497" />
        <stop offset="0.05" stopColor="#fdf497" />
        <stop offset="0.45" stopColor="#fd5949" />
        <stop offset="0.6" stopColor="#d6249f" />
        <stop offset="0.9" stopColor="#285AEB" />
      </radialGradient>
    </defs>
    <rect x="1" y="1" width="22" height="22" rx="6.5" fill="url(#ig-grad)" />
    <rect x="5.5" y="5.5" width="13" height="13" rx="4" fill="none" stroke="#fff" strokeWidth="1.8" />
    <circle cx="12" cy="12" r="3.1" fill="none" stroke="#fff" strokeWidth="1.8" />
    <circle cx="16.1" cy="7.9" r="1" fill="#fff" />
  </svg>
);

export const Youtube = ({ className = "size-5" }) => (
  <svg viewBox="0 0 24 24" className={className} aria-hidden>
    <path
      fill="#FF0000"
      d="M23.5 6.19a3.02 3.02 0 0 0-2.12-2.14C19.5 3.55 12 3.55 12 3.55s-7.5 0-9.38.5A3.02 3.02 0 0 0 .5 6.19C0 8.07 0 12 0 12s0 3.93.5 5.81a3.02 3.02 0 0 0 2.12 2.14c1.88.5 9.38.5 9.38.5s7.5 0 9.38-.5a3.02 3.02 0 0 0 2.12-2.14C24 15.93 24 12 24 12s0-3.93-.5-5.81Z"
    />
    <path fill="#fff" d="M9.55 15.57V8.43L15.82 12l-6.27 3.57Z" />
  </svg>
);

// WhatsApp glyph in currentColor, so it can sit on the green button or be tinted green.
export const Whatsapp = ({ className = "size-5" }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden>
    <path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.16-.17.2-.35.22-.64.08-.3-.15-1.26-.47-2.39-1.48-.88-.79-1.48-1.76-1.65-2.06-.17-.3-.02-.46.13-.6.13-.14.3-.35.45-.52.15-.18.2-.3.3-.5.1-.2.05-.37-.03-.52-.07-.15-.67-1.61-.92-2.2-.24-.59-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48s1.06 2.88 1.21 3.07c.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.7.63.71.22 1.36.19 1.87.12.57-.09 1.76-.72 2-1.42.25-.69.25-1.29.18-1.41-.08-.12-.28-.2-.57-.35m-5.42 7.4h-.01a9.87 9.87 0 0 1-5.03-1.38l-.36-.21-3.74.98 1-3.65-.24-.37a9.86 9.86 0 0 1-1.51-5.26c0-5.45 4.44-9.88 9.89-9.88 2.64 0 5.12 1.03 6.99 2.9a9.83 9.83 0 0 1 2.89 6.99c0 5.45-4.44 9.88-9.88 9.88m8.41-18.3A11.82 11.82 0 0 0 12.05 0C5.5 0 .16 5.34.16 11.89c0 2.1.55 4.14 1.59 5.95L.06 24l6.3-1.65a11.88 11.88 0 0 0 5.68 1.45h.01c6.55 0 11.89-5.34 11.89-11.89a11.82 11.82 0 0 0-3.48-8.41Z" />
  </svg>
);
