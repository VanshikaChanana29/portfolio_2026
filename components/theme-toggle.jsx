"use client";

import { useEffect, useState } from "react";
import { HiMoon, HiSun } from "react-icons/hi";

export default function ThemeToggle() {
  const [mode, setMode] = useState(null);

  useEffect(() => {
    setMode(document.documentElement.dataset.mode || "light");
  }, []);

  const toggle = () => {
    const next = mode === "dark" ? "light" : "dark";
    document.documentElement.dataset.mode = next;
    try {
      localStorage.setItem("theme", next);
    } catch {}
    setMode(next);
  };

  const label = mode === "dark" ? "Switch to light mode" : "Switch to dark mode";

  return (
    <button type="button" onClick={toggle} aria-label={label} title={label} className="btn-ghost !px-3">
      {mode === "dark" ? <HiSun aria-hidden="true" className="h-5 w-5" /> : <HiMoon aria-hidden="true" className="h-5 w-5" />}
    </button>
  );
}
