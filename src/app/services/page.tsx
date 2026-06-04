import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import PageHero from "@/components/PageHero";
import { services } from "@/data/services";

export const metadata: Metadata = {
  title: "Legal Services | Immigration, Litigation, Family Law — Chesire Attorneys",
  description: "Expert legal services in immigration, civil litigation, family law, property & conveyancing, labour and wills & estates from Chesire Attorneys Johannesburg.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero label="Our Services" title="Expert Legal Services in Johannesburg" subtitle="From immigration to estates, Chesire Attorneys provides practical, personalised legal advice across seven core practice areas." image="/images/services-hero.jpg" />

      {/* Intro */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
        <p className="text-gray-600 leading-relaxed text-lg">
          Every matter at Chesire Attorneys is handled with precision, integrity and a genuine commitment to the client. Whether you are an individual facing a personal legal challenge or a business navigating complex regulatory requirements, we are here to guide you.
        </p>
      </section>

      {/* Service cards grid — each links to its own page */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map(({ slug, icon: Icon, title, desc }) => (
            <Link
              key={slug}
              href={`/services/${slug}`}
              className="bg-white border border-gray-100 rounded-xl p-7 hover:shadow-md hover:border-[#C9A84C] transition-all group flex flex-col"
            >
              <div className="w-14 h-14 bg-[#1A2E52] rounded-xl flex items-center justify-center mb-5">
                <Icon size={26} className="text-[#C9A84C]" />
              </div>
              <h2 className="font-[var(--font-playfair)] text-xl font-bold text-[#1A2E52] mb-3">{title}</h2>
              <p className="text-gray-600 text-sm leading-relaxed flex-1 line-clamp-3">{desc}</p>
              <span className="inline-flex items-center gap-1 text-[#C9A84C] text-sm font-semibold mt-4 group-hover:gap-2 transition-all">
                Learn more <ArrowRight size={14} />
              </span>
            </Link>
          ))}
        </div>
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
