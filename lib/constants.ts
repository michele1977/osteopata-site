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

export const SOCIAL_LINKS = {
  instagram: "https://www.instagram.com/dott_robertotrupiano_osteopata/",
  facebook: "https://www.facebook.com/osteopatarobertotrupiano",
} as const;

export const MIODOTTORE_URL =
  "https://www.miodottore.it/roberto-trupiano/osteopata/napoli#profile-reviews";

// TODO: copiare il PDF in public/ prima di dismettere il vecchio dominio.
export const CURRICULUM_URL =
  "https://osteopatatrupiano.it/wp-content/uploads/2025/05/Curriculum.pdf";
