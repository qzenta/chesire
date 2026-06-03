import Link from "next/link";
import { Shield, BookOpen, Heart, ArrowRight } from "lucide-react";

const values = [
  {
    icon: Shield,
    title: "Integrity",
    desc: "We act with honesty and transparency in every matter we handle. Our clients trust us with their most sensitive legal issues — that trust is never taken for granted.",
  },
  {
    icon: BookOpen,
    title: "Expertise",
    desc: "Our attorneys bring deep legal knowledge and practical experience across our core practice areas. We stay current with South African law to serve you effectively.",
  },
  {
    icon: Heart,
    title: "Accessibility",
    desc: "Quality legal representation should not be out of reach. We offer competitive rates, clear communication and approachable service to every client.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Page hero */}
      <section className="bg-[#1A2E52] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-[#C9A84C] text-sm font-semibold tracking-widest uppercase mb-3">About Us</p>
          <h1 className="font-[var(--font-playfair)] text-4xl sm:text-5xl font-bold mb-4">
            A Firm Built on Trust
          </h1>
          <p className="text-white/70 text-lg max-w-2xl">
            Chesire Attorneys is a boutique Johannesburg law firm with a commitment to accessible, client-centred legal services.
          </p>
        </div>
      </section>

      {/* Firm story */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="font-[var(--font-playfair)] text-3xl font-bold text-[#1A2E52] mb-6">Our Story</h2>
          <div className="space-y-4 text-gray-600 leading-relaxed">
            <p>
              <strong className="text-[#1A2E52]">[Placeholder — client to provide]</strong> Chesire Attorneys was founded with a clear purpose: to provide high-quality, approachable legal services to individuals and businesses in Johannesburg and across South Africa. From our offices at Works@Market City Centre, we have built a reputation for thoroughness, integrity and genuine client care.
            </p>
            <p>
              Our practice has grown organically through referrals and word of mouth — the clearest sign that our clients trust us and recommend us to those they care about. We handle a wide range of legal matters, from complex immigration cases to family disputes, property transactions and estates.
            </p>
            <p>
              We are proud of our connection to the Johannesburg community, including our work supporting immigrant and diaspora communities navigating South African law. Every client deserves an attorney who listens, understands and fights for their best outcome.
            </p>
          </div>
          <Link href="/contact" className="inline-flex items-center gap-2 mt-8 bg-[#C9A84C] hover:bg-[#b8963e] text-[#1A2E52] font-semibold px-6 py-3 rounded transition-colors">
            Get in Touch <ArrowRight size={16} />
          </Link>
        </div>
        <div className="bg-[#1A2E52]/5 rounded-2xl overflow-hidden h-80 flex items-center justify-center">
          {/* Placeholder for About page image — replace with Google Stitch output */}
          <span className="text-[#1A2E52]/20 font-[var(--font-playfair)] text-2xl text-center px-8">
            [About page image — attorneys in modern Joburg office]
          </span>
        </div>
      </section>

      {/* Values */}
      <section className="bg-[#1A2E52] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-[var(--font-playfair)] text-3xl sm:text-4xl font-bold mb-3">Our Values</h2>
            <p className="text-white/70 max-w-xl mx-auto">
              Three pillars that guide everything we do at Chesire Attorneys.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="bg-white/5 border border-white/10 rounded-xl p-8 text-center">
                <div className="w-14 h-14 bg-[#C9A84C]/10 rounded-full flex items-center justify-center mx-auto mb-5">
                  <Icon size={26} className="text-[#C9A84C]" />
                </div>
                <h3 className="font-[var(--font-playfair)] text-xl font-semibold mb-3">{title}</h3>
                <p className="text-white/70 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Community */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-[var(--font-playfair)] text-3xl font-bold text-[#1A2E52] mb-6">
            Community Commitment
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Chesire Attorneys has a long-standing commitment to the broader Johannesburg community. We are proud to serve immigrant and diaspora communities who often face unique and complex legal challenges navigating South African systems.
          </p>
          <p className="text-gray-600 leading-relaxed">
            We believe access to quality legal advice should not depend on where you were born or how long you have been in South Africa. Our team is here to help — with empathy, expertise and a genuine commitment to justice.
          </p>
          <Link href="/services" className="inline-flex items-center gap-2 mt-8 text-[#C9A84C] font-semibold hover:underline">
            See how we can help you <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
