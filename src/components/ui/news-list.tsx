"use client";

import React, { useRef } from "react";
import { motion } from "framer-motion";
import { NEWS } from "@/data/news";

export interface NewsItem {
  date: string;
  text: string;
  link?: string;
}

export const NewsList = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={scrollRef}
      role="region"
      aria-label="News and Talks"
      className="max-h-[26rem] overflow-y-auto pr-2 custom-scroll"
    >
      <div className="relative flex flex-col gap-4 pl-5">
        <div className="absolute bottom-0 left-1.5 top-0 w-px bg-gradient-to-b from-cyan-300/20 via-white/12 to-transparent" />

        {NEWS.map((item, index) => (
          <motion.div
            key={`${item.date}-${index}`}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.22, delay: index * 0.03 }}
            className="relative"
          >
            <div className="absolute left-[-1rem] top-1.5 h-2.5 w-2.5 rounded-full border border-cyan-200/40 bg-cyan-300/80 shadow-[0_0_18px_rgba(121,218,255,0.4)]" />
            <div className="space-y-1">
              <p className="text-[0.68rem] uppercase tracking-[0.24em] text-[#76859c]">
                {item.date}
              </p>
              {item.link ? (
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm leading-relaxed text-[#edf3fb] transition-colors hover:text-cyan-100"
                >
                  {item.text}
                </a>
              ) : (
                <p className="text-sm leading-relaxed text-[#d4ddea]">{item.text}</p>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
