import type { Metadata } from "next";
import Link from "next/link";
import LegalPage from "@/components/ui/LegalPage";
import { CONTACT_INFO, LEGAL_INFO } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Cookie policy",
  description:
    "Quali cookie usa il sito del Dott. Roberto Trupiano, osteopata a Napoli e Pozzuoli.",
};

export default function CookiePolicyPage() {
  return (
    <LegalPage title="Cookie policy" updated="8 ottobre 2026">
      <p>
        I cookie sono piccoli file che un sito salva sul tuo dispositivo.
        Questo sito non usa cookie di profilazione, di statistica o
        pubblicitari. Al primo accesso un banner ti chiede se accettare i
        cookie di Google Maps, usati solo per mostrare le mappe delle sedi.
      </p>

      <h2>Cookie tecnici</h2>
      <p>
        Il sito pu&ograve; usare solo cookie tecnici, necessari a mostrare le
        pagine e a garantirne la sicurezza. Per questi cookie non serve il
        consenso (art. 122 del Codice privacy e Linee guida del Garante del
        10 giugno 2021).
      </p>

      <h2>Contenuti di terze parti</h2>
      <ul>
        <li>
          <strong>Google Maps</strong>: le mappe nella pagina Contatti si
          caricano solo se clicchi &ldquo;Accetta&rdquo; nel banner. Da quel
          momento Google pu&ograve; installare i propri cookie e raccogliere
          dati come l&rsquo;indirizzo IP. Se clicchi &ldquo;Rifiuta&rdquo;
          le mappe non vengono caricate e puoi comunque aprire le
          indicazioni con il pulsante &ldquo;Apri su Google Maps&rdquo;.
          Puoi leggere l&rsquo;
          <a
            href="https://policies.google.com/privacy?hl=it"
            target="_blank"
            rel="noopener noreferrer"
          >
            informativa di Google
          </a>
          .
        </li>
        <li>
          <strong>Instagram, Facebook e MioDottore</strong>: il
          sito contiene solo link a questi servizi, che non installano
          cookie finch&eacute; non li apri. Una volta sul loro sito valgono
          le loro informative.
        </li>
      </ul>

      <h2>Come cambiare la tua scelta</h2>
      <p>
        La tua scelta viene ricordata nel browser, cos&igrave; il banner
        non ricompare a ogni visita. Puoi cambiarla in qualsiasi momento con
        il link &ldquo;Preferenze cookie&rdquo; in fondo a ogni pagina.
      </p>
      <p>
        Puoi cancellare o bloccare i cookie dalle impostazioni del tuo
        browser. Bloccare i cookie tecnici pu&ograve; impedire il corretto
        funzionamento di alcune parti del sito.
      </p>

      <h2>Titolare e contatti</h2>
      <p>
        Il titolare del trattamento &egrave; {LEGAL_INFO.titolare}, P.IVA{" "}
        {LEGAL_INFO.piva}. Per qualsiasi domanda scrivi a{" "}
        <a href={`mailto:${CONTACT_INFO.email}`}>{CONTACT_INFO.email}</a>.
        Per sapere come trattiamo i tuoi dati leggi l&rsquo;
        <Link href="/privacy">informativa privacy</Link>.
      </p>
    </LegalPage>
  );
}
