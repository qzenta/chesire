import type { Metadata } from "next";
import Link from "next/link";
import { ExternalLink, ArrowRight, UserPlus } from "lucide-react";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Our Team | Chesire Attorneys Johannesburg",
  description: "Meet the attorneys and professionals at Chesire Attorneys — experienced legal practitioners dedicated to client-first service in Johannesburg.",
};

const team = [
  {
    img: "/images/team1.jpg",
    name: "Simon Chesire",
    role: "Director & Founder",
    quals: "LLB — Advocate (Kenya) | Attorney (South Africa)",
    areas: ["Immigration Law", "Civil Litigation", "Criminal Law", "Human Rights Law", "Personal Injury"],
    bio: "Simon Chesire founded Chesire Attorneys in 2006 after an extensive career spanning over 20 years across Kenya and South Africa. He is a member of the Legal Practice Council (South Africa) and the Law Society of Kenya, with the right of appearance in the High Court. Simon specialises in immigration law, commercial litigation, personal injury, criminal law, human rights law, alternative dispute resolution and divorce matters.",
    linkedin: "https://www.linkedin.com/in/chesire-attorneys-ab20aa121/",
  },
  {
    img: "/images/team2.jpg",
    name: "Respina Tafirei",
    role: "Professional Assistant",
    quals: "LLB",
    areas: ["Family Law & Divorce", "Wills, Estates & Trusts", "Labour & Employment Law"],
    bio: "Respina Tafirei is a professional assistant at Chesire Attorneys.",
    linkedin: null,
  },
];

export default function TeamPage() {
  return (
    <>
      <PageHero label="Our Team" title="The People Behind Chesire Attorneys" subtitle="Experienced attorneys who are passionate about the law and genuinely invested in your outcome." image="/images/team-hero.jpg" />

      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 space-y-10">
        {team.map((member, i) => (
          <div
            key={i}
            className="bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm flex flex-col md:flex-row hover:shadow-lg transition-shadow duration-300"
            style={{ animation: "fadeInUp 0.6s ease both", animationDelay: `${i * 0.2}s` }}
          >
            {/* Photo — fixed width left column */}
            <div className="md:w-64 lg:w-72 shrink-0 overflow-hidden bg-[#1A2E52]/5 group">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={member.img} alt={member.name} className="w-full h-full object-cover object-top min-h-64 group-hover:scale-105 transition-transform duration-500" />
            </div>
            {/* Bio — right column */}
            <div className="p-8 flex flex-col justify-center flex-1">
              <h2 className="font-[var(--font-playfair)] text-2xl font-bold text-[#1A2E52]">{member.name}</h2>
              <p className="text-[#C9A84C] font-semibold text-sm mb-1">{member.role}</p>
              <p className="text-gray-500 text-xs mb-4">{member.quals}</p>
              <p className="text-gray-600 text-sm leading-relaxed mb-5">{member.bio}</p>
              <div className="mb-5">
                <p className="text-xs text-gray-400 uppercase tracking-wide font-semibold mb-2">Areas of Practice</p>
                <div className="flex flex-wrap gap-2">
                  {member.areas.map((a) => (
                    <span key={a} className="bg-[#1A2E52]/5 text-[#1A2E52] text-xs px-3 py-1 rounded-full">{a}</span>
                  ))}
                </div>
              </div>
              {member.linkedin && (
                <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-[#0077B5] text-sm hover:underline">
                  <ExternalLink size={16} /> LinkedIn Profile
                </a>
              )}
            </div>
          </div>
        ))}
      </section>

      <section className="bg-[#F0EEE9] py-20">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <UserPlus size={36} className="text-[#C9A84C] mx-auto mb-4" />
          <h2 className="font-[var(--font-playfair)] text-3xl font-bold text-[#1A2E52] mb-4">Join Our Team</h2>
          <p className="text-gray-600 leading-relaxed mb-8">Chesire Attorneys is always open to hearing from talented, driven legal professionals who share our commitment to client-centred legal practice. If you are interested in joining the team as an attorney, candidate attorney or in a support role, we would love to hear from you.</p>
          <Link href="/contact" className="inline-flex items-center gap-2 bg-[#1A2E52] hover:bg-[#0f1e38] text-white font-semibold px-6 py-3 rounded transition-colors">Get in Touch <ArrowRight size={16} /></Link>
        </div>
      </section>
    </>
  );
}
