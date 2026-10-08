"use client";

import { useState } from "react";
import Link from "next/link";

type MapEmbedProps = {
  title: string;
  query: string;
};

// La mappa di Google viene caricata solo dopo il clic dell'utente,
// così il sito non contatta Google (e non installa cookie) senza consenso.
export default function MapEmbed({ title, query }: MapEmbedProps) {
  const [visible, setVisible] = useState(false);

  if (visible) {
    return (
      <iframe
        title={title}
        src={`https://www.google.com/maps?q=${encodeURIComponent(query)}&output=embed`}
        width="100%"
        height="360"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="block w-full"
      />
    );
  }

  return (
    <div className="flex h-[360px] flex-col items-center justify-center gap-4 bg-zinc-100 px-6 text-center">
      <svg className="h-10 w-10 text-teal-600" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z" />
      </svg>
      <button
        type="button"
        onClick={() => setVisible(true)}
        className="rounded-lg bg-teal-700 px-5 py-2.5 text-sm font-semibold text-white shadow-md transition-colors hover:bg-teal-800"
      >
        Mostra la mappa
      </button>
      <p className="max-w-xs text-xs leading-relaxed text-zinc-500">
        La mappa &egrave; fornita da Google, che potrebbe installare cookie.{" "}
        <Link href="/cookie-policy" className="underline underline-offset-2 hover:text-teal-700">
          Cookie policy
        </Link>
      </p>
    </div>
  );
}
