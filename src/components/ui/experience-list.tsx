"use client";

import React, { useState } from "react";
import Image from "next/image";
import { IconChevronDown, IconChevronUp } from "@tabler/icons-react";
import { cn } from "@/lib/utils";
import { experienceData } from "@/data/experience";

export function ExperienceList() {
  const [expandedDescriptions, setExpandedDescriptions] = useState<Record<number, boolean>>(
    { 0: true, 1: true },
  );

  const toggleDescription = (index: number) => {
    setExpandedDescriptions((current) => ({
      ...current,
      [index]: !current[index],
    }));
  };

  return (
    <div role="region" aria-label="Research and Industry Experience" className="space-y-4">
      {experienceData.map((experience, index) => (
        <article
          key={experience.id}
          className="rounded-[24px] border border-white/8 bg-[#111822]/80 p-4 shadow-[0_18px_60px_rgba(0,0,0,0.24)]"
        >
          <div className="flex items-start gap-4">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden rounded-2xl border border-white/8 bg-[#0c1218]">
              <Image
                src={experience.logo}
                alt={`${experience.company} logo`}
                width={50}
                height={50}
                className="h-full w-full object-contain"
              />
            </div>

            <div className="min-w-0 flex-1">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <h3 className="text-base font-semibold text-[#f2f6fb]">
                    {experience.company}
                  </h3>
                  <p className="mt-1 text-sm text-[#b9c6d8]">{experience.position}</p>
                  <div className="mt-2 flex flex-wrap gap-x-4 gap-y-1 text-xs uppercase tracking-[0.18em] text-[#728198]">
                    <span>{experience.duration}</span>
                    <span>{experience.location}</span>
                  </div>
                </div>
                <button
                  onClick={() => toggleDescription(index)}
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-[#9ba9bc] transition-colors hover:border-white/20 hover:text-[#eef4fb]"
                  aria-label={
                    expandedDescriptions[index] ? "Hide description" : "Show description"
                  }
                >
                  {expandedDescriptions[index] ? (
                    <IconChevronUp className="h-4 w-4" />
                  ) : (
                    <IconChevronDown className="h-4 w-4" />
                  )}
                </button>
              </div>

              <div
                className={cn(
                  "overflow-hidden transition-all duration-300 ease-in-out",
                  expandedDescriptions[index] ? "max-h-[260px] pt-4" : "max-h-0",
                )}
              >
                <ul className="space-y-2 border-t border-white/8 pt-4">
                  {experience.description.map((bullet, bulletIndex) => (
                    <li
                      key={bulletIndex}
                      className="flex items-start gap-2 text-sm leading-relaxed text-[#c9d3e1]"
                    >
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-cyan-300" />
                      <span>{bullet.replace("• ", "")}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}
