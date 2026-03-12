export interface HeroAction {
  label: string;
  href: string;
  kind: "cv" | "scholar" | "email" | "github" | "linkedin";
  external?: boolean;
}

export interface RecentHighlightLink {
  label: string;
  href: string;
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
    "I study interpretable and parameter-efficient reasoning in large language models, with current interests in model editing, LoRA, and reliability in high-stakes settings.",
    "My recent work formalizes failure modes in model editing and develops methods that improve edit precision and generalization, with the broader goal of making foundation models more steerable and trustworthy.",
  ],
};

export const HERO_ACTIONS: HeroAction[] = [
  {
    label: "CV",
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

export const RESEARCH_FOCUS = [
  "Model Editing",
  "Parameter-Efficient Reasoning",
  "LoRA / PEFT",
  "Reliability",
  "High-Stakes NLP",
];

export const RECENT_HIGHLIGHT = {
  venue: "EMNLP 2025 Findings",
  title:
    "Resolving UnderEdit & OverEdit with Iterative & Neighbor-Assisted Model Editing",
  authors: [
    "Bhiman Kumar Baghel",
    "Emma Jordan",
    "Zheyuan Ryan Shi",
    "Xiang Lorraine Li",
  ],
  contribution:
    "Large language models can be updated more efficiently through model editing, but existing methods often miss the target fact or damage nearby knowledge. This work introduces iterative and neighbor-assisted model editing to improve edit precision up to 38 percentage points and generalization upto 6, across models, algorithms, and benchmarks.",
  image: "/publication/resolveunderoveredit.png",
  links: [
    {
      label: "GitHub",
      href: "https://github.com/bhimanbaghel/ResolveUnderOverEdit",
    },
    {
      label: "Paper",
      href: "https://aclanthology.org/2025.findings-emnlp.798/",
    },
    {
      label: "Talk",
      href: "https://underline.io/lecture/132679-resolving-underedit-and-overedit-with-iterative-and-neighbor-assisted-model-editing",
    },
  ] satisfies RecentHighlightLink[],
};
