import Container from "@/components/ui/Container";

type LegalPageProps = {
  title: string;
  updated: string;
  children: React.ReactNode;
};

export default function LegalPage({ title, updated, children }: LegalPageProps) {
  return (
    <section className="py-16 sm:py-24">
      <Container className="max-w-3xl">
        <h1 className="text-4xl font-bold tracking-tight text-zinc-900 sm:text-5xl">
          {title}
        </h1>
        <p className="mt-4 text-sm text-zinc-400">Ultimo aggiornamento: {updated}</p>
        <div className="mt-10 space-y-6 text-base leading-relaxed text-zinc-600 [&_a]:font-medium [&_a]:text-teal-700 [&_a]:underline [&_a]:underline-offset-2 [&_h2]:mt-10 [&_h2]:text-xl [&_h2]:font-bold [&_h2]:text-zinc-900 [&_li]:ml-5 [&_li]:list-disc [&_ul]:space-y-2">
          {children}
        </div>
      </Container>
    </section>
  );
}
