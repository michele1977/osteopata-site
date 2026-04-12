import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { CONTACT_INFO } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Chi sono \u2013 Osteopata a Napoli e Pozzuoli | Roberto Trupiano",
  description:
    "Roberto Trupiano, osteopata a Napoli e Pozzuoli. Trattamenti personalizzati per mal di schiena, cervicale, postura e dolori articolari.",
};

export default function ChiSonoPage() {
  return (
    <>
      {/* Hero + Introduzione con foto - 2 colonne */}
      <section className="bg-gradient-to-b from-teal-50 to-white py-16 sm:py-24">
        <Container>
          <div className="grid items-center gap-10 md:grid-cols-2 md:gap-14">
            <div>
              <h1 className="text-4xl font-bold tracking-tight text-zinc-900 sm:text-5xl">
                Chi sono
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-zinc-600">
                Sono Roberto Trupiano. Da anni dedico il mio lavoro
                all&rsquo;osteopatia, con la convinzione che ascoltare
                il corpo sia il primo passo per stare meglio.
              </p>
              <p className="mt-4 text-base leading-relaxed text-zinc-500">
                Il mio studio &egrave; un luogo dove ogni persona viene
                accolta senza fretta. Non credo nei trattamenti standard:
                preferisco prendermi il tempo necessario per capire
                davvero cosa ti succede.
              </p>
              <p className="mt-4 text-base leading-relaxed text-zinc-500">
                Ho scelto di lavorare solo su appuntamento, a Napoli
                e Pozzuoli, per dedicarti tutta l&rsquo;attenzione
                che meriti.
              </p>
            </div>
            <div className="relative mx-auto w-full max-w-sm md:mx-0">
              <div className="overflow-hidden rounded-2xl shadow-lg">
                <Image
                  src="/Trupiano-ChiSono.jpg"
                  alt="Roberto Trupiano, osteopata a Napoli"
                  width={512}
                  height={768}
                  className="h-auto w-full object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Il mio approccio - Card layout */}
      <section className="py-16 sm:py-24">
        <Container>
          <h2 className="text-center text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
            Il mio approccio
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-base leading-relaxed text-zinc-500">
            Non applico protocolli standard: ogni incontro riflette
            la persona che ho davanti.
          </p>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: (
                  <svg className="h-7 w-7 text-teal-600" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                  </svg>
                ),
                title: "Ricerca della causa",
                text: "Credo che il corpo vada letto nel suo insieme. Ogni dolore ha una storia da ascoltare.",
              },
              {
                icon: (
                  <svg className="h-7 w-7 text-teal-600" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                  </svg>
                ),
                title: "Ascolto attivo",
                text: "Dedico tempo a conoscerti, perch\u00e9 dietro ogni sintomo c\u2019\u00e8 una persona con la propria storia.",
              },
              {
                icon: (
                  <svg className="h-7 w-7 text-teal-600" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                ),
                title: "Piano personalizzato",
                text: "Nessun protocollo uguale per tutti. Il tuo percorso riflette la tua situazione reale.",
              },
              {
                icon: (
                  <svg className="h-7 w-7 text-teal-600" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
                  </svg>
                ),
                title: "Risultati misurabili",
                text: "Confrontiamo insieme i progressi per adattare il lavoro in modo trasparente.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-xl border border-zinc-100 bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-teal-50">
                  {item.icon}
                </div>
                <h3 className="font-semibold text-zinc-900">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-500">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Formazione ed esperienza - blocchi visivi separati */}
      <section className="bg-zinc-50 py-16 sm:py-24">
        <Container>
          <h2 className="text-center text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
            Formazione ed esperienza
          </h2>

          <div className="mt-14 grid gap-10 md:grid-cols-2">
            {/* Formazione */}
            <div className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-zinc-100">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-lg bg-teal-50">
                <svg className="h-7 w-7 text-teal-600" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-zinc-900">Formazione</h3>
              <p className="mt-3 text-base leading-relaxed text-zinc-500">
                Percorso di studi quinquennale in osteopatia, con
                approfondimenti in ambito posturale e kinesiologico.
              </p>
              <p className="mt-3 text-base leading-relaxed text-zinc-500">
                Formazione continua nelle tecniche manuali avanzate
                e nella gestione del dolore cronico.
              </p>
            </div>

            {/* Esperienza */}
            <div className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-zinc-100">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-lg bg-teal-50">
                <svg className="h-7 w-7 text-teal-600" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-zinc-900">Esperienza clinica</h3>
              <p className="mt-3 text-base leading-relaxed text-zinc-500">
                Anni di pratica a Napoli e Pozzuoli con pazienti di
                ogni fascia d&rsquo;et&agrave; e condizione.
              </p>
              <p className="mt-3 text-base leading-relaxed text-zinc-500">
                Un metodo di lavoro orientato ai risultati concreti,
                con attenzione alla persona e ai suoi bisogni.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Attivit&agrave; formativa - 2 colonne con logo */}
      <section className="py-16 sm:py-24">
        <Container>
          <div className="grid items-center gap-10 md:grid-cols-2 md:gap-14">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
                Attivit&agrave; formativa
              </h2>
              <p className="mt-5 text-base leading-relaxed text-zinc-500">
                Oltre all&rsquo;attivit&agrave; clinica, sono presidente
                della{" "}
                <strong className="text-zinc-900">M.E.S.O Academy</strong>:
                un&rsquo;associazione culturale dedicata alla formazione
                avanzata in ambito osteopatico.
              </p>
              <p className="mt-4 text-base leading-relaxed text-zinc-500">
                L&rsquo;academy organizza corsi post-graduate per
                professionisti del settore nelle terapie manuali.
              </p>
              <Link
                href="/meso-academy"
                className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-teal-700 hover:text-teal-800"
              >
                Scopri la M.E.S.O Academy
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </Link>
            </div>
            <div className="flex items-center justify-center">
              <Image
                src="/meso-logo.png"
                alt="Logo M.E.S.O Academy"
                width={280}
                height={280}
                className="h-auto w-40 object-contain sm:w-52 md:w-64"
              />
            </div>
          </div>
        </Container>
      </section>

      {/* Per chi &egrave; indicato */}
      <section className="bg-zinc-50 py-16 sm:py-24">
        <Container>
          <h2 className="text-center text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
            Per chi &egrave; indicato
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-base leading-relaxed text-zinc-500">
             L&rsquo;osteopatia &egrave; adatta a diverse esigenze e
             fasce d&rsquo;et&agrave;.
          </p>
          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            {[
              {
                emoji: "\uD83E\uDDD1",
                title: "Adulti",
                text: "Che tu abbia un problema acuto o un disagio che convive con te da tempo, troverai uno spazio dove essere ascoltato.",
              },
              {
                emoji: "\uD83C\uDFC3",
                title: "Sportivi",
                text: "Lavoriamo insieme sul tuo corpo per mantenerlo in equilibrio, prevenire gli infortuni e sostenere le tue prestazioni.",
              },
              {
                emoji: "\uD83D\uDCBB",
                title: "Lavoratori sedentari",
                text: "Ore alla scrivania lasciano il segno. Ti aiuto a capire come il corpo reagisce e a ritrovare il benessere quotidiano.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-xl border border-zinc-100 bg-white p-6 text-center shadow-sm"
              >
                <span className="text-3xl">{item.emoji}</span>
                <h3 className="mt-3 font-semibold text-zinc-900">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-500">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA finale */}
      <section className="bg-teal-800 py-16 sm:py-24">
        <Container className="max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Vuoi conoscermi di persona?
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-teal-100">
            Prenota un primo incontro per raccontarmi il tuo problema.
            Ti dedico tutto il tempo necessario.
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
          </div>
        </Container>
      </section>
    </>
  );
}
