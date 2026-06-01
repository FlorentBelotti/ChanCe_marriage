"use client";

const items = [
  { id: "hero", label: "Accueil" },
  { id: "story", label: "Notre histoire" },
  { id: "program", label: "Programme" },
  { id: "venue", label: "Lieu" },
  { id: "rsvp", label: "RSVP" },
];

export default function Navigation() {
  return (
    <nav className="fixed inset-x-0 top-0 z-50 border-b border-divider/40 bg-cream/90 backdrop-blur-sm">
      <ul className="mx-auto flex max-w-5xl items-center justify-center gap-2 overflow-x-auto px-4 py-3 text-sm md:gap-6 md:text-base">
        {items.map((item) => (
          <li key={item.id}>
            <a
              className="rounded-full px-3 py-1 text-accent transition hover:bg-surface"
              href={`#${item.id}`}
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
