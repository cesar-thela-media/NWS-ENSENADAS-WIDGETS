import type { LandingContent } from "@/lib/types";

// ── Image helpers ──────────────────────────────────────────────────────────
// Production images sourced from NWS CDN (PASS per ASSET-LICENSES.md ledger).

const CDN = "https://www.nws-homes.com/wp-content/uploads/2023/01";
const cdn = (file: string) => `${CDN}/${file}`;

const NWS_IMAGES = {
  customHome: cdn("hero-home-remodeled-richmond-tx-1024x576.webp"),
  customHomeDetail: cdn("custom-homes-2.jpeg"),
  kitchen: cdn("kitchen-remodeling-richmond-tx.jpg"),
  bath: cdn("bathroom-remodeling-richmond-tx.jpg"),
  remodelLiving: cdn("remodeling-1.jpeg"),
  remodelDetail: cdn("remodeling-2.jpeg"),
  remodelKitchen: cdn("remodeling-3.jpeg"),
  remodelBath: cdn("remodeling-4.jpeg"),
  additionBefore: cdn("1-Addition-before.jpeg"),
  additionAfter: cdn("1-Addition-after.jpeg"),
};

const HERO_SLIDESHOW_IMAGES = [
  NWS_IMAGES.customHome,
  NWS_IMAGES.kitchen,
  NWS_IMAGES.remodelLiving,
  NWS_IMAGES.bath,
];

const SERVICE_CARD_FALLBACKS = [
  NWS_IMAGES.additionAfter,
  NWS_IMAGES.remodelLiving,
];

export const landingContent: LandingContent = {
  // ── Hero ──────────────────────────────────────────────────────────────────
  hero: {
    headline:        "Designing Homes\nBuilt to Last",
    subcopy:         "Custom homes and remodeling across Richmond, Katy, Sugar Land, and Greater Houston",
    primaryCta:      "Explore Our Work",
    secondaryCta:    "Book a Consultation",
    recentLabel:     "Recently Completed",
    recentProject:   "Primary Bath · Sugar Land, TX",
    backgroundImage: NWS_IMAGES.kitchen,
    slideshowImages: HERO_SLIDESHOW_IMAGES,
    recentImage:     NWS_IMAGES.bath,
  },

  // ── About ─────────────────────────────────────────────────────────────────
  about: {
    eyebrow:  "ABOUT NWS",
    headline: "Timeless Craftsmanship.\nElevated Living.",
    body:     "Since 2007, NWS has built and remodeled hundreds of homes across Houston. Every project is personal.",
    collage: {
      main:   NWS_IMAGES.remodelLiving,
      top:    NWS_IMAGES.customHomeDetail,
      bottom: NWS_IMAGES.remodelDetail,
    },
    stats: [
      { value: "18+",  label: "Years"      },
      { value: "500+", label: "Projects"  },
      { value: "98%",  label: "Satisfied" },
      { value: "8",    label: "Cities"    },
    ],
  },

  // ── Transformation ────────────────────────────────────────────────────────
  transformation: {
    eyebrow:      "THE TRANSFORMATION",
    headline:     "See the Difference We Make",
    caseStudyCta: "Browse Our Work",
    chips:        ["6 Week Timeline", "$52,000 Investment", "Full Gut Remodel"],
    beforeImage:  NWS_IMAGES.additionBefore,
    afterImage:   NWS_IMAGES.additionAfter,
  },

  // ── Services ──────────────────────────────────────────────────────────────
  services: {
    eyebrow:  "WHAT WE BUILD",
    headline: "Every Space.\nEvery Detail.",
    cards: [
      "Custom Home\nBuilding",
      "Kitchen\nRemodeling",
      "Bathroom\nRemodeling",
      "Shower\nRemodel",
      "Bathtub\nRemodel",
      "Room\nAdditions",
      "Open Concept\nRemodeling",
    ],
    cardImages: [
      NWS_IMAGES.customHome,
      NWS_IMAGES.remodelKitchen,
      NWS_IMAGES.kitchen,
      NWS_IMAGES.bath,
      NWS_IMAGES.remodelBath,
      ...SERVICE_CARD_FALLBACKS,
    ],
    testimonial:
      "NWS remodeled the downstairs of our house including the kitchen, dining, 2 living rooms, and a half bath. It turned out beautifully and they were great to work with.",
    attribution:      "— Allison Crane, Richmond TX",
    rating:           "4.9 — 130+ Google Reviews",
    testimonialImage: NWS_IMAGES.kitchen,
  },

  // ── CTA Band ──────────────────────────────────────────────────────────────
  ctaFooter: {
    heading:      "Ready to Build Something Lasting?",
    body:         "Call us today and mention the website to receive a free consultation and 5% off your next project.",
    primaryCta:   "Start Your Project",
    secondaryCta: "Call Our Office",
    serviceAreas: "Serving Richmond · Sugar Land · Katy · Fulshear · Rosenberg · Weston Lakes · Park Row · Houston",
  },

  // ── Testimonials ──────────────────────────────────────────────────────────
  testimonials: [
    {
      name: "Allison Crane",
      date: "08/30/2023",
      text: "NWS remodeled the downstairs of our house including the kitchen, dining, 2 living rooms, and a half bath. It turned out beautifully and they were great to work with.",
      rating: 5,
      source: "Google",
      initial: "A",
    },
    {
      name: "Katie Jacob",
      date: "08/15/2023",
      text: "NWS took care of our full home build during the middle of the pandemic. Giovani and Alejandro are great communicators and kept us up to date on everything throughout the entire process.",
      rating: 5,
      source: "Google",
      initial: "K",
    },
    {
      name: "Carrie Neal",
      date: "07/21/2023",
      text: "We have used NWS for several home projects, from minor things to major renovations. We keep going back to them because they do good work!",
      rating: 5,
      source: "Google",
      initial: "C",
    },
    {
      name: "Amy Heinz",
      date: "07/04/2023",
      text: "These guys are top notch. Contractors are usually tough, but Alejandro and crew always responded, always showed up and made sure the job was done right.",
      rating: 5,
      source: "Google",
      initial: "A",
    },
    {
      name: "Drew Lowery",
      date: "06/16/2021",
      text: "First class operation and team from building scope of work to final punch list. Alejandro was the Manager over our home renovation and did a great job.",
      rating: 5,
      source: "Google",
      initial: "D",
    },
    {
      name: "Sheila Ventura",
      date: "03/19/2020",
      text: "NWS has just remodeled all 4 of our bathrooms and did a fantastic job. They are friendly and easy to work with and the quality of their work is excellent.",
      rating: 5,
      source: "Google",
      initial: "S",
    },
    {
      name: "Mark Dixon",
      date: "05/16/2018",
      text: "NWS did a great job doing the concrete work and building a 12′ x 40′ covered patio along with a total remodel. Highly recommend.",
      rating: 5,
      source: "Google",
      initial: "M",
    },
    {
      name: "Tim O.",
      date: "03/31/2017",
      text: "Excellent! Very pleased with NWS remodeling. Great value and they can do anything! NWS remodeled our master bathroom and added an outdoor kitchen.",
      rating: 5,
      source: "Angi",
      initial: "T",
    },
  ],
};
