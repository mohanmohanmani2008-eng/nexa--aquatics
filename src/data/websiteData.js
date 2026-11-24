export const BRAND_INFO = {
  name: "NEXA AQUATICS",
  logo: "/fish/logo.png",
  tagline: "Discover the Beauty Beneath the Surface.",
  description: "Explore the vibrant world of ornamental fish with premium quality, healthy collections and trusted aquarium services.",
  phone: "+91 8825775913",
  phoneRaw: "+918825775913",
  whatsAppUrl: "https://wa.me/918825775913",
  location: {
    address: "HQQJ+75, Thandarai, Tamil Nadu 635110",
    embedMapUrl: "https://maps.google.com/maps?q=HQQJ%2B75,+Thandarai,+Tamil+Nadu 635110&t=&z=15&ie=UTF8&iwloc=&output=embed",
    directionsUrl: "https://www.google.com/maps/dir/?api=1&destination=HQQJ%2B75,+Thandarai,+Tamil+Nadu+635110"
  }
};

// GALLERY: ONLY TWO FISH CATEGORIES USING EXACT IMAGES FROM FISH FOLDER
export const GALLERY_FISH = [
  {
    id: "full-moon-guppy",
    name: "Full Moon Guppy",
    scientificName: "Poecilia reticulata var. Full Moon",
    category: "Specialty Livebearer • Flagship Strain",
    image: "/fish/fullmoon-guppy.jpg",
    fitMode: "cover",
    description: "Renowned for its breathtaking 180-degree semicircular caudal fin resembling a radiant full moon. Features pristine multi-hue iridescence, majestic finnage, and lively colony movement across our selected ornamental line.",
    specs: {
      temperament: "Peaceful & Active Community Fish",
      waterTemp: "22°C - 28°C",
      phLevel: "7.0 - 8.2",
      careLevel: "Beginner to Intermediate",
      diet: "Omnivore (Micro-pellets, spirulina flakes & live feeds)"
    },
    highlights: [
      "Symmetrical 180° Tail Spread (Full Moon Standard)",
      "Vibrant Multi-Hue Iridescent Body Sheen",
      "Pure Linebred Pedigree & Genetic Vitality",
      "Quarantined & Active Pellet Acclimated"
    ],
    whatsappEnquiryMessage: "Hello Nexa Aquatics! I am interested in inquiring about the Full Moon Guppy availability, wholesale rates (10% OFF), and retail pairs."
  },
  {
    id: "goldfish",
    name: "Goldfish",
    scientificName: "Carassius auratus",
    category: "Freshwater Ornamental Classic",
    image: "/fish/goldfish.jpg",
    fitMode: "cover",
    description: "The timeless symbol of serenity, prosperity, and aquatic elegance. Celebrated for rich golden-orange metallic scales, graceful flowing fins, and a peaceful, hardy demeanor that brings instant tranquility to any aquarium sanctuary.",
    specs: {
      temperament: "Peaceful & Social",
      waterTemp: "18°C - 24°C",
      phLevel: "6.8 - 7.6",
      careLevel: "Easy & Hardy",
      diet: "High-grade sinking pellets, flakes & blanched greens"
    },
    highlights: [
      "Brilliant Deep Golden-Orange Metallic Luster",
      "Graceful Flowing Caudal & Dorsal Finnage",
      "Hardy Vitality & Cold-Water Compatibility",
      "Acclimated to Healthy Tank Environments"
    ],
    whatsappEnquiryMessage: "Hello Nexa Aquatics! I am interested in inquiring about Goldfish varieties, stock grades, and rates."
  }
];

// PRODUCTS SECTION: FOUR PRODUCT CATEGORIES USING EXACT IMAGES FROM FISH FOLDER
export const AQUARIUM_PRODUCTS = [
  {
    id: "fish-medicin",
    name: "Fish Medicines",
    category: "Aquarium Health & Care",
    badge: "Essential Care",
    image: "/fish/fish-medicin.jpg",
    fitMode: "contain",
    description: "Products to support fish health and aquarium care.",
    detailedDescription: "Specially formulated aquarium treatments and health tonics to protect against common bacterial conditions, fungal infections, fin rot, and water stress, ensuring your aquatic life stays vibrant and thriving.",
    features: [
      "Broad-spectrum fish health conditioner",
      "Fast-acting anti-bacterial and tonic protection",
      "Stress relief for newly introduced fish",
      "Safe for ornamental fish and planted aquariums"
    ],
    whatsappEnquiryMessage: "Hello Nexa Aquatics! I am interested in inquiring about Fish Medicines and aquarium treatment products."
  },
  {
    id: "fish-stone",
    name: "Aquarium Decorative Colour Stones",
    category: "Substrate & Hardscape",
    badge: "Vibrant Decor",
    image: "/fish/fish-stone.jpg.jpg",
    fitMode: "contain",
    description: "Enhance your aquarium with attractive decorative stones.",
    detailedDescription: "High-quality, non-toxic, polished decorative stones and gravel designed to illuminate aquarium beds, accentuate underwater plants, and create a visually captivating aquatic environment.",
    features: [
      "100% non-toxic & fish-safe color coating",
      "Smooth rounded edges to protect delicate fins",
      "Water chemistry neutral & color-fast",
      "Ideal for home aquariums, fish bowls, and craft displays"
    ],
    whatsappEnquiryMessage: "Hello Nexa Aquatics! I am interested in inquiring about Aquarium Decorative Colour Stones options and quantities."
  },
  {
    id: "fish-food",
    name: "Fish Food",
    category: "Diet & Nutrition",
    badge: "High Nutrition",
    image: "/fish/fish-food.jpg",
    fitMode: "contain",
    description: "Quality food for healthy and active ornamental fish.",
    detailedDescription: "Nutritionally balanced floating pellets and vitamin-fortified flakes enriched with spirulina and natural carotenoids for maximum color enhancement, daily vitality, and clean tank water.",
    features: [
      "Balanced protein formula for growth and immune health",
      "Rich in natural spirulina for vivid color enhancement",
      "Easily digestible granules that do not cloud aquarium water",
      "Suitable for Guppies, Goldfish, and all community ornamental fish"
    ],
    whatsappEnquiryMessage: "Hello Nexa Aquatics! I am interested in inquiring about your Fish Food products and feeding options."
  },
  {
    id: "fish-bowl",
    name: "Small Fish Bowl",
    category: "Aquarium Tanks & Bowls",
    badge: "Transparent Glass",
    image: "/fish/fish-bowl.jpg",
    fitMode: "contain",
    description: "Compact fish bowls for home aquarium decoration.",
    detailedDescription: "High-clarity transparent glass fish bowl crafted with an elegant silhouette and smooth finish. Perfect for desktops, office tables, and compact home corners as a peaceful decorative centerpiece.",
    features: [
      "Ultra-clear panoramic transparent glass",
      "Smooth rolled rim for safety and easy maintenance",
      "Compact footprint ideal for tabletops and modern decor",
      "Attractive decorative design for small aquatic displays"
    ],
    whatsappEnquiryMessage: "Hello Nexa Aquatics! I am interested in inquiring about the Small Fish Bowl sizes and availability."
  }
];

export const SERVICES_LIST = [
  {
    id: "delivery",
    title: "Safe Ornamental Fish Delivery",
    subtitle: "Temperature-Controlled Transit",
    badge: "100% Safe Arrival Guarantee",
    icon: "Truck",
    description: "Specialized climate-regulated packaging with pure medical-grade oxygen inflation, double-sealed insulating liners, and stress-reducing conditioning ensure your ornamental fish and supplies arrive vibrant, unstressed, and healthy.",
    features: [
      "Oxygen-charged double insulated boxes",
      "Live health guarantee on arrival",
      "Doorstep delivery with transit tracking",
      "Acclimation guide included with every order"
    ]
  },
  {
    id: "wholesale",
    title: "Special Wholesale Pricing",
    subtitle: "Commercial & Breeder Supplies",
    badge: "10% OFF Special Wholesale",
    icon: "BadgePercent",
    popular: true,
    description: "Bulk supply partnerships designed for pet shops, commercial breeders, and regional aquatic stores. Receive vetted disease-free batches, volume tiered discounts, and priority allocations across fish and aquarium products.",
    features: [
      "Flat 10% OFF on all wholesale bulk volumes",
      "Consistently graded size & genetics",
      "Regular scheduled batch shipments",
      "Dedicated commercial support representative"
    ]
  },
  {
    id: "retail",
    title: "Premium Retail Collection",
    subtitle: "Hand-Picked for Hobbyists",
    badge: "Quarantined & Conditioned",
    icon: "Sparkles",
    description: "Individually selected showcase ornamental fish pairs, care medicines, decorative stones, and starter bowls for personal home aquariums, planted tanks, and passionate collectors.",
    features: [
      "Hand-quarantined for minimum 14 days",
      "Pre-conditioned to commercial feeds",
      "Expert water compatibility consultation",
      "Personalized aftercare & feeding support"
    ]
  }
];

export const TOTAL_FRAMES = 50;
export const FRAME_PATH_PREFIX = "/fish/ezgif-frame-";
export const FRAME_PATH_SUFFIX = ".jpg";

export const getFrameUrl = (index) => {
  const frameNum = String(index + 1).padStart(3, '0');
  return `${FRAME_PATH_PREFIX}${frameNum}${FRAME_PATH_SUFFIX}`;
};
