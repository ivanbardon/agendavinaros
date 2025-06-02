import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import BarraNav from "./componentes/BarraNav";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Agenda Vinaros",
  description: "Agenda Vinaros es una aplicación web que permite a los usuarios gestionar sus citas y eventos en una forma sencilla y eficiente.",
  manifest: "/manifest.json",
  icons: {
   apple: "/icon512_rounded.png",
   icon: "/icon512_maskable.png",
    
  },
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <BarraNav />
        {children}
      </body>
    </html>
  );
}
