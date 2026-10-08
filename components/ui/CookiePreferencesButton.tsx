"use client";

import { setConsent } from "@/lib/consent";

export default function CookiePreferencesButton() {
  return (
    <button
      type="button"
      onClick={() => setConsent("unset")}
      className="hover:text-tufo transition-colors"
    >
      Preferenze cookie
    </button>
  );
}
