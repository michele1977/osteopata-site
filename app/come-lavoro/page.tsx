import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/ui/Container";
import Eyebrow from "@/components/ui/Eyebrow";
import PageHero from "@/components/ui/PageHero";
import CallBand from "@/components/ui/CallBand";

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
      <PageHero
        eyebrow="Come lavoro"
        title={
          <>
            Ascolto, valutazione,
            <br />
            <em>mani.</em>
          </>
        }
        intro={
          <p>
            L&apos;osteopatia &egrave; una disciplina manuale che si occupa di disturbi funzionali
            dell&apos;apparato muscolo-scheletrico. Qui ti spiego i principi che guidano ogni
            trattamento nei miei studi di Napoli e Pozzuoli.
          </p>
        }
      />

      {/* Principi */}
      <Container as="section" className="grid gap-12 py-24 lg:grid-cols-12 lg:py-28">
        <div className="lg:col-span-4">
          <Eyebrow n="01">Principi</Eyebrow>
          <h2 className="mt-6 font-display text-4xl font-light leading-tight md:text-5xl">
            I principi del mio approccio.
          </h2>
        </div>
        <ol className="lg:col-span-8">
          {principi.map((p, i) => (
            <li key={p.titolo} className="flex gap-6 border-t border-line py-8">
              <span className="w-8 shrink-0 pt-2 text-xs font-medium text-tufo">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className="font-display text-2xl font-light md:text-3xl">{p.titolo}</h3>
                <p className="mt-3 leading-relaxed text-ink/85">{p.descrizione}</p>
              </div>
            </li>
          ))}
        </ol>
      </Container>

      {/* Triangolo della salute */}
      <section className="bg-sea py-24 text-paper lg:py-28">
        <Container>
          <Eyebrow n="02" dark>
            Il metodo
          </Eyebrow>
          <h2 className="mt-6 max-w-2xl font-display text-5xl font-light leading-[1.02] tracking-tight md:text-6xl">
            Il triangolo della salute.
          </h2>
          <p className="mt-6 max-w-xl leading-relaxed text-paper/75">
            Quando valuto un problema considero tre aspetti che si influenzano a vicenda.
          </p>
          <div className="mt-14 grid gap-px overflow-hidden rounded-3xl bg-paper/15 md:grid-cols-3">
            {ambiti.map((a, i) => (
              <div key={a.titolo} className="bg-sea p-8">
                <span className="text-xs font-medium text-sand">{["I", "II", "III"][i]}</span>
                <h3 className="mt-4 font-display text-3xl font-light">{a.titolo}</h3>
                <p className="mt-4 text-[15px] leading-relaxed text-paper/75">{a.descrizione}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* In pratica */}
      <Container as="section" className="grid gap-12 py-24 lg:grid-cols-12 lg:py-28">
        <div className="lg:col-span-4">
          <Eyebrow n="03">In pratica</Eyebrow>
          <h2 className="mt-6 font-display text-4xl font-light leading-tight md:text-5xl">
            Cosa succede in studio.
          </h2>
        </div>
        <div className="space-y-5 text-lg leading-relaxed text-ink/85 lg:col-span-8">
          <p>
            Alla prima visita mi prendo il tempo necessario per ascoltarti, capire la tua storia e
            valutare il tuo corpo nel suo insieme. Solo dopo questa fase propongo un piano di lavoro
            chiaro: quante sedute potrebbero servire, con quale frequenza e quali risultati possiamo
            attenderci in modo realistico.
          </p>
          <p>
            Durante il trattamento utilizzo tecniche manuali dolci e specifiche, adattate alla tua
            condizione. Ti spiego sempre cosa faccio e perch&eacute;, cos&igrave; puoi seguire il
            percorso con consapevolezza.
          </p>
          <Link
            href="/prima-visita"
            className="!mt-10 inline-block rounded-full px-7 py-4 text-base ring-1 ring-ink/25 transition hover:ring-ink"
          >
            Come funziona la prima visita →
          </Link>
        </div>
      </Container>

      <CallBand />
    </>
  );
}
