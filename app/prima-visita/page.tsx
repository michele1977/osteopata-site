import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import Eyebrow from "@/components/ui/Eyebrow";
import PageHero from "@/components/ui/PageHero";
import CallBand from "@/components/ui/CallBand";

export const metadata: Metadata = {
  title: "Prima visita osteopatica",
  description:
    "Come si svolge la prima visita osteopatica: ascolto, valutazione, trattamento e indicazioni personalizzate. Studio a Napoli e Pozzuoli.",
};

const fasi = [
  {
    titolo: "Ascolto e anamnesi",
    descrizione:
      "Partiamo dalla tua storia. Ti chiedo di raccontarmi il problema, da quanto tempo lo avverti, cosa lo peggiora e cosa lo migliora. Ogni dettaglio mi aiuta a capire dove cercare la causa.",
  },
  {
    titolo: "Valutazione",
    descrizione:
      "Attraverso test manuali e osservazione posturale, individuo le zone di tensione e le restrizioni di movimento. Non servono macchinari: le mie mani sono lo strumento principale.",
  },
  {
    titolo: "Trattamento",
    descrizione:
      "Utilizzo tecniche manuali dolci e mirate per riequilibrare le strutture del corpo. Il trattamento non è doloroso e si adatta alla tua sensibilità.",
  },
  {
    titolo: "Indicazioni personalizzate",
    descrizione:
      "Al termine ti spiego cosa ho riscontrato, ti do indicazioni pratiche da seguire a casa e, se necessario, pianifichiamo insieme le sedute successive.",
  },
];

const infoPratiche = [
  { titolo: "Durata", testo: "La prima visita dura circa 45-60 minuti. Le sedute successive sono più brevi (30-40 minuti)." },
  { titolo: "Cosa portare", testo: "Eventuali esami (radiografie, risonanze, analisi) e un abbigliamento comodo. Non serve impegnativa medica." },
  { titolo: "Solo su appuntamento", testo: "Le visite si svolgono esclusivamente su appuntamento. Per fissare un appuntamento basta una telefonata." },
];

export default function PrimaVisitaPage() {
  return (
    <>
      <PageHero
        eyebrow="Prima visita"
        title={
          <>
            Un incontro,
            <br />
            <em>non un esame.</em>
          </>
        }
        intro={
          <p>
            &Egrave; il momento in cui ci conosciamo, capisco la tua situazione e iniziamo a
            lavorare insieme. Nessuna fretta, nessun giudizio. Porta eventuali esami gi&agrave;
            eseguiti, indossa vestiti comodi e lascia a me il resto.
          </p>
        }
      />

      {/* Fasi */}
      <Container as="section" className="py-24 lg:py-28">
        <Eyebrow>Le quattro fasi</Eyebrow>
        <h2 className="mt-6 max-w-2xl font-display text-4xl font-light leading-tight md:text-5xl">
          Cosa succede, passo dopo passo.
        </h2>
        <ol className="mt-14 grid gap-px overflow-hidden rounded-3xl bg-line md:grid-cols-2 lg:grid-cols-4">
          {fasi.map((fase, i) => (
            <li key={fase.titolo} className="bg-paper p-8">
              <span className="font-display text-5xl font-light text-tufo">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-8 font-display text-2xl font-light">{fase.titolo}</h3>
              <p className="mt-4 text-[15px] leading-relaxed text-ink/80">{fase.descrizione}</p>
            </li>
          ))}
        </ol>
      </Container>

      {/* Info pratiche */}
      <section className="border-t border-line">
        <Container className="grid gap-12 py-24 lg:grid-cols-12 lg:py-28">
          <div className="lg:col-span-4">
            <Eyebrow>Informazioni pratiche</Eyebrow>
            <h2 className="mt-6 font-display text-4xl font-light leading-tight md:text-5xl">
              Prima di venire in studio.
            </h2>
          </div>
          <dl className="lg:col-span-8">
            {infoPratiche.map((info) => (
              <div key={info.titolo} className="grid gap-2 border-t border-line py-7 sm:grid-cols-3 sm:gap-8">
                <dt className="text-[11.5px] font-medium uppercase tracking-[0.18em] text-stone sm:pt-1">
                  {info.titolo}
                </dt>
                <dd className="leading-relaxed text-ink/85 sm:col-span-2">{info.testo}</dd>
              </div>
            ))}
          </dl>
        </Container>
      </section>

      <CallBand
        title={<>Vuoi fissare<br /><em>la prima visita?</em></>}
        text="Chiamami: ti rispondo personalmente e troviamo insieme il giorno più comodo per te."
      />
    </>
  );
}
