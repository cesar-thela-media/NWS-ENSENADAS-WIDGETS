import type { Metadata } from "next";
import { SiteHeader } from "@/components/ui/site-header";
import { Footer } from "@/components/landing/footer";
import styles from "./terms.module.css";

const TERMS_HIGHLIGHTS = [
  "How this website may be used and what is prohibited.",
  "What project estimates do and do not represent.",
  "Which laws govern disputes and changes to these terms.",
];

const TERMS_SECTIONS = [
  { id: "use-of-this-site", label: "Use of This Site" },
  { id: "intellectual-property", label: "Intellectual Property" },
  { id: "estimates-and-contracts", label: "Estimates and Contracts" },
  { id: "no-warranty", label: "No Warranty" },
  { id: "limitation-of-liability", label: "Limitation of Liability" },
  { id: "external-links", label: "External Links" },
  { id: "governing-law", label: "Governing Law" },
  { id: "changes-to-terms", label: "Changes to Terms" },
  { id: "contact", label: "Contact" },
];

export const metadata: Metadata = {
  title: "Terms of Service | NWS Custom Homes & Remodeling",
};

export default function TermsPage() {
  return (
    <>
      <SiteHeader />
      <main className={styles.page}>
        <section className={styles.hero}>
          <div className={styles.inner}>
            <div className={styles.heroGrid}>
              <div className={styles.heroCopy}>
                <p className={styles.eyebrow}>LEGAL INFORMATION</p>
                <h1 className={styles.heading}>Terms of Service</h1>
                <p className={styles.intro}>
                  These terms explain the rules for using the NWS website, what project information on the site represents, and the legal framework that applies.
                </p>
                <p className={styles.updated}>Last updated: May 2026</p>
                <ul className={styles.highlightList}>
                  {TERMS_HIGHLIGHTS.map((item) => (
                    <li key={item} className={styles.highlightItem}>{item}</li>
                  ))}
                </ul>
              </div>
              <aside className={styles.heroPanel}>
                <p className={styles.panelEyebrow}>Need clarification?</p>
                <h2 className={styles.panelTitle}>Use the site with a clear understanding of what is informational and what requires a contract.</h2>
                <p className={styles.panelBody}>
                  Website content can help you understand NWS services, but formal project scope, pricing, and commitments always come through direct consultation and signed agreements.
                </p>
                <div className={styles.panelActions}>
                  <a href="/contact" className={styles.primaryBtn}>Start a Conversation</a>
                  <a href="tel:+12812992309" className={styles.secondaryBtn}>Call NWS</a>
                </div>
              </aside>
            </div>
          </div>
        </section>

        <section className={styles.contentSection}>
          <div className={styles.inner}>
            <div className={styles.contentGrid}>
              <aside className={styles.sideNav}>
                <p className={styles.sideNavEyebrow}>On this page</p>
                <nav aria-label="Terms of service sections" className={styles.sideNavList}>
                  {TERMS_SECTIONS.map((section) => (
                    <a key={section.id} href={`#${section.id}`} className={styles.sideNavLink}>{section.label}</a>
                  ))}
                </nav>
              </aside>
              <div className={styles.documentCard}>
                <div className={styles.body}>
                  <p>Welcome to NWS Custom Homes &amp; Remodeling (&ldquo;NWS,&rdquo; &ldquo;we,&rdquo; or &ldquo;us&rdquo;). By accessing or using our website at nws-homes.com, you agree to be bound by these Terms of Service. If you do not agree, please do not use this site.</p>

                  <section id="use-of-this-site" className={styles.sectionBlock}>
                    <h2>Use of This Site</h2>
                    <p>This website is provided for informational purposes only. You may use it for personal, non-commercial purposes. You agree not to:</p>
                    <ul>
                      <li>Use the site for any unlawful purpose</li>
                      <li>Attempt to gain unauthorized access to our systems</li>
                      <li>Interfere with the proper functioning of the website</li>
                      <li>Copy, reproduce, or distribute content without written permission</li>
                    </ul>
                  </section>

                  <section id="intellectual-property" className={styles.sectionBlock}>
                    <h2>Intellectual Property</h2>
                    <p>All content on this website including text, images, logos, and design is the intellectual property of NWS Custom Homes &amp; Remodeling unless otherwise noted. You may not reproduce, distribute, modify, or create derivative works without prior written consent.</p>
                  </section>

                  <section id="estimates-and-contracts" className={styles.sectionBlock}>
                    <h2>Estimates and Contracts</h2>
                    <p>Project estimates, pricing, timelines, and specifications provided through this website or consultations are preliminary estimates only. They do not constitute a binding offer or contract. Formal written contracts are required for all construction and remodeling projects. Terms, pricing, and timelines may change based on material availability, site conditions, and scope of work.</p>
                  </section>

                  <section id="no-warranty" className={styles.sectionBlock}>
                    <h2>No Warranty</h2>
                    <p>This website and its content are provided &ldquo;as-is&rdquo; and &ldquo;as available&rdquo; without warranties of any kind, either express or implied. NWS does not guarantee that the website will be uninterrupted, error-free, or free of harmful components.</p>
                  </section>

                  <section id="limitation-of-liability" className={styles.sectionBlock}>
                    <h2>Limitation of Liability</h2>
                    <p>To the fullest extent permitted by law, NWS Custom Homes &amp; Remodeling shall not be liable for any direct, indirect, incidental, consequential, or punitive damages arising from your use of this website or reliance on any information provided herein.</p>
                  </section>

                  <section id="external-links" className={styles.sectionBlock}>
                    <h2>External Links</h2>
                    <p>Our website may contain links to third-party websites. We are not responsible for the content, privacy practices, or terms of those sites.</p>
                  </section>

                  <section id="governing-law" className={styles.sectionBlock}>
                    <h2>Governing Law</h2>
                    <p>These Terms of Service are governed by the laws of the State of Texas. Any disputes arising from these terms shall be resolved exclusively in the courts of Fort Bend County, Texas.</p>
                  </section>

                  <section id="changes-to-terms" className={styles.sectionBlock}>
                    <h2>Changes to Terms</h2>
                    <p>We reserve the right to update these terms at any time. Changes will be posted on this page with an updated effective date. Continued use of the site after changes constitutes acceptance of the new terms.</p>
                  </section>

                  <section id="contact" className={styles.sectionBlock}>
                    <h2>Contact</h2>
                    <p>If you have questions about these Terms of Service, please contact us:</p>
                    <p>
                      Email: <a href="mailto:info@nws-homes.com">info@nws-homes.com</a><br />
                      Phone: <a href="tel:+12812992309">(281) 299-2309</a>
                    </p>
                  </section>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
