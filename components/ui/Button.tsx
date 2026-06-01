import { ButtonHTMLAttributes } from "react";

export default function Button(props: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      {...props}
      className={`rounded-full bg-accent px-5 py-3 text-sm font-medium text-overlay transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60 ${props.className ?? ""}`}
    />
  );
}
