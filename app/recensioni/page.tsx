import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
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
      <section className="bg-gradient-to-b from-teal-50 to-white py-16 sm:py-24">
        <Container className="max-w-3xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-900 sm:text-5xl">
            Recensioni
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-zinc-600">
            Le esperienze di chi si &egrave; affidato al Dott. Trupiano.
            Su MioDottore trovi {NUMERO_RECENSIONI_MIODOTTORE} recensioni
            lasciate dai pazienti dopo la visita.
          </p>
        </Container>
      </section>

      <section className="py-16 sm:py-24">
        <Container>
          <div className="grid gap-6 sm:grid-cols-2">
            {RECENSIONI.map((r) => (
              <Card key={r.nome} className="flex flex-col justify-between">
                <p className="text-base leading-relaxed text-zinc-700">
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
          <div className="mt-12 text-center">
            <Button href={MIODOTTORE_URL} variant="primary" className="px-8 py-3.5 text-base">
              Leggi tutte le recensioni su MioDottore
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
