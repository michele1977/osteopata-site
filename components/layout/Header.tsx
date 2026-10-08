"use client";

import { useState, useSyncExternalStore } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV_LINKS, WHATSAPP_URL } from "@/lib/constants";
import Logo from "@/components/layout/Logo";

import Container from "@/components/ui/Container";
import WhatsAppIcon from "@/components/ui/WhatsAppIcon";


function subscribeToScroll(callback: () => void) {
  window.addEventListener("scroll", callback, { passive: true });
  return () => window.removeEventListener("scroll", callback);
}

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  // In cima alla pagina l'header si fonde con lo sfondo; scorrendo si stacca.
  const scrolled = useSyncExternalStore(
    subscribeToScroll,
    () => window.scrollY > 8,
    () => false,
  );
  const raised = scrolled || menuOpen;

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-[background-color,border-color,box-shadow] duration-300 ${
        raised
          ? "border-line bg-bone/95 shadow-[0_10px_30px_-18px_rgba(19,32,30,0.45)] backdrop-blur-md"
          : "border-transparent bg-transparent"
      }`}
    >
      <Container className="flex h-[4.5rem] items-center gap-2 xl:gap-10">
        {/* Logo */}
        <Link href="/" className="min-w-0 shrink transition-opacity duration-200 hover:opacity-80">
          <Logo />
        </Link>

        {/* Desktop nav + CTA */}
        <div className="hidden flex-1 items-center justify-end gap-8 xl:flex">
          <nav className="flex gap-6 whitespace-nowrap" aria-label="Navigazione principale">
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
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 whitespace-nowrap rounded-full bg-ink px-5 py-2.5 text-sm font-medium text-paper transition-colors hover:bg-tufo"
          >
            <WhatsAppIcon />
            Scrivimi su WhatsApp
          </a>
        </div>

        {/* Mobile: WhatsApp sempre in vista + burger */}
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Scrivi allo studio su WhatsApp"
          className="ml-auto flex h-10 shrink-0 items-center justify-center gap-2 rounded-full bg-ink px-3 text-sm font-medium text-paper transition-colors hover:bg-tufo sm:px-4 xl:hidden"
        >
          <WhatsAppIcon />
          <span className="hidden sm:inline">WhatsApp</span>
        </a>
        <button
          type="button"
          className="p-2 text-stone xl:hidden"
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
        <nav className="border-t border-line bg-bone xl:hidden" aria-label="Navigazione mobile">
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
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 flex items-center justify-center gap-2 rounded-full bg-ink px-4 py-3 text-sm font-medium text-paper transition-colors hover:bg-tufo"
            >
              <WhatsAppIcon />
              Scrivimi su WhatsApp
            </a>
          </Container>
        </nav>
      )}
    </header>
  );
}
