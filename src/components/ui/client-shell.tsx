"use client";

import { CookieConsent } from "./cookie-consent";
import { FloatingActions } from "./floating-actions";

export function ClientShell() {
  return (
    <>
      <FloatingActions />
      <CookieConsent />
    </>
  );
}