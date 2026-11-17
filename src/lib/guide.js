import { products, contact } from "./data";

const img = (name) => `/skincare-guide/${name}.webp`;
// Look products up by name so the recommendations always point at real catalogue items.
const pick = (...names) => names.map((n) => products.find((p) => p.name === n)).filter(Boolean);

// Shared by the Skincare Guide and Contact page banners.
export const guideBanner = {
  cover: "/skincare-guide/skincare-guide-banner.webp",
  coverMobile: "/skincare-guide/skincare-guide-mobile-banner.webp",
  coverWide: true,
  coverMobileRatio: "1024/1536",
  bg: "#f7f6e2",
  mobileBg: "#f9f6e1",
};

export const guideTabs = [
  ["Skin Types", "skin-types"],
  ["Daily Skincare Routine", "routine"],
  ["Key Ingredients", "ingredients"],
  ["Skin Concerns", "concerns"],
  ["Skincare Tips", "tips"],
  ["FAQs", "faqs"],
];

export const skinTypes = [
  { name: "Normal Skin", text: "Balanced, smooth and less prone to issues.", photo: img("normal-skin") },
  { name: "Oily Skin", text: "Produces excess oil, prone to shine and acne.", photo: img("oily-skin") },
  { name: "Dry Skin", text: "Feels tight, rough and needs extra hydration.", photo: img("dry-skin") },
  { name: "Combination Skin", text: "Oily in some areas, dry in others.", photo: img("combination-skin") },
  { name: "Sensitive Skin", text: "Easily reacts, prone to redness and irritation.", photo: img("sensitive-skin") },
];

export const routine = [
  { step: 1, title: "Cleanse", text: "Remove dirt, oil and impurities.", icon: "bottle" },
  { step: 2, title: "Treat", text: "Use serums, packs or targeted treatments.", icon: "dropper" },
  { step: 3, title: "Moisturize", text: "Keep your skin hydrated and protected.", icon: "jar" },
  { step: 4, title: "Protect", text: "Use sunscreen to prevent sun damage.", icon: "sun" },
];

export const ingredients = [
  { name: "Hyaluronic Acid", text: "Deep hydration & plump skin.", photo: img("hyaluronic-acid") },
  { name: "Vitamin C", text: "Brightens skin & evens tone.", photo: img("vitamin-c") },
  { name: "Niacinamide", text: "Controls oil & improves texture.", photo: img("niacinamide") },
  { name: "Aloe Vera", text: "Soothes & calms irritation.", photo: img("aloe-vera") },
  { name: "Retinol", text: "Supports skin renewal & reduces fine lines.", photo: img("retinol") },
];

export const concerns = [
  {
    name: "Acne",
    icon: "drop",
    text: "Acne occurs when hair follicles get clogged with oil, dead skin cells and bacteria, leading to breakouts, blackheads or whiteheads.",
    causes: ["Excess oil production", "Hormonal changes", "Clogged pores", "Stress and diet", "Use of harsh products"],
    care: ["Keep your skin clean", "Use gentle, non-comedogenic products", "Avoid touching your face", "Maintain a healthy diet and stay hydrated"],
    ingredients: ["Salicylic Acid", "Niacinamide", "Tea Tree Oil", "Aloe Vera", "Zinc"],
    products: pick("Skin Glow Face Wash", "Argan Skin Glow Face Wash", "Cool Mint Sheet Mask", "Hydramoist Lotion", "Derma Shield SPF 30"),
  },
  {
    name: "Pigmentation",
    icon: "sun",
    text: "Pigmentation shows up as dark spots or uneven patches when skin produces extra melanin, often triggered by sun exposure or inflammation.",
    causes: ["Sun exposure", "Hormonal changes", "Post-acne marks", "Ageing", "Skipping sunscreen"],
    care: ["Wear sunscreen every day", "Exfoliate gently once or twice a week", "Use brightening treatments", "Avoid picking at spots"],
    ingredients: ["Vitamin C", "Kojic Acid", "Niacinamide", "Arbutin", "Licorice Extract"],
    products: pick("D-Tan Pack with Kojic Acid", "D-Tan Face Pack", "Meladerm Facial Kit", "Vitamin C Facial Kit", "Derma Shield SPF 30"),
  },
  {
    name: "Dryness",
    icon: "jar",
    text: "Dry skin lacks enough moisture and oil, so it can feel tight, rough or flaky — especially in cold weather or after harsh cleansing.",
    causes: ["Cold or dry weather", "Hot showers", "Harsh cleansers", "Not drinking enough water", "Ageing"],
    care: ["Use a gentle, hydrating cleanser", "Moisturise right after washing", "Use lukewarm water", "Add a weekly hydrating mask"],
    ingredients: ["Hyaluronic Acid", "Glycerin", "Ceramides", "Aloe Vera", "Shea Butter"],
    products: pick("Hydramoist Lotion", "Hydra Facial Kit", "Hydra Boost Facial Kit", "Hydra Sheet Mask", "Korean Glass Facial Kit"),
  },
  {
    name: "Dull Skin",
    icon: "sparkle",
    text: "Dull skin looks tired and lacks radiance, usually because dead cells build up on the surface and skin isn't getting enough care.",
    causes: ["Dead skin build-up", "Dehydration", "Lack of sleep", "Pollution", "Irregular skincare"],
    care: ["Exfoliate regularly", "Keep skin hydrated", "Use brightening facials", "Sleep well and drink water"],
    ingredients: ["Vitamin C", "Rice Water", "Gold & Pearl Extracts", "Niacinamide", "AHAs"],
    products: pick("Vitamin C Brightening Kit", "Skin Glow Facial Kit", "Gold Facial Kit", "Rice Water Facial Kit", "Vitamin C Sheet Mask"),
  },
  {
    name: "Fine Lines & Wrinkles",
    icon: "face",
    text: "Fine lines and wrinkles appear as skin loses collagen and elasticity over time, sped up by sun exposure and dryness.",
    causes: ["Natural ageing", "Sun damage", "Dehydration", "Repeated facial expressions", "Lifestyle habits"],
    care: ["Use sunscreen daily", "Keep skin well moisturised", "Use nourishing, repair-focused treatments", "Get enough rest"],
    ingredients: ["Retinol", "Peptides", "Hyaluronic Acid", "Vitamin C", "Protein Extracts"],
    products: pick("Anti-Aging Facial Kit", "Protein Facial Kit", "Diamond Facial Kit", "Protein Sheet Mask", "Red Wine Facial Kit"),
  },
];

export const tips = [
  ["Patch test first", "Try any new product on a small area for 24 hours before using it on your face."],
  ["Never skip sunscreen", "UV damage happens even on cloudy days and indoors near windows."],
  ["Be gentle", "Over-scrubbing and harsh cleansers strip skin and cause irritation."],
  ["Stay hydrated", "Drinking enough water helps skin look plumper and healthier."],
  ["Remove makeup at night", "Sleeping in makeup clogs pores and leads to breakouts."],
  ["Be consistent", "Give a routine 4–6 weeks before judging its results."],
];

export const guideFaqs = [
  {
    q: "How do I know my skin type?",
    a: "Wash your face, wait an hour without applying anything, then check: shiny all over means oily, tight or flaky means dry, an oily T-zone with dry cheeks means combination.",
  },
  {
    q: "How often should I do a facial at home?",
    a: "Once every 2–4 weeks is ideal for most skin types. Sheet masks and face packs can be used once or twice a week.",
  },
  {
    q: "Do I need sunscreen if I stay indoors?",
    a: "Yes. UV rays pass through windows, so daily sunscreen is still recommended.",
  },
  {
    q: "Can I use multiple active ingredients together?",
    a: "Introduce one at a time and avoid layering strong actives like retinol and exfoliating acids on the same night.",
  },
  {
    q: "Which products suit sensitive skin?",
    a: "Look for gentle, fragrance-light formulas and always patch test. Our team can suggest options for your skin.",
  },
];

export const contactInfo = {
  phone: contact.phone,
  phoneHours: "Mon - Sat, 9:00 AM - 6:00 PM",
  email: contact.email,
  emailNote: "We reply within 24 hours.",
  address: contact.address,
  hours: ["Monday - Saturday: 9:00 AM - 6:00 PM", "Sunday: Closed"],
  mapQuery: contact.mapQuery,
};
