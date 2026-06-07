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
    <section className="bg-white border-y border-gray-100 py-10 overflow-hidden">
      <p className="text-center text-xs text-gray-400 uppercase tracking-widest font-semibold mb-5">
        Regulatory Bodies &amp; Legal Partners
      </p>
      <div className="overflow-x-hidden">
        {/* Single animating wrapper containing two identical sets — translates -50% = exactly one set width */}
        <div className="flex animate-marquee gap-8 w-max">
          {[0, 1].map((set) => (
            <div key={set} className="flex gap-8 shrink-0" aria-hidden={set === 1}>
              {partners.map((p) => (
                <div
                  key={p.abbr + set}
                  title={p.name}
                  className="flex items-center justify-center bg-white border border-gray-100 rounded-2xl w-40 h-40 shrink-0 shadow-sm hover:shadow-md transition-shadow p-4"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={p.logo}
                    alt={p.name}
                    className="w-full h-full object-contain"
                    onError={(e) => {
                      const target = e.currentTarget;
                      target.style.display = "none";
                      const sibling = target.nextElementSibling as HTMLElement | null;
                      if (sibling) sibling.style.display = "flex";
                    }}
                  />
                  <span
                    className="w-20 h-20 rounded-full bg-[#1A2E52] text-white text-lg font-bold items-center justify-center hidden"
                    aria-hidden="true"
                  >
                    {p.abbr.slice(0, 2)}
                  </span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
