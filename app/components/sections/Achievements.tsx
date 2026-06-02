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
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.5,
        delay: index * 0.1,
      }}
      className="group"
    >
      <div className="relative h-full rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 transition-all duration-500 hover:-translate-y-2 hover:border-cyan-400/40 hover:shadow-[0_20px_60px_rgba(34,211,238,0.12)]">
        <div className="flex items-start gap-5">
          <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-gradient-to-br from-cyan-500/10 to-purple-500/10 text-cyan-400">
            <Trophy size={24} />
          </div>

          <div className="flex-1">
            <h3 className="text-xl font-bold text-white transition-colors group-hover:text-cyan-400">
              {title}
            </h3>

            <p className="mt-3 text-sm leading-relaxed text-gray-400">
              {description}
            </p>

            {link && (
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-cyan-400 transition hover:text-white"
              >
                View Achievement
                <ExternalLink
                  size={15}
                  className="transition-transform group-hover:translate-x-1"
                />
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default function Achievements() {
  return (
    <section
      id="achievements"
      className="relative overflow-hidden bg-[#050816] py-24 px-6"
    >
      {/* Background Glow */}
      <div className="absolute top-20 left-20 h-72 w-72 rounded-full bg-cyan-500/10 blur-[120px]" />
      <div className="absolute bottom-20 right-20 h-72 w-72 rounded-full bg-purple-500/10 blur-[120px]" />

      <div className="relative mx-auto max-w-6xl">
        {/* Header */}
        <div className="mb-16 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur-xl"
          >
            <Award size={16} className="text-cyan-400" />
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-300">
              Milestones
            </span>
          </motion.div>

          <h2 className="text-5xl font-black tracking-tight md:text-6xl">
            <span className="text-white">My</span>
            <span className="block bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
              Achievements
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-gray-400">
            Highlights from my coding journey, academic growth, competitive
            programming, and professional experience.
          </p>
        </div>

        {/* Achievement Cards */}
        <div className="grid gap-6 md:grid-cols-2">
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
