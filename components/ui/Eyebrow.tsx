type EyebrowProps = {
  n?: string;
  children: React.ReactNode;
  dark?: boolean;
};

// Etichetta di sezione in maiuscoletto, come nella home.
export default function Eyebrow({ n, children, dark = false }: EyebrowProps) {
  return (
    <div
      className={`flex items-center gap-3 text-[11.5px] font-medium uppercase tracking-[0.18em] ${
        dark ? "text-paper/75" : "text-stone"
      }`}
    >
      {n && <span className="text-tufo">{n}</span>}
      <span className={`h-px w-8 ${n ? (dark ? "bg-paper/30" : "bg-ink/30") : "bg-tufo"}`} />
      {children}
    </div>
  );
}
