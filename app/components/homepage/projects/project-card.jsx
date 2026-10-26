// @flow strict

import * as React from 'react';
import { FaGithub, FaExternalLinkAlt, FaCheckCircle, FaLightbulb, FaTools, FaLaptopCode } from "react-icons/fa";
import { IoMdBriefcase } from "react-icons/io";
import { MdTimeline } from "react-icons/md";
import { FaYoutube } from "react-icons/fa";

function ProjectCard({ project }) {
  const [activeTab, setActiveTab] = React.useState("overview"); // "overview" or "impact"
  const [showFullDescription, setShowFullDescription] = React.useState(false);

  return (
    <div className="glass-panel relative rounded-2xl overflow-hidden shadow-xl transition-all duration-500 hover:-translate-y-2 hover:border-[var(--border-accent)] hover:shadow-[0_20px_40px_var(--accent-glow)] group">
      {/* Top bar with category & architecture badge */}
      <div className="flex flex-wrap items-center justify-between gap-2 px-4 lg:px-6 py-3.5 bg-[var(--bg-card-hover)] border-b border-[var(--border-color)]">
        <div className="flex items-center gap-3">
          <div className="flex gap-1.5">
            <div className="h-3 w-3 rounded-full bg-red-500/80"></div>
            <div className="h-3 w-3 rounded-full bg-yellow-500/80"></div>
            <div className="h-3 w-3 rounded-full bg-green-500/80"></div>
          </div>
          <span className="text-xs font-bold theme-badge px-3 py-1 rounded-full flex items-center gap-1">
            <FaLaptopCode className="text-theme-accent" />
            <span>{project.category}</span>
          </span>
          {project.badge && (
            <span className="text-xs font-bold text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/30">
              {project.badge}
            </span>
          )}
        </div>

        {/* Action buttons */}
        <div className="flex gap-2">
          {project.code && (
            <a
              href={project.code}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400 hover:bg-emerald-500/20 border border-emerald-500/30 hover:border-emerald-400 transition-all duration-300 hover:scale-110 flex items-center gap-1.5 text-xs font-bold"
              title="View Code on GitHub"
            >
              <FaGithub className="w-4 h-4" />
              <span className="hidden sm:inline">GitHub</span>
            </a>
          )}

          {project.youtube && (
            <a
              href={project.youtube}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-red-500/10 text-red-400 hover:bg-red-500/20 border border-red-500/30 hover:border-red-400 transition-all duration-300 hover:scale-110"
              title="Watch Demo Video"
            >
              <FaYoutube className="w-4 h-4" />
            </a>
          )}

          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl btn-theme-accent transition-all duration-300 hover:scale-105 flex items-center gap-1.5 text-xs font-bold shadow-lg"
              title="Live Demo"
            >
              <FaExternalLinkAlt className="w-3.5 h-3.5" />
              <span>{project.demoLabel || "Live App"}</span>
            </a>
          )}
        </div>
      </div>

      {/* Main content */}
      <div className="px-5 lg:px-7 py-6">
        {/* Project title and meta */}
        <div className="mb-5">
          <h3 className="text-xl lg:text-2xl font-extrabold text-[var(--text-main)] mb-2.5 group-hover:text-theme-accent transition-colors">
            {project.name}
          </h3>

          {project.hook && (
            <p className="text-sm text-[var(--text-muted)] leading-relaxed mb-2.5">
              {project.hook}
            </p>
          )}

          <div className="flex flex-wrap gap-4 text-xs text-[var(--text-sub)] font-mono">
            <div className="flex items-center gap-1.5">
              <IoMdBriefcase className="text-theme-accent" />
              <span>{project.company}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <MdTimeline className="text-emerald-400" />
              <span>{project.timeline}</span>
            </div>
          </div>
        </div>

        {/* Tab Switcher inside Card */}
        <div className="flex gap-2 mb-4 p-1 rounded-xl bg-[var(--bg-card-hover)] border border-[var(--border-color)] w-fit">
          <button
            onClick={() => setActiveTab("overview")}
            className={`px-3 py-1 rounded-lg text-xs font-bold transition-all ${
              activeTab === "overview"
                ? "btn-theme-accent text-white"
                : "text-[var(--text-muted)] hover:text-[var(--text-main)]"
            }`}
          >
            Overview
          </button>
          <button
            onClick={() => setActiveTab("impact")}
            className={`px-3 py-1 rounded-lg text-xs font-bold transition-all ${
              activeTab === "impact"
                ? "btn-theme-accent text-white"
                : "text-[var(--text-muted)] hover:text-[var(--text-main)]"
            }`}
          >
            Impact
          </button>
        </div>

        {/* Tab 1: Overview (Problem & Solution) */}
        {activeTab === "overview" && (
          <div className="space-y-4 animate-fadeIn">
            <div>
              <div className="flex items-center gap-2 mb-1.5">
                <FaLightbulb className="text-amber-400 flex-shrink-0" />
                <h4 className="text-xs font-mono font-bold text-amber-400 uppercase tracking-wide">Problem Statement</h4>
              </div>
              <p className="text-xs sm:text-sm text-[var(--text-muted)] leading-relaxed pl-6">
                {project.problem}
              </p>
            </div>

            <div>
              <div className="flex items-center gap-2 mb-1.5">
                <FaTools className="text-cyan-400 flex-shrink-0" />
                <h4 className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-wide">Technical Solution</h4>
              </div>
              <p className="text-xs sm:text-sm text-[var(--text-muted)] leading-relaxed pl-6">
                {project.solution}
              </p>
            </div>

            {project.features && (
              <div>
                <div className="flex items-center gap-2 mb-1.5">
                  <FaCheckCircle className="text-emerald-400 flex-shrink-0" />
                  <h4 className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-wide">Key Features</h4>
                </div>
                <div className="space-y-1.5 pl-6">
                  {project.features.map((feature, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-1.5 flex-shrink-0"></div>
                      <span className="text-xs sm:text-sm text-[var(--text-muted)] leading-relaxed">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        {/* Tab 2: Impact Metrics & Key Accomplishments */}
        {activeTab === "impact" && (
          <div className="space-y-3 animate-fadeIn">
            <div className="flex items-center gap-2 mb-2">
              <FaCheckCircle className="text-emerald-400 flex-shrink-0" />
              <h4 className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-wide">Business Impact</h4>
            </div>
            <div className="grid grid-cols-1 gap-2.5 pl-6">
              {project.impact.map((item, index) => (
                <div key={index} className="flex items-start gap-2.5">
                  <div className="w-2 h-2 rounded-full bg-emerald-400 mt-1.5 flex-shrink-0 animate-pulse"></div>
                  <span className="text-xs sm:text-sm text-[var(--text-muted)] leading-relaxed">{item}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Collapsible Key Highlights */}
        {project.highlights && (
          <div className="mt-4 pt-3 border-t border-[var(--border-color)]">
            <button
              onClick={() => setShowFullDescription(!showFullDescription)}
              className="flex items-center gap-2 text-theme-accent hover:opacity-80 transition-colors text-xs font-mono font-bold uppercase tracking-wide"
            >
              <span>Key Technical Highlights</span>
              <span>{showFullDescription ? '▲' : '▼'}</span>
            </button>

            {showFullDescription && (
              <div className="space-y-2 mt-2 pl-4 animate-fadeIn">
                {project.highlights.map((highlight, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-theme-accent mt-1.5 flex-shrink-0"></div>
                    <span className="text-xs text-[var(--text-muted)] leading-relaxed">{highlight}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Tech stack badge list */}
        <div className="border-t border-[var(--border-color)] pt-4 mt-5">
          <div className="flex flex-wrap gap-2">
            {project.tools.map((tool, index) => (
              <span
                key={index}
                className="text-xs px-3 py-1 rounded-full theme-badge font-mono transition-all hover:scale-105"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;