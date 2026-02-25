"use client";

import React from "react";
import { motion } from "framer-motion";
import { achievements } from "../../lib/constants";
import { Trophy, ExternalLink, Award } from "lucide-react";

type Achievement = {
  title: string;
  description: string;
  link?: string;
};

const AchievementCard: React.FC<Achievement & { index: number }> = ({
  title,
  description,
  link,
  index,
}) => (
  <motion.div
    initial={{ opacity: 0, x: -30 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    className="group relative"
  >
    {/* Subtle side accent that glows on hover */}
    <div className="absolute -inset-0.5 bg-linear-to-r from-[#a285fd] to-blue-500 rounded-2xl opacity-0 group-hover:opacity-10 transition duration-500 blur"></div>

    <div className="relative bg-[#10153e] p-6 rounded-2xl border border-white/10 hover:border-[#a285fd]/50 transition-all shadow-xl flex gap-5 items-start">
      <div className="shrink-0">
        <div className="w-12 h-12 rounded-xl bg-[#a285fd]/10 flex items-center justify-center text-[#a285fd] border border-[#a285fd]/20">
          <Trophy size={22} />
        </div>
      </div>

      <div className="flex-1">
        <h3 className="text-white font-bold text-xl group-hover:text-[#a285fd] transition-colors">
          {title}
        </h3>
        <p className="mt-2 text-gray-400 text-sm leading-relaxed tracking-wide">
          {description}
        </p>

        {link && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-[#a285fd] hover:text-white text-xs font-bold uppercase tracking-widest mt-4 transition-colors group/link"
          >
            Achievement
            <ExternalLink
              size={14}
              className="group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform"
            />
          </a>
        )}
      </div>
    </div>
  </motion.div>
);

export default function Achievements() {
  return (
    <section id="achievements" className="py-24 px-6 bg-[#050816]">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 bg-[#10153e] px-4 py-1.5 rounded-full border border-white/10 mb-4"
          >
            <Award size={16} className="text-[#a285fd]" />
            <span className="text-[10px] font-bold text-gray-300 uppercase tracking-[0.2em]">
              Milestones
            </span>
          </motion.div>
          <h2 className="text-4xl md:text-6xl font-black text-white tracking-tight">
            Key <span className="text-[#a285fd]">Achievements.</span>
          </h2>
        </div>

        {/* Achievement List */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {achievements.map((achievement, index) => (
            <AchievementCard
              key={`achievement-${index}`}
              index={index}
              {...achievement}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
