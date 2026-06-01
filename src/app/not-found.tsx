import type { Metadata } from "next";
import Link from "next/link";
import { SiteHeader } from "@/components/ui/site-header";
import { Footer } from "@/components/landing/footer";
import styles from "./not-found.module.css";

const QUICK_PATHS = [
  { href: "/services", label: "Explore Services" },
  { href: "/galleries", label: "View Galleries" },
  { href: "/about", label: "About NWS" },
  { href: "/faqs", label: "Read FAQs" },
];

export const metadata: Metadata = {
  title: "Page Not Found | NWS Custom Homes & Remodeling",
};

export default function NotFound() {
  return (
    <>
      <SiteHeader />
      <main className={styles.main}>
        <div className={styles.inner}>
          <section className={styles.heroCard}>
            <div className={styles.copyColumn}>
              <p className={styles.eyebrow}>404 ERROR</p>
              <p className={styles.code} aria-hidden="true">404</p>
              <h1 className={styles.heading}>Page Not Found</h1>
              <p className={styles.body}>
                The page you&apos;re looking for may have moved, the link may be outdated, or the address may be incorrect. The rest of the site is still available below.
              </p>
              <div className={styles.actions}>
                <Link href="/" className={styles.primaryBtn}>Back to Home</Link>
                <Link href="/contact" className={styles.outlineBtn}>Contact Us</Link>
              </div>
            </div>

            <aside className={styles.supportCard}>
              <p className={styles.supportEyebrow}>Where to go next</p>
              <h2 className={styles.supportTitle}>Jump back into the parts of the site most visitors need.</h2>
              <div className={styles.pathGrid}>
                {QUICK_PATHS.map((path) => (
                  <Link key={path.href} href={path.href} className={styles.pathCard}>
                    <span className={styles.pathLabel}>{path.label}</span>
                    <span className={styles.pathArrow} aria-hidden="true">↗</span>
                  </Link>
                ))}
              </div>
              <p className={styles.supportText}>
                If you were trying to reach a specific service or project type, call NWS directly and we will point you to the right page.
              </p>
              <a href="tel:+12812992309" className={styles.callLink}>(281) 299-2309</a>
            </aside>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
