import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { CONTACT_INFO } from "@/lib/constants";
import MapEmbed from "@/components/ui/MapEmbed";
import ContactForm from "./ContactForm";

export const metadata: Metadata = {
  title: "Contatti",
  description:
    "Contatta lo studio del Dott. Trupiano per fissare una visita osteopatica a Napoli o Pozzuoli.",
};

const phoneClean = CONTACT_INFO.phone.replace(/\s/g, "");

export default function ContattiPage() {
  return (
    <>
      {/* Hero con contatti above the fold */}
      <section className="bg-gradient-to-b from-teal-50 to-white py-16 sm:py-24">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-light font-display tracking-tight text-zinc-900 sm:text-5xl">
              Contatta lo studio
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-zinc-500">
              Puoi contattarmi per informazioni o per fissare un appuntamento:
              rispondo personalmente al telefono.
            </p>
          </div>

          {/* Contatti rapidi - grid */}
          <div className="mx-auto mt-12 grid max-w-3xl gap-4 sm:grid-cols-2">
            {/* Telefono */}
            <a
              href={`tel:${phoneClean}`}
              className="flex items-center gap-4 rounded-xl border border-zinc-100 bg-paper p-5 shadow-sm transition-shadow hover:shadow-md"
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-teal-50 text-teal-700">
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                </svg>
              </span>
              <div className="min-w-0">
                <span className="block text-xs font-medium text-zinc-400">Telefono</span>
                <span className="block truncate text-sm font-semibold text-zinc-900">{CONTACT_INFO.phone}</span>
              </div>
            </a>

            {/* Email */}
            <a
              href={`mailto:${CONTACT_INFO.email}`}
              className="flex items-center gap-4 rounded-xl border border-zinc-100 bg-paper p-5 shadow-sm transition-shadow hover:shadow-md"
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-teal-50 text-teal-700">
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                </svg>
              </span>
              <div className="min-w-0">
                <span className="block text-xs font-medium text-zinc-400">Email</span>
                <span className="block truncate text-sm font-semibold text-zinc-900">{CONTACT_INFO.email}</span>
              </div>
            </a>

            {/* Appuntamento */}
            <div className="flex items-center gap-4 rounded-xl border border-zinc-100 bg-paper p-5 shadow-sm">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-zinc-100 text-zinc-500">
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
              </span>
              <div className="min-w-0">
                <span className="block text-xs font-medium text-zinc-400">Visite</span>
                <span className="block truncate text-sm font-semibold text-zinc-900">Solo su appuntamento</span>
              </div>
            </div>
          </div>

          {/* CTA principali */}
          <div className="mx-auto mt-10 flex max-w-md flex-col gap-3 sm:flex-row sm:justify-center">
            <Button
              href={`tel:${phoneClean}`}
              className="w-full px-8 py-3.5 text-base sm:w-auto"
            >
              Chiama {CONTACT_INFO.phone}
            </Button>
          </div>
        </Container>
      </section>

      {/* Form contatto */}
      <section className="py-16 sm:py-24">
        <Container className="max-w-xl">
          <div className="rounded-2xl border border-zinc-100 bg-paper p-8 shadow-sm sm:p-10">
            <h2 className="text-2xl font-light font-display text-zinc-900">
              Invia una richiesta
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-zinc-500">
              Compila il modulo e ti risponder&ograve; il prima possibile.
            </p>
            <ContactForm />
          </div>
        </Container>
      </section>

      {/* Dove ricevo */}
      <section className="bg-zinc-50 py-16 sm:py-24">
        <Container>
          <h2 className="text-center text-3xl font-light font-display tracking-tight text-zinc-900 sm:text-4xl">
            Dove ricevo
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-center text-base leading-relaxed text-zinc-500">
            Ricevo su appuntamento nelle sedi di Napoli e Pozzuoli.
          </p>

          {/* Napoli */}
          <div className="mt-14 grid items-center gap-8 md:grid-cols-2 md:gap-12">
            <div>
              <span className="inline-block rounded-full bg-teal-100 px-3 py-1 text-xs font-semibold text-teal-800">
                Sede 1
              </span>
              <h3 className="mt-3 text-2xl font-light font-display text-zinc-900">Napoli</h3>
              <p className="mt-3 text-base leading-relaxed text-zinc-500">
                {CONTACT_INFO.address}
              </p>
              <div className="mt-6">
                <Button
                  href="https://www.google.com/maps/dir/?api=1&destination=Via+Mergellina+220,+Napoli"
                  variant="secondary"
                  className="w-full px-6 py-3 text-sm sm:w-auto"
                >
                  <svg className="mr-2 inline-block h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                  </svg>
                  Apri su Google Maps
                </Button>
              </div>
            </div>
            <div className="overflow-hidden rounded-2xl shadow-lg">
              <MapEmbed title="Mappa studio Napoli" query="Via Mergellina 220, Napoli" />
            </div>
          </div>

          {/* Pozzuoli */}
          <div className="mt-20 grid items-center gap-8 md:grid-cols-2 md:gap-12">
            <div>
              <span className="inline-block rounded-full bg-teal-100 px-3 py-1 text-xs font-semibold text-teal-800">
                Sede 2
              </span>
              <h3 className="mt-3 text-2xl font-light font-display text-zinc-900">Pozzuoli</h3>
              <p className="mt-3 text-base leading-relaxed text-zinc-500">
                {CONTACT_INFO.addressPozzuoli}
              </p>
              <div className="mt-6">
                <Button
                  href="https://www.google.com/maps/dir/?api=1&destination=Via+Montenuovo+Licola+Patria+138,+Pozzuoli+(NA)"
                  variant="secondary"
                  className="w-full px-6 py-3 text-sm sm:w-auto"
                >
                  <svg className="mr-2 inline-block h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                  </svg>
                  Apri su Google Maps
                </Button>
              </div>
            </div>
            <div className="overflow-hidden rounded-2xl shadow-lg">
              <MapEmbed title="Mappa studio Pozzuoli" query="Via Montenuovo Licola Patria 138, Pozzuoli (NA)" />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
