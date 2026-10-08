import Container from "@/components/ui/Container";
import Eyebrow from "@/components/ui/Eyebrow";

type LegalPageProps = {
  title: string;
  updated: string;
  children: React.ReactNode;
};

export default function LegalPage({ title, updated, children }: LegalPageProps) {
  return (
    <Container as="section" className="grid gap-12 py-20 lg:grid-cols-12 lg:py-28">
      <div className="lg:col-span-4">
        <Eyebrow>Note legali</Eyebrow>
        <h1 className="mt-6 font-display text-5xl font-light leading-[1] tracking-tight">{title}</h1>
        <p className="mt-6 text-sm text-stone">Ultimo aggiornamento: {updated}</p>
      </div>
      <div className="max-w-2xl space-y-6 leading-relaxed text-ink/85 lg:col-span-8 [&_a]:text-tufo [&_a]:underline [&_a]:underline-offset-2 [&_h2]:!mt-12 [&_h2]:border-t [&_h2]:border-line [&_h2]:pt-8 [&_h2]:font-display [&_h2]:text-2xl [&_h2]:font-light [&_h2]:text-ink [&_li]:ml-5 [&_li]:list-disc [&_strong]:font-medium [&_strong]:text-ink [&_ul]:space-y-2">
        {children}
      </div>
    </Container>
  );
}
