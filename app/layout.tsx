import type { Metadata } from "next";
import { Bodoni_Moda, Manrope } from "next/font/google";
import "swiper/css";
import "swiper/css/pagination";
import "./globals.css";

const bodoni = Bodoni_Moda({
  variable: "--font-bodoni",
  subsets: ["latin"],
  display: "swap",
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Te Quiero Botanero | Menú",
  description:
    "Menú digital de Te Quiero Botanero, restaurante bar familiar en Banderilla, Veracruz.",
  applicationName: "Te Quiero Botanero",
  keywords: ["botanero", "restaurante", "Banderilla", "menú", "Veracruz"],
  formatDetection: {
    telephone: true,
    address: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${bodoni.variable} ${manrope.variable}`}>
      <body>{children}</body>
    </html>
  );
}