// @flow strict
import React from 'react';
import { FaServer, FaGraduationCap, FaChalkboardTeacher, FaCheckCircle } from 'react-icons/fa';
import { HiSparkles } from 'react-icons/hi';

const metrics = [
  {
    id: 1,
    value: "5+",
    label: "ITSM Tools Owned",
    description: "Full-stack ownership on ObservaX Platform",
    icon: FaServer,
    color: "from-violet-500 to-indigo-500",
    borderGlow: "group-hover:border-violet-500/60",
    textGlow: "text-violet-400"
  },
  {
    id: 2,
    value: "8.5",
    label: "B.Tech CSE CGPA",
    description: "Chandigarh Group of Colleges, Landran",
    icon: FaGraduationCap,
    color: "from-emerald-500 to-teal-500",
    borderGlow: "group-hover:border-emerald-500/60",
    textGlow: "text-emerald-400"
  },
  {
    id: 3,
    value: "100+",
    label: "Students Mentored",
    description: "React.js & Web Dev Workshops at GDSC",
    icon: FaChalkboardTeacher,
    color: "from-amber-500 to-orange-500",
    borderGlow: "group-hover:border-amber-500/60",
    textGlow: "text-amber-400"
  },
  {
    id: 4,
    value: "100%",
    label: "Production Stability",
    description: "Zero-downtime releases & maintenance",
    icon: FaCheckCircle,
    color: "from-cyan-500 to-blue-500",
    borderGlow: "group-hover:border-cyan-500/60",
    textGlow: "text-cyan-400"
  }
];

function MetricsSection() {
  return (
    <div className="my-10 lg:my-16 relative z-50">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {metrics.map((metric) => {
          const IconComponent = metric.icon;
          return (
            <div
              key={metric.id}
              className="glass-panel glass-panel-hover rounded-2xl p-6 transition-all duration-500 hover:-translate-y-2 group shadow-xl border border-[var(--border-color)]"
            >
              {/* Top Accent Line */}
              <div className="absolute top-0 left-6 right-6 h-[1px] bg-gradient-to-r from-transparent via-[var(--border-accent)] to-transparent opacity-50 group-hover:opacity-100 transition-all duration-500"></div>

              <div className="flex items-center justify-between mb-4">
                <div className={`p-3 rounded-xl bg-[var(--bg-card-hover)] border border-[var(--border-color)] ${metric.textGlow} group-hover:scale-110 transition-transform duration-300`}>
                  <IconComponent size={24} />
                </div>
                <HiSparkles className="text-[var(--text-sub)] group-hover:text-amber-400 transition-colors duration-300" size={18} />
              </div>

              <div>
                <h3 className="text-3xl lg:text-4xl font-extrabold text-[var(--text-main)] tracking-tight flex items-baseline gap-1">
                  <span>{metric.value}</span>
                </h3>
                <p className="text-sm font-bold text-[var(--text-main)] mt-1 uppercase tracking-wide">
                  {metric.label}
                </p>
                <p className="text-xs text-[var(--text-muted)] mt-1.5 leading-relaxed font-medium">
                  {metric.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default MetricsSection;
