"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import PageHero from "@/components/PageHero";
import { Scale, ChevronDown, ChevronUp, ArrowRight } from "lucide-react";

const featured = {
  title: "Understanding Your Rights as a Foreign National in South Africa",
  category: "Immigration Law",
  excerpt:
    "Navigating South African immigration law can be complex. Whether you are on a temporary visa, applying for permanent residence or facing deportation proceedings, understanding your rights is the first step to protecting yourself. This guide covers the key protections available under South African law and what to do if you believe your rights have been violated.",
  date: "May 2026",
};

const articles = [
  {
    title: "What to Do If You Are Served with a Summons",
    category: "Civil Litigation",
    excerpt: "Receiving a summons can be alarming. Acting quickly and correctly is essential — here is your step-by-step guide to responding before the deadline.",
    date: "April 2026",
    img: "/images/article2.jpg",
  },
  {
    title: "How to Start the Divorce Process in South Africa",
    category: "Family Law",
    excerpt: "Whether contested or uncontested, understanding the divorce process helps reduce stress and costs for both parties.",
    date: "March 2026",
    img: "/images/article3.jpg",
  },
  {
    title: "What Every Employer Must Know About the CCMA",
    category: "Labour Law",
    excerpt: "The CCMA handles thousands of unfair dismissal and retrenchment cases every year. Here is what employers and employees need to know before a dispute reaches conciliation.",
    date: "February 2026",
    img: "/images/article-labour.jpg",
  },
  {
    title: "How to Apply for a Work Visa in South Africa: Step-by-Step",
    category: "Immigration Law",
    excerpt: "The South African work visa process is complex and time-sensitive. This guide breaks down the categories, requirements and common mistakes that lead to rejection.",
    date: "January 2026",
    img: "/images/article-immigration.jpg",
  },
  {
    title: "How to Register a Deceased Estate in South Africa",
    category: "Wills & Estates",
    excerpt: "The death of a loved one is never easy. Here is a step-by-step overview of the estate administration process from reporting to the Master to final distribution.",
    date: "December 2025",
    img: "/images/article1.jpg",
  },
  {
    title: "Protecting Your Business with a Proper Commercial Contract",
    category: "Commercial Law",
    excerpt: "Many South African businesses operate on verbal agreements or poorly drafted contracts — leaving them exposed to disputes and liability. Here is what a sound commercial contract must include.",
    date: "November 2025",
    img: "/images/article-commercial.jpg",
  },
  {
    title: "Your Rights as a Tenant Under the Rental Housing Act",
    category: "Property Law",
    excerpt: "South African tenants have strong legal protections. Know your rights before signing a lease or facing eviction.",
    date: "October 2025",
    img: "/images/article2.jpg",
  },
];

const glossary = [
  { term: "Affidavit", def: "A written statement confirmed by oath or affirmation, used as evidence in legal proceedings." },
  { term: "Anton Piller Order", def: "A court order allowing a party to enter premises and seize evidence without prior notice to prevent destruction." },
  { term: "Cause of Action", def: "The factual and legal basis upon which a party brings a claim in court." },
  { term: "Default Judgment", def: "A judgment granted by a court when the defendant fails to defend the claim or appear in court." },
  { term: "Domicile", def: "The country or jurisdiction where a person permanently resides, which determines which law applies to certain matters." },
  { term: "Ex Parte", def: "A court application made by one party without notifying or hearing from the other party." },
  { term: "Fiduciary", def: "A person who holds a position of trust or confidence, such as an executor, trustee or company director." },
  { term: "Habeas Corpus", def: "A legal action requiring a person under arrest to be brought before a judge to determine if the detention is lawful." },
  { term: "Intestate", def: "Dying without a valid will. South African law determines how an intestate estate is distributed." },
  { term: "Locus Standi", def: "The right or legal standing to bring an action or appear in court." },
  { term: "Mandament van Spolie", def: "An urgent interdict to restore possession of property that was taken without the owner's consent." },
  { term: "Notarial Bond", def: "A bond registered by a notary public over movable property as security for a debt." },
  { term: "Onus of Proof", def: "The obligation to prove facts in dispute. In civil matters, the onus rests on a balance of probabilities." },
  { term: "Prescription", def: "The lapsing of a legal right due to the passage of time. Most civil claims prescribe after 3 years." },
  { term: "Quantum", def: "The monetary value of a claim or the amount of damages sought." },
  { term: "Rule Nisi", def: "A provisional court order that becomes final unless cause is shown why it should not." },
  { term: "Sheriff", def: "An officer of the court responsible for serving legal documents and enforcing court orders." },
  { term: "Subpoena", def: "A court order compelling a witness to appear in court or produce documents." },
  { term: "Delict", def: "A civil wrong that causes harm and gives rise to a legal claim for damages. The South African equivalent of what other legal systems call a tort." },
  { term: "Vicarious Liability", def: "The legal responsibility of an employer for the unlawful acts of employees committed in the course of employment." },
];

export default function ResourcesPage() {
  const [openTerms, setOpenTerms] = useState<Set<string>>(new Set());
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const toggle = (term: string) => {
    setOpenTerms((prev) => {
      const next = new Set(prev);
      next.has(term) ? next.delete(term) : next.add(term);
      return next;
    });
  };

  const handleNewsletter = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email }),
      });
    } catch (_) {}
    setSubmitted(true);
  };

  return (
    <>
      <PageHero label="Resources" title="Free Legal Information Hub" subtitle="Plain-language guides, legal glossary and insights — helping South Africans understand their rights." image="/images/resources-hero.jpg" />

      {/* Featured article */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <p className="text-xs text-gray-400 uppercase tracking-wide font-semibold mb-4">Featured Article</p>
        <div className="bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm grid grid-cols-1 lg:grid-cols-3">
          <div className="lg:col-span-1 min-h-48 overflow-hidden">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/article-featured.jpg" alt="Featured article" className="w-full h-full object-cover object-top" />
          </div>
          <div className="lg:col-span-2 p-8">
            <span className="text-[#C9A84C] text-xs font-semibold uppercase tracking-wide">{featured.category}</span>
            <h2 className="font-[var(--font-playfair)] text-2xl font-bold text-[#1A2E52] mt-2 mb-4">{featured.title}</h2>
            <p className="text-gray-600 leading-relaxed mb-6">{featured.excerpt}</p>
            <div className="flex items-center justify-between">
              <span className="text-xs text-gray-400">{featured.date}</span>
              <Link href="/contact" className="inline-flex items-center gap-2 text-[#C9A84C] font-semibold text-sm hover:underline">
                Need help with this? <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Article grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <h2 className="font-[var(--font-playfair)] text-2xl font-bold text-[#1A2E52] mb-8">All Articles</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((a, i) => (
            <div key={i} className="bg-white border border-gray-100 rounded-xl overflow-hidden shadow-sm flex flex-col">
              <div className="h-44 relative overflow-hidden bg-[#1A2E52]/5">
                <Image src={a.img} alt={a.title} fill className="object-cover" />
              </div>
              <div className="p-5 flex flex-col flex-1">
                <span className="text-[#C9A84C] text-xs font-semibold uppercase tracking-wide mb-2">{a.category}</span>
                <h3 className="font-[var(--font-playfair)] font-semibold text-[#1A2E52] mb-2 text-base leading-snug">{a.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed flex-1">{a.excerpt}</p>
                <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-100">
                  <span className="text-xs text-gray-400">{a.date}</span>
                  <Link href="/resources" className="text-[#C9A84C] text-sm font-medium hover:underline">
                    Read more
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Newsletter signup */}
      <section className="bg-[#1A2E52] py-16">
        <div className="max-w-xl mx-auto px-4 text-center">
          <h2 className="font-[var(--font-playfair)] text-2xl font-bold text-white mb-3">
            Get Free Legal Updates
          </h2>
          <p className="text-white/70 text-sm mb-8">
            Subscribe to our newsletter for plain-language guides on South African law, delivered to your inbox.
          </p>
          {submitted ? (
            <p className="text-[#C9A84C] font-semibold">Thank you! You have been subscribed.</p>
          ) : (
            <form onSubmit={handleNewsletter} className="space-y-3">
              <input
                type="text"
                placeholder="Your name"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-3 rounded text-sm bg-white/10 text-white placeholder-white/50 border border-white/20 focus:outline-none focus:border-[#C9A84C]"
              />
              <input
                type="email"
                placeholder="Your email address"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 rounded text-sm bg-white/10 text-white placeholder-white/50 border border-white/20 focus:outline-none focus:border-[#C9A84C]"
              />
              <button
                type="submit"
                className="w-full bg-[#C9A84C] hover:bg-[#b8963e] text-[#1A2E52] font-bold py-3 rounded transition-colors"
              >
                Get Free Legal Updates
              </button>
            </form>
          )}
        </div>
      </section>

      {/* Glossary */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="font-[var(--font-playfair)] text-3xl font-bold text-[#1A2E52] mb-4">Legal Glossary</h2>
        <p className="text-gray-600 mb-10">
          A plain-language guide to common legal terms used in South African law.
        </p>
        <div className="space-y-2">
          {glossary.map(({ term, def }) => (
            <div key={term} className="border border-gray-100 rounded-lg overflow-hidden">
              <button
                onClick={() => toggle(term)}
                className="w-full flex items-center justify-between px-5 py-4 text-left bg-white hover:bg-[#F0EEE9] transition-colors"
              >
                <span className="font-semibold text-[#1A2E52] text-sm">{term}</span>
                {openTerms.has(term) ? (
                  <ChevronUp size={16} className="text-[#C9A84C]" />
                ) : (
                  <ChevronDown size={16} className="text-gray-400" />
                )}
              </button>
              {openTerms.has(term) && (
                <div className="px-5 py-4 bg-white border-t border-gray-100">
                  <p className="text-gray-600 text-sm leading-relaxed">{def}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
