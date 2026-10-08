"use client";

import { useState } from 'react'

type Area = { area: string; dot: [number, number]; intro: string; items: [string, string][] }

const areas: Area[] = [
  {
    area: 'Testa',
    dot: [100, 44],
    intro: 'Cranio, mandibola e nervi del volto',
    items: [
      ['Emicranie e cefalee', 'Spesso nascono da tensioni cervicali, mandibolari o viscerali: si cerca il punto di partenza.'],
      ['Nevralgia del trigemino', 'Lavoro delicato su cranio, collo e tessuti del volto per ridurre le tensioni sul nervo.'],
      ['Disturbi ATM e mandibola', "Click, serramento, bruxismo: valutazione dell'occlusione in collaborazione con l'odontoiatra."],
    ],
  },
  {
    area: 'Collo e spalle',
    dot: [130, 102],
    intro: 'Cervicale, spalle e arto superiore',
    items: [
      ['Cervicalgia e collo rigido', 'Si ridà mobilità alle vertebre cervicali, alla prima costa e alle zone di passaggio.'],
      ['Tunnel carpale', 'Il formicolio alla mano può partire dal collo o dalla spalla: si segue tutto il percorso del nervo.'],
      ['Tendiniti', 'Si alleggerisce il carico sul tendine lavorando sulla catena di movimento che lo sovraccarica.'],
    ],
  },
  {
    area: 'Visceri',
    dot: [100, 168],
    intro: 'Diaframma, stomaco e intestino',
    items: [
      ['Reflusso e acidità gastrica', 'Lavoro sul diaframma e sulla giunzione tra esofago e stomaco.'],
      ['Colon irritabile (IBS)', "Tecniche viscerali e regolazione del nervo vago, con attenzione all'alimentazione."],
      ['Tensioni diaframmatiche', 'Il diaframma collega respiro, postura e digestione: se ne libera il movimento.'],
    ],
  },
  {
    area: 'Schiena',
    dot: [100, 232],
    intro: 'Colonna lombare, bacino e nervo sciatico',
    items: [
      ['Lombalgia, anche cronica', 'Bacino, colonna e visceri valutati insieme: la schiena raramente si ammala da sola.'],
      ['Sciatalgia', 'Si cerca dove il nervo è compresso o in tensione, lungo tutto il suo decorso.'],
      ['Ernia e protrusioni', 'Trattamento manuale per ridurre il carico sul disco, anche nelle fasi acute.'],
    ],
  },
  {
    area: 'Sport e postura',
    dot: [123, 330],
    intro: 'Articolazioni, traumi e appoggio',
    items: [
      ['Lesioni sportive', 'Recupero dopo traumi e sovraccarichi, per tornare ad allenarsi in sicurezza.'],
      ['Artrosi e dolori articolari', "Più mobilità e meno dolore, lavorando anche sulle articolazioni che compensano."],
      ['Disfunzioni posturali e occlusali', 'Test neuro-posturali per capire se la causa parte dalla bocca, dai piedi o dagli occhi.'],
    ],
  },
]

export default function Disturbi() {
  const [active, setActive] = useState(0)

  return (
    <section id="disturbi" className="bg-paper py-28">
      <div className="mx-auto grid max-w-[1320px] gap-12 px-6 lg:grid-cols-12 lg:gap-16 lg:px-10">
        {/* Figura interattiva */}
        <div className="relative lg:col-span-5">
          <div className="relative mx-auto flex w-full max-w-[440px] flex-col overflow-hidden lg:absolute lg:inset-y-0 lg:left-1/2 lg:-translate-x-1/2 rounded-[2rem] bg-sea px-6 pb-6 pt-10 text-paper">
            <div className="absolute inset-x-0 top-6 text-center font-mono font-medium text-[11px] uppercase tracking-[0.18em] text-paper/75">
              Tocca una zona
            </div>
            <svg viewBox="0 0 200 420" className="mx-auto h-[440px] w-full lg:h-auto lg:min-h-0 lg:flex-1" role="group" aria-label="Mappa del corpo">
              <path d="M100.0 10.0C104.7 10.0 110.3 10.3 114.0 13.0C117.7 15.7 120.5 21.2 122.0 26.0C123.5 30.8 123.5 36.7 123.0 42.0C122.5 47.3 120.8 53.7 119.0 58.0C117.2 62.3 113.5 65.2 112.0 68.0C110.5 70.8 110.2 72.3 110.0 75.0C109.8 77.7 108.7 81.5 111.0 84.0C113.3 86.5 119.2 88.0 124.0 90.0C128.8 92.0 136.3 93.0 140.0 96.0C143.7 99.0 144.5 102.3 146.0 108.0C147.5 113.7 148.0 121.3 149.0 130.0C150.0 138.7 151.0 150.0 152.0 160.0C153.0 170.0 154.0 180.8 155.0 190.0C156.0 199.2 157.2 208.0 158.0 215.0C158.8 222.0 159.5 227.0 160.0 232.0C160.5 237.0 161.5 241.5 161.0 245.0C160.5 248.5 158.7 252.8 157.0 253.0C155.3 253.2 152.3 250.5 151.0 246.0C149.7 241.5 150.0 234.3 149.0 226.0C148.0 217.7 146.3 206.0 145.0 196.0C143.7 186.0 142.2 175.0 141.0 166.0C139.8 157.0 138.8 142.7 138.0 142.0C137.2 141.3 136.8 154.7 136.0 162.0C135.2 169.3 133.3 178.0 133.0 186.0C132.7 194.0 133.2 202.3 134.0 210.0C134.8 217.7 137.0 224.3 138.0 232.0C139.0 239.7 139.8 246.3 140.0 256.0C140.2 265.7 139.7 277.7 139.0 290.0C138.3 302.3 137.0 317.5 136.0 330.0C135.0 342.5 133.8 354.2 133.0 365.0C132.2 375.8 130.8 388.0 131.0 395.0C131.2 402.0 134.8 404.2 134.0 407.0C133.2 409.8 129.2 411.5 126.0 412.0C122.8 412.5 117.2 412.3 115.0 410.0C112.8 407.7 113.2 405.5 113.0 398.0C112.8 390.5 114.0 376.3 114.0 365.0C114.0 353.7 113.7 341.5 113.0 330.0C112.3 318.5 111.3 306.0 110.0 296.0C108.7 286.0 106.7 275.0 105.0 270.0C103.3 265.0 101.7 266.0 100.0 266.0C98.3 266.0 96.7 265.0 95.0 270.0C93.3 275.0 91.3 286.0 90.0 296.0C88.7 306.0 87.7 318.5 87.0 330.0C86.3 341.5 86.0 353.7 86.0 365.0C86.0 376.3 87.2 390.5 87.0 398.0C86.8 405.5 87.2 407.7 85.0 410.0C82.8 412.3 77.2 412.5 74.0 412.0C70.8 411.5 66.8 409.8 66.0 407.0C65.2 404.2 68.8 402.0 69.0 395.0C69.2 388.0 67.8 375.8 67.0 365.0C66.2 354.2 65.0 342.5 64.0 330.0C63.0 317.5 61.7 302.3 61.0 290.0C60.3 277.7 59.8 265.7 60.0 256.0C60.2 246.3 61.0 239.7 62.0 232.0C63.0 224.3 65.2 217.7 66.0 210.0C66.8 202.3 67.3 194.0 67.0 186.0C66.7 178.0 64.8 169.3 64.0 162.0C63.2 154.7 62.8 141.3 62.0 142.0C61.2 142.7 60.2 157.0 59.0 166.0C57.8 175.0 56.3 186.0 55.0 196.0C53.7 206.0 52.0 217.7 51.0 226.0C50.0 234.3 50.3 241.5 49.0 246.0C47.7 250.5 44.7 253.2 43.0 253.0C41.3 252.8 39.5 248.5 39.0 245.0C38.5 241.5 39.5 237.0 40.0 232.0C40.5 227.0 41.2 222.0 42.0 215.0C42.8 208.0 44.0 199.2 45.0 190.0C46.0 180.8 47.0 170.0 48.0 160.0C49.0 150.0 50.0 138.7 51.0 130.0C52.0 121.3 52.5 113.7 54.0 108.0C55.5 102.3 56.3 99.0 60.0 96.0C63.7 93.0 71.2 92.0 76.0 90.0C80.8 88.0 86.7 86.5 89.0 84.0C91.3 81.5 90.2 77.7 90.0 75.0C89.8 72.3 89.5 70.8 88.0 68.0C86.5 65.2 82.8 62.3 81.0 58.0C79.2 53.7 77.5 47.3 77.0 42.0C76.5 36.7 76.5 30.8 78.0 26.0C79.5 21.2 82.3 15.7 86.0 13.0C89.7 10.3 95.3 10.0 100.0 10.0Z" fill="currentColor" fillOpacity="0.07" stroke="currentColor" strokeOpacity="0.4" strokeWidth="1.1" strokeLinejoin="round" />
              {/* colonna vertebrale, come nel marchio */}
              {Array.from({ length: 17 }, (_, i) => {
                const w = i < 7 ? 6 : i < 12 ? 7.5 : 9 - (i - 12) * 0.6
                return <rect key={i} x={100 - w / 2} y={82 + i * 10} width={w} height={6} rx={3} fill="currentColor" fillOpacity="0.28" />
              })}
              {areas.map((ar, i) => {
                const on = i === active
                return (
                  <g
                    key={ar.area}
                    role="button"
                    tabIndex={0}
                    aria-label={ar.area}
                    aria-pressed={on}
                    onClick={() => setActive(i)}
                    onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && setActive(i)}
                    className="cursor-pointer outline-none"
                  >
                    <circle cx={ar.dot[0]} cy={ar.dot[1]} r="16" fill="transparent" />
                    {on && (
                      <circle
                        cx={ar.dot[0]}
                        cy={ar.dot[1]}
                        r="12"
                        fill="#b8532f"
                        fillOpacity="0.35"
                        className="animate-ping"
                        style={{ transformBox: 'fill-box', transformOrigin: 'center' }}
                      />
                    )}
                    <circle
                      cx={ar.dot[0]}
                      cy={ar.dot[1]}
                      r={on ? 7 : 5}
                      fill={on ? '#b8532f' : '#efeae1'}
                      stroke={on ? '#efeae1' : 'none'}
                      strokeWidth="2"
                      className="transition-all duration-300"
                    />
                  </g>
                )
              })}
            </svg>
            <div className="mx-auto mt-2 flex max-w-[19rem] flex-wrap justify-center gap-1">
              {areas.map((ar, i) => (
                <button
                  key={ar.area}
                  onClick={() => setActive(i)}
                  className={`rounded-full px-3 py-1.5 text-[13px] transition ${
                    i === active ? 'bg-paper text-ink' : 'text-paper/75 hover:bg-paper/10 hover:text-paper'
                  }`}
                >
                  {ar.area}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Dettaglio zona */}
        <div className="flex flex-col lg:col-span-7">
          <div className="flex items-center gap-3 font-mono font-medium text-[13px] sm:text-[11.5px] uppercase tracking-[0.18em] text-stone">
            <span className="h-px w-8 bg-tufo" />
            Cosa trattiamo
          </div>
          <h2 className="mt-6 font-display text-5xl font-light tracking-tight md:text-6xl">Dove fa male?</h2>

          <div className="mt-10 grid">
            {/* tutte le zone nella stessa cella: l'altezza resta quella della più lunga */}
            {areas.map((a, idx) => (
          <div
            key={a.area}
            aria-hidden={idx !== active}
            className={`[grid-area:1/1] ${idx === active ? 'animate-[fadeUp_.5s_ease-out]' : 'invisible'}`}
          >
            <div className="flex items-baseline justify-between gap-6 border-b border-ink/15 pb-5">
              <h3 className="font-display text-3xl italic text-tufo md:text-4xl">{a.area}</h3>
              <span className="text-right text-sm text-stone">{a.intro}</span>
            </div>
            <ol>
              {a.items.map(([title, text]) => (
                <li key={title} className="group border-b border-ink/15 py-6 last:border-b-0 last:pb-0">
                  <div>
                    <div className="font-display text-2xl transition group-hover:translate-x-1 md:text-[1.75rem]">{title}</div>
                    <p className="mt-1.5 max-w-xl leading-relaxed text-ink/85">{text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
