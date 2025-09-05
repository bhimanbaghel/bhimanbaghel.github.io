"use client";

import React, { useState, useRef } from "react";
import { cn } from "@/lib/utils";
import {
  IconBrandYoutube,
  IconSparkles,
  IconBulb,
} from "@tabler/icons-react";
import { PUBLICATIONS } from "@/data/publications";
import { motion, AnimatePresence } from "framer-motion";
import * as Tooltip from "@radix-ui/react-tooltip";

export type Category = "All" | "Model Editing" | "Fairness" | "Conversational AI" | "Patents";

export interface Publication {
  title: string;
  link: string;
  authors: string;
  venue: string;
  format: string;
  category: Category;
  abstract?: string;
  isNew?: boolean;
  talkLink?: string;
  workshop?: string;
  applicationNo?: string;
}

const prestigiousVenues = ["NeurIPS", "ICML", "ACL", "CVPR", "USPTO", "EMNLP"];

export const PublicationList = () => {
  const [activeCategory, setActiveCategory] = useState<Category>("All");
  const [expandedAbstracts, setExpandedAbstracts] = useState<{ [key: number]: boolean }>({});

  const toggleAbstract = (index: number) => {
    const isCurrentlyExpanded = expandedAbstracts[index];
  
    if (isCurrentlyExpanded) {
      // First collapse visually, then after transition, flip label
      setExpandedAbstracts((prev) => ({ ...prev, [index]: false }));
      // No need to unset it — false is enough
    } else {
      // Expand immediately
      setExpandedAbstracts((prev) => ({ ...prev, [index]: true }));
    }
  };

  const filtered = activeCategory === "All"
    ? PUBLICATIONS
    : PUBLICATIONS.filter((p) => p.category === activeCategory);

    const scrollContainerRef = useRef<HTMLDivElement>(null);

    const handleCategoryChange = (cat: Category) => {
      setActiveCategory(cat);
      // Scroll to top when filter changes
      if (scrollContainerRef.current) {
        scrollContainerRef.current.scrollTo({ top: 0, behavior: 'smooth' });
      }
    };

  return (
    <Tooltip.Provider delayDuration={100}>
    <div className="flex flex-col h-full overflow-hidden">
      {/* Filters */}
      <div className="mt-1 flex flex-wrap items-center gap-2 shrink-0">
        <span className="text-sm text-neutral-400">Research:</span>
        {(["All", "Model Editing", "Fairness", "Conversational AI", "Patents"] as Category[]).map((cat) => {
          const count = cat === "All"
          ? PUBLICATIONS.length
          : PUBLICATIONS.filter((p) => p.category === cat).length;
      
        return (
          <button
            key={cat}
            onClick={() => handleCategoryChange(cat)}
            className={cn(
                "text-sm px-3 py-1 rounded-full border transition focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-black",
                activeCategory === cat
                  ? "bg-white text-black"
                  : "border-neutral-700 text-neutral-400 hover:border-neutral-500 hover:text-white"
              )}
          >
            {cat} {activeCategory === cat && (<span className="ml-1 text-xs text-neutral-500">({count})</span>)}
          </button>
        );
        })}
      </div>

      {/* Publications */}
      <div ref={scrollContainerRef} role="region" aria-label="Publications List" className="mt-2 pt-1 overflow-y-auto overflow-x-visible flex-1 pr-1 max-h-[15rem] custom-scroll">
      <AnimatePresence mode="wait">
      {filtered.length > 0 && (
      <motion.div
      key={activeCategory}
        initial="hidden"
        animate="show"
        exit="hidden"
        variants={{
            hidden: {},
            show: {
            transition: {
                staggerChildren: 0.07, // 70ms delay between each child
            },
            },
        }}
        className="flex flex-col"
        >
      
        {filtered.map((pub, i) => (
          <motion.div 
          key={pub.title + i}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          whileHover={{ y: -2, scale: 1.001 }}
          transition={{ duration: 0.3 }}
          className="mb-2 p-3 pb-2 pt-1 rounded-md bg-black/10 hover:bg-neutral-800/50 transition-colors border border-neutral-800">
            <div className="flex items-center gap-2">
              {/* Icon for patents */}
              {pub.format === "Patent" && (
                <Tooltip.Root delayDuration={100}>
                  <Tooltip.Trigger asChild>
                    <div className="flex">
                      <IconBulb className="w-4 h-4 text-yellow-400" />
                    </div>
                  </Tooltip.Trigger>
                  <Tooltip.Portal>
                    <Tooltip.Content
                      side="top"
                      sideOffset={5}
                      className="rounded-md bg-white/10 backdrop-blur-md px-2 py-1 text-xs text-white shadow-md animate-fade-in z-[100]"
                    >
                      Patent
                      <Tooltip.Arrow className="fill-white/10" />
                    </Tooltip.Content>
                  </Tooltip.Portal>
                </Tooltip.Root>
              )}
              <a
                href={pub.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white font-medium hover:underline"
              >
                {pub.title}
              </a>
              {/* New badge */}
                {pub.isNew && (
                  <Tooltip.Root delayDuration={100}>
                    <Tooltip.Trigger asChild>
                      <div className="flex">
                        <IconSparkles className="w-4 h-4 text-green-400" />
                      </div>
                    </Tooltip.Trigger>
                    <Tooltip.Portal>
                      <Tooltip.Content
                        side="top"
                        sideOffset={5}
                        className="rounded-md bg-white/10 backdrop-blur-md px-2 py-1 text-xs text-white shadow-md animate-fade-in z-[100]"
                      >
                        New
                        <Tooltip.Arrow className="fill-white/10" />
                      </Tooltip.Content>
                    </Tooltip.Portal>
                  </Tooltip.Root>
                )}

                {/* Talk link */}
                {pub.talkLink && (
                <Tooltip.Root delayDuration={100}>
                  <Tooltip.Trigger asChild>
                    <a
                      href={pub.talkLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-red-500 hover:text-red-400 flex"
                    >
                      <IconBrandYoutube className="w-4 h-4" />
                    </a>
                  </Tooltip.Trigger>
                  <Tooltip.Portal>
                    <Tooltip.Content
                      side="top"
                      sideOffset={5}
                      className="rounded-md bg-white/10 backdrop-blur-md px-2 py-1 text-xs text-white shadow-md animate-fade-in z-[100]"
                    >
                      Watch Talk
                      <Tooltip.Arrow className="fill-white/10" />
                    </Tooltip.Content>
                  </Tooltip.Portal>
                </Tooltip.Root>
              )}
            </div>

            {/* Authors */}
            <div className="text-sm text-neutral-400">
                {pub.authors.split(", ").map((author, j, arr) => (
                <React.Fragment key={j}>
                    {author.includes("Bhiman Kumar Baghel") ? (
                    <strong className="text-neutral-100">{author}</strong>
                    ) : (
                    <span>{author}</span>
                    )}
                    {/* Add comma and space after every author except the last */}
                    {j < arr.length - 1 && ", "}
                </React.Fragment>
                ))}
            </div>

            {/* Venue */}
            <div className="text-xs text-neutral-400">
                {pub.workshop && (
                    <>
                    <span>{pub.workshop}</span>
                    {", "}
                    </>
                )}
                <span
                    className={cn(
                    "text-neutral-500",
                    prestigiousVenues.some((v) => pub.venue.includes(v)) && "text-white font-semibold"
                    )}
                >
                    {pub.venue}
                </span>
                {" "}•{" "}
                <span className="text-neutral-400">{pub.format}</span>
                {/* If it's a patent, show application number */}
                {pub.format === "Patent" && pub.applicationNo && (
                  <>
                    {" "}•{" "}
                    <span className="text-neutral-400">App No: {pub.applicationNo}</span>
                  </>
                )}
            </div>

            {/* Abstract */}
            {pub.abstract && (
              <div className="mt-1 text-xs text-neutral-400">
                <div
                  className={cn(
                    "overflow-hidden transition-all duration-300 ease-in-out",
                    expandedAbstracts[i] ? "max-h-[200px]" : "max-h-0"
                  )}
                >
                  <p className="mt-1">{pub.abstract}</p>
                </div>
                <button
                  onClick={() => toggleAbstract(i)}
                  className="text-inline text-neutral-300 hover:text-white hover:underline underline-offset-2 transition-colors duration-300 hover:underline text-xs mt-1 inline-block"
                >
                  {expandedAbstracts[i] ? "Hide abstract" : "Show abstract"}
                </button>
              </div>
            )}
          </motion.div>
        ))}
        
        </motion.div>
        )}
        </AnimatePresence>
      </div>
    </div>
    </Tooltip.Provider>
  );
};