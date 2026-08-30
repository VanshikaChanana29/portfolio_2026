"use client";

import { useState } from "react";
import { experience } from "@/utils/data/experience";
import ExperienceCard from "./exp-card.jsx";
import { HiSparkles, HiBriefcase } from "react-icons/hi";

function Experience() {
  const [activeCompany, setActiveCompany] = useState("All");

  const sortedExperience = [...experience].sort((a, b) => b.id - a.id);
  const companies = ["All", ...new Set(experience.map((e) => e.company))];

  const filteredExperience = activeCompany === "All"
    ? sortedExperience
    : sortedExperience.filter((e) => e.company === activeCompany);

  return (
    <div id="experience" className="relative z-50 my-16 lg:my-28">
      {/* Section Header */}
      <div className="flex flex-col items-center justify-center text-center mb-10">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full theme-badge text-xs font-mono uppercase tracking-widest mb-3">
          <HiSparkles className="text-amber-400" />
          <span>Career Journey</span>
        </div>
        <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--text-main)] tracking-tight">
          Work <span className="text-gradient-theme">Experience</span>
        </h2>
        <p className="text-sm text-[var(--text-muted)] max-w-xl mt-2">
          Building enterprise ITSM tools, optimizing e-commerce performance, and engineering autonomous AI systems.
        </p>
      </div>

      {/* Company Filter Tabs */}
      <div className="mb-12 flex flex-wrap gap-2.5 justify-center px-4">
        {companies.map((company) => (
          <button
            key={company}
            onClick={() => setActiveCompany(company)}
            className={`px-4 py-2 rounded-xl text-xs md:text-sm font-bold tracking-wide transition-all duration-300 ${
              activeCompany === company
                ? "btn-theme-accent scale-105"
                : "glass-panel text-[var(--text-muted)] hover:text-[var(--text-main)] border border-[var(--border-color)]"
            }`}
          >
            {company}
          </button>
        ))}
      </div>

      {/* Animated Vertical Timeline Thread */}
      <div className="relative max-w-5xl mx-auto pl-4 md:pl-8 border-l-2 border-[var(--border-color)] space-y-12">
        {filteredExperience.map((exp, index) => (
          <div key={exp.id} className="relative group animate-fadeInUp">
            {/* Timeline Stepper Node with Wave Aura */}
            <div className="absolute -left-[25px] md:-left-[41px] top-6 w-8 h-8 rounded-xl btn-theme-accent flex items-center justify-center text-white shadow-lg group-hover:scale-125 transition-transform duration-300 animate-pulse-ring">
              <HiBriefcase className="w-4 h-4" />
            </div>

            {/* Experience Card Component */}
            <div className="transition-all duration-500 hover:-translate-y-1">
              <ExperienceCard exp={exp} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Experience;