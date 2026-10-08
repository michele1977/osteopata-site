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
      className="fixed inset-x-0 bottom-0 z-[60] border-t border-zinc-200 bg-paper/95 shadow-[0_-4px_20px_rgba(0,0,0,0.08)] backdrop-blur"
    >
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <p className="text-sm leading-relaxed text-zinc-600">
          Questo sito usa cookie tecnici e, solo con il tuo consenso, i cookie
          di Google Maps per mostrare le mappe delle sedi.{" "}
          <Link
            href="/cookie-policy"
            className="font-medium text-teal-700 underline underline-offset-2"
          >
            Cookie policy
          </Link>
        </p>
        <div className="flex shrink-0 gap-3">
          <button
            type="button"
            onClick={() => setConsent("rejected")}
            className="flex-1 rounded-lg px-5 py-2.5 text-sm font-semibold text-teal-700 ring-1 ring-teal-700 transition-colors hover:bg-teal-50 sm:flex-none"
          >
            Rifiuta
          </button>
          <button
            type="button"
            onClick={() => setConsent("accepted")}
            className="flex-1 rounded-lg bg-teal-700 px-5 py-2.5 text-sm font-semibold text-white shadow-md transition-colors hover:bg-teal-800 sm:flex-none"
          >
            Accetta
          </button>
        </div>
      </div>
    </div>
  );
}
