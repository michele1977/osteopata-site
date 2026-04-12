import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { CONTACT_INFO } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Osteopata Napoli \u2013 Trattamenti per schiena, cervicale e postura",
  description:
    "Scopri i trattamenti osteopatici per mal di schiena, cervicale e dolori articolari. Studio a Napoli e Pozzuoli.",
};

const problemi = [
  {
    icon: (
      <svg className="h-7 w-7 text-teal-600" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
      </svg>
    ),
    titolo: "Mal di schiena",
    intro: "Dolore lombare, dorsale o sensazione di blocco alla schiena.",
    punti: [
      "Difficolt\u00e0 ad alzarti dalla sedia o dal letto",
      "Dolore che peggiora stando fermo a lungo",
      "Rigidit\u00e0 che limita i movimenti quotidiani",
    ],
    soluzione:
      "Cerchiamo insieme la causa del dolore e lavoriamo per ridurlo, ripristinare il movimento e prevenire che si ripresenti.",
  },
  {
    icon: (
      <svg className="h-7 w-7 text-teal-600" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    titolo: "Dolore cervicale",
    intro: "Collo rigido, difficolt\u00e0 a girare la testa, dolore fino alle spalle.",
    punti: [
      "Tensione costante al collo e alle spalle",
      "Dolore che aumenta al computer o al telefono",
      "Movimenti del collo limitati o dolorosi",
    ],
    soluzione:
      "Interveniamo sulle tensioni muscolari per restituire mobilit\u00e0, ridurre il dolore e migliorare il comfort nella vita di tutti i giorni.",
  },
  {
    icon: (
      <svg className="h-7 w-7 text-teal-600" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
      </svg>
    ),
    titolo: "Problemi di postura",
    intro: "Quando il corpo assume posizioni scorrette, il dolore arriva col tempo.",
    punti: [
      "Dolori che tornano sempre negli stessi punti",
      "Affaticamento a fine giornata senza motivo apparente",
      "Sensazione di essere sempre storto o sbilanciato",
    ],
    soluzione:
      "Individuiamo gli squilibri del corpo e lavoriamo per ristabilire un assetto pi\u00f9 equilibrato, riducendo compensi e dolori.",
  },
  {
    icon: (
      <svg className="h-7 w-7 text-teal-600" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3" />
      </svg>
    ),
    titolo: "Sciatalgia",
    intro: "Dolore che dalla schiena scende lungo la gamba, a volte fino al piede.",
    punti: [
      "Dolore o formicolio che si irradia dalla schiena alla gamba",
      "Difficolt\u00e0 a camminare o a stare seduto a lungo",
      "Sensazione di intorpidimento o debolezza nella gamba",
    ],
    soluzione:
      "Lavoriamo per ridurre la compressione nella zona interessata e restituirti la possibilit\u00e0 di muoverti senza dolore.",
  },
  {
    icon: (
      <svg className="h-7 w-7 text-teal-600" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 7.5l-2.25-1.313M21 7.5v2.25m0-2.25l-2.25 1.313M3 7.5l2.25-1.313M3 7.5l2.25 1.313M3 7.5v2.25m9 3l2.25-1.313M12 12.75l-2.25-1.313M12 12.75V15m0 6.75l2.25-1.313M12 21.75V19.5m0 2.25l-2.25-1.313m0-16.875L12 2.25l2.25 1.313M21 14.25v2.25l-2.25 1.313m-13.5 0L3 16.5v-2.25" />
      </svg>
    ),
    titolo: "Dolori articolari",
    intro: "Spalle, ginocchia, anche: quando un\u2019articolazione fa male, tutto il corpo ne risente.",
    punti: [
      "Dolore a una spalla, un ginocchio o un\u2019anca",
      "Rigidit\u00e0 che peggiora al mattino o dopo il riposo",
      "Movimenti limitati che condizionano le attivit\u00e0 quotidiane",
    ],
    soluzione:
      "Valutiamo la meccanica articolare per capire cosa non funziona e interveniamo per recuperare il movimento e ridurre il dolore.",
  },
  {
    icon: (
      <svg className="h-7 w-7 text-teal-600" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
      </svg>
    ),
    titolo: "Cefalee ed emicranie",
    intro: "Mal di testa frequenti che hanno origine da tensioni al collo o alla postura.",
    punti: [
      "Mal di testa ricorrenti, spesso partendo dalla nuca",
      "Cefalee associate a tensione al collo o alle spalle",
      "Episodi che peggiorano con lo stress o la stanchezza",
    ],
    soluzione:
      "Lavoriamo sulle tensioni che generano il mal di testa per ridurne la frequenza e l\u2019intensit\u00e0 nel tempo.",
  },
];

export default function TrattamentiPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-b from-teal-50 to-white py-16 sm:py-24">
        <Container className="max-w-3xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-900 sm:text-5xl">
            Come posso aiutarti
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-zinc-500">
            Ogni persona arriva con un problema diverso. Qui trovi i disturbi
            pi&ugrave; comuni per cui le persone si rivolgono a me, spiegati
            in modo semplice.
          </p>
        </Container>
      </section>

      {/* Intro SEO */}
      <section className="py-16 sm:py-20">
        <Container className="max-w-3xl">
          <p className="text-base leading-relaxed text-zinc-500">
            L&rsquo;osteopatia interviene in modo manuale sulle strutture
            del corpo, senza farmaci e senza strumenti invasivi.
          </p>
          <p className="mt-4 text-base leading-relaxed text-zinc-500">
            Ogni disturbo viene valutato nel contesto del tuo stile di vita,
            delle tue abitudini e della tua storia. Ricevo a Napoli e
            Pozzuoli, solo su appuntamento.
          </p>
        </Container>
      </section>

      {/* Problemi - card grid */}
      <section className="bg-zinc-50 py-16 sm:py-24">
        <Container>
          <h2 className="text-center text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
            I disturbi pi&ugrave; comuni
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-base leading-relaxed text-zinc-500">
            Riconosci il tuo problema? Scorri le descrizioni qui sotto.
          </p>

          <div className="mt-14 grid gap-8 md:grid-cols-2">
            {problemi.map((p) => (
              <div
                key={p.titolo}
                className="rounded-2xl border border-zinc-100 bg-white p-7 shadow-sm transition-shadow hover:shadow-md sm:p-8"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-teal-50">
                  {p.icon}
                </div>
                <h3 className="text-xl font-bold text-zinc-900">{p.titolo}</h3>
                <p className="mt-2 text-base leading-relaxed text-zinc-500">
                  {p.intro}
                </p>

                <ul className="mt-4 space-y-2">
                  {p.punti.map((punto) => (
                    <li key={punto} className="flex items-start gap-2 text-sm text-zinc-500">
                      <svg className="mt-0.5 h-4 w-4 shrink-0 text-teal-500" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                      {punto}
                    </li>
                  ))}
                </ul>

                <p className="mt-5 text-sm font-medium leading-relaxed text-zinc-700">
                  {p.soluzione}
                </p>
              </div>
            ))}
          </div>

          <p className="mt-10 text-center text-sm text-zinc-500">
            Non trovi il tuo problema?{" "}
            <Link
              href="/contatti"
              className="font-semibold text-teal-700 underline underline-offset-2 hover:text-teal-800"
            >
              Contatta lo studio
            </Link>{" "}
            per un confronto.
          </p>
        </Container>
      </section>

      {/* Teaser prima visita */}
      <section className="py-16 sm:py-24">
        <Container className="max-w-2xl text-center">
          <h2 className="text-2xl font-bold tracking-tight text-zinc-900 sm:text-3xl">
            Non sai cosa aspettarti?
          </h2>
          <p className="mt-4 text-base leading-relaxed text-zinc-500">
            La prima visita dura circa 45-60 minuti e si articola in
            ascolto, valutazione, trattamento e indicazioni personalizzate.
          </p>
          <div className="mt-8">
            <Button href="/prima-visita" variant="secondary">
              Scopri come funziona la prima visita
            </Button>
          </div>
        </Container>
      </section>

      {/* Inline CTA */}
      <section className="bg-zinc-50 py-16 sm:py-20">
        <Container className="max-w-2xl text-center">
          <h2 className="text-2xl font-bold tracking-tight text-zinc-900 sm:text-3xl">
            Ti riconosci in uno di questi sintomi?
          </h2>
          <p className="mt-4 text-base leading-relaxed text-zinc-500">
            Il primo passo &egrave; una valutazione. Scrivimi o chiamami
            per fissare un appuntamento.
          </p>
          <div className="mt-8">
            <Button href="/contatti" variant="primary" className="px-8 py-3.5 text-base">
              Contatta lo studio
            </Button>
          </div>
        </Container>
      </section>

      {/* CTA finale */}
      <section className="bg-teal-800 py-16 sm:py-24">
        <Container className="max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Non rimandare il tuo benessere
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-teal-100">
            Scrivimi per raccontarmi il tuo problema.
            Ti rispondo di persona e troviamo la soluzione giusta.
          </p>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Button
              href="/contatti"
              variant="secondary"
              className="w-full bg-transparent px-8 py-3.5 text-base text-white ring-white/40 hover:bg-white/10 hover:ring-white/60 sm:w-auto"
            >
              Contatta lo studio
            </Button>
            <Button
              href={CONTACT_INFO.whatsapp}
              variant="secondary"
              className="w-full bg-transparent px-8 py-3.5 text-base text-white ring-white/40 hover:bg-white/10 hover:ring-white/60 sm:w-auto"
            >
              <svg className="mr-2 inline-block h-5 w-5 align-text-bottom" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/></svg>
              Scrivi su WhatsApp
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
