import Divider from "@/components/ui/Divider";
import PhotoPlaceholder from "@/components/ui/PhotoPlaceholder";
import SectionReveal from "@/components/ui/SectionReveal";

export default function StorySection() {
  return (
    <section
      id="story"
      className="border-y border-divider/35 bg-[linear-gradient(180deg,rgba(249,243,238,0.95)_0%,rgba(245,236,229,0.8)_100%)] px-6 py-24"
    >
      <SectionReveal className="mx-auto max-w-3xl text-center">
        <h2 className="font-serifDisplay text-5xl text-accent">Notre histoire</h2>
        <Divider />
        <p className="text-lg leading-relaxed text-body/90">
          Entre Dol-de-Bretagne et les grands chemins, nous avons appris à rire,
          voyager et rêver ensemble. Nous serions heureux de célébrer ce nouveau
          chapitre entourés de celles et ceux que nous aimons.
        </p>
        <div className="mt-12 grid gap-4 text-left sm:grid-cols-2">
          <PhotoPlaceholder className="aspect-[4/5]" label="Photo souvenir 01" />
          <PhotoPlaceholder className="aspect-[4/5]" label="Photo souvenir 02" />
        </div>
      </SectionReveal>
    </section>
  );
}
