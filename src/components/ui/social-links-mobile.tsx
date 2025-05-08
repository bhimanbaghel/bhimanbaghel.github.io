"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IconX, IconBrandThreads } from "@tabler/icons-react";
import { SOCIAL_LINKS } from "@/data/social-links";
import { cn } from "@/lib/utils";

export const SocialLinksMobile = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    // Set mounted state
    setIsMounted(true);
    
    // Handle determining if mobile view
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    // Initial check
    checkMobile();
    
    // Listen for resize events
    window.addEventListener("resize", checkMobile);
    
    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  useEffect(() => {
    if (!isOpen) return;
  
    const handleScroll = () => {
      setIsOpen(false);
    };
  
    window.addEventListener("scroll", handleScroll);
  
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isOpen]);

  // Don't render anything until component is mounted and we've checked device type
  if (!isMounted || !isMobile) return null;

  return (
    <div className="w-16 fixed top-4 right-4 z-50 flex flex-col items-center">
      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-3 bg-black border border-cyan-400 rounded-full backdrop-blur-md shadow-[0_0_10px_2px_rgba(6,182,212,0.6)] hover:shadow-[0_0_12px_3px_rgba(6,182,212,0.8)] transition"
      >
        {isOpen ? (
          <IconX className="w-4 h-4 text-cyan-400" />
        ) : (
          <IconBrandThreads className="w-4 h-4 text-cyan-400" /> 
        )}
      </button>

      {/* Expanded Social Links */}
      <AnimatePresence>
        {isOpen && (
            <>
            {/* Backdrop */}
            <motion.div
                key="backdrop"
                className="fixed inset-0 bg-transparent z-40"
                onClick={() => setIsOpen(false)}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
            />

            {/* Social Links Panel */}
            <motion.div
                key="social-panel"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
                className="overflow-hidden mt-4 p-4 bg-black/80 border border-cyan-400 rounded-lg backdrop-blur-md drop-shadow-md flex flex-col gap-4 items-center relative z-50"
            >
                {SOCIAL_LINKS.map((link, i) => (
                <motion.a
                    key={i}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={link.label}
                    onClick={() => setIsOpen(false)}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ delay: i * 0.07, duration: 0.25 }}
                    className={cn(
                    "text-neutral-400 hover:scale-110 transition-transform duration-200",
                    link.hoverColorClass
                    )}
                >
                    {link.icon}
                </motion.a>
                ))}
            </motion.div>
            </>
        )}
        </AnimatePresence>
    </div>
  );
};