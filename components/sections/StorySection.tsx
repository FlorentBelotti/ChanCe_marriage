import Divider from "@/components/ui/Divider";
import SectionReveal from "@/components/ui/SectionReveal";

export default function StorySection() {
  return (
    <section id="story" className="bg-cream px-6 py-24">
      <SectionReveal className="mx-auto max-w-3xl text-center">
        <h2 className="font-serifDisplay text-5xl text-accent">Notre histoire</h2>
        <Divider />
        <p className="text-lg leading-relaxed text-body/90">
          Entre Dol-de-Bretagne et les grands chemins, nous avons appris à rire,
          voyager et rêver ensemble. Nous serions heureux de célébrer ce nouveau
          chapitre entourés de celles et ceux que nous aimons.
        </p>
      </SectionReveal>
    </section>
  );
}
