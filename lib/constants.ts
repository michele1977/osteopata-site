export const SITE_NAME = "Dott. Trupiano Osteopata";
export const SITE_DESCRIPTION =
  "Studio di Osteopatia a Napoli e Pozzuoli. Trattamenti per cervicale, mal di schiena, cefalea, dolori articolari e postura.";
export const SITE_URL = "https://www.trupianoosteopata.it";

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Chi sono", href: "/chi-sono" },
  { label: "Trattamenti", href: "/trattamenti" },
  { label: "Prima visita", href: "/prima-visita" },
  { label: "Recensioni", href: "/recensioni" },
  { label: "Contatti", href: "/contatti" },
] as const;

export const CONTACT_INFO = {
  phone: "+39 338 983 7411",
  email: "info@trupianoosteopata.it",
  address: "Via Mergellina 220, Napoli",
  addressPozzuoli: "Via Montenuovo Licola Patria 138, Pozzuoli (NA)",
  whatsapp: "https://wa.me/393389837411",
} as const;
