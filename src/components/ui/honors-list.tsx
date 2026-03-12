"use client";

import React from "react";
import { motion } from "framer-motion";
import { IconTrophy } from "@tabler/icons-react";
import { HONORS } from "@/data/honors";

export const HonorsList = () => {
  return (
    <div role="region" aria-label="Honors and Awards" className="space-y-3">
      {HONORS.map((honor, index) => (
        <motion.article
          key={`${honor.date}-${index}`}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.22, delay: index * 0.04 }}
          className="rounded-[20px] border border-white/8 bg-[#111822]/80 p-4"
        >
          <div className="flex items-start gap-3">
            <div className="mt-0.5 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-yellow-300/20 bg-yellow-300/10 text-yellow-200">
              <IconTrophy className="h-4 w-4" />
            </div>
            <div className="space-y-1">
              <p className="text-[0.68rem] uppercase tracking-[0.22em] text-[#728198]">
                {honor.date}
              </p>
              <h3 className="text-sm font-medium leading-relaxed text-[#f2f6fb]">
                {honor.title}
              </h3>
              <p className="text-sm text-[#a9b6ca]">{honor.organization}</p>
              {honor.description && (
                <p className="text-sm leading-relaxed text-[#cbd5e3]">
                  {honor.description}
                </p>
              )}
            </div>
          </div>
        </motion.article>
      ))}
    </div>
  );
};
