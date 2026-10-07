import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import Button from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Come lavoro",
  description:
    "Il mio approccio osteopatico: attenzione alla causa del problema, visione globale della persona e percorsi personalizzati. Studio a Napoli e Pozzuoli.",
};

const principi = [
  {
    titolo: "Cerco la causa, non solo il sintomo",
    descrizione:
      "Il dolore che senti in un punto del corpo spesso nasce altrove. Una spalla rigida può dipendere dalla postura del bacino, una cefalea da una tensione cervicale. Il mio lavoro parte sempre da una domanda: perché il tuo corpo ha sviluppato questo problema?",
  },
  {
    titolo: "Guardo la persona nel suo insieme",
    descrizione:
      "Non tratto solo la zona dolorante. Valuto la postura, la mobilità articolare, le abitudini quotidiane e la storia clinica. Questa visione globale mi permette di capire come le diverse parti del corpo si influenzano tra loro e di intervenire in modo più efficace.",
  },
  {
    titolo: "Costruisco un percorso su misura",
    descrizione:
      "Ogni paziente ha una storia diversa. Il trattamento che propongo tiene conto della tua età, del tuo lavoro, dello sport che pratichi e degli obiettivi che vuoi raggiungere. Non esistono protocolli uguali per tutti.",
  },
  {
    titolo: "Collaboro con altri professionisti quando serve",
    descrizione:
      "In alcuni casi il percorso migliore prevede il contributo di più figure: medici, fisioterapisti, dentisti o nutrizionisti. Quando lo ritengo utile, ti indirizzo verso colleghi di fiducia per affrontare il problema da più prospettive.",
  },
];

const ambiti = [
  {
    titolo: "Strutturale",
    descrizione:
      "Ossa, articolazioni, muscoli e fasce. Una vecchia distorsione, una cicatrice o un\u2019occlusione non equilibrata possono creare compensi che si fanno sentire lontano dal punto di partenza.",
  },
  {
    titolo: "Viscerale e metabolico",
    descrizione:
      "Organi interni e colonna sono collegati da legamenti, fasce e nervi. Una tensione addominale pu\u00f2 riflettersi sulla schiena, e le abitudini alimentari influiscono sul livello di infiammazione generale.",
  },
  {
    titolo: "Emozionale",
    descrizione:
      "Stress e periodi difficili si traducono spesso in tensioni muscolari, respiro corto e posture chiuse. Ne tengo conto, senza sostituirmi allo psicologo o al medico.",
  },
];

export default function ComeLavoroPage() {
  return (
    <>
      {/* Intro */}
      <section className="py-16 sm:py-24">
        <Container className="max-w-3xl">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-900 sm:text-5xl">
            Come lavoro
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-zinc-600">
            L&apos;osteopatia è una disciplina manuale che si occupa di
            disturbi funzionali dell&apos;apparato muscolo-scheletrico.
            Nel mio studio a Napoli e Pozzuoli applico un metodo basato
            su ascolto, valutazione accurata e tecniche manuali mirate.
            Qui ti spiego i principi che guidano ogni trattamento.
          </p>
        </Container>
      </section>

      {/* Principi */}
      <section className="bg-zinc-50 py-16 sm:py-24">
        <Container className="max-w-3xl">
          <SectionTitle
            title="I principi del mio approccio"
            centered={false}
          />
          <div className="mt-12 space-y-10">
            {principi.map((p) => (
              <div key={p.titolo}>
                <h3 className="text-lg font-semibold text-zinc-900">
                  {p.titolo}
                </h3>
                <p className="mt-2 text-base leading-relaxed text-zinc-600">
                  {p.descrizione}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Triangolo della salute */}
      <section className="py-16 sm:py-24">
        <Container className="max-w-3xl">
          <SectionTitle
            title="Il triangolo della salute"
            subtitle="Quando valuto un problema considero tre aspetti che si influenzano a vicenda."
            centered={false}
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            {ambiti.map((a) => (
              <div
                key={a.titolo}
                className="rounded-xl border border-zinc-100 bg-white p-6 shadow-sm"
              >
                <h3 className="font-semibold text-zinc-900">{a.titolo}</h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-600">
                  {a.descrizione}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* In pratica */}
      <section className="bg-zinc-50 py-16 sm:py-24">
        <Container className="max-w-3xl">
          <SectionTitle
            title="In pratica, cosa succede?"
            centered={false}
          />
          <p className="mt-6 text-base leading-relaxed text-zinc-600">
            Alla prima visita mi prendo il tempo necessario per ascoltarti,
            capire la tua storia e valutare il tuo corpo nel suo insieme.
            Solo dopo questa fase propongo un piano di lavoro chiaro:
            quante sedute potrebbero servire, con quale frequenza e quali
            risultati possiamo attenderci in modo realistico.
          </p>
          <p className="mt-4 text-base leading-relaxed text-zinc-600">
            Durante il trattamento utilizzo tecniche manuali dolci e
            specifiche, adattate alla tua condizione. Ti spiego sempre
            cosa faccio e perché, così puoi seguire il percorso con
            consapevolezza.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Button href="/prima-visita">Come funziona la prima visita</Button>
            <Button href="/contatti" variant="secondary">
              Contatta lo studio
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
