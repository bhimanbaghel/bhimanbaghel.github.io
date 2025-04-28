// src/components/ui/social-links.tsx
import * as Tooltip from "@radix-ui/react-tooltip";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { IconMail, IconCopy, IconCheck, IconBrandLinkedin, IconSchool, IconDownload, IconBrandGithub } from "@tabler/icons-react";

interface SocialLink {
  href: string;
  icon: React.ReactNode;
  label: string;
  hoverColorClass: string;
  copyContent?: string;
}

const SOCIAL_LINKS: SocialLink[] = [
    {
        href: "/Bhiman_CV.pdf", // <-- Path to your CV file inside public/
        icon: <IconDownload className="w-10 h-10" />, // <-- New Icon
        label: "Download CV",
        hoverColorClass: "hover:text-cyan-400",
      },
      {
        href: "https://scholar.google.com/citations?user=ee6IULAAAAAJ&hl=en",
        icon: <IconSchool className="w-10 h-10" />,
        label: "Google Scholar",
        hoverColorClass: "hover:text-orange-400",
      },
      {
        href: "https://www.linkedin.com/in/bhiman-kumar-baghel/",
        icon: <IconBrandLinkedin className="w-10 h-10" />,
        label: "LinkedIn",
        hoverColorClass: "hover:text-blue-400",
      },

  {
    href: "https://bhimanbaghel.github.io/",
    icon: <IconBrandGithub className="w-10 h-10" />,
    label: "Github",
    hoverColorClass: "hover:text-pink-400",
  },
  {
    href: "mailto:bkb45@pitt.edu",
    icon: <IconMail className="w-10 h-10" />,
    label: "Email",
    hoverColorClass: "hover:text-yellow-300",
    copyContent: "bkb45@pitt.edu", 
  },
  
];

export const SocialLinksGrid = () => {
    const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

    const handleCopy = async (text: string, index: number) => {
        try {
        await navigator.clipboard.writeText(text);
        setCopiedIndex(index);
        setTimeout(() => setCopiedIndex(null), 1200); // Reset after 1.2 sec
        } catch (error) {
        console.error("Failed to copy:", error);
        }
    };
    
    return (
        <div className="grid grid-rows-[repeat(5,minmax(0,1fr))] h-full w-full place-items-center">
          {SOCIAL_LINKS.map((link, i) => (
            <Tooltip.Root key={i} delayDuration={100}>
              <Tooltip.Trigger asChild>
                <div className="flex justify-center items-center w-full mt-10 mb-10 -ml-5 mr-0">
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={link.label}
                    className={cn(
                      "text-neutral-400 transition-transform duration-200 hover:scale-110",
                      link.hoverColorClass
                    )}>
                    {link.icon}
                  </a>
                </div>
              </Tooltip.Trigger>
              <Tooltip.Portal>
              <Tooltip.Content
                side="top"
                sideOffset={5}
                className="rounded-md bg-white/10 px-2 py-1 text-xs text-white backdrop-blur-md drop-shadow-md animate-fade-in z-[100] flex items-center gap-2"
              >
                <span>{copiedIndex === i ? "Copied!" : link.label}</span>
                {/* Show copy button if copyContent exists */}
                {link.copyContent && (
                    <button
                    onClick={() => handleCopy(link.copyContent!, i)}
                    className="text-white hover:text-green-400 transition"
                    >
                    {copiedIndex === i ? (
                        <IconCheck className="w-4 h-4" />
                    ) : (
                        <IconCopy className="w-4 h-4" />
                    )}
                    </button>
                )}
                <Tooltip.Arrow className="fill-white/10" />
              </Tooltip.Content>
              </Tooltip.Portal>
            </Tooltip.Root>
          ))}
        </div>
    );
};