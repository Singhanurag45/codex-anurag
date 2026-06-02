"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { leetCodeStats } from "../../lib/constants";
import { ExternalLink, Trophy, Calendar, CheckCircle } from "lucide-react";

type ProgressBarProps = {
  label: string;
  value: number;
  max: number;
  color: string;
};

const ProgressBar: React.FC<ProgressBarProps> = ({
  label,
  value,
  max,
  color,
}) => {
  const percentage = Math.round((value / max) * 100);
  return (
    <div className="mb-6">
      <div className="flex justify-between items-end mb-2">
        <span className="text-gray-400 font-bold text-xs uppercase tracking-widest">
          {label}
        </span>
        <span className="text-white font-mono text-sm font-bold">
          {value} <span className="text-gray-600">/ {max}</span>
        </span>
      </div>
      <div className="w-full bg-[#050816] rounded-full h-2.5 border border-white/5 overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${percentage}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: "circOut" }}
          className={`h-full rounded-full ${color} shadow-[0_0_10px_rgba(162,133,253,0.3)]`}
        />
      </div>
    </div>
  );
};

export default function LeetCode() {
  const easy = parseInt(leetCodeStats.solvedProblems.easy.split("/")[0] || "0");
  const easyMax = parseInt(
    leetCodeStats.solvedProblems.easy.split("/")[1] || "1",
  );
  const medium = parseInt(
    leetCodeStats.solvedProblems.medium.split("/")[0] || "0",
  );
  const mediumMax = parseInt(
    leetCodeStats.solvedProblems.medium.split("/")[1] || "1",
  );
  const hard = parseInt(leetCodeStats.solvedProblems.hard.split("/")[0] || "0");
  const hardMax = parseInt(
    leetCodeStats.solvedProblems.hard.split("/")[1] || "1",
  );
  const problemsSolvedTotal = easy + medium + hard;

  return (
    <section id="leetcode" className="py-24 px-6 bg-[#050816]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 bg-[#10153e] px-4 py-1.5 rounded-full border border-white/10 mb-6"
          >
            <Image
              src="/assets/leetcode-logo.png"
              alt="LC"
              width={30}
              height={20}
            />
            <span className="text-[10px] font-bold text-gray-300 uppercase tracking-widest">
              Coding Metrics
            </span>
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight">
            Problem Solving <span className="text-[#a285fd]">Portfolio.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left: Glass Profile Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="bg-[#10153e]/50 backdrop-blur-xl p-8 rounded-[2.5rem] border border-white/10 flex flex-col items-center text-center shadow-2xl"
          >
            <div className="relative w-55 h-32 mb-6">
              <div className="absolute inset-0 bg-[#a285fd] blur-2xl opacity-20 rounded-full" />
              <Image
                src={leetCodeStats.profilePic}
                alt="Profile"
                fill
                className="rounded-3xl border-4 border-[#050816] object-cover relative z-10"
              />
            </div>
            <h3 className="text-2xl font-bold text-white mb-1">
              {leetCodeStats.username}
            </h3>
            <p className="text-[#a285fd] font-medium mb-6">
              @{leetCodeStats.handle}
            </p>

            <div className="w-full bg-[#050816]/50 rounded-2xl p-4 border border-white/5 mb-8">
              <p className="text-[10px] text-gray-500 font-bold uppercase tracking-widest mb-1">
                Global Rank
              </p>
              <p className="text-2xl font-black text-white">
                {leetCodeStats.rank}
              </p>
            </div>

            <a
              href={`https://leetcode.com/${leetCodeStats.handle}`}
              target="_blank"
              className="w-full bg-[#a285fd] hover:bg-[#8c6efb] text-white py-4 rounded-2xl font-bold transition-all flex items-center justify-center gap-2 group"
            >
              Visit Profile{" "}
              <ExternalLink
                size={18}
                className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
              />
            </a>
          </motion.div>

          {/* Right: Stats and Badges Container */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="lg:col-span-2 bg-[#10153e]/50 backdrop-blur-xl p-8 md:p-10 rounded-[2.5rem] border border-white/10 shadow-2xl"
          >
            {/* Problems Solved Progress */}
            <div className="flex flex-col md:flex-row gap-12 items-center mb-10 pb-10 border-b border-white/5">
              <div className="relative w-44 h-44 flex items-center justify-center shrink-0">
                <svg className="w-full h-full transform -rotate-90">
                  <circle
                    className="text-[#050816]"
                    strokeWidth="10"
                    stroke="currentColor"
                    fill="transparent"
                    r="80"
                    cx="88"
                    cy="88"
                  />
                  <motion.circle
                    className="text-[#a285fd]"
                    strokeWidth="10"
                    strokeDasharray={2 * Math.PI * 80}
                    strokeLinecap="round"
                    stroke="currentColor"
                    fill="transparent"
                    r="80"
                    cx="88"
                    cy="88"
                    initial={{ strokeDashoffset: 2 * Math.PI * 80 }}
                    whileInView={{
                      strokeDashoffset:
                        2 * Math.PI * 80 -
                        2 *
                          Math.PI *
                          80 *
                          (problemsSolvedTotal /
                            (leetCodeStats.solvedProblems.totalAvailable ||
                              3749)),
                    }}
                    transition={{ duration: 2, ease: "easeOut" }}
                  />
                </svg>
                <div className="absolute text-center">
                  <span className="block text-5xl font-black text-white">
                    {problemsSolvedTotal}
                  </span>
                  <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">
                    Solved
                  </span>
                </div>
              </div>

              <div className="w-full">
                <ProgressBar
                  label="Easy"
                  value={easy}
                  max={easyMax}
                  color="bg-emerald-400"
                />
                <ProgressBar
                  label="Medium"
                  value={medium}
                  max={mediumMax}
                  color="bg-amber-400"
                />
                <ProgressBar
                  label="Hard"
                  value={hard}
                  max={hardMax}
                  color="bg-rose-500"
                />
              </div>
            </div>

            {/* Platform Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-10">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-purple-500/10 flex items-center justify-center text-[#a285fd] border border-purple-500/20">
                  <Calendar size={18} />
                </div>
                <div>
                  <p className="text-[10px] font-bold text-gray-500 uppercase">
                    Active Days
                  </p>
                  <p className="font-bold text-white text-lg">
                    {leetCodeStats.totalActiveDays}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-400 border border-emerald-500/20">
                  <CheckCircle size={18} />
                </div>
                <div>
                  <p className="text-[10px] font-bold text-gray-500 uppercase">
                    Submissions
                  </p>
                  <p className="font-bold text-white text-lg">
                    {leetCodeStats.submissionsPastYear}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 flex items-center justify-center text-amber-400 border border-amber-500/20">
                  <Trophy size={18} />
                </div>
                <div>
                  <p className="text-[10px] font-bold text-gray-500 uppercase">
                    Badges
                  </p>
                  <p className="font-bold text-white text-lg">
                    {leetCodeStats.badges.length}
                  </p>
                </div>
              </div>
            </div>

            {/* Re-integrated Earned Badges Section */}
            <div className="pt-8 border-t border-white/5">
              <p className="text-xs font-bold text-gray-500 uppercase tracking-[0.2em] mb-6">
                Earned Badges
              </p>
              <div className="flex flex-wrap gap-5">
                {leetCodeStats.badges.map((badge) => (
                  <div key={badge.id} className="group relative">
                    <div className="absolute inset-0 bg-[#a285fd] blur-xl opacity-0 group-hover:opacity-20 transition-all duration-500"></div>
                    <Image
                      src={badge.image}
                      alt={badge.name}
                      width={56}
                      height={56}
                      className="relative grayscale group-hover:grayscale-0 transition-all duration-300 hover:scale-110 cursor-help"
                      title={badge.name}
                    />
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
