"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { CONTACT_INFO, NAV_LINKS } from "@/lib/constants";
import Logo from "@/components/layout/Logo";

import Container from "@/components/ui/Container";

const tel = `tel:${CONTACT_INFO.phone.replace(/\s/g, "")}`;
const phoneShort = CONTACT_INFO.phone.replace(/^\+39\s*/, "");

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-bone/85 backdrop-blur-md">
      <Container className="flex h-[4.5rem] items-center gap-2 md:gap-10">
        {/* Logo */}
        <Link href="/" className="min-w-0 shrink transition-opacity duration-200 hover:opacity-80">
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
            Chiama {phoneShort}
          </a>
        </div>

        {/* Mobile: chiamata sempre in vista + burger */}
        <a
          href={tel}
          aria-label={`Chiama lo studio al ${CONTACT_INFO.phone}`}
          className="ml-auto flex h-10 shrink-0 items-center justify-center gap-2 rounded-full bg-ink px-3 text-sm font-medium text-paper transition-colors hover:bg-tufo sm:px-4 md:hidden"
        >
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
          </svg>
          <span className="hidden sm:inline">Chiama</span>
        </a>
        <button
          type="button"
          className="p-2 text-zinc-600 md:hidden"
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
