"use client";
import { useState } from "react";
import { MapPin, Phone, Mail, MessageCircle, Calendar, Shield } from "lucide-react";

const areaOptions = [
  "Immigration Law",
  "Civil Litigation",
  "Family Law & Divorce",
  "Property & Conveyancing",
  "Labour & Employment Law",
  "Wills, Estates & Trusts",
  "Other",
];

const whatsapp = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "27000000000";
const calendlyUrl = process.env.NEXT_PUBLIC_CALENDLY_URL ?? "https://calendly.com/chesireattorneys";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", area: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      setStatus(res.ok ? "success" : "error");
    } catch {
      setStatus("error");
    }
  };

  return (
    <>
      {/* Page hero */}
      <section className="bg-[#1A2E52] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-[#C9A84C] text-sm font-semibold tracking-widest uppercase mb-3">Contact Us</p>
          <h1 className="font-[var(--font-playfair)] text-4xl sm:text-5xl font-bold mb-4">
            Get in Touch
          </h1>
          <p className="text-white/70 text-lg max-w-2xl">
            We are here to help. Reach out by form, phone, WhatsApp or book directly online.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Contact form */}
        <div className="lg:col-span-2">
          <h2 className="font-[var(--font-playfair)] text-2xl font-bold text-[#1A2E52] mb-6">Send Us a Message</h2>

          {status === "success" ? (
            <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
              <p className="text-green-800 font-semibold text-lg mb-2">Message Sent Successfully</p>
              <p className="text-green-700 text-sm">Thank you for contacting Chesire Attorneys. We will be in touch within one business day.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
                  <input
                    name="name"
                    type="text"
                    required
                    value={form.name}
                    onChange={handleChange}
                    className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#C9A84C] focus:ring-1 focus:ring-[#C9A84C]"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email Address *</label>
                  <input
                    name="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#C9A84C] focus:ring-1 focus:ring-[#C9A84C]"
                    placeholder="your@email.com"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                  <input
                    name="phone"
                    type="tel"
                    value={form.phone}
                    onChange={handleChange}
                    className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#C9A84C] focus:ring-1 focus:ring-[#C9A84C]"
                    placeholder="+27 (0)00 000 0000"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Area of Law *</label>
                  <select
                    name="area"
                    required
                    value={form.area}
                    onChange={handleChange}
                    className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#C9A84C] focus:ring-1 focus:ring-[#C9A84C] bg-white"
                  >
                    <option value="">Select a practice area</option>
                    {areaOptions.map((o) => (
                      <option key={o} value={o}>{o}</option>
                    ))}
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Message *</label>
                <textarea
                  name="message"
                  required
                  rows={5}
                  value={form.message}
                  onChange={handleChange}
                  className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#C9A84C] focus:ring-1 focus:ring-[#C9A84C] resize-none"
                  placeholder="Briefly describe your legal matter..."
                />
              </div>

              {/* POPIA consent */}
              <div className="flex gap-2 items-start text-xs text-gray-500 bg-gray-50 border border-gray-100 rounded-lg p-3">
                <Shield size={14} className="text-[#C9A84C] shrink-0 mt-0.5" />
                <p>
                  By submitting this form, you consent to Chesire Attorneys processing your personal information in accordance with the Protection of Personal Information Act (POPIA).
                </p>
              </div>

              {status === "error" && (
                <p className="text-red-600 text-sm">Something went wrong. Please try again or call us directly.</p>
              )}

              <button
                type="submit"
                disabled={status === "sending"}
                className="w-full bg-[#1A2E52] hover:bg-[#0f1e38] disabled:opacity-60 text-white font-bold py-4 rounded-lg transition-colors"
              >
                {status === "sending" ? "Sending..." : "Send Message"}
              </button>
            </form>
          )}
        </div>

        {/* Sidebar */}
        <div className="space-y-8">
          {/* Contact details */}
          <div>
            <h3 className="font-[var(--font-playfair)] text-xl font-bold text-[#1A2E52] mb-4">Contact Details</h3>
            <ul className="space-y-4 text-sm text-gray-600">
              <li className="flex gap-3">
                <MapPin size={18} className="text-[#C9A84C] shrink-0 mt-0.5" />
                <span>Works@Market City Centre, Johannesburg</span>
              </li>
              <li className="flex gap-3">
                <Phone size={18} className="text-[#C9A84C] shrink-0" />
                <a href="tel:+27000000000" className="hover:text-[#1A2E52]">+27 (0)00 000 0000</a>
              </li>
              <li className="flex gap-3">
                <Mail size={18} className="text-[#C9A84C] shrink-0" />
                <a href="mailto:info@chesireattorneys.co.za" className="hover:text-[#1A2E52]">
                  info@chesireattorneys.co.za
                </a>
              </li>
            </ul>
          </div>

          {/* WhatsApp */}
          <div>
            <h3 className="font-[var(--font-playfair)] text-xl font-bold text-[#1A2E52] mb-3">WhatsApp</h3>
            <a
              href={`https://wa.me/${whatsapp}?text=Hello%2C%20I%20would%20like%20to%20enquire%20about%20legal%20services.`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-semibold text-sm px-5 py-3 rounded transition-colors"
            >
              <MessageCircle size={18} /> Chat on WhatsApp
            </a>
          </div>

          {/* Calendly */}
          <div>
            <h3 className="font-[var(--font-playfair)] text-xl font-bold text-[#1A2E52] mb-3">Book Online</h3>
            <p className="text-sm text-gray-600 mb-3">Schedule a consultation at a time that suits you.</p>
            <a
              href={calendlyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#C9A84C] hover:bg-[#b8963e] text-[#1A2E52] font-semibold text-sm px-5 py-3 rounded transition-colors"
            >
              <Calendar size={18} /> Book a Consultation
            </a>
          </div>
        </div>
      </section>

      {/* Google Maps */}
      <section className="border-t border-gray-100">
        <div className="w-full h-80">
          <iframe
            title="Chesire Attorneys — Works@Market City Centre, Johannesburg"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3579.5!2d28.0436!3d-26.2041!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e950c68f0406a51%3A0x238ac9d9b1d34a52!2sWorks%40Market%20City%20Centre%2C%20Johannesburg!5e0!3m2!1sen!2sza!4v1"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>
    </>
  );
}
