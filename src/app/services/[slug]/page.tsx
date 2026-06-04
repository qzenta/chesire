import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ArrowRight, CheckCircle } from "lucide-react";
import PageHero from "@/components/PageHero";
import { services } from "@/data/services";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) return {};
  return {
    title: `${service.title} | Chesire Attorneys Johannesburg`,
    description: service.desc.slice(0, 155),
  };
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) notFound();

  const { icon: Icon, title, desc, bullets } = service;

  const currentIndex = services.findIndex((s) => s.slug === slug);
  const prev = services[currentIndex - 1] ?? null;
  const next = services[currentIndex + 1] ?? null;

  return (
    <>
      <PageHero
        label="Our Services"
        title={title}
        subtitle={desc.split(".")[0] + "."}
        image="/images/services-hero.jpg"
      />

      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <Link href="/services" className="inline-flex items-center gap-2 text-sm text-[#C9A84C] font-medium hover:underline">
          <ArrowLeft size={14} /> All Services
        </Link>
      </div>

      {/* Main content */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

          {/* Body */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-[#1A2E52] rounded-xl flex items-center justify-center shrink-0">
                <Icon size={30} className="text-[#C9A84C]" />
              </div>
              <h2 className="font-[var(--font-playfair)] text-3xl font-bold text-[#1A2E52]">{title}</h2>
            </div>
            <p className="text-gray-600 leading-relaxed text-lg mb-10">{desc}</p>

            <h3 className="font-[var(--font-playfair)] text-xl font-bold text-[#1A2E52] mb-5">We Can Assist With</h3>
            <ul className="space-y-3 mb-10">
              {bullets.map((b) => (
                <li key={b} className="flex items-start gap-3 text-gray-700">
                  <CheckCircle size={18} className="text-[#C9A84C] mt-0.5 shrink-0" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>

            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-[#C9A84C] hover:bg-[#b8963e] text-[#1A2E52] font-bold px-7 py-4 rounded transition-colors"
            >
              Enquire About This Service <ArrowRight size={16} />
            </Link>
          </div>

          {/* Sidebar */}
          <aside className="space-y-6">
            {/* All services list */}
            <div className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm">
              <h4 className="font-[var(--font-playfair)] text-base font-bold text-[#1A2E52] mb-4">All Practice Areas</h4>
              <ul className="space-y-1">
                {services.map((s) => (
                  <li key={s.slug}>
                    <Link
                      href={`/services/${s.slug}`}
                      className={`block px-3 py-2 rounded text-sm transition-colors ${
                        s.slug === slug
                          ? "bg-[#1A2E52] text-white font-semibold"
                          : "text-gray-600 hover:bg-[#F0EEE9] hover:text-[#1A2E52]"
                      }`}
                    >
                      {s.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA card */}
            <div className="bg-[#1A2E52] rounded-xl p-6 text-white">
              <h4 className="font-[var(--font-playfair)] text-lg font-bold mb-3">Speak to an Attorney</h4>
              <p className="text-white/70 text-sm leading-relaxed mb-5">
                Contact us to discuss your matter with one of our attorneys and understand your options.
              </p>
              <Link
                href="/contact"
                className="block text-center bg-[#C9A84C] hover:bg-[#b8963e] text-[#1A2E52] font-bold px-5 py-3 rounded text-sm transition-colors"
              >
                Book a Consultation
              </Link>
            </div>
          </aside>
        </div>
      </section>

      {/* Prev / Next navigation */}
      {(prev || next) && (
        <section className="border-t border-gray-100 bg-[#F0EEE9]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex justify-between gap-4">
            {prev ? (
              <Link href={`/services/${prev.slug}`} className="group flex items-center gap-3 text-sm text-gray-600 hover:text-[#C9A84C] transition-colors">
                <ArrowLeft size={16} className="shrink-0" />
                <span>
                  <span className="block text-xs uppercase tracking-wide text-gray-400">Previous</span>
                  <span className="font-semibold text-[#1A2E52] group-hover:text-[#C9A84C] transition-colors">{prev.title}</span>
                </span>
              </Link>
            ) : <div />}
            {next ? (
              <Link href={`/services/${next.slug}`} className="group flex items-center gap-3 text-sm text-right ml-auto hover:text-[#C9A84C] transition-colors">
                <span>
                  <span className="block text-xs uppercase tracking-wide text-gray-400 text-right">Next</span>
                  <span className="font-semibold text-[#1A2E52] group-hover:text-[#C9A84C] transition-colors">{next.title}</span>
                </span>
                <ArrowRight size={16} className="shrink-0" />
              </Link>
            ) : <div />}
          </div>
        </section>
      )}
    </>
  );
}
