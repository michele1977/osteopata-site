type EyebrowProps = {
  children: React.ReactNode;
  dark?: boolean;
};

// Etichetta di sezione in maiuscoletto, come nella home.
export default function Eyebrow({ children, dark = false }: EyebrowProps) {
  return (
    <div
      className={`flex items-center gap-3 text-[13px] sm:text-[11.5px] font-medium uppercase tracking-[0.18em] ${
        dark ? "text-paper/75" : "text-stone"
      }`}
    >
      <span className="h-px w-8 bg-tufo" />
      {children}
    </div>
  );
}
