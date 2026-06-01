import FloralSVG from "@/components/ui/FloralSVG";

export default function Divider() {
  return (
    <div className="mx-auto my-10 flex max-w-xl items-center gap-4 text-divider">
      <span className="h-px flex-1 bg-divider" />
      <FloralSVG className="w-14" />
      <span className="h-px flex-1 bg-divider" />
    </div>
  );
}
