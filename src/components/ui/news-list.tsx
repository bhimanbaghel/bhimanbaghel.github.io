"use client";

import React, { useRef } from "react";
import { motion } from "framer-motion";
import { IconArrowUpRight } from "@tabler/icons-react";
import { NEWS } from "@/data/news";

export interface NewsLink {
  label: string;
  href: string;
}

export interface NewsItem {
  date: string;
  text: string;
  links?: NewsLink[];
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
            <div className="space-y-2">
              <p className="text-[0.72rem] uppercase tracking-[0.24em] text-[#76859c]">
                {item.date}
              </p>
              <p
                className={
                  item.links?.length
                    ? "text-base leading-relaxed text-[#edf3fb]"
                    : "text-base leading-relaxed text-[#d4ddea]"
                }
              >
                {item.text}
              </p>
              {item.links?.length ? (
                <div className="flex flex-wrap gap-2 pt-1">
                  {item.links.map((link) => (
                    <a
                      key={`${item.date}-${link.label}`}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.05] px-3 py-1.5 text-xs font-medium text-[#edf3fb] transition-colors hover:border-cyan-300/30 hover:bg-cyan-300/10 hover:text-cyan-100"
                    >
                      {link.label}
                      <IconArrowUpRight className="h-3.5 w-3.5" />
                    </a>
                  ))}
                </div>
              ) : null}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
