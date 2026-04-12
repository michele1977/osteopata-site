"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { NAV_LINKS, SITE_NAME } from "@/lib/constants";
import Container from "@/components/ui/Container";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white backdrop-blur-sm">
      <Container className="flex h-16 items-center gap-10">
        {/* Logo */}
        <Link href="/" className="shrink-0 transition-opacity duration-200 hover:opacity-80">
          <Image
            src="/logo_cropped.png"
            alt="Roberto Trupiano Osteopata"
            width={155}
            height={40}
            className="h-8 w-auto max-w-[140px] object-contain sm:h-9 sm:max-w-none"
            priority
          />
        </Link>

        {/* Desktop nav + CTA */}
        <div className="hidden flex-1 items-center justify-end gap-8 md:flex">
          <nav className="flex gap-6" aria-label="Navigazione principale">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-teal-700 ${
                  pathname === link.href
                    ? "text-teal-700"
                    : "text-zinc-600"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <Link
            href="/contatti"
            className="rounded-lg bg-teal-700 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-teal-800"
          >
            Prenota una visita
          </Link>
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
        <nav className="border-t border-zinc-100 bg-white md:hidden" aria-label="Navigazione mobile">
          <Container className="flex flex-col gap-4 py-4">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className={`text-sm font-medium transition-colors hover:text-teal-700 ${
                  pathname === link.href
                    ? "text-teal-700"
                    : "text-zinc-600"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contatti"
              onClick={() => setMenuOpen(false)}
              className="mt-2 rounded-lg bg-teal-700 px-4 py-2 text-center text-sm font-semibold text-white transition-colors hover:bg-teal-800"
            >
              Prenota una visita
            </Link>
          </Container>
        </nav>
      )}
    </header>
  );
}
