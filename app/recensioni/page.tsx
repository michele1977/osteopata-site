import type { Metadata } from "next";
import Container from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Recensioni | Dott. Trupiano Osteopata",
  description:
    "Leggi le recensioni dei pazienti del Dott. Trupiano, osteopata a Napoli e Pozzuoli.",
};

export default function RecensioniPage() {
  return (
    <section className="py-16 sm:py-24">
      <Container className="max-w-3xl">
        <h1 className="text-4xl font-bold tracking-tight text-zinc-900 sm:text-5xl">
          Recensioni
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-zinc-600">
          Le esperienze di chi si è affidato al Dott. Trupiano. Contenuti in
          arrivo.
        </p>
      </Container>
    </section>
  );
}
