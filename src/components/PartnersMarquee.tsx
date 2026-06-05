"use client";

const partners = [
  { name: "Legal Practice Council", abbr: "LPC", logo: "/images/partners/lpc.png" },
  { name: "Law Society of Kenya", abbr: "LSK", logo: "/images/partners/lsk.png" },
  { name: "Commission for Conciliation, Mediation & Arbitration", abbr: "CCMA", logo: "/images/partners/ccma.jpg" },
  { name: "Department of Home Affairs", abbr: "DHA", logo: "/images/partners/dha.jpg" },
  { name: "VFS Global", abbr: "VFS", logo: "/images/partners/vfs.png" },
  { name: "Road Accident Fund", abbr: "RAF", logo: "/images/partners/raf.png" },
  { name: "South African Human Rights Commission", abbr: "SAHRC", logo: "/images/partners/sahrc.png" },
  { name: "Law Society of South Africa", abbr: "LSSA", logo: "/images/partners/lssa.png" },
  { name: "National Prosecuting Authority", abbr: "NPA", logo: "/images/partners/npa.png" },
  { name: "Legal Aid South Africa", abbr: "LASA", logo: "/images/partners/lasa.png" },
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
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={p.logo}
                  alt={p.name}
                  className="w-9 h-9 object-contain rounded"
                  onError={(e) => {
                    // Fallback to initials badge if image missing
                    const target = e.currentTarget;
                    target.style.display = "none";
                    const sibling = target.nextElementSibling as HTMLElement | null;
                    if (sibling) sibling.style.display = "flex";
                  }}
                />
                {/* Fallback initials badge — hidden when logo loads */}
                <span
                  className="w-9 h-9 rounded-full bg-[#1A2E52] text-white text-xs font-bold items-center justify-center shrink-0 hidden"
                  aria-hidden="true"
                >
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
