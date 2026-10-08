import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Triangolo from "@/components/home/Triangolo";
import Disturbi from "@/components/home/Disturbi";
import { CONTACT_INFO, MIODOTTORE_URL, WHATSAPP_URL } from "@/lib/constants";
import WhatsAppIcon from "@/components/ui/WhatsAppIcon";
import { RECENSIONI, NUMERO_RECENSIONI_MIODOTTORE } from "@/lib/recensioni";
import { FORMAZIONE } from "@/lib/formazione";

export const metadata: Metadata = {
  title: "Roberto Trupiano - Osteopata a Napoli e Pozzuoli",
  description:
    "Roberto Trupiano, osteopata a Napoli e Pozzuoli. Trattamenti personalizzati per cervicale, mal di schiena, postura e dolori articolari, con approccio orientato alla causa del problema.",
};

const phoneShort = CONTACT_INFO.phone.replace(/^\+39\s*/, "");
// Anni dal diploma D.O. (2013), ricalcolati a ogni build.
const anniPratica = new Date().getFullYear() - 2013;


const studi = [
  { citta: "Napoli", indirizzo: CONTACT_INFO.address },
  { citta: "Pozzuoli", indirizzo: CONTACT_INFO.addressPozzuoli },
];

function Label({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3 text-[13px] sm:text-[11.5px] font-medium uppercase tracking-[0.18em] text-stone">
      <span className="h-px w-8 bg-tufo" />
      {children}
    </div>
  );
}

export default function HomePage() {
  return (
    <>
      {/* HERO: il margine negativo fa scorrere lo sfondo sotto l'header trasparente */}
      <section className="relative -mt-[calc(4.5rem+1px)] overflow-hidden pt-[calc(4.5rem+1px)]">
        <div
          className="pointer-events-none absolute inset-0 opacity-70"
          style={{
            background:
              "radial-gradient(60% 60% at 85% 20%, #c9d6cf 0%, transparent 60%), radial-gradient(40% 50% at 10% 90%, #e8c9b6 0%, transparent 60%)",
          }}
        />
        <div className="relative mx-auto grid max-w-[1320px] gap-12 px-6 pb-20 pt-16 lg:grid-cols-12 lg:items-center lg:px-10 lg:pt-20">
          <div className="lg:col-span-7">
            <div className="flex items-center gap-3 text-[13px] sm:text-[11.5px] font-medium uppercase tracking-[0.18em] text-stone">
              <span className="h-px w-8 bg-tufo" />
              Osteopata D.O. · Napoli &amp; Pozzuoli
            </div>
            <h1 className="mt-6 font-display text-[clamp(2.75rem,9vw,4.5rem)] font-light leading-[0.98] tracking-[-0.03em] lg:text-[clamp(2.75rem,5.2vw,5.25rem)]">
              Perché limitarsi
              <br />
              al sintomo, quando
              <br />
              <em className="text-tufo">
                possiamo <br className="hidden sm:block" />
                trattare la causa?
              </em>
            </h1>
            <p className="mt-8 max-w-md text-lg leading-relaxed text-ink/85">
              Con le mani, senza farmaci, risalendo all&apos;origine del disturbo. Per pazienti di
              ogni età, anche in gravidanza, con un&apos;attenzione particolare a mandibola,
              cervicale e postura.
            </p>
            <dl className="mt-8 grid max-w-lg grid-cols-2 border-t border-ink/15 pt-3">
              <div>
                <dt className="text-[13px] sm:text-[11.5px] font-medium uppercase tracking-[0.18em] text-stone">Telefono</dt>
                <dd className="mt-0.5">
                  <span className="font-display text-xl">{phoneShort}</span>
                </dd>
              </div>
              <div className="border-l border-ink/15 pl-6">
                <dt className="text-[13px] sm:text-[11.5px] font-medium uppercase tracking-[0.18em] text-stone">Studi</dt>
                <dd className="mt-0.5">
                  <a
                    href="#contatti"
                    className="font-display text-xl underline decoration-transparent underline-offset-4 transition hover:text-tufo hover:decoration-tufo"
                  >
                    Napoli · Pozzuoli
                  </a>
                </dd>
              </div>
            </dl>
          </div>
          <div className="relative lg:col-span-5">
            <figure className="overflow-hidden rounded-[1.75rem] bg-sea">
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image
                  src="/trupiano-ritratto-hd.png"
                  alt="Ritratto del Dott. Roberto Trupiano, osteopata D.O."
                  fill
                  priority
                  sizes="(min-width: 1024px) 40vw, 100vw"
                  className="scale-[1.03] object-cover object-[100%_30%]"
                />
              </div>
              <figcaption className="flex items-center justify-between px-5 py-3 text-[11px] font-medium uppercase tracking-[0.18em] text-paper/70">
                <span>Dott. Roberto Trupiano</span>
                <span>Osteopata D.O. · R.O.I.</span>
              </figcaption>
            </figure>
            <div className="absolute -left-6 bottom-20 rounded-2xl bg-paper p-5 shadow-[0_20px_50px_-20px_rgba(19,32,30,0.35)]">
              <div className="font-display text-4xl">{anniPratica}</div>
              <div className="text-[11px] font-medium uppercase tracking-widest text-stone">anni di pratica clinica</div>
            </div>
          </div>
        </div>
        <div className="border-y border-line">
          <div className="mx-auto grid max-w-[1320px] grid-cols-2 divide-x divide-line px-6 md:grid-cols-4 lg:px-10">
            {[
              ["D.O.", "A.T. Still Academy"],
              ["+100", "corsi post-graduate"],
              ["R.O.I.", "Registro Osteopati"],
              ["2", "studi in Campania"],
            ].map(([a, b]) => (
              <div key={b} className="px-4 py-6 first:pl-0">
                <div className="font-display text-2xl">{a}</div>
                <div className="text-[13px] sm:text-[11.5px] font-medium uppercase tracking-wider text-stone">{b}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Triangolo />

      <Disturbi />

      {/* CHI SONO */}
      <section id="chi" className="mx-auto max-w-[1320px] px-6 py-28 lg:px-10">
        <div className="grid gap-16 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <div className="relative aspect-[3/4] overflow-hidden rounded-3xl bg-[#dfe6e1]">
              <Image
                src="/trupiano-studio.webp"
                alt="Il Dott. Roberto Trupiano durante un trattamento osteopatico della schiena"
                fill
                sizes="(min-width: 1024px) 30vw, 100vw"
                className="object-cover object-[62%_top] pt-4"
              />
            </div>
          </div>
          <div className="lg:col-span-8">
            <Label>Chi sono</Label>
            <p className="mt-6 font-display text-3xl font-light leading-snug md:text-4xl">
              Dott. Roberto Trupiano, osteopata D.O. Dalle basi biomeccaniche dell&apos;I.S.E.F. a
              sei anni di formazione all&apos;A.T. Still Academy, fino a{" "}
              <em className="text-tufo">oltre cento corsi</em> tra cranio-sacrale, viscerale e
              nutrizione funzionale.
            </p>
            <ul className="mt-12 grid sm:grid-cols-2 sm:gap-x-10">
              {FORMAZIONE.map(([k, v]) => (
                <li key={v} className="flex gap-5 border-t border-line py-4">
                  <span className="w-20 shrink-0 text-xs font-medium text-tufo">{k}</span>
                  <span className="text-[15px] text-ink/85">{v}</span>
                </li>
              ))}
            </ul>
            <Link
              href="/chi-sono"
              className="mt-8 inline-block text-xs font-medium uppercase tracking-widest text-tufo hover:underline"
            >
              Il percorso completo →
            </Link>
          </div>
        </div>
      </section>

      {/* RECENSIONI */}
      <section className="mx-auto max-w-[1320px] px-6 py-28 lg:px-10">
        <Label>Dicono di me</Label>
        <p className="mt-6 font-display text-3xl font-light md:text-4xl">
          <span className="text-tufo">{NUMERO_RECENSIONI_MIODOTTORE}</span> recensioni di pazienti su MioDottore
        </p>
        <div className="mt-10 grid gap-10 md:grid-cols-3">
          {RECENSIONI.slice(0, 3).map((r) => (
            <figure key={r.nome + r.data} className="border-t border-line pt-6">
              <blockquote className="font-display text-2xl font-light leading-snug md:text-3xl">
                “{r.testo}”
              </blockquote>
              <figcaption className="mt-5 text-[13px] sm:text-[11.5px] font-medium uppercase tracking-[0.18em] text-stone">
                {r.nome} · {r.data}
              </figcaption>
            </figure>
          ))}
        </div>
        <div className="mt-12 flex flex-wrap gap-8">
          <Link href="/recensioni" className="text-xs font-medium uppercase tracking-widest text-tufo hover:underline">
            Tutte le recensioni →
          </Link>
          <a
            href={MIODOTTORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-medium uppercase tracking-widest text-stone hover:text-tufo"
          >
            Su MioDottore ↗
          </a>
        </div>
      </section>

      {/* M.E.S.O. ACADEMY: riga per i colleghi, non per i pazienti */}
      <section id="eventi" className="mx-auto max-w-[1320px] px-6 pb-24 lg:px-10">
        <div className="flex flex-wrap items-center justify-between gap-4 border-t border-line pt-8">
          <p className="text-stone">
            Sei un professionista della salute? Corsi e seminari con la{" "}
            <span className="text-ink">M.E.S.O. Academy</span>.
          </p>
          <Link href="/meso-academy" className="text-xs font-medium uppercase tracking-widest text-tufo hover:underline">
            Scopri l&apos;Academy →
          </Link>
        </div>
      </section>

      {/* CONTATTI */}
      <section id="contatti" className="px-4 pb-4 lg:px-6 lg:pb-6">
        <div className="relative overflow-hidden rounded-[2.5rem] bg-tufo px-6 py-20 text-paper lg:px-16">
          <div className="grid gap-14 lg:grid-cols-12">
            <div className="lg:col-span-6">
              <div className="flex items-center gap-3 text-[13px] sm:text-[11.5px] font-medium uppercase tracking-[0.18em] text-paper/70">
                <span className="h-px w-8 bg-paper/40" />
                Contatti
              </div>
              <h2 className="mt-6 font-display text-6xl font-light leading-[0.95] tracking-tight md:text-7xl">
                Parliamone
                <br />
                <em>su WhatsApp.</em>
              </h2>
              <div className="mt-10 flex flex-wrap gap-4">
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 rounded-full bg-paper px-7 py-4 text-ink transition hover:bg-ink hover:text-paper"
                >
                  <WhatsAppIcon />
                  Scrivimi su WhatsApp
                </a>
              </div>
              <p className="mt-6 text-paper/80">Tel. {CONTACT_INFO.phone}</p>
              <a href={`mailto:${CONTACT_INFO.email}`} className="mt-2 block text-paper/80 hover:text-paper">
                {CONTACT_INFO.email}
              </a>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:col-span-6">
              {studi.map(({ citta, indirizzo }) => (
                <Link
                  key={citta}
                  href="/contatti"
                  className="group flex flex-col justify-between rounded-3xl bg-paper/10 p-7 transition hover:bg-paper/20"
                >
                  <span className="text-[13px] sm:text-[11.5px] font-medium uppercase tracking-widest text-paper/70">Studio</span>
                  <span className="mt-20">
                    <span className="block font-display text-4xl">{citta}</span>
                    <span className="mt-1 block text-paper/80">{indirizzo}</span>
                    <span className="mt-4 block text-sm opacity-60 transition group-hover:opacity-100">
                      Mappa e indicazioni →
                    </span>
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
