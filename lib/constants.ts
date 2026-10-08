export const SITE_NAME = "Dott. Trupiano Osteopata";
export const SITE_DESCRIPTION =
  "Studio di Osteopatia a Napoli e Pozzuoli. Trattamenti per cervicale, mal di schiena, cefalea, dolori articolari e postura.";
export const SITE_URL = "https://www.trupianoosteopata.it";

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Chi sono", href: "/chi-sono" },
  { label: "Come lavoro", href: "/come-lavoro" },
  { label: "Trattamenti", href: "/trattamenti" },
  { label: "Prima visita", href: "/prima-visita" },
  { label: "Recensioni", href: "/recensioni" },
  { label: "Contatti", href: "/contatti" },
] as const;

export const CONTACT_INFO = {
  phone: "+39 366 463 3858",
  email: "doc.trupiano@gmail.com",
  address: "Via Mergellina 220, Napoli",
  addressPozzuoli: "Via Montenuovo Licola Patria 138, Pozzuoli (NA)",
} as const;

// Il contatto passa da WhatsApp; il numero sul sito è solo informativo.
export const WHATSAPP_URL = `https://wa.me/${CONTACT_INFO.phone.replace(/\D/g, "")}?text=${encodeURIComponent(
  "Buongiorno Dottore, vorrei avere informazioni per un appuntamento.",
)}`;

export const SOCIAL_LINKS = {
  instagram: "https://www.instagram.com/dott_robertotrupiano_osteopata/",
  facebook: "https://www.facebook.com/osteopatarobertotrupiano",
} as const;

export const MIODOTTORE_URL =
  "https://www.miodottore.it/roberto-trupiano/osteopata/napoli#profile-reviews";

export const LEGAL_INFO = {
  titolare: "Dott. Roberto Trupiano",
  piva: "08253431210",
  sede: "Via Mergellina 220, 80122 Napoli",
} as const;

// Contatti della M.E.S.O. Academy, come sul sito osteopatatrupiano.it.
export const MESO_CONTACT = {
  phone: "+39 351 992 3924",
  email: "meso.academy@yahoo.com",
} as const;
