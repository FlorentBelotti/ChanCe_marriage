import FloralSVG from "@/components/ui/FloralSVG";

export default function FooterSection() {
  return (
    <footer className="bg-cover px-6 py-16 text-center text-overlay">
      <div className="mx-auto max-w-lg">
        <FloralSVG className="mx-auto mb-6 w-20 opacity-80" />
        <p className="font-serifDisplay text-4xl">Clémence &amp; Charles</p>
        <p className="mt-2 tracking-[0.2em]">30 MAI 2026</p>
        <p className="mt-5 text-sm text-overlay/85">Made with love ❤️</p>
      </div>
    </footer>
  );
}
