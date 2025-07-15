"use client";

import React, { useRef } from "react";
import { motion } from "framer-motion";
import { IconTrophy } from "@tabler/icons-react";

export interface HonorItem {
  date: string;
  title: string;
  organization: string;
  description?: string;
}

import { HONORS } from "@/data/honors";

export const HonorsList = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <div className="flex flex-col h-full overflow-hidden">
      <div
        ref={scrollRef}
        role="region"
        aria-label="Honors and Awards List"
        className="mt-1 pt-1 overflow-y-auto flex-1 pr-0 max-h-[17rem] custom-scroll"
      >
        <div className="relative pl-4 flex flex-col">
          {/* Vertical line */}
          <div className="absolute left-1 top-0 bottom-0 w-0.5 bg-neutral-700" />

          {HONORS.map((honor, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: i * 0.05 }}
              className="relative mb-4 group"
            >
              {/* Trophy Icon */}
              <div className="absolute left-[-1.2rem] top-0.5 w-4 h-4 flex items-center justify-center">
                <IconTrophy 
                  className="w-4 h-4 text-yellow-500 group-hover:text-yellow-400 group-hover:scale-110 transition-all duration-300" 
                />
              </div>
              
              {/* Content */}
              <div className="flex flex-col">
                <div className="flex items-baseline gap-2 mb-1">
                  <div className="text-xs text-neutral-500 flex-shrink-0">{honor.date}</div>
                  <div className="text-sm font-medium text-white">{honor.title}</div>
                </div>
                <div className="text-xs text-neutral-400 mb-1">{honor.organization}</div>
                {honor.description && (
                  <div className="text-xs text-neutral-300 italic">{honor.description}</div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}; 