"use client";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { ArrowRight, Scale, Users, Globe } from "lucide-react";

function useReveal() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setVisible(true); obs.disconnect(); }
    }, { threshold: 0.15 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return { ref, visible };
}

const highlights = [
  { icon: Globe, label: "Immigration specialists with 12+ years of expertise" },
  { icon: Scale, label: "High Court right of appearance — serving clients across Johannesburg and Alberton" },
  { icon: Users, label: "Wholly black-owned firm — B-BBEE Level 1 contributor" },
];

export default function FirmSnapshot() {
  const left = useReveal();
  const right = useReveal();

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
      {/* Left — text cascades in from left */}
      <div
        ref={left.ref}
        className="transition-all duration-700 ease-out"
        style={{
          opacity: left.visible ? 1 : 0,
          transform: left.visible ? "translateX(0)" : "translateX(-48px)",
        }}
      >
        <p className="text-[#C9A84C] text-sm font-semibold tracking-widest uppercase mb-4">About Our Firm</p>
        <h2 className="font-[var(--font-playfair)] text-3xl sm:text-4xl font-bold text-[#1A2E52] mb-6 leading-tight">
          12 Years of Legal Excellence — Rooted in Johannesburg
        </h2>
        <p className="text-gray-600 leading-relaxed mb-5 text-base">
          Chesire Attorneys was founded by Simon Chesire in 2016, bringing an extensive career spanning Kenya and South Africa. From our offices at <strong className="text-[#1A2E52]">Works@Market Building</strong> — steps from the Johannesburg Magistrate&apos;s Court and High Court — we deliver practical, accessible and results-driven legal services.
        </p>
        <p className="text-gray-600 leading-relaxed mb-8 text-base">
          We serve individuals, families, NGOs, State Owned Enterprises and private companies. Our practice is built on referrals — the clearest testament to the trust our clients place in us.
        </p>
        <div className="space-y-3 mb-8">
          {highlights.map(({ icon: Icon, label }) => (
            <div key={label} className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-[#1A2E52] flex items-center justify-center shrink-0">
                <Icon size={16} className="text-[#C9A84C]" />
              </div>
              <p className="text-gray-700 text-sm">{label}</p>
            </div>
          ))}
        </div>
        <Link
          href="/about"
          className="inline-flex items-center gap-2 bg-[#1A2E52] hover:bg-[#0f1e38] text-white font-semibold px-6 py-3 rounded transition-colors"
        >
          Our Full Story <ArrowRight size={16} />
        </Link>
      </div>

      {/* Right — image cascades in from right */}
      <div
        ref={right.ref}
        className="transition-all duration-700 ease-out delay-200 rounded-2xl overflow-hidden shadow-xl h-[460px]"
        style={{
          opacity: right.visible ? 1 : 0,
          transform: right.visible ? "translateX(0)" : "translateX(48px)",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/about-hero.jpg"
          alt="Chesire Attorneys offices"
          className="w-full h-full object-cover"
        />
      </div>
    </section>
  );
}
