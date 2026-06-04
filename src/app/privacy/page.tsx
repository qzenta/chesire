import PageHero from "@/components/PageHero";

export default function PrivacyPage() {
  return (
    <>
      <PageHero label="Legal" title="Privacy Policy" subtitle="How Chesire Attorneys collects, uses and protects your personal information." image="/images/services-hero.jpg" />
      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 prose prose-slate">
        <p className="text-sm text-gray-400">Last updated: June 2026</p>
        <h2>1. Introduction</h2>
        <p>Chesire Attorneys (&ldquo;we&rdquo;, &ldquo;us&rdquo;, &ldquo;our&rdquo;) is committed to protecting your personal information in accordance with the Protection of Personal Information Act, 4 of 2013 (&ldquo;POPIA&rdquo;). This policy explains how we collect, use, store and protect your information.</p>
        <h2>2. Information We Collect</h2>
        <p>We may collect: your name, email address, phone number, postal address, and details of your legal matter when you contact us via our website, telephone or in person.</p>
        <h2>3. How We Use Your Information</h2>
        <p>We use your information to: respond to your enquiries, provide legal services, send you relevant legal updates (with your consent), and comply with our legal and regulatory obligations.</p>
        <h2>4. Sharing Your Information</h2>
        <p>We do not sell or share your personal information with third parties, except where required by law, court order or to fulfil our professional obligations.</p>
        <h2>5. Data Security</h2>
        <p>We implement appropriate technical and organisational measures to protect your personal information against loss, theft or unauthorised access.</p>
        <h2>6. Your Rights</h2>
        <p>Under POPIA, you have the right to: access your personal information, correct inaccurate information, object to processing, and lodge a complaint with the Information Regulator.</p>
        <h2>7. Contact</h2>
        <p>For privacy-related enquiries, contact our Information Officer at <a href="mailto:info@chesireattorneys.co.za" className="text-[#C9A84C]">info@chesireattorneys.co.za</a> or call <a href="tel:0824078095" className="text-[#C9A84C]">082 407 8095</a>.</p>
      </section>
    </>
  );
}
