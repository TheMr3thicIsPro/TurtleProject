import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/ui/Navbar";
import SmoothScroll from "@/components/layout/SmoothScroll";
import Scene from "@/components/canvas/Scene";
import CustomCursor from "@/components/ui/CustomCursor";
import DepthMeter from "@/components/ui/DepthMeter";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Oceanic | The World of Sea Turtles",
  description: "An immersive journey into the world of sea turtles.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${playfair.variable} antialiased bg-ocean-900 text-white overflow-x-hidden`}
      >
        <SmoothScroll>
          <Navbar />
          <CustomCursor />
          <DepthMeter />
          <Scene />
          <main className="relative z-10">
            {children}
          </main>
        </SmoothScroll>
      </body>
    </html>
  );
}
