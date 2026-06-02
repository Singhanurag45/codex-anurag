"use client";

import React from "react";
import Image from "next/image";
import {
  ArrowDown,
  Download,
  Github,
  Linkedin,
  Code2,
  Sparkles,
} from "lucide-react";
import { motion } from "framer-motion";
import { hero } from "../../lib/constants";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-[#050816] flex items-center"
    >
      {/* Background Glow */}
      <div className="absolute top-20 left-20 h-72 w-72 rounded-full bg-[#a285fd]/10 blur-[120px]" />
      <div className="absolute bottom-20 right-20 h-72 w-72 rounded-full bg-blue-500/10 blur-[120px]" />

      {/* Grid */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(#a285fd 1px, transparent 1px),
            linear-gradient(90deg, #a285fd 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 rounded-full border border-[#a285fd]/30 bg-[#a285fd]/10 px-4 py-2 text-[#d6c8ff] text-xs font-bold uppercase tracking-[0.25em] mb-8">
              <Sparkles size={14} />
              Full Stack Developer
            </div>

            <h1 className="text-white text-5xl sm:text-6xl lg:text-7xl font-black leading-[0.95] tracking-tight">
              Hi, I'm{" "}
              <span className="bg-gradient-to-r from-[#a285fd] via-indigo-400 to-blue-500 bg-clip-text text-transparent">
                Anurag Singh
              </span>
            </h1>

            <p className="mt-8 text-xl text-gray-300 font-semibold">
              MERN Stack & Next.js Developer
            </p>

            <p className="mt-5 max-w-2xl text-gray-400 leading-relaxed text-lg">
              B.Tech Computer Science student at MAIT Delhi, passionate about
              building modern web applications, scalable backend systems, and
              solving algorithmic challenges with clean and efficient code.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mt-10 max-w-xl">
              <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-5 text-center">
                <h3 className="text-white text-2xl font-black">500+</h3>
                <p className="text-gray-400 text-xs uppercase tracking-widest mt-1">
                  DSA Problems
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-5 text-center">
                <h3 className="text-white text-2xl font-black">15+</h3>
                <p className="text-gray-400 text-xs uppercase tracking-widest mt-1">
                  Projects
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-5 text-center">
                <h3 className="text-white text-2xl font-black">2026</h3>
                <p className="text-gray-400 text-xs uppercase tracking-widest mt-1">
                  Graduate
                </p>
              </div>
            </div>

            {/* CTA */}
            <div className="flex flex-wrap gap-4 mt-10">
              <a
                href="#projects"
                className="group inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-[#a285fd] to-indigo-600 px-8 py-4 text-white font-bold transition-all duration-300 hover:scale-[1.03]"
              >
                View Projects
                <Code2
                  size={18}
                  className="transition-transform group-hover:rotate-6"
                />
              </a>

              <a
                href={hero.resumeLink}
                download
                className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-8 py-4 text-white font-bold backdrop-blur-xl transition-all duration-300 hover:border-[#a285fd]/40 hover:bg-[#a285fd]/10"
              >
                Resume
                <Download size={18} />
              </a>
            </div>

            {/* Social */}
            <div className="flex items-center gap-4 mt-8">
              <a
                href="https://github.com/Singhanurag45"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-2xl border border-white/10 bg-white/5 p-4 text-gray-300 transition-all hover:text-white hover:border-[#a285fd]/40"
              >
                <Github size={20} />
              </a>

              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-2xl border border-white/10 bg-white/5 p-4 text-gray-300 transition-all hover:text-white hover:border-[#a285fd]/40"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </motion.div>

          {/* Right Side */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Glow */}
              <div className="absolute inset-0 rounded-[3rem] bg-gradient-to-r from-[#a285fd]/20 to-blue-500/20 blur-[80px]" />

              <div className="relative rounded-[3rem] border border-white/10 bg-white/5 backdrop-blur-xl p-3 shadow-2xl">
                <div className="relative overflow-hidden rounded-[2.5rem]">
                  <Image
                    src={hero.profilePic}
                    alt="Anurag Singh"
                    width={450}
                    height={550}
                    priority
                    className="object-cover"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#050816]/40 to-transparent" />
                </div>

                {/* Floating Card */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                  }}
                  className="absolute -left-8 top-10 rounded-3xl border border-white/10 bg-[#10153e] p-5 shadow-xl"
                >
                  <p className="text-3xl font-black text-white">500+</p>
                  <p className="text-xs uppercase tracking-widest text-gray-400">
                    Problems Solved
                  </p>
                </motion.div>

                <motion.div
                  animate={{ y: [0, 10, 0] }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                  }}
                  className="absolute -right-8 bottom-10 rounded-3xl border border-white/10 bg-[#10153e] p-5 shadow-xl"
                >
                  <p className="text-3xl font-black text-white">Next.js</p>
                  <p className="text-xs uppercase tracking-widest text-gray-400">
                    Primary Stack
                  </p>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <a
            href="#about"
            className="flex flex-col items-center gap-2 text-gray-500 hover:text-white transition-colors"
          >
            <span className="text-xs uppercase tracking-[0.3em]">Scroll</span>
            <ArrowDown size={18} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
