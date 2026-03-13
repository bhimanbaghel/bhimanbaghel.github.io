export type PublicationCategory =
  | "Mechanistic Interpretability"
  | "AI Fairness"
  | "Conversational AI";

export interface Publication {
  title: string;
  link: string;
  authors: string;
  venue: string;
  format: string;
  category: PublicationCategory;
  abstract?: string;
  image?: string;
  imageAlt?: string;
  isNew?: boolean;
  talkLink?: string;
  workshop?: string;
}

export const PUBLICATIONS: Publication[] = [
  {
    title:
      "Resolving UnderEdit & OverEdit with Iterative & Neighbor-Assisted Model Editing.",
    link: "https://arxiv.org/abs/2503.11895",
    authors:
      "Bhiman Kumar Baghel, Emma Jordan, Zheyuan Ryan Shi, Xiang Lorraine Li",
    venue: "EMNLP 2025",
    format: "Findings",
    category: "Mechanistic Interpretability",
    abstract:
      "Large language models can be updated more efficiently through model editing, but existing methods often miss the target fact or damage nearby knowledge. This work introduces iterative and neighbor-assisted model editing to improve edit precision up to 38 percentage points and generalization up to 6, across models, algorithms, and benchmarks.",
    image: "/publication/resolveunderoveredit.png",
    imageAlt:
      "Diagram illustrating iterative and neighbor-assisted model editing for resolving UnderEdit and OverEdit.",
    isNew: true,
  },
  {
    title: "A Fairness Analysis of Human and AI-Generated Student Reflection Summaries.",
    link: "https://aclanthology.org/2024.gebnlp-1.5/",
    authors:
      "Bhiman Kumar Baghel, Arun Balajiee Lekshmi Narayanan, Michael Miller Yoder",
    venue: "ACL 2024",
    workshop: "GeBNLP Workshop",
    format: "Workshop",
    category: "AI Fairness",
    abstract:
      "This study examines the fairness of human- and AI-generated summaries of student reflections in university STEM classes, focusing on potential gender biases. The analysis finds that while human-generated and extractive AI summaries do not show a clear bias, abstractive AI-generated summaries exhibit a bias toward male students by over-representing pedagogical themes from male reflections and under-representing concept-specific topics from female reflections.",
    talkLink: "https://www.youtube.com/watch?v=Mu7M7cn-MbA",
    image: "/publication/reflectionfairness.png",
    imageAlt:
      "Diagram illustrating the topical difference between genders in student reflection summaries.",
  },
  {
    title: "Multimodal Understanding of Memes with Fair Explanations.",
    link: "https://ieeexplore.ieee.org/document/10677889",
    authors: "Yang Zhong, Bhiman Kumar Baghel",
    venue: "CVPR 2024",
    workshop: "MULA Workshop",
    format: "Workshop",
    category: "AI Fairness",
    abstract:
      "This work studies whether recent vision-language models can generate fair explanations for memes across different domains and topics. It contributes a unified benchmark for meme explanation and uses both semi-automatic and manual evaluation to assess explanation quality, identifying major categories of bias in model-generated meme explanations.",
    talkLink: "https://www.youtube.com/watch?v=QneZ9v0THrI",
    image: "/publication/memeexplain.png",
    imageAlt:
      "Diagram illustrating the VLM input.",
  },
  {
    title:
      "Intent Focused Semantic Parsing and Zero-Shot Learning for Out-of-Domain Detection in Spoken Language Understanding.",
    link: "https://ieeexplore.ieee.org/abstract/document/9641813",
    authors: "Niraj Kumar, Bhiman Kumar Baghel",
    venue: "IEEE Access, 2021",
    format: "Journal",
    category: "Conversational AI",
    abstract:
      "This work addresses zero-shot out-of-domain detection in spoken language understanding, where manually labeled OOD data is unavailable. It combines sentence-level intents and token-level intent classes from intent-focused semantic parsing with a one-class neural network classifier, achieving stronger performance than prior methods across four public datasets.",
  },
  {
    title:
      "Smart Stacking of Deep Learning Models for Granular Joint Intent-Slot Extraction for Multi-Intent SLU.",
    link: "https://ieeexplore.ieee.org/abstract/document/9475978",
    authors: "Niraj Kumar, Bhiman Kumar Baghel",
    venue: "IEEE Access, 2021",
    format: "Journal",
    category: "Conversational AI",
    abstract:
      "This work tackles fine-grained multi-intent spoken language understanding, where systems must jointly identify intents and slots while modeling their local relationships at both token and utterance levels. It proposes a smart stacking ensemble built on BERT, XLNet, and ELMo multitask models, outperforming prior multi-intent systems on four public datasets at both sentence and token levels.",
  },
];
