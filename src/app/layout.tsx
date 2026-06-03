import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Chesire Attorneys | Expert Legal Services in Johannesburg",
  description:
    "Chesire Attorneys is a boutique Johannesburg law firm offering expert legal services in immigration, civil litigation, family law, property, labour and estates.",
  openGraph: {
    title: "Chesire Attorneys | Expert Legal Services in Johannesburg",
    description:
      "Boutique Johannesburg law firm. Immigration law, civil litigation, family law, property, labour and estates.",
    url: "https://www.chesireattorneys.co.za",
    siteName: "Chesire Attorneys",
    locale: "en_ZA",
    type: "website",
  },
};

const GA4_ID = process.env.NEXT_PUBLIC_GA4_ID;

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#F9F8F6] text-[#2C2C2C] font-[var(--font-inter)]">
        {GA4_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA4_ID}`}
              strategy="afterInteractive"
            />
            <Script id="ga4" strategy="afterInteractive">
              {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${GA4_ID}');`}
            </Script>
          </>
        )}
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
