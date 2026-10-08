type CardProps = {
  children: React.ReactNode;
  className?: string;
};

export default function Card({ children, className = "" }: CardProps) {
  return (
    <div
      className={`rounded-[1.5rem] bg-paper p-6 ring-1 ring-line ${className}`}
    >
      {children}
    </div>
  );
}
