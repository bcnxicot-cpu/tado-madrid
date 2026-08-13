import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const serif = localFont({
  src: "./fonts/cormorant-garamond-latin.woff2",
  weight: "400 600",
  style: "normal",
  variable: "--font-serif",
  display: "swap",
});

const sans = localFont({
  src: "./fonts/manrope-latin.woff2",
  weight: "400 800",
  style: "normal",
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
