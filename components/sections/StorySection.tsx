import Image from "next/image";
import Divider from "@/components/ui/Divider";
import SectionReveal from "@/components/ui/SectionReveal";

export default function StorySection() {
  return (
    <section id="preparatifs" className="bg-cream px-6 py-24">
      <SectionReveal className="mx-auto grid max-w-5xl items-center gap-10 md:grid-cols-[1.1fr,1fr]">
        <div>
          <h2 className="font-serifDisplay text-5xl text-accent">Préparatifs</h2>
          <Divider />
          <p className="text-lg leading-relaxed text-body/90">
            Texte de remplacement pour décrire l&apos;ambiance des préparatifs. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
          </p>
        </div>
        <div className="overflow-hidden rounded-3xl border border-divider/40">
          <Image
            src="https://placehold.co/1200x900?text=Preparatifs"
            alt="Photo des préparatifs"
            width={1200}
            height={900}
            className="h-full w-full object-cover"
            sizes="(min-width: 768px) 45vw, 100vw"
          />
        </div>
      </SectionReveal>
    </section>
  );
}
