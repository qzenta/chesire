import type { Metadata } from "next";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Contact Chesire Attorneys | Book a Legal Consultation in Johannesburg",
  description: "Get in touch with Chesire Attorneys. Speak to our Johannesburg legal team about immigration, litigation, family law and more.",
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <Suspense>{children}</Suspense>;
}
