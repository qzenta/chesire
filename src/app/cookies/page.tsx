import PageHero from "@/components/PageHero";

export default function CookiesPage() {
  return (
    <>
      <PageHero label="Legal" title="Cookie Policy" subtitle="How Chesire Attorneys uses cookies on our website." image="/images/services-hero.jpg" />
      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 prose prose-slate">
        <p className="text-sm text-gray-400">Last updated: June 2026</p>
        <h2>1. What Are Cookies?</h2>
        <p>Cookies are small text files stored on your device when you visit a website. They help the website function properly and provide information about how the site is used.</p>
        <h2>2. Cookies We Use</h2>
        <p><strong>Essential cookies:</strong> Required for the website to function. These cannot be disabled.</p>
        <p><strong>Analytics cookies:</strong> We use Google Analytics to understand how visitors use our website. This data is anonymous and aggregated. You can opt out at <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer" className="text-[#C9A84C]">tools.google.com/dlpage/gaoptout</a>.</p>
        <h2>3. Managing Cookies</h2>
        <p>You can control cookies through your browser settings. Disabling cookies may affect the functionality of our website.</p>
        <h2>4. Contact</h2>
        <p>For cookie-related queries, contact us at <a href="mailto:info@chesireattorneys.co.za" className="text-[#C9A84C]">info@chesireattorneys.co.za</a>.</p>
      </section>
    </>
  );
}
