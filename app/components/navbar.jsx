"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { HiCode, HiMenuAlt3, HiX } from "react-icons/hi";
import { FaFileDownload } from "react-icons/fa";
import { personalData } from "@/utils/data/personal-data";
import ThemeSwitcher from "./theme-switcher";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("about");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "About", id: "about" },
    { name: "Experience", id: "experience" },
    { name: "Skills", id: "skills" },
    { name: "Projects", id: "projects" },
    { name: "Education", id: "education" },
    { name: "Contact", id: "contact" }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Scroll Spy Logic
      const sections = navLinks.map((link) => document.getElementById(link.id));
      const scrollPosition = window.scrollY + 120;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navLinks[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -90; // Offset for sticky navbar height
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
      setActiveSection(id);
    }
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-2 z-[100] w-full my-2">
      <nav
        className={`transition-all duration-500 rounded-2xl px-4 lg:px-7 py-3 glass-panel ${
          scrolled ? "shadow-2xl border-[var(--border-accent)]" : "border-[var(--border-color)]"
        }`}
      >
        <div className="flex items-center justify-between gap-2">
          {/* Brand Logo */}
          <Link
            href="/"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="flex items-center gap-2.5 group"
          >
            <div className="w-9 h-9 rounded-xl btn-theme-accent flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
              <HiCode className="w-5 h-5 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="text-base font-extrabold text-[var(--text-main)] tracking-wider group-hover:text-theme-accent transition-colors">
                VANSHIKA<span className="text-theme-accent">.DEV</span>
              </span>
              <span className="text-[10px] font-mono text-[var(--text-sub)] tracking-widest uppercase flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span>
                Full-Stack Developer
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <ul className="hidden md:flex items-center gap-1 bg-[var(--bg-card-hover)] p-1 rounded-xl border border-[var(--border-color)]">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <li key={link.id}>
                  <button
                    onClick={(e) => scrollToSection(e, link.id)}
                    className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all duration-300 flex items-center gap-1 ${
                      isActive
                        ? "btn-theme-accent text-white shadow-md scale-105"
                        : "text-[var(--text-muted)] hover:text-[var(--text-main)] hover:bg-[var(--badge-bg)]"
                    }`}
                  >
                    {link.name}
                  </button>
                </li>
              );
            })}
          </ul>

          {/* Right Action Controls */}
          <div className="flex items-center gap-2">
            <ThemeSwitcher />

            <a
              href={personalData.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold btn-theme-accent shadow-md hover:scale-105 transition-all duration-300"
            >
              <FaFileDownload className="w-3.5 h-3.5" />
              <span>Resume</span>
            </a>

            {/* Mobile Hamburger Menu Toggle Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-xl glass-panel text-[var(--text-main)] hover:scale-105 transition-all"
              title="Toggle Mobile Menu"
            >
              {mobileMenuOpen ? <HiX className="w-5 h-5 text-theme-accent" /> : <HiMenuAlt3 className="w-5 h-5 text-theme-accent" />}
            </button>
          </div>
        </div>

        {/* Mobile Slide-down Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-3 pt-3 border-t border-[var(--border-color)] animate-fadeIn">
            <div className="grid grid-cols-2 gap-2 p-1">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <button
                    key={link.id}
                    onClick={(e) => scrollToSection(e, link.id)}
                    className={`py-2 px-3 rounded-xl text-xs font-bold text-left transition-all ${
                      isActive
                        ? "btn-theme-accent text-white shadow-md"
                        : "bg-[var(--bg-card-hover)] text-[var(--text-muted)] hover:text-[var(--text-main)]"
                    }`}
                  >
                    {link.name}
                  </button>
                );
              })}
            </div>
            
            <div className="mt-3 pt-2 flex justify-center">
              <a
                href={personalData.resume}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 rounded-xl text-xs font-bold btn-theme-accent flex items-center justify-center gap-2"
              >
                <FaFileDownload className="w-3.5 h-3.5" />
                <span>Get Resume</span>
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}

export default Navbar;