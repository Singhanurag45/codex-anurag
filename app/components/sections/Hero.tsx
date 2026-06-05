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
      className="relative flex min-h-screen items-start overflow-hidden bg-[#050816] pb-20 pt-36 sm:pb-24 sm:pt-40 lg:items-center lg:py-0"
    >
      {/* Background Glow */}
      <div className="absolute left-0 top-10 h-56 w-56 rounded-full bg-[#a285fd]/10 blur-[100px] sm:left-20 sm:top-20 sm:h-72 sm:w-72 sm:blur-[120px]" />
      <div className="absolute bottom-20 right-0 h-56 w-56 rounded-full bg-blue-500/10 blur-[100px] sm:right-20 sm:h-72 sm:w-72 sm:blur-[120px]" />

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

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            {/* Eyebrow */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#a285fd]/30 bg-[#a285fd]/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-[#d6c8ff] sm:mb-8 sm:tracking-[0.25em]">
              <Sparkles size={14} />
              Full Stack Developer
            </div>

            <h1 className="text-4xl font-black leading-tight tracking-tight text-white sm:text-6xl sm:leading-[0.95] lg:text-7xl">
              Hi, I&apos;m{" "}
              <span className="bg-gradient-to-r from-[#a285fd] via-indigo-400 to-blue-500 bg-clip-text text-transparent">
                Anurag Singh
              </span>
            </h1>

            <p className="mt-6 text-lg font-semibold text-gray-300 sm:mt-8 sm:text-xl">
              MERN Stack & Next.js Developer
            </p>

            <p className="mt-4 max-w-2xl text-base leading-relaxed text-gray-400 sm:mt-5 sm:text-lg">
              B.Tech Computer Science student at MAIT Delhi, passionate about
              building modern web applications, scalable backend systems, and
              solving algorithmic challenges with clean and efficient code.
            </p>

            {/* Stats */}
            <div className="mt-8 grid max-w-xl grid-cols-1 gap-3 min-[420px]:grid-cols-3 sm:mt-10 sm:gap-4">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-center backdrop-blur-xl sm:p-5">
                <h3 className="text-2xl font-black text-white">500+</h3>
                <p className="mt-1 text-xs uppercase tracking-widest text-gray-400">
                  DSA Problems
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-center backdrop-blur-xl sm:p-5">
                <h3 className="text-2xl font-black text-white">20+</h3>
                <p className="mt-1 text-xs uppercase tracking-widest text-gray-400">
                  Projects
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-center backdrop-blur-xl sm:p-5">
                <h3 className="text-2xl font-black text-white">2026</h3>
                <p className="mt-1 text-xs uppercase tracking-widest text-gray-400">
                  Graduate
                </p>
              </div>
            </div>

            {/* CTA */}
            <div className="mt-8 flex flex-col gap-3 min-[420px]:flex-row sm:mt-10 sm:gap-4">
              <a
                href="#projects"
                className="group inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-[#a285fd] to-indigo-600 px-6 py-4 font-bold text-white transition-all duration-300 hover:scale-[1.03] sm:px-8"
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
                className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-6 py-4 font-bold text-white backdrop-blur-xl transition-all duration-300 hover:border-[#a285fd]/40 hover:bg-[#a285fd]/10 sm:px-8"
              >
                Resume
                <Download size={18} />
              </a>
            </div>

            {/* Social */}
            <div className="mt-8 flex items-center gap-4">
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
            <div className="relative w-full max-w-[18rem] sm:max-w-xs lg:max-w-sm">
              {/* Glow */}
              <div className="absolute inset-0 rounded-[3rem] bg-gradient-to-r from-[#a285fd]/20 to-blue-500/20 blur-[80px]" />

              <div className="relative rounded-[2rem] border border-white/10 bg-white/5 p-2 shadow-2xl backdrop-blur-xl sm:rounded-[3rem] sm:p-3">
                <div className="relative overflow-hidden rounded-[1.7rem] sm:rounded-[2.5rem]">
                  <Image
                    src={hero.profilePic}
                    alt="Anurag Singh"
                    width={450}
                    height={550}
                    priority
                    className="h-auto w-full object-cover"
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
                  className="absolute left-3 top-4 rounded-2xl border border-white/10 bg-[#10153e] p-3 shadow-xl sm:-left-8 sm:top-10 sm:rounded-3xl sm:p-5"
                >
                  <p className="text-xl font-black text-white sm:text-3xl">500+</p>
                  <p className="text-[0.6rem] uppercase tracking-widest text-gray-400 sm:text-xs">
                    Problems Solved
                  </p>
                </motion.div>

                <motion.div
                  animate={{ y: [0, 10, 0] }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                  }}
                  className="absolute bottom-4 right-3 rounded-2xl border border-white/10 bg-[#10153e] p-3 shadow-xl sm:-right-8 sm:bottom-10 sm:rounded-3xl sm:p-5"
                >
                  <p className="text-xl font-black text-white sm:text-3xl">Next.js</p>
                  <p className="text-[0.6rem] uppercase tracking-widest text-gray-400 sm:text-xs">
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
          className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 sm:block lg:bottom-10"
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
