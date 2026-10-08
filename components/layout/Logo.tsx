// Ridisegno del marchio originale: la T formata da arco, dente e colonna vertebrale.
const vertebrae = [
  { y: 25, w: 13, x: 0 },
  { y: 31, w: 12, x: 0.4 },
  { y: 37, w: 11, x: 0.9 },
  { y: 43, w: 9.5, x: 1.4 },
  { y: 49, w: 8, x: 2 },
  { y: 55, w: 6, x: 2.8 },
]

export function LogoMark({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 64" className={className} fill="currentColor" aria-hidden>
      {/* arco superiore della T */}
      <path d="M2.5 17.5C12 9.2 27.5 4.6 45.5 3.2c-13.4 3.9-26 8.4-39.4 16.6-2.1 1.3-5.2-.7-3.6-2.3Z" />
      {/* dente */}
      <path d="M18.6 12.6c0-2.3 2.2-3.3 4-2.4l1.4.7 1.4-.7c1.8-.9 4 .1 4 2.4 0 2.4-.9 3.6-1.4 6.2-.3 1.7-1.9 1.8-2.3.2l-.9-3.1c-.2-.7-1.3-.7-1.5 0l-.9 3.1c-.4 1.6-2 1.5-2.3-.2-.6-2.6-1.5-3.8-1.5-6.2Z" />
      {/* colonna */}
      {vertebrae.map(({ y, w, x }) => (
        <rect key={y} x={24 + x - w / 2} y={y} width={w} height={4} rx={2} />
      ))}
      <path d="M26.2 61c1.6 0 3.2-.6 3.9-1.9.3 2.4-1.5 4.4-4.2 4.4-.9 0-1.2-2.5.3-2.5Z" />
    </svg>
  )
}

export default function Logo({ className = '' }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-3 ${className}`}>
      <LogoMark className="h-10 w-auto text-teal" />
      <span className="flex flex-col leading-none">
        <span className="font-display text-[1.35rem] tracking-tight">Roberto Trupiano</span>
        <span className="mt-1 font-mono font-medium text-[11px] uppercase tracking-[0.28em] text-stone">Osteopata D.O.</span>
      </span>
    </span>
  )
}
