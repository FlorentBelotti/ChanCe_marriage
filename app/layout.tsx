import type { Metadata } from "next";
import "../styles/globals.css";

export const metadata: Metadata = {
  title: "Clémence & Charles — 30 Mai 2026",
  description: "Site de mariage de Clémence & Charles",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
