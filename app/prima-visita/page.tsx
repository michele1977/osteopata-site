import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { CONTACT_INFO } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Prima visita osteopatica | Dott. Trupiano Osteopata Napoli",
  description:
    "Come si svolge la prima visita osteopatica: ascolto, valutazione, trattamento e indicazioni personalizzate. Studio a Napoli e Pozzuoli.",
};

const fasi = [
  {
    numero: "01",
    titolo: "Ascolto e anamnesi",
    descrizione:
      "Partiamo dalla tua storia. Ti chiedo di raccontarmi il problema, da quanto tempo lo avverti, cosa lo peggiora e cosa lo migliora. Ogni dettaglio mi aiuta a capire dove cercare la causa.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18.75a6 6 0 0 0 6-6v-1.5m-6 7.5a6 6 0 0 1-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 0 1-3-3V4.5a3 3 0 1 1 6 0v8.25a3 3 0 0 1-3 3Z" />
      </svg>
    ),
  },
  {
    numero: "02",
    titolo: "Valutazione",
    descrizione:
      "Attraverso test manuali e osservazione posturale, individuo le zone di tensione e le restrizioni di movimento. Non servono macchinari: le mie mani sono lo strumento principale.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
      </svg>
    ),
  },
  {
    numero: "03",
    titolo: "Trattamento",
    descrizione:
      "Utilizzo tecniche manuali dolci e mirate per riequilibrare le strutture del corpo. Il trattamento non è doloroso e si adatta alla tua sensibilità.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.05 4.575a1.575 1.575 0 1 0-3.15 0v3.15m3.15-3.15v-1.5a1.575 1.575 0 0 1 3.15 0v1.5m-3.15 0 .075 5.925m3.075-7.425v-1.5a1.575 1.575 0 0 1 3.15 0v1.5m-3.15 0 .075 5.925M17.1 4.575a1.575 1.575 0 0 1 3.15 0v1.5a1.575 1.575 0 0 1-3.15 0v-1.5Zm0 0-.075 5.925m.075-5.925H6.9m.075 5.925H17.1m-10.2 0 .1 2.85a2.4 2.4 0 0 0 2.398 2.325h5.204a2.4 2.4 0 0 0 2.398-2.325l.1-2.85" />
      </svg>
    ),
  },
  {
    numero: "04",
    titolo: "Indicazioni personalizzate",
    descrizione:
      "Al termine ti spiego cosa ho riscontrato, ti do indicazioni pratiche da seguire a casa e, se necessario, pianifichiamo insieme le sedute successive.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15a2.25 2.25 0 0 1 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25ZM6.75 12h.008v.008H6.75V12Zm0 3h.008v.008H6.75V15Zm0 3h.008v.008H6.75V18Z" />
      </svg>
    ),
  },
];

const infoPratiche = [
  {
    titolo: "Durata",
    testo: "La prima visita dura circa 45-60 minuti. Le sedute successive sono più brevi (30-40 minuti).",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
      </svg>
    ),
  },
  {
    titolo: "Cosa portare",
    testo: "Eventuali esami (radiografie, risonanze, analisi) e un abbigliamento comodo. Non serve impegnativa medica.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
      </svg>
    ),
  },
  {
    titolo: "Solo su appuntamento",
    testo: "Le visite si svolgono esclusivamente su appuntamento. Puoi prenotare telefonicamente o via WhatsApp.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
      </svg>
    ),
  },
];

export default function PrimaVisitaPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-zinc-50 py-16 sm:py-24">
        <Container className="max-w-3xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-900 sm:text-5xl">
            Come si svolge la prima visita
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-zinc-600">
            Un percorso semplice e guidato per comprendere il tuo problema e
            iniziare il trattamento.
          </p>
        </Container>
      </section>

      {/* Introduzione */}
      <section className="py-16 sm:py-24">
        <Container className="max-w-3xl">
          <h2 className="text-2xl font-bold text-zinc-900 sm:text-3xl">
            A cosa serve la prima visita
          </h2>
          <p className="mt-4 text-base leading-relaxed text-zinc-600">
            La prima visita &egrave; un incontro, non un esame. &Egrave; il
            momento in cui ci conosciamo, capisco la tua situazione e iniziamo
            a lavorare insieme. Nessuna fretta, nessun giudizio.
          </p>
          <p className="mt-4 text-base leading-relaxed text-zinc-600">
            Non devi prepararti in modo particolare. Porta eventuali esami
            gi&agrave; eseguiti, indossa vestiti comodi e lascia a me il resto.
          </p>
        </Container>
      </section>

      {/* 4 fasi */}
      <section className="bg-zinc-50 py-16 sm:py-24">
        <Container>
          <h2 className="text-center text-2xl font-bold text-zinc-900 sm:text-3xl">
            Le 4 fasi della visita
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-base text-zinc-600">
            Ogni passaggio ha uno scopo preciso. Ecco cosa succede, passo dopo
            passo.
          </p>

          <div className="mx-auto mt-12 grid max-w-4xl gap-8 sm:grid-cols-2">
            {fasi.map((fase) => (
              <div
                key={fase.numero}
                className="relative rounded-2xl border border-zinc-100 bg-white p-6 shadow-sm"
              >
                <div className="flex items-center gap-4">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-teal-50 text-teal-700">
                    {fase.icon}
                  </span>
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-teal-600">
                      Fase {fase.numero}
                    </span>
                    <h3 className="text-lg font-bold text-zinc-900">
                      {fase.titolo}
                    </h3>
                  </div>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-zinc-600">
                  {fase.descrizione}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Info pratiche */}
      <section className="py-16 sm:py-24">
        <Container>
          <h2 className="text-center text-2xl font-bold text-zinc-900 sm:text-3xl">
            Informazioni pratiche
          </h2>

          <div className="mx-auto mt-12 grid max-w-4xl gap-6 sm:grid-cols-3">
            {infoPratiche.map((info) => (
              <div
                key={info.titolo}
                className="rounded-2xl border border-zinc-100 bg-white p-6 text-center shadow-sm"
              >
                <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-teal-50 text-teal-700">
                  {info.icon}
                </span>
                <h3 className="mt-4 text-base font-bold text-zinc-900">
                  {info.titolo}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-600">
                  {info.testo}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA finale */}
      <section className="bg-teal-700 py-16 sm:py-24">
        <Container className="text-center">
          <h2 className="text-2xl font-bold text-white sm:text-3xl">
            Vuoi fissare la tua prima visita?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-teal-100">
            Chiamami o scrivimi su WhatsApp. Ti rispondo personalmente e
            troviamo insieme il giorno più comodo per te.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button
              href="/contatti"
              className="bg-white text-teal-700 hover:bg-zinc-100"
            >
              Contatta lo studio
            </Button>
            <Button
              href={CONTACT_INFO.whatsapp}
              className="border border-white/30 bg-transparent text-white hover:bg-teal-600"
            >
              Scrivi su WhatsApp
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
