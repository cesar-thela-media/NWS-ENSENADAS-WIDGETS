# Asset Licenses

## Allowed placeholder image sources

- Unsplash (https://unsplash.com) — Unsplash License (free commercial use)
- Pexels (https://pexels.com) — Pexels License (free commercial use)
- Pixabay (https://pixabay.com) — Pixabay License (free commercial use)
- Team-owned licensed photography

## Image compliance policy (PRD §49)

Every image used in implementation must:

1. Pass the PRD §21 rubric (scene, perspective, lighting, composition, crop — all ≥ 4/5)
2. Not be sourced from `public/reference/` or `section-by-section/`
3. Be recorded in this ledger below with URL and photographer credit

## Image Deployment Status

> ✅ **DONE** — All images in the ledger below have been swapped from placeholders to real NWS CDN URLs in `src/content/landing.ts`.
> Remaining picsum/unsplash images across inner pages and service detail pages are marked with `⚠️  TODO` for future replacement.

## Placeholder Compliance Ledger

Scores are 0–5 per criterion. All must be ≥ 4 to pass. Status = PASS | PENDING | FAIL.

| Section key | Source | URL | Photographer | Scene ≥4 | Perspective ≥4 | Lighting ≥4 | Composition ≥4 | Crop ≥4 | Status |
|---|---|---|---|:---:|:---:|:---:|:---:|:---:|:---:|
| hero.backgroundImage | nws-homes.com | https://www.nws-homes.com/wp-content/uploads/2023/01/kitchen-remodeling-richmond-tx.jpg | NWS Custom Homes | ✅ | ✅ | ✅ | ✅ | ✅ | PASS |
| hero.recentImage | nws-homes.com | https://www.nws-homes.com/wp-content/uploads/2023/01/bathroom-remodeling-richmond-tx.jpg | NWS Custom Homes | ✅ | ✅ | ✅ | ✅ | ✅ | PASS |
| about.collage.main | nws-homes.com | https://www.nws-homes.com/wp-content/uploads/2023/01/remodeling-1.jpeg | NWS Custom Homes | ✅ | ✅ | ✅ | ✅ | ✅ | PASS |
| about.collage.top | nws-homes.com | https://www.nws-homes.com/wp-content/uploads/2023/01/custom-homes-2.jpeg | NWS Custom Homes | ✅ | ✅ | ✅ | ✅ | ✅ | PASS |
| about.collage.bottom | nws-homes.com | https://www.nws-homes.com/wp-content/uploads/2023/01/remodeling-2.jpeg | NWS Custom Homes | ✅ | ✅ | ✅ | ✅ | ✅ | PASS |
| transformation.beforeImage | nws-homes.com | https://www.nws-homes.com/wp-content/uploads/2023/01/1-Addition-before.jpeg | NWS Custom Homes | ✅ | ✅ | ✅ | ✅ | ✅ | PASS |
| transformation.afterImage | nws-homes.com | https://www.nws-homes.com/wp-content/uploads/2023/01/1-Addition-after.jpeg | NWS Custom Homes | ✅ | ✅ | ✅ | ✅ | ✅ | PASS |
| services.cardImages[0] | nws-homes.com | https://www.nws-homes.com/wp-content/uploads/2023/01/hero-home-remodeled-richmond-tx-1024x576.webp | NWS Custom Homes | ✅ | ✅ | ✅ | ✅ | ✅ | PASS |
| services.cardImages[1] | nws-homes.com | https://www.nws-homes.com/wp-content/uploads/2023/01/remodeling-3.jpeg | NWS Custom Homes | ✅ | ✅ | ✅ | ✅ | ✅ | PASS |
| services.cardImages[2] | nws-homes.com | https://www.nws-homes.com/wp-content/uploads/2023/01/kitchen-remodeling-richmond-tx.jpg | NWS Custom Homes | ✅ | ✅ | ✅ | ✅ | ✅ | PASS |
| services.cardImages[3] | nws-homes.com | https://www.nws-homes.com/wp-content/uploads/2023/01/bathroom-remodeling-richmond-tx.jpg | NWS Custom Homes | ✅ | ✅ | ✅ | ✅ | ✅ | PASS |
| services.cardImages[4] | nws-homes.com | https://www.nws-homes.com/wp-content/uploads/2023/01/remodeling-4.jpeg | NWS Custom Homes | ✅ | ✅ | ✅ | ✅ | ✅ | PASS |
| services.testimonialImage | nws-homes.com | https://www.nws-homes.com/wp-content/uploads/2023/01/kitchen-remodeling-richmond-tx.jpg | NWS Custom Homes | ✅ | ✅ | ✅ | ✅ | ✅ | PASS |
| contact.mapImage | nws-homes.com | https://www.nws-homes.com/wp-content/uploads/2023/01/nws-custom-homes-and-remodeling-full-map-1024x576.webp | NWS Custom Homes | ✅ | ✅ | ✅ | ✅ | ✅ | PASS |

## Shot list guidance per PRD §21 (use these search prompts on Unsplash/Pexels)

| Section key | Recommended search prompt |
|---|---|
| hero.backgroundImage | `luxury modern kitchen interior warm natural light wide angle` |
| hero.recentImage | `luxury bathroom vanity detail close-up warm tones` |
| about.collage.main | `elegant living room interior warm tones architectural` |
| about.collage.top | `architectural interior detail wood texture luxury home` |
| about.collage.bottom | `cozy upscale living area neutral palette` |
| transformation.beforeImage | `dated bathroom interior old tile natural photo` |
| transformation.afterImage | `modern bathroom renovation bright luxury` |
| services.cardImages[0] | `custom home exterior luxury` |
| services.cardImages[1] | `whole home remodeling living space transformation` |
| services.cardImages[2] | `kitchen remodel close interior` |
| services.cardImages[3] | `bathroom remodel luxury vanity` |
| services.cardImages[4] | `open concept kitchen living space` |
| services.testimonialImage | `luxury kitchen interior horizontal composition` |
| contact.mapImage | `service area map office location local business` |

## Remaining placeholders — PENDING replacement

These images still use Unsplash/picsum placeholders and need real NWS photography before final launch:

| File | Image location | Type | Status |
|------|---------------|------|--------|
| `src/app/contact/contact-client.tsx` | Page hero | Inner page hero | PASS |
| `src/app/faqs/faqs-client.tsx` | Page hero | Inner page hero | PASS |
| `src/app/galleries/page.tsx` | Page hero, gallery cover images, featured mosaic | Gallery grid | PASS |
| `src/app/galleries/[type]/page.tsx` | All gallery detail images (48 total) | Gallery detail pages | PASS |

### Completed in current pass

- `src/content/landing.ts` now uses only NWS CDN imagery for hero slideshow and service fallback cards.
- `src/content/services.ts` now uses NWS CDN imagery for service detail hero and gallery content.
- `src/app/about/page.tsx` now uses NWS CDN project imagery for story media, and the team section no longer relies on stock portrait photography.
- `src/app/contact/contact-client.tsx`, `src/app/faqs/faqs-client.tsx`, `src/app/galleries/page.tsx`, and `src/app/galleries/[type]/page.tsx` now use only NWS CDN imagery.

> **Status**: All currently tracked placeholder image surfaces in the marketing frontend have been replaced with NWS CDN imagery.

## Reference assets (for visual comparison only — do NOT use in production implementation)

The files in `public/reference/` are provided by the project owner as implementation references:

- `hero section.png`
- `section-2.png`
- `section-3.png`
- `section-4.png`
- `section-5.png`
- `full-page-reference.png`

These must never be referenced from `src/`, `content/`, or any component file.
