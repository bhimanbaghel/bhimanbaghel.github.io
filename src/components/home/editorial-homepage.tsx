"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  IconArrowUpRight,
  IconBrandGithub,
  IconBrandLinkedin,
  IconFileCv,
  IconMail,
  IconSchool,
  IconSparkles,
} from "@tabler/icons-react";
import { cn } from "@/lib/utils";
import {
  HERO_ACTIONS,
  HERO_CONTENT,
  RECENT_HIGHLIGHT,
  type HeroAction,
  type HeroSummarySegment,
} from "@/data/homepage-content";
import { PublicationList } from "@/components/ui/publication-list";
import { NewsList } from "@/components/ui/news-list";
import { ExperienceList } from "@/components/ui/experience-list";
import { EducationList } from "@/components/ui/education-list";
import { HonorsList } from "@/components/ui/honors-list";
import { IndustryInnovationList } from "@/components/ui/industry-innovation-list";

const panelClass =
  "relative overflow-hidden rounded-[30px] border border-white/8 bg-white/[0.035] shadow-[0_30px_120px_rgba(0,0,0,0.35)] backdrop-blur-xl";

function ActionIcon({ kind }: { kind: HeroAction["kind"] }) {
  switch (kind) {
    case "cv":
      return <IconFileCv className="h-4 w-4" />;
    case "scholar":
      return <IconSchool className="h-4 w-4" />;
    case "email":
      return <IconMail className="h-4 w-4" />;
    case "github":
      return <IconBrandGithub className="h-4 w-4" />;
    case "linkedin":
      return <IconBrandLinkedin className="h-4 w-4" />;
    default:
      return null;
  }
}

function SectionShell({
  eyebrow,
  title,
  description,
  children,
  className,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section className={cn(panelClass, "p-5 sm:p-6", className)}>
      <div className="mb-5 space-y-3">
        {eyebrow && (
          <p className="text-[0.68rem] uppercase tracking-[0.28em] text-[#7b8aa0]">
            {eyebrow}
          </p>
        )}
        <div className="space-y-2">
          <h2 className="text-xl font-semibold tracking-[-0.03em] text-[#f5f8fb] sm:text-2xl">
            {title}
          </h2>
          {description && (
            <p className="max-w-2xl text-sm leading-relaxed text-[#a8b5c7]">
              {description}
            </p>
          )}
        </div>
      </div>
      {children}
    </section>
  );
}

function PortraitMotif() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <motion.div
        className="absolute -right-12 -top-8 h-40 w-40 rounded-full border border-cyan-300/15"
        animate={{ y: [0, -10, 0], rotate: [0, 8, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute left-3 top-10 h-24 w-24 rounded-full border border-lime-300/15"
        animate={{ y: [0, 8, 0], x: [0, 4, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -bottom-8 left-10 h-28 w-28 rounded-full bg-lime-300/10 blur-3xl"
        animate={{ scale: [1, 1.08, 1] }}
        transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute right-8 top-20 h-32 w-32 rounded-full bg-cyan-300/10 blur-3xl"
        animate={{ scale: [1, 1.06, 1], y: [0, -8, 0] }}
        transition={{ duration: 13, repeat: Infinity, ease: "easeInOut" }}
      />
      <svg
        className="absolute inset-0 h-full w-full text-white/10"
        viewBox="0 0 420 420"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M66 286C117 203 202 157 305 137"
          stroke="currentColor"
          strokeWidth="1"
          strokeLinecap="round"
          strokeDasharray="4 10"
        />
        <path
          d="M94 88C159 116 238 124 326 112"
          stroke="currentColor"
          strokeWidth="1"
          strokeLinecap="round"
          strokeDasharray="6 12"
        />
        <circle cx="100" cy="88" r="4" fill="rgba(154, 230, 180, 0.85)" />
        <circle cx="305" cy="137" r="4" fill="rgba(125, 211, 252, 0.85)" />
        <circle cx="66" cy="286" r="4" fill="rgba(125, 211, 252, 0.85)" />
        <circle cx="326" cy="112" r="4" fill="rgba(154, 230, 180, 0.85)" />
      </svg>
    </div>
  );
}

function MiniPortrait() {
  return (
    <div className="relative h-28 w-28 overflow-hidden rounded-[28px] border border-white/10 bg-[#10161f] sm:h-32 sm:w-32">
      <PortraitMotif />
      <Image
        src="/bkb.png"
        alt="Portrait of Bhiman Kumar Baghel"
        width={240}
        height={240}
        className="relative h-full w-full object-cover"
        priority
      />
    </div>
  );
}

function HeroActionLink({ action }: { action: HeroAction }) {
  const opensNewTab =
    action.external || action.href.startsWith("http") || action.href.endsWith(".pdf");

  return (
    <a
      href={action.href}
      target={opensNewTab ? "_blank" : undefined}
      rel={opensNewTab ? "noopener noreferrer" : undefined}
      className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.05] px-3 py-2 text-sm font-medium text-[#edf3fb] transition-colors hover:border-cyan-300/25 hover:bg-cyan-300/10 hover:text-cyan-100"
    >
      <ActionIcon kind={action.kind} />
      <span>{action.label}</span>
    </a>
  );
}

function HighlightLinkIcon({ label }: { label: string }) {
  if (label === "GitHub") {
    return <IconBrandGithub className="h-3.5 w-3.5" />;
  }

  return <IconArrowUpRight className="h-3.5 w-3.5" />;
}

function SummarySegment({ segment }: { segment: HeroSummarySegment }) {
  if (!segment.accent) {
    return <span>{segment.text}</span>;
  }

  const accentClass =
    segment.accent === "cyan"
      ? "font-medium text-cyan-100"
      : "font-medium text-lime-100";

  return <span className={accentClass}>{segment.text}</span>;
}

function SummaryText({ segments }: { segments: HeroSummarySegment[] }) {
  return (
    <>
      {segments.map((segment) => (
        <SummarySegment
          key={`${segment.text}-${segment.accent ?? "plain"}`}
          segment={segment}
        />
      ))}
    </>
  );
}

function splitSegmentsAtFirstSentence(segments: HeroSummarySegment[]) {
  const intro: HeroSummarySegment[] = [];
  const rest: HeroSummarySegment[] = [];
  let sentenceEnded = false;

  for (const segment of segments) {
    if (sentenceEnded) {
      rest.push(segment);
      continue;
    }

    const periodIndex = segment.text.indexOf(".");

    if (periodIndex === -1) {
      intro.push(segment);
      continue;
    }

    const introText = segment.text.slice(0, periodIndex + 1);
    const restText = segment.text.slice(periodIndex + 1);

    if (introText) {
      intro.push({ ...segment, text: introText });
    }

    if (restText) {
      rest.push({ ...segment, text: restText });
    }

    sentenceEnded = true;
  }

  return { intro, rest };
}

function ResearchHighlightCard() {
  return (
    <SectionShell
      eyebrow="Research Highlight"
      title={RECENT_HIGHLIGHT.title}
      className="h-full bg-[linear-gradient(180deg,rgba(34,48,64,0.42),rgba(17,24,34,0.88))]"
    >
      <div className="flex flex-col gap-5">
        <p className="text-sm leading-relaxed text-[#b4c0d1]">
          {RECENT_HIGHLIGHT.authors.map((author, index) => (
            <span key={author}>
              {index > 0 ? ", " : ""}
              <span
                className={
                  author === HERO_CONTENT.name ? "font-semibold text-[#f4f8fc]" : undefined
                }
              >
                {author}
              </span>
            </span>
          ))}
        </p>
        <div className="flex flex-wrap items-center gap-2">
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/10 px-3 py-1 text-[0.72rem] uppercase tracking-[0.24em] text-cyan-100">
            <IconSparkles className="h-3.5 w-3.5" />
            {RECENT_HIGHLIGHT.venue}
          </div>
          {RECENT_HIGHLIGHT.links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.05] px-3 py-2 text-xs font-medium text-[#edf3fb] transition-colors hover:border-cyan-300/30 hover:bg-cyan-300/10 hover:text-cyan-100"
            >
              <HighlightLinkIcon label={link.label} />
              {link.label}
            </a>
          ))}
        </div>
        <div className="space-y-2">
          <p className="text-[0.68rem] uppercase tracking-[0.2em] text-[#7f90a7]">
            Key Contribution
          </p>
          <p className="text-sm leading-relaxed text-[#aebacc]">
            {RECENT_HIGHLIGHT.contribution}
          </p>
        </div>
        <div className="overflow-hidden rounded-[24px] border border-white/10 bg-white">
          <Image
            src={RECENT_HIGHLIGHT.image}
            alt="Research highlight placeholder visual"
            width={960}
            height={540}
            priority
            className="h-44 w-full object-contain object-center sm:h-52"
          />
        </div>
      </div>
    </SectionShell>
  );
}

export function EditorialHomepage() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(52,211,153,0.14),transparent_32%),radial-gradient(circle_at_80%_0%,rgba(103,232,249,0.12),transparent_28%),linear-gradient(180deg,#091018_0%,#0d131b_42%,#0a1016_100%)]" />
        <div className="absolute inset-0 opacity-[0.08] [background-image:linear-gradient(rgba(255,255,255,0.7)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.7)_1px,transparent_1px)] [background-size:120px_120px]" />
      </div>

      <div className="relative mx-auto max-w-[1560px] px-4 py-6 sm:px-6 sm:py-10 lg:px-10 lg:py-12">
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="grid items-stretch gap-6 xl:grid-cols-[minmax(0,1.58fr)_minmax(360px,0.98fr)]"
        >
          <div className={cn(panelClass, "h-full p-6 sm:p-8 lg:p-10")}>
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/35 to-transparent" />
            <div className="space-y-8">
              <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
                <div className="space-y-4">
                  <p className="text-[0.7rem] uppercase tracking-[0.3em] text-[#7f90a7]">
                    {HERO_CONTENT.eyebrow}
                  </p>
                  <div className="space-y-3">
                    <h1 className="max-w-4xl text-4xl font-semibold tracking-[-0.05em] text-[#f7fbff] sm:text-5xl lg:text-[4.25rem] lg:leading-[0.96]">
                      {HERO_CONTENT.name}
                    </h1>
                    <div className="space-y-1 text-base text-[#c2cddd] sm:text-lg">
                      <p>
                        {HERO_CONTENT.role},{" "}
                        <a
                          href={HERO_CONTENT.institutionUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-cyan-100 underline decoration-cyan-300/25 underline-offset-4 transition-colors hover:text-cyan-50"
                        >
                          {HERO_CONTENT.institution}
                        </a>
                      </p>
                      <p>
                        Advised by{" "}
                        <a
                          href={HERO_CONTENT.advisorUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-lime-100 underline decoration-lime-300/20 underline-offset-4 transition-colors hover:text-lime-50"
                        >
                          {HERO_CONTENT.advisor}
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="hidden shrink-0 sm:block sm:pt-2">
                  <MiniPortrait />
                </div>
              </div>

              <div className="max-w-3xl space-y-4 text-base leading-relaxed text-[#aab8cb] sm:text-[1.05rem]">
                {HERO_CONTENT.summary.map((paragraph, index) => {
                  const paragraphKey = paragraph.segments
                    .map((segment) => segment.text)
                    .join("");

                  if (index === 0) {
                    const { intro: mobileIntro, rest: mobileRest } =
                      splitSegmentsAtFirstSentence(paragraph.segments);

                    return (
                      <div key={paragraphKey} className="space-y-4">
                        <div className="flex items-start gap-4 sm:hidden">
                          <div className="shrink-0">
                            <MiniPortrait />
                          </div>
                          <p className="min-w-0 flex-1">
                            <SummaryText segments={mobileIntro} />
                          </p>
                        </div>
                        <p className="hidden sm:block">
                          <SummaryText segments={paragraph.segments} />
                        </p>
                        {mobileRest.length > 0 ? (
                          <p className="sm:hidden">
                            <SummaryText segments={mobileRest} />
                          </p>
                        ) : null}
                      </div>
                    );
                  }

                  return (
                    <p key={paragraphKey}>
                      <SummaryText segments={paragraph.segments} />
                    </p>
                  );
                })}
              </div>

              <div className="flex flex-wrap gap-3">
                {HERO_ACTIONS.map((action) => (
                  <HeroActionLink key={action.label} action={action} />
                ))}
              </div>
            </div>
          </div>

          <motion.aside
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.08 }}
            className="h-full"
          >
            <ResearchHighlightCard />
          </motion.aside>
        </motion.section>

        <div className="mt-6 space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.32, delay: 0.16 }}
          >
            <SectionShell
              eyebrow="Live Timeline"
              title="News"
              description="Conference presentations, milestones, and recent updates."
            >
              <NewsList />
            </SectionShell>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.32, delay: 0.2 }}
          >
            <SectionShell
              eyebrow="Primary Research Record"
              title="Publications"
              description="Peer-reviewed work and archival publications spanning mechanistic interpretability, AI fairness, conversational AI, and AI creativity."
              className="p-5 sm:p-7"
            >
              <PublicationList />
            </SectionShell>
          </motion.div>

          <div className="grid gap-6 xl:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.32, delay: 0.24 }}
            >
              <SectionShell
                eyebrow="Research and Industry"
                title="Experience"
                description="Recent work across academia and industry, with emphasis on research contributions, systems impact, and model behavior."
              >
                <ExperienceList />
              </SectionShell>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.32, delay: 0.28 }}
            >
              <SectionShell
                eyebrow="Academic Background"
                title="Education"
                description="Training, degrees, and academic mentorship across institutions."
              >
                <EducationList />
              </SectionShell>
            </motion.div>
          </div>

          <div className="grid gap-6 xl:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.32, delay: 0.32 }}
            >
              <SectionShell
                eyebrow="Applied AI"
                title="Patents & Industry Innovation"
                description="Patent work and production-facing research connected to conversational AI, IoT, and personalization."
              >
                <IndustryInnovationList />
              </SectionShell>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.32, delay: 0.36 }}
            >
              <SectionShell
                eyebrow="Recognition"
                title="Honors"
                description="Selected awards and recognitions across research and industry."
              >
                <HonorsList />
              </SectionShell>
            </motion.div>
          </div>
        </div>
      </div>
    </main>
  );
}
