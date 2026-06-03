import Link from "next/link";
import { MapPin, ArrowRight, Phone } from "lucide-react";
import PageHero from "@/components/PageHero";

const locations = [
  { id: "randburg", name: "Randburg", img: "/images/locations/randburg.jpg", desc: "Serving clients in Randburg and the surrounding northern suburbs. Convenient access from Malibongwe Drive and Jan Smuts Avenue." },
  { id: "southgate", name: "Southgate", img: "/images/locations/southgate.jpg", desc: "Legal services for clients in Southgate, Ridgeway, Mulbarton and surrounding southern Johannesburg communities." },
  { id: "boksburg", name: "Boksburg", img: "/images/locations/boksburg.jpg", desc: "Assisting clients in Boksburg, Benoni and the East Rand with immigration, litigation and family law matters." },
  { id: "germiston", name: "Germiston", img: "/images/locations/germiston.jpg", desc: "Serving Germiston, Ekurhuleni and surrounding areas. We handle all legal matters for East Rand residents." },
  { id: "edenvale", name: "Edenvale", img: "/images/locations/edenvale.jpg", desc: "Clients in Edenvale, Bedfordview and Modderfontein receive the same expert legal service as our city centre clients." },
  { id: "northcliff", name: "Northcliff", img: "/images/locations/northcliff.jpg", desc: "Serving Northcliff, Melville, Westdene and the western suburbs of Johannesburg." },
  { id: "ferndale", name: "Ferndale", img: "/images/locations/ferndale.jpg", desc: "Legal assistance for clients in Ferndale, Robindale and surrounding Randburg suburbs." },
  { id: "cresta", name: "Cresta", img: "/images/locations/cresta.jpg", desc: "Serving the Cresta, Blackheath and Northriding corridor. Easily accessible from Beyers Naude Drive." },
  { id: "alberton", name: "Alberton", img: "/images/locations/alberton.jpg", desc: "Chesire Attorneys serves clients in Alberton, New Redruth and the greater Alberton municipal area." },
  { id: "the-glen", name: "The Glen", img: "/images/locations/the-glen.jpg", desc: "Assisting clients in The Glen, Glenvista, Bassonia and surrounding southern Joburg suburbs." },
];

export default function LocationsPage() {
  return (
    <>
      <PageHero
        label="Our Locations"
        title="Serving Greater Johannesburg"
        subtitle="Chesire Attorneys is based in the Johannesburg CBD but serves clients across the greater Joburg metropolitan area — from Randburg in the north to The Glen in the south."
        image="/images/contact-hero.jpg"
      />

      {/* Intro */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
        <p className="text-gray-600 leading-relaxed text-lg">
          Our offices at <strong className="text-[#1A2E52]">83 Albertina Sisulu Rd, Works@Market City Centre, Johannesburg</strong> are centrally located — walking distance from the Johannesburg Magistrates&apos; Court and High Court, with covered parking provided at no cost to clients.
        </p>
        <p className="text-gray-600 leading-relaxed mt-4">
          We serve clients from across Greater Johannesburg. Whether you are in the northern suburbs, East Rand or South Joburg, contact us to arrange a consultation.
        </p>
      </section>

      {/* Location grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {locations.map((loc) => (
            <div
              key={loc.id}
              id={loc.id}
              className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 group hover:shadow-md hover:border-[#C9A84C] transition-all"
            >
              <div className="h-48 overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={loc.img}
                  alt={loc.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <MapPin size={16} className="text-[#C9A84C]" />
                  <h2 className="font-[var(--font-playfair)] text-lg font-bold text-[#1A2E52]">{loc.name}</h2>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">{loc.desc}</p>
                <Link href="/contact" className="inline-flex items-center gap-1 text-[#C9A84C] text-sm font-medium hover:underline">
                  Enquire from {loc.name} <ArrowRight size={13} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#1A2E52] py-16">
        <div className="max-w-3xl mx-auto px-4 text-center text-white">
          <Phone size={32} className="text-[#C9A84C] mx-auto mb-4" />
          <h2 className="font-[var(--font-playfair)] text-3xl font-bold mb-4">Not Sure How to Reach Us?</h2>
          <p className="text-white/70 mb-8">Call us on <a href="tel:0113330389" className="text-[#C9A84C] font-semibold">011 333 0389</a>, WhatsApp <a href="https://wa.me/27824078095" className="text-[#C9A84C] font-semibold">082 407 8095</a>, or use the booking form below.</p>
          <Link href="/contact" className="inline-block bg-[#C9A84C] hover:bg-[#b8963e] text-[#1A2E52] font-bold px-8 py-4 rounded transition-colors">
            Book a Consultation
          </Link>
        </div>
      </section>
    </>
  );
}
