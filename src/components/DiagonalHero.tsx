"use client";
import Link from "next/link";
import { useEffect, useRef } from "react";

const calendlyUrl = process.env.NEXT_PUBLIC_CALENDLY_URL ?? "https://calendly.com/chesireattorneys";

export default function DiagonalHero() {
  const bgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (bgRef.current) {
        const scrollY = window.scrollY;
        bgRef.current.style.transform = `translateY(${scrollY * 0.35}px)`;
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative h-[75vh] min-h-[520px] max-h-[760px] overflow-hidden">
      {/* Parallax background */}
      <div
        ref={bgRef}
        className="absolute inset-0 scale-110 bg-cover bg-center will-change-transform"
        style={{ backgroundImage: "url('/images/hero-bg.jpg')" }}
      />
      {/* Dark base overlay */}
      <div className="absolute inset-0 bg-[#0a1628]/60" />

      {/* Three diagonal panels */}
      <div className="absolute inset-0 flex">
        {/* Panel 1 — navy, left */}
        <div
          className="absolute inset-0 bg-[#1A2E52]/80"
          style={{ clipPath: "polygon(0 0, 52% 0, 38% 100%, 0 100%)" }}
        />
        {/* Panel 2 — gold accent strip */}
        <div
          className="absolute inset-0 bg-[#C9A84C]/20"
          style={{ clipPath: "polygon(37% 0, 55% 0, 41% 100%, 24% 100%)" }}
        />
        {/* Panel 3 — navy, right */}
        <div
          className="absolute inset-0 bg-[#1A2E52]/70"
          style={{ clipPath: "polygon(62% 0, 100% 0, 100% 100%, 48% 100%)" }}
        />
      </div>

      {/* Content */}
      <div className="relative h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-2xl">
            <p className="text-[#C9A84C] text-sm font-semibold tracking-widest uppercase mb-4">
              Boutique Law Firm — Johannesburg
            </p>
            <h1 className="font-[var(--font-playfair)] text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-5">
              Expert Legal Guidance
              <span className="block text-[#C9A84C]">You Can Trust</span>
            </h1>
            <p className="text-white/80 text-lg max-w-xl mb-8 leading-relaxed">
              Chesire Attorneys — a Johannesburg boutique firm delivering accessible, client‑centred legal services in immigration, litigation, family law and beyond.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={calendlyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#C9A84C] hover:bg-[#b8963e] text-[#1A2E52] font-bold px-8 py-4 rounded text-base transition-colors text-center"
              >
                Book a Consultation
              </a>
              <Link
                href="/services"
                className="border border-white/50 hover:border-white text-white font-semibold px-8 py-4 rounded text-base transition-colors text-center"
              >
                Our Services
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 inset-x-0 h-16 bg-gradient-to-t from-[#F9F8F6] to-transparent" />
    </section>
  );
}
