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
      aria-label="News"
      className="max-h-[26rem] overflow-y-auto pt-3 pr-2 custom-scroll"
    >
      <div className="relative flex flex-col gap-4 pl-9">
        <div className="absolute bottom-0 left-3 top-0 w-1 bg-gradient-to-b from-cyan-300/20 via-white/12 to-transparent" />

        {NEWS.map((item, index) => (
          <motion.div
            key={`${item.date}-${index}`}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.22, delay: index * 0.03 }}
            className="relative"
          >
            <div className="absolute left-[-1.9rem] top-0 h-[1.125rem] w-[1.125rem] rounded-full border border-cyan-200/40 bg-cyan-300/80 ring-4 ring-cyan-300/12" />
            <div className="space-y-1">
              <p className="text-[0.72rem] uppercase tracking-[0.24em] text-[#76859c]">
                {item.date}
              </p>
              {item.link ? (
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-base leading-relaxed text-[#edf3fb] transition-colors hover:text-cyan-100"
                >
                  {item.text}
                </a>
              ) : (
                <p className="text-base leading-relaxed text-[#d4ddea]">{item.text}</p>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
