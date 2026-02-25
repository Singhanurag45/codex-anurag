"use client";

import React from "react";
import { motion } from "framer-motion";
import { skills } from "../../lib/constants";
import { IconType } from "react-icons";
import SectionWrapper from "../hoc/SectionWrapper";

type SkillCardProps = {
  name: string;
  icon: IconType;
  index: number;
};

const SkillCard: React.FC<SkillCardProps> = ({ name, icon: Icon, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      whileHover={{ y: -8, scale: 1.05 }}
      className="flex flex-col items-center justify-center p-6 bg-[#10153e]/50 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl transition-all group relative overflow-hidden"
    >
      {/* Subtle hover glow effect */}
      <div className="absolute inset-0 bg-[#a285fd]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <div className="relative z-10">
        <Icon className="text-4xl text-gray-400 group-hover:text-[#a285fd] transition-colors duration-300 mb-3" />
      </div>

      <p className="relative z-10 text-gray-400 group-hover:text-white text-[10px] font-black uppercase tracking-[0.2em] transition-colors">
        {name}
      </p>
    </motion.div>
  );
};

const Skills: React.FC = () => {
  return (
    <section className="relative w-full py-24 bg-[#050816]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-white font-black md:text-6xl text-4xl tracking-tight">
            Technical <span className="text-[#a285fd]">Skills.</span>
          </h2>
          <div className="w-24 h-1.5 bg-[#a285fd] rounded-full mx-auto mt-6 shadow-[0_0_15px_#a285fd]" />
          <p className="mt-6 text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
            A specialized toolkit focused on building high-performance
            full-stack applications and solving complex algorithmic problems.
          </p>
        </motion.div>

        {/* Categories as Clean Rows */}
        <div className="space-y-20">
          {skills.map((category) => (
            <div key={category.title} className="relative">
              {/* Category Label */}
              <div className="flex items-center gap-4 mb-10">
                <div className="h-px flex-1 bg-linear-to-r from-transparent via-white/10 to-transparent" />
                <h3 className="text-white font-bold text-sm uppercase tracking-[0.3em] flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-[#a285fd] shadow-[0_0_8px_#a285fd]" />
                  {category.title}
                </h3>
                <div className="h-px flex-1 bg-linear-to-r from-transparent via-white/10 to-transparent" />
              </div>

              {/* Responsive Grid of Cards */}
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
                {category.technologies.map((tech, index) => (
                  <SkillCard
                    key={tech.name}
                    name={tech.name}
                    icon={tech.icon}
                    index={index}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SectionWrapper(Skills, "skills");
