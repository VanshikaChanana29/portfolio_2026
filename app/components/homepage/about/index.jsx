"use client";

import { personalData } from "@/utils/data/personal-data";
import Image from "next/image";
import { HiSparkles } from "react-icons/hi";

function AboutSection() {
  return (
    <div id="about" className="my-16 lg:my-28 relative z-40">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        {/* Left Column: Text Info */}
        <div className="glass-panel p-6 lg:p-8 rounded-2xl shadow-2xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full theme-badge text-xs font-mono uppercase tracking-widest mb-4">
            <HiSparkles className="text-amber-400" />
            <span>Who Am I?</span>
          </div>

          <h2 className="text-2xl lg:text-3xl font-extrabold text-[var(--text-main)] mb-4 leading-tight">
            Passionate <span className="text-gradient-theme">Software Developer</span> & AI Architect
          </h2>

          <p className="text-[var(--text-muted)] text-sm lg:text-base leading-relaxed mb-4">
            {personalData.description}
          </p>

          <p className="text-[var(--text-muted)] text-sm lg:text-base leading-relaxed">
            {personalData.description2}
          </p>
        </div>

        {/* Right Column: Profile Image */}
        <div className="flex justify-center order-1 lg:order-2">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-violet-600 to-indigo-600 rounded-3xl blur-lg opacity-30 group-hover:opacity-70 transition duration-500"></div>
            <Image
              src={personalData.profile}
              width={380}
              height={450}
              alt="Vanshika Chanana"
              className="relative rounded-2xl object-cover max-h-[440px] shadow-2xl transition-all duration-500 group-hover:scale-[1.02] border border-[var(--border-color)]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutSection;