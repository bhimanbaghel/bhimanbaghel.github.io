export interface ExperienceItem {
  id: number;
  company: string;
  position: string;
  duration: string;
  location: string;
  logo: string;
  description: string[];
}

// Experience data
export const experienceData: ExperienceItem[] = [
  {
    id: 1,
    company: "Amazon",
    position: "Applied Scientist Intern",
    duration: "September 2025 – Present",
    location: "Seattle, WA, USA",
    logo: "/amazon.png",
    description: [
      "• Selected for a competitive internship with the People eXperience and Technology Central Science (PXTCS) team.",
      "• Internship will focus on Generative AI applications and infrastructure with emphasis on enterprise knowledge integration, while ensuring fairness and privacy are maintained."
    ]
  },
  {
    id: 2,
    company: "University of Pittsburgh",
    position: "Graduate Research Assistant",
    duration: "August 2024 – Present",
    location: "PA, USA",
    logo: "/pitt.png",
    description: [
      "• Engineered a plug-and-play iterative editing pipeline that enhanced edit-success rate by 38 percentage points over prior SOTA on LLaMA-3/2 and GPT-J, enabling rapid knowledge updates without full-model fine-tuning",
      "• Developed a Shapley- and cartography-based framework to identify influential training examples, revealing key differences in generalization behavior of LoRA on legal reasoning tasks compared to other tuning methods",
      "• Conducted a gender-bias audit of GPT-3.5 and BART summaries over 19,579 student reflections; used Jensen–Shannon divergence to reveal a 10% male-topic skew and uncovered under-represented female topics",
      "• Built a 2,900-meme multimodal dataset; manual audit revealed stereotype bias in 40% of LLaVA and MiniGPT-4 explanations, traced to visual/named-entity stereotypes, and text–image representation imbalance"
    ]
  },
  {
    id: 3 ,
    company: "Samsung Research",
    position: "Lead NLP Engineer",
    duration: "June 2019 – August 2023",
    location: "Bangalore, India",
    logo: "/samsung.png",
    description: [
      "• Spearheaded CoSMIC, a BERT-based multi-intent NLU engine for SmartThings; shipped to 100M+ devices, reaching 96% intent accuracy and cutting live NLU errors by 67%",
      "• Localized and scaled CoSMIC for the Korean market, mentoring a cross-site team and re-engineering tokenization to lift intent-slot F₁ by 25%",
      "• Architected production conversational-AI models (intent, slot, OOD) that raised multi-intent F₁ from 87% → 92% and achieved 90% OOD recall across all public benchmarks"
    ]
  },
  {
    id: 4,
    company: "IBM",
    position: "Machine Learning Intern",
    duration: "May 2018 – July 2018",
    location: "Bangalore, India",
    logo: "/ibm.png",
    description: [
      "• Prototyped an LSTM-based anomaly-prediction engine that monitors 33 infrastructure health metrics and launches auto-remediation scripts, forecasting critical failures with 97% precision"
    ]
  }
]; 