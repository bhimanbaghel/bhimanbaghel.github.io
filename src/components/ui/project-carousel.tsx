"use client";

import { Carousel } from "@/components/ui/carousel";

export function ProjectCarousel() {
  const projectData = [
    {
      title: "Chat-Enabled AI Web Agent",
      description: "Designed modular prompting strategies enabling the agent to reason over multi-step flight search actions based on dynamic browser observations and user goals, enhancing the agent's temporal and spatial reasoning capabilities.",
      tools: "BrowserGym, Gradio, OpenAI GPT-4o, PyTorch",
      src: "https://images.unsplash.com/photo-1555255707-c07966088b7b?q=80&w=3432&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      githubLink: "#", // Replace with actual GitHub link
      youtubeLink: "https://www.youtube.com/watch?v=RVBXemq_AAQ", // Replace with actual YouTube link
    },
    {
      title: "Automatic Concept Map Generation",
      description: "Built a pipeline to generate and visualize concept maps from Wikipedia by extracting entities and semantic relations using entity linking, word embeddings, and syntactic parsing.",
      tools: "PySpotlight, FastText, Stanford CoreNLP",
      src: "https://images.unsplash.com/photo-1509228468518-180dd4864904?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      githubLink: "https://github.com/bhimanbaghel/Concept_Map", // Replace with actual GitHub link
      youtubeLink: "#", // Replace with actual YouTube link
    },
    {
      title: "AI Text Completion App",
      description: "Built a Streamlit web application for AI-powered text completion using Meta's Llama-3.2-1B model with automatic GPU/CPU detection and intuitive interface.",
      tools: "Streamlit, PyTorch, Transformers, Meta Llama-3.2-1B",
      src: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=3432&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      githubLink: "https://github.com/bhimanbaghel/llama-streamlit-app",
      youtubeLink: "#", // Replace with actual YouTube link
    },
    {
      title: "Twitter Sentiment Analysis",
      description: "Developed a web application that fetches real-time tweets based on user queries and classifies their sentiment (positive, negative, neutral) using a Naive Bayes classifier.",
      tools: "Tweepy, NumPy, Scikit-learn, Flask",
      src: "https://images.unsplash.com/photo-1611605698335-8b1569810432?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      githubLink: "https://github.com/bhimanbaghel/SentiMe", // Replace with actual GitHub link
      youtubeLink: "#", // Replace with actual YouTube link
    },
  ];

  return (
    <div className="flex flex-col h-full overflow-hidden">
      <div className="overflow-hidden flex-1 max-h-[19rem]">
        <Carousel slides={projectData} />
      </div>
    </div>
  );
} 