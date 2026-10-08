import Eyebrow from "@/components/ui/Eyebrow";
import Container from "@/components/ui/Container";

type PageHeroProps = {
  eyebrow: string;
  title: React.ReactNode;
  intro?: React.ReactNode;
  aside?: React.ReactNode;
};

// Testata delle pagine interne: stesso linguaggio dell'hero della home.
// Il margine negativo fa scorrere lo sfondo sotto l'header trasparente.
export default function PageHero({ eyebrow, title, intro, aside }: PageHeroProps) {
  return (
    <section className="relative -mt-[calc(4.5rem+1px)] overflow-hidden border-b border-line pt-[calc(4.5rem+1px)]">
      <div
        className="pointer-events-none absolute inset-0 opacity-70"
        style={{
          background:
            "radial-gradient(55% 70% at 90% 10%, #c9d6cf 0%, transparent 60%), radial-gradient(35% 60% at 0% 100%, #e8c9b6 0%, transparent 60%)",
        }}
      />
      <Container className="relative grid gap-12 pb-20 pt-16 lg:grid-cols-12 lg:items-end lg:pt-24">
        <div className={aside ? "lg:col-span-7" : "lg:col-span-9"}>
          <Eyebrow>{eyebrow}</Eyebrow>
          <h1 className="mt-6 font-display text-[clamp(2.5rem,7vw,4.75rem)] font-light leading-[1] tracking-[-0.03em] [&_em]:text-tufo">
            {title}
          </h1>
          {intro && (
            <div className="mt-8 max-w-xl text-lg leading-relaxed text-ink/85">{intro}</div>
          )}
        </div>
        {aside && <div className="lg:col-span-5">{aside}</div>}
      </Container>
    </section>
  );
}
