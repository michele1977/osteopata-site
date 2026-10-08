import type { Metadata } from "next";
import { Instrument_Sans, Newsreader } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import CookieBanner from "@/components/ui/CookieBanner";
import { SITE_NAME, SITE_DESCRIPTION } from "@/lib/constants";

const instrument = Instrument_Sans({
  variable: "--font-instrument",
  subsets: ["latin"],
});

const newsreader = Newsreader({
  variable: "--font-newsreader",
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: ["300", "400", "500"],
});

export const metadata: Metadata = {
  title: {
    default: `${SITE_NAME} | Osteopata a Napoli e Pozzuoli`,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it" className={`${instrument.variable} ${newsreader.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans bg-bone text-ink">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <CookieBanner />
      </body>
    </html>
  );
}
