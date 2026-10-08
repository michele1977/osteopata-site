"use client";

import Link from "next/link";
import { setConsent, useConsent } from "@/lib/consent";

export default function CookieBanner() {
  const consent = useConsent();
  if (consent !== "unset") return null;

  return (
    <div
      role="dialog"
      aria-label="Consenso cookie"
      className="fixed inset-x-0 bottom-0 z-[60] border-t border-line bg-paper/95 shadow-[0_-4px_20px_rgba(0,0,0,0.08)] backdrop-blur"
    >
      <div className="mx-auto flex max-w-[1320px] flex-col gap-4 px-6 py-5 sm:flex-row sm:items-center sm:justify-between lg:px-10">
        <p className="text-sm leading-relaxed text-ink/80">
          Questo sito usa cookie tecnici e, solo con il tuo consenso, i cookie
          di Google Maps per mostrare le mappe delle sedi.{" "}
          <Link
            href="/cookie-policy"
            className="text-tufo underline underline-offset-2"
          >
            Cookie policy
          </Link>
        </p>
        <div className="flex shrink-0 gap-3">
          <button
            type="button"
            onClick={() => setConsent("rejected")}
            className="flex-1 rounded-full px-6 py-2.5 text-sm text-ink ring-1 ring-ink transition-colors hover:bg-ink hover:text-paper sm:flex-none"
          >
            Rifiuta
          </button>
          <button
            type="button"
            onClick={() => setConsent("accepted")}
            className="flex-1 rounded-full px-6 py-2.5 text-sm text-ink ring-1 ring-ink transition-colors hover:bg-ink hover:text-paper sm:flex-none"
          >
            Accetta
          </button>
        </div>
      </div>
    </div>
  );
}
