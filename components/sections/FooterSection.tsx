export default function FooterSection() {
  return (
    <footer className="border-t border-divider/35 bg-[linear-gradient(160deg,#6f5965_0%,#4f3d47_100%)] px-6 py-16 text-center text-overlay">
      <div className="mx-auto max-w-lg">
        <div className="mx-auto mb-6 h-px w-24 bg-gradient-to-r from-transparent via-overlay/80 to-transparent" />
        <p className="font-serifDisplay text-4xl">Clémence &amp; Charles</p>
        <p className="mt-2 tracking-[0.2em]">30 MAI 2026</p>
        <p className="mt-5 text-sm text-overlay/85">Made with love ❤️</p>
      </div>
    </footer>
  );
}
