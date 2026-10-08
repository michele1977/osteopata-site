import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import Eyebrow from "@/components/ui/Eyebrow";
import PageHero from "@/components/ui/PageHero";
import MapEmbed from "@/components/ui/MapEmbed";
import { CONTACT_INFO } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contatti",
  description:
    "Contatta lo studio del Dott. Trupiano per fissare una visita osteopatica a Napoli o Pozzuoli.",
};

const tel = `tel:${CONTACT_INFO.phone.replace(/\s/g, "")}`;

const sedi = [
  { n: "01", citta: "Napoli", indirizzo: CONTACT_INFO.address },
  { n: "02", citta: "Pozzuoli", indirizzo: CONTACT_INFO.addressPozzuoli },
];

const mapsDir = (indirizzo: string) =>
  `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(indirizzo)}`;

export default function ContattiPage() {
  return (
    <>
      <PageHero
        eyebrow="Contatti"
        title={
          <>
            Parliamone
            <br />
            <em>al telefono.</em>
          </>
        }
        intro={
          <p>
            Chiamami per informazioni o per fissare un appuntamento: rispondo personalmente e
            troviamo insieme il giorno pi&ugrave; comodo. Ricevo solo su appuntamento.
          </p>
        }
        aside={
          <dl className="rounded-[1.75rem] bg-paper p-8 ring-1 ring-line">
            <div>
              <dt className="text-[11.5px] font-medium uppercase tracking-[0.18em] text-stone">
                Telefono
              </dt>
              <dd className="mt-2">
                <a href={tel} className="whitespace-nowrap font-display text-3xl font-light transition hover:text-tufo sm:text-4xl">
                  {CONTACT_INFO.phone}
                </a>
              </dd>
            </div>
            <div className="mt-6 border-t border-line pt-6">
              <dt className="text-[11.5px] font-medium uppercase tracking-[0.18em] text-stone">Email</dt>
              <dd className="mt-2">
                <a
                  href={`mailto:${CONTACT_INFO.email}`}
                  className="break-all text-lg underline-offset-4 transition hover:text-tufo hover:underline"
                >
                  {CONTACT_INFO.email}
                </a>
              </dd>
            </div>
            <a
              href={tel}
              className="mt-8 block rounded-full bg-ink px-7 py-4 text-center text-paper transition hover:bg-tufo"
            >
              Chiama ora
            </a>
          </dl>
        }
      />

      {/* Sedi */}
      <Container as="section" className="py-24 lg:py-28">
        <Eyebrow n="01">Dove ricevo</Eyebrow>
        <div className="mt-12 space-y-20">
          {sedi.map((s) => (
            <div key={s.citta} className="grid gap-8 border-t border-line pt-10 lg:grid-cols-12 lg:items-start">
              <div className="lg:col-span-4">
                <span className="text-xs font-medium text-tufo">{s.n}</span>
                <h2 className="mt-3 font-display text-5xl font-light">{s.citta}</h2>
                <p className="mt-3 text-lg text-ink/80">{s.indirizzo}</p>
                <a
                  href={mapsDir(s.indirizzo)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 inline-block rounded-full px-6 py-3 text-sm ring-1 ring-ink/25 transition hover:ring-ink"
                >
                  Indicazioni su Google Maps ↗
                </a>
              </div>
              <div className="overflow-hidden rounded-3xl ring-1 ring-line lg:col-span-8">
                <MapEmbed title={`Mappa studio ${s.citta}`} query={s.indirizzo} />
              </div>
            </div>
          ))}
        </div>
      </Container>
    </>
  );
}
