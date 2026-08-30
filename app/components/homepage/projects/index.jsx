"use client";

import { useState } from 'react';
import { projectsData } from '@/utils/data/projects-data';
import ProjectCard from './project-card';
import { FaSearch, FaProjectDiagram, FaThLarge, FaList } from 'react-icons/fa';

const Projects = () => {
  const [filter, setFilter] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [viewLayout, setViewLayout] = useState('grid'); // 'grid' or 'list'
  
  const categories = ['All', ...new Set(projectsData.map(p => p.category))];
  
  const filteredProjects = projectsData.filter((project) => {
    const matchesCategory = filter === 'All' || project.category === filter;
    const query = searchQuery.toLowerCase().trim();
    const matchesSearch =
      !query ||
      project.name.toLowerCase().includes(query) ||
      project.problem.toLowerCase().includes(query) ||
      project.solution.toLowerCase().includes(query) ||
      project.tools.some((t) => t.toLowerCase().includes(query)) ||
      (project.badge && project.badge.toLowerCase().includes(query));
    return matchesCategory && matchesSearch;
  });

  return (
    <div id='projects' className="relative z-50 my-16 lg:my-28">
      {/* Section Header */}
      <div className="flex flex-col items-center justify-center text-center mb-10">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full theme-badge text-xs font-mono uppercase tracking-widest mb-3">
          <FaProjectDiagram className="text-theme-accent" />
          <span>Portfolio Showcase</span>
        </div>
        <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--text-main)] tracking-tight">
          Featured <span className="text-gradient-theme">Projects</span>
        </h2>
        <p className="text-sm text-[var(--text-muted)] max-w-xl mt-2">
          Explore AI systems, enterprise modules, and high-scale full-stack applications with live demos.
        </p>
      </div>

      {/* Interactive Search & Filter Controls */}
      <div className="glass-panel p-4 md:p-6 rounded-2xl mb-8 flex flex-col md:flex-row items-center justify-between gap-4 shadow-xl">
        {/* Search Input Bar */}
        <div className="relative w-full md:w-80">
          <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-[var(--text-sub)] text-sm" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search RAG, Next.js, Python, ITSM..."
            className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-[var(--bg-card-hover)] border border-[var(--border-color)] text-[var(--text-main)] text-xs md:text-sm placeholder-[var(--text-sub)] focus:outline-none focus:border-[var(--border-accent)] transition-colors"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-[var(--text-sub)] hover:text-[var(--text-main)]"
            >
              ✕
            </button>
          )}
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap gap-2 justify-center w-full md:w-auto">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all duration-300 ${
                filter === category
                  ? 'btn-theme-accent scale-105'
                  : 'bg-[var(--bg-card-hover)] text-[var(--text-muted)] hover:text-[var(--text-main)] border border-[var(--border-color)]'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Results Counter & Layout Switcher Bar */}
      <div className="flex items-center justify-between px-2 mb-6 text-xs text-[var(--text-sub)] font-mono">
        <span className="font-bold text-[var(--text-main)]">
          Showing {filteredProjects.length} of {projectsData.length} Projects
        </span>

        {/* Grid vs List View Toggle */}
        <div className="flex items-center gap-1.5 p-1 rounded-xl bg-[var(--bg-card-hover)] border border-[var(--border-color)]">
          <button
            onClick={() => setViewLayout('grid')}
            className={`p-1.5 rounded-lg transition-all ${
              viewLayout === 'grid'
                ? 'btn-theme-accent text-white'
                : 'text-[var(--text-muted)] hover:text-[var(--text-main)]'
            }`}
            title="Grid Layout View"
          >
            <FaThLarge className="w-3.5 h-3.5" />
          </button>
          <button
            onClick={() => setViewLayout('list')}
            className={`p-1.5 rounded-lg transition-all ${
              viewLayout === 'list'
                ? 'btn-theme-accent text-white'
                : 'text-[var(--text-muted)] hover:text-[var(--text-main)]'
            }`}
            title="Single Column View"
          >
            <FaList className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Projects Display */}
      <div className={viewLayout === 'grid' ? "grid grid-cols-1 lg:grid-cols-2 gap-8" : "flex flex-col gap-8 max-w-4xl mx-auto"}>
        {filteredProjects.length > 0 ? (
          filteredProjects.map((project) => (
            <div
              key={project.id}
              className="w-full transition-all duration-500 animate-fadeIn"
            >
              <ProjectCard project={project} />
            </div>
          ))
        ) : (
          <div className="col-span-full text-center py-16 glass-panel rounded-2xl border border-[var(--border-color)]">
            <p className="text-[var(--text-muted)] text-base font-semibold">No matching projects found for &quot;{searchQuery}&quot;</p>
            <button
              onClick={() => { setSearchQuery(''); setFilter('All'); }}
              className="mt-4 px-4 py-2 rounded-xl btn-theme-accent text-xs font-bold"
            >
              Reset Search & Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Projects;