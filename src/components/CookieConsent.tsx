"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const accepted = localStorage.getItem("cookie-consent");
    if (!accepted) setVisible(true);
  }, []);

  const accept = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setVisible(false);
  };

  const decline = () => {
    localStorage.setItem("cookie-consent", "declined");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 z-[100] p-4 sm:p-6">
      <div className="max-w-lg bg-[#1A2E52] text-white rounded-xl shadow-2xl border border-white/10 p-5 sm:p-6 flex flex-col sm:flex-row gap-4 items-start sm:items-center">
        <div className="flex-1 min-w-0">
          <p className="font-semibold text-sm mb-1">We use cookies 🍪</p>
          <p className="text-white/70 text-xs leading-relaxed">
            This site uses cookies to improve your experience and analyse traffic. By clicking &ldquo;Accept&rdquo; you consent to our use of cookies.{" "}
            <Link href="/cookies" className="text-[#C9A84C] underline hover:no-underline">
              Cookie Policy
            </Link>
          </p>
        </div>
        <div className="flex gap-2 shrink-0">
          <button
            onClick={decline}
            className="text-white/60 hover:text-white text-xs font-medium px-4 py-2 rounded border border-white/20 hover:border-white/40 transition-colors"
          >
            Decline
          </button>
          <button
            onClick={accept}
            className="bg-[#C9A84C] hover:bg-[#b8963e] text-[#1A2E52] text-xs font-bold px-5 py-2 rounded transition-colors"
          >
            Accept All
          </button>
        </div>
      </div>
    </div>
  );
}
