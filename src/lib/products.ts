const CDN = "https://cdn.prod.website-files.com/638c4b4310a6ce72185b8247";

export interface ProductUSP {
  title: string;
  body: string;
}

export interface ProductFAQ {
  q: string;
  a: string;
}

export interface ProductSpec {
  label: string;
  value: string;
}

export interface Product {
  slug: string;
  title: string;
  shortTitle: string;
  category: string;
  tagline: string;
  heroImage: string;
  /** Image used by the category cards. Deliberately the same set the homepage
   *  uses (hp-cat-*-v2) so every surface showing categories matches. Kept
   *  separate from heroImage, which drives page heroes and OG images. */
  categoryImage: string;
  gallery: string[];
  description: string;
  longDescription: string;
  usps: ProductUSP[];
  specs: ProductSpec[];
  faqs: ProductFAQ[];
  relatedSlugs: string[];
  whatsappMessage: string;
  seo: {
    title: string;
    description: string;
    keywords: string[];
  };
}

export const products: Product[] = [
  {
    slug: "trophies-awards",
    title: "Trophies & Awards",
    shortTitle: "Trophies & Awards",
    category: "Trophies",
    tagline: "Built for the Moment. Designed to Last Decades.",
    heroImage: `/trophy-main.webp`,
    categoryImage: "/hp-cat-trophies-v2.webp",
    gallery: [
      "/trophy-main.webp",
      "/trophy-metal-mixed.webp",
      "/trophy-crystal.webp",
      "/trophy-collection.webp",
    ],
    description:
      "The GCC's leading bespoke trophy manufacturer. Working with sports federations, governments, and championship circuits who demand something the podium can't overshadow.",
    longDescription: `Trophies are the most photographed objects at any event. At Crystal Arc, we design them knowing they will be carried, cradled, hoisted, and studied for decades. We manufacture in metal (stainless steel, brass, zinc alloy, aluminium), resin (painted, cast, textured), wood, acrylic, and mixed-material combinations.

Our projects span individual championship trophies for thousands of participants, unique centrepiece awards for VVIP recipients, and complete award suites for multi-category events. Each brief gets a dedicated designer and production manager — one point of contact from first sketch to final box.`,
    usps: [
      {
        title: "Multi-Material Mastery",
        body: "Metal, resin, wood, acrylic, crystal — or all five in one piece. We combine materials others won't attempt because we control every process in-house.",
      },
      {
        title: "Dedicated Project Team",
        body: "Every order gets one designer and one production manager. One point of contact from brief to delivery, no exceptions.",
      },
      {
        title: "Championship-Scale Delivery",
        body: "From 10 trophies for a board ceremony to 10,000 medals for a national championship — our facility scales without quality compromise.",
      },
      {
        title: "25 Years of Podium Pedigree",
        body: "Our trophies have been handed on Formula 1 podiums, at government National Day ceremonies, and at Olympic qualification events across the GCC.",
      },
    ],
    specs: [
      { label: "Materials", value: "Steel, brass, zinc alloy, aluminium, resin, acrylic, wood, crystal" },
      { label: "Turnaround", value: "5–20 working days" },
      { label: "Minimum Order", value: "1 piece" },
      { label: "Finishes", value: "Polished, brushed, gold/silver/bronze plated, powder-coated, painted" },
      { label: "3D Renders", value: "Included on all custom designs" },
      { label: "Physical Samples", value: "Available for orders of 50+ pieces" },
    ],
    faqs: [
      {
        q: "Can you create a completely original design?",
        a: "Yes — most of our major clients bring a concept or inspiration image. Our design team produces 3D renders before a single piece is made.",
      },
      {
        q: "We need 500 trophies for a national event — can you deliver?",
        a: "Yes. Our production floor runs parallel lines for large-volume orders and has delivered up to 15,000 units in a single production run.",
      },
      {
        q: "Can you match an existing trophy from a previous manufacturer?",
        a: "Provided you share the original piece or detailed drawings, we can reproduce and improve upon any existing design.",
      },
      {
        q: "Do you provide 3D design previews?",
        a: "Yes — all custom projects receive 3D renders for approval before production begins. Physical samples are produced for orders above 50 pieces.",
      },
      {
        q: "What are your payment terms?",
        a: "50% deposit on order confirmation, balance before dispatch. Government and established corporate clients may discuss NET terms on first contact.",
      },
    ],
    relatedSlugs: ["boxes", "corporate-gifts", "home-decor"],
    whatsappMessage:
      "Hi Crystal Arc, I'm interested in custom trophies and awards. Please send me more information.",
    seo: {
      title: "Custom Trophy Manufacturer Dubai | Bespoke Awards UAE | Crystal Arc",
      description:
        "Bespoke trophy manufacturer in Dubai. Metal, resin, and mixed-material awards for sports federations, governments, and corporate events. GCC delivery. 25+ years experience.",
      keywords: [
        "custom trophies Dubai",
        "trophy manufacturer UAE",
        "bespoke awards manufacturer Middle East",
        "sports trophies UAE",
        "corporate awards Dubai",
      ],
    },
  },
  {
    slug: "corporate-gifts",
    title: "Corporate Gifts",
    shortTitle: "Corporate Gifts",
    category: "Gifts",
    tagline: "Your Brand. Their Shelf. Permanently.",
    heroImage: `/cg-banner.webp`,
    categoryImage: "/hp-cat-corporate-v2.webp",
    gallery: [
      "/cg-banner.webp",
      "/cg-crystal-desk.webp",
      "/cg-branded-metal.webp",
      "/cg-vvip-board.webp",
    ],
    description:
      "Corporate gifts that people actually keep. Manufactured for banks, luxury hotels, airlines, and multinationals — pieces that reinforce brand equity every time they're looked at.",
    longDescription: `Most corporate gifts are forgotten within a week. Crystal Arc makes gifts that are placed on desks, displayed in offices, and shown to guests. Our range includes engraved crystal sets, metal desk accessories, branded luxury goods, bespoke packaging, and fully custom pieces designed around your brand identity and the occasion.

We work with procurement teams, marketing agencies, and PA networks managing VVIP gifting — delivering to tight deadlines with zero variance in quality across large batches. Every piece ships individually packed, branded, and ready for presentation.`,
    usps: [
      {
        title: "Brand-Led Design",
        body: "Every gift starts with your brand guidelines. Our designers produce options that feel native to your visual identity — not generic pieces with a logo stamped on.",
      },
      {
        title: "Scalable Without Compromise",
        body: "From a 50-piece board gift to a 5,000-piece employee programme, every unit receives the same quality inspection before leaving our facility.",
      },
      {
        title: "Complete Gift Management",
        body: "Design, production, individual packaging, per-name personalisation, and delivery scheduling — all managed from a single brief.",
      },
      {
        title: "Discretion & Reliability",
        body: "We supply Fortune 500 procurement teams and government protocol offices. NDAs, discreet packaging, and precise delivery timing are standard — not requests.",
      },
    ],
    specs: [
      { label: "Products", value: "Crystal sets, metal accessories, leather goods, mixed-media gifts" },
      { label: "Personalisation", value: "Laser engraving, screen print, embossing, heat foiling" },
      { label: "Turnaround", value: "7–21 working days" },
      { label: "Minimum Order", value: "25 pieces (standard), 1 for executive single gifts" },
      { label: "Packaging", value: "Custom branded boxes, bags, tissue, greeting cards" },
      { label: "Individual Naming", value: "Per-unit personalisation supported" },
    ],
    faqs: [
      {
        q: "Can each gift be personalised with a different name?",
        a: "Yes — individual personalisation (name, department, message) is available across all products. We manage the data file and production sequencing.",
      },
      {
        q: "Can you produce gifts at multiple price points for the same event?",
        a: "Yes — we regularly produce tiered gift programmes (employee, manager, executive, board) from a single brief with consistent design language across all tiers.",
      },
      {
        q: "Do you offer gift packaging as well?",
        a: "Yes. Our packaging team produces custom rigid boxes, fabric bags, branded tissue, and personalised greeting cards as part of the gifting package.",
      },
      {
        q: "How do you handle last-minute orders?",
        a: "We maintain express production slots for existing clients. New clients should discuss timelines at brief stage — we are transparent about what is achievable.",
      },
      {
        q: "Can we see examples of previous work?",
        a: "Yes — we have a comprehensive portfolio and showroom in Dubai. Contact us to arrange a visit or request our digital lookbook.",
      },
    ],
    relatedSlugs: ["boxes", "trophies-awards", "home-decor"],
    whatsappMessage:
      "Hi Crystal Arc, I'm interested in luxury corporate gifts. Please send me more information.",
    seo: {
      title: "Luxury Corporate Gifts Dubai | Branded Premium Gifts UAE | Crystal Arc",
      description:
        "Premium branded corporate gifts manufactured in Dubai. Banks, airlines, luxury hotels, and multinationals. Individual personalisation, luxury packaging, GCC-wide delivery.",
      keywords: [
        "corporate gifts Dubai",
        "luxury corporate gifts UAE",
        "branded gifts manufacturer Dubai",
        "executive gifts UAE",
        "VIP corporate gifts Middle East",
      ],
    },
  },
  {
    slug: "boxes",
    title: "Presentation Boxes & Packaging",
    shortTitle: "Boxes & Packaging",
    category: "Packaging",
    tagline: "The Box Is Part of the Message.",
    heroImage: `/box-banner.webp`,
    categoryImage: "/hp-cat-boxes-v2.webp",
    gallery: [
      "/box-banner.webp",
      "/box-rigid-board.webp",
      "/box-wood-veneer.webp",
      "/box-pu-leather.webp",
    ],
    description:
      "Packaging that signals quality before the gift is even seen. Luxury presentation boxes, award cases, and gift packaging manufactured to the same standard as the pieces they protect.",
    longDescription: `The moment a recipient lifts a Crystal Arc gift box, they know something significant is inside. Our packaging is designed as an extension of the piece — not an afterthought. We manufacture in rigid board, wood, leather, and metal, with internal constructions in velvet, suede, satin, foam, and custom-milled materials that hold each piece precisely.

From a single VVIP jewellery-style box to 2,000 uniform corporate gift cartons, our packaging team works alongside the products team to ensure the unboxing experience reflects the same standard as the piece inside.`,
    usps: [
      {
        title: "Bespoke Interior Construction",
        body: "Custom-milled foam, velvet, and fabric inserts that hold each piece precisely — eliminating movement, protecting surfaces, and creating a deliberate unboxing sequence.",
      },
      {
        title: "Full Material Range",
        body: "Rigid board, wood veneer, leather wrap, anodised metal panels, acrylic windows — we manufacture the box to match the value and character of the contents.",
      },
      {
        title: "Full Exterior Branding",
        body: "Hot foil stamping, debossing, spot UV, fabric labels, engraved metal plates — all exterior branding options executed to commercial print standards.",
      },
      {
        title: "Trophy-to-Box Service",
        body: "We design and produce the trophy and its box together, ensuring dimensional accuracy, proportional fit, and visual coherence between piece and packaging.",
      },
    ],
    specs: [
      { label: "Exterior Materials", value: "Rigid board, wood veneer, leather, acrylic, metal, fabric" },
      { label: "Interior", value: "Velvet, suede, satin, foam, custom-milled inserts" },
      { label: "Closures", value: "Magnetic, ribbon pull, hinged, clasp" },
      { label: "Branding", value: "Hot foil, deboss, UV spot, metal plaques, engraving" },
      { label: "Turnaround", value: "10–18 working days" },
      { label: "Minimum Order", value: "No minimum — single boxes available" },
    ],
    faqs: [
      {
        q: "Can you make a box for a trophy produced elsewhere?",
        a: "Yes — we produce packaging for any existing piece. We need the physical dimensions (or the piece itself for a fitting session) before we quote.",
      },
      {
        q: "Can the box interior hold multiple items?",
        a: "Yes — multi-cavity interiors are standard for gift sets. Every item has a precisely fitted position designed before production.",
      },
      {
        q: "Can you match our exact Pantone colours for the exterior?",
        a: "Yes — Pantone colour matching on exterior fabrics, prints, and foils is standard. We request your brand specification document at briefing.",
      },
      {
        q: "What is the turnaround on packaging only?",
        a: "Standard lead time is 10–18 working days. Packaging runs parallel with product production wherever possible for combined orders.",
      },
      {
        q: "Can we get a physical box sample before the full run?",
        a: "Yes — we produce box samples for orders above 100 units. For smaller runs, first-piece approval is produced before the full batch.",
      },
    ],
    relatedSlugs: ["corporate-gifts", "trophies-awards", "home-decor"],
    whatsappMessage:
      "Hi Crystal Arc, I'm interested in luxury presentation boxes and packaging. Please send me more information.",
    seo: {
      title: "Luxury Presentation Boxes Dubai | Custom Gift Packaging UAE | Crystal Arc",
      description:
        "Custom luxury presentation boxes and award packaging manufactured in Dubai. Rigid board, wood, leather, velvet interiors. Hot foil, deboss, full exterior branding options.",
      keywords: [
        "luxury gift boxes Dubai",
        "custom packaging UAE",
        "presentation boxes manufacturer",
        "award packaging Dubai",
        "luxury boxes Middle East",
      ],
    },
  },
  {
    slug: "home-decor",
    title: "Home & Décor",
    shortTitle: "Home & Décor",
    category: "Décor",
    tagline: "Spaces That Reflect What You've Built.",
    heroImage: `/hp-home-decor-new.png`,
    categoryImage: "/hp-cat-homedecor-v2.webp",
    gallery: [
      "/hp-home-decor-new.png",
      "/factory-1.webp",
      "/trophy-crystal.webp",
      "/factory-2.webp",
    ],
    description:
      "Commission-only crystal and metal décor for luxury residences, five-star hotels, and corporate lobbies. Twenty-five years of award craftsmanship applied to spaces that demand the same standard.",
    longDescription: `Crystal Arc's home and décor range applies our award manufacturing mastery to statement pieces for interior spaces. Commissioned crystal sculptures, personalised desk objects, architectural accent pieces, lobby installations, and curated corporate art objects — all manufactured in-house in Dubai, to the same exacting standards as our ceremony pieces.

We work with interior designers, hotel procurement offices, and private clients who want something that cannot be purchased from a catalogue. Every piece in our home and décor range is produced exclusively for the commissioning client.`,
    usps: [
      {
        title: "Commission-Only Exclusivity",
        body: "Nothing in our home and décor range is mass-produced. Every piece is designed and manufactured exclusively for the client who commissioned it.",
      },
      {
        title: "Material Versatility",
        body: "K9 crystal, optical glass, bronze, brushed stainless, solid brass, exotic woods — materials selected to complement the intended space, not the lowest cost option.",
      },
      {
        title: "Interior Designer Partnership",
        body: "We work directly with interior designers and fit-out contractors, providing 3D renders, material samples, and installation drawings as part of the brief.",
      },
      {
        title: "Scale Without Limits",
        body: "From a 10cm crystal paperweight to a 3-metre lobby sculpture, our facility handles any dimensional requirement with the same production team.",
      },
    ],
    specs: [
      { label: "Products", value: "Sculptures, desk objects, lobby pieces, architectural accents, personalised art" },
      { label: "Materials", value: "K9 crystal, optical glass, bronze, brass, stainless steel, exotic wood" },
      { label: "Scale", value: "Tabletop to installation-scale" },
      { label: "Personalisation", value: "Engraving, casting, surface etching, embedded imagery" },
      { label: "Minimum Order", value: "No minimum — single commissions welcome" },
      { label: "Turnaround", value: "10–30 working days (scale-dependent)" },
    ],
    faqs: [
      {
        q: "Do you work with interior designers directly?",
        a: "Yes — we regularly partner with interior designers and fit-out contractors, providing CAD drawings, material specifications, and installation support.",
      },
      {
        q: "Can a piece incorporate our company logo or a personal message?",
        a: "Yes — engraving, casting, and internal etching are all available and can be combined in a single piece.",
      },
      {
        q: "Is there a minimum order?",
        a: "No — we manufacture single commission pieces. There is no minimum order for home and décor.",
      },
      {
        q: "How is delivery managed for large or fragile pieces?",
        a: "We use our logistics partner network with custom foam packaging for each piece. For installation-scale pieces, we coordinate with the fit-out team on-site.",
      },
      {
        q: "Can we visit your showroom to see examples?",
        a: "Yes — we maintain a showroom at our Dubai head office. Contact us to arrange a visit, or request a digital portfolio specific to your project brief.",
      },
    ],
    relatedSlugs: ["trophies-awards", "boxes", "corporate-gifts"],
    whatsappMessage:
      "Hi Crystal Arc, I'm interested in bespoke home and décor pieces. Please send me more information.",
    seo: {
      title: "Luxury Crystal Home Décor Dubai | Bespoke Decorative Pieces UAE | Crystal Arc",
      description:
        "Commission-only crystal and metal décor for luxury residences, five-star hotels, and corporate lobbies. Manufactured in Dubai. Interior designer partnerships welcome.",
      keywords: [
        "crystal decor Dubai",
        "luxury home accessories UAE",
        "custom decorative pieces Dubai",
        "crystal sculptures Dubai",
        "bespoke home decor UAE",
      ],
    },
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getRelatedProducts(slugs: string[]): Product[] {
  return slugs
    .map((s) => products.find((p) => p.slug === s))
    .filter(Boolean) as Product[];
}

export function getAllProductSlugs(): string[] {
  return products.map((p) => p.slug);
}
