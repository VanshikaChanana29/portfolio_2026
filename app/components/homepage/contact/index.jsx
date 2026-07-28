"use client";

import React, { useState } from "react";
import { personalData } from "@/utils/data/personal-data";
import Link from "next/link";
import { BiLogoLinkedin } from "react-icons/bi";
import { CiLocationOn } from "react-icons/ci";
import { IoLogoGithub, IoMdCall, IoMdCopy, IoMdCheckmark } from "react-icons/io";
import { MdAlternateEmail } from "react-icons/md";
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
    <div id="contact" className="my-16 lg:my-24 relative z-50 text-white">
      {/* Section Divider Line */}
      <div className="flex justify-center my-5 lg:py-8">
        <div className="flex items-center w-full">
          <span className="flex-1 h-[2px] bg-[#2F2F2F]"></span>
          <span className="bg-[#2F2F2F] w-fit text-white p-2 px-5 text-xl font-bold rounded-md mx-4 uppercase tracking-wider">
            GET IN TOUCH
          </span>
          <span className="flex-1 h-[2px] bg-[#2F2F2F]"></span>
        </div>
      </div>

      <div className="max-w-4xl mx-auto mt-10 bg-black/80 border border-[#2a2a2a] hover:border-violet-500/50 rounded-2xl p-8 lg:p-12 shadow-[0_0_30px_rgba(0,0,0,0.5)] transition-all duration-500">
        <div className="text-center mb-10">
          <h2 className="text-3xl lg:text-4xl font-extrabold text-white mb-3">
            Let&apos;s Connect & Build Together
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto text-sm lg:text-base">
            I am currently open to new full-stack engineering opportunities and technical collaborations. Feel free to reach out directly via email, phone, or LinkedIn!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          {/* Email Card */}
          <div className="bg-[#0d0d0d] border border-[#2a2a2a] hover:border-emerald-500/50 rounded-xl p-6 flex flex-col justify-between transition-all duration-300">
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 bg-emerald-500/10 text-emerald-400 rounded-lg border border-emerald-500/20">
                <MdAlternateEmail size={26} />
              </div>
              <div>
                <p className="text-xs uppercase font-semibold text-gray-400">Email Address</p>
                <p className="text-base lg:text-lg font-bold text-white break-all">{personalData.email}</p>
              </div>
            </div>
            <button
              onClick={handleCopyEmail}
              className="w-full flex items-center justify-center gap-2 py-2.5 px-4 bg-[#1a1a1a] hover:bg-emerald-600 hover:text-white text-emerald-400 border border-emerald-500/30 rounded-lg text-sm font-semibold transition-all duration-300"
            >
              {copiedEmail ? <IoMdCheckmark size={18} /> : <IoMdCopy size={18} />}
              <span>{copiedEmail ? "Copied to Clipboard!" : "Copy Email"}</span>
            </button>
          </div>

          {/* Phone Card */}
          <div className="bg-[#0d0d0d] border border-[#2a2a2a] hover:border-violet-500/50 rounded-xl p-6 flex flex-col justify-between transition-all duration-300">
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 bg-violet-500/10 text-violet-400 rounded-lg border border-violet-500/20">
                <IoMdCall size={26} />
              </div>
              <div>
                <p className="text-xs uppercase font-semibold text-gray-400">Phone Number</p>
                <p className="text-base lg:text-lg font-bold text-white">{personalData.phone}</p>
              </div>
            </div>
            <button
              onClick={handleCopyPhone}
              className="w-full flex items-center justify-center gap-2 py-2.5 px-4 bg-[#1a1a1a] hover:bg-violet-600 hover:text-white text-violet-400 border border-violet-500/30 rounded-lg text-sm font-semibold transition-all duration-300"
            >
              {copiedPhone ? <IoMdCheckmark size={18} /> : <IoMdCopy size={18} />}
              <span>{copiedPhone ? "Copied to Clipboard!" : "Copy Phone"}</span>
            </button>
          </div>
        </div>

        {/* Location & Social Icons */}
        <div className="flex flex-col sm:flex-row items-center justify-between pt-6 border-t border-[#2a2a2a] gap-4">
          <div className="flex items-center gap-2 text-gray-300 text-sm">
            <CiLocationOn className="text-amber-400 shrink-0" size={22} />
            <span className="font-medium">{personalData.address}</span>
          </div>

          <div className="flex items-center gap-4">
            <Link
              target="_blank"
              href={personalData.github}
              className="p-3 bg-[#171515] border border-gray-800 text-white rounded-full hover:bg-violet-600 hover:scale-110 transition-all duration-300"
            >
              <IoLogoGithub size={22} />
            </Link>
            <Link
              target="_blank"
              href={personalData.linkedIn}
              className="p-3 bg-[#0a66c2] text-white rounded-full hover:bg-blue-600 hover:scale-110 transition-all duration-300"
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
