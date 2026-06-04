import { Scale, Globe, Users, Briefcase, FileText, Building2, type LucideIcon } from "lucide-react";

export type Service = {
  id: string;
  slug: string;
  icon: LucideIcon;
  title: string;
  desc: string;
  bullets: string[];
};

export const services: Service[] = [
  {
    id: "commercial-law",
    slug: "commercial-law",
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
    id: "immigration-law",
    slug: "immigration-law",
    icon: Globe,
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
    id: "civil-litigation",
    slug: "civil-litigation",
    icon: Scale,
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
    id: "family-law-divorce",
    slug: "family-law-divorce",
    icon: Users,
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
    id: "labour-employment-law",
    slug: "labour-employment-law",
    icon: Briefcase,
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
    id: "wills-estates-trusts",
    slug: "wills-estates-trusts",
    icon: FileText,
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
