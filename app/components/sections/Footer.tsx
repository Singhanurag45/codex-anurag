"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const socialLinks = [
  {
    name: "GitHub",
    icon: "/assets/github.png",
    link: "https://github.com/Singhanurag45",
  },
  {
    name: "LinkedIn",
    icon: "/assets/linkedin.png",
    link: "https://www.linkedin.com/in/anurag-singh-9598b4207/",
  },
  {
    name: "LeetCode",
    icon: "/assets/leetcode-logo.png",
    link: "https://leetcode.com/Anuragsingh_123",
  },
];

const footerLinks = [
  { name: "About", link: "#about" },
  { name: "Skills", link: "#skills" },
  { name: "Projects", link: "#projects" },
  { name: "Contact", link: "#contact" },
];

export default function Footer() {
  const handleScrollToTop = () => {
    if (typeof window !== "undefined")
      window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      className="py-12 bg-[#050816] border-t border-white/5"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-16">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-12">
          <div className="max-w-xs">
            <h3 className="text-white font-black text-2xl mb-4 tracking-tighter italic">
              ANURAG SINGH
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              MERN Stack Developer & Competitive Programmer focused on building
              scalable, user-centric web applications.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-16">
            <div>
              <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-6">
                Navigation
              </h4>
              <ul className="space-y-3">
                {footerLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.link}
                      className="text-gray-500 hover:text-[#a285fd] text-sm transition-colors duration-300"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-6">
                Socials
              </h4>
              <div className="flex gap-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.link}
                    target="_blank"
                    className="w-10 h-10 rounded-xl bg-[#10153e] border border-white/10 flex items-center justify-center hover:border-[#a285fd]/50 hover:bg-[#a285fd]/10 transition-all duration-300 group"
                  >
                    <Image
                      src={social.icon}
                      alt={social.name}
                      width={20}
                      height={20}
                      className="opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all"
                    />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-6">
          <p className="text-gray-600 text-xs font-medium">
            © {new Date().getFullYear()} Anurag Singh. Built with Next.js &
            Framer Motion.
          </p>

          <button
            onClick={handleScrollToTop}
            className="group flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
          >
            <span className="text-xs font-bold uppercase tracking-widest">
              Back to top
            </span>
            <div className="bg-[#10153e] p-2 rounded-lg border border-white/10 group-hover:border-[#a285fd] transition-colors">
              <Image
                src="/assets/up-arrow.png"
                alt="Top"
                width={14}
                height={14}
                className="invert group-hover:translate-y-0.5 transition-transform"
              />
            </div>
          </button>
        </div>
      </div>
    </motion.footer>
  );
}
