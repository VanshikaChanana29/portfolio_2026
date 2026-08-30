"use client";

import React, { useState } from "react";
import { skillsData, categorizedSkills } from "@/utils/data/skills";
import { skillsImage } from "@/utils/skill-image";
import Image from "next/image";
import Marquee from "react-fast-marquee";
import { HiSparkles } from "react-icons/hi";

function Skills() {
  const [activeTab, setActiveTab] = useState("All");

  const categories = ["All", ...categorizedSkills.map((c) => c.category)];

  const displayedCategories = activeTab === "All"
    ? categorizedSkills
    : categorizedSkills.filter((c) => c.category === activeTab);

  return (
    <div id="skills" className="relative z-50 my-16 lg:my-28">
      {/* Section Title */}
      <div className="flex flex-col items-center justify-center text-center mb-10">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full theme-badge text-xs font-mono uppercase tracking-widest mb-3">
          <HiSparkles className="text-amber-400" />
          <span>Technical Arsenal</span>
        </div>
        <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--text-main)] tracking-tight">
          Skills & <span className="text-gradient-theme">Technologies</span>
        </h2>
      </div>

      {/* Category Filter Tabs */}
      <div className="mt-6 mb-10 flex flex-wrap gap-2.5 justify-center px-4">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveTab(category)}
            className={`px-4 py-2 rounded-xl text-xs md:text-sm font-bold tracking-wide transition-all duration-300 ${
              activeTab === category
                ? "btn-theme-accent scale-105"
                : "glass-panel text-[var(--text-muted)] hover:text-[var(--text-main)]"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Categorized Skills Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16 px-2">
        {displayedCategories.map((group, idx) => (
          <div
            key={idx}
            className="glass-panel rounded-2xl p-6 transition-all duration-500 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-3 border-b border-[var(--border-color)] pb-3">
                <div className="flex items-center gap-2.5">
                  <span className="text-2xl">{group.icon}</span>
                  <h3 className="text-lg font-extrabold text-[var(--text-main)] tracking-wide">{group.category}</h3>
                </div>
                <HiSparkles className="text-theme-accent opacity-70" size={16} />
              </div>
              <p className="text-xs text-[var(--text-muted)] mb-5 leading-relaxed">{group.description}</p>

              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill, sIdx) => {
                  const imgObj = skillsImage(skill.name);
                  return (
                    <div
                      key={sIdx}
                      className="flex items-center gap-2 bg-[var(--bg-card-hover)] border border-[var(--border-color)] px-3 py-2 rounded-xl transition-all duration-300"
                    >
                      {imgObj?.src ? (
                        <Image
                          src={imgObj.src}
                          alt={skill.name}
                          width={20}
                          height={20}
                          className="w-5 h-5 object-contain"
                        />
                      ) : (
                        <div className="w-2 h-2 rounded-full bg-theme-accent"></div>
                      )}
                      <span className="text-xs font-semibold text-[var(--text-main)]">{skill.name}</span>
                      <span className="text-[10px] font-mono px-1.5 py-0.5 rounded theme-badge">
                        {skill.tag}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Animated Skill Ticker Marquee */}
      <div className="w-full my-6 py-4 glass-panel border-y border-[var(--border-color)]">
        <p className="text-center text-xs font-mono font-semibold text-[var(--text-sub)] uppercase tracking-widest mb-4">
          Core Technical Stack & Tools Overview
        </p>
        <Marquee
          gradient={false}
          speed={60}
          pauseOnHover={true}
          pauseOnClick={true}
          delay={0}
          play={true}
          direction="left"
        >
          {skillsData.map((skill, id) => (
            <div
              className="w-36 min-w-fit flex flex-col items-center justify-center transition-all duration-500 m-3 sm:m-5 rounded-xl group cursor-pointer"
              key={id}
            >
              <div className="w-full rounded-xl border border-[var(--border-color)] bg-[var(--bg-card-hover)] group-hover:border-[var(--border-accent)] transition-all duration-500">
                <div className="flex flex-col items-center justify-center gap-3 p-5">
                  <div className="h-8 sm:h-9">
                    {skillsImage(skill)?.src ? (
                      <Image
                        src={skillsImage(skill)?.src}
                        alt={skill}
                        width={36}
                        height={36}
                        className="h-full w-auto rounded"
                      />
                    ) : (
                      <div className="w-8 h-8 rounded theme-badge flex items-center justify-center font-bold">
                        {skill[0]}
                      </div>
                    )}
                  </div>
                  <p className="text-[var(--text-main)] text-xs sm:text-sm font-bold">{skill}</p>
                </div>
              </div>
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
}

export default Skills;