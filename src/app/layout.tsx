import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import CookieConsent from "@/components/CookieConsent";
import MicrosoftClarity from "@/components/MicrosoftClarity";

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
    "Chesire Attorneys is a boutique Johannesburg law firm offering expert legal services in immigration, civil litigation, family law, labour and estates.",
  metadataBase: new URL("https://www.chesireattorneys.co.za"),
  alternates: {
    canonical: "https://www.chesireattorneys.co.za",
  },
  openGraph: {
    title: "Chesire Attorneys | Expert Legal Services in Johannesburg",
    description:
      "Boutique Johannesburg law firm. Immigration law, civil litigation, family law, labour and estates.",
    url: "https://www.chesireattorneys.co.za",
    siteName: "Chesire Attorneys",
    locale: "en_ZA",
    type: "website",
    images: [
      {
        url: "/images/about-team.jpg",
        width: 1200,
        height: 630,
        alt: "Chesire Attorneys — Expert Legal Services in Johannesburg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Chesire Attorneys | Expert Legal Services in Johannesburg",
    description: "Boutique Johannesburg law firm. Immigration, litigation, family law, labour and estates.",
    images: ["/images/about-team.jpg"],
  },
};

const GTM_ID = "GTM-5842Q5W";

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#F9F8F6] text-[#2C2C2C] font-[var(--font-inter)]">
        {/* Google Tag Manager */}
        <Script id="gtm" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','${GTM_ID}');`}
        </Script>
        {/* GTM noscript fallback */}
        <noscript><iframe src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`} height="0" width="0" style={{display:"none",visibility:"hidden"}} /></noscript>
        <MicrosoftClarity />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppButton />
        <CookieConsent />
      </body>
    </html>
  );
}
