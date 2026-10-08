type SectionTitleProps = {
  title: string;
  subtitle?: string;
  centered?: boolean;
};

export default function SectionTitle({
  title,
  subtitle,
  centered = true,
}: SectionTitleProps) {
  return (
    <div className={centered ? "text-center" : ""}>
      <h2 className="font-display text-4xl font-light leading-[1.05] tracking-tight text-ink sm:text-5xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-lg leading-relaxed text-zinc-600">
          {subtitle}
        </p>
      )}
    </div>
  );
}
