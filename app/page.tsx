import type { Metadata } from "next";
import Image from "next/image";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import SectionTitle from "@/components/ui/SectionTitle";
import Card from "@/components/ui/Card";
import { CONTACT_INFO, MIODOTTORE_URL } from "@/lib/constants";
import { RECENSIONI } from "@/lib/recensioni";

export const metadata: Metadata = {
  title: "Roberto Trupiano - Osteopata a Napoli e Pozzuoli",
  description:
    "Roberto Trupiano, osteopata a Napoli e Pozzuoli. Trattamenti personalizzati per cervicale, mal di schiena, postura e dolori articolari, con approccio orientato alla causa del problema.",
};

// --- Dati statici ---

const trustPoints = [
  "Sedi a Napoli e Pozzuoli",
  "Approccio personalizzato",
  "Visite solo su appuntamento",
];

const problemi = [
  {
    titolo: "Mal di schiena lombare e dorsale",
    descrizione:
      "Dolore, blocchi o rigidit\u00e0 nella zona lombare o dorsale che limitano i movimenti quotidiani. Individuiamo la causa per un sollievo duraturo.",
  },
  {
    titolo: "Dolore cervicale e tensioni al collo",
    descrizione:
      "Collo rigido, difficolt\u00e0 a girare la testa, dolore che si estende fino alle spalle. Spesso poche sedute fanno una differenza concreta.",
  },
  {
    titolo: "Problemi posturali",
    descrizione:
      "Posture scorrette che generano compensi, dolore cronico e affaticamento. Ti aiuto a riconoscere gli squilibri e a ripristinare l'equilibrio.",
  },
  {
    titolo: "Sciatalgia e dolore irradiato alla gamba",
    descrizione:
      "Dolore che dalla schiena scende lungo la gamba, rendendo difficile camminare o stare seduti. Lavoriamo per decomprimere e liberare il nervo.",
  },
  {
    titolo: "Dolori articolari",
    descrizione:
      "Spalle, ginocchia, anche: quando un'articolazione fa male il corpo compensa e il disagio si estende. Interveniamo sulla meccanica articolare.",
  },
  {
    titolo: "Cefalee ed emicranie",
    descrizione:
      "Mal di testa frequenti, spesso legati a tensioni cervicali o mandibolari. Il trattamento manuale mirato ne riduce intensit\u00e0 e frequenza.",
  },
];

const vantaggi = [
  {
    titolo: "Approccio personalizzato",
    descrizione:
      "Ogni paziente ha una storia diversa. Costruisco un percorso su misura basato sulle tue esigenze, senza protocolli generici.",
  },
  {
    titolo: "Attenzione alla causa, non solo al sintomo",
    descrizione:
      "Il dolore spesso nasce lontano da dove lo senti. Il mio obiettivo \u00e8 risalire all'origine per offrirti risultati stabili nel tempo.",
  },
  {
    titolo: "Esperienza e approccio professionale",
    descrizione:
      "Formazione continua, aggiornamento costante e tecniche manuali supportate dalle evidenze scientifiche pi\u00f9 recenti.",
  },
  {
    titolo: "Sedi comode tra Napoli e Pozzuoli",
    descrizione:
      "Due studi facilmente raggiungibili per offrirti flessibilit\u00e0 negli appuntamenti e comodit\u00e0 negli spostamenti.",
  },
];

// --- Componente pagina ---

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-b from-teal-50 to-white py-14 sm:py-20 lg:py-28">
        <Container>
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-20">
            {/* Testo */}
            <div className="max-w-xl">
              <h1 className="text-4xl font-bold leading-tight tracking-tight text-zinc-900 sm:text-5xl">
                Roberto Trupiano, osteopata a Napoli e Pozzuoli
              </h1>
              <p className="mt-5 text-lg leading-relaxed text-zinc-600 sm:mt-6">
                Trattamenti osteopatici personalizzati per mal di schiena,
                cervicale, postura e dolori articolari, pensati per aiutarti a
                comprendere e trattare la causa del problema.
              </p>
              <p className="mt-3 text-sm font-medium text-teal-700">
                Per adulti, sportivi e persone con lavoro sedentario.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:gap-4">
                <Button href="/contatti" className="w-full px-8 py-3.5 text-base sm:w-auto">
                  Contatta lo studio
                </Button>
                <Button href="/prima-visita" variant="secondary" className="w-full sm:w-auto">
                  Scopri la prima visita
                </Button>
              </div>
              {/* Trust points */}
              <ul className="mt-8 flex flex-col gap-2.5 border-t border-zinc-200 pt-6 sm:mt-10 sm:pt-8">
                {trustPoints.map((label) => (
                  <li key={label} className="flex items-center gap-2.5 text-zinc-600">
                    <svg className="h-4 w-4 shrink-0 text-teal-600" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm3.857-9.809a.75.75 0 0 0-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 1 0-1.06 1.061l2.5 2.5a.75.75 0 0 0 1.137-.089l4-5.5Z" clipRule="evenodd" />
                    </svg>
                    <span className="text-sm leading-snug">{label}</span>
                  </li>
                ))}
              </ul>
            </div>
            {/* Immagine */}
            <div className="relative mx-auto aspect-[2/3] w-full max-w-xs overflow-hidden rounded-2xl shadow-lg sm:max-w-sm lg:mx-0 lg:ml-auto">
              <Image
                src="/dott-trupiano.png"
                alt="Dott. Roberto Trupiano, osteopata"
                fill
                sizes="(max-width: 640px) 70vw, (max-width: 1024px) 50vw, 384px"
                className="object-cover"
                priority
              />
            </div>
          </div>
        </Container>
      </section>

      {/* 1 - Problemi trattati */}
      <section className="py-16 sm:py-24">
        <Container>
          <SectionTitle
            title="Disturbi che tratto pi&ugrave; spesso"
            subtitle="Se ti riconosci in uno di questi disturbi, l'osteopatia pu&ograve; aiutarti a individuare e trattare la causa del problema."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {problemi.map((p) => (
              <Card key={p.titolo} className="transition-shadow duration-200 hover:shadow-md">
                <h3 className="text-base font-semibold leading-snug text-zinc-900">
                  {p.titolo}
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-zinc-600">
                  {p.descrizione}
                </p>
              </Card>
            ))}
          </div>
          <p className="mt-10 text-center text-sm text-zinc-500">
            Non trovi il tuo problema? Contatta lo studio per un confronto.
          </p>
          <div className="mt-4 text-center">
            <Button href="/contatti" variant="secondary">
              Contatta lo studio
            </Button>
          </div>
        </Container>
      </section>

      {/* 2 - Perche scegliere il mio studio */}
      <section className="bg-zinc-50 py-16 sm:py-24">
        <Container>
          <SectionTitle
            title="Perch&eacute; scegliere il mio studio"
            subtitle="Il mio obiettivo è aiutarti a comprendere la causa del problema e costruire un percorso efficace e mirato."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {vantaggi.map((v) => (
              <div
                key={v.titolo}
                className="rounded-xl bg-white p-6 shadow-sm ring-1 ring-zinc-100 transition-shadow duration-200 hover:shadow-md"
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-teal-100 text-teal-700">
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold leading-snug text-zinc-900">{v.titolo}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-zinc-600">
                      {v.descrizione}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <p className="mt-10 text-center text-sm text-zinc-500">
            Hai un dubbio o vuoi capire se posso aiutarti?
          </p>
          <div className="mt-4 text-center">
            <Button href="/contatti" variant="secondary">
              Contatta lo studio
            </Button>
          </div>
        </Container>
      </section>

      {/* 3 - Teaser prima visita */}
      <section className="py-16 sm:py-24">
        <Container className="max-w-3xl text-center">
          <SectionTitle
            title="La prima visita"
            subtitle="Ascolto, valutazione, trattamento e indicazioni personalizzate: un incontro di 45-60 minuti per capire il tuo problema e iniziare a risolverlo."
          />
          <div className="mt-8">
            <Button href="/prima-visita" variant="secondary">
              Scopri come funziona
            </Button>
          </div>
        </Container>
      </section>

      {/* 4 - Recensioni */}
      <section className="bg-zinc-50 py-16 sm:py-24">
        <Container>
          <SectionTitle
            title="Cosa dicono i pazienti"
            subtitle="Alcune delle recensioni lasciate dai pazienti su MioDottore."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {RECENSIONI.map((r) => (
              <Card key={r.nome} className="flex flex-col justify-between">
                <p className="text-sm leading-relaxed text-zinc-700">
                  &ldquo;{r.testo}&rdquo;
                </p>
                <div className="mt-4 border-t border-zinc-100 pt-3">
                  <p className="text-sm font-semibold text-zinc-900">{r.nome}</p>
                  <p className="text-xs text-zinc-500">
                    {r.visita} &middot; {r.data}
                  </p>
                </div>
              </Card>
            ))}
          </div>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Button href="/recensioni" variant="secondary">
              Leggi tutte le recensioni
            </Button>
            <a
              href={MIODOTTORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-semibold text-teal-700 underline underline-offset-2 hover:text-teal-800"
            >
              Vedi il profilo su MioDottore
            </a>
          </div>
        </Container>
      </section>

      {/* 5 - Dove ricevo */}
      <section className="py-16 sm:py-24">
        <Container>
          <SectionTitle
            title="Dove ricevo"
            subtitle="Due sedi per essere più vicino a te."
          />
          <div className="mt-12 grid gap-8 sm:grid-cols-2">
            <Card>
              <h3 className="text-base font-semibold text-zinc-900">
                Studio Napoli
              </h3>
              <p className="mt-2 text-sm text-zinc-600">
                {CONTACT_INFO.address}
              </p>
              <p className="mt-1 text-sm text-zinc-600">
                Tel: {CONTACT_INFO.phone}
              </p>
            </Card>
            <Card>
              <h3 className="text-base font-semibold text-zinc-900">
                Studio Pozzuoli
              </h3>
              <p className="mt-2 text-sm text-zinc-600">
                {CONTACT_INFO.addressPozzuoli}
              </p>
              <p className="mt-1 text-sm text-zinc-600">
                Tel: {CONTACT_INFO.phone}
              </p>
            </Card>
          </div>
          <p className="mt-8 text-center text-sm text-zinc-500">
            Email: {CONTACT_INFO.email}
          </p>
        </Container>
      </section>

      {/* 6 - CTA finale */}
      <section className="bg-teal-700 py-16 sm:py-20">
        <Container className="max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Pronto a prenderti cura di te?
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-teal-100">
            Fissa un primo appuntamento nello studio di Napoli o Pozzuoli.
            Ti rispondo personalmente.
          </p>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Button
              href="/contatti"
              variant="secondary"
              className="w-full bg-transparent px-8 py-3.5 text-base text-white ring-white/40 hover:bg-white/10 hover:ring-white/60 sm:w-auto"
            >
              Contatta lo studio
            </Button>
            <Button
              href={CONTACT_INFO.whatsapp}
              variant="secondary"
              className="w-full bg-transparent px-8 py-3.5 text-base text-white ring-white/40 hover:bg-white/10 hover:ring-white/60 sm:w-auto"
            >
              <svg className="mr-2 inline-block h-5 w-5 align-text-bottom" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/></svg>
              Scrivi su WhatsApp
            </Button>
            <Button
              href={`tel:${CONTACT_INFO.phone.replace(/\s/g, "")}`}
              variant="secondary"
              className="w-full bg-transparent px-8 py-3.5 text-base text-white ring-white/40 hover:bg-white/10 hover:ring-white/60 sm:w-auto"
            >
              Chiama ora
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}