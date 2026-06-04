import Image from "next/image";
import SectionReveal from "@/components/ui/SectionReveal";

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-cover bg-center px-6 pt-16 text-center text-overlay"
    >
      <Image
        src="/placeholders/hero.svg"
        alt="Photo de mariage en plein écran"
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-black/35" aria-hidden="true" />
      <SectionReveal className="relative z-10 max-w-2xl">
        <p className="mb-4 text-xs uppercase tracking-[0.4em] text-overlay/80">
          Portfolio photo de mariage
        </p>
        <h1 className="font-serifDisplay text-5xl leading-tight md:text-7xl">
          Nom du photographe
        </h1>
        <p className="mt-6 text-base text-overlay/80 md:text-lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor.
        </p>
        <a
          href="#preparatifs"
          className="mt-14 inline-block text-xs uppercase tracking-[0.35em] text-overlay/70"
        >
          ↓ Explorer
        </a>
      </SectionReveal>
    </section>
  );
}
