import Link from "next/link";
import Image from "next/image";
import { Scale, Globe, Users, Home, Briefcase, FileText, Star, ArrowRight, Calendar, Shield } from "lucide-react";
import HeroSlider from "@/components/HeroSlider";
import CounterSection from "@/components/CounterSection";
import PartnersMarquee from "@/components/PartnersMarquee";

const practiceAreas = [
  { icon: Globe, title: "Immigration Law", desc: "Visas, permits, asylum and citizenship matters for foreign nationals in South Africa." },
  { icon: Scale, title: "Civil Litigation", desc: "Representing clients in disputes, debt recovery, and High Court matters." },
  { icon: Users, title: "Family Law & Divorce", desc: "Divorce, maintenance, custody, domestic violence and adoption proceedings." },
  { icon: Home, title: "Property & Conveyancing", desc: "Transfers, bond registrations, sectional title and property disputes." },
  { icon: Briefcase, title: "Labour & Employment", desc: "CCMA disputes, unfair dismissal, employment contracts and workplace compliance." },
  { icon: FileText, title: "Wills, Estates & Trusts", desc: "Drafting wills, deceased estate administration and trust formation." },
];

const testimonials = [
  { quote: "Chesire Attorneys handled my immigration matter with professionalism and care. I highly recommend them to anyone navigating the South African visa system.", author: "Client — Immigration Matter" },
  { quote: "The team guided me through my divorce with sensitivity and expertise. I felt supported throughout a very difficult time.", author: "Client — Family Law Matter" },
  { quote: "Excellent service and clear communication. My property transfer was handled efficiently and without any surprises.", author: "Client — Property & Conveyancing" },
];

const articles = [
  { title: "Understanding Your Rights as a Foreign National in South Africa", category: "Immigration", excerpt: "Navigating South African immigration law can be complex. Here is what every foreign national should know.", date: "May 2024", img: "/images/article1.jpg" },
  { title: "What to Do If You Are Served with a Summons", category: "Civil Litigation", excerpt: "Receiving a summons can be alarming. Acting quickly and correctly is essential — here is your step-by-step guide.", date: "April 2024", img: "/images/article2.jpg" },
  { title: "How to Start the Divorce Process in South Africa", category: "Family Law", excerpt: "Whether contested or uncontested, understanding the divorce process helps reduce stress and costs.", date: "March 2024", img: "/images/article3.jpg" },
];

const calendlyUrl = process.env.NEXT_PUBLIC_CALENDLY_URL ?? "https://calendly.com/chesireattorneys";

export default function HomePage() {
  return (
    <>
      <HeroSlider />

      {/* Trust bar */}
      <section className="bg-white border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-500">
            {["LSSA Registered","BB-BEE Level 1","Free Initial Consultation","Covered Parking Available","Near Joburg Courts"].map(t => (
              <span key={t} className="flex items-center gap-1.5"><Shield size={13} className="text-[#C9A84C]" />{t}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Practice areas */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-12">
          <h2 className="font-[var(--font-playfair)] text-3xl sm:text-4xl font-bold text-[#1A2E52] mb-3">Our Practice Areas</h2>
          <p className="text-gray-600 max-w-xl mx-auto">Expert legal services across 6 specialisations — always with a personal, client-first approach.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {practiceAreas.map(({ icon: Icon, title, desc }) => (
            <Link key={title} href="/services" className="bg-white border border-gray-100 rounded-lg p-6 hover:shadow-md hover:border-[#C9A84C] transition-all group">
              <div className="w-12 h-12 bg-[#1A2E52]/5 rounded-lg flex items-center justify-center mb-4 group-hover:bg-[#C9A84C]/10 transition-colors">
                <Icon size={22} className="text-[#1A2E52] group-hover:text-[#C9A84C] transition-colors" />
              </div>
              <h3 className="font-[var(--font-playfair)] text-lg font-semibold text-[#1A2E52] mb-2">{title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{desc}</p>
              <span className="inline-flex items-center gap-1 text-[#C9A84C] text-sm font-medium mt-3">Learn more <ArrowRight size={14} /></span>
            </Link>
          ))}
        </div>
      </section>

      {/* Why choose us + animated counters */}
      <CounterSection />
      <PartnersMarquee />

      {/* Team preview */}
      <section className="bg-[#F0EEE9] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-[var(--font-playfair)] text-3xl sm:text-4xl font-bold text-[#1A2E52] mb-3">Meet Our Team</h2>
            <p className="text-gray-600 max-w-xl mx-auto">Experienced attorneys committed to achieving the best outcomes for our clients.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-2xl mx-auto">
            {[
              { img: "/images/team1.jpg", name: "Simon Chesire", role: "Director & Founder", areas: "Immigration, Civil Litigation, Criminal Law" },
              { img: "/images/team2.jpg", name: "Respina Tafirei", role: "Professional Assistant", areas: "Family Law, Estates, Labour Law" },
            ].map((m, i) => (
              <div
                key={i}
                className="bg-white rounded-xl overflow-hidden shadow-sm text-center group transition-transform duration-300 hover:-translate-y-2 hover:shadow-lg"
                style={{ animation: `fadeInUp 0.6s ease both`, animationDelay: `${i * 0.15}s` }}
              >
                <div className="h-56 bg-[#1A2E52]/5 overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={m.img} alt={m.name} className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-5">
                  <h3 className="font-[var(--font-playfair)] text-lg font-bold text-[#1A2E52]">{m.name}</h3>
                  <p className="text-[#C9A84C] text-sm font-medium">{m.role}</p>
                  <p className="text-gray-500 text-xs mt-1">{m.areas}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/team" className="inline-flex items-center gap-2 bg-[#1A2E52] hover:bg-[#0f1e38] text-white font-semibold px-6 py-3 rounded transition-colors">
              View Full Team <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-12">
          <h2 className="font-[var(--font-playfair)] text-3xl sm:text-4xl font-bold text-[#1A2E52] mb-3">What Our Clients Say</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-white border border-gray-100 rounded-lg p-6 shadow-sm">
              <div className="flex gap-1 mb-4">{[...Array(5)].map((_,j) => <Star key={j} size={16} className="text-[#C9A84C] fill-[#C9A84C]" />)}</div>
              <p className="text-gray-600 text-sm leading-relaxed mb-4 italic">&ldquo;{t.quote}&rdquo;</p>
              <p className="text-[#1A2E52] text-xs font-semibold">— {t.author}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Latest resources */}
      <section className="bg-[#F0EEE9] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-10">
            <h2 className="font-[var(--font-playfair)] text-3xl font-bold text-[#1A2E52]">Latest Legal Insights</h2>
            <Link href="/resources" className="text-[#C9A84C] font-medium text-sm hover:underline flex items-center gap-1">All articles <ArrowRight size={14} /></Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {articles.map((a, i) => (
              <div key={i} className="bg-white rounded-lg overflow-hidden shadow-sm border border-gray-100 flex flex-col">
                <div className="h-48 relative overflow-hidden"><Image src={a.img} alt={a.title} fill className="object-cover" /></div>
                <div className="p-5 flex flex-col flex-1">
                  <span className="text-[#C9A84C] text-xs font-semibold uppercase tracking-wide mb-2">{a.category}</span>
                  <h3 className="font-[var(--font-playfair)] font-semibold text-[#1A2E52] mb-2 leading-snug">{a.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed flex-1">{a.excerpt}</p>
                  <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-100">
                    <span className="text-xs text-gray-400">{a.date}</span>
                    <Link href="/resources" className="text-[#C9A84C] text-sm font-medium hover:underline">Read more</Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking CTA banner */}
      <section className="bg-[#C9A84C] py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <Calendar size={36} className="text-[#1A2E52] mx-auto mb-4" />
          <h2 className="font-[var(--font-playfair)] text-3xl font-bold text-[#1A2E52] mb-3">Ready to Speak to an Attorney?</h2>
          <p className="text-[#1A2E52]/80 text-lg mb-8">Book your consultation online — fast, easy and confidential.</p>
          <a href={calendlyUrl} target="_blank" rel="noopener noreferrer"
            className="inline-block bg-[#1A2E52] hover:bg-[#0f1e38] text-white font-bold px-10 py-4 rounded text-base transition-colors">
            Book Your Consultation Now
          </a>
        </div>
      </section>
    </>
  );
}
