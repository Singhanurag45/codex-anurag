"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { GraduationCap, Trophy, Target, BookOpen, Code2 } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="relative overflow-hidden bg-[#050816] py-24">
      {/* Background Glow */}
      <div className="absolute top-20 left-20 h-72 w-72 rounded-full bg-cyan-500/10 blur-[120px]" />

      <div className="absolute bottom-20 right-20 h-72 w-72 rounded-full bg-purple-500/10 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20 text-center"
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur-xl">
            <GraduationCap size={16} className="text-cyan-400" />

            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-300">
              About Me
            </span>
          </div>

          <h2 className="text-5xl font-black tracking-tight md:text-6xl">
            <span className="text-white">Developer &</span>

            <span className="block bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
              Problem Solver
            </span>
          </h2>
        </motion.div>

        <div className="grid gap-10 lg:grid-cols-2 items-center">
          {/* Education Card */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur-xl"
          >
            <div className="flex items-center justify-between mb-10">
              <div>
                <p className="text-cyan-400 text-xs font-bold uppercase tracking-[0.25em]">
                  Education
                </p>

                <h3 className="mt-3 text-4xl font-black text-white">
                  MAIT Delhi
                </h3>

                <p className="mt-2 text-gray-400">
                  Bachelor of Technology
                  <br />
                  Computer Science Engineering
                </p>
              </div>

              <Image
                src="/assets/mait-logo.png"
                alt="MAIT"
                width={90}
                height={90}
                className="object-contain"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-2xl border border-white/10 bg-[#050816]/50 p-5">
                <p className="text-xs uppercase tracking-widest text-gray-500">
                  Passing Year
                </p>

                <p className="mt-2 text-xl font-bold text-white">2026</p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-[#050816]/50 p-5">
                <p className="text-xs uppercase tracking-widest text-gray-500">
                  CGPA
                </p>

                <p className="mt-2 text-xl font-bold text-cyan-400">8.13</p>
              </div>
            </div>
          </motion.div>

          {/* About Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-5xl font-black leading-tight text-white">
              Building Modern
              <span className="block bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
                Digital Products
              </span>
            </h3>

            <p className="mt-8 text-lg leading-relaxed text-gray-400">
              I'm a MERN Stack Developer passionate about building scalable web
              applications and solving challenging problems through clean and
              efficient code.
            </p>

            <p className="mt-4 text-lg leading-relaxed text-gray-400">
              Alongside full-stack development, I actively practice Data
              Structures and Algorithms and was a finalist in Build Wars 2025,
              strengthening my ability to create innovative and high-quality
              solutions.
            </p>

            {/* Achievement Cards */}
            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl">
                <Target className="mb-3 text-cyan-400" size={24} />

                <h4 className="text-2xl font-black text-white">500+</h4>

                <p className="text-sm text-gray-400">Problems Solved</p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl">
                <Trophy className="mb-3 text-amber-400" size={24} />

                <h4 className="text-2xl font-black text-white">Finalist</h4>

                <p className="text-sm text-gray-400">Build Wars 2025</p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl">
                <Code2 className="mb-3 text-purple-400" size={24} />

                <h4 className="text-2xl font-black text-white">MERN</h4>

                <p className="text-sm text-gray-400">Full Stack Dev</p>
              </div>
            </div>

            {/* Focus Areas */}
            <div className="mt-10 flex flex-wrap gap-3">
              {[
                "React",
                "Next.js",
                "Node.js",
                "MongoDB",
                "TypeScript",
                "DSA",
              ].map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-gray-300"
                >
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
