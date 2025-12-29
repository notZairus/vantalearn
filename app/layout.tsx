import type { Metadata } from "next";
import { Geist, Geist_Mono, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";
import Particles from "@/components/Particles";
import { SessionProvider } from "next-auth/react";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-sans",
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "PortfoliX",
  description: "AI generated Portfolio Generator by Zairus V. Bermillo.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={jetbrainsMono.variable}>
      <body
        className={`h-screen min-h-screen w-full ${geistSans.variable} ${geistMono.variable} antialiased relative dark`}
      >
        <div className="absolute inset-0 -z-10">
          <Particles particleCount={100} particleSpread={30} speed={0.05} />
        </div>

        <SessionProvider>{children}</SessionProvider>

        <Toaster className="fixed" />
      </body>
    </html>
  );
}
