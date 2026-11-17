export const productImg = (file) => encodeURI(`/all products/${file}`);

// Hrefs are absolute ("/#...") so they also work from inner pages like /about.
export const navLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Our Products", href: "/products", mega: true },
  { label: "Private Label", href: "/private-label" },
  { label: "Skincare Guide", href: "/skincare-guide" },
  { label: "Contact", href: "/contact" },
];

// The three main product divisions and their sub-categories.
export const collections = [
  {
    key: "hair",
    title: "Hair Care",
    tagline: "Professional Hair Solutions",
    photo: "/collections/hair.jpg",
    mobile: "/collections/hair-m.jpg",
    bg: "#e2ecdc",
    subs: [
      "Hair Shampoo",
      "Hair Mask",
      "Hair Spa",
      "Hair Serum",
      "Hair Oil",
      "Hair Treatments",
      "Hair Blondor",
      "Developer",
    ],
  },
  {
    key: "skin",
    title: "Skin Care",
    tagline: "Advanced Skin & Facial Solutions",
    photo: "/collections/skin.jpg",
    mobile: "/collections/skin-m.jpg",
    bg: "#f6e4d2",
    subs: [
      "Face Wash",
      "Sunscreen",
      "Face Serum",
      "Massage Cream",
      "Massage Gel",
      "Face Pack",
      "Face Scrub",
      "Facial Bleach",
      "D-Tan Pack",
      "D-Tan Scrub",
      "Facial Kits",
    ],
  },
  {
    key: "personal",
    title: "Personal Care",
    tagline: "Professional Waxing Solutions",
    photo: "/collections/personal.jpg",
    mobile: "/collections/personal-m.jpg",
    bg: "#f5dcd6",
    subs: ["Gel Wax", "Liposoluble Wax", "Brazilian Wax", "Korean Gel Wax"],
  },
];

export const facialKits = [
  { name: "Premium Facial Kit", steps: "10 Steps", use: "2 Times Use", file: "derma-argan-derma-whitening-facial-kit-10-step-skin-brightening-kit.jpg" },
  { name: "Premium Facial Kit", steps: "6 Steps", use: "2 Times Use", file: "derma-argan-anti-aging-facial-kit-6-step-skin-rejuvenation-facial.jpg" },
  { name: "Affordable Facial Kit", steps: "6 Steps", use: "Single Use", file: "derma-argan-vitamin-c-facial-kit-skin-brightening-6-step-facial-kit.jpg" },
  { name: "Salon Professional Facial Kit", steps: "4 Steps", use: "1 KG Kit", file: "gold.jpg" },
];

// Card heights and corner radii vary on purpose to match the organic card shapes in the design.
export const categories = [
  {
    title: "Face Wash",
    href: "/products/skin#face-wash",
    tagline: "Cleanse. Refresh. Glow.",
    photo: "/DermaPlex Glow Amidst Water Splashes.webp",
    shape: "aspect-[4/5] rounded-[2.75rem_2.75rem_1.5rem_1.5rem]",
  },
  {
    title: "Facial Kits",
    href: "/products/skin/facial-kits",
    tagline: "Nourish. Protect. Brighten.",
    photo: "/Vitamin C Facial Kit Glow Ad.webp",
    shape: "aspect-[3/4] rounded-[2.5rem_5.5rem_1.5rem_1.5rem]",
  },
  {
    title: "Face Packs",
    href: "/products/skin#face-pack",
    tagline: "Even Tone. Radiant Skin.",
    photo: "/Hydrating Aqua D Tan Face Pack.webp",
    shape: "aspect-[3/4] rounded-[4.5rem_2.5rem_1.5rem_1.5rem]",
  },
  {
    title: "Hair Spa",
    href: "/products/hair#hair-spa",
    tagline: "Repair. Nourish. Renew.",
    photo: "/Premium Korean Hair Spa Product.webp",
    shape: "aspect-[4/5] rounded-[3.5rem_2.5rem_1.5rem_1.5rem]",
  },
  {
    title: "Serums",
    href: "/products/hair#hair-serum",
    tagline: "Targeted Care. Visible Results.",
    photo: "/Keratin Argan Hair Serum Glow.webp",
    shape: "aspect-[4/5] rounded-[2.75rem_3.5rem_1.5rem_1.5rem]",
  },
  {
    title: "Waxing",
    href: "/products/personal",
    tagline: "Smooth. Gentle. Easy.",
    photo: "/wax-blueberry.jpg",
    shape: "aspect-[3/4] rounded-[4rem_2.5rem_1.5rem_1.5rem]",
  },
];

const waxImg = (time) => encodeURI(`/wax/WhatsApp Image 2026-10-30 at ${time}.jpeg`);

// One clean single-pack image per product. Some files are mislabelled or show multi-packs,
// so the picks below were checked visually.
const p = (name, tag, cat, file) => ({ name, tag, cat, src: productImg(file) });

export const products = [
  // Hair care
  p("Korean Hair Spa", "Hair Spa", "hair", "500gm-derma-argan-korean-hair-spa-cream.jpg"),
  p("Botox Hair Spa", "Hair Spa", "hair", "derma-argan-professional-botox-hair-spa-intense-nutri-repair-for-all-hair-types-1000ml.jpg"),
  p("Onion Hair Spa", "Hair Spa", "hair", "1000ml-derma-argan-onion-hair-spa.jpg"),
  p("Moroccan Argan Oil Hair Spa", "Hair Spa", "hair", "hair-care-cosmetics.jpg"),
  p("Biotin Hair Mask", "Hair Mask", "hair", "500gm-derma-argan-biotin-hair-mask.jpg"),
  p("Keratin & Botox Hair Mask", "Hair Mask", "hair", "500gm-dermaplex-plus-professional-keratin-botox-moisturizing-hair-mask.jpg"),
  p("Keratin Shampoo", "Shampoo", "hair", "500ml-dermaplex-plus-professional-keratin-shampoo.jpg"),
  p("Moisturizing Shampoo", "Shampoo", "hair", "500ml-derma-plex-plus-keratin-shampoo.jpg"),
  p("Biotin Shampoo", "Shampoo", "hair", "500ml-derma-argan-biotin-shampoo.jpg"),
  p("Nano Plastia Shampoo", "Shampoo", "hair", "500gm-derma-argan-nano-plastia-shampoo.jpg"),
  p("Keratin Shampoo 300g", "Shampoo", "hair", "300gm-derma-argan-keratin-shampoo.jpg"),
  p("Keratin Hair Serum", "Hair Serum", "hair", "derma-argan-keratin-hair-serum-enriched-with-argan-oil-vitamin-e.jpg"),
  p("Argan Hair Serum", "Hair Serum", "hair", "50ml-drema-argan-hair-serum.jpg"),
  p("Botox Treatment", "Hair Treatment", "hair", "1000gm-derma-argan-botox-treatment-oil.jpg"),
  p("Nano Plastia Treatment", "Hair Treatment", "hair", "derma-argan-nano-plastia-treatment-straight-therapy-1000ml.jpg"),
  p("Keratin Hair Mask", "Hair Treatment", "hair", "keratin-hair-mask-with-wheat-protein-sulfate-free.jpg"),
  // Skin care
  p("Skin Glow Face Wash", "Face Wash", "skin", "100-ml-derma-plex-skin-glow-face-wash.jpg"),
  p("Argan Skin Glow Face Wash", "Face Wash", "skin", "100ml-drema-argan-skin-glow-face-wash.jpg"),
  p("Hydramoist Lotion", "Moisturizer", "skin", "100-ml-derma-plex-professional-hydramoist-skin-moisturizer.jpg"),
  p("Derma Shield SPF 30", "Sunscreen", "skin", "dermaplex-derma-shield-sun-protection-cream-spf-30-pa.jpg"),
  p("D-Tan Face Pack", "Face Pack", "skin", "500gm-derma-argan-d-tan-face-pack.jpg"),
  p("D-Tan Pack with Kojic Acid", "D-Tan Pack", "skin", "derma-argan-professional-d-tan-pack-tan-removal-face-pack-with-kojic-acid-500gm.jpg"),
  p("Vitamin C Facial Kit", "Facial Kit", "skin", "vitamin-c.jpg"),
  p("Vitamin C Brightening Kit", "Facial Kit", "skin", "derma-argan-vitamin-c-facial-kit-skin-brightening-6-step-facial-kit.jpg"),
  p("Gold Facial Kit", "Facial Kit", "skin", "gold.jpg"),
  p("Diamond Facial Kit", "Facial Kit", "skin", "diamond-1.jpg"),
  p("Red Wine Facial Kit", "Facial Kit", "skin", "wine-1.jpg"),
  p("Bridal Glow Facial Kit", "Facial Kit", "skin", "derma-argan-bridal-glow-facial-kit-10-step-skin-radiance-kit.jpg"),
  p("Korean Glass Facial Kit", "Facial Kit", "skin", "derma-argan-korean-glass-facial-kit-10-step-skin-glow-and-hydration-kit.jpg"),
  p("Korean Rice Water Kit", "Facial Kit", "skin", "derma-argan-korean-rice-water-facial-kit-10-step-premium-skin-brightening-kit.jpg"),
  p("Rice Water Facial Kit", "Facial Kit", "skin", "derma-argan-rice-water-facial-kit-8-step-skin-glow-and-nourishment-kit.jpg"),
  p("Blue Tea Facial Kit", "Facial Kit", "skin", "derma-argan-blue-tea-facial-kit-10-step-premium-skin-detox-and-glow-kit.jpg"),
  p("Hydra Facial Kit", "Facial Kit", "skin", "derma-argan-hydra-facial-kit-7-step-deep-hydration-and-skin-glow-kit.jpg"),
  p("Hydra Boost Facial Kit", "Facial Kit", "skin", "derma-argan-hydra-boost-facial-kit-7-step-deep-hydration-and-skin-glow-kit.jpg"),
  p("Protein Facial Kit", "Facial Kit", "skin", "derma-argan-protein-facial-kit-10-step-skin-repair-and-nourishment-kit-with-power-mask.jpg"),
  p("Derma Whitening Facial Kit", "Facial Kit", "skin", "derma-argan-derma-whitening-facial-kit-10-step-skin-brightening-kit.jpg"),
  p("D-Tan Facial Kit", "Facial Kit", "skin", "derma-argan-d-tan-facial-kit-6-step-tan-removal-skin-brightening-kit.jpg"),
  p("Meladerm Facial Kit", "Facial Kit", "skin", "derma-argan-meladerm-facial-kit-6-step-skin-brightening-facial-kit.jpg"),
  p("Anti-Aging Facial Kit", "Facial Kit", "skin", "derma-argan-anti-aging-facial-kit-6-step-skin-rejuvenation-facial.jpg"),
  p("Coffee Facial Kit", "Facial Kit", "skin", "coffee.jpg"),
  p("Skin Glow Facial Kit", "Facial Kit", "skin", "skin-glow.jpg"),
  p("Tomato Facial Kit", "Facial Kit", "skin", "tomato.jpg"),
  p("Ubtan Facial Kit", "Facial Kit", "skin", "ubtan-1.jpg"),
  p("Cool Mint Sheet Mask", "Sheet Mask", "skin", "cool-mint-sheet-mask-2.jpg"),
  p("Hydra Sheet Mask", "Sheet Mask", "skin", "hydra-sheet-mask-2.jpg"),
  p("Korean Sheet Mask", "Sheet Mask", "skin", "korean-sheet-mask-2.jpg"),
  p("Protein Sheet Mask", "Sheet Mask", "skin", "protein-sheet-mask-2.jpg"),
  p("Rice Water Sheet Mask", "Sheet Mask", "skin", "rice-water-sheet-mask-2.jpg"),
  p("Skin Whitening Sheet Mask", "Sheet Mask", "skin", "skin-whitening-sheet-mask-2.jpg"),
  p("Vitamin C Sheet Mask", "Sheet Mask", "skin", "vitamin-c-sheet-mask-2.jpg"),
  // Personal care
  { name: "White Chocolate Brazilian Wax", tag: "Brazilian Wax", cat: "personal", src: productImg("500gm-drema-argan-white-chocolate-brazilian-wax.jpg") },
  { name: "White Chocolate Wax", tag: "Liposoluble Wax", cat: "personal", src: waxImg("12.11.03") },
  { name: "White Chocolate Laser Wax", tag: "Liposoluble Wax", cat: "personal", src: waxImg("12.11.16") },
  { name: "Korean Liposoluble Wax", tag: "Liposoluble Wax", cat: "personal", src: waxImg("12.11.05") },
  { name: "Korean Gel Wax", tag: "Korean Gel Wax", cat: "personal", src: waxImg("12.11.15") },
  { name: "Just Derma Korean Gel Wax", tag: "Korean Gel Wax", cat: "personal", src: waxImg("12.11.07") },
  { name: "Crystal Clear Gel Wax", tag: "Gel Wax", cat: "personal", src: waxImg("12.11.18") },
  { name: "Liposoluble Gel Wax", tag: "Gel Wax", cat: "personal", src: waxImg("12.11.11") },
  { name: "Blueberry Gel Wax", tag: "Gel Wax", cat: "personal", src: waxImg("12.11.09") },
  { name: "Blue Berry Gel Wax", tag: "Gel Wax", cat: "personal", src: waxImg("12.11.13") },
];

export const ritual = [
  {
    step: "01",
    title: "Cleanse",
    text: "Start with a gentle face wash to lift away dirt, oil and the day's build-up.",
    photo: "/Derma Skin Glow Water Splash.webp",
    icon: "drop",
    accent: "bg-forest",
    number: "text-[#5d7350]",
  },
  {
    step: "02",
    title: "Treat",
    text: "Pamper skin with a facial kit or face pack chosen for your skin goal.",
    photo: "/Vitamin C Citrus Splash Skincare Ad.webp",
    icon: "face",
    accent: "bg-[#b0663d]",
    number: "text-[#c98a52]",
  },
  {
    step: "03",
    title: "Protect",
    text: "Finish with moisture and daily sun protection to keep that glow going.",
    photo: "/Golden Derma Sun Shield Skincare Display.webp",
    icon: "shield",
    accent: "bg-forest",
    number: "text-[#7f7a45]",
  },
];


export const testimonials = [
  { quote: "My skin feels so much fresher and brighter after using the Skin Glow face wash. Absolutely love it!", name: "Priya S." },
  { quote: "The Vitamin C facial kit gives a proper salon-like glow at home. Easy to use and works beautifully.", name: "Neha K." },
  { quote: "Korean Hair Spa has made my hair so soft and manageable. My go-to for weekly care now.", name: "Ritu M." },
  { quote: "Gentle on skin and gives visible results. Happy with every Dermaplex product I've tried.", name: "Sneha P." },
  { quote: "The keratin serum tames frizz instantly without feeling greasy. Great value too.", name: "Anjali R." },
];

export const faqs = [
  {
    q: "Are your products suitable for all skin types?",
    a: "Most of our range is formulated for all skin types. Each product label mentions any specific skin type it is best suited for.",
  },
  {
    q: "Do you offer professional salon packs?",
    a: "Yes. Many of our hair and skin products come in salon-size packs, made for professionals as well as home use.",
  },
  {
    q: "How do I choose the right product for my skin?",
    a: "Start with your main concern — dullness, tan, dryness or hair damage — and pick from that range. Our team is also happy to guide you.",
  },
  {
    q: "Can I use these products daily?",
    a: "Face washes, moisturizers and sun protection are made for daily use. Facial kits and face packs are best used weekly.",
  },
  {
    q: "How can I place a bulk or distributor order?",
    a: "Reach out through the Contact section and our team will get back to you with pricing and availability.",
  },
];

/* ------------------------------ Product pages ------------------------------ */
export const slugify = (s) => s.toLowerCase().replace(/&/g, "and").replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

// Product tags that are named differently from the sub-category list above.
const tagToSub = {
  Shampoo: "Hair Shampoo",
  "Hair Treatment": "Hair Treatments",
  "Facial Kit": "Facial Kits",
  "Sheet Mask": "Sheet Masks",
};

// A sub-category with more products than this gets its own page instead of a full section.
export const SECTION_LIMIT = 12;

// Sub-category sections for a collection, in the collection's own order. Product types that
// aren't in the list (e.g. Moisturizer, Sheet Masks) are appended so no product is hidden.
export function subSections(catKey) {
  const c = collections.find((x) => x.key === catKey);
  const items = products.filter((p) => p.cat === catKey);
  const groups = new Map(c.subs.map((s) => [s, []]));
  for (const p of items) {
    const sub = tagToSub[p.tag] || p.tag;
    if (!groups.has(sub)) groups.set(sub, []);
    groups.get(sub).push(p);
  }
  return [...groups].map(([name, list]) => ({
    name,
    slug: slugify(name),
    products: list,
    ownPage: list.length > SECTION_LIMIT,
  }));
}

/* --------------------------- Product page imagery --------------------------- */
// Transparent cutouts (public/catalog) of products that don't appear in the home or about
// imagery. Each product is used in exactly one place across the product pages and menu.
export const catalogImg = (name) => `/catalog/${name}.webp`;

export const catalogScenes = {
  menuPromo: "skin-protein-kit",
  facialKitsBanner: { image: "/facial-kit-banner.webp", mobile: "/facial-kit-mobile-banner.webp", bg: "#f7e4d1", mobileBg: "#f7dfc8" },
  // per collection: dropdown thumbnail, category banner photos (desktop + mobile) and their background colours
  hair: { menu: "hair-keratin-mask", bannerImage: "/hair-care-banner.webp", bannerMobile: "/hair-care-mobile-banner.webp", mobileRatio: "1024/1536", bannerBg: "#eff4de", mobileBg: "#dbe2c0" },
  skin: { menu: "skin-korean-glass-kit", bannerImage: "/skin-care-banner.webp", bannerMobile: "/skin-care-mobile-banner.webp", bannerBg: "#f5e9dd", mobileBg: "#eddac7" },
  personal: { menu: "personal-liposoluble-gel-wax", bannerImage: "/personal-care-banner.webp", bannerMobile: "/personal-care-mobile-banner.webp", bannerBg: "#f5dcc6", mobileBg: "#f0cdb4" },
};

// /products page collection cards: photo (product sits in its right half), card colour sampled
// from the photo's top-left, and an accent for the title and button.
export const collectionCards = {
  hair: { photo: "/product1.webp", bg: "#e5ebcc", accent: "#1f3d2c", accentHover: "#142a1e", text: "Nourishment for stronger, shinier and healthier hair." },
  skin: { photo: "/product2.webp", bg: "#f6dcc3", accent: "#a8323a", accentHover: "#86262d", text: "Advanced solutions for glowing, healthy and youthful skin." },
  personal: { photo: "/product3.webp", bg: "#f6d9c5", accent: "#4a2a1e", accentHover: "#341c13", text: "Gentle and effective solutions for your everyday care." },
};

// Where a sub-category link should go: its section on the category page, its own page when it has
// one, or the "Coming Soon" list when it has no products yet.
export function subHref(catKey, subName) {
  const s = subSections(catKey).find((x) => x.name === subName);
  if (!s || !s.products.length) return `/products/${catKey}#coming-soon`;
  return s.ownPage ? `/products/${catKey}/${s.slug}` : `/products/${catKey}#${s.slug}`;
}

// The house brands, shown on the home page. Logos are forest-green cutouts in /brands.
export const brands = [
  {
    name: "Dermaplex Professional",
    logo: "/brands/dermaplex.webp",
    text: "Our flagship salon-grade range of skin, hair and personal care.",
  },
  {
    name: "Derma Argan Professional",
    logo: "/brands/derma-argan.webp",
    text: "Argan-powered care for nourished hair and radiant skin.",
  },
  {
    name: "Just Derma Professional",
    logo: "/brands/justderma.webp",
    text: "Everyday professional essentials, from waxing to skin care.",
  },
];

export const socialLinks = [
  ["Facebook", "https://www.facebook.com/Professionaldermaplex/"],
  ["Instagram", "https://www.instagram.com/professionaldermaplex/"],
  ["YouTube", "https://www.youtube.com/@Dermaplex"],
];

export const contact = {
  phone: "+91-9999840060",
  email: "dermaarganprofessional@gmail.com",
  whatsapp: "919999840060",
  address: ["L-11, Rohtak Road, Udyog Nagar Industrial Area,", "Near Udyog Nagar Metro Station, New Delhi - 110041"],
  mapQuery: "L-11, Rohtak Road, Udyog Nagar Industrial Area, New Delhi 110041",
};

export const directionsHref = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(contact.mapQuery)}`;

// wa.me chat link with an optional pre-filled message.
export const whatsappHref = (text = "Hi Dermaplex, I would like to know more about your products.") =>
  `https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(text)}`;
