"use client";

import { personalData } from "@/utils/data/personal-data";
import Link from "next/link";
import { useState } from "react";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { MdDownload, MdContentCopy, MdCheck } from "react-icons/md";
import { RiContactsFill, RiSparklingFill } from "react-icons/ri";
import { FaRocket, FaRobot, FaBolt } from "react-icons/fa";

function HeroSection() {
  const [copied, setCopied] = useState(false);

  const handleCopyCode = () => {
    const codeText = `const vanshika = {\n  name: 'Vanshika Chanana',\n  role: 'Software Developer & AI Engineer',\n  location: 'Gurgaon, India',\n  coreStack: ['Next.js', 'React.js', 'Redux Toolkit', 'Node.js', 'Express.js'],\n  aiSystems: ['PDF Upload RAG Assistant', 'Autonomous AI Research System'],\n  enterpriseImpact: '5+ ITSM Tools & 40% Efficiency Gain'\n};`;
    navigator.clipboard.writeText(codeText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="relative flex flex-col items-center justify-between py-6 lg:py-16">
      {/* Background ambient lighting */}
      <div className="w-[300px] h-[300px] bg-violet-600/15 rounded-full absolute -top-10 -left-10 filter blur-[100px] pointer-events-none animate-pulse-glow"></div>
      <div className="w-[250px] h-[250px] bg-indigo-500/15 rounded-full absolute bottom-10 right-0 filter blur-[90px] pointer-events-none animate-pulse-glow"></div>

      <div className="grid grid-cols-1 items-center lg:grid-cols-2 lg:gap-12 gap-y-10 z-10 w-full">
        {/* Left Side Info */}
        <div className="order-2 lg:order-1 flex flex-col items-start justify-center">
          
          {/* Status Badge */}
          <div className="mb-4 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full theme-badge backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span className="text-xs font-semibold tracking-wide">
              Available for Freelance Projects & Full-Time Roles • Gurgaon, India
            </span>
            <RiSparklingFill className="text-amber-400 w-3.5 h-3.5" />
          </div>

          <h1 className="text-4xl font-extrabold leading-tight text-[var(--text-main)] md:text-5xl lg:text-[3.2rem] lg:leading-[3.8rem] tracking-tight">
            Hi, I am <br />
            <span className="text-gradient-theme drop-shadow-sm">
              {personalData.name}
            </span>
          </h1>

          <p className="mt-3 text-lg md:text-xl font-semibold text-theme-accent tracking-wide flex items-center gap-2 flex-wrap">
            <span>{personalData.designation}</span>
            <span className="text-xs px-2.5 py-0.5 rounded-md theme-badge font-mono">
              Next.js, Micro-Frontends & AI Systems
            </span>
          </p>

          <p className="mt-4 text-sm text-[var(--text-muted)] leading-relaxed max-w-xl">
            {personalData.description}
          </p>

          {/* Quick Highlight Chips with Float Animation */}
          <div className="my-5 flex flex-wrap gap-2.5">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl glass-panel text-xs font-mono font-bold text-amber-400 animate-float shadow-md">
              <FaRocket className="text-amber-400" /> 5+ ITSM Tools Built
            </span>
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl glass-panel text-xs font-mono font-bold text-cyan-400 animate-float-slow shadow-md">
              <FaRobot className="text-cyan-400" /> Multi-Agent RAG AI
            </span>
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl glass-panel text-xs font-mono font-bold text-emerald-400 animate-float shadow-md">
              <FaBolt className="text-emerald-400" /> 40% Efficiency Gain
            </span>
          </div>

          {/* Social Links & Resume CTA */}
          <div className="my-4 flex items-center gap-4">
            <Link
              href={personalData.linkedIn}
              target="_blank"
              className="p-3 rounded-xl glass-panel text-gray-300 hover:text-white hover:scale-110 transition-all duration-300 shadow-md"
              title="LinkedIn Profile"
            >
              <BsLinkedin size={22} className="text-[#0a66c2]" />
            </Link>

            <Link
              href={personalData.github}
              target="_blank"
              className="p-3 rounded-xl glass-panel text-gray-300 hover:text-white hover:scale-110 transition-all duration-300 shadow-md"
              title="GitHub Profile"
            >
              <BsGithub size={22} className="text-[var(--text-main)]" />
            </Link>

            <Link href="#contact">
              <button className="px-5 py-3 rounded-xl btn-theme-accent font-bold text-xs uppercase tracking-wider flex items-center gap-2">
                <span>Contact Me</span>
                <RiContactsFill size={16} />
              </button>
            </Link>

            <a
              role="button"
              target="_blank"
              rel="noopener noreferrer"
              href={personalData.resume}
              className="px-5 py-3 rounded-xl glass-panel text-[var(--text-main)] font-bold text-xs uppercase tracking-wider border border-[var(--border-color)] hover:scale-105 transition-all duration-300 flex items-center gap-2 shadow-md"
            >
              <span>Get Resume</span>
              <MdDownload size={16} className="text-theme-accent" />
            </a>
          </div>
        </div>

        {/* Right Side - Personalized Code Terminal */}
        <div className="order-1 lg:order-2 glass-panel rounded-2xl overflow-hidden shadow-2xl transition-all duration-500 group border border-[var(--border-color)]">
          {/* Top Bar with Mac Controls & Copy Button */}
          <div className="flex items-center justify-between px-5 py-3.5 bg-[var(--bg-terminal-header)] border-b border-[var(--border-color)]">
            <div className="flex items-center gap-3">
              <div className="flex gap-2">
                <div className="h-3 w-3 rounded-full bg-red-500/80 hover:opacity-100 transition-opacity"></div>
                <div className="h-3 w-3 rounded-full bg-yellow-500/80 hover:opacity-100 transition-opacity"></div>
                <div className="h-3 w-3 rounded-full bg-green-500/80 hover:opacity-100 transition-opacity"></div>
              </div>
              <span className="text-xs font-mono theme-badge px-3 py-1 rounded-md">
                vanshika.ts
              </span>
            </div>

            <button
              onClick={handleCopyCode}
              className="p-1.5 rounded-lg bg-[var(--badge-bg)] border border-[var(--badge-border)] text-[var(--text-main)] hover:scale-105 transition-all duration-200 text-xs flex items-center gap-1.5"
              title="Copy Vanshika&apos;s Profile snippet"
            >
              {copied ? (
                <>
                  <MdCheck className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-emerald-400 font-mono">Copied!</span>
                </>
              ) : (
                <>
                  <MdContentCopy className="w-3.5 h-3.5" />
                  <span className="font-mono">Copy</span>
                </>
              )}
            </button>
          </div>

          {/* Terminal Code Snippet */}
          <div className="p-6 font-mono text-xs md:text-sm text-[var(--text-main)] leading-relaxed bg-[var(--bg-terminal)]">
            <div>
              <span className="text-pink-500 font-bold">const</span>{" "}
              <span className="text-theme-accent font-bold">vanshika</span>{" "}
              <span className="text-pink-500 font-bold">=</span>{" "}
              <span className="text-[var(--text-sub)]">&#123;</span>
            </div>

            <div className="pl-6">
              <span className="text-theme-accent">name:</span>{" "}
              <span className="text-amber-500 font-bold">{"'Vanshika Chanana'"}</span>
              <span className="text-[var(--text-sub)]">,</span>
            </div>

            <div className="pl-6">
              <span className="text-theme-accent">role:</span>{" "}
              <span className="text-emerald-500 font-bold">{"'Full-Stack & AI Systems Developer'"}</span>
              <span className="text-[var(--text-sub)]">,</span>
            </div>

            <div className="pl-6">
              <span className="text-theme-accent">location:</span>{" "}
              <span className="text-cyan-400 font-bold">{"'Gurgaon, Haryana, India'"}</span>
              <span className="text-[var(--text-sub)]">,</span>
            </div>

            <div className="pl-6">
              <span className="text-theme-accent">coreTechStack:</span>{" "}
              <span className="text-[var(--text-sub)]">[</span>
            </div>

            <div className="pl-12 flex flex-wrap gap-1.5 py-1">
              <span className="px-2 py-0.5 rounded theme-badge text-xs">
                {"'Next.js'"}
              </span>
              <span className="px-2 py-0.5 rounded theme-badge text-xs">
                {"'React.js'"}
              </span>
              <span className="px-2 py-0.5 rounded theme-badge text-xs">
                {"'Redux Toolkit'"}
              </span>
              <span className="px-2 py-0.5 rounded theme-badge text-xs">
                {"'Node.js'"}
              </span>
              <span className="px-2 py-0.5 rounded theme-badge text-xs">
                {"'Micro-Frontends'"}
              </span>
            </div>

            <div className="pl-6">
              <span className="text-[var(--text-sub)]">]</span>
              <span className="text-[var(--text-sub)]">,</span>
            </div>

            <div className="pl-6">
              <span className="text-theme-accent">aiProjects:</span>{" "}
              <span className="text-[var(--text-sub)]">[</span>
            </div>

            <div className="pl-12 flex flex-wrap gap-1.5 py-1">
              <span className="px-2 py-0.5 rounded theme-badge text-xs text-emerald-400">
                {"'Smart PDF RAG Assistant'"}
              </span>
              <span className="px-2 py-0.5 rounded theme-badge text-xs text-cyan-400">
                {"'Autonomous AI Research System'"}
              </span>
            </div>

            <div className="pl-6">
              <span className="text-[var(--text-sub)]">]</span>
              <span className="text-[var(--text-sub)]">,</span>
            </div>

            <div className="pl-6">
              <span className="text-theme-accent">enterpriseImpact:</span>{" "}
              <span className="text-amber-500 font-bold">{"'5+ ITSM Tools & 40% Workflow Efficiency'"}</span>
              <span className="text-[var(--text-sub)]">,</span>
            </div>

            <div className="pl-6">
              <span className="text-emerald-500 font-bold">hireable:</span>{" "}
              <span className="text-pink-500 font-bold">function</span>
              <span className="text-[var(--text-sub)]">() &#123;</span>
            </div>

            <div className="pl-12">
              <span className="text-pink-500 font-bold">return</span>{" "}
              <span className="text-theme-accent font-bold">this</span>
              <span className="text-[var(--text-sub)]">.</span>
              <span className="text-[var(--text-main)]">coreTechStack</span>
              <span className="text-[var(--text-sub)]">.</span>
              <span className="text-theme-accent">length</span>{" "}
              <span className="text-pink-500 font-bold">&gt;</span>{" "}
              <span className="text-amber-500 font-bold">0</span>
              <span className="text-[var(--text-sub)]">;</span>
            </div>

            <div className="pl-6 text-[var(--text-sub)]">&#125;</div>
            <div className="text-[var(--text-sub)]">&#125;;</div>

            <div className="mt-4 pt-3 border-t border-[var(--border-color)] flex items-center justify-between text-[11px] text-[var(--text-sub)]">
              <span className="flex items-center gap-1.5 font-mono">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
                Terminal Active • Gurgaon
              </span>
              <span className="font-mono">UTF-8 • Node v20.x</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;