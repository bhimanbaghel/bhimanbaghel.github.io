"use client";

import React from "react";
import Image from "next/image";
import { educationData } from "@/data/education";

export function EducationList() {
  return (
    <div className="flex flex-col h-full overflow-hidden">
      <div
        role="region"
        aria-label="Education List"
        className="mt-0 pt-0 overflow-y-auto flex-1 pr-0 max-h-[17rem] custom-scroll"
      >
        <div className="space-y-2">
          {educationData.map((education) => (
            <div 
              key={education.id} 
              className="flex items-start space-x-4 p-2 rounded-lg hover:bg-neutral-50 dark:hover:bg-neutral-800/50 transition-colors"
            >
              {/* Logo Column */}
              <div className="flex-shrink-0">
                <div className={`w-14 h-14 rounded-lg overflow-hidden ${education.id === 2 ? 'bg-white' : 'bg-neutral-100 dark:bg-neutral-800'} flex items-center justify-center`}>
                  <Image
                    src={education.logo}
                    alt={`${education.university} logo`}
                    width={50}
                    height={50}
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
              
              {/* Details Column */}
              <div className="flex-1 min-w-0">
                <h3 className="font-semibold text-neutral-800 dark:text-neutral-200 text-sm leading-tight">
                  {education.university}
                </h3>
                <div className="flex justify-between items-center mt-1">
                  <p className="text-neutral-600 dark:text-neutral-400 text-xs">
                    {education.degree}
                  </p>
                  {education.gpa && (
                    <p className="text-neutral-600 dark:text-neutral-400 text-xs font-medium">
                      GPA: {education.gpa}
                    </p>
                  )}
                </div>
                <p className="text-neutral-500 dark:text-neutral-500 text-xs mt-1">
                  {education.year}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 