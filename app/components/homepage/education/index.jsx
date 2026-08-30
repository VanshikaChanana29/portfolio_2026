// @flow strict
import { educations } from "@/utils/data/educations";
import Image from "next/image";
import { BsPersonWorkspace } from "react-icons/bs";
import { HiAcademicCap, HiSparkles } from "react-icons/hi";
import lottieFile from '../../../assets/lottie/student.json';
import AnimationLottie from "../../helper/animation-lottie";

function Education() {
  return (
    <div id="education" className="relative z-50 my-16 lg:my-28">
      {/* Section Header */}
      <div className="flex flex-col items-center justify-center text-center mb-10">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full theme-badge text-xs font-mono uppercase tracking-widest mb-3">
          <HiAcademicCap className="text-amber-400" size={16} />
          <span>Academic Foundation</span>
        </div>
        <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--text-main)] tracking-tight">
          Education & <span className="text-gradient-theme">Qualifications</span>
        </h2>
      </div>

      <div className="py-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Lottie Animation Side */}
          <div className="flex justify-center items-center">
            <div className="w-4/5 max-w-[420px] glass-panel p-6 rounded-3xl shadow-2xl border border-[var(--border-color)]">
              <AnimationLottie animationPath={lottieFile} />
            </div>
          </div>

          {/* Education Cards Column */}
          <div className="flex flex-col gap-6">
            {educations.map((education) => (
              <div
                key={education.id}
                className="glass-panel rounded-2xl p-6 transition-all duration-500 hover:-translate-y-1.5 hover:border-[var(--border-accent)] shadow-xl group"
              >
                <div className="flex items-center justify-between mb-4 pb-3 border-b border-[var(--border-color)]">
                  <span className="text-xs font-mono font-bold theme-badge px-3 py-1 rounded-full">
                    {education.duration}
                  </span>
                  {education.gpa && (
                    <span className="text-xs font-mono font-bold text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/30">
                      GPA: {education.gpa}
                    </span>
                  )}
                </div>

                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-xl btn-theme-accent text-white shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <BsPersonWorkspace size={24} />
                    </div>
                    <div>
                      <h3 className="text-lg lg:text-xl font-extrabold text-[var(--text-main)] leading-tight mb-1 group-hover:text-theme-accent transition-colors">
                        {education.title}
                      </h3>
                      <p className="text-sm font-semibold text-[var(--text-muted)]">
                        {education.institution}
                      </p>
                    </div>
                  </div>

                  {education.image && (
                    <Image
                      src={education.image}
                      alt={education.institution}
                      width={60}
                      height={60}
                      className="rounded-xl object-cover shrink-0 border border-[var(--border-color)]"
                    />
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Education;