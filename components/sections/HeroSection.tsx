import PhotoPlaceholder from "@/components/ui/PhotoPlaceholder";
import SectionReveal from "@/components/ui/SectionReveal";

export default function HeroSection() {
  return (
    <section id="hero" className="px-4 pb-10 pt-20">
      <SectionReveal className="mx-auto max-w-6xl">
        <div className="relative overflow-hidden rounded-[2.2rem] border border-divider/45 shadow-[0_20px_60px_rgba(80,52,52,0.14)]">
          <PhotoPlaceholder className="h-[78vh] min-h-[540px] w-full rounded-none border-0" label="Photo d'accueil" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#261718]/55 via-[#4b3538]/25 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 border-t border-white/35 bg-white/6 px-8 py-10 text-center text-overlay backdrop-blur-[2px] md:px-14">
            <p className="mb-3 text-xs uppercase tracking-[0.38em]">Nous nous marions</p>
            <h1 className="font-serifDisplay text-5xl leading-tight md:text-8xl">
              Clémence &amp; Charles
            </h1>
            <p className="mt-4 font-serifDisplay text-2xl tracking-[0.14em] md:text-4xl">30 MAI 2026</p>
            <a
              href="#story"
              className="mt-8 inline-block border-b border-white/45 pb-1 text-xs uppercase tracking-[0.3em] text-overlay/85"
            >
              ↓ Découvrir
            </a>
          </div>
        </div>
      </SectionReveal>
    </section>
  );
}
