"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Briefcase,
  CalendarDays,
  MapPin,
  Sparkles,
  ArrowUpRight,
} from "lucide-react";
import SectionWrapper from "../hoc/SectionWrapper";

const highlights = [
  "Building the company portfolio in Next.js",
  "Creating responsive interfaces and reusable components",
  "Collaborating on product features and UI improvements",
];

const techStack = [
  "React",
  "Next.js",
  "TypeScript",
  "Tailwind CSS",
  "API Integration",
];

const Experience = () => {
  return (
    <section className="relative w-full py-24 bg-[#050816] overflow-hidden">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_top,rgba(162,133,253,0.12),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(99,102,241,0.08),transparent_30%)]" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <p className="text-[#a285fd] text-xs sm:text-sm font-bold uppercase tracking-[0.35em] mb-4">
            Work Journey
          </p>
          <h2 className="text-white font-black md:text-6xl text-4xl tracking-tight">
            Experience.
          </h2>
          <div className="w-24 h-1.5 bg-[#a285fd] rounded-full mx-auto mt-6 shadow-[0_0_15px_#a285fd]" />
          <p className="mt-6 text-gray-400 text-lg leading-relaxed">
            A snapshot of my current internship at UrbanSkyMedia and the kind of
            work I’m contributing to from May 2026 onward.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-[1.25fr_0.75fr] gap-8 items-stretch">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative rounded-[2rem] border border-white/10 bg-[#10153e]/55 backdrop-blur-xl p-8 sm:p-10 shadow-2xl overflow-hidden"
          >
            <div className="absolute top-0 right-0 h-40 w-40 bg-[#a285fd]/10 blur-3xl rounded-full" />

            <div className="relative flex flex-col gap-6">
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <div className="inline-flex items-center gap-2 rounded-full border border-[#a285fd]/30 bg-[#a285fd]/10 px-4 py-2 text-[#d6c8ff] text-xs font-bold uppercase tracking-[0.25em]">
                    <Briefcase size={14} />
                    Full Stack Engineer
                  </div>
                  <h3 className="mt-5 text-white text-3xl sm:text-4xl font-black tracking-tight">
                    UrbanSkyMedia
                  </h3>
                  <p className="mt-2 text-gray-400 text-sm sm:text-base font-medium">
                    Working on the company portfolio website using Next.js, with
                    a focus on clean UI, reusable components, and smooth
                    interactions.
                  </p>
                </div>

                <a
                  href="https://urbanskymedia.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-bold text-white transition-all duration-300 hover:border-[#a285fd]/50 hover:bg-[#a285fd]/10"
                >
                  Visit Company
                  <ArrowUpRight
                    size={16}
                    className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </a>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                  <div className="flex items-center gap-2 text-[#a285fd] text-xs font-bold uppercase tracking-[0.25em]">
                    <CalendarDays size={14} />
                    Duration
                  </div>
                  <p className="mt-3 text-white text-lg font-bold">
                    May 2026 - Present
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                  <div className="flex items-center gap-2 text-[#a285fd] text-xs font-bold uppercase tracking-[0.25em]">
                    <MapPin size={14} />
                    Mode
                  </div>
                  <p className="mt-3 text-white text-lg font-bold">
                    Hybrid / Remote
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                  <div className="flex items-center gap-2 text-[#a285fd] text-xs font-bold uppercase tracking-[0.25em]">
                    <Sparkles size={14} />
                    Focus
                  </div>
                  <p className="mt-3 text-white text-lg font-bold">
                    Company Portfolio
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-6 items-start">
                <div>
                  <h4 className="text-white font-bold text-sm uppercase tracking-[0.3em] mb-4">
                    What I’m Working On
                  </h4>
                  <ul className="space-y-3">
                    {highlights.map((item) => (
                      <li
                        key={item}
                        className="flex gap-3 text-gray-300 leading-relaxed"
                      >
                        <span className="mt-2 h-2 w-2 rounded-full bg-[#a285fd] shadow-[0_0_10px_#a285fd] shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="rounded-2xl border border-white/10 bg-[#050816]/70 p-5 min-w-[220px]">
                  <h4 className="text-white font-bold text-sm uppercase tracking-[0.3em] mb-4">
                    Tech Stack
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {techStack.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-xs font-semibold text-gray-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 22 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="relative rounded-[2rem] border border-white/10 bg-[#050816] p-8 sm:p-10 shadow-2xl overflow-hidden"
          >
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(162,133,253,0.08),transparent_45%)]" />

            <div className="relative flex h-full flex-col justify-between gap-8">
              <div>
                <p className="text-[#a285fd] text-xs font-bold uppercase tracking-[0.35em] mb-4">
                  Summary
                </p>
                <h3 className="text-white text-2xl font-black tracking-tight">
                  Internship Snapshot
                </h3>
                <p className="mt-4 text-gray-400 leading-relaxed">
                  The focus is on shipping a polished company portfolio in
                  Next.js with strong attention to detail, component
                  consistency, and a smooth user experience.
                </p>
              </div>

              <div className="space-y-4">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="text-gray-500 text-xs uppercase tracking-[0.3em] font-bold">
                    Role
                  </p>
                  <p className="mt-2 text-white font-semibold">
                    Full Stack Engineer at UrbanSkyMedia
                  </p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="text-gray-500 text-xs uppercase tracking-[0.3em] font-bold">
                    Start Date
                  </p>
                  <p className="mt-2 text-white font-semibold">May 2026</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="text-gray-500 text-xs uppercase tracking-[0.3em] font-bold">
                    Current Status
                  </p>
                  <p className="mt-2 text-white font-semibold">
                    Active internship
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SectionWrapper(Experience, "experience");
