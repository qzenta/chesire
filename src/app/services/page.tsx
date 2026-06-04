import type { Metadata } from "next";
import Link from "next/link";
import { Scale, Globe, Users, Home, Briefcase, FileText, ArrowRight, Building2 } from "lucide-react";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Legal Services | Immigration, Litigation, Family Law — Chesire Attorneys",
  description: "Expert legal services in immigration, civil litigation, family law, property & conveyancing, labour and wills & estates from Chesire Attorneys Johannesburg.",
};

const services = [
  {
    id: "commercial-law",
    icon: Building2,
    title: "Commercial Law",
    desc: "We have vast experience advising on commercial contracts of every kind and magnitude across the Republic and regionally. From company incorporations and mergers to business rescue and compliance with the Consumer Protection Act, National Credit Act and related legislation — we provide independent, expert commercial advice that protects your business. We have advised State Owned Enterprises, NGOs and private companies alike.",
    bullets: [
      "Commercial contracts (drafting, review, disputes)",
      "Company incorporations and mergers & acquisitions",
      "Business rescue and liquidation advice",
      "Consumer Protection Act compliance",
      "National Credit Act compliance",
      "Advice to State Owned Enterprises and NGOs",
      "Alternative Dispute Resolution (ADR)",
    ],
  },
  {
    icon: Globe,
    id: "immigration-law",
    title: "Immigration Law",
    desc: "South African immigration law is complex, constantly evolving and increasingly difficult to navigate — particularly with the advent of VFS Global and mandatory online applications. Our attorneys have extensive expertise in all categories of visas, assisting individuals, families and employers to compile, submit and appeal applications correctly. Where Home Affairs makes unlawful or arbitrary decisions, we are prepared to challenge these in the High Court.",
    bullets: [
      "Temporary and permanent residence permits",
      "Work and business visas",
      "Spousal and relative permits",
      "Asylum and refugee matters",
      "VFS Global and online application assistance",
      "High Court challenges against unfair decisions",
      "Appeals and reviews",
      "Citizenship applications",
    ],
  },
  {
    icon: Scale,
    id: "civil-litigation",
    title: "Civil Litigation",
    desc: "When disputes cannot be resolved by agreement, you need an experienced litigator in your corner. We represent clients in the High Court, Magistrates' Court and other tribunals across a wide range of civil matters — from commercial disputes and debt recovery to delictual claims and interdict applications.",
    bullets: [
      "High Court and Magistrates' Court litigation",
      "Debt collection and recovery",
      "Delictual claims (personal injury, property damage)",
      "Interdict applications",
      "Contract disputes",
      "Urgent court applications",
    ],
  },
  {
    icon: Users,
    id: "family-law-divorce",
    title: "Family Law & Divorce",
    desc: "Family law matters are among the most emotionally charged legal situations a person can face. Our attorneys handle divorce proceedings, parenting disputes, maintenance applications and domestic violence matters with sensitivity, efficiency and a focus on protecting your best interests and those of your children.",
    bullets: [
      "Divorce (contested and uncontested)",
      "Parenting plans and custody",
      "Maintenance applications",
      "Domestic violence protection orders",
      "Adoption proceedings",
      "Ante-nuptial contracts",
    ],
  },
  {
    icon: Home,
    id: "property-conveyancing",
    title: "Property & Conveyancing",
    desc: "Whether you are buying, selling or transferring property, our conveyancing team ensures your transaction proceeds smoothly and correctly. We handle transfers, bond registrations, sectional title matters and property disputes for both residential and commercial clients.",
    bullets: [
      "Property transfers",
      "Bond registrations and cancellations",
      "Sectional title and HOA matters",
      "Property disputes",
      "Lease agreements",
      "Evictions",
    ],
  },
  {
    icon: Briefcase,
    id: "labour-employment-law",
    title: "Labour & Employment Law",
    desc: "Employment disputes can be costly and disruptive for both employers and employees. We provide practical advice and representation across the full spectrum of labour law — from drafting employment contracts and disciplinary procedures to CCMA representation and Labour Court matters.",
    bullets: [
      "CCMA representation",
      "Unfair dismissal and retrenchments",
      "Employment contracts and policies",
      "Disciplinary hearings",
      "Labour Court litigation",
      "Employment equity compliance",
    ],
  },
  {
    icon: FileText,
    id: "wills-estates-trusts",
    title: "Wills, Estates & Trusts",
    desc: "Proper estate planning protects your family and ensures your wishes are carried out. We assist individuals and families with the drafting of wills, administration of deceased estates and the establishment of trusts — providing clear, practical guidance at every stage.",
    bullets: [
      "Will drafting and review",
      "Deceased estate administration",
      "Letters of executorship",
      "Trust formation and administration",
      "Intestate succession matters",
      "Estate disputes",
    ],
  },
];

export default function ServicesPage() {
  return (
    <>
      <PageHero label="Our Services" title="Expert Legal Services in Johannesburg" subtitle="From immigration to estates, Chesire Attorneys provides practical, personalised legal advice across six core practice areas." image="/images/services-hero.jpg" />

      {/* Intro */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
        <p className="text-gray-600 leading-relaxed text-lg">
          Every matter at Chesire Attorneys is handled with precision, integrity and a genuine commitment to the client. Whether you are an individual facing a personal legal challenge or a business navigating complex regulatory requirements, we are here to guide you.
        </p>
      </section>

      {/* Service sections */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 space-y-16">
        {services.map(({ id, icon: Icon, title, desc, bullets }, i) => (
          <div
            key={title}
            id={id}
            className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-start ${i % 2 === 1 ? "lg:flex-row-reverse" : ""}`}
          >
            <div>
              <div className="flex items-center gap-4 mb-5">
                <div className="w-14 h-14 bg-[#1A2E52] rounded-xl flex items-center justify-center">
                  <Icon size={26} className="text-[#C9A84C]" />
                </div>
                <h2 className="font-[var(--font-playfair)] text-2xl font-bold text-[#1A2E52]">{title}</h2>
              </div>
              <p className="text-gray-600 leading-relaxed mb-6">{desc}</p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-[#C9A84C] hover:bg-[#b8963e] text-[#1A2E52] font-semibold px-5 py-3 rounded text-sm transition-colors"
              >
                Enquire Now <ArrowRight size={15} />
              </Link>
            </div>
            <div className="bg-[#F0EEE9] rounded-xl p-8">
              <p className="text-xs text-gray-400 uppercase tracking-wide font-semibold mb-4">We Can Assist With</p>
              <ul className="space-y-3">
                {bullets.map((b) => (
                  <li key={b} className="flex items-start gap-3 text-sm text-gray-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C9A84C] mt-2 shrink-0" />
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </section>

      {/* CTA */}
      <section className="bg-[#1A2E52] py-16">
        <div className="max-w-3xl mx-auto px-4 text-center text-white">
          <h2 className="font-[var(--font-playfair)] text-3xl font-bold mb-4">Not Sure Where to Start?</h2>
          <p className="text-white/70 mb-8">
            Book a consultation with one of our attorneys. We will listen to your situation and advise you on the best path forward.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-[#C9A84C] hover:bg-[#b8963e] text-[#1A2E52] font-bold px-8 py-4 rounded transition-colors"
          >
            Book a Consultation
          </Link>
        </div>
      </section>
    </>
  );
}
