import Script from "next/script";
import { landingContent } from "@/content/landing";
import { AboutSection } from "./about-section";
import { CtaBand } from "./cta-band";
import { Footer } from "./footer";
import { Hero } from "./hero";
import { ProcessSection } from "./process-section";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { ServicesSection } from "./services-section";
import { TestimonialsSection } from "./testimonials-section";
import { TransformationSection } from "./transformation-section";
import styles from "./landing-page.module.css";

export function LandingPage() {
  return (
    <main className={styles.page}>
      <Hero content={landingContent.hero} />
      <section className={styles.widgetSection} aria-label="Property widgets">
        <Script
          src="https://ensenadas-development.up.railway.app/widget-hero.min.js"
          strategy="afterInteractive"
          data-runtime-id="6a269c11e2d3512d95575a0e"
          data-realtor-id="6a269c11e2d3512d95575a0e"
          data-api-url="https://3pw-administration-development.up.railway.app"
          data-embed-token="v1.429cf46338b76216587b8efe6dedc0e3199db63db45ea54d374c2f7a25dd0e3b"
        />
        <Script
          src="https://ensenadas-development.up.railway.app/widget.min.js"
          strategy="afterInteractive"
          data-runtime-id="6a269c11e2d3512d95575a0e"
          data-realtor-id="6a269c11e2d3512d95575a0e"
          data-api-url="https://3pw-administration-development.up.railway.app"
          data-embed-token="v1.429cf46338b76216587b8efe6dedc0e3199db63db45ea54d374c2f7a25dd0e3b"
        />
        <Script
          src="https://ensenadas-development.up.railway.app/widget-video.min.js"
          strategy="afterInteractive"
          data-runtime-id="6a269c11e2d3512d95575a0e"
          data-realtor-id="6a269c11e2d3512d95575a0e"
          data-api-url="https://3pw-administration-development.up.railway.app"
          data-embed-token="v1.429cf46338b76216587b8efe6dedc0e3199db63db45ea54d374c2f7a25dd0e3b"
        />
      </section>
      <ScrollReveal className={styles.sectionWrap}>
        <AboutSection content={landingContent.about} />
      </ScrollReveal>
      <ScrollReveal className={styles.sectionWrap}>
        <TransformationSection content={landingContent.transformation} />
      </ScrollReveal>
      <ScrollReveal className={styles.sectionWrap}>
        <ServicesSection content={landingContent.services} />
      </ScrollReveal>
      <ScrollReveal className={styles.sectionWrap}>
        <TestimonialsSection testimonials={landingContent.testimonials} />
      </ScrollReveal>
      <ScrollReveal className={styles.sectionWrap}>
        <ProcessSection />
      </ScrollReveal>
      <ScrollReveal className={styles.sectionWrap}>
        <CtaBand content={landingContent.ctaFooter} />
      </ScrollReveal>
      <Footer />
    </main>
  );
}
