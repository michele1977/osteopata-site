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
  {
    icon: (
      <svg className="h-7 w-7 text-teal-600" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
    titolo: "Lesioni sportive",
    intro: "Distorsioni, contratture e sovraccarichi che non passano o tendono a ripresentarsi.",
    punti: [
      "Dolore che torna ogni volta che riprendi l\u2019allenamento",
      "Distorsioni di caviglia o ginocchio mai del tutto recuperate",
      "Calo di mobilit\u00e0 o di prestazione dopo un infortunio",
    ],
    soluzione:
      "Valutiamo come il corpo ha compensato l\u2019infortunio e lavoriamo per recuperare il movimento e ridurre il rischio di ricadute.",
  },
  {
    icon: (
      <svg className="h-7 w-7 text-teal-600" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.042 21.672L13.684 16.6m0 0l-2.51 2.225.569-9.47 5.227 7.917-3.286-.672zM12 2.25V4.5m5.834.166l-1.591 1.591M20.25 10.5H18M7.757 14.743l-1.59 1.59M6 10.5H3.75m4.007-4.243l-1.59-1.59" />
      </svg>
    ),
    titolo: "Tunnel carpale",
    intro: "Formicolio, intorpidimento o dolore alla mano e alle dita, spesso di notte.",
    punti: [
      "Formicolio a pollice, indice e medio",
      "Mano che si addormenta durante la notte",
      "Fatica a stringere gli oggetti o a usare il mouse",
    ],
    soluzione:
      "Lavoriamo su polso, gomito, spalla e collo per ridurre le tensioni lungo il percorso del nervo, in accordo con le indicazioni del tuo medico.",
  },
  {
    icon: (
      <svg className="h-7 w-7 text-teal-600" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
      </svg>
    ),
    titolo: "Nevralgie",
    intro: "Dolori lungo il decorso di un nervo, come la nevralgia del trigemino o intercostale.",
    punti: [
      "Dolore acuto, a scossa o bruciante",
      "Fastidio al viso, alla mandibola o lungo le costole",
      "Episodi scatenati da movimenti o tensioni",
    ],
    soluzione:
      "Cerchiamo le tensioni di cranio, collo e mandibola che possono contribuire al disturbo, come supporto al percorso indicato dal medico.",
  },
  {
    icon: (
      <svg className="h-7 w-7 text-teal-600" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
      </svg>
    ),
    titolo: "Disturbi digestivi funzionali",
    intro: "Acidit\u00e0, reflusso o colon irritabile, spesso legati anche a postura e stress.",
    punti: [
      "Bruciore o reflusso dopo i pasti",
      "Gonfiore e alternanza di stitichezza e diarrea",
      "Tensione addominale che si riflette su schiena e respiro",
    ],
    soluzione:
      "Con tecniche viscerali dolci lavoriamo sul diaframma e sull\u2019addome, come supporto e mai in sostituzione del parere del gastroenterologo.",
  },
];

export default function TrattamentiPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-b from-teal-50 to-white py-16 sm:py-24">
        <Container className="max-w-3xl text-center">
          <h1 className="text-4xl font-light font-display tracking-tight text-zinc-900 sm:text-5xl">
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
          <h2 className="text-center text-3xl font-light font-display tracking-tight text-zinc-900 sm:text-4xl">
            I disturbi pi&ugrave; comuni
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-base leading-relaxed text-zinc-500">
            Riconosci il tuo problema? Scorri le descrizioni qui sotto.
          </p>

          <div className="mt-14 grid gap-8 md:grid-cols-2">
            {problemi.map((p) => (
              <div
                key={p.titolo}
                className="rounded-2xl border border-zinc-100 bg-paper p-7 shadow-sm transition-shadow hover:shadow-md sm:p-8"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-teal-50">
                  {p.icon}
                </div>
                <h3 className="text-xl font-light font-display text-zinc-900">{p.titolo}</h3>
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

      {/* Osteopatia e odontoiatria */}
      <section className="py-16 sm:py-24">
        <Container className="max-w-3xl">
          <h2 className="text-3xl font-light font-display tracking-tight text-zinc-900 sm:text-4xl">
            Osteopatia e odontoiatria
          </h2>
          <p className="mt-5 text-base leading-relaxed text-zinc-500">
            Mi occupo in modo specifico dei disturbi
            cranio-cervico-mandibolari: il rapporto tra bocca, mandibola,
            collo e postura. Un&rsquo;occlusione non equilibrata pu&ograve;
            contribuire a cefalee, dolori cervicali, mal di schiena e
            tensioni che sembrano non avere una causa chiara.
          </p>
          <p className="mt-4 text-base leading-relaxed text-zinc-500">
            Durante la valutazione verifico con test specifici se la bocca
            pu&ograve; essere coinvolta nel tuo problema. Quando serve
            utilizzo anche tecniche osteopatiche intraorali; quando
            l&rsquo;intervento spetta al dentista, ti indirizzo verso un
            odontoiatra con cui collaboro.
          </p>
          <ul className="mt-6 space-y-2">
            {[
              "Bruxismo e serramento dei denti",
              "Dolore o click all\u2019articolazione della mandibola",
              "Cefalee e cervicalgie che non rispondono ad altri trattamenti",
              "Supporto durante trattamenti ortodontici o con bite",
            ].map((punto) => (
              <li key={punto} className="flex items-start gap-2 text-sm text-zinc-600">
                <svg className="mt-0.5 h-4 w-4 shrink-0 text-teal-500" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
                {punto}
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* Teaser prima visita */}
      <section className="bg-zinc-50 py-16 sm:py-24">
        <Container className="max-w-2xl text-center">
          <h2 className="text-2xl font-light font-display tracking-tight text-zinc-900 sm:text-3xl">
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
      <section className="py-16 sm:py-20">
        <Container className="max-w-2xl text-center">
          <h2 className="text-2xl font-light font-display tracking-tight text-zinc-900 sm:text-3xl">
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
          <h2 className="text-3xl font-light font-display tracking-tight text-white sm:text-4xl">
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
              className="w-full bg-transparent px-8 py-3.5 text-base text-white ring-white/40 hover:bg-paper/10 hover:ring-white/60 sm:w-auto"
            >
              Contatta lo studio
            </Button>
            <Button
              href={`tel:${CONTACT_INFO.phone.replace(/\s/g, "")}`}
              variant="secondary"
              className="w-full bg-transparent px-8 py-3.5 text-base text-white ring-white/40 hover:bg-paper/10 hover:ring-white/60 sm:w-auto"
            >
              Chiama {CONTACT_INFO.phone}
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
