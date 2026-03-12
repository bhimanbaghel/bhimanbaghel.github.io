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
    "Large language models can be updated more efficiently through model editing, but existing methods often miss the target fact or damage nearby knowledge. This work introduces iterative and neighbor-assisted model editing to improve edit precision up to 38 percentage points and generalization up to 6, across models, algorithms, and benchmarks.",
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
