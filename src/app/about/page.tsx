import type { Metadata } from "next";
import Link from "next/link";
import { Shield, BookOpen, Heart, Eye, Target, ArrowRight, Award } from "lucide-react";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "About Chesire Attorneys | Boutique Johannesburg Law Firm",
  description: "Learn about Chesire Attorneys — a boutique Johannesburg law firm founded on the principles of integrity, expertise and accessibility.",
};

const values = [
  { icon: Shield, title: "Integrity", desc: "We act with honesty and transparency in every matter we handle. Our clients trust us with their most sensitive legal issues — that trust is never taken for granted." },
  { icon: BookOpen, title: "Expertise", desc: "Our attorneys bring deep legal knowledge and practical experience across our core practice areas. We stay current with South African law to serve you effectively." },
  { icon: Heart, title: "Accessibility", desc: "Quality legal representation should not be out of reach. We offer competitive rates, clear communication and approachable service to every client." },
];

export default function AboutPage() {
  return (
    <>
      <PageHero label="About Us" title="A Firm Built on Trust" subtitle="Chesire Attorneys — a Johannesburg boutique firm committed to accessible, client-centred legal services since our founding." image="/images/about-hero.jpg" />

      {/* Firm story */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="font-[var(--font-playfair)] text-3xl font-bold text-[#1A2E52] mb-6">Our Story</h2>
          <div className="space-y-4 text-gray-600 leading-relaxed">
            <p>Chesire Attorneys was founded by <strong className="text-[#1A2E52]">Simon Chesire</strong> in 2016, bringing an extensive legal career spanning Kenya and South Africa. From our offices at Works@Market Building on Albertina Sisulu Road — a modern building within walking distance of both the Magistrate&apos;s Court and the High Court in Johannesburg — we have built a reputation for thoroughness, integrity and genuine client care.</p>
            <p>Our practice has grown organically through referrals and word of mouth — the clearest sign that our clients trust us and recommend us to those they care about. We serve individuals, companies, NGOs and government entities across a wide range of legal matters, from complex immigration cases to commercial contracts, family disputes, personal injury and estates.</p>
            <p>As a wholly black-owned firm with two black women in its ranks, we are proud of our B-BBEE credentials and our deep commitment to transformation and economic empowerment. We actively support the immigrant and diaspora communities navigating South African law.</p>
            <p>Simon Chesire is a member of the <strong className="text-[#1A2E52]">Legal Practice Council (South Africa)</strong> and the <strong className="text-[#1A2E52]">Law Society of Kenya</strong>, with the right of appearance in the High Court. Our firm is a <strong className="text-[#1A2E52]">wholly black-owned concern</strong> — and we are proud of it.</p>
          </div>
          <Link href="/contact" className="inline-flex items-center gap-2 mt-8 bg-[#C9A84C] hover:bg-[#b8963e] text-[#1A2E52] font-semibold px-6 py-3 rounded transition-colors">Get in Touch <ArrowRight size={16} /></Link>
        </div>
        <div className="rounded-2xl overflow-hidden h-96 shadow-lg">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/about-hero.jpg" alt="Chesire Attorneys" className="w-full h-full object-cover" />
        </div>
      </section>

      {/* Mission, Vision & Values */}
      <section className="bg-[#1A2E52] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="font-[var(--font-playfair)] text-3xl sm:text-4xl font-bold mb-3">Mission, Vision & Values</h2>
            <p className="text-white/60 max-w-xl mx-auto">The principles that guide every decision we make at Chesire Attorneys.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-14">
            <div className="bg-white/5 border border-white/10 rounded-2xl p-10">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-12 h-12 rounded-full bg-[#C9A84C]/20 flex items-center justify-center"><Target size={24} className="text-[#C9A84C]" /></div>
                <h3 className="font-[var(--font-playfair)] text-2xl font-bold">Our Mission</h3>
              </div>
              <p className="text-white/80 leading-relaxed text-lg">To achieve the best possible outcomes for our clients with minimal cost, delivering professional, ethical and results-driven legal services to every South African — regardless of background or circumstance.</p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-10">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-12 h-12 rounded-full bg-[#C9A84C]/20 flex items-center justify-center"><Eye size={24} className="text-[#C9A84C]" /></div>
                <h3 className="font-[var(--font-playfair)] text-2xl font-bold">Our Vision</h3>
              </div>
              <p className="text-white/80 leading-relaxed text-lg">To spread our wings to greater heights of excellence — becoming Johannesburg&apos;s most trusted boutique law firm and expanding our reach to serve communities across South Africa with accessible, high-quality legal representation.</p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="bg-white/5 border border-white/10 rounded-xl p-8 text-center">
                <div className="w-14 h-14 bg-[#C9A84C]/10 rounded-full flex items-center justify-center mx-auto mb-5"><Icon size={26} className="text-[#C9A84C]" /></div>
                <h3 className="font-[var(--font-playfair)] text-xl font-semibold mb-3">{title}</h3>
                <p className="text-white/70 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* B-BBEE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-[#F0EEE9] rounded-2xl p-10 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full bg-[#1A2E52] flex items-center justify-center"><Award size={22} className="text-[#C9A84C]" /></div>
              <h2 className="font-[var(--font-playfair)] text-2xl font-bold text-[#1A2E52]">B-BBEE Credentials</h2>
            </div>
            <p className="text-gray-600 leading-relaxed mb-4">Chesire Attorneys is a <strong className="text-[#1A2E52]">wholly black-owned concern</strong>. The practice is fully committed to broad-based black economic empowerment and the advancement of all black people, including women, in the legal profession and in the communities we serve.</p>
            <p className="text-gray-600 leading-relaxed">We believe transformation is not just a regulatory obligation — it is a core part of who we are and what we stand for as a firm rooted in the post-1994 South African story.</p>
          </div>
          <div className="space-y-4">
            {[
              { label: "Ownership", value: "100% Black-Owned" },
              { label: "Community", value: "Batho Pele — People First" },
              { label: "Pro Bono", value: "Criminal & Civil cases for those who cannot afford legal aid" },
            ].map(({ label, value }) => (
              <div key={label} className="flex gap-3 items-start">
                <span className="w-2 h-2 rounded-full bg-[#C9A84C] mt-2 shrink-0" />
                <div>
                  <p className="text-xs text-gray-400 uppercase tracking-wide font-semibold">{label}</p>
                  <p className="text-gray-700 text-sm">{value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Community */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-[var(--font-playfair)] text-3xl font-bold text-[#1A2E52] mb-6">Community Commitment</h2>
          <p className="text-gray-600 leading-relaxed mb-4">Chesire Attorneys has a long-standing commitment to the broader Johannesburg community. We are proud to serve immigrant and diaspora communities who often face unique and complex legal challenges navigating South African systems.</p>
          <p className="text-gray-600 leading-relaxed mb-4">We operate on the <strong className="text-[#1A2E52]">&ldquo;Batho Pele&rdquo;</strong> principle — <em>people first</em>. Our firm supports charities and community initiatives, and we are committed to giving back to the communities we serve.</p>
          <p className="text-gray-600 leading-relaxed">We believe access to quality legal advice should not depend on where you were born. Our team is here to help — with empathy, expertise and a genuine commitment to justice.</p>
          <Link href="/services" className="inline-flex items-center gap-2 mt-8 text-[#C9A84C] font-semibold hover:underline">See how we can help you <ArrowRight size={16} /></Link>
        </div>
      </section>
    </>
  );
}
