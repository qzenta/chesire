interface PageHeroProps {
  label: string;
  title: string;
  subtitle?: string;
  image: string;
}

export default function PageHero({ label, title, subtitle, image }: PageHeroProps) {
  return (
    <section
      className="relative py-24 bg-cover bg-center"
      style={{ backgroundImage: `url('${image}')` }}
    >
      <div className="absolute inset-0 bg-[#1A2E52]/80" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-[#C9A84C] text-sm font-semibold tracking-widest uppercase mb-3">{label}</p>
        <h1 className="font-[var(--font-playfair)] text-4xl sm:text-5xl font-bold text-white mb-4">{title}</h1>
        {subtitle && <p className="text-white/70 text-lg max-w-2xl">{subtitle}</p>}
      </div>
    </section>
  );
}
