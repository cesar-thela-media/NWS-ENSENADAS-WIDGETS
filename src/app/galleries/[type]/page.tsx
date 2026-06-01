import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { SiteHeader } from "@/components/ui/site-header";
import { Footer } from "@/components/landing/footer";
import { CtaBand } from "@/components/landing/cta-band";
import { landingContent } from "@/content/landing";
import { GalleryGridClient } from "./gallery-grid-client";
import styles from "./gallery-type.module.css";

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

interface GalleryCategory {
  slug: string;
  title: string;
  description: string;
  images: { src: string; alt: string; label?: string }[];
}

const CUSTOM_HOME_POOL = [
  NWS_IMAGES.customHome,
  NWS_IMAGES.customHomeDetail,
  NWS_IMAGES.remodelLiving,
  NWS_IMAGES.remodelDetail,
  NWS_IMAGES.remodelKitchen,
  NWS_IMAGES.kitchen,
  NWS_IMAGES.customHome,
  NWS_IMAGES.customHomeDetail,
  NWS_IMAGES.remodelLiving,
  NWS_IMAGES.remodelDetail,
  NWS_IMAGES.remodelKitchen,
  NWS_IMAGES.kitchen,
];

const KITCHEN_POOL = [
  NWS_IMAGES.kitchen,
  NWS_IMAGES.remodelKitchen,
  NWS_IMAGES.remodelLiving,
  NWS_IMAGES.customHome,
  NWS_IMAGES.kitchen,
  NWS_IMAGES.remodelKitchen,
  NWS_IMAGES.remodelLiving,
  NWS_IMAGES.customHomeDetail,
  NWS_IMAGES.kitchen,
  NWS_IMAGES.remodelKitchen,
  NWS_IMAGES.remodelLiving,
  NWS_IMAGES.customHome,
];

const BATHROOM_POOL = [
  NWS_IMAGES.bath,
  NWS_IMAGES.remodelBath,
  NWS_IMAGES.remodelDetail,
  NWS_IMAGES.additionAfter,
  NWS_IMAGES.bath,
  NWS_IMAGES.remodelBath,
  NWS_IMAGES.remodelDetail,
  NWS_IMAGES.additionAfter,
  NWS_IMAGES.bath,
  NWS_IMAGES.remodelBath,
  NWS_IMAGES.remodelDetail,
  NWS_IMAGES.additionAfter,
];

const ADDITION_POOL = [
  NWS_IMAGES.additionAfter,
  NWS_IMAGES.additionBefore,
  NWS_IMAGES.customHomeDetail,
  NWS_IMAGES.remodelDetail,
  NWS_IMAGES.additionAfter,
  NWS_IMAGES.additionBefore,
  NWS_IMAGES.customHome,
  NWS_IMAGES.remodelLiving,
  NWS_IMAGES.additionAfter,
  NWS_IMAGES.additionBefore,
  NWS_IMAGES.customHomeDetail,
  NWS_IMAGES.remodelDetail,
];

const GALLERY_DATA: GalleryCategory[] = [
  {
    slug: "custom-homes",
    title: "Custom Homes",
    description: "Each home is designed to exact client specifications. Browse completed custom builds from NWS across Greater Houston.",
    images: Array.from({ length: 12 }, (_, i) => ({
      src: CUSTOM_HOME_POOL[i],
      alt: `Custom home build ${i + 1}`,
      label: i % 3 === 0 ? "Richmond, TX" : i % 3 === 1 ? "Sugar Land, TX" : "Katy, TX",
    })),
  },
  {
    slug: "kitchen-remodeling",
    title: "Kitchen Remodeling",
    description: "From dark dramatic islands to bright open kitchens — see the range of kitchen transformations NWS has delivered.",
    images: [
      { src: NWS_IMAGES.kitchen, alt: "Dark modern kitchen island", label: "Sugar Land, TX" },
      { src: NWS_IMAGES.remodelKitchen, alt: "Bright open kitchen", label: "Katy, TX" },
      ...Array.from({ length: 10 }, (_, i) => ({
        src: KITCHEN_POOL[i + 2],
        alt: `Kitchen remodel project ${i + 1}`,
        label: "Greater Houston",
      })),
    ],
  },
  {
    slug: "bathroom-remodeling",
    title: "Bathroom Remodeling",
    description: "Spa-like master baths, clean guest bathrooms, and accessible ADA designs — explore NWS bathroom projects.",
    images: [
      { src: NWS_IMAGES.bath, alt: "Luxury freestanding bath", label: "Richmond, TX" },
      ...Array.from({ length: 11 }, (_, i) => ({
        src: BATHROOM_POOL[i + 1],
        alt: `Bathroom remodel ${i + 1}`,
        label: "Greater Houston",
      })),
    ],
  },
  {
    slug: "room-additions",
    title: "Room Additions",
    description: "Seamlessly integrated additions that match the existing home architecture inside and out.",
    images: Array.from({ length: 12 }, (_, i) => ({
      src: ADDITION_POOL[i],
      alt: `Room addition ${i + 1}`,
      label: i % 2 === 0 ? "Fulshear, TX" : "Katy, TX",
    })),
  },
];

interface Props {
  params: Promise<{ type: string }>;
}

export async function generateStaticParams() {
  return GALLERY_DATA.map((g) => ({ type: g.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { type } = await params;
  const gallery = GALLERY_DATA.find((g) => g.slug === type);
  if (!gallery) return {};
  return {
    title: `${gallery.title} Gallery | NWS Custom Homes & Remodeling`,
    description: gallery.description.slice(0, 160),
  };
}

export default async function GalleryTypePage({ params }: Props) {
  const { type } = await params;
  const gallery = GALLERY_DATA.find((g) => g.slug === type);
  if (!gallery) notFound();

  const totalImages = gallery.images.length;
  const locationCount = new Set(gallery.images.map((image) => image.label).filter(Boolean)).size;

  return (
    <>
      <SiteHeader />
      <main>
        {/* ── Hero ── */}
        <section className={styles.topBar}>
          <div className={styles.topBarInner}>
            <div className={styles.heroCopy}>
              <Link href="/galleries" className={styles.backLink}>← All Galleries</Link>
              <p className={styles.heroEyebrow}>CURATED COLLECTION</p>
              <h1 className={styles.pageTitle}>{gallery.title}</h1>
              <p className={styles.pageDesc}>{gallery.description}</p>
              <div className={styles.heroActions}>
                <a href="#photo-grid" className={styles.primaryBtn}>Browse Photos</a>
                <Link href="/contact" className={styles.secondaryBtn}>Ask About This Scope</Link>
              </div>
            </div>
            <aside className={styles.heroPanel}>
              <p className={styles.panelEyebrow}>Collection overview</p>
              <h2 className={styles.panelTitle}>A closer look at real work in this project category.</h2>
              <div className={styles.heroStats}>
                <div className={styles.heroStat}>
                  <span className={styles.heroStatValue}>{totalImages}</span>
                  <span className={styles.heroStatLabel}>Photos in this gallery</span>
                </div>
                <div className={styles.heroStat}>
                  <span className={styles.heroStatValue}>{locationCount || 1}</span>
                  <span className={styles.heroStatLabel}>Location labels shown</span>
                </div>
              </div>
            </aside>
          </div>
        </section>

        {/* ── Photo grid (client — handles lightbox) ── */}
        <section className={styles.gridSection} id="photo-grid">
          <div className={styles.gridInner}>
            <div className={styles.gridIntro}>
              <div>
                <p className={styles.sectionEyebrow}>PHOTO COLLECTION</p>
                <h2 className={styles.sectionHeading}>Browse the Full Set</h2>
              </div>
              <p className={styles.gridLead}>
                Open any image for a larger view. Use the labels to spot locations and compare layouts, finishes, and detail decisions across multiple projects.
              </p>
            </div>
            <GalleryGridClient images={gallery.images} />
          </div>
        </section>

        {/* ── Other galleries ── */}
        <section className={styles.otherSection}>
          <div className={styles.otherInner}>
            <div className={styles.otherIntro}>
              <div>
                <p className={styles.eyebrow}>BROWSE MORE</p>
                <h2 className={styles.sectionHeading}>Other Galleries</h2>
              </div>
              <p className={styles.otherLead}>
                If you are comparing project types, these adjacent collections give a quick read on how NWS approaches other scopes.
              </p>
            </div>
            <div className={styles.otherGrid}>
              {GALLERY_DATA.filter((g) => g.slug !== type).map((g, index) => (
                <Link key={g.slug} href={`/galleries/${g.slug}`} className={styles.otherCard}>
                  <div className={styles.otherImgWrap}>
                    <Image
                      src={g.images[0].src}
                      alt={g.title}
                      fill
                      sizes="(max-width: 700px) 100vw, 33vw"
                      style={{ objectFit: "cover", transition: "transform 380ms ease" }}
                      className={styles.otherImg}
                    />
                    <span className={styles.otherIndex}>{String(index + 1).padStart(2, "0")}</span>
                    <div className={styles.otherOverlay} />
                    <span className={styles.otherTitle}>{g.title}</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <CtaBand content={landingContent.ctaFooter} />
      </main>
      <Footer />
    </>
  );
}
