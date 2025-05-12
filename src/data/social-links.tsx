import { IconMail, IconFileCv, IconBrandLinkedin, IconSchool, IconBrandGithub, IconMapPin } from "@tabler/icons-react";

interface SocialLink {
    href: string;
    icon: React.ReactNode;
    label: string;
    hoverColorClass: string;
    copyContent?: string;
    hoverBgColorClass: string;
  }
  
export const SOCIAL_LINKS: SocialLink[] = [
    {
        href: "/Bhiman_CV.pdf", // <-- Path to your CV file inside public/
        icon: <IconFileCv className="w-10 h-10" />, // <-- New Icon
        label: "Download CV",
        hoverColorClass: "hover:text-cyan-400",
        hoverBgColorClass: "bg-cyan-400/10",
    },
    {
        href: "https://scholar.google.com/citations?user=ee6IULAAAAAJ&hl=en",
        icon: <IconSchool className="w-10 h-10" />,
        label: "Google Scholar",
        hoverColorClass: "hover:text-orange-400",
        hoverBgColorClass: "bg-orange-400/10",
    },
    {
        href: "https://www.linkedin.com/in/bhiman-kumar-baghel/",
        icon: <IconBrandLinkedin className="w-10 h-10" />,
        label: "LinkedIn",
        hoverColorClass: "hover:text-blue-400",
        hoverBgColorClass: "bg-blue-400/10",
    },

    {
        href: "https://github.com/bhimanbaghel",
        icon: <IconBrandGithub className="w-10 h-10" />,
        label: "Github",
        hoverColorClass: "hover:text-pink-400",
        hoverBgColorClass: "bg-pink-400/10",
    },
    {
        href: "mailto:bkb45@pitt.edu",
        icon: <IconMail className="w-10 h-10" />,
        label: "Email",
        hoverColorClass: "hover:text-yellow-300",
        copyContent: "bkb45@pitt.edu",
        hoverBgColorClass: "bg-yellow-300/10", 
    },
    {
        href: "https://maps.app.goo.gl/2G2J6e3oSeX6sjis7",
        icon: <IconMapPin className="w-10 h-10" />,
        label: "Office",
        hoverColorClass: "hover:text-green-400",
        hoverBgColorClass: "bg-green-400/10", 
    },

];