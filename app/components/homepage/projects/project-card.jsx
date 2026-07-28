// @flow strict

import * as React from 'react';
import { FaGithub, FaExternalLinkAlt, FaCheckCircle, FaLightbulb, FaTools } from "react-icons/fa";
import { IoMdBriefcase } from "react-icons/io";
import { MdTimeline } from "react-icons/md";
import { FaYoutube } from "react-icons/fa";

function ProjectCard({ project }) {
  const [showFullDescription, setShowFullDescription] = React.useState(false);

  return (
    <div className="bg-black border border-[#2a2a2a] relative rounded-xl overflow-hidden shadow-lg transition-all duration-500 hover:border-violet-500/60 hover:shadow-[0_0_30px_rgba(139,92,246,0.3)]">
      {/* Top bar with category & architecture badge */}
      <div className="flex flex-wrap items-center justify-between gap-2 px-4 lg:px-6 py-3 bg-[#0d0d0d] border-b border-[#2a2a2a]">
        <div className="flex items-center gap-3">
          <div className="flex gap-1.5">
            <div className="h-3 w-3 rounded-full bg-red-500"></div>
            <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
            <div className="h-3 w-3 rounded-full bg-green-500"></div>
          </div>
          <span className="text-xs font-semibold text-violet-400 bg-violet-500/10 px-3 py-1 rounded-full border border-violet-500/30">
            {project.category}
          </span>
          {project.badge && (
            <span className="text-xs font-semibold text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/30">
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
              className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400 hover:bg-emerald-500/20 border border-emerald-500/30 hover:border-emerald-400 transition-all duration-300 hover:scale-110 flex items-center gap-1 text-xs font-semibold"
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
              className="p-2 rounded-lg bg-violet-500/10 text-violet-400 hover:bg-violet-500/20 border border-violet-500/30 hover:border-violet-400 transition-all duration-300 hover:scale-110 flex items-center gap-1 text-xs font-semibold"
              title="Live Demo"
            >
              <FaExternalLinkAlt className="w-4 h-4" />
              <span className="hidden sm:inline">Live Demo</span>
            </a>
          )}
        </div>
      </div>

      {/* Main content */}
      <div className="px-4 lg:px-6 py-5 lg:py-6">
        {/* Project title and meta */}
        <div className="mb-4">
          <h3 className="text-xl lg:text-2xl font-bold text-white mb-3 group-hover:text-violet-300 transition-colors">
            {project.name}
          </h3>

          <div className="flex flex-wrap gap-3 text-xs text-gray-400">
            <div className="flex items-center gap-1.5">
              <IoMdBriefcase className="text-violet-400" />
              <span>{project.company}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <MdTimeline className="text-emerald-400" />
              <span>{project.timeline}</span>
            </div>
          </div>
        </div>

        {/* Problem Statement */}
        <div className="mb-4">
          <div className="flex items-center gap-2 mb-2">
            <FaLightbulb className="text-amber-400 flex-shrink-0" />
            <h4 className="text-sm font-semibold text-amber-300 uppercase tracking-wide">Problem</h4>
          </div>
          <p className="text-sm text-gray-300 leading-relaxed pl-6">
            {project.problem}
          </p>
        </div>

        {/* Solution */}
        <div className="mb-4">
          <div className="flex items-center gap-2 mb-2">
            <FaTools className="text-blue-400 flex-shrink-0" />
            <h4 className="text-sm font-semibold text-blue-300 uppercase tracking-wide">Solution</h4>
          </div>
          <p className="text-sm text-gray-300 leading-relaxed pl-6">
            {project.solution}
          </p>
        </div>

        {/* Impact metrics */}
        <div className="mb-4">
          <div className="flex items-center gap-2 mb-2">
            <FaCheckCircle className="text-emerald-400 flex-shrink-0" />
            <h4 className="text-sm font-semibold text-emerald-300 uppercase tracking-wide">Impact</h4>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pl-6">
            {project.impact.map((item, index) => (
              <div key={index} className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-1.5 flex-shrink-0"></div>
                <span className="text-xs text-gray-300">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Key highlights - collapsible */}
        {project.highlights && (
          <div className="mb-4">
            <button
              onClick={() => setShowFullDescription(!showFullDescription)}
              className="flex items-center gap-2 mb-2 text-violet-400 hover:text-violet-300 transition-colors"
            >
              <span className="text-sm font-semibold uppercase tracking-wide">
                Key Highlights {showFullDescription ? '▼' : '▶'}
              </span>
            </button>

            {showFullDescription && (
              <div className="space-y-2 pl-6 animate-fadeIn">
                {project.highlights.map((highlight, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-violet-400 mt-1.5 flex-shrink-0"></div>
                    <span className="text-xs text-gray-300">{highlight}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Tech stack */}
        <div className="border-t border-[#1b2c68a0] pt-4 mt-4">
          <div className="flex flex-wrap gap-2">
            {project.tools.map((tool, index) => (
              <span
                key={index}
                className="text-xs px-3 py-1 rounded-full bg-violet-500/10 text-violet-300 border border-violet-500/20 hover:border-violet-400 hover:bg-violet-500/20 transition-all duration-300"
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