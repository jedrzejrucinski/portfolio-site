import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["100", "200", "300", "400", "500", "600", "700"],
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Joanna Mrowczynska - Makeup Artist",
  description: "Professional makeup artist specializing in editorial, fashion, and creative makeup artistry. View my portfolio of transformative makeup looks.",
  keywords: "makeup artist, editorial makeup, fashion makeup, beauty, creative makeup, New York makeup artist",
  authors: [{ name: "Joanna Mrowczynska" }],
  openGraph: {
    title: "Joanna Mrowczynska - Makeup Artist",
    description: "Professional makeup artist specializing in editorial, fashion, and creative makeup artistry.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="bg-grain">
        <Navigation />
        <main className="pt-16 lg:pt-20">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
