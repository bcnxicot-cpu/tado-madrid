import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import "./globals.css";

const serif = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-serif",
  display: "swap",
});

const sans = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://tado-madrid.vercel.app"),
  title: "Tado Madrid — Cerámica y artesanía contemporánea",
  description:
    "Piezas de ceramistas y artesanos en el Barrio de las Letras de Madrid. Descubre Tado en Calle de Echegaray, 31.",
  openGraph: {
    title: "Tado Madrid — Belleza para usar",
    description: "Cerámica contemporánea y oficios vivos en el Barrio de las Letras.",
    type: "website",
    locale: "es_ES",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <body className={`${serif.variable} ${sans.variable}`}>{children}</body>
    </html>
  );
}
