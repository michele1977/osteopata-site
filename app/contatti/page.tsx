import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import Eyebrow from "@/components/ui/Eyebrow";
import PageHero from "@/components/ui/PageHero";
import MapEmbed from "@/components/ui/MapEmbed";
import { CONTACT_INFO, WHATSAPP_URL } from "@/lib/constants";
import WhatsAppIcon from "@/components/ui/WhatsAppIcon";

export const metadata: Metadata = {
  title: "Contatti",
  description:
    "Contatta lo studio del Dott. Trupiano per fissare una visita osteopatica a Napoli o Pozzuoli.",
};


const sedi = [
  { citta: "Napoli", indirizzo: CONTACT_INFO.address },
  { citta: "Pozzuoli", indirizzo: CONTACT_INFO.addressPozzuoli },
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
            <em>su WhatsApp.</em>
          </>
        }
        intro={
          <p>
            Scrivimi su WhatsApp per informazioni o per fissare un appuntamento: rispondo personalmente e
            troviamo insieme il giorno pi&ugrave; comodo. Ricevo solo su appuntamento.
          </p>
        }
        aside={
          <dl className="rounded-[1.75rem] bg-paper p-8 ring-1 ring-line">
            <div>
              <dt className="text-[13px] sm:text-[11.5px] font-medium uppercase tracking-[0.18em] text-stone">
                Telefono
              </dt>
              <dd className="mt-2">
                <span className="whitespace-nowrap font-display text-3xl font-light sm:text-4xl">
                  {CONTACT_INFO.phone}
                </span>
              </dd>
            </div>
            <div className="mt-6 border-t border-line pt-6">
              <dt className="text-[13px] sm:text-[11.5px] font-medium uppercase tracking-[0.18em] text-stone">Email</dt>
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
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 flex items-center justify-center gap-2 rounded-full bg-ink px-7 py-4 text-paper transition hover:bg-tufo"
            >
              <WhatsAppIcon />
              Scrivimi su WhatsApp
            </a>
          </dl>
        }
      />

      {/* Sedi */}
      <Container as="section" className="py-24 lg:py-28">
        <Eyebrow>Dove ricevo</Eyebrow>
        <div className="mt-12 space-y-20">
          {sedi.map((s) => (
            <div key={s.citta} className="grid gap-8 border-t border-line pt-10 lg:grid-cols-12 lg:items-start">
              <div className="lg:col-span-4">
                <h2 className="font-display text-5xl font-light">{s.citta}</h2>
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
