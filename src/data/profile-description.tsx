import React from "react";

export const ProfileDescription = () => (
  <>
    I&apos;m a 3rd Year Ph.D. student in Computer Science at the{" "}
    <a href="https://www.pitt.edu" className="text-cyan-400 hover:text-cyan-300" target="_blank" rel="noopener noreferrer">
      University of Pittsburgh
    </a>{" "} 
    advised by{" "}
    <a href="https://lorraine333.github.io/" className="text-cyan-400 hover:text-cyan-300" target="_blank" rel="noopener noreferrer">
      <strong>Prof. Xiang (Lorraine) Li</strong>
    </a>.
    <br />
    <br />
    My research focuses on <strong>interpretable, parameter-efficient reasoning in large language models</strong>.
    <br />
    <br />
    I developed a plug-and-play editing framework that <em>improves editing performance by 38 points over prior SOTA</em>. This was enabled by formalizing key failure modes in model editing—UnderEdit (failure to inject knowledge) and OverEdit (unintended side effects)—and identifying their root causes through empirical and representational analysis.
    <br />
    <br />
    More recently, I&apos;ve been exploring how parameter-efficient tuning methods, like LoRA, affect reasoning in legal domains, using data Shapley values and training dynamics to understand and improve generalization. My broader goal is to steer foundation models toward more reliable, trustworthy reasoning in high-stakes applications.
  </>
); 