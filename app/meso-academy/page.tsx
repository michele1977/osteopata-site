import type { Metadata } from "next";
import Image from "next/image";
import Container from "@/components/ui/Container";
import Eyebrow from "@/components/ui/Eyebrow";
import PageHero from "@/components/ui/PageHero";
import { MESO_CONTACT } from "@/lib/constants";

export const metadata: Metadata = {
  title: "M.E.S.O. Academy \u2013 Formazione osteopatica a Napoli",
  description:
    "Scopri M.E.S.O. Academy, associazione dedicata alla formazione avanzata in osteopatia e terapie manuali a Napoli.",
};

const acronimo = [
  ["M", "Metabolico"],
  ["E", "Emozionale"],
  ["S", "Strutturale"],
  ["O", "Occlusale"],
];

const ambiti = [
  {
    titolo: "Osteopatia",
    descrizione:
      "Approfondimenti su tecniche strutturali, viscerali e cranio-sacrali per professionisti che vogliono ampliare le proprie competenze.",
  },
  {
    titolo: "Kinesiologia",
    descrizione:
      "Formazione sui test muscolari e sulle metodiche kinesiologiche applicate alla pratica clinica quotidiana.",
  },
  {
    titolo: "Medicina integrata",
    descrizione:
      "Seminari e workshop su approcci complementari, per un inquadramento multidisciplinare del paziente.",
  },
];

const valori = [
  {
    titolo: "Qualit\u00e0 della formazione",
    descrizione:
      "Programmi strutturati con un approccio pratico e basato sull\u2019evidenza clinica.",
  },
  {
    titolo: "Approccio multidisciplinare",
    descrizione:
      "Integrazione di competenze diverse per una visione completa del paziente.",
  },
  {
    titolo: "Aggiornamento continuo",
    descrizione:
      "Corsi aggiornati alle pi\u00f9 recenti evidenze scientifiche e alle esigenze della pratica professionale.",
  },
];

export default function MesoAcademyPage() {
  return (
    <>
      <PageHero
        eyebrow="M.E.S.O. Academy"
        title={
          <>
            Formazione
            <br />
            <em>&amp; incontri.</em>
          </>
        }
        intro={
          <p>
            Associazione culturale dedicata alla formazione avanzata nelle terapie manuali, fondata
            e presieduta dal Dott. Roberto Trupiano. Organizza corsi, seminari e workshop
            post-graduate con docenti esperti, con un approccio pratico orientato alla clinica.
          </p>
        }
        aside={
          <div className="flex justify-center lg:justify-end">
            <Image
              src="/meso-logo.png"
              alt="Logo M.E.S.O. Academy"
              width={260}
              height={260}
              priority
              className="h-auto w-44 rounded-full bg-paper p-5 shadow-[0_20px_50px_-20px_rgba(19,32,30,0.35)] sm:w-56"
            />
          </div>
        }
      />

      {/* Acronimo */}
      <section className="bg-ink text-paper">
        <Container className="grid grid-cols-2 divide-paper/15 md:grid-cols-4 md:divide-x">
          {acronimo.map(([lettera, parola]) => (
            <div key={lettera} className="py-12 md:px-8 md:first:pl-0">
              <div className="font-display text-6xl font-light text-sand">{lettera}</div>
              <div className="mt-2 text-[11.5px] font-medium uppercase tracking-[0.18em] text-paper/75">
                {parola}
              </div>
            </div>
          ))}
        </Container>
      </section>

      {/* Ambiti */}
      <Container as="section" className="py-24 lg:py-28">
        <Eyebrow n="01">Ambiti formativi</Eyebrow>
        <div className="mt-12 grid gap-x-10 md:grid-cols-3">
          {ambiti.map((a) => (
            <div key={a.titolo} className="border-t border-line py-8">
              <h2 className="font-display text-3xl font-light">{a.titolo}</h2>
              <p className="mt-3 leading-relaxed text-ink/80">{a.descrizione}</p>
            </div>
          ))}
        </div>
      </Container>

      {/* Valori */}
      <section className="border-t border-line bg-paper">
        <Container className="py-24 lg:py-28">
          <Eyebrow n="02">I nostri valori</Eyebrow>
          <div className="mt-12 grid gap-x-10 md:grid-cols-3">
            {valori.map((v) => (
              <div key={v.titolo} className="border-t border-line py-8">
                <h2 className="font-display text-2xl font-light">{v.titolo}</h2>
                <p className="mt-3 leading-relaxed text-ink/80">{v.descrizione}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Contatti academy */}
      <section className="px-4 pb-4 lg:px-6 lg:pb-6">
        <div className="rounded-[2.5rem] bg-sea px-6 py-20 text-paper lg:px-16">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-7">
              <h2 className="font-display text-5xl font-light leading-[0.95] tracking-tight md:text-6xl">
                Corsi in
                <br />
                <em className="text-sand">programma.</em>
              </h2>
              <p className="mt-6 max-w-md leading-relaxed text-paper/80">
                I corsi si svolgono a Napoli. Per date e programmi contatta direttamente
                l&rsquo;Academy.
              </p>
            </div>
            <div className="flex flex-col gap-4 lg:col-span-5 lg:items-end">
              <a
                href={`tel:${MESO_CONTACT.phone.replace(/\s/g, "")}`}
                className="rounded-full bg-paper px-7 py-4 text-ink transition hover:bg-tufo hover:text-paper"
              >
                {MESO_CONTACT.phone}
              </a>
              <a href={`mailto:${MESO_CONTACT.email}`} className="text-paper/80 hover:text-paper">
                {MESO_CONTACT.email}
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
