import Link from "next/link";
import { ExternalLink, ArrowRight, UserPlus } from "lucide-react";

const team = [
  {
    name: "Attorney Name",
    role: "Director & Founder",
    quals: "LLB (University of [X])",
    areas: ["Immigration Law", "Civil Litigation", "Property & Conveyancing"],
    bio: "[Placeholder — client to provide bio for Director]. A seasoned attorney with over a decade of experience in South African law, committed to delivering accessible, high-quality legal services to every client.",
    linkedin: null,
  },
  {
    name: "Attorney Name",
    role: "Associate Attorney",
    quals: "LLB (University of [X])",
    areas: ["Family Law & Divorce", "Wills, Estates & Trusts", "Labour & Employment"],
    bio: "[Placeholder — client to provide bio]. A dedicated attorney specialising in family and estate matters, known for empathetic and practical legal advice during life's most challenging moments.",
    linkedin: null,
  },
];

export default function TeamPage() {
  return (
    <>
      {/* Page hero */}
      <section className="bg-[#1A2E52] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-[#C9A84C] text-sm font-semibold tracking-widest uppercase mb-3">Our Team</p>
          <h1 className="font-[var(--font-playfair)] text-4xl sm:text-5xl font-bold mb-4">
            The People Behind Chesire Attorneys
          </h1>
          <p className="text-white/70 text-lg max-w-2xl">
            Experienced attorneys who are passionate about the law and genuinely invested in your outcome.
          </p>
        </div>
      </section>

      {/* Team cards */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {team.map((member, i) => (
            <div key={i} className="bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm">
              {/* Headshot placeholder — replace with real photo */}
              <div className="h-72 bg-[#1A2E52]/5 flex items-center justify-center">
                <div className="w-32 h-32 rounded-full bg-[#1A2E52]/10 flex items-center justify-center">
                  <span className="font-[var(--font-playfair)] text-[#1A2E52]/30 text-5xl">CA</span>
                </div>
              </div>
              <div className="p-8">
                <h2 className="font-[var(--font-playfair)] text-2xl font-bold text-[#1A2E52]">{member.name}</h2>
                <p className="text-[#C9A84C] font-semibold text-sm mb-1">{member.role}</p>
                <p className="text-gray-500 text-xs mb-4">{member.quals}</p>
                <p className="text-gray-600 text-sm leading-relaxed mb-5">{member.bio}</p>
                <div className="mb-5">
                  <p className="text-xs text-gray-400 uppercase tracking-wide font-semibold mb-2">Areas of Practice</p>
                  <div className="flex flex-wrap gap-2">
                    {member.areas.map((a) => (
                      <span key={a} className="bg-[#1A2E52]/5 text-[#1A2E52] text-xs px-3 py-1 rounded-full">
                        {a}
                      </span>
                    ))}
                  </div>
                </div>
                {member.linkedin && (
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-[#0077B5] text-sm hover:underline"
                  >
                    <ExternalLink size={16} /> LinkedIn Profile
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Join our team */}
      <section className="bg-[#F0EEE9] py-20">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <UserPlus size={36} className="text-[#C9A84C] mx-auto mb-4" />
          <h2 className="font-[var(--font-playfair)] text-3xl font-bold text-[#1A2E52] mb-4">
            Join Our Team
          </h2>
          <p className="text-gray-600 leading-relaxed mb-8">
            Chesire Attorneys is always open to hearing from talented, driven legal professionals who share our commitment to client-centred legal practice. If you are interested in joining the team — whether as an attorney, candidate attorney or in a support role — we would love to hear from you.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-[#1A2E52] hover:bg-[#0f1e38] text-white font-semibold px-6 py-3 rounded transition-colors"
          >
            Get in Touch <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
