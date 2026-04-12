import Link from "next/link";
import Image from "next/image";
import { NAV_LINKS, SITE_NAME, CONTACT_INFO } from "@/lib/constants";
import Container from "@/components/ui/Container";

export default function Footer() {
  return (
    <footer className="border-t border-zinc-100 bg-zinc-50">
      <Container className="py-12">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {/* Brand */}
          <div>
            <p className="text-lg font-bold text-teal-700">{SITE_NAME}</p>
            <p className="mt-2 text-sm text-zinc-500">
              Osteopatia a Napoli e Pozzuoli
            </p>
          </div>

          {/* Links */}
          <div>
            <p className="text-sm font-semibold text-zinc-900">Pagine</p>
            <ul className="mt-3 space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-zinc-500 hover:text-teal-700 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/meso-academy"
                  className="flex items-center gap-2 text-sm text-zinc-500 hover:text-teal-700 transition-colors"
                >
                  <Image
                    src="/meso-logo.png"
                    alt="Logo M.E.S.O Academy"
                    width={28}
                    height={28}
                    className="h-7 w-7 object-contain"
                  />
                  M.E.S.O Academy
                </Link>
              </li>
            </ul>
          </div>

          {/* Contatti */}
          <div>
            <p className="text-sm font-semibold text-zinc-900">Contatti</p>
            <ul className="mt-3 space-y-2 text-sm text-zinc-500">
              <li>
                <span className="text-zinc-700">Tel:</span>{" "}
                {CONTACT_INFO.phone}
              </li>
              <li>
                <span className="text-zinc-700">Email:</span>{" "}
                {CONTACT_INFO.email}
              </li>
              <li>
                <span className="text-zinc-700">Napoli:</span>{" "}
                {CONTACT_INFO.address}
              </li>
              <li>
                <span className="text-zinc-700">Pozzuoli:</span>{" "}
                {CONTACT_INFO.addressPozzuoli}
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-zinc-200 pt-6 text-center text-xs text-zinc-400">
          © {new Date().getFullYear()} {SITE_NAME}. Tutti i diritti riservati.
        </div>
      </Container>
    </footer>
  );
}
