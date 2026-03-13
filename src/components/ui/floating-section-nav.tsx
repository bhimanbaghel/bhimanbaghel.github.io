"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

export interface FloatingSectionNavItem {
  id: string;
  label: string;
}

function prefersReducedMotion() {
  if (typeof window === "undefined") {
    return false;
  }

  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export function FloatingSectionNav({
  items,
  desktopItems,
  heroId,
}: {
  items: FloatingSectionNavItem[];
  desktopItems?: FloatingSectionNavItem[];
  heroId: string;
}) {
  const [activeId, setActiveId] = useState(items[0]?.id ?? "");
  const [isVisible, setIsVisible] = useState(false);
  const [isDesktopLayout, setIsDesktopLayout] = useState(false);
  const itemRefs = useRef<Record<string, HTMLAnchorElement | null>>({});
  const currentItems =
    isDesktopLayout && desktopItems?.length ? desktopItems : items;

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const mediaQuery = window.matchMedia("(min-width: 1280px)");
    const updateLayout = () => setIsDesktopLayout(mediaQuery.matches);

    updateLayout();
    mediaQuery.addEventListener("change", updateLayout);

    return () => {
      mediaQuery.removeEventListener("change", updateLayout);
    };
  }, []);

  useEffect(() => {
    if (!currentItems.length) {
      return;
    }

    const getSectionElement = (id: string) => document.getElementById(id);

    const updateState = () => {
      const heroElement = getSectionElement(heroId);
      const heroBottom = heroElement
        ? heroElement.offsetTop + heroElement.offsetHeight
        : window.innerHeight;
      const revealThreshold = Math.max(
        64,
        heroBottom - window.innerHeight + Math.min(window.innerHeight * 0.16, 120),
      );
      const shouldShow = window.scrollY > revealThreshold;
      const anchorLine =
        window.scrollY +
        Math.min(window.innerHeight * 0.42, 320);
      const nearBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 96;

      let nextActiveId = currentItems[0].id;

      for (const item of currentItems) {
        const sectionElement = getSectionElement(item.id);

        if (sectionElement && anchorLine >= sectionElement.offsetTop) {
          nextActiveId = item.id;
        }
      }

      if (nearBottom) {
        nextActiveId = currentItems[currentItems.length - 1]?.id ?? nextActiveId;
      }

      setIsVisible(shouldShow);
      setActiveId(nextActiveId);
    };

    updateState();

    window.addEventListener("scroll", updateState, { passive: true });
    window.addEventListener("resize", updateState);

    return () => {
      window.removeEventListener("scroll", updateState);
      window.removeEventListener("resize", updateState);
    };
  }, [currentItems, heroId, isDesktopLayout]);

  useEffect(() => {
    if (!isVisible || !activeId) {
      return;
    }

    itemRefs.current[activeId]?.scrollIntoView({
      behavior: prefersReducedMotion() ? "auto" : "smooth",
      block: "nearest",
      inline: "center",
    });
  }, [activeId, currentItems, isVisible]);

  useEffect(() => {
    if (!currentItems.some((item) => item.id === activeId)) {
      setActiveId(currentItems[0]?.id ?? "");
    }
  }, [activeId, currentItems]);

  const handleNavigate = (event: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    const targetElement = document.getElementById(id);

    if (!targetElement) {
      return;
    }

    event.preventDefault();

    const top = Math.max(targetElement.offsetTop - 32, 0);

    window.history.replaceState(null, "", `#${id}`);
    window.scrollTo({
      top,
      behavior: prefersReducedMotion() ? "auto" : "smooth",
    });
    setActiveId(id);
  };

  return (
    <AnimatePresence>
      {isVisible ? (
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 24 }}
          transition={{ duration: 0.22, ease: "easeOut" }}
          className="pointer-events-none fixed inset-x-0 bottom-4 z-50 flex justify-center px-4 sm:bottom-6 sm:px-6"
        >
          <nav
            aria-label="Section navigation"
            className="pointer-events-auto max-w-full overflow-hidden rounded-full border border-white/10 bg-[#0d1520]/82 px-2 py-2 shadow-[0_22px_60px_rgba(0,0,0,0.34)] backdrop-blur-xl"
          >
            <div className="custom-scroll flex max-w-[calc(100vw-2.5rem)] items-center gap-1 overflow-x-auto scroll-smooth sm:max-w-[calc(100vw-5rem)]">
              {currentItems.map((item) => {
                const isActive = item.id === activeId;

                return (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    ref={(element) => {
                      itemRefs.current[item.id] = element;
                    }}
                    onClick={(event) => handleNavigate(event, item.id)}
                    aria-current={isActive ? "location" : undefined}
                    className={cn(
                      "shrink-0 rounded-full px-4 py-2 text-sm font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/55",
                      isActive
                        ? "bg-cyan-300/14 text-cyan-100 shadow-[inset_0_0_0_1px_rgba(125,211,252,0.18)]"
                        : "text-[#9aa8bc] hover:bg-white/[0.05] hover:text-[#eef4fb]",
                    )}
                  >
                    {item.label}
                  </a>
                );
              })}
            </div>
          </nav>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
