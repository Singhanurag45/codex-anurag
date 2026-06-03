"use client";

import React from "react";
import { motion } from "framer-motion";
import { skills } from "../../lib/constants";
import { IconType } from "react-icons";
import { Code2 } from "lucide-react";
import SectionWrapper from "../hoc/SectionWrapper";

type SkillCardProps = {
  name: string;
  icon: IconType;
  index: number;
};

const SkillCard: React.FC<SkillCardProps> = ({ name, icon: Icon, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.5,
        delay: index * 0.04,
      }}
      whileHover={{
        y: -8,
        scale: 1.04,
      }}
      className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-4 backdrop-blur-xl transition-all duration-500 hover:border-cyan-400/40 hover:shadow-[0_20px_50px_rgba(34,211,238,0.12)] sm:p-6"
    >
      <div className="absolute inset-0 bg-linear-to-br from-cyan-500/0 via-blue-500/0 to-purple-500/0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 group-hover:from-cyan-500/5 group-hover:via-blue-500/5 group-hover:to-purple-500/5" />

      <div className="relative z-10 flex flex-col items-center">
        <Icon className="mb-3 text-4xl text-gray-400 transition-all duration-300 group-hover:scale-110 group-hover:text-cyan-400 sm:mb-4 sm:text-5xl" />

        <p className="text-center text-[0.65rem] font-bold uppercase tracking-[0.16em] text-gray-300 transition-colors group-hover:text-white sm:text-xs sm:tracking-[0.2em]">
          {name}
        </p>
      </div>
    </motion.div>
  );
};

const Skills = () => {
  return (
    <section className="relative overflow-hidden bg-[#050816] py-24">
      {/* Background Glow */}
      <div className="absolute top-20 left-20 hidden h-72 w-72 rounded-full bg-cyan-500/10 blur-[120px] sm:block" />

      <div className="absolute bottom-20 right-20 hidden h-72 w-72 rounded-full bg-purple-500/10 blur-[120px] sm:block" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14 text-center sm:mb-20"
        >
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur-xl sm:mb-6">
            <Code2 size={16} className="text-cyan-400" />

            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-300">
              Tech Stack
            </span>
          </div>

          <h2 className="text-3xl font-black tracking-tight sm:text-4xl md:text-6xl">
            <span className="text-white">Technical</span>

            <span className="block bg-linear-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
              Skills
            </span>
          </h2>

          <p className="mx-auto mt-4 max-w-3xl text-sm leading-relaxed text-gray-400 sm:mt-6 sm:text-base lg:text-lg">
            Technologies and tools I use to build modern, scalable web
            applications and solve real-world engineering challenges.
          </p>
        </motion.div>

        {/* Categories */}
        <div className="space-y-8 sm:space-y-12">
          {skills.map((category) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="rounded-4xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl sm:p-6 md:p-8"
            >
              {/* Category Title */}
              <div className="mb-6 flex items-center gap-3 sm:mb-8 sm:gap-4">
                <div className="h-px flex-1 bg-linear-to-r from-transparent via-cyan-400/30 to-transparent" />

                <h3 className="flex items-center gap-2 text-[0.65rem] font-bold uppercase tracking-[0.2em] text-white sm:gap-3 sm:text-sm sm:tracking-[0.3em]">
                  <span className="h-2 w-2 rounded-full bg-cyan-400 shadow-[0_0_10px_#22d3ee]" />
                  {category.title}
                </h3>

                <div className="h-px flex-1 bg-linear-to-r from-transparent via-purple-400/30 to-transparent" />
              </div>

              {/* Skills Grid */}
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 md:grid-cols-4 lg:grid-cols-6">
                {category.technologies.map((tech, index) => (
                  <SkillCard
                    key={tech.name}
                    name={tech.name}
                    icon={tech.icon}
                    index={index}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SectionWrapper(Skills, "skills");
