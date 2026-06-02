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
      className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition-all duration-500 hover:border-cyan-400/40 hover:shadow-[0_20px_50px_rgba(34,211,238,0.12)]"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 via-blue-500/0 to-purple-500/0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 group-hover:from-cyan-500/5 group-hover:via-blue-500/5 group-hover:to-purple-500/5" />

      <div className="relative z-10 flex flex-col items-center">
        <Icon className="mb-4 text-5xl text-gray-400 transition-all duration-300 group-hover:scale-110 group-hover:text-cyan-400" />

        <p className="text-center text-xs font-bold uppercase tracking-[0.2em] text-gray-300 transition-colors group-hover:text-white">
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
            <Code2 size={16} className="text-cyan-400" />

            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-300">
              Tech Stack
            </span>
          </div>

          <h2 className="text-5xl font-black tracking-tight md:text-6xl">
            <span className="text-white">Technical</span>

            <span className="block bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
              Skills
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-gray-400">
            Technologies and tools I use to build modern, scalable web
            applications and solve real-world engineering challenges.
          </p>
        </motion.div>

        {/* Categories */}
        <div className="space-y-12">
          {skills.map((category) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur-xl"
            >
              {/* Category Title */}
              <div className="mb-8 flex items-center gap-4">
                <div className="h-px flex-1 bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent" />

                <h3 className="flex items-center gap-3 text-sm font-bold uppercase tracking-[0.3em] text-white">
                  <span className="h-2 w-2 rounded-full bg-cyan-400 shadow-[0_0_10px_#22d3ee]" />
                  {category.title}
                </h3>

                <div className="h-px flex-1 bg-gradient-to-r from-transparent via-purple-400/30 to-transparent" />
              </div>

              {/* Skills Grid */}
              <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
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
