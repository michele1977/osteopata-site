import type { Metadata } from "next";
import Image from "next/image";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "M.E.S.O Academy \u2013 Formazione osteopatica a Napoli",
  description:
    "Scopri M.E.S.O Academy, associazione dedicata alla formazione avanzata in osteopatia e terapie manuali a Napoli.",
};

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
      {/* Hero */}
      <section className="bg-gradient-to-b from-teal-50 to-white py-14 sm:py-20">
        <Container className="max-w-3xl text-center">
          <Image
            src="/meso-logo.png"
            alt="Logo M.E.S.O Academy"
            width={160}
            height={160}
            className="mx-auto h-auto w-[140px] object-contain sm:w-[160px]"
            priority
          />
          <h1 className="mt-6 text-4xl font-bold tracking-tight text-zinc-900 sm:text-5xl">
            Cos&rsquo;&egrave; M.E.S.O Academy
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-zinc-600">
            Associazione culturale dedicata alla formazione avanzata nelle
            terapie manuali, fondata e presieduta dal Dott. Roberto Trupiano.
          </p>
        </Container>
      </section>

      {/* Introduzione */}
      <section className="py-12 sm:py-16">
        <Container className="max-w-3xl">
          <p className="text-base leading-relaxed text-zinc-600">
            La M.E.S.O Academy nasce con l&rsquo;obiettivo di offrire percorsi
            formativi post-graduate di alto livello per professionisti del
            settore osteopatico e delle terapie manuali. L&rsquo;academy
            organizza corsi, seminari e workshop in collaborazione con docenti
            esperti, con un approccio pratico orientato alla clinica.
          </p>
        </Container>
      </section>

      {/* Ambiti formativi */}
      <section className="border-t border-zinc-100 bg-zinc-50 py-12 sm:py-16">
        <Container>
          <h2 className="text-center text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
            Ambiti formativi
          </h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {ambiti.map((a) => (
              <div
                key={a.titolo}
                className="rounded-xl bg-white p-6 ring-1 ring-zinc-100"
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

      {/* Valori */}
      <section className="py-12 sm:py-16">
        <Container>
          <h2 className="text-center text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
            I nostri valori
          </h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {valori.map((v) => (
              <div key={v.titolo} className="text-center">
                <h3 className="font-semibold text-zinc-900">{v.titolo}</h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-600">
                  {v.descrizione}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Logistica */}
      <section className="border-t border-zinc-100 bg-zinc-50 py-12 sm:py-16">
        <Container className="max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
            Dove si svolgono i corsi
          </h2>
          <p className="mt-4 text-base leading-relaxed text-zinc-600">
            I corsi della M.E.S.O Academy si svolgono a Napoli, in strutture
            professionali attrezzate per la formazione pratica e teorica.
          </p>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-14 sm:py-20">
        <Container className="max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
            Informazioni sui corsi
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-zinc-600">
            Per informazioni sui corsi in programma, contatta la M.E.S.O
            Academy.
          </p>
          <ul className="mt-6 space-y-2 text-sm text-zinc-600">
            <li>
              <span className="font-medium text-zinc-900">Email:</span>{" "}
              <a
                href="mailto:info@mesoacademy.it"
                className="text-teal-700 underline underline-offset-2 hover:text-teal-800"
              >
                info@mesoacademy.it
              </a>
            </li>
            <li>
              <span className="font-medium text-zinc-900">Telefono:</span>{" "}
              <a
                href="tel:+393389837411"
                className="text-teal-700 underline underline-offset-2 hover:text-teal-800"
              >
                +39 338 983 7411
              </a>
            </li>
          </ul>
          <div className="mt-8">
            <Button href="/contatti">Contatta lo studio</Button>
          </div>
        </Container>
      </section>
    </>
  );
}
