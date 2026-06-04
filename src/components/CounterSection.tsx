"use client";
import { useEffect, useRef, useState } from "react";
import { Shield, Users, MessageSquare, Star } from "lucide-react";

const stats = [
  { icon: Shield, end: 16, suffix: "+", label: "Years of Experience" },
  { icon: Users, end: 157, suffix: "+", label: "Clients Served" },
  { icon: Star, end: 98, suffix: "%", label: "Client Satisfaction" },
  { icon: MessageSquare, end: 50, suffix: "+", label: "New Cases Monthly" },
];

function useCounter(end: number, duration = 1800, active: boolean) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!active) return;
    let start = 0;
    const step = end / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= end) { setCount(end); clearInterval(timer); }
      else setCount(Math.floor(start));
    }, 16);
    return () => clearInterval(timer);
  }, [active, end, duration]);
  return count;
}

function Counter({ end, suffix, label, icon: Icon }: typeof stats[0]) {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);
  const count = useCounter(end, 1800, active);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setActive(true); obs.disconnect(); }
    }, { threshold: 0.1, rootMargin: "0px 0px -50px 0px" });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <div ref={ref} className="flex flex-col items-center text-center gap-2">
      <div className="w-14 h-14 rounded-full bg-[#C9A84C]/10 flex items-center justify-center mb-2">
        <Icon size={26} className="text-[#C9A84C]" />
      </div>
      <p className="font-[var(--font-playfair)] text-4xl font-bold text-white">
        {count}{suffix}
      </p>
      <p className="text-white/70 text-sm uppercase tracking-wide">{label}</p>
    </div>
  );
}

export default function CounterSection() {
  return (
    <section className="bg-[#1A2E52] py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-[var(--font-playfair)] text-3xl sm:text-4xl font-bold text-white mb-3">
            Why Choose Chesire Attorneys?
          </h2>
          <p className="text-white/60 max-w-xl mx-auto">
            A trusted Johannesburg law firm with a proven track record of delivering results.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
          {stats.map((s) => <Counter key={s.label} {...s} />)}
        </div>
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { title: "Expert Legal Services", desc: "Quality advice across all areas of South African law from experienced attorneys." },
            { title: "Free Consultation", desc: "We offer free initial legal consultations — because access to legal advice matters." },
            { title: "Strict Confidentiality", desc: "Every client matter is handled with complete professional confidentiality." },
            { title: "Timely Resolution", desc: "Regular communication and prompt action to resolve your matter efficiently." },
          ].map((item) => (
            <div key={item.title} className="bg-white/5 border border-white/10 rounded-xl p-6 text-center">
              <h3 className="font-[var(--font-playfair)] text-base font-semibold text-[#C9A84C] mb-2">{item.title}</h3>
              <p className="text-white/60 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
