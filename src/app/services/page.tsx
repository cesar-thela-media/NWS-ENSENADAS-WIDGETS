import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SiteHeader } from "@/components/ui/site-header";
import { Footer } from "@/components/landing/footer";
import { CtaBand } from "@/components/landing/cta-band";
import { landingContent } from "@/content/landing";
import { SERVICES } from "@/content/services";
import styles from "./services.module.css";

// ⚠️  TODO: Replace remaining picsum images with real NWS photography.
const CDN = "https://www.nws-homes.com/wp-content/uploads/2023/01";

export const metadata: Metadata = {
  title: "Services | NWS Custom Homes & Remodeling — Richmond, TX",
  description:
    "NWS offers custom home building, kitchen remodeling, bathroom remodeling, room additions, open concept, and more across Greater Houston since 2007.",
};

const HERO_HIGHLIGHTS = [
  "Custom homes, kitchens, baths, additions, and full-home transformations.",
  "One licensed team coordinating design, permits, trades, and delivery.",
  "Serving Richmond, Katy, Sugar Land, and Greater Houston since 2007.",
];

const SERVICE_PILLARS = [
  "Clear scopes, schedules, and pricing before construction starts.",
  "Dedicated project leadership from kickoff through final walkthrough.",
  "Design-minded execution so every room feels cohesive when finished.",
];

const WHY_NWS = [
  {
    stat: "500+",
    title: "Completed projects",
    copy: "From one-room remodels to full custom builds, the portfolio is broad and proven.",
  },
  {
    stat: "18+",
    title: "Years locally",
    copy: "NWS has been building and remodeling in Fort Bend County and Greater Houston since 2007.",
  },
  {
    stat: "1",
    title: "Single accountable team",
    copy: "Clients work through one coordinated builder instead of managing separate trades themselves.",
  },
  {
    stat: "98%",
    title: "Client satisfaction",
    copy: "The process is built around communication, clean execution, and dependable follow-through.",
  },
];

export default function ServicesPage() {
  return (
    <>
      <SiteHeader />
      <main>
        {/* ── Page Hero ── */}
        <section className={styles.pageHero}>
          <Image
            src={`${CDN}/hero-home-remodeled-richmond-tx-1024x576.webp`}
            alt="NWS custom remodeling work"
            fill
            priority
            sizes="100vw"
            className={styles.heroImg}
          />
          <div className={styles.heroOverlay} />
          <div className={styles.heroContent}>
            <div className={styles.heroCopy}>
              <p className={styles.heroEyebrow}>WHAT WE BUILD</p>
              <h1 className={styles.heroHeading}>Every Space.<br />Every Detail.</h1>
              <p className={styles.heroSub}>
                From custom homes to kitchen remodels, NWS manages design, construction, coordination,
                and finishing with a single team focused on craftsmanship and clarity.
              </p>
              <div className={styles.heroActions}>
                <Link href="/contact" className={styles.primaryBtn}>Start Your Project</Link>
                <Link href="/galleries" className={styles.secondaryBtn}>View Project Gallery</Link>
              </div>
              <ul className={styles.heroHighlights}>
                {HERO_HIGHLIGHTS.map((item) => (
                  <li key={item} className={styles.heroHighlightItem}>{item}</li>
                ))}
              </ul>
            </div>
            <aside className={styles.heroPanel}>
              <p className={styles.panelEyebrow}>Built for Greater Houston homeowners</p>
              <h2 className={styles.panelTitle}>One team from first conversation to final walkthrough.</h2>
              <ul className={styles.panelList}>
                <li>Design-build guidance for new construction and remodeling.</li>
                <li>Permit management, scheduling, and trade coordination handled in-house.</li>
                <li>Detailed finish work that matches the rest of your home, not just the remodel.</li>
              </ul>
            </aside>
          </div>
        </section>

        {/* ── Services Grid ── */}
        <section className={styles.gridSection}>
          <div className={styles.gridInner}>
            <div className={styles.gridIntro}>
              <div className={styles.gridCopy}>
                <p className={styles.eyebrow}>OUR SERVICES</p>
                <h2 className={styles.sectionHeading}>What We Offer</h2>
                <div className={styles.rule} />
                <p className={styles.sectionBody}>
                  Whether you are building from the ground up or reshaping the rooms you already live in,
                  each service is delivered with the same planning discipline, premium finish standards,
                  and direct client communication.
                </p>
              </div>
              <div className={styles.pillarsCard}>
                <p className={styles.pillarsEyebrow}>How every project is run</p>
                <ul className={styles.pillarsList}>
                  {SERVICE_PILLARS.map((pillar) => (
                    <li key={pillar} className={styles.pillarItem}>{pillar}</li>
                  ))}
                </ul>
              </div>
            </div>
            <ul className={styles.serviceGrid}>
              {SERVICES.map((service, index) => (
                <li key={service.slug} className={styles.serviceCard}>
                  <Link href={`/services/${service.slug}`} className={styles.cardLink}>
                    <div className={styles.cardImgWrap}>
                      <Image
                        src={service.heroImage}
                        alt={service.title}
                        fill
                        sizes="(max-width: 700px) 100vw, (max-width: 1100px) 50vw, 33vw"
                        style={{ objectFit: "cover", transition: "transform 420ms ease" }}
                        className={styles.cardImg}
                      />
                      <span className={styles.cardIndex}>{String(index + 1).padStart(2, "0")}</span>
                      <div className={styles.cardOverlay} />
                    </div>
                    <div className={styles.cardBody}>
                      <h3 className={styles.cardTitle}>{service.title}</h3>
                      <p className={styles.cardDesc}>{service.tagline}</p>
                      {service.startingPrice && (
                        <p className={styles.cardPrice}>Starting from {service.startingPrice}</p>
                      )}
                      <div className={styles.cardFeatures}>
                        {service.features.slice(0, 3).map((f) => (
                          <span key={f} className={styles.featureChip}>{f}</span>
                        ))}
                      </div>
                      <span className={styles.cardCta}>Learn More →</span>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ── Why NWS strip ── */}
        <section className={styles.whySection}>
          <div className={styles.whyInner}>
            <div className={styles.whyIntro}>
              <p className={styles.eyebrowLight}>WHY NWS</p>
              <h2 className={styles.sectionHeadingLight}>A better process produces a better finish.</h2>
              <p className={styles.whyBody}>
                Homeowners are not just buying a finished room. They are buying confidence in the planning,
                communication, craftsmanship, and accountability behind it.
              </p>
            </div>
            <div className={styles.whyGrid}>
              {WHY_NWS.map((item) => (
                <article key={item.title} className={styles.whyCard}>
                  <span className={styles.whyValue}>{item.stat}</span>
                  <h3 className={styles.whyCardTitle}>{item.title}</h3>
                  <p className={styles.whyCardCopy}>{item.copy}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <CtaBand content={landingContent.ctaFooter} />
      </main>
      <Footer />
    </>
  );
}
