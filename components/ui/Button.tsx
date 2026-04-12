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
    "inline-flex items-center justify-center rounded-lg px-6 py-3 text-sm font-semibold transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2";
  const variants = {
    primary:
      "bg-teal-700 text-white shadow-md hover:bg-teal-800 hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 focus-visible:outline-teal-700",
    secondary:
      "bg-white text-teal-700 ring-1 ring-teal-700 hover:bg-teal-50 hover:ring-teal-800 hover:-translate-y-0.5 active:translate-y-0 focus-visible:outline-teal-700",
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
