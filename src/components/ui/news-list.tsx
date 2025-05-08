"use client";

import React, { useRef } from "react";
import { motion } from "framer-motion";

export interface NewsItem {
  date: string;
  text: string;
  link?: string;
}

import { NEWS } from "@/data/news";

export const NewsList = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <div className="flex flex-col h-full overflow-hidden">
      <div
        ref={scrollRef}
        role="region"
        aria-label="News List"
        className="mt-0 pt-0 overflow-y-auto flex-1 pr-0 max-h-[17rem] custom-scroll"
      >
        <div className="relative pl-4 flex flex-col">
          {/* Vertical line */}
          <div className="absolute left-1 top-0 bottom-0 w-0.5 bg-neutral-700" />

          {NEWS.map((news, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: i * 0.05 }}
              className="relative mb-3.5 group"
            >
              {/* Bullet */}
              <div className="absolute left-[-0.94rem] top-1.5 w-2 h-2 rounded-full bg-cyan-400 group-hover:scale-125 group-hover:bg-cyan-300 transition-all duration-300" />
              
              {/* Content */}
              <div className="flex flex-col">
                <div className="text-xs text-neutral-500">{news.date}</div>
                {news.link ? (
                  <a
                    href={news.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-white hover:underline transition-colors"
                  >
                    {news.text}
                  </a>
                ) : (
                  <div className="text-sm text-white">{news.text}</div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};