import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import PageHero from "@/components/ui/PageHero";
import CallBand from "@/components/ui/CallBand";

export const metadata: Metadata = {
  title: "Domande frequenti sull'osteopatia",
  description:
    "Cos'è l'osteopatia, a chi è rivolta, quanto dura una visita e come si prenota: le risposte alle domande più comuni del Dott. Trupiano, osteopata a Napoli e Pozzuoli.",
};

const DOMANDE = [
  {
    d: "Che cos'è l'osteopatia?",
    r: "È una medicina manipolativa che considera la persona nel suo insieme. Si lavora con le mani, sia per capire cosa non va sia per intervenire, senza farmaci. L'obiettivo è risalire alla causa del problema, che spesso si trova lontano dal punto in cui senti dolore.",
  },
  {
    d: "A chi è rivolta?",
    r: "A persone di ogni età, dal neonato all'anziano: a chi ha dolori acuti o cronici, a chi fa sport e a chi è sedentario, a chi vuole fare prevenzione. L'osteopata può anche accompagnare la donna durante la gravidanza.",
  },
  {
    d: "Come si diventa osteopata?",
    r: "Con un percorso di formazione di base di circa sei anni, seguito da corsi di specializzazione. Il mio percorso lo trovi nella pagina Chi sono.",
  },
  {
    d: "Il trattamento è doloroso?",
    r: "No. Uso tecniche manuali dolci e mirate, e mi adatto alla tua sensibilità.",
  },
  {
    d: "Serve la prescrizione del medico?",
    r: "No, non serve l'impegnativa. Se hai esami recenti, come radiografie, risonanze o analisi, portali alla visita: mi aiutano a capire meglio il quadro.",
  },
  {
    d: "Quanto dura una visita?",
    r: "La prima visita dura circa 45-60 minuti. Le sedute successive sono più brevi, di solito 30-40 minuti.",
  },
  {
    d: "Quante sedute servono?",
    r: "Dipende dal problema e da quanto tempo ce l'hai. Dopo la prima visita ti spiego cosa ho trovato e, se serve, pianifichiamo insieme le sedute successive.",
  },
  {
    d: "L'osteopatia sostituisce il medico?",
    r: "No. È un approccio complementare: non sostituisce le visite mediche né le cure che stai seguendo. Se qualcosa richiede un accertamento, te lo dico e ti indirizzo al medico.",
  },
  {
    d: "Come si prenota?",
    r: "Ricevo solo su appuntamento, a Napoli e a Pozzuoli. Scrivimi su WhatsApp: rispondo personalmente e troviamo insieme il giorno più comodo.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: DOMANDE.map(({ d, r }) => ({
    "@type": "Question",
    name: d,
    acceptedAnswer: { "@type": "Answer", text: r },
  })),
};

export default function DomandeFrequentiPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
      />
      <PageHero
        eyebrow="Domande frequenti"
        title={
          <>
            Le domande
            <br />
            <em>che mi fanno più spesso.</em>
          </>
        }
        intro={<p>Se non trovi la tua, scrivimi su WhatsApp: rispondo volentieri.</p>}
      />

      <Container as="section" className="py-24 lg:py-28">
        <dl className="max-w-3xl">
          {DOMANDE.map(({ d, r }) => (
            <div key={d} className="border-t border-line py-8">
              <dt className="font-display text-2xl font-light md:text-3xl">{d}</dt>
              <dd className="mt-3 leading-relaxed text-ink/85">{r}</dd>
            </div>
          ))}
        </dl>
      </Container>

      <CallBand />
    </>
  );
}
