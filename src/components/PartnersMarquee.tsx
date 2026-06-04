const partners = [
  { name: "Legal Practice Council", abbr: "LPC" },
  { name: "Law Society of Kenya", abbr: "LSK" },
  { name: "Commission for Conciliation, Mediation & Arbitration", abbr: "CCMA" },
  { name: "Department of Home Affairs", abbr: "DHA" },
  { name: "VFS Global", abbr: "VFS" },
  { name: "Road Accident Fund", abbr: "RAF" },
  { name: "South African Human Rights Commission", abbr: "SAHRC" },
  { name: "Law Society of South Africa", abbr: "LSSA" },
  { name: "National Prosecuting Authority", abbr: "NPA" },
  { name: "Legal Aid South Africa", abbr: "LASA" },
];

export default function PartnersMarquee() {
  return (
    <section className="bg-white border-y border-gray-100 py-6 overflow-hidden">
      <p className="text-center text-xs text-gray-400 uppercase tracking-widest font-semibold mb-5">
        Regulatory Bodies &amp; Legal Partners
      </p>
      <div className="relative flex overflow-x-hidden">
        {/* Two identical sets for seamless loop */}
        {[0, 1].map((set) => (
          <div
            key={set}
            className="flex shrink-0 animate-marquee gap-10 pr-10"
            aria-hidden={set === 1}
          >
            {partners.map((p) => (
              <div
                key={p.abbr + set}
                className="flex items-center gap-3 bg-[#F0EEE9] rounded-lg px-5 py-3 shrink-0"
              >
                <span className="w-9 h-9 rounded-full bg-[#1A2E52] text-white text-xs font-bold flex items-center justify-center shrink-0">
                  {p.abbr.slice(0, 2)}
                </span>
                <span className="text-[#1A2E52] text-sm font-medium whitespace-nowrap">{p.name}</span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
