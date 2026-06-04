import { MessageCircle } from "lucide-react";

const whatsapp = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "27834078095";

export default function WhatsAppButton() {
  return (
    <a
      href={`https://wa.me/${whatsapp}?text=Hello%2C%20I%20would%20like%20to%20enquire%20about%20legal%20services.`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#1ebe5d] text-white p-4 rounded-full shadow-lg transition-transform hover:scale-110"
    >
      <MessageCircle size={24} />
    </a>
  );
}
