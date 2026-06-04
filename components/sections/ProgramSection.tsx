import Image from "next/image";
import SectionReveal from "@/components/ui/SectionReveal";

const ceremonyGallery = [
  {
    title: "Entrée des mariés",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: "/placeholders/ceremony-1.svg",
  },
  {
    title: "Échanges de vœux",
    description: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: "/placeholders/ceremony-2.svg",
  },
  {
    title: "Moments partagés",
    description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
    image: "/placeholders/ceremony-3.svg",
  },
];

export default function ProgramSection() {
  return (
    <section id="ceremony" className="bg-surface px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <SectionReveal>
          <h2 className="text-center font-serifDisplay text-5xl text-accent">Cérémonie</h2>
        </SectionReveal>
        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {ceremonyGallery.map((item, index) => (
            <SectionReveal key={item.title} delay={index * 0.08} className="h-full">
              <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-divider/60 bg-cream">
                <Image
                  src={item.image}
                  alt={`Photo ${item.title}`}
                  width={900}
                  height={700}
                  className="h-52 w-full object-cover"
                  sizes="(min-width: 768px) 30vw, 100vw"
                />
                <div className="flex h-full flex-col gap-3 p-6">
                  <h3 className="font-serifDisplay text-2xl text-accent">{item.title}</h3>
                  <p className="text-sm text-body/80">{item.description}</p>
                </div>
              </article>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
