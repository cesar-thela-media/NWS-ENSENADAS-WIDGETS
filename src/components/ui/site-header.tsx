"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { SERVICES } from "@/content/services";
import { NavDrawer } from "./nav-drawer";
import styles from "./site-header.module.css";

const DESKTOP_NAV = [
  { label: "About",     href: "/about" },
  { label: "Galleries", href: "/galleries" },
  { label: "FAQs",      href: "/faqs" },
];

export function SiteHeader() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [scrolled,   setScrolled]   = useState(false);
  const pathname = usePathname();
  const servicesActive = pathname === "/services" || pathname.startsWith("/services/");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}>
        <div className={styles.inner}>
          {/* ── Mobile-only hamburger ── */}
          <button
            className={styles.menuButton}
            type="button"
            onClick={() => setDrawerOpen(true)}
            aria-label="Open navigation menu"
            aria-expanded={drawerOpen}
          >
            <span className={styles.hamburger} aria-hidden="true">☰</span>
            <span>Menu</span>
          </button>

          <Link href="/" className={styles.logo} aria-label="NWS — Home">
            NWS
          </Link>

          {/* ── Desktop horizontal nav ── */}
          <nav className={styles.desktopNav} aria-label="Site navigation">
            <div className={styles.desktopNavItem}>
              <Link
                href="/services"
                className={`${styles.desktopNavLink} ${servicesActive ? styles.desktopNavLinkActive : ""}`}
                aria-haspopup="true"
              >
                Services <span className={styles.desktopNavCaret} aria-hidden="true">›</span>
              </Link>
              <div className={styles.desktopDropdown} aria-label="Services menu">
                <Link href="/services" className={styles.desktopDropdownOverview}>
                  View All Services →
                </Link>
                <div className={styles.desktopDropdownGrid}>
                  {SERVICES.map((service) => (
                    <Link
                      key={service.slug}
                      href={`/services/${service.slug}`}
                      className={`${styles.desktopDropdownLink} ${pathname === `/services/${service.slug}` ? styles.desktopDropdownLinkActive : ""}`}
                    >
                      {service.title}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            {DESKTOP_NAV.map((item) => {
              const isActive =
                pathname === item.href ||
                (item.href !== "/" && pathname.startsWith(item.href));
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`${styles.desktopNavLink} ${isActive ? styles.desktopNavLinkActive : ""}`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <Link href="/contact" className={styles.contactButton}>
            Contact Us <span aria-hidden="true">›</span>
          </Link>
        </div>
      </header>

      <NavDrawer isOpen={drawerOpen} onClose={() => setDrawerOpen(false)} />
    </>
  );
}
