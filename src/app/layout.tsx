// layout.tsx
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
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

const GA_MEASUREMENT_ID = "G-4E1LJHS74Z";

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
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_MEASUREMENT_ID}');
        `}
      </Script>
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
