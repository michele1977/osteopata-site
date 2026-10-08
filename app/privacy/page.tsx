import type { Metadata } from "next";
import Link from "next/link";
import LegalPage from "@/components/ui/LegalPage";
import { CONTACT_INFO, LEGAL_INFO } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Informativa privacy",
  description:
    "Informativa sul trattamento dei dati personali raccolti dal sito del Dott. Roberto Trupiano, osteopata a Napoli e Pozzuoli.",
};

export default function PrivacyPage() {
  return (
    <LegalPage title="Informativa privacy" updated="8 ottobre 2026">
      <p>
        Questa informativa spiega come vengono trattati i dati personali di
        chi visita questo sito o contatta lo studio, ai sensi
        dell&rsquo;art. 13 del Regolamento (UE) 2016/679 (&ldquo;GDPR&rdquo;).
      </p>

      <h2>Titolare del trattamento</h2>
      <p>
        {LEGAL_INFO.titolare}, P.IVA {LEGAL_INFO.piva}, con studio in{" "}
        {LEGAL_INFO.sede}. Per qualsiasi richiesta sulla privacy puoi
        scrivere a{" "}
        <a href={`mailto:${CONTACT_INFO.email}`}>{CONTACT_INFO.email}</a> o
        chiamare il {CONTACT_INFO.phone}.
      </p>

      <h2>Quali dati raccogliamo</h2>
      <ul>
        <li>
          <strong>Dati che ci comunichi tu</strong>: nome, numero di telefono,
          indirizzo email e quanto ci racconti quando scrivi su WhatsApp,
          chiami o mandi un&rsquo;email allo studio. Il sito non ha moduli di
          contatto. I messaggi WhatsApp passano dai sistemi di WhatsApp
          Ireland Limited, che li tratta secondo la propria informativa.
        </li>
        <li>
          <strong>Dati sulla salute</strong>: se su WhatsApp, al telefono o via email descrivi
          sintomi o disturbi, questi sono dati particolari (art. 9 GDPR).
          Ti chiediamo di indicare solo quanto serve per fissare un
          appuntamento.
        </li>
        <li>
          <strong>Dati di navigazione</strong>: i server che ospitano il sito
          registrano automaticamente dati tecnici come indirizzo IP, tipo di
          browser e pagine visitate, necessari al funzionamento e alla
          sicurezza del sito.
        </li>
      </ul>

      <h2>Perch&eacute; li trattiamo e su quale base</h2>
      <ul>
        <li>
          Per rispondere alle tue richieste e fissare un appuntamento: la base
          giuridica sono le misure precontrattuali richieste da te (art. 6.1.b
          GDPR) e, per gli eventuali dati sulla salute, la finalit&agrave; di
          cura da parte di un professionista sanitario tenuto al segreto
          professionale (art. 9.2.h e 9.3 GDPR).
        </li>
        <li>
          Per garantire il funzionamento e la sicurezza del sito: legittimo
          interesse del titolare (art. 6.1.f GDPR).
        </li>
      </ul>
      <p>
        I dati raccolti durante le visite e i trattamenti in studio sono
        oggetto di un&rsquo;informativa separata, consegnata in studio.
      </p>

      <h2>Per quanto tempo li conserviamo</h2>
      <p>
        I dati delle richieste di contatto sono conservati per il tempo
        necessario a rispondere e, se non segue un appuntamento, non oltre 12
        mesi. I dati di navigazione sono conservati dal fornitore di hosting
        per il tempo strettamente necessario alla sicurezza del servizio.
      </p>

      <h2>Chi pu&ograve; vederli</h2>
      <p>
        I dati non vengono diffusi n&eacute; venduti. Possono essere trattati,
        solo per le finalit&agrave; indicate, dai fornitori che ci aiutano a
        gestire il sito e le comunicazioni, nominati responsabili del
        trattamento: il servizio di hosting del sito (Vercel Inc.) e il
        servizio di posta elettronica. Alcuni di questi fornitori possono
        trattare dati fuori dall&rsquo;Unione Europea, con le garanzie
        previste dal GDPR (decisione di adeguatezza o clausole contrattuali
        standard).
      </p>

      <h2>Mappe di Google</h2>
      <p>
        Le mappe nella pagina Contatti sono fornite da Google e vengono
        caricate solo se accetti i relativi cookie nel banner. Da quel momento Google
        pu&ograve; raccogliere dati secondo la propria informativa. Maggiori
        dettagli nella <Link href="/cookie-policy">cookie policy</Link>.
      </p>

      <h2>I tuoi diritti</h2>
      <p>
        Puoi chiedere in qualsiasi momento di accedere ai tuoi dati, di
        correggerli o cancellarli, di limitarne il trattamento, di opporti al
        trattamento e di riceverli in un formato leggibile (artt. 15-22
        GDPR). Puoi revocare il consenso quando vuoi, senza conseguenze sui
        trattamenti gi&agrave; effettuati. Per esercitare questi diritti
        scrivi a{" "}
        <a href={`mailto:${CONTACT_INFO.email}`}>{CONTACT_INFO.email}</a>.
      </p>
      <p>
        Se ritieni che il trattamento non sia corretto, puoi presentare
        reclamo al{" "}
        <a
          href="https://www.garanteprivacy.it"
          target="_blank"
          rel="noopener noreferrer"
        >
          Garante per la protezione dei dati personali
        </a>
        .
      </p>
    </LegalPage>
  );
}
