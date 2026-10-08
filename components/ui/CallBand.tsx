import Link from "next/link";
import { CONTACT_INFO, WHATSAPP_URL } from "@/lib/constants";
import WhatsAppIcon from "@/components/ui/WhatsAppIcon";

type CallBandProps = {
  title?: React.ReactNode;
  text?: string;
};

// Chiusura delle pagine interne: invito a scrivere su WhatsApp, come in home.
export default function CallBand({
  title = (
    <>
      Parliamone
      <br />
      <em>su WhatsApp.</em>
    </>
  ),
  text = "Raccontami il tuo problema: ti rispondo personalmente e troviamo insieme il momento giusto per vederci.",
}: CallBandProps) {
  return (
    <section className="px-4 pb-4 lg:px-6 lg:pb-6">
      <div className="rounded-[2.5rem] bg-tufo px-6 py-20 text-paper lg:px-16">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
          <h2 className="font-display text-5xl font-light leading-[0.95] tracking-tight md:text-6xl lg:col-span-7">
            {title}
          </h2>
          <div className="lg:col-span-5">
            <p className="max-w-md leading-relaxed text-paper/85">{text}</p>
            <p className="mt-4 text-sm text-paper/70">Tel. {CONTACT_INFO.phone}</p>
            <div className="mt-8 flex flex-wrap items-center gap-6">
<a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-full bg-paper px-7 py-4 text-ink transition hover:bg-ink hover:text-paper"
              >
                <WhatsAppIcon />
                Scrivimi su WhatsApp
              </a>
              <Link href="/contatti" className="text-sm text-paper/80 underline-offset-4 hover:text-paper hover:underline">
                Sedi e indicazioni →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
