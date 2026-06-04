import Link from "next/link";
import { MapPin, Phone, Mail, MessageCircle } from "lucide-react";
import Wordmark from "@/components/Wordmark";

const whatsapp = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "27834078095";

export default function Footer() {
  return (
    <footer className="bg-[#1A2E52] text-white/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

        {/* Brand */}
        <div>
          <div className="mb-4"><Wordmark inverted /></div>
          <p className="text-sm leading-relaxed mb-5">
            Boutique Johannesburg law firm delivering accessible, expert legal services across immigration, litigation, family law and beyond.
          </p>
          <div className="flex gap-3">
            {[
              { href: "https://www.facebook.com/chesireat/", label: "Facebook", el: <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg> },
              { href: "https://twitter.com/chesireat", label: "X/Twitter", el: <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.259 5.63 5.905-5.63zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg> },
              { href: "https://www.linkedin.com/in/chesire-attorneys-ab20aa121/", label: "LinkedIn", el: <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/></svg> },
              { href: "https://www.instagram.com/chesireattorneys/", label: "Instagram", el: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg> },
            ].map(({ href, label, el }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="w-8 h-8 rounded bg-white/10 hover:bg-[#C9A84C] flex items-center justify-center transition-colors"
              >
                {el}
              </a>
            ))}
          </div>
        </div>

        {/* Quick links */}
        <div>
          <h4 className="text-white font-semibold text-sm mb-4 uppercase tracking-wider">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            {[
              { href: "/about", label: "About Us" },
              { href: "/team", label: "Our Team" },
              { href: "/services", label: "Services" },
              { href: "/locations", label: "Locations" },
              { href: "/resources", label: "Legal Resources" },
              { href: "/contact", label: "Contact Us" },
              { href: "/faq", label: "FAQ" },
            ].map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="hover:text-[#C9A84C] transition-colors">{l.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Practice areas */}
        <div>
          <h4 className="text-white font-semibold text-sm mb-4 uppercase tracking-wider">Practice Areas</h4>
          <ul className="space-y-2 text-sm">
            {[
              "Immigration Law",
              "Civil Litigation",
              "Family Law & Divorce",
              "Property & Conveyancing",
              "Labour & Employment",
              "Wills & Estates",
            ].map((area) => (
              <li key={area}>
                <Link href="/services" className="hover:text-[#C9A84C] transition-colors">{area}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-white font-semibold text-sm mb-4 uppercase tracking-wider">Contact Us</h4>
          <ul className="space-y-4 text-sm">
            <li className="flex gap-2.5">
              <MapPin size={15} className="text-[#C9A84C] shrink-0 mt-0.5" />
              <span>83 Albertina Sisulu Rd, Works@Market City Centre, Johannesburg, 2110</span>
            </li>
            <li className="flex gap-2.5">
              <Phone size={15} className="text-[#C9A84C] shrink-0" />
              <a href="tel:0834078095" className="hover:text-[#C9A84C] transition-colors">083 407 8095</a>
            </li>
            <li className="flex gap-2.5">
              <Mail size={15} className="text-[#C9A84C] shrink-0" />
              <a href="mailto:info@chesireattorneys.co.za" className="hover:text-[#C9A84C] transition-colors break-all">
                info@chesireattorneys.co.za
              </a>
            </li>
            <li>
              <a
                href={`https://wa.me/${whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-semibold text-xs px-3 py-2 rounded transition-colors"
              >
                <MessageCircle size={13} /> WhatsApp Us
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-white/40">
          <p>&copy; {new Date().getFullYear()} Chesire Attorneys. All rights reserved. Registered with the Law Society of South Africa.</p>
          <div className="flex gap-4">
            <Link href="/privacy" className="hover:text-[#C9A84C] transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-[#C9A84C] transition-colors">Terms of Use</Link>
            <Link href="/cookies" className="hover:text-[#C9A84C] transition-colors">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
