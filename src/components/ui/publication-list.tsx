"use client";

import Image from "next/image";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  IconArrowUpRight,
  IconBrandYoutube,
  IconSparkles,
} from "@tabler/icons-react";
import { cn } from "@/lib/utils";
import {
  PUBLICATIONS,
  type Publication,
  type PublicationCategory,
} from "@/data/publications";

export type Category = "All" | PublicationCategory;

const prestigiousVenues = ["NeurIPS", "ICML", "ACL", "CVPR", "EMNLP", "IEEE"];
const categories: Category[] = [
  "All",
  "Model Editing",
  "Fairness",
  "Conversational AI",
];

function getPublicationYear(publication: Publication) {
  const match = publication.venue.match(/\b(19|20)\d{2}\b/);
  return match ? match[0] : "Earlier";
}

function getVenueLabel(publication: Publication) {
  if (publication.format === "Findings") {
    return `Findings of ${publication.venue}`;
  }

  if (publication.workshop) {
    return `${publication.workshop} at ${publication.venue}`;
  }

  return publication.venue;
}

function renderAuthors(authors: string) {
  return authors.split(", ").map((author, index, arr) => (
    <React.Fragment key={`${author}-${index}`}>
      {author.includes("Bhiman Kumar Baghel") ? (
        <strong className="font-medium text-[#f4f7fb]">{author}</strong>
      ) : (
        <span>{author}</span>
      )}
      {index < arr.length - 1 && ", "}
    </React.Fragment>
  ));
}

function PublicationCard({
  publication,
  expanded,
  onToggle,
}: {
  publication: Publication;
  expanded: boolean;
  onToggle: () => void;
}) {
  const venueIsPrestigious = prestigiousVenues.some((venue) =>
    publication.venue.includes(venue),
  );
  const venueLabel = getVenueLabel(publication);
  const hasImage = Boolean(publication.image);

  return (
    <motion.article
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      transition={{ duration: 0.24 }}
      className="rounded-[26px] border border-white/8 bg-[#111822]/82 p-4 shadow-[0_18px_60px_rgba(0,0,0,0.28)] backdrop-blur-xl"
    >
      <div
        className={cn(
          "flex flex-col gap-4",
          hasImage && "lg:grid lg:grid-cols-[240px_minmax(0,1fr)] lg:items-stretch lg:gap-5",
        )}
      >
        {hasImage ? (
          <div className="order-last overflow-hidden rounded-[22px] border border-white/8 bg-white shadow-[0_18px_50px_rgba(0,0,0,0.22)] lg:order-none lg:flex lg:h-full lg:min-h-[12rem] lg:items-center lg:justify-center lg:p-3">
            <Image
              src={publication.image!}
              alt={publication.imageAlt ?? `${publication.title} figure`}
              width={960}
              height={540}
              className="h-52 w-full object-contain object-center lg:h-full"
            />
          </div>
        ) : null}

        <div className="flex flex-col gap-4">
          <div className="space-y-3">
            <div className="space-y-2">
              <h3 className="text-lg font-semibold leading-tight text-[#f5f8fb]">
                {publication.title}
              </h3>
              <p className="text-sm leading-relaxed text-[#9eacc0]">
                {renderAuthors(publication.authors)}
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              <span
                className={cn(
                  "rounded-full border px-3 py-1 text-[0.68rem] uppercase tracking-[0.22em]",
                  venueIsPrestigious
                    ? "border-cyan-300/30 bg-cyan-300/10 text-cyan-100"
                    : "border-white/10 bg-white/[0.04] text-[#b8c5d8]",
                )}
              >
                {venueLabel}
              </span>
              <span className="rounded-full border border-lime-300/20 bg-lime-300/10 px-3 py-1 text-[0.68rem] uppercase tracking-[0.22em] text-lime-100">
                {publication.category}
              </span>
              {publication.isNew && (
                <span className="inline-flex items-center gap-1 rounded-full border border-emerald-300/20 bg-emerald-300/10 px-3 py-1 text-[0.68rem] uppercase tracking-[0.22em] text-emerald-100">
                  <IconSparkles className="h-3.5 w-3.5" />
                  New
                </span>
              )}
              <a
                href={publication.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/10 px-3 py-1.5 text-xs font-medium text-cyan-100 transition-colors hover:border-cyan-300/35 hover:bg-cyan-300/16"
              >
                Paper
                <IconArrowUpRight className="h-3.5 w-3.5" />
              </a>
              {publication.talkLink && (
                <a
                  href={publication.talkLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-red-400/20 bg-red-400/10 px-3 py-1.5 text-xs font-medium text-red-100 transition-colors hover:border-red-400/35 hover:bg-red-400/16"
                >
                  Talk
                  <IconBrandYoutube className="h-3.5 w-3.5" />
                </a>
              )}
            </div>
          </div>

          {publication.abstract && (
            <div
              className={cn(
                "rounded-[20px] border border-white/7 bg-[#0c1219]/80 px-4 py-3",
                hasImage && "hidden lg:block",
              )}
            >
              <p
                className={cn(
                  "text-sm leading-relaxed text-[#b4c1d4]",
                  !expanded && "line-clamp-3",
                )}
              >
                {publication.abstract}
              </p>
              <button
                onClick={onToggle}
                className="mt-3 text-xs font-medium uppercase tracking-[0.2em] text-cyan-200 transition-colors hover:text-cyan-100"
              >
                {expanded ? "Hide abstract" : "Show abstract"}
              </button>
            </div>
          )}
        </div>
      </div>
    </motion.article>
  );
}

export const PublicationList = () => {
  const [activeCategory, setActiveCategory] = useState<Category>("All");
  const [expandedAbstracts, setExpandedAbstracts] = useState<Record<number, boolean>>(
    {},
  );

  const filtered =
    activeCategory === "All"
      ? PUBLICATIONS
      : PUBLICATIONS.filter((publication) => publication.category === activeCategory);

  const groupedPublications = filtered.reduce<
    Array<{
      year: string;
      items: Array<{ publication: Publication; index: number }>;
    }>
  >((groups, publication, index) => {
    const year = getPublicationYear(publication);
    const lastGroup = groups[groups.length - 1];

    if (lastGroup && lastGroup.year === year) {
      lastGroup.items.push({ publication, index });
      return groups;
    }

    groups.push({
      year,
      items: [{ publication, index }],
    });

    return groups;
  }, []);

  return (
    <div className="space-y-5">
      <div className="flex flex-wrap items-center gap-2">
        <span className="mr-2 text-[0.72rem] uppercase tracking-[0.24em] text-[#728097]">
          Browse by topic
        </span>
        {categories.map((category) => {
          const count =
            category === "All"
              ? PUBLICATIONS.length
              : PUBLICATIONS.filter((publication) => publication.category === category)
                  .length;

          return (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "rounded-full border px-3 py-2 text-xs font-medium tracking-[0.16em] transition focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/50",
                activeCategory === category
                  ? "border-cyan-300/35 bg-cyan-300/12 text-cyan-100"
                  : "border-white/10 bg-white/[0.03] text-[#9aa8bc] hover:border-white/20 hover:text-[#edf3fb]",
              )}
            >
              {category}
              <span className="ml-2 text-[0.68rem] text-[#73839a]">({count})</span>
            </button>
          );
        })}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.2 }}
          className="space-y-8"
        >
          {groupedPublications.map((group) => (
            <div key={group.year} className="space-y-4">
              <div className="flex items-center gap-4">
                <span className="shrink-0 text-sm font-semibold uppercase tracking-[0.24em] text-[#d7e2f0]">
                  {group.year}
                </span>
                <div className="h-px flex-1 bg-gradient-to-r from-white/18 via-cyan-300/25 to-transparent" />
              </div>

              {group.items.map(({ publication, index }) => (
                <PublicationCard
                  key={`${publication.title}-${index}`}
                  publication={publication}
                  expanded={Boolean(expandedAbstracts[index])}
                  onToggle={() =>
                    setExpandedAbstracts((current) => ({
                      ...current,
                      [index]: !current[index],
                    }))
                  }
                />
              ))}
            </div>
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};
