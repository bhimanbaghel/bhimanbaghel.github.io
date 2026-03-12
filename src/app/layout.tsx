// layout.tsx
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import * as Tooltip from "@radix-ui/react-tooltip";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Bhiman Kumar Baghel | AI Researcher and PhD Student",
  description:
    "Bhiman Kumar Baghel is a PhD student in Computer Science at the University of Pittsburgh working on model editing, parameter-efficient reasoning, and reliable language models.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-transparent antialiased`}
      >
        <Tooltip.Provider delayDuration={100} skipDelayDuration={200}>
          {children}
        </Tooltip.Provider>
      </body>
    </html>
  );
}
