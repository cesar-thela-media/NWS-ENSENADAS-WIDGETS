import type { Metadata } from "next";
import { SiteHeader } from "@/components/ui/site-header";
import { Footer } from "@/components/landing/footer";
import styles from "./policy.module.css";

const POLICY_HIGHLIGHTS = [
  "What information we collect when you contact NWS.",
  "How cookies and analytics support the website experience.",
  "How to reach us about your privacy rights and questions.",
];

const POLICY_SECTIONS = [
  { id: "information-we-collect", label: "Information We Collect" },
  { id: "how-we-use-your-information", label: "How We Use Your Information" },
  { id: "cookies", label: "Cookies" },
  { id: "data-security", label: "Data Security" },
  { id: "data-retention", label: "Data Retention" },
  { id: "third-party-services", label: "Third-Party Services" },
  { id: "your-rights", label: "Your Rights" },
  { id: "changes-to-this-policy", label: "Changes to This Policy" },
  { id: "contact", label: "Contact" },
];

export const metadata: Metadata = {
  title: "Privacy Policy | NWS Custom Homes & Remodeling",
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <SiteHeader />
      <main className={styles.page}>
        <section className={styles.hero}>
          <div className={styles.inner}>
            <div className={styles.heroGrid}>
              <div className={styles.heroCopy}>
                <p className={styles.eyebrow}>LEGAL INFORMATION</p>
                <h1 className={styles.heading}>Privacy Policy</h1>
                <p className={styles.intro}>
                  This page explains what information NWS collects through the website, how that information is used, and how to contact us if you need clarification.
                </p>
                <p className={styles.updated}>Last updated: May 2026</p>
                <ul className={styles.highlightList}>
                  {POLICY_HIGHLIGHTS.map((item) => (
                    <li key={item} className={styles.highlightItem}>{item}</li>
                  ))}
                </ul>
              </div>
              <aside className={styles.heroPanel}>
                <p className={styles.panelEyebrow}>Need help?</p>
                <h2 className={styles.panelTitle}>Questions about your data or a submitted inquiry?</h2>
                <p className={styles.panelBody}>
                  If you have questions about how NWS handles website information, call or email us and we will point you to the right person.
                </p>
                <div className={styles.panelActions}>
                  <a href="tel:+12812992309" className={styles.primaryBtn}>(281) 299-2309</a>
                  <a href="mailto:info@nws-homes.com" className={styles.secondaryBtn}>Email NWS</a>
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
                <nav aria-label="Privacy policy sections" className={styles.sideNavList}>
                  {POLICY_SECTIONS.map((section) => (
                    <a key={section.id} href={`#${section.id}`} className={styles.sideNavLink}>{section.label}</a>
                  ))}
                </nav>
              </aside>
              <div className={styles.documentCard}>
                <div className={styles.body}>
                  <p>
                    NWS Custom Homes &amp; Remodeling (&ldquo;NWS,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) respects your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
                  </p>

                  <section id="information-we-collect" className={styles.sectionBlock}>
                    <h2>Information We Collect</h2>
                    <p><strong>Personal Information.</strong> We collect information you voluntarily provide when you fill out our contact form or communicate with us, including your name, email address, phone number, project details, and property information.</p>
                    <p><strong>Automatically Collected Data.</strong> When you visit our site, we automatically collect certain information through cookies and similar technologies, including your IP address, browser type, operating system, referring URLs, and pages viewed.</p>
                  </section>

                  <section id="how-we-use-your-information" className={styles.sectionBlock}>
                    <h2>How We Use Your Information</h2>
                    <p>We use the information we collect for the following purposes:</p>
                    <ul>
                      <li>To respond to your inquiries and consultation requests</li>
                      <li>To provide estimates, project proposals, and service communications</li>
                      <li>To improve our website and service offerings</li>
                      <li>To comply with legal obligations</li>
                    </ul>
                    <p>We do not sell, rent, or trade your personal information to third parties for marketing purposes.</p>
                  </section>

                  <section id="cookies" className={styles.sectionBlock}>
                    <h2>Cookies</h2>
                    <p>Our website uses cookies to enhance your browsing experience. Cookies are small text files stored on your device. We use:</p>
                    <ul>
                      <li><strong>Functional cookies</strong> &mdash; necessary for the website to function properly</li>
                      <li><strong>Analytics cookies</strong> &mdash; to understand how visitors interact with our site</li>
                    </ul>
                    <p>You can control cookie preferences through your browser settings. Disabling certain cookies may affect site functionality.</p>
                  </section>

                  <section id="data-security" className={styles.sectionBlock}>
                    <h2>Data Security</h2>
                    <p>We implement industry-standard security measures to protect your personal information. However, no method of transmission over the Internet is 100% secure, and we cannot guarantee absolute security.</p>
                  </section>

                  <section id="data-retention" className={styles.sectionBlock}>
                    <h2>Data Retention</h2>
                    <p>We retain your personal information only as long as necessary to fulfill the purposes described in this policy, or as required by applicable law.</p>
                  </section>

                  <section id="third-party-services" className={styles.sectionBlock}>
                    <h2>Third-Party Services</h2>
                    <p>We may use third-party service providers (such as Google Analytics and web hosting services) who have their own privacy policies governing the use of your information.</p>
                  </section>

                  <section id="your-rights" className={styles.sectionBlock}>
                    <h2>Your Rights</h2>
                    <p>Depending on your jurisdiction, you may have the right to:</p>
                    <ul>
                      <li>Access the personal information we hold about you</li>
                      <li>Request correction or deletion of your data</li>
                      <li>Opt out of certain data collection practices</li>
                    </ul>
                  </section>

                  <section id="changes-to-this-policy" className={styles.sectionBlock}>
                    <h2>Changes to This Policy</h2>
                    <p>We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated effective date.</p>
                  </section>

                  <section id="contact" className={styles.sectionBlock}>
                    <h2>Contact</h2>
                    <p>If you have questions about this Privacy Policy or our data practices, please contact us:</p>
                    <p>
                      Email: <a href="mailto:info@nws-homes.com">info@nws-homes.com</a><br />
                      Phone: <a href="tel:+12812992309">(281) 299-2309</a><br />
                      Mail: Richmond, TX 77469
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
