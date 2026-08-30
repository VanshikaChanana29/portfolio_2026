"use client";

import React, { useState, useEffect } from "react";
import { HiSun, HiMoon, HiColorSwatch, HiSparkles } from "react-icons/hi";

export const colorPalettes = [
  {
    id: "purple",
    name: "Obsidian Purple",
    color: "#8b5cf6",
    dotClass: "bg-violet-500",
    badge: "🌌 Royal Violet"
  },
  {
    id: "pink",
    name: "Cyberpunk Pink",
    color: "#ec4899",
    dotClass: "bg-pink-500",
    badge: "🔮 Neon Pink"
  },
  {
    id: "emerald",
    name: "Emerald Mint",
    color: "#10b981",
    dotClass: "bg-emerald-500",
    badge: "🌲 Matrix Mint"
  },
  {
    id: "gold",
    name: "Solar Gold",
    color: "#f59e0b",
    dotClass: "bg-amber-500",
    badge: "⚡ Warm Amber"
  },
  {
    id: "crimson",
    name: "Sunset Crimson",
    color: "#ef4444",
    dotClass: "bg-red-500",
    badge: "🔥 Flame Ruby"
  },
  {
    id: "indigo",
    name: "Royal Indigo",
    color: "#6366f1",
    dotClass: "bg-indigo-500",
    badge: "👑 Deep Sapphire"
  },
  {
    id: "rose",
    name: "Rose Gold",
    color: "#f43f5e",
    dotClass: "bg-rose-500",
    badge: "🌸 Champagne Rose"
  },
  {
    id: "slate",
    name: "Titanium Slate",
    color: "#38bdf8",
    dotClass: "bg-slate-400",
    badge: "🩶 Sleek Slate"
  },
  {
    id: "graphite",
    name: "Graphite Steel",
    color: "#94a3b8",
    dotClass: "bg-slate-600",
    badge: "🪨 Cool Graphite"
  },
  {
    id: "onyx",
    name: "Midnight Onyx",
    color: "#e2e8f0",
    dotClass: "bg-zinc-800",
    badge: "🖤 Pure Onyx"
  }
];

export default function ThemeSwitcher() {
  const [mode, setMode] = useState("dark"); // "dark" or "light"
  const [theme, setTheme] = useState("purple"); // "purple", "pink", "emerald", "gold"
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const savedMode = localStorage.getItem("portfolio_mode") || "dark";
    const savedTheme = localStorage.getItem("portfolio_color_theme") || "purple";
    
    applyModeAndTheme(savedMode, savedTheme);
  }, []);

  const applyModeAndTheme = (newMode, newTheme) => {
    setMode(newMode);
    setTheme(newTheme);

    localStorage.setItem("portfolio_mode", newMode);
    localStorage.setItem("portfolio_color_theme", newTheme);

    document.documentElement.setAttribute("data-mode", newMode);
    document.documentElement.setAttribute("data-theme", newTheme);
  };

  const toggleMode = () => {
    const nextMode = mode === "dark" ? "light" : "dark";
    applyModeAndTheme(nextMode, theme);
  };

  const selectColorTheme = (themeId) => {
    applyModeAndTheme(mode, themeId);
  };

  return (
    <div className="flex items-center gap-1.5 relative">
      {/* Quick Dark/Light Toggle Icon Button */}
      <button
        onClick={toggleMode}
        className="p-2.5 rounded-xl glass-panel text-[var(--text-main)] hover:scale-105 transition-all duration-300 shadow-md flex items-center justify-center"
        title={mode === "dark" ? "Switch to Light Mode" : "Switch to Dark Mode"}
      >
        {mode === "dark" ? (
          <HiSun className="w-4 h-4 text-amber-400" />
        ) : (
          <HiMoon className="w-4 h-4 text-indigo-400" />
        )}
      </button>

      {/* Palette Customizer Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="px-3 py-2 rounded-xl glass-panel text-[var(--text-main)] hover:scale-105 transition-all duration-300 flex items-center gap-1.5 text-xs font-semibold shadow-md"
        title="Customize Color Themes"
      >
        <HiColorSwatch className="w-4 h-4 text-theme-accent" />
        <span className="hidden sm:inline">Themes</span>
      </button>

      {/* Theme Customizer Modal */}
      {isOpen && (
        <div className="absolute right-0 top-12 w-64 glass-panel rounded-2xl shadow-2xl p-3.5 z-[200] animate-fadeIn border border-[var(--border-color)]">
          {/* Header */}
          <div className="flex items-center justify-between pb-2.5 mb-3 border-b border-[var(--border-color)]">
            <div className="flex items-center gap-1.5 text-xs font-extrabold text-[var(--text-main)]">
              <HiSparkles className="text-amber-400" />
              <span>Theme & Mode System</span>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-[var(--text-sub)] hover:text-[var(--text-main)] text-xs font-bold"
            >
              ✕
            </button>
          </div>

          {/* Independent Mode Switcher Segment */}
          <div className="mb-4">
            <p className="text-[10px] font-mono text-[var(--text-sub)] uppercase tracking-wider px-1 mb-1.5">
              1. Select Display Mode
            </p>
            <div className="grid grid-cols-2 gap-1.5 p-1 rounded-xl bg-[var(--bg-card-hover)] border border-[var(--border-color)]">
              <button
                onClick={() => applyModeAndTheme("dark", theme)}
                className={`py-1.5 rounded-lg text-xs font-bold flex items-center justify-center gap-1.5 transition-all ${
                  mode === "dark"
                    ? "btn-theme-accent text-white shadow-md"
                    : "text-[var(--text-muted)] hover:text-[var(--text-main)]"
                }`}
              >
                <HiMoon className="w-3.5 h-3.5" />
                <span>Dark Mode</span>
              </button>
              <button
                onClick={() => applyModeAndTheme("light", theme)}
                className={`py-1.5 rounded-lg text-xs font-bold flex items-center justify-center gap-1.5 transition-all ${
                  mode === "light"
                    ? "btn-theme-accent text-white shadow-md"
                    : "text-[var(--text-muted)] hover:text-[var(--text-main)]"
                }`}
              >
                <HiSun className="w-3.5 h-3.5 text-amber-400" />
                <span>Light Mode</span>
              </button>
            </div>
          </div>

          {/* Independent Color Theme Palettes */}
          <div>
            <p className="text-[10px] font-mono text-[var(--text-sub)] uppercase tracking-wider px-1 mb-1.5">
              2. Select Color Palette ({mode === "dark" ? "Dark" : "Light"})
            </p>
            <div className="space-y-1.5">
              {colorPalettes.map((palette) => (
                <button
                  key={palette.id}
                  onClick={() => selectColorTheme(palette.id)}
                  className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs font-bold transition-all ${
                    theme === palette.id
                      ? "bg-[var(--badge-bg)] text-theme-accent border border-[var(--border-accent)] shadow-md"
                      : "text-[var(--text-muted)] hover:bg-[var(--bg-card-hover)] hover:text-[var(--text-main)]"
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <div className={`w-3.5 h-3.5 rounded-full ${palette.dotClass}`} />
                    <span>{palette.name}</span>
                  </div>
                  <span className="text-[10px] font-mono text-[var(--text-sub)]">{palette.badge.split(" ")[0]}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
