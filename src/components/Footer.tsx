import Link from "next/link";
import { MapPin, Phone, Mail, MessageCircle } from "lucide-react";

const whatsapp = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "27000000000";

export default function Footer() {
  return (
    <footer className="bg-[#1A2E52] text-white/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Brand */}
        <div className="md:col-span-1">
          <p className="font-[var(--font-playfair)] text-white text-lg font-bold">CHESIRE</p>
          <p className="text-[#C9A84C] text-xs tracking-widest uppercase mb-3">ATTORNEYS</p>
          <p className="text-sm leading-relaxed">
            Boutique Johannesburg law firm specialising in immigration, civil litigation, family law and more.
          </p>
        </div>

        {/* Quick links */}
        <div>
          <h4 className="text-white font-semibold text-sm mb-3 uppercase tracking-wide">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            {["/about", "/team", "/services", "/resources", "/contact"].map((href) => (
              <li key={href}>
                <Link href={href} className="hover:text-[#C9A84C] transition-colors capitalize">
                  {href.replace("/", "") || "Home"}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Practice areas */}
        <div>
          <h4 className="text-white font-semibold text-sm mb-3 uppercase tracking-wide">Practice Areas</h4>
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
                <Link href="/services" className="hover:text-[#C9A84C] transition-colors">
                  {area}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-white font-semibold text-sm mb-3 uppercase tracking-wide">Contact Us</h4>
          <ul className="space-y-3 text-sm">
            <li className="flex gap-2">
              <MapPin size={16} className="text-[#C9A84C] shrink-0 mt-0.5" />
              <span>Works@Market City Centre, Johannesburg</span>
            </li>
            <li className="flex gap-2">
              <Phone size={16} className="text-[#C9A84C] shrink-0" />
              <a href="tel:+27000000000" className="hover:text-[#C9A84C] transition-colors">
                +27 (0)00 000 0000
              </a>
            </li>
            <li className="flex gap-2">
              <Mail size={16} className="text-[#C9A84C] shrink-0" />
              <a href="mailto:info@chesireattorneys.co.za" className="hover:text-[#C9A84C] transition-colors">
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
                <MessageCircle size={14} />
                WhatsApp Us
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row justify-between items-center gap-2 text-xs text-white/50">
          <p>&copy; {new Date().getFullYear()} Chesire Attorneys. All rights reserved.</p>
          <p>Registered with the Law Society of South Africa</p>
        </div>
      </div>
    </footer>
  );
}
