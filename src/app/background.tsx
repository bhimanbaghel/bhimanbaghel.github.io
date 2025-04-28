//background.tsx
"use client";
import React from "react";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { BentoGridDemo } from "./bento";
import { SocialLinksDesktop } from "@/components/ui/social-links-desktop";
import { SocialLinksMobile } from "@/components/ui/social-links-mobile";

export function BackgroundBeamsDemo() {
  return (
    <div className="min-h-[calc(100vh-4rem)] w-full rounded-md bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
      <div className="realtive max-w-full mx-auto p-2 z-5">
        <BentoGridDemo />
      </div>
      <SocialLinksDesktop />
      <SocialLinksMobile />
      <BackgroundBeams />
    </div>
  );
}
