import { MapPinned } from "lucide-react";
import SectionReveal from "@/components/ui/SectionReveal";

export default function VenueSection() {
  return (
    <section id="venue" className="bg-cream px-6 py-24">
      <SectionReveal className="mx-auto max-w-5xl">
        <h2 className="text-center font-serifDisplay text-5xl text-accent">Lieu</h2>
        <div className="mt-10 grid gap-8 md:grid-cols-[1fr,1.2fr]">
          <div className="rounded-2xl bg-surface p-6">
            <p className="font-serifDisplay text-3xl text-accent">
              Château de la Motte Beaumanoir
            </p>
            <p className="mt-4 text-body/85">La Motte Beaumanoir, 35610 Pleine-Fougères</p>
            <a
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-accent px-5 py-3 text-sm text-overlay"
              href="https://maps.google.com/?q=Ch%C3%A2teau+de+la+Motte+Beaumanoir"
              target="_blank"
              rel="noreferrer"
            >
              <MapPinned className="size-4" />
              Voir l&apos;itinéraire
            </a>
          </div>
          <div className="overflow-hidden rounded-2xl border border-divider/60">
            <iframe
              title="Carte du château"
              className="h-72 w-full md:h-full"
              loading="lazy"
              src="https://maps.google.com/maps?q=Ch%C3%A2teau%20de%20la%20Motte%20Beaumanoir&t=&z=13&ie=UTF8&iwloc=&output=embed"
            />
          </div>
        </div>
      </SectionReveal>
    </section>
  );
}
