"use client";

import React, { useState } from "react";
import { personalData } from "@/utils/data/personal-data";
import Link from "next/link";
import { BiLogoLinkedin } from "react-icons/bi";
import { CiLocationOn } from "react-icons/ci";
import { IoLogoGithub, IoMdCall, IoMdCopy, IoMdCheckmark } from "react-icons/io";
import { MdAlternateEmail } from "react-icons/md";
import { HiSparkles, HiPaperAirplane } from "react-icons/hi";
import { toast } from "react-toastify";

function ContactSection() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalData.email);
    setCopiedEmail(true);
    toast.success("Email copied to clipboard!");
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(personalData.phone);
    setCopiedPhone(true);
    toast.success("Phone number copied to clipboard!");
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  return (
    <div id="contact" className="my-16 lg:my-28 relative z-50">
      {/* Section Header */}
      <div className="flex flex-col items-center justify-center text-center mb-10">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full theme-badge text-xs font-mono uppercase tracking-widest mb-3">
          <HiPaperAirplane className="text-theme-accent" size={16} />
          <span>Get In Touch</span>
        </div>
        <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--text-main)] tracking-tight">
          Let&apos;s Connect & <span className="text-gradient-theme">Build Together</span>
        </h2>
        <p className="text-sm text-[var(--text-muted)] max-w-xl mt-2">
          Open to full-stack engineering roles, multi-agent AI consultations, and technical collaborations.
        </p>
      </div>

      <div className="max-w-4xl mx-auto glass-panel rounded-3xl p-8 lg:p-12 shadow-2xl transition-all duration-500 border border-[var(--border-color)]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          {/* Email Card */}
          <div className="bg-[var(--bg-card-hover)] border border-[var(--border-color)] hover:border-[var(--border-accent)] rounded-2xl p-6 flex flex-col justify-between transition-all duration-300 group shadow-md">
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 bg-emerald-500/10 text-emerald-400 rounded-xl border border-emerald-500/30 group-hover:scale-110 transition-transform">
                <MdAlternateEmail size={26} />
              </div>
              <div>
                <p className="text-xs uppercase font-mono font-bold text-[var(--text-sub)]">Direct Email</p>
                <p className="text-base lg:text-lg font-extrabold text-[var(--text-main)] break-all">{personalData.email}</p>
              </div>
            </div>
            <button
              onClick={handleCopyEmail}
              className="w-full flex items-center justify-center gap-2 py-2.5 px-4 btn-theme-accent rounded-xl text-xs font-bold shadow-md hover:scale-[1.02] transition-all duration-300"
            >
              {copiedEmail ? <IoMdCheckmark size={18} /> : <IoMdCopy size={18} />}
              <span>{copiedEmail ? "Copied Email!" : "Copy Email Address"}</span>
            </button>
          </div>

          {/* Phone Card */}
          <div className="bg-[var(--bg-card-hover)] border border-[var(--border-color)] hover:border-[var(--border-accent)] rounded-2xl p-6 flex flex-col justify-between transition-all duration-300 group shadow-md">
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 theme-badge rounded-xl group-hover:scale-110 transition-transform">
                <IoMdCall size={26} />
              </div>
              <div>
                <p className="text-xs uppercase font-mono font-bold text-[var(--text-sub)]">Direct Phone</p>
                <p className="text-base lg:text-lg font-extrabold text-[var(--text-main)]">{personalData.phone}</p>
              </div>
            </div>
            <button
              onClick={handleCopyPhone}
              className="w-full flex items-center justify-center gap-2 py-2.5 px-4 btn-theme-accent rounded-xl text-xs font-bold shadow-md hover:scale-[1.02] transition-all duration-300"
            >
              {copiedPhone ? <IoMdCheckmark size={18} /> : <IoMdCopy size={18} />}
              <span>{copiedPhone ? "Copied Phone!" : "Copy Phone Number"}</span>
            </button>
          </div>
        </div>

        {/* Location & Social Icons */}
        <div className="flex flex-col sm:flex-row items-center justify-between pt-6 border-t border-[var(--border-color)] gap-4">
          <div className="flex items-center gap-2 text-[var(--text-muted)] text-sm">
            <CiLocationOn className="text-amber-400 shrink-0" size={22} />
            <span className="font-bold">{personalData.address}</span>
          </div>

          <div className="flex items-center gap-4">
            <Link
              target="_blank"
              href={personalData.github}
              className="p-3.5 glass-panel rounded-xl text-[var(--text-main)] hover:text-white hover:scale-110 transition-all duration-300 shadow-md"
              title="GitHub Profile"
            >
              <IoLogoGithub size={22} />
            </Link>
            <Link
              target="_blank"
              href={personalData.linkedIn}
              className="p-3.5 glass-panel rounded-xl text-[#0a66c2] hover:scale-110 transition-all duration-300 shadow-md"
              title="LinkedIn Profile"
            >
              <BiLogoLinkedin size={22} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactSection;
