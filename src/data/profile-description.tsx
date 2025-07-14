import React from "react";

export const ProfileDescription = () => (
  <>
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
  </>
); 