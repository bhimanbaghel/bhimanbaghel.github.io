// src/components/ui/social-links-desktop.tsx
"use client";

import { SOCIAL_LINKS } from "@/data/social-links";
import * as Tooltip from "@radix-ui/react-tooltip";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { IconCopy, IconCheck } from "@tabler/icons-react";
import { motion, AnimatePresence } from "framer-motion";

export const SocialLinksDesktop = () => {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const handleCopy = async (text: string, index: number) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedIndex(index);
      setTimeout(() => setCopiedIndex(null), 1200);
    } catch (error) {
      console.error("Failed to copy:", error);
    }
  };

  return (
    <div className="hidden md:flex fixed top-1/6 flex-col items-center gap-19 z-50"
    style={{
        right: "calc((100vw - 1536px)/2 + 8rem)", // dynamically stick beside Bento
      }}
    >
      {SOCIAL_LINKS.map((link, i) => (
        <Tooltip.Root key={i} delayDuration={100}>
          <Tooltip.Trigger asChild>
            <div className="flex justify-center items-center relative group"
            onMouseEnter={() => setHoveredIndex(i)}
            onMouseLeave={() => setHoveredIndex(null)}
            >
                {/* Background */}
                <AnimatePresence>
                    {hoveredIndex === i && (
                    <motion.span
                        layoutId="hoverBackground"
                        className={cn(
                            "absolute inset-[-8px] rounded-xl backdrop-blur-md",
                            SOCIAL_LINKS[i]?.hoverBgColorClass
                          )}
                        initial={{ opacity: 0, scale: 1.02 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 1.02 }}
                        transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
                    />
                    )}
                </AnimatePresence>
              <a
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
                className={cn(
                  "relative z-10 text-neutral-400 hover:scale-110 transition-transform duration-200",
                  link.hoverColorClass
                )}
              >
                {link.icon}
              </a>
            </div>
          </Tooltip.Trigger>
          <Tooltip.Portal>
            <Tooltip.Content
              side="top"
              sideOffset={8}
              className="rounded-md bg-white/10 px-2 py-1 text-xs text-white backdrop-blur-md drop-shadow-md animate-fade-in z-[100] flex items-center gap-2"
            >
              <span>{copiedIndex === i ? "Copied!" : link.label}</span>
              {link.copyContent && (
                <button
                  onClick={() => handleCopy(link.copyContent!, i)}
                  className="text-white hover:text-green-400 transition"
                >
                  {copiedIndex === i ? (
                    <IconCheck className="w-4 h-4" />
                  ) : (
                    <IconCopy className="w-4 h-4" />
                  )}
                </button>
              )}
              <Tooltip.Arrow className="fill-white/10" />
            </Tooltip.Content>
          </Tooltip.Portal>
        </Tooltip.Root>
      ))}
    </div>
  );
};