import FloralSVG from "@/components/ui/FloralSVG";
import SectionReveal from "@/components/ui/SectionReveal";

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-cover px-6 pt-16 text-center text-overlay"
    >
      <FloralSVG className="absolute -right-8 top-14 w-48 opacity-60 md:right-20 md:top-24 md:w-72" />
      <SectionReveal className="relative z-10 max-w-2xl">
        <p className="mb-4 text-sm uppercase tracking-[0.35em]">Nous nous marions</p>
        <h1 className="font-serifDisplay text-6xl leading-tight md:text-8xl">
          Clémence &amp; Charles
        </h1>
        <p className="mt-6 font-serifDisplay text-3xl tracking-[0.15em] md:text-5xl">
          30 MAI 2026
        </p>
        <a
          href="#story"
          className="mt-16 inline-block text-sm uppercase tracking-[0.3em] text-overlay/80"
        >
          ↓ Découvrir
        </a>
      </SectionReveal>
    </section>
  );
}
