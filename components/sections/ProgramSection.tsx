import { Martini, Utensils, Landmark, HeartHandshake } from "lucide-react";
import SectionReveal from "@/components/ui/SectionReveal";

const events = [
  {
    time: "13h30",
    title: "Cérémonie civile",
    location: "Mairie de Dol-de-Bretagne",
    icon: Landmark,
  },
  {
    time: "16h00",
    title: "Cérémonie laïque",
    location: "Château de la Motte Beaumanoir",
    icon: HeartHandshake,
  },
  { time: "17h00", title: "Cocktail", location: "Jardins du château", icon: Martini },
  { time: "20h00", title: "Dîner", location: "Salle de réception", icon: Utensils },
];

export default function ProgramSection() {
  return (
    <section
      id="program"
      className="border-y border-divider/30 bg-[linear-gradient(180deg,rgba(239,225,216,0.78)_0%,rgba(245,237,232,0.9)_100%)] px-6 py-24"
    >
      <div className="mx-auto max-w-5xl">
        <SectionReveal>
          <h2 className="text-center font-serifDisplay text-5xl text-accent">Programme</h2>
        </SectionReveal>
        <div className="mt-14 space-y-6">
          {events.map((event, index) => {
            const Icon = event.icon;
            return (
              <SectionReveal key={event.title} delay={index * 0.08}>
                <article
                  className={`rounded-2xl border border-divider/50 bg-[linear-gradient(150deg,rgba(255,255,255,0.52),rgba(246,237,230,0.86))] p-6 md:w-1/2 ${
                    index % 2 === 0 ? "md:mr-auto" : "md:ml-auto"
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <Icon className="mt-1 size-5 text-accent" aria-hidden="true" />
                    <div>
                      <p className="font-serifDisplay text-3xl text-accent">{event.time}</p>
                      <h3 className="text-lg font-medium">{event.title}</h3>
                      <p className="text-sm text-body/80">{event.location}</p>
                    </div>
                  </div>
                </article>
              </SectionReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
