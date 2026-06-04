"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/team", label: "Team" },
  {
    href: "/services",
    label: "Services",
    sub: [
      { href: "/services#immigration-law", label: "Immigration Law" },
      { href: "/services#civil-litigation", label: "Civil Litigation" },
      { href: "/services#family-law-divorce", label: "Family Law & Divorce" },
      { href: "/services#property-conveyancing", label: "Property & Conveyancing" },
      { href: "/services#labour-employment-law", label: "Labour & Employment" },
      { href: "/services#wills-estates-trusts", label: "Wills, Estates & Trusts" },
    ],
  },
  { href: "/resources", label: "Resources" },
  {
    href: "/locations",
    label: "Locations",
    sub: [
      { href: "/locations#randburg", label: "Randburg" },
      { href: "/locations#southgate", label: "Southgate" },
      { href: "/locations#boksburg", label: "Boksburg" },
      { href: "/locations#germiston", label: "Germiston" },
      { href: "/locations#edenvale", label: "Edenvale" },
      { href: "/locations#northcliff", label: "Northcliff" },
      { href: "/locations#ferndale", label: "Ferndale" },
      { href: "/locations#cresta", label: "Cresta" },
      { href: "/locations#alberton", label: "Alberton" },
      { href: "/locations#the-glen", label: "The Glen" },
    ],
  },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [openSub, setOpenSub] = useState<string | null>(null);

  return (
    <header className="sticky top-0 z-50 shadow-sm">
      {/* Top bar — navy */}
      <div className="bg-[#1A2E52] text-white/70 text-xs px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex items-center justify-between h-8">
          <a href="tel:0113330389" className="hover:text-[#C9A84C] flex items-center gap-1.5 transition-colors">
            <Phone size={11} /> 011 333 0389
          </a>
          <a href="mailto:info@chesireattorneys.co.za" className="hover:text-[#C9A84C] transition-colors hidden sm:block">
            info@chesireattorneys.co.za
          </a>
          <a
            href="https://wa.me/27824078095"
            target="_blank" rel="noopener noreferrer"
            className="hover:text-[#C9A84C] transition-colors"
          >
            WhatsApp Us
          </a>
        </div>
      </div>

      {/* Main nav — white */}
      <div className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo on white */}
            <Link href="/" className="flex items-center shrink-0">
              <Image
                src="/images/logo.png"
                alt="Chesire Attorneys"
                width={220}
                height={72}
                className="h-14 w-auto"
                priority
              />
            </Link>

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center gap-1">
              {links.map((l) =>
                l.sub ? (
                  <div
                    key={l.href}
                    className="relative group"
                    onMouseEnter={() => setOpenSub(l.href)}
                    onMouseLeave={() => setOpenSub(null)}
                  >
                    <Link
                      href={l.href}
                      className="text-[#1A2E52] hover:text-[#C9A84C] text-sm font-medium px-3 py-5 inline-flex items-center gap-1 transition-colors"
                    >
                      {l.label}
                      <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                    </Link>
                    {openSub === l.href && (
                      <div className="absolute top-full left-0 bg-white border border-gray-100 shadow-lg rounded-b-lg min-w-[220px] py-2 z-50">
                        {l.sub.map((s) => (
                          <Link
                            key={s.href}
                            href={s.href}
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#F9F8F6] hover:text-[#C9A84C] transition-colors"
                          >
                            {s.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    key={l.href}
                    href={l.href}
                    className="text-[#1A2E52] hover:text-[#C9A84C] text-sm font-medium px-3 py-5 transition-colors"
                  >
                    {l.label}
                  </Link>
                )
              )}
            </nav>

            <div className="hidden lg:block">
              <Link
                href="/contact"
                className="bg-[#C9A84C] hover:bg-[#b8963e] text-[#1A2E52] font-bold text-sm px-5 py-2.5 rounded transition-colors"
              >
                Book Consultation
              </Link>
            </div>

            <button
              onClick={() => setOpen(!open)}
              className="lg:hidden text-[#1A2E52] p-1"
              aria-label="Toggle menu"
            >
              {open ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden bg-white border-t border-gray-100 shadow-lg max-h-[80vh] overflow-y-auto">
          {links.map((l) => (
            <div key={l.href}>
              <Link
                href={l.href}
                onClick={() => setOpen(false)}
                className="block px-5 py-3 text-[#1A2E52] font-medium text-sm border-b border-gray-50 hover:bg-[#F9F8F6] hover:text-[#C9A84C]"
              >
                {l.label}
              </Link>
              {l.sub?.map((s) => (
                <Link
                  key={s.href}
                  href={s.href}
                  onClick={() => setOpen(false)}
                  className="block px-8 py-2 text-gray-500 text-xs border-b border-gray-50 hover:text-[#C9A84C]"
                >
                  {s.label}
                </Link>
              ))}
            </div>
          ))}
          <div className="p-4">
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="block text-center bg-[#C9A84C] text-[#1A2E52] font-bold text-sm px-4 py-3 rounded"
            >
              Book Consultation
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
