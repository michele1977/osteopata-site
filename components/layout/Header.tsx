"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { CONTACT_INFO, NAV_LINKS } from "@/lib/constants";
import Logo from "@/components/layout/Logo";

const tel = `tel:${CONTACT_INFO.phone.replace(/\s/g, "")}`;
import Container from "@/components/ui/Container";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-bone/85 backdrop-blur-md">
      <Container className="flex h-[4.5rem] items-center gap-10">
        {/* Logo */}
        <Link href="/" className="shrink-0 transition-opacity duration-200 hover:opacity-80">
          <Logo />
        </Link>

        {/* Desktop nav + CTA */}
        <div className="hidden flex-1 items-center justify-end gap-8 md:flex">
          <nav className="flex gap-6" aria-label="Navigazione principale">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-ink ${
                  pathname === link.href
                    ? "text-ink underline decoration-tufo decoration-2 underline-offset-[6px]"
                    : "text-stone"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <a
            href={tel}
            className="rounded-full bg-ink px-5 py-2.5 text-sm font-medium text-paper transition-colors hover:bg-tufo"
          >
            Chiama
          </a>
        </div>

        {/* Mobile burger */}
        <button
          type="button"
          className="ml-auto p-2 text-zinc-600 md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-expanded={menuOpen}
          aria-label="Apri menu di navigazione"
        >
          <svg
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
          >
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M3.75 17.25h16.5" />
            )}
          </svg>
        </button>
      </Container>

      {/* Mobile menu */}
      {menuOpen && (
        <nav className="border-t border-line bg-bone md:hidden" aria-label="Navigazione mobile">
          <Container className="flex flex-col gap-4 py-4">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className={`text-sm font-medium transition-colors hover:text-ink ${
                  pathname === link.href
                    ? "text-ink underline decoration-tufo decoration-2 underline-offset-[6px]"
                    : "text-stone"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <a
              href={tel}
              className="mt-2 rounded-full bg-ink px-4 py-3 text-center text-sm font-medium text-paper transition-colors hover:bg-tufo"
            >
              Chiama {CONTACT_INFO.phone}
            </a>
          </Container>
        </nav>
      )}
    </header>
  );
}
