"use client";

import { useSyncExternalStore } from "react";

// Consenso ai cookie di terze parti (oggi solo Google Maps).
// "unset" = l'utente non ha ancora scelto: si mostra il banner.
export type Consent = "accepted" | "rejected" | "unset";

const STORAGE_KEY = "cookie-consent";
const EVENT = "cookie-consent-change";

function read(): Consent {
  try {
    const value = window.localStorage.getItem(STORAGE_KEY);
    return value === "accepted" || value === "rejected" ? value : "unset";
  } catch {
    return "unset";
  }
}

export function setConsent(value: Consent) {
  try {
    if (value === "unset") window.localStorage.removeItem(STORAGE_KEY);
    else window.localStorage.setItem(STORAGE_KEY, value);
  } catch {
    // storage non disponibile: la scelta vale solo per questa pagina
  }
  window.dispatchEvent(new Event(EVENT));
}

function subscribe(callback: () => void) {
  window.addEventListener(EVENT, callback);
  window.addEventListener("storage", callback);
  return () => {
    window.removeEventListener(EVENT, callback);
    window.removeEventListener("storage", callback);
  };
}

// Lato server restituisce null, così banner e mappe non vengono
// renderizzati prima di conoscere la scelta dell'utente.
export function useConsent(): Consent | null {
  return useSyncExternalStore(subscribe, read, () => null);
}
