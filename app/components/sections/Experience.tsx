
"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  Briefcase,
  CalendarDays,
  MapPin,
  ArrowUpRight,
  CheckCircle2,
  Building2,
} from "lucide-react";
import SectionWrapper from "../hoc/SectionWrapper";

const contributions = [
  "Developing the company portfolio using Next.js and TypeScript",
  "Building reusable and scalable UI components",
  "Implementing responsive layouts across devices",
  "Collaborating on feature development and UI improvements",
  "Optimizing performance and user experience",
];

const technologies = [
  "Next.js",
  "React",
  "TypeScript",
  "Tailwind CSS",
  "API Integration",
  "Git",
];

const Experience = () => {
  return (
    <section className="relative overflow-hidden bg-[#050816] py-24">
      {/* Background Glow */}
      <div className="absolute top-20 left-20 h-72 w-72 rounded-full bg-cyan-500/10 blur-[120px]" />
      <div className="absolute bottom-20 right-20 h-72 w-72 rounded-full bg-purple-500/10 blur-[120px]" />

      <div className="relative mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="mb-20 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur-xl"
          >
            <Briefcase size={16} className="text-cyan-400" />

            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-300">
              Professional Experience
            </span>
          </motion.div>

          <h2 className="text-5xl font-black tracking-tight md:text-6xl">
            <span className="text-white">Work</span>

            <span className="block bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
              Experience
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-gray-400">
            Building modern web applications and delivering high-quality
            digital experiences using cutting-edge technologies.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-6 top-0 hidden h-full w-[2px] bg-gradient-to-b from-cyan-400 via-blue-500 to-purple-500 md:block" />

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            {/* Timeline Dot */}
            <div className="absolute left-0 top-10 hidden h-12 w-12 items-center justify-center rounded-full border border-cyan-500/30 bg-[#0b1024] md:flex">
              <Briefcase className="text-cyan-400" size={20} />
            </div>

            {/* Experience Card */}
            <div className="md:ml-20">
              <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition-all duration-500 hover:border-cyan-400/30">
                {/* Top Section */}
                <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
                  <div className="flex items-start gap-5">
                    <div className="flex h-28 w-28 items-center justify-center rounded-2xl border border-white/10 bg-[#050816]">
                      <Image
                        src="/companylogo.png"
                        alt="UrbanSkyMedia"
                        width={90}
                        height={90}
                        className="object-contain"
                      />
                    </div>

                    <div>
                      <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-cyan-400">
                        Active Internship
                      </div>

                      <h3 className="mt-4 text-3xl font-black text-white">
                        Full Stack Developer Intern
                      </h3>

                      <div className="mt-2 flex items-center gap-2 text-lg font-semibold text-gray-300">
                        <Building2 size={18} />
                        UrbanSkyMedia
                      </div>

                      <p className="mt-4 max-w-2xl text-gray-400 leading-relaxed">
                        Contributing to the development of the company portfolio
                        platform using Next.js, focusing on scalable frontend
                        architecture, reusable components, responsive design,
                        and performance optimization.
                      </p>
                    </div>
                  </div>

                  <a
                    href="https://urbanskymedia.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-4 font-semibold text-white transition hover:scale-105"
                  >
                    Visit Company

                    <ArrowUpRight
                      size={18}
                      className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
                    />
                  </a>
                </div>

                {/* Info Cards */}
                <div className="mt-10 grid gap-4 md:grid-cols-3">
                  <div className="rounded-2xl border border-white/10 bg-[#050816]/50 p-5">
                    <div className="flex items-center gap-2 text-cyan-400">
                      <CalendarDays size={18} />
                      <span className="text-xs font-bold uppercase tracking-widest">
                        Duration
                      </span>
                    </div>

                    <p className="mt-3 text-lg font-bold text-white">
                      May 2026 - Present
                    </p>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-[#050816]/50 p-5">
                    <div className="flex items-center gap-2 text-purple-400">
                      <MapPin size={18} />
                      <span className="text-xs font-bold uppercase tracking-widest">
                        Work Mode
                      </span>
                    </div>

                    <p className="mt-3 text-lg font-bold text-white">
                      Hybrid / Remote
                    </p>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-[#050816]/50 p-5">
                    <div className="flex items-center gap-2 text-emerald-400">
                      <Briefcase size={18} />
                      <span className="text-xs font-bold uppercase tracking-widest">
                        Focus Area
                      </span>
                    </div>

                    <p className="mt-3 text-lg font-bold text-white">
                      Portfolio Development
                    </p>
                  </div>
                </div>

                {/* Contributions + Tech Stack */}
                <div className="mt-10 grid gap-8 lg:grid-cols-2">
                  <div>
                    <h4 className="mb-6 text-sm font-bold uppercase tracking-[0.25em] text-white">
                      Key Contributions
                    </h4>

                    <div className="space-y-4">
                      {contributions.map((item) => (
                        <div
                          key={item}
                          className="flex items-start gap-3"
                        >
                          <CheckCircle2
                            size={18}
                            className="mt-1 shrink-0 text-cyan-400"
                          />

                          <p className="text-gray-300">
                            {item}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="mb-6 text-sm font-bold uppercase tracking-[0.25em] text-white">
                      Technologies Used
                    </h4>

                    <div className="flex flex-wrap gap-3">
                      {technologies.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-gray-200 transition hover:border-cyan-400/30 hover:text-cyan-400"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="mt-8 rounded-2xl border border-white/10 bg-[#050816]/50 p-6">
                      <p className="text-xs font-bold uppercase tracking-[0.25em] text-gray-500">
                        Internship Summary
                      </p>

                      <p className="mt-4 leading-relaxed text-gray-300">
                        Working closely on frontend development, responsive
                        design implementation, reusable component architecture,
                        and delivering a polished user experience using modern
                        React and Next.js best practices.
                      </p>
                    </div>
                  </div>
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
;
