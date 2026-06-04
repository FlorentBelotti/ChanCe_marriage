import Image from "next/image";
import SectionReveal from "@/components/ui/SectionReveal";

export default function VenueSection() {
  return (
    <section id="reception" className="bg-cream px-6 py-24">
      <SectionReveal className="mx-auto max-w-5xl">
        <h2 className="text-center font-serifDisplay text-5xl text-accent">Réception</h2>
        <div className="mt-10 grid gap-8 md:grid-cols-[1.1fr,1fr]">
          <div className="overflow-hidden rounded-2xl border border-divider/60">
            <Image
              src="/placeholders/DSC_0121.JPG"
              alt="Photo de réception"
              width={1200}
              height={900}
              className="h-72 w-full object-cover md:h-full"
              sizes="(min-width: 768px) 45vw, 100vw"
            />
          </div>
          <div className="rounded-2xl bg-surface p-6">
            <p className="font-serifDisplay text-3xl text-accent">Ambiance de soirée</p>
            <p className="mt-4 text-body/85">
              Texte de remplacement pour l&apos;ambiance de la réception. Lorem ipsum dolor
              sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
            </p>
            <p className="mt-6 text-sm uppercase tracking-[0.3em] text-body/70">
              Galeries de la soirée
            </p>
          </div>
        </div>
      </SectionReveal>
    </section>
  );
}
