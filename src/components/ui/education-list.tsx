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
              className="flex items-start space-x-4 rounded-lg border border-neutral-800/30 bg-black/10 p-2 transition-colors hover:bg-neutral-800/50"
            >
              {/* Logo Column */}
              <div className="flex-shrink-0">
                <div
                  className={`flex h-14 w-14 items-center justify-center overflow-hidden rounded-lg border border-neutral-800 bg-neutral-900/80 ${education.id === 2 ? "p-1" : ""}`}
                >
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
                <h3 className="text-sm leading-tight font-semibold text-neutral-200">
                  {education.university}
                </h3>
                <div className="flex justify-between items-center mt-1">
                  <p className="text-xs text-neutral-400">
                    {education.degree}
                  </p>
                  {education.gpa && (
                    <p className="text-xs font-medium text-neutral-400">
                      GPA: {education.gpa}
                    </p>
                  )}
                </div>
                <p className="mt-1 text-xs text-neutral-500">
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
