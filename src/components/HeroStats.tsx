"use client";
import { useEffect, useRef, useState } from "react";

const stats = [
  { value: 12, suffix: "+", label: "Years of Experience" },
  { value: 500, suffix: "+", label: "Clients Served" },
  { value: 98, suffix: "%", label: "Client Satisfaction" },
  { value: 15, suffix: "+", label: "New Cases Monthly" },
];

function useCounter(end: number, active: boolean) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!active) return;
    let start = 0;
    const duration = 1600;
    const step = end / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= end) { setCount(end); clearInterval(timer); }
      else setCount(Math.floor(start));
    }, 16);
    return () => clearInterval(timer);
  }, [active, end]);
  return count;
}

function StatItem({ value, suffix, label, active, isLast }: typeof stats[0] & { active: boolean; isLast: boolean }) {
  const count = useCounter(value, active);
  return (
    <div className={`flex-1 flex flex-col items-center justify-center py-6 px-4 relative ${!isLast ? "after:absolute after:right-0 after:top-1/4 after:h-1/2 after:w-px after:bg-white/15" : ""}`}>
      <p className="font-[var(--font-playfair)] text-3xl sm:text-4xl font-bold text-[#C9A84C] leading-none">
        {count}{suffix}
      </p>
      <p className="text-white/70 text-xs sm:text-sm uppercase tracking-widest mt-1.5 text-center">{label}</p>
    </div>
  );
}

export default function HeroStats() {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setActive(true); obs.disconnect(); }
    }, { threshold: 0.2 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <div className="relative z-20 px-4 sm:px-6 lg:px-8 -mt-10">
      <div
        ref={ref}
        className="max-w-5xl mx-auto bg-[#1A2E52] rounded-2xl shadow-2xl border border-white/5 flex divide-x divide-white/10 overflow-hidden"
      >
        {stats.map((s, i) => (
          <StatItem key={s.label} {...s} active={active} isLast={i === stats.length - 1} />
        ))}
      </div>
    </div>
  );
}
