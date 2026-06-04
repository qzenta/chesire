import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Chesire Attorneys | Book a Legal Consultation in Johannesburg",
  description: "Get in touch with Chesire Attorneys. Book a free initial consultation with our Johannesburg legal team — immigration, litigation, family law and more.",
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
