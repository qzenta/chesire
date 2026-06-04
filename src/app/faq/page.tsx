"use client";
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import PageHero from "@/components/PageHero";

const faqs = [
  { q: "Where are your offices located?", a: "Our offices are at 83 Albertina Sisulu Road, Works@Market City, Johannesburg, 2110. We are walking distance from the Johannesburg Magistrates' Court and High Court, with covered parking available at our expense." },
  { q: "How do I book a consultation?", a: "You can book a consultation online via our Calendly booking link, WhatsApp us on 082 407 8095, or fill in the contact form on our Contact page." },
  { q: "What areas of law do you practise?", a: "Chesire Attorneys specialises in six practice areas: Commercial Law, Immigration Law, Civil Litigation, Family Law & Divorce, Labour & Employment Law, and Wills, Estates & Trusts." },
  { q: "Are you a registered law firm in South Africa?", a: "Yes. Chesire Attorneys is a registered law firm in South Africa. Our director, Simon Chesire, is a member of the Law Society of Northern Provinces and holds the right of appearance in the High Court." },
  { q: "Do you assist foreign nationals with immigration matters?", a: "Absolutely. Immigration law is one of our core practice areas. We assist foreign nationals with visa applications, work permits, permanent residence, asylum, appeals and all other immigration-related matters." },
  { q: "What is your BB-BEE status?", a: "Chesire Attorneys is a wholly black-owned firm — BB-BEE Level 1. We are proud of our commitment to transformation and our contribution to the legal profession in South Africa." },
  { q: "Do you serve clients outside Johannesburg?", a: "While our offices are in Johannesburg, we serve clients from across Greater Johannesburg, including Alberton, Boksburg, Germiston, Edenvale, Northcliff, Ferndale, Cresta and The Glen. For matters that require a court appearance, we focus on Johannesburg and Gauteng courts." },
  { q: "How are your fees structured?", a: "Our fees depend on the nature and complexity of your matter. We are committed to affordable, transparent pricing. We will provide a clear fee estimate at your initial consultation. We offer preferential rates for community members and non-profit organisations." },
  { q: "Is my information kept confidential?", a: "Yes. All information you share with Chesire Attorneys is protected by legal professional privilege and our obligations under POPIA. We never share your personal information with third parties except as required by law." },
];

export default function FAQPage() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <>
      <PageHero label="FAQ" title="Frequently Asked Questions" subtitle="Answers to the questions we hear most often from new and existing clients." image="/images/resources-hero.jpg" />
      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div key={i} className="border border-gray-100 rounded-xl overflow-hidden">
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between px-6 py-5 text-left bg-white hover:bg-[#F9F8F6] transition-colors"
              >
                <span className="font-semibold text-[#1A2E52] text-sm pr-4">{faq.q}</span>
                {open === i
                  ? <ChevronUp size={18} className="text-[#C9A84C] shrink-0" />
                  : <ChevronDown size={18} className="text-gray-400 shrink-0" />}
              </button>
              {open === i && (
                <div className="px-6 py-5 bg-white border-t border-gray-100">
                  <p className="text-gray-600 text-sm leading-relaxed">{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
