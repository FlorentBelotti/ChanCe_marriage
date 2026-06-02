type PhotoPlaceholderProps = {
  className?: string;
  label: string;
};

export default function PhotoPlaceholder({ className, label }: PhotoPlaceholderProps) {
  return (
    <div
      aria-label={label}
      className={`relative overflow-hidden rounded-[2rem] border border-white/45 bg-gradient-to-br from-[#d8c4b7] via-[#b8a097] to-[#8e7674] ${className ?? ""}`}
      role="img"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_24%,rgba(255,255,255,0.45),transparent_45%),radial-gradient(circle_at_76%_74%,rgba(255,255,255,0.18),transparent_52%)]" />
      <div className="absolute inset-0 bg-[repeating-linear-gradient(120deg,transparent,transparent_26px,rgba(255,255,255,0.08)_27px,transparent_28px)]" />
      <div className="absolute inset-0 border border-white/40" />
      <p className="absolute bottom-5 left-5 border border-white/45 bg-black/15 px-3 py-1 text-xs uppercase tracking-[0.28em] text-white/90">
        {label}
      </p>
    </div>
  );
}
