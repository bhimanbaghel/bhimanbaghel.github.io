"use client";

import React, { useState } from "react";
import Image from "next/image";
import { experienceData } from "@/data/experience";
import { cn } from "@/lib/utils";
import { IconChevronDown, IconChevronUp } from "@tabler/icons-react";

export function ExperienceList() {
  const [expandedDescriptions, setExpandedDescriptions] = useState<{ [key: number]: boolean }>({});

  const toggleDescription = (index: number) => {
    setExpandedDescriptions((prev) => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  return (
    <div className="flex flex-col h-full overflow-hidden">
      <div
        role="region"
        aria-label="Professional Experience List"
        className="mt-0 pt-0 overflow-y-auto flex-1 pr-0 max-h-[17rem] custom-scroll"
      >
        <div className="space-y-2">
          {experienceData.map((experience, index) => (
            <div 
              key={experience.id} 
              className="p-2 rounded-lg bg-black/10 hover:bg-neutral-800/50 transition-colors border border-neutral-800/30"
            >
              <div className="flex items-start space-x-4">
                {/* Logo Column */}
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 rounded-lg overflow-hidden bg-neutral-100 dark:bg-neutral-800 flex items-center justify-center">
                    <Image
                      src={experience.logo}
                      alt={`${experience.company} logo`}
                      width={50}
                      height={50}
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>
                
                {/* Details Column */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold text-neutral-800 dark:text-neutral-200 text-sm leading-tight">
                      {experience.company}
                    </h3>
                    <button
                      onClick={() => toggleDescription(index)}
                      className="flex items-center text-neutral-400 hover:text-neutral-200 transition-colors"
                      aria-label={expandedDescriptions[index] ? "Hide description" : "Show description"}
                    >
                      {expandedDescriptions[index] ? (
                        <IconChevronUp className="w-4 h-4" />
                      ) : (
                        <IconChevronDown className="w-4 h-4" />
                      )}
                    </button>
                  </div>
                  
                  <p className="text-neutral-600 dark:text-neutral-400 text-xs mt-1">
                    {experience.position}
                  </p>
                  
                  <div className="flex justify-between items-center mt-1">
                    <p className="text-neutral-500 dark:text-neutral-500 text-xs">
                      {experience.duration}
                    </p>
                    <p className="text-neutral-500 dark:text-neutral-500 text-xs">
                      {experience.location}
                    </p>
                  </div>
                </div>
              </div>

              {/* Description - Expandable - Now below the entire header section */}
              <div
                className={cn(
                  "overflow-hidden transition-all duration-300 ease-in-out",
                  expandedDescriptions[index] ? "max-h-[200px] mt-3" : "max-h-0"
                )}
              >
                <ul className="space-y-1 pl-0 pr-1">
                  {experience.description.map((bullet, bulletIndex) => (
                    <li key={bulletIndex} className="text-xs text-neutral-600 dark:text-neutral-300 flex items-start">
                      <span className="text-cyan-400 mr-1">•</span>
                      <span>{bullet.replace('• ', '')}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 