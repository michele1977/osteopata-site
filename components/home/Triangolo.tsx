"use client";

import { useState } from "react";

const triangle = [
  {
    key: "Strutturale",
    n: "I",
    text: "Colonna, articolazioni, cranio e ATM. Traumi, cicatrici e malocclusioni possono creare catene lesionali che portano il sintomo lontano dalla sua origine.",
  },
  {
    key: "Metabolico",
    n: "II",
    text: "Visceri e postura si influenzano a vicenda. L'alimentazione e l'infiammazione sistemica entrano nella valutazione, con un approccio di medicina funzionale.",
  },
  {
    key: "Emotivo",
    n: "III",
    text: "Lo stress prolungato lascia tracce nel corpo. L'approccio somato-emozionale e la regolazione del sistema nervoso completano il quadro.",
  },
];

export default function Triangolo() {
  const [tri, setTri] = useState(0);

  return (
    <section id="metodo" className="mx-auto max-w-[1320px] px-6 py-28 lg:px-10">
      <div className="grid gap-16 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <div className="flex items-center gap-3 text-[11.5px] font-medium uppercase tracking-[0.18em] text-stone">
            <span className="h-px w-8 bg-tufo" />
            Il metodo
          </div>
          <h2 className="mt-6 font-display text-5xl font-light leading-[1.02] tracking-tight md:text-6xl">
            Il triangolo
            <br />
            della salute.
          </h2>
          <p className="mt-6 max-w-sm leading-relaxed text-ink/85">
            Ogni seduta cerca la priorità tra tre dimensioni che si influenzano a vicenda. Il corpo
            è un&apos;unità: è lì che si nasconde la causa.
          </p>
          <div className="mt-10 flex flex-col">
            {triangle.map((t, i) => (
              <button
                key={t.key}
                type="button"
                onClick={() => setTri(i)}
                aria-pressed={tri === i}
                className={`flex items-baseline gap-5 border-t border-line py-5 text-left transition ${
                  tri === i ? "text-ink" : "text-ink/40 hover:text-ink/85"
                }`}
              >
                <span className="w-8 text-xs font-medium text-tufo">{t.n}</span>
                <span className="font-display text-3xl">{t.key}</span>
                {tri === i && <span className="ml-auto text-xs">●</span>}
              </button>
            ))}
          </div>
        </div>
        <div className="lg:col-span-7">
          <div className="relative flex aspect-square max-h-[620px] w-full items-center justify-center rounded-[2rem] bg-sea p-10 text-paper">
            <svg viewBox="0 0 400 360" className="absolute inset-10 m-auto h-[70%] w-[70%]" aria-hidden>
              <polygon points="200,20 380,340 20,340" fill="none" stroke="#efeae1" strokeOpacity="0.25" strokeWidth="1" />
              {[
                [200, 20],
                [20, 340],
                [380, 340],
              ].map(([x, y], i) => (
                <circle
                  key={i}
                  cx={x}
                  cy={y}
                  r={tri === i ? 14 : 6}
                  fill={tri === i ? "#b8532f" : "#efeae1"}
                  className="transition-all duration-500"
                />
              ))}
            </svg>
            <div className="relative max-w-sm text-center">
              <div className="text-[11.5px] font-medium uppercase tracking-[0.2em] text-paper/75">
                Dimensione {triangle[tri].n}
              </div>
              <div className="mt-3 font-display text-4xl italic">{triangle[tri].key}</div>
              <p className="mt-4 leading-relaxed text-paper/80">{triangle[tri].text}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
