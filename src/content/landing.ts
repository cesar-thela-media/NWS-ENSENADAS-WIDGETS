import type { LandingContent } from "@/lib/types";

// ── Image helpers ──────────────────────────────────────────────────────────
// Production images sourced from NWS CDN (PASS per ASSET-LICENSES.md ledger).
// Remaining Unsplash/picsum placeholders are marked with TODO for replacement.

const CDN = "https://www.nws-homes.com/wp-content/uploads/2023/01";

/** Unsplash placeholder helper — for images still awaiting real NWS photography */
function unsplash(id: string, w: number): string {
  return `https://images.unsplash.com/photo-${id}?w=${w}&q=80&auto=format&fit=crop`;
}

// ⚠️  TODO: Replace with real NWS project photography before launch.
const SLIDESHOW_FALLBACK = [
  unsplash("1600585154340-be6161a56a0c", 1920),
  unsplash("1600607687939-ce8a6c25118c", 1920),
  unsplash("1560448204-e02f11c3d0e2",   1920),
  unsplash("1522771739844-6a9f6d5f14af",1920),
];

// ⚠️  TODO: Services cardImages[5..6] — replace with real NWS photography.
const SRV_FALLBACK: string[] = [
  "https://picsum.photos/seed/nws-room-addition/600/900",  // Room Additions
  "https://picsum.photos/seed/nws-open-concept/600/900",   // Open Concept Remodeling
];

export const landingContent: LandingContent = {
  // ── Hero ──────────────────────────────────────────────────────────────────
  hero: {
    headline:        "Designing Homes\nBuilt to Last",
    subcopy:         "Custom homes and remodeling across Richmond, Katy, Sugar Land, and Greater Houston",
    primaryCta:      "Explore Our Work",
    secondaryCta:    "Book a Consultation",
    recentLabel:     "Recently Completed",
    recentProject:   "Master Bath · Sugar Land, TX",
    backgroundImage: `${CDN}/kitchen-remodeling-richmond-tx.jpg`,
    slideshowImages: SLIDESHOW_FALLBACK,
    recentImage:     `${CDN}/bathroom-remodeling-richmond-tx.jpg`,
  },

  // ── About ─────────────────────────────────────────────────────────────────
  about: {
    eyebrow:  "ABOUT NWS",
    headline: "Timeless Craftsmanship.\nElevated Living.",
    body:     "Since 2007, NWS has built and remodeled hundreds of homes across Houston. Every project is personal.",
    collage: {
      main:   `${CDN}/remodeling-1.jpeg`,
      top:    `${CDN}/custom-homes-2.jpeg`,
      bottom: `${CDN}/remodeling-2.jpeg`,
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
    beforeImage:  `${CDN}/1-Addition-before.jpeg`,
    afterImage:   `${CDN}/1-Addition-after.jpeg`,
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
      `${CDN}/hero-home-remodeled-richmond-tx-1024x576.webp`, // Custom Home Building
      `${CDN}/remodeling-3.jpeg`,                              // Kitchen Remodeling
      `${CDN}/kitchen-remodeling-richmond-tx.jpg`,             // Bathroom Remodeling
      `${CDN}/bathroom-remodeling-richmond-tx.jpg`,            // Shower Remodel
      `${CDN}/remodeling-4.jpeg`,                              // Bathtub Remodel
      ...SRV_FALLBACK,                                          // Room Additions + Open Concept
    ],
    testimonial:
      "NWS remodeled the downstairs of our house including the kitchen, dining, 2 living rooms, and a half bath. It turned out beautifully and they were great to work with.",
    attribution:      "— Allison Crane, Richmond TX",
    rating:           "4.9 — 130+ Google Reviews",
    testimonialImage: `${CDN}/kitchen-remodeling-richmond-tx.jpg`,
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
