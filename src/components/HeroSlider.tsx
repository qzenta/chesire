"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

const slides = [
  {
    bg: "/images/hero-bg.jpg",
    tag: "Boutique Law Firm — Johannesburg",
    heading: "Expert Legal Guidance",
    highlight: "You Can Trust",
    sub: "Chesire Attorneys delivers accessible, client‑centred legal services in immigration, litigation, family law and beyond.",
  },
  {
    bg: "/images/hero-panel-1.jpg",
    tag: "Immigration Law Specialists",
    heading: "Navigating South African",
    highlight: "Immigration Law",
    sub: "From work visas and permanent residence to VFS applications and High Court challenges — we guide you every step of the way.",
  },
  {
    bg: "/images/hero-panel-2.jpg",
    tag: "Family & Commercial Law",
    heading: "Protecting What",
    highlight: "Matters Most",
    sub: "Whether it is your family, your business or your rights — Chesire Attorneys stands with you with over 20 years of legal expertise.",
  },
];

const calendlyUrl = process.env.NEXT_PUBLIC_CALENDLY_URL ?? "https://calendly.com/chesireattorneys";

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setAnimating(true);
      setTimeout(() => {
        setCurrent((prev) => (prev + 1) % slides.length);
        setAnimating(false);
      }, 400);
    }, 5500);
    return () => clearInterval(timer);
  }, []);

  const goTo = (i: number) => {
    if (i === current) return;
    setAnimating(true);
    setTimeout(() => { setCurrent(i); setAnimating(false); }, 300);
  };

  const slide = slides[current];

  return (
    <section className="relative h-[80vh] min-h-[560px] max-h-[800px] overflow-hidden">
      {/* Background images — crossfade */}
      {slides.map((s, i) => (
        <div
          key={i}
          className="absolute inset-0 bg-cover bg-center scale-105 transition-opacity duration-700"
          style={{
            backgroundImage: `url('${s.bg}')`,
            opacity: i === current ? 1 : 0,
          }}
        />
      ))}

      {/* Overlays */}
      <div className="absolute inset-0 bg-[#0a1628]/65" />
      <div className="absolute inset-0 bg-[#1A2E52]/50" style={{ clipPath: "polygon(0 0, 52% 0, 38% 100%, 0 100%)" }} />
      <div className="absolute inset-0 bg-[#C9A84C]/15" style={{ clipPath: "polygon(37% 0, 55% 0, 41% 100%, 24% 100%)" }} />

      {/* Content */}
      <div className="relative h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div
            className="max-w-2xl transition-all duration-400"
            style={{ opacity: animating ? 0 : 1, transform: animating ? "translateY(12px)" : "translateY(0)" }}
          >
            <p className="text-[#C9A84C] text-sm font-semibold tracking-widest uppercase mb-4">
              {slide.tag}
            </p>
            <h1 className="font-[var(--font-playfair)] text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-5">
              {slide.heading}
              <span className="block text-[#C9A84C]">{slide.highlight}</span>
            </h1>
            <p className="text-white/80 text-lg max-w-xl mb-8 leading-relaxed">{slide.sub}</p>
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

      {/* Slide indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2.5 z-10">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            aria-label={`Slide ${i + 1}`}
            className={`h-1.5 rounded-full transition-all duration-300 ${i === current ? "w-8 bg-[#C9A84C]" : "w-2.5 bg-white/40 hover:bg-white/70"}`}
          />
        ))}
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 inset-x-0 h-16 bg-gradient-to-t from-[#F9F8F6] to-transparent" />
    </section>
  );
}
