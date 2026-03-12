"use client";

import React from "react";
import Image from "next/image";
import { educationData } from "@/data/education";

export function EducationList() {
  return (
    <div role="region" aria-label="Education" className="space-y-3">
      {educationData.map((education) => (
        <article
          key={education.id}
          className="rounded-[22px] border border-white/8 bg-[#111822]/80 p-4"
        >
          <div className="flex items-start gap-4">
            <div
              className={`flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden rounded-2xl border border-white/8 ${education.id === 2 ? "bg-white p-1" : "bg-[#0c1218]"}`}
            >
              <Image
                src={education.logo}
                alt={`${education.university} logo`}
                width={50}
                height={50}
                className="h-full w-full object-contain"
              />
            </div>

            <div className="min-w-0 flex-1">
              <h3 className="text-sm font-semibold leading-relaxed text-[#f2f6fb]">
                {education.university}
              </h3>
              <div className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs uppercase tracking-[0.18em] text-[#728198]">
                <span>{education.degree}</span>
                {education.gpa && <span>GPA {education.gpa}</span>}
              </div>
              <p className="mt-2 text-sm text-[#a9b6ca]">{education.year}</p>
              {education.advisor && (
                <p className="mt-3 text-sm leading-relaxed text-[#cbd5e3]">
                  Advisor: {education.advisor}
                </p>
              )}
              {education.thesis && (
                <p className="mt-3 text-sm leading-relaxed text-[#cbd5e3]">
                  Thesis: {education.thesis}
                </p>
              )}
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}
