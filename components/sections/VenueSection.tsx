import { MapPinned } from "lucide-react";
import PhotoPlaceholder from "@/components/ui/PhotoPlaceholder";
import SectionReveal from "@/components/ui/SectionReveal";

export default function VenueSection() {
  return (
    <section id="venue" className="px-6 py-24">
      <SectionReveal className="mx-auto max-w-5xl">
        <h2 className="text-center font-serifDisplay text-5xl text-accent">Lieu</h2>
        <div className="mt-10 grid gap-8 md:grid-cols-[1fr,1.2fr]">
          <div className="rounded-2xl border border-divider/45 bg-[linear-gradient(160deg,rgba(255,255,255,0.4),rgba(239,226,217,0.65))] p-6">
            <p className="font-serifDisplay text-3xl text-accent">
              Château de la Motte Beaumanoir
            </p>
            <p className="mt-4 text-body/85">La Motte Beaumanoir, 35610 Pleine-Fougères</p>
            <a
              className="mt-6 inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent px-5 py-3 text-sm text-overlay shadow-sm"
              href="https://maps.google.com/?q=Ch%C3%A2teau+de+la+Motte+Beaumanoir"
              target="_blank"
              rel="noreferrer"
            >
              <MapPinned className="size-4" />
              Voir l&apos;itinéraire
            </a>
          </div>
          <PhotoPlaceholder className="h-72 md:h-full" label="Photo du lieu" />
        </div>
        <div className="mt-8 overflow-hidden rounded-2xl border border-divider/45">
          <div className="border-b border-divider/35 bg-white/35 px-5 py-2 text-xs uppercase tracking-[0.24em] text-accent/80">
            Carte
          </div>
          <div className="bg-cream/60 p-2">
            <iframe
              title="Carte du château"
              className="h-72 w-full rounded-xl"
              loading="lazy"
              src="https://maps.google.com/maps?q=Ch%C3%A2teau%20de%20la%20Motte%20Beaumanoir&t=&z=13&ie=UTF8&iwloc=&output=embed"
            />
          </div>
        </div>
      </SectionReveal>
    </section>
  );
}
