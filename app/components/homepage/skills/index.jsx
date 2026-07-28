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
    <div id="skills" className="relative z-50 my-16 lg:my-24">
      {/* Background ambient glow */}
      <div className="w-[120px] h-[120px] bg-violet-500/20 rounded-full absolute top-10 left-1/2 -translate-x-1/2 filter blur-3xl opacity-30 pointer-events-none"></div>

      {/* Section Divider Line & Title */}
      <div className="flex justify-center my-5 lg:py-8">
        <div className="flex items-center w-full">
          <span className="flex-1 h-[2px] bg-[#2F2F2F]"></span>
          <span className="bg-[#2F2F2F] w-fit text-white p-2 px-5 text-xl font-bold rounded-md mx-4 uppercase tracking-wider">
            TECHNICAL SKILLS
          </span>
          <span className="flex-1 h-[2px] bg-[#2F2F2F]"></span>
        </div>
      </div>

      {/* Category Filter Tabs */}
      <div className="mt-8 mb-10 flex flex-wrap gap-3 justify-center px-4">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveTab(category)}
            className={`px-5 py-2.5 rounded-full text-xs md:text-sm font-bold tracking-wide uppercase transition-all duration-300 ${
              activeTab === category
                ? "bg-gradient-to-r from-violet-600 to-indigo-600 text-white shadow-lg shadow-violet-500/30 scale-105"
                : "bg-[#141414] text-gray-400 hover:bg-[#252525] hover:text-white border border-[#2a2a2a]"
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
            className="bg-black/90 border border-[#2a2a2a] hover:border-violet-500/50 rounded-2xl p-6 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(139,92,246,0.15)] flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-3 border-b border-[#2a2a2a] pb-3">
                <div className="flex items-center gap-2.5">
                  <span className="text-2xl">{group.icon}</span>
                  <h3 className="text-lg font-bold text-white tracking-wide">{group.category}</h3>
                </div>
                <HiSparkles className="text-violet-400 opacity-70" size={16} />
              </div>
              <p className="text-xs text-gray-400 mb-5 leading-relaxed">{group.description}</p>

              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill, sIdx) => {
                  const imgObj = skillsImage(skill.name);
                  return (
                    <div
                      key={sIdx}
                      className="flex items-center gap-2 bg-[#121212] border border-[#262626] hover:border-violet-500/40 px-3 py-2 rounded-xl transition-all duration-300"
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
                        <div className="w-2 h-2 rounded-full bg-violet-400"></div>
                      )}
                      <span className="text-xs font-semibold text-gray-200">{skill.name}</span>
                      <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-violet-500/10 text-violet-300 border border-violet-500/20">
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
      <div className="w-full my-6 bg-[#0a0a0a] py-4 border-y border-[#2a2a2a]">
        <p className="text-center text-xs font-semibold text-gray-500 uppercase tracking-widest mb-4">
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
              className="w-36 min-w-fit h-fit flex flex-col items-center justify-center transition-all duration-500 m-3 sm:m-5 rounded-lg group relative hover:scale-105 cursor-pointer"
              key={id}
            >
              <div className="h-full w-full rounded-lg border border-[#1f223c] bg-[#141414] group-hover:border-violet-500 transition-all duration-500">
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
                      <div className="w-8 h-8 rounded bg-violet-500/20 flex items-center justify-center text-violet-400 text-xs font-bold">
                        {skill[0]}
                      </div>
                    )}
                  </div>
                  <p className="text-white text-xs sm:text-sm font-semibold">{skill}</p>
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