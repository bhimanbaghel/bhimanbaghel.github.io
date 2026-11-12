export interface HeroAction {
  label: string;
  href: string;
  kind: "cv" | "scholar" | "email" | "github" | "linkedin";
  external?: boolean;
}

export interface HeroSummarySegment {
  text: string;
  accent?: "cyan" | "lime";
}

export interface HeroSummaryParagraph {
  segments: HeroSummarySegment[];
}

export interface RecentHighlightLink {
  label: string;
  href: string;
}

export interface RecentHighlightStat {
  value: string;
  label: string;
}

export const HERO_CONTENT = {
  eyebrow: "About Me",
  name: "Bhiman Kumar Baghel",
  role: "PhD Student in Computer Science",
  institution: "University of Pittsburgh",
  institutionUrl: "https://www.pitt.edu",
  advisor: "Prof. Xiang (Lorraine) Li",
  advisorUrl: "https://lorraine333.github.io/",
  summary: [
    {
      segments: [
        { text: "My research centers on " },
        { text: "interpretable and efficient reasoning in AI", accent: "cyan" },
        { text: ". I aim to make AI systems more " },
        { text: "trustworthy", accent: "lime" },
        {
          text: " as they increasingly shape decisions in everyday life, while also helping ensure that advanced reasoning capabilities remain ",
        },
        { text: "broadly accessible", accent: "lime" },
        { text: " rather than concentrated among only a few actors." },
      ],
    },
    {
      segments: [
        { text: "My work spans a spectrum from " },
        { text: "verbalized reasoning", accent: "cyan" },
        { text: " to " },
        { text: "mechanistically interpretable reasoning", accent: "cyan" },
        { text: ". This includes making AI agents more capable and efficient through " },
        { text: "inference-time rule distillation", accent: "lime" },
        { text: ", as well as developing " },
        { text: "model editing", accent: "lime" },
        { text: " methods that improve how factual knowledge is updated inside large language models." },
      ],
    },
  ] satisfies HeroSummaryParagraph[],
};

export const HERO_ACTIONS: HeroAction[] = [
  {
    label: "Resume",
    href: "/Bhiman_Resume.pdf",
    kind: "cv",
  },
  {
    label: "Scholar",
    href: "https://scholar.google.com/citations?user=ee6IULAAAAAJ&hl=en",
    kind: "scholar",
    external: true,
  },
  {
    label: "Email",
    href: "mailto:bkb45@pitt.edu",
    kind: "email",
  },
  {
    label: "GitHub",
    href: "https://github.com/bhimanbaghel",
    kind: "github",
    external: true,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/bhiman-kumar-baghel/",
    kind: "linkedin",
    external: true,
  },
];

export const RECENT_HIGHLIGHT = {
  venue: "AACL–IJCNLP 2026 · Long Paper",
  title:
    "GEAR: Training-Free Rule Distillation for Advanced and Efficient Tool-Augmented Reasoning",
  authors: [
    "Bhiman Kumar Baghel",
    "Fanyou Wu",
    "Suraj Maharjan",
    "Peiran Yao",
    "Srinivasan H. Sengamedu",
  ],
  stats: [
    { value: "78", label: "API domains" },
    { value: "4.1×", label: "lower cost vs. ACE" },
    { value: "<1 s", label: "Qwen3-30B latency" },
  ] satisfies RecentHighlightStat[],
  image: "/highlight/gear-framework.png",
  imageAlt:
    "GEAR framework: gather tool-use outcomes, extract compositional rules, and apply rule-augmented reasoning.",
  links: [
    {
      label: "Paper",
      href: "https://aclanthology.org/2026.aacl-long.214/",
    },
  ] satisfies RecentHighlightLink[],
};
