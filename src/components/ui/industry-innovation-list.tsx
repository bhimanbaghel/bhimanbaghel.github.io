"use client";

import { motion } from "framer-motion";
import { IconArrowUpRight, IconBulb } from "@tabler/icons-react";
import { INDUSTRY_INNOVATION } from "@/data/industry-innovation";

export function IndustryInnovationList() {
  return (
    <div className="space-y-3">
      {INDUSTRY_INNOVATION.map((item, index) => (
        <motion.a
          key={`${item.applicationNo}-${index}`}
          href={item.link}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.22, delay: index * 0.04 }}
          className="group block rounded-[22px] border border-white/8 bg-[#111822]/78 p-4 transition-colors hover:border-lime-300/20 hover:bg-[#131c27]"
        >
          <div className="flex items-start justify-between gap-3">
            <div className="space-y-2">
              <h3 className="inline-flex items-start gap-2 text-sm font-medium leading-relaxed text-[#f2f6fb] transition-colors group-hover:text-lime-100">
                <IconBulb className="mt-0.5 h-4 w-4 shrink-0 text-lime-200" />
                {item.title}
              </h3>
            </div>
            <IconArrowUpRight className="mt-1 h-4 w-4 shrink-0 text-[#8393a8] transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-lime-100" />
          </div>
          <p className="mt-3 text-xs uppercase tracking-[0.2em] text-[#718097]">
            {item.organization} • {item.applicationNo}
          </p>
          <p className="mt-2 text-sm leading-relaxed text-[#9eacc0]">
            {item.description}
          </p>
        </motion.a>
      ))}
    </div>
  );
}
