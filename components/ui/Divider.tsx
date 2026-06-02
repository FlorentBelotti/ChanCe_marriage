export default function Divider() {
  return (
    <div className="mx-auto my-10 flex max-w-xl items-center gap-4 text-divider/75">
      <span className="h-px flex-1 bg-gradient-to-r from-transparent via-divider/75 to-transparent" />
      <span className="size-2 rotate-45 border border-divider/80 bg-white/35" />
      <span className="h-px flex-1 bg-gradient-to-r from-transparent via-divider/75 to-transparent" />
    </div>
  );
}
