"use client";
import { useEffect, useState, useCallback } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    quote: "Chesire Attorneys handled my immigration matter with professionalism and care. I highly recommend them to anyone navigating the South African visa system.",
    author: "Client",
    matter: "Immigration Matter",
  },
  {
    quote: "The team guided me through my divorce with sensitivity and expertise. I felt supported throughout a very difficult time.",
    author: "Client",
    matter: "Family Law Matter",
  },
  {
    quote: "Simon and his team were thorough, responsive and always kept me informed. My commercial dispute was resolved efficiently and professionally.",
    author: "Client",
    matter: "Commercial Law Matter",
  },
  {
    quote: "I had been struggling with my work visa application for months before finding Chesire Attorneys. They sorted everything out quickly and correctly.",
    author: "Client",
    matter: "Immigration — Work Visa",
  },
];

export default function TestimonialsCarousel() {
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [direction, setDirection] = useState<"left" | "right">("right");

  const goTo = useCallback((index: number, dir: "left" | "right") => {
    if (animating) return;
    setDirection(dir);
    setAnimating(true);
    setTimeout(() => {
      setCurrent(index);
      setAnimating(false);
    }, 350);
  }, [animating]);

  const next = useCallback(() => {
    goTo((current + 1) % testimonials.length, "right");
  }, [current, goTo]);

  const prev = useCallback(() => {
    goTo((current - 1 + testimonials.length) % testimonials.length, "left");
  }, [current, goTo]);

  // Auto-advance every 5.5s
  useEffect(() => {
    const timer = setInterval(next, 5500);
    return () => clearInterval(timer);
  }, [next]);

  const t = testimonials[current];
  const slideStyle: React.CSSProperties = {
    opacity: animating ? 0 : 1,
    transform: animating
      ? `translateX(${direction === "right" ? "-24px" : "24px"})`
      : "translateX(0)",
    transition: "opacity 0.35s ease, transform 0.35s ease",
  };

  return (
    <section className="bg-[#1A2E52] py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-[#C9A84C] text-sm font-semibold tracking-widest uppercase mb-3">Client Feedback</p>
          <h2 className="font-[var(--font-playfair)] text-3xl sm:text-4xl font-bold text-white mb-3">
            What Our Clients Say
          </h2>
          <p className="text-white/60 max-w-xl mx-auto">Real experiences from clients we have been privileged to assist.</p>
        </div>

        {/* Card */}
        <div className="relative">
          <div style={slideStyle} className="bg-white/5 border border-white/10 rounded-2xl p-8 sm:p-12 text-center min-h-[220px] flex flex-col items-center justify-center">
            {/* Stars */}
            <div className="flex gap-1 justify-center mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={20} className="text-[#C9A84C] fill-[#C9A84C]" />
              ))}
            </div>
            {/* Quote */}
            <p className="text-white/90 text-lg sm:text-xl leading-relaxed italic mb-8 max-w-2xl">
              &ldquo;{t.quote}&rdquo;
            </p>
            {/* Author */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#C9A84C]/20 flex items-center justify-center text-[#C9A84C] font-bold">
                C
              </div>
              <div className="text-left">
                <p className="text-white font-semibold text-sm">{t.author}</p>
                <p className="text-[#C9A84C] text-xs">{t.matter}</p>
              </div>
            </div>
          </div>

          {/* Prev / Next arrows */}
          <button
            onClick={prev}
            aria-label="Previous testimonial"
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-5 w-10 h-10 rounded-full bg-white/10 hover:bg-[#C9A84C] text-white flex items-center justify-center transition-colors"
          >
            <ChevronLeft size={18} />
          </button>
          <button
            onClick={next}
            aria-label="Next testimonial"
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-5 w-10 h-10 rounded-full bg-white/10 hover:bg-[#C9A84C] text-white flex items-center justify-center transition-colors"
          >
            <ChevronRight size={18} />
          </button>
        </div>

        {/* Dot indicators */}
        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i, i > current ? "right" : "left")}
              aria-label={`Testimonial ${i + 1}`}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === current ? "w-8 bg-[#C9A84C]" : "w-2.5 bg-white/30 hover:bg-white/60"
              }`}
            />
          ))}
        </div>

        {/* Counter */}
        <p className="text-center text-white/30 text-xs mt-4">
          {current + 1} / {testimonials.length}
        </p>
      </div>
    </section>
  );
}
