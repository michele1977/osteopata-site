import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Container from "@/components/ui/Container";
import Eyebrow from "@/components/ui/Eyebrow";
import PageHero from "@/components/ui/PageHero";
import CallBand from "@/components/ui/CallBand";
import { CURRICULUM_URL } from "@/lib/constants";
import { FORMAZIONE } from "@/lib/formazione";

export const metadata: Metadata = {
  title: "Chi sono – Osteopata a Napoli e Pozzuoli | Roberto Trupiano",
  description:
    "Roberto Trupiano, osteopata a Napoli e Pozzuoli. Trattamenti personalizzati per mal di schiena, cervicale, postura e dolori articolari.",
};

const approccio = [
  {
    titolo: "Ricerca della causa",
    testo: "Credo che il corpo vada letto nel suo insieme. Ogni dolore ha una storia da ascoltare.",
  },
  {
    titolo: "Ascolto attivo",
    testo: "Dedico tempo a conoscerti, perché dietro ogni sintomo c’è una persona con la propria storia.",
  },
  {
    titolo: "Piano personalizzato",
    testo: "Nessun protocollo uguale per tutti. Il tuo percorso riflette la tua situazione reale.",
  },
  {
    titolo: "Risultati misurabili",
    testo: "Confrontiamo insieme i progressi per adattare il lavoro in modo trasparente.",
  },
];

const perChi = [
  {
    titolo: "Adulti",
    testo: "Che tu abbia un problema acuto o un disagio che convive con te da tempo, troverai uno spazio dove essere ascoltato.",
  },
  {
    titolo: "Sportivi",
    testo: "Lavoriamo insieme sul tuo corpo per mantenerlo in equilibrio, prevenire gli infortuni e sostenere le tue prestazioni.",
  },
  {
    titolo: "Lavoratori sedentari",
    testo: "Ore alla scrivania lasciano il segno. Ti aiuto a capire come il corpo reagisce e a ritrovare il benessere quotidiano.",
  },
];

export default function ChiSonoPage() {
  return (
    <>
      <PageHero
        eyebrow="Chi sono"
        title={
          <>
            Roberto Trupiano,
            <br />
            <em>osteopata D.O.</em>
          </>
        }
        intro={
          <>
            <p>
              Da anni dedico il mio lavoro all&rsquo;osteopatia, con la convinzione che ascoltare
              il corpo sia il primo passo per stare meglio.
            </p>
            <p className="mt-4 text-base text-stone">
              Il mio studio &egrave; un luogo dove ogni persona viene accolta senza fretta. Ricevo
              solo su appuntamento, a Napoli e Pozzuoli, per dedicarti tutta l&rsquo;attenzione
              che meriti.
            </p>
          </>
        }
        aside={
          <figure className="overflow-hidden rounded-[1.75rem] bg-sea">
            <div className="relative aspect-[4/5]">
              <Image
                src="/Trupiano-ChiSono.jpg"
                alt="Roberto Trupiano, osteopata a Napoli"
                fill
                priority
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover"
              />
            </div>
            <figcaption className="flex items-center justify-between px-5 py-3 text-[11px] font-medium uppercase tracking-[0.18em] text-paper/70">
              <span>Napoli · Pozzuoli</span>
              <span>R.O.I.</span>
            </figcaption>
          </figure>
        }
      />

      {/* Approccio */}
      <Container as="section" className="py-24 lg:py-28">
        <Eyebrow n="01">Il mio approccio</Eyebrow>
        <h2 className="mt-6 max-w-2xl font-display text-4xl font-light leading-tight md:text-5xl">
          Non applico protocolli standard: ogni incontro riflette la persona che ho davanti.
        </h2>
        <div className="mt-14 grid gap-x-10 sm:grid-cols-2 lg:grid-cols-4">
          {approccio.map((a, i) => (
            <div key={a.titolo} className="border-t border-line py-8">
              <span className="text-xs font-medium text-tufo">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="mt-4 font-display text-2xl font-light">{a.titolo}</h3>
              <p className="mt-3 text-[15px] leading-relaxed text-ink/80">{a.testo}</p>
            </div>
          ))}
        </div>
      </Container>

      {/* Formazione */}
      <section className="border-t border-line bg-paper">
        <Container className="grid gap-12 py-24 lg:grid-cols-12 lg:py-28">
          <div className="lg:col-span-4">
            <Eyebrow n="02">Formazione</Eyebrow>
            <h2 className="mt-6 font-display text-4xl font-light leading-tight md:text-5xl">
              Oltre cento corsi, <em className="text-tufo">un metodo.</em>
            </h2>
            <p className="mt-6 leading-relaxed text-ink/80">
              Specializzato nei disturbi cranio-cervico-mandibolari, membro del Registro degli
              Osteopati d&rsquo;Italia (R.O.I.).
            </p>
            <a
              href={CURRICULUM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-block text-xs font-medium uppercase tracking-widest text-tufo hover:underline"
            >
              Scarica il curriculum (PDF) ↓
            </a>
          </div>
          <ul className="lg:col-span-8">
            {FORMAZIONE.map(([k, v]) => (
              <li key={v} className="flex gap-6 border-t border-line py-5">
                <span className="w-16 shrink-0 text-xs font-medium text-tufo">{k}</span>
                <span className="text-ink/85">{v}</span>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* M.E.S.O. Academy */}
      <section className="bg-ink py-24 text-paper lg:py-28">
        <Container className="grid gap-10 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-8">
            <Eyebrow n="03" dark>
              Attivit&agrave; formativa
            </Eyebrow>
            <h2 className="mt-6 font-display text-5xl font-light tracking-tight md:text-6xl">
              M.E.S.O. Academy
            </h2>
            <p className="mt-6 max-w-xl leading-relaxed text-paper/75">
              Oltre all&rsquo;attivit&agrave; clinica, sono presidente della M.E.S.O. Academy,
              associazione culturale che organizza corsi post-graduate per professionisti delle
              terapie manuali.
            </p>
            <Link
              href="/meso-academy"
              className="mt-10 inline-block rounded-full bg-paper px-7 py-4 text-ink transition hover:bg-tufo hover:text-paper"
            >
              Scopri l&apos;Academy →
            </Link>
          </div>
          <div className="flex justify-center lg:col-span-4">
            <Image
              src="/meso-logo.png"
              alt="Logo M.E.S.O. Academy"
              width={240}
              height={240}
              className="h-auto w-40 rounded-full bg-paper p-4 sm:w-52"
            />
          </div>
        </Container>
      </section>

      {/* Per chi */}
      <Container as="section" className="py-24 lg:py-28">
        <Eyebrow n="04">Per chi &egrave; indicato</Eyebrow>
        <h2 className="mt-6 max-w-2xl font-display text-4xl font-light leading-tight md:text-5xl">
          L&rsquo;osteopatia &egrave; adatta a diverse esigenze e fasce d&rsquo;et&agrave;.
        </h2>
        <div className="mt-14 grid gap-x-10 md:grid-cols-3">
          {perChi.map((p) => (
            <div key={p.titolo} className="border-t border-line py-8">
              <h3 className="font-display text-3xl font-light">{p.titolo}</h3>
              <p className="mt-3 leading-relaxed text-ink/80">{p.testo}</p>
            </div>
          ))}
        </div>
      </Container>

      <CallBand title={<>Vuoi conoscermi<br /><em>di persona?</em></>} />
    </>
  );
}
