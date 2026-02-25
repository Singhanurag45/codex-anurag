"use client";

import React from "react";
import { motion } from "framer-motion";
import { hero } from "../../lib/constants";

import Image from "next/image";
import {
  Terminal,
  Code2,
  Sparkles,
  Download,
  Cpu,
  Box,
  Layout,
} from "lucide-react";

export default function CyberHero() {
  return (
    <section className="relative w-full min-h-screen flex items-center bg-[#050816] overflow-hidden py-20">
      {/* Background Tech Grid */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(#a285fd 1px, transparent 1px), linear-gradient(90deg, #a285fd 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center relative z-10">
        {/* Left: Content (8 Columns) */}
        <motion.div
          className="lg:col-span-8"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center gap-3 text-[#a285fd] mb-6">
            <Cpu size={18} className="animate-pulse" />
            <span className="text-xs font-mono tracking-[0.4em] uppercase text-gray-400">
              System.Ready(<span className="text-[#a285fd]">Anurag_Singh</span>)
            </span>
          </div>

          <h1 className="text-white text-5xl md:text-7xl lg:text-8xl font-black leading-none mb-6 tracking-tighter">
            CRAFTING <br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-[#a285fd] via-indigo-400 to-blue-500">
              DIGITAL LOGIC.
            </span>
          </h1>

          <div className="space-y-4 mb-10">
            <p className="text-gray-300 text-lg md:text-xl font-bold italic tracking-wide">
              B.Tech CSE @ MAIT Delhi &bull; Class of 2026
            </p>
            <p className="text-gray-400 text-base md:text-lg max-w-xl leading-relaxed border-l-2 border-white/5 pl-6">
              MERN & Next.js specialist. Transforming complex algorithmic
              problems into seamless, scalable user experiences with 500+ solved
              challenges.
            </p>
          </div>

          <div className="flex flex-wrap gap-5">
            <a
              href="#projects"
              className="relative group overflow-hidden px-10 py-4 bg-white text-black font-black rounded-2xl transition-all shadow-[0_0_30px_rgba(255,255,255,0.1)]"
            >
              <span className="relative z-10 flex items-center gap-2 text-sm uppercase">
                Explore Work <Code2 size={18} />
              </span>
              <div className="absolute inset-0 bg-[#a285fd] translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </a>

            <a
              href={hero.resumeLink}
              download="Anurag_Singh_Resume.pdf"
              className="flex items-center gap-2 text-white font-bold px-10 py-4 border border-white/10 rounded-2xl hover:bg-white/5 transition-all text-sm uppercase cursor-pointer"
            >
              Get Resume <Download size={18} />
            </a>
          </div>
        </motion.div>

        {/* Right: Scaled-Down Profile (4 Columns) */}
        <motion.div
          className="lg:col-span-4 relative flex justify-center lg:justify-end"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="relative w-full max-w-[340px] group">
            {/* Background Glow */}
            <div className="absolute inset-0 bg-linear-to-tr from-[#a285fd] to-blue-500 rounded-[2.5rem] blur-[80px] opacity-10 group-hover:opacity-25 transition-opacity duration-700" />

            {/* Profile Frame */}
            {/* Profile Frame */}
            <div className="relative rounded-[2.5rem] overflow-hidden border border-white/10 bg-[#10153e]/40 p-2 backdrop-blur-3xl shadow-2xl group">
              {/* Add a corner accent for a technical HUD look */}
              <div className="absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 border-[#a285fd]/30 rounded-tr-[2.5rem] pointer-events-none z-20" />

              <div className="relative rounded-4xl overflow-hidden aspect-4/5 bg-[#050816]">
                {/* Tech Scanning Animation Line */}
                <motion.div
                  animate={{ top: ["0%", "100%", "0%"] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                  className="absolute left-0 right-0 h-0.5 bg-linear-to-r from-transparent via-[#a285fd] to-transparent z-10 opacity-40"
                />

                <Image
                  src="/assets/anurag-prof.png"
                  alt="Anurag Singh"
                  fill
                  priority // Fixes LCP (Largest Contentful Paint) for Hero images
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" // FIXES THE CONSOLE WARNING
                  className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000 ease-in-out"
                />

                {/* Subtle Vignette for depth */}
                <div className="absolute inset-0 bg-linear-to-t from-[#050816]/60 to-transparent pointer-events-none" />
              </div>

              {/* Enhanced Achievement Badge */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -right-4 top-10 bg-white p-4 rounded-3xl shadow-[0_20px_40px_rgba(0,0,0,0.4)] border border-gray-100"
              >
                <div className="flex flex-col items-center">
                  <span className="text-black font-black text-2xl leading-none">
                    500+
                  </span>
                  <span className="text-gray-500 text-[9px] font-bold uppercase tracking-widest mt-1">
                    DSA Solved
                  </span>
                </div>
              </motion.div>

              {/* Floating Tech Chips */}
              <div className="absolute bottom-6 left-6 flex flex-col gap-2">
                <div className="flex items-center gap-2 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-xl border border-white/10">
                  <Layout size={12} className="text-[#a285fd]" />
                  <span className="text-white text-[10px] font-bold uppercase tracking-tight">
                    Next.js
                  </span>
                </div>
                <div className="flex items-center gap-2 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-xl border border-white/10">
                  <Box size={12} className="text-blue-400" />
                  <span className="text-white text-[10px] font-bold uppercase tracking-tight">
                    MERN Stack
                  </span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
