import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { CONTACT_INFO } from "@/lib/constants";
import ContactForm from "./ContactForm";

export const metadata: Metadata = {
  title: "Contatti",
  description:
    "Contatta lo studio del Dott. Trupiano per prenotare una visita osteopatica a Napoli o Pozzuoli.",
};

const phoneClean = CONTACT_INFO.phone.replace(/\s/g, "");

export default function ContattiPage() {
  return (
    <>
      {/* Hero con contatti above the fold */}
      <section className="bg-gradient-to-b from-teal-50 to-white py-16 sm:py-24">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-zinc-900 sm:text-5xl">
              Contatta lo studio
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-zinc-500">
              Puoi contattarmi per informazioni o per prenotare una visita.
              Rispondo personalmente a ogni richiesta.
            </p>
          </div>

          {/* Contatti rapidi - grid */}
          <div className="mx-auto mt-12 grid max-w-3xl gap-4 sm:grid-cols-2">
            {/* Telefono */}
            <a
              href={`tel:${phoneClean}`}
              className="flex items-center gap-4 rounded-xl border border-zinc-100 bg-white p-5 shadow-sm transition-shadow hover:shadow-md"
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

            {/* WhatsApp */}
            <a
              href={CONTACT_INFO.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 rounded-xl border border-zinc-100 bg-white p-5 shadow-sm transition-shadow hover:shadow-md"
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-green-50 text-green-600">
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
                </svg>
              </span>
              <div className="min-w-0">
                <span className="block text-xs font-medium text-zinc-400">WhatsApp</span>
                <span className="block truncate text-sm font-semibold text-zinc-900">Scrivimi</span>
              </div>
            </a>

            {/* Email */}
            <a
              href={`mailto:${CONTACT_INFO.email}`}
              className="flex items-center gap-4 rounded-xl border border-zinc-100 bg-white p-5 shadow-sm transition-shadow hover:shadow-md"
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
            <div className="flex items-center gap-4 rounded-xl border border-zinc-100 bg-white p-5 shadow-sm">
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
              Chiama ora
            </Button>
            <Button
              href={CONTACT_INFO.whatsapp}
              className="w-full bg-green-600 px-8 py-3.5 text-base text-white shadow-md hover:bg-green-700 hover:shadow-lg sm:w-auto"
            >
              <svg className="mr-2 inline-block h-5 w-5 align-text-bottom" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/></svg>
              Scrivi su WhatsApp
            </Button>
          </div>
        </Container>
      </section>

      {/* Form contatto */}
      <section className="py-16 sm:py-24">
        <Container className="max-w-xl">
          <div className="rounded-2xl border border-zinc-100 bg-white p-8 shadow-sm sm:p-10">
            <h2 className="text-2xl font-bold text-zinc-900">
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
          <h2 className="text-center text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
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
              <h3 className="mt-3 text-2xl font-bold text-zinc-900">Napoli</h3>
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
              <iframe
                title="Mappa studio Napoli"
                src="https://www.google.com/maps?q=Via+Mergellina+220,+Napoli&output=embed"
                width="100%"
                height="360"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="block w-full"
              />
            </div>
          </div>

          {/* Pozzuoli */}
          <div className="mt-20 grid items-center gap-8 md:grid-cols-2 md:gap-12">
            <div>
              <span className="inline-block rounded-full bg-teal-100 px-3 py-1 text-xs font-semibold text-teal-800">
                Sede 2
              </span>
              <h3 className="mt-3 text-2xl font-bold text-zinc-900">Pozzuoli</h3>
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
              <iframe
                title="Mappa studio Pozzuoli"
                src="https://www.google.com/maps?q=Via+Montenuovo+Licola+Patria+138,+Pozzuoli+(NA)&output=embed"
                width="100%"
                height="360"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="block w-full"
              />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
