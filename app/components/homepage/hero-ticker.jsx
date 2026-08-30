"use client";

import Marquee from "react-fast-marquee";
import { FaReact, FaNodeJs, FaPython, FaRobot, FaRocket, FaShieldAlt } from "react-icons/fa";
import { SiNextdotjs, SiRedux, SiTailwindcss, SiTypescript, SiStreamlit, SiLangchain } from "react-icons/si";

export default function HeroTicker() {
  const techPills = [
    { label: "Next.js 15", icon: <SiNextdotjs className="text-white" /> },
    { label: "React.js", icon: <FaReact className="text-cyan-400" /> },
    { label: "LangChain AI", icon: <SiLangchain className="text-emerald-400" /> },
    { label: "Multi-Agent Systems", icon: <FaRobot className="text-violet-400" /> },
    { label: "RAG Pipelines", icon: <FaRocket className="text-amber-400" /> },
    { label: "Redux Toolkit", icon: <SiRedux className="text-purple-400" /> },
    { label: "TypeScript", icon: <SiTypescript className="text-blue-400" /> },
    { label: "Node.js & Express", icon: <FaNodeJs className="text-emerald-500" /> },
    { label: "Streamlit AI Apps", icon: <SiStreamlit className="text-red-400" /> },
    { label: "Enterprise ITSM", icon: <FaShieldAlt className="text-indigo-400" /> },
    { label: "Micro-Frontends", icon: <FaReact className="text-pink-400" /> },
    { label: "Python & SQLite", icon: <FaPython className="text-yellow-400" /> }
  ];

  return (
    <div className="w-full my-8 py-3.5 glass-panel rounded-2xl border border-[var(--border-color)] overflow-hidden shadow-lg">
      <Marquee
        gradient={false}
        speed={45}
        pauseOnHover={true}
        play={true}
        direction="left"
      >
        {techPills.map((tech, i) => (
          <div
            key={i}
            className="flex items-center gap-2 px-4 py-2 mx-3 rounded-xl bg-[var(--bg-card-hover)] border border-[var(--border-color)] text-xs font-mono font-bold text-[var(--text-main)] shadow-sm hover:scale-105 hover:border-[var(--border-accent)] transition-all cursor-pointer"
          >
            <span className="text-sm">{tech.icon}</span>
            <span>{tech.label}</span>
          </div>
        ))}
      </Marquee>
    </div>
  );
}
