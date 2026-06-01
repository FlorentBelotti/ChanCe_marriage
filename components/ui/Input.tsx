import { InputHTMLAttributes } from "react";

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  error?: string;
};

export default function Input({ label, error, id, ...props }: InputProps) {
  return (
    <label className="block space-y-2" htmlFor={id}>
      <span className="text-sm font-medium text-accent">{label}</span>
      <input
        id={id}
        {...props}
        className="w-full rounded-xl border border-divider bg-cream px-4 py-3 text-body outline-none transition focus:border-accent"
      />
      {error ? <span className="text-xs text-red-700">{error}</span> : null}
    </label>
  );
}
