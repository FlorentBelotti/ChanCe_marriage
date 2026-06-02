"use client";

const items = [
  { id: "hero", label: "Portfolio" },
  { id: "preparatifs", label: "Préparatifs" },
  { id: "ceremony", label: "Cérémonie" },
  { id: "reception", label: "Réception" },
];

export default function Navigation() {
  return (
    <nav className="fixed inset-x-0 top-0 z-50 border-b border-divider/20 bg-cream/70 backdrop-blur-sm">
      <ul className="mx-auto flex max-w-5xl items-center justify-center gap-2 overflow-x-auto px-4 py-2 text-xs md:gap-6 md:text-sm">
        {items.map((item) => (
          <li key={item.id}>
            <a
              className="rounded-full px-3 py-1 text-body/70 transition hover:text-accent"
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
