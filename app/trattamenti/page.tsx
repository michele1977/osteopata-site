import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/ui/Container";
import Eyebrow from "@/components/ui/Eyebrow";
import PageHero from "@/components/ui/PageHero";
import CallBand from "@/components/ui/CallBand";

export const metadata: Metadata = {
  title: "Osteopata Napoli \u2013 Trattamenti per schiena, cervicale e postura",
  description:
    "Scopri i trattamenti osteopatici per mal di schiena, cervicale e dolori articolari. Studio a Napoli e Pozzuoli.",
};

const problemi = [
  {
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

const odontoiatria = [
  "Bruxismo e serramento dei denti",
  "Dolore o click all\u2019articolazione della mandibola",
  "Cefalee e cervicalgie che non rispondono ad altri trattamenti",
  "Supporto durante trattamenti ortodontici o con bite",
];

export default function TrattamentiPage() {
  return (
    <>
      <PageHero
        eyebrow="Trattamenti"
        title={
          <>
            Come posso
            <br />
            <em>aiutarti.</em>
          </>
        }
        intro={
          <>
            <p>
              L&rsquo;osteopatia interviene in modo manuale sulle strutture del corpo, senza
              farmaci e senza strumenti invasivi. Qui trovi i disturbi pi&ugrave; comuni per cui
              le persone si rivolgono a me, spiegati in modo semplice.
            </p>
            <p className="mt-4 text-base text-stone">
              Ogni disturbo viene valutato nel contesto del tuo stile di vita, delle tue abitudini
              e della tua storia.
            </p>
          </>
        }
      />

      {/* Disturbi */}
      <Container as="section" className="py-24 lg:py-28">
        <Eyebrow>I disturbi pi&ugrave; comuni</Eyebrow>
        <div className="mt-12 grid gap-x-16 md:grid-cols-2">
          {problemi.map((p) => (
            <article key={p.titolo} className="border-t border-line py-10">
              <div>
                <div>
                  <h2 className="font-display text-3xl font-light">{p.titolo}</h2>
                  <p className="mt-3 leading-relaxed text-ink/85">{p.intro}</p>
                  <ul className="mt-5 space-y-2">
                    {p.punti.map((punto) => (
                      <li key={punto} className="flex gap-3 text-[15px] text-stone">
                        <span className="text-tufo">&mdash;</span>
                        {punto}
                      </li>
                    ))}
                  </ul>
                  <p className="mt-6 font-display text-lg italic leading-snug text-ink">
                    {p.soluzione}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
        <p className="mt-6 border-t border-line pt-8 text-stone">
          Non trovi il tuo problema?{" "}
          <Link href="/contatti" className="text-tufo underline-offset-4 hover:underline">
            Scrivimi per un confronto
          </Link>
          .
        </p>
      </Container>

      {/* Osteopatia e odontoiatria */}
      <section className="bg-sea py-24 text-paper lg:py-28">
        <Container className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Eyebrow dark>
              Bocca e postura
            </Eyebrow>
            <h2 className="mt-6 font-display text-5xl font-light leading-[1.02] tracking-tight md:text-6xl">
              Osteopatia e<br />
              <em className="text-sand">odontoiatria.</em>
            </h2>
          </div>
          <div className="space-y-5 leading-relaxed text-paper/80 lg:col-span-7">
            <p>
              Mi occupo in modo specifico dei disturbi cranio-cervico-mandibolari: il rapporto tra
              bocca, mandibola, collo e postura. Un&rsquo;occlusione non equilibrata pu&ograve;
              contribuire a cefalee, dolori cervicali, mal di schiena e tensioni che sembrano non
              avere una causa chiara.
            </p>
            <p>
              Durante la valutazione verifico con test specifici se la bocca pu&ograve; essere
              coinvolta nel tuo problema. Quando serve utilizzo anche tecniche osteopatiche
              intraorali; quando l&rsquo;intervento spetta al dentista, ti indirizzo verso un
              odontoiatra con cui collaboro.
            </p>
            <ul className="!mt-10">
              {odontoiatria.map((punto) => (
                <li key={punto} className="border-t border-paper/15 py-4 font-display text-xl text-paper">
                  {punto}
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      {/* Prima visita */}
      <Container as="section" className="grid gap-8 py-24 lg:grid-cols-12 lg:items-end lg:py-28">
        <div className="lg:col-span-8">
          <Eyebrow>La prima visita</Eyebrow>
          <h2 className="mt-6 font-display text-4xl font-light leading-tight md:text-5xl">
            Non sai cosa aspettarti?
          </h2>
          <p className="mt-5 max-w-xl leading-relaxed text-ink/85">
            La prima visita dura circa 45-60 minuti: ascolto, valutazione, trattamento e
            indicazioni personalizzate.
          </p>
        </div>
        <div className="lg:col-span-4 lg:text-right">
          <Link
            href="/prima-visita"
            className="inline-block rounded-full px-7 py-4 ring-1 ring-ink/25 transition hover:ring-ink"
          >
            Come funziona →
          </Link>
        </div>
      </Container>

      <CallBand title={<>Ti riconosci in<br /><em>uno di questi sintomi?</em></>} />
    </>
  );
}
