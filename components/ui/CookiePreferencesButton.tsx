"use client";

import { setConsent } from "@/lib/consent";

export default function CookiePreferencesButton() {
  return (
    <button
      type="button"
      onClick={() => setConsent("unset")}
      className="hover:text-teal-700 transition-colors"
    >
      Preferenze cookie
    </button>
  );
}
