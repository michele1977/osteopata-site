import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import PageHero from "@/components/ui/PageHero";
import CallBand from "@/components/ui/CallBand";
import { MIODOTTORE_URL } from "@/lib/constants";
import { RECENSIONI, NUMERO_RECENSIONI_MIODOTTORE } from "@/lib/recensioni";

export const metadata: Metadata = {
  title: "Recensioni",
  description:
    "Leggi le recensioni dei pazienti del Dott. Trupiano, osteopata a Napoli e Pozzuoli.",
};

export default function RecensioniPage() {
  return (
    <>
      <PageHero
        eyebrow="Recensioni"
        title={
          <>
            Dicono
            <br />
            <em>di me.</em>
          </>
        }
        intro={
          <p>
            Le esperienze di chi si &egrave; affidato al Dott. Trupiano. Su MioDottore trovi{" "}
            {NUMERO_RECENSIONI_MIODOTTORE} recensioni lasciate dai pazienti dopo la visita.
          </p>
        }
      />

      <Container as="section" className="py-24 lg:py-28">
        <div className="grid gap-x-16 gap-y-4 md:grid-cols-2">
          {RECENSIONI.map((r) => (
            <figure key={r.nome + r.data} className="border-t border-line py-10">
              <blockquote className="font-display text-3xl font-light leading-snug md:text-4xl">
                &ldquo;{r.testo}&rdquo;
              </blockquote>
              <figcaption className="mt-6 text-[13px] sm:text-[11.5px] font-medium uppercase tracking-[0.18em] text-stone">
                {[r.nome, r.visita, r.data].filter(Boolean).join(" · ")}
              </figcaption>
            </figure>
          ))}
        </div>
        <div className="mt-10 border-t border-line pt-10">
          <a
            href={MIODOTTORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-full bg-ink px-7 py-4 text-paper transition hover:bg-tufo"
          >
            Tutte le recensioni su MioDottore ↗
          </a>
        </div>
      </Container>

      <CallBand />
    </>
  );
}
