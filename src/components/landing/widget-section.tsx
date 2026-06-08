"use client";

import { useEffect, useRef } from "react";
import styles from "./landing-page.module.css";

const WIDGET_CONFIG = {
  runtimeId: "6a269c11e2d3512d95575a0e",
  realtorId: "6a269c11e2d3512d95575a0e",
  apiUrl: "https://3pw-administration-development.up.railway.app",
  embedToken: "v1.429cf46338b76216587b8efe6dedc0e3199db63db45ea54d374c2f7a25dd0e3b",
};

const WIDGET_SOURCES = [
  "https://ensenadas-development.up.railway.app/widget-hero.min.js",
  "https://ensenadas-development.up.railway.app/widget.min.js",
  "https://ensenadas-development.up.railway.app/widget-video.min.js",
];

export function WidgetSection() {
  const slotRefs = useRef<Array<HTMLDivElement | null>>([]);

  useEffect(() => {
    const mountedScripts: HTMLScriptElement[] = [];

    WIDGET_SOURCES.forEach((src, index) => {
      const slot = slotRefs.current[index];

      if (!slot) {
        return;
      }

      slot.replaceChildren();

      const script = document.createElement("script");
      script.src = src;
      script.async = true;
      script.dataset.runtimeId = WIDGET_CONFIG.runtimeId;
      script.dataset.realtorId = WIDGET_CONFIG.realtorId;
      script.dataset.apiUrl = WIDGET_CONFIG.apiUrl;
      script.dataset.embedToken = WIDGET_CONFIG.embedToken;

      slot.appendChild(script);
      mountedScripts.push(script);
    });

    return () => {
      mountedScripts.forEach((script) => {
        script.remove();
      });

      slotRefs.current.forEach((slot) => {
        slot?.replaceChildren();
      });
    };
  }, []);

  return (
    <section className={styles.widgetSection} aria-label="Property widgets">
      <div className={styles.widgetSectionInner}>
        {WIDGET_SOURCES.map((src, index) => (
          <div
            key={src}
            className={styles.widgetSlot}
            ref={(element) => {
              slotRefs.current[index] = element;
            }}
          />
        ))}
      </div>
    </section>
  );
}