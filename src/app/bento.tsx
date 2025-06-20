//bento.tsx
// import { cn } from "@/lib/utils";
import React from "react";
import Image from "next/image";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { ExpandableModalText } from "@/components/ui/expandable-modal-text";
import { PublicationList } from "@/components/ui/publication-list";
import { NewsList } from "@/components/ui/news-list";
import { ProjectCarousel } from "@/components/ui/project-carousel";
import {
  IconSchool,
  IconBadge,
  IconNews,
  IconAi,
} from "@tabler/icons-react";

export function BentoGridDemo() {
    return (
      <BentoGrid className="max-w-6xl mx-auto">
        {items.map((item, i) => (
          <BentoGridItem
            key={i}
            title={item.title}
            description={item.description}
            header={item.header}
            icon={item.icon}
            className={item.className}
          />
        ))}
      </BentoGrid>
    );
}
// Modified items array with just 4 items
const items = [
    {
      title: "Bhiman Kumar Baghel",
      description: (
        <ExpandableModalText
          image={
                <Image
        src="/bkb.png"
        alt="Profile picture"
        width={360}
        height={400}
        className="w-[280px] md:w-[320px] lg:w-[360px] h-auto rounded-xl object-cover"
      />
        }
      >
        I am a <strong>3rd Year Ph.D. student</strong> in Computer Science at the{" "}
        <a href="https://www.pitt.edu" className="text-cyan-400 hover:text-cyan-300" target="_blank" rel="noopener noreferrer">
          University of Pittsburgh, USA
        </a>{" "} 
        advised by{" "}
        <a href="https://lorraine333.github.io/" className="text-cyan-400 hover:text-cyan-300" target="_blank" rel="noopener noreferrer">
          <strong>Professor Xiang (Lorraine) Li</strong>
        </a>.
        <br />
        My research focuses on improving the internal representations of large language models (<strong>LLMs</strong>) through direct <strong><em>model editing</em></strong>.
        <br />
        I formalized key limitations in locate-and-edit algorithms, specifically <em>UnderEdit</em> and <em>OverEdit</em>, and developed methods to address them. This work led to a <strong>38</strong> <em>percentage point improvement</em> over the previous state-of-the-art.
        <br />
        More recently, I&apos;ve begun exploring editing techniques to enhance the legal reasoning capabilities of LLMs, with the goal of making them more accurate, interpretable, and trustworthy.
        
      </ExpandableModalText>
      ),
      header: (
        <div className="w-full h-1/2 rounded-xl overflow-hidden relative p-4">
          <div 
            className="w-full h-full rounded-xl overflow-hidden relative animate-float"
            style={{
              filter: "drop-shadow(0 0 8px rgba(144, 238, 144, 0.5))",
            }}
          >
            <Image 
              src="/bkb.png" 
              alt="Profile picture" 
              width={400}
              height={400}
              className="w-full h-full object-cover rounded-xl"
            />
          </div>
        </div>
      ),
      icon: <IconBadge className="h-6 w-6 text-neutral-500" />,
      className: "md:row-span-2", // This will make the first box span 2 rows
    },
    {
      title: "Publications and Patents",
      description: <PublicationList />,
      header: null,
      icon: <IconSchool className="h-6 w-6 text-neutral-500" />,
      className: "md:col-span-2",
    },
    {
      title: "News",
      description: <NewsList />,
      header: null,
      icon: <IconNews className="h-6 w-6 text-neutral-500" />,
    },
    {
      title: "Projects",
      description: <ProjectCarousel />,
      header: null,
      icon: <IconAi className="h-6 w-6 text-neutral-500" />,
    },
  ];
