import PageHero from "@/components/PageHero";

export default function TermsPage() {
  return (
    <>
      <PageHero label="Legal" title="Terms of Use" subtitle="The terms and conditions governing use of the Chesire Attorneys website." image="/images/services-hero.jpg" />
      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 prose prose-slate">
        <p className="text-sm text-gray-400">Last updated: June 2026</p>
        <h2>1. Acceptance</h2>
        <p>By accessing this website, you agree to these Terms of Use. If you do not agree, please do not use this website.</p>
        <h2>2. No Legal Advice</h2>
        <p>The content on this website is for general information purposes only. Nothing on this website constitutes legal advice. Use of this website does not create an attorney-client relationship. You should consult a qualified attorney for advice specific to your situation.</p>
        <h2>3. Intellectual Property</h2>
        <p>All content on this website — including text, images, logos and design — is owned by or licensed to Chesire Attorneys. You may not reproduce or distribute any content without our written consent.</p>
        <h2>4. Limitation of Liability</h2>
        <p>Chesire Attorneys is not liable for any loss or damage arising from your use of this website or reliance on its content.</p>
        <h2>5. External Links</h2>
        <p>This website may contain links to third-party websites. We are not responsible for the content or practices of those websites.</p>
        <h2>6. Governing Law</h2>
        <p>These terms are governed by the laws of South Africa. Any disputes shall be subject to the jurisdiction of the South African courts.</p>
        <h2>7. Contact</h2>
        <p>For queries about these terms, email <a href="mailto:info@chesireattorneys.co.za" className="text-[#C9A84C]">info@chesireattorneys.co.za</a>.</p>
      </section>
    </>
  );
}
