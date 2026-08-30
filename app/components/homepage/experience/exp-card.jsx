"use client";

import { useState } from "react";
import Image from "next/image";
import { FaExternalLinkAlt, FaGithub, FaCheckCircle, FaPaperPlane } from "react-icons/fa";
import { IoMdBriefcase } from "react-icons/io";
import { MdTimeline } from "react-icons/md";
import { HiSparkles } from "react-icons/hi";

export default function ExperienceCard({ exp }) {
  const [openProjects, setOpenProjects] = useState([]);

  const toggleProject = (index) => {
    if (openProjects.includes(index)) {
      setOpenProjects(openProjects.filter(i => i !== index));
    } else {
      setOpenProjects([...openProjects, index]);
    }
  };

  return (
    <div className="glass-panel rounded-2xl overflow-hidden shadow-xl transition-all duration-500 w-full max-w-5xl mx-auto">
      {/* Top bar with company info */}
      <div className="flex items-center justify-between px-6 lg:px-8 py-4 bg-[var(--bg-card-hover)] border-b border-[var(--border-color)]">
        <div className="flex items-center gap-4">
          <div className="flex gap-2">
            <div className="h-3 w-3 rounded-full bg-red-500/80"></div>
            <div className="h-3 w-3 rounded-full bg-yellow-500/80"></div>
            <div className="h-3 w-3 rounded-full bg-green-500/80"></div>
          </div>
          
          {/* Company badge */}
          <div className="flex items-center gap-3">
            <Image src={exp.logo} alt={exp.company} width={32} height={32} className="rounded" />
            <span className="text-xs font-bold theme-badge px-4 py-1.5 rounded-full">
              {exp.company}
            </span>
          </div>
        </div>
      </div>

      {/* Role Header */}
      <div className="px-6 lg:px-8 py-5 border-b border-[var(--border-color)]">
        <div className="flex flex-col gap-2 mb-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-start gap-3">
            <IoMdBriefcase
              className="text-theme-accent shrink-0 min-w-[28px]"
              size={28}
            />
            <h3 className="text-xl lg:text-2xl font-extrabold text-[var(--text-main)] leading-tight">
              {exp.role}
            </h3>
          </div>

          <div className="flex items-center gap-2 text-xs font-mono text-[var(--text-sub)] sm:justify-end">
            <MdTimeline className="text-emerald-400 shrink-0" size={18} />
            <span>{exp.duration}</span>
          </div>
        </div>

        {/* Role Highlights */}
        {exp.highlights && exp.highlights.length > 0 && (
          <div className="space-y-2.5 mt-4">
            {exp.highlights.map((highlight, idx) => (
              <div key={idx} className="flex items-start gap-2.5">
                <HiSparkles className="text-theme-accent mt-0.5 flex-shrink-0" size={15} />
                <span className="text-xs sm:text-sm text-[var(--text-muted)] leading-relaxed">{highlight}</span>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Notable Projects Section */}
      <div className="px-6 lg:px-8 py-5">
        <h4 className="text-xs font-mono font-bold text-[var(--text-sub)] uppercase tracking-wider mb-4">
          Notable Accomplishments & Projects
        </h4>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {exp.projects.map((project, i) => (
            <div key={i}>
              <button
                onClick={() => toggleProject(i)}
                className="w-full text-left group"
              >
                <div className="flex items-center justify-between p-3.5 rounded-xl bg-[var(--bg-card-hover)] border border-[var(--border-color)] hover:border-[var(--border-accent)] transition-all">
                  <span className="text-xs sm:text-sm font-semibold text-[var(--text-main)] group-hover:text-theme-accent transition-colors">
                    {project.name}
                  </span>
                  <div className="flex gap-2 items-center">
                    {project.code && (
                      <a 
                        href={project.code} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="p-1.5 rounded-lg bg-emerald-500/10 text-emerald-400 hover:bg-emerald-500/20 border border-emerald-500/30 transition-all text-xs"
                      >
                        <FaGithub className="w-3.5 h-3.5" />
                      </a>
                    )}
                    {project.demo2 && (
                      <a 
                        href={project.demo2} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="p-1.5 rounded-lg theme-badge hover:scale-105 transition-all text-xs"
                      >
                        <FaPaperPlane className="w-3.5 h-3.5" />
                      </a>
                    )}
                    {project.demo && (
                      <a 
                        href={project.demo} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="p-1.5 rounded-lg theme-badge hover:scale-105 transition-all text-xs"
                      >
                        <FaExternalLinkAlt className="w-3.5 h-3.5" />
                      </a>
                    )}
                  </div>
                </div>
              </button>

              {/* Expandable Impact Section */}
              {openProjects.includes(i) && project.impact && (
                <div className="mt-2 p-3.5 rounded-xl bg-[var(--bg-card-hover)] border border-[var(--border-color)] animate-fadeIn">
                  <div className="flex items-center gap-2 mb-2">
                    <FaCheckCircle className="text-emerald-400 flex-shrink-0 text-xs" />
                    <span className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-wide">
                      Impact Metrics
                    </span>
                  </div>
                  <div className="space-y-1.5 pl-4">
                    {project.impact.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-1.5 flex-shrink-0"></div>
                        <span className="text-xs text-[var(--text-muted)] leading-relaxed">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}