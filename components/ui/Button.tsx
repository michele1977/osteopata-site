import Link from "next/link";
import { twMerge } from "tailwind-merge";

type ButtonProps = {
  children: React.ReactNode;
  href?: string;
  variant?: "primary" | "secondary";
  className?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button({
  children,
  href,
  variant = "primary",
  className = "",
  ...props
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-medium transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2";
  const variants = {
    primary:
      "bg-ink text-paper hover:bg-tufo hover:-translate-y-0.5 active:translate-y-0 focus-visible:outline-teal-700",
    secondary:
      "bg-transparent text-ink ring-1 ring-ink/25 hover:ring-ink hover:-translate-y-0.5 active:translate-y-0 focus-visible:outline-teal-700",
  };

  const classes = twMerge(base, variants[variant], className);

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
