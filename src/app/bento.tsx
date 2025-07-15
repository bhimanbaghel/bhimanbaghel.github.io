//bento.tsx
// import { cn } from "@/lib/utils";
import React from "react";
import Image from "next/image";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { ExpandableModalText } from "@/components/ui/expandable-modal-text";
import { PublicationList } from "@/components/ui/publication-list";
import { NewsList } from "@/components/ui/news-list";
import { ProjectCarousel } from "@/components/ui/project-carousel";
import { EducationList } from "@/components/ui/education-list";
import { ExperienceList } from "@/components/ui/experience-list";
import { ProfileDescription } from "@/data/profile-description";
import {
  IconSchool,
  IconBadge,
  IconNews,
  IconAi,
  IconCertificate,
  IconBuilding,
  IconAward,
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
// Modified items array with 7 items
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
        <ProfileDescription />
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
    {
      title: "Education",
      description: <EducationList />,
      header: null,
      icon: <IconCertificate className="h-6 w-6 text-neutral-500" />,
    },
    {
      title: "Professional Experience",
      description: <ExperienceList />,
      header: null,
      icon: <IconBuilding className="h-6 w-6 text-neutral-500" />,
    },
    {
      title: "Honors and Awards",
      description: (
        <div className="text-neutral-600 dark:text-neutral-400">
          Coming soon...
        </div>
      ),
      header: null,
      icon: <IconAward className="h-6 w-6 text-neutral-500" />,
    },
  ];
