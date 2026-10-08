import Link from "next/link";
import Container from "@/components/ui/Container";
import Eyebrow from "@/components/ui/Eyebrow";

export default function NotFound() {
  return (
    <section className="relative -mt-[calc(4.5rem+1px)] overflow-hidden pt-[calc(4.5rem+1px)]">
      <div
        className="pointer-events-none absolute inset-0 opacity-70"
        style={{
          background:
            "radial-gradient(55% 70% at 90% 10%, #c9d6cf 0%, transparent 60%), radial-gradient(35% 60% at 0% 100%, #e8c9b6 0%, transparent 60%)",
        }}
      />
      <Container className="relative py-28 lg:py-36">
        <Eyebrow>Pagina non trovata</Eyebrow>
        <h1 className="mt-6 max-w-3xl font-display text-[clamp(2.5rem,7vw,4.75rem)] font-light leading-[1] tracking-[-0.03em]">
          Questa pagina <em className="text-tufo">non esiste.</em>
        </h1>
        <p className="mt-8 max-w-xl text-lg leading-relaxed text-ink/85">
          Forse il link è vecchio o c&rsquo;è un errore di battitura. Puoi ripartire dalla home o
          vedere i trattamenti.
        </p>
        <div className="mt-10 flex flex-wrap gap-4">
          <Link href="/" className="rounded-full bg-ink px-7 py-4 text-paper transition hover:bg-tufo">
            Torna alla home
          </Link>
          <Link
            href="/trattamenti"
            className="rounded-full px-7 py-4 ring-1 ring-ink/25 transition hover:ring-ink"
          >
            Trattamenti
          </Link>
        </div>
      </Container>
    </section>
  );
}
