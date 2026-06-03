"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { leetCodeStats } from "../../lib/site-data";
import {
ExternalLink,
Trophy,
Calendar,
CheckCircle,
} from "lucide-react";

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

return ( <div className="mb-6"> <div className="mb-2 flex items-end justify-between gap-3"> <span className="text-xs font-bold uppercase tracking-widest text-gray-400">
{label} </span>


    <span className="text-sm font-bold text-white">
      {value}
      <span className="text-gray-500"> / {max}</span>
    </span>
  </div>

  <div className="h-3 w-full overflow-hidden rounded-full border border-white/10 bg-[#050816]">
    <motion.div
      initial={{ width: 0 }}
      whileInView={{ width: `${percentage}%` }}
      viewport={{ once: true }}
      transition={{ duration: 1.5 }}
      className={`h-full rounded-full ${color}`}
    />
  </div>
</div>


);
};

export default function LeetCode() {
const easy = parseInt(
leetCodeStats.solvedProblems.easy.split("/")[0] || "0"
);

const easyMax = parseInt(
leetCodeStats.solvedProblems.easy.split("/")[1] || "1"
);

const medium = parseInt(
leetCodeStats.solvedProblems.medium.split("/")[0] || "0"
);

const mediumMax = parseInt(
leetCodeStats.solvedProblems.medium.split("/")[1] || "1"
);

const hard = parseInt(
leetCodeStats.solvedProblems.hard.split("/")[0] || "0"
);

const hardMax = parseInt(
leetCodeStats.solvedProblems.hard.split("/")[1] || "1"
);

const problemsSolvedTotal = easy + medium + hard;

const totalProblems =
leetCodeStats.solvedProblems.totalAvailable || 3749;

const circumference = 2 * Math.PI * 80;

return ( <section
   id="leetcode"
   className="relative overflow-hidden bg-[#050816] px-4 py-20 sm:px-6 sm:py-24"
 >
{/* Background Glow */} <div className="absolute left-0 top-20 hidden h-72 w-72 rounded-full bg-cyan-500/10 blur-[120px] sm:block" /> <div className="absolute bottom-20 right-0 hidden h-72 w-72 rounded-full bg-purple-500/10 blur-[120px] sm:block" />


  <div className="relative mx-auto max-w-6xl">
    {/* Header */}
    <div className="mb-12 text-center sm:mb-16">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur-xl"
      >
        <Image
          src="/assets/leetcode-logo.png"
          alt="LeetCode"
          width={26}
          height={26}
        />

        <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-300">
          Coding Metrics
        </span>
      </motion.div>

      <h2 className="text-3xl font-black tracking-tight sm:text-4xl md:text-6xl">
        <span className="text-white">Problem Solving</span>

        <span className="block bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
          Portfolio
        </span>
      </h2>

      <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-gray-400 sm:mt-6 sm:text-base">
        Consistent practice in Data Structures & Algorithms through
        LeetCode with a focus on optimization, problem solving,
        and coding excellence.
      </p>
    </div>

    {/* Quick Stats */}
    <div className="mb-10 grid grid-cols-1 gap-3 min-[420px]:grid-cols-2 sm:mb-12 sm:gap-4 md:grid-cols-4">
      <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-center backdrop-blur-xl sm:p-5">
        <h3 className="text-2xl font-black text-white sm:text-3xl">
          {problemsSolvedTotal}
        </h3>
        <p className="mt-1 text-sm text-gray-400">
          Problems Solved
        </p>
      </div>

      <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-center backdrop-blur-xl sm:p-5">
        <h3 className="break-words text-2xl font-black text-white sm:text-3xl">
          {leetCodeStats.rank}
        </h3>
        <p className="mt-1 text-sm text-gray-400">
          Global Rank
        </p>
      </div>

      <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-center backdrop-blur-xl sm:p-5">
        <h3 className="text-2xl font-black text-white sm:text-3xl">
          {leetCodeStats.totalActiveDays}
        </h3>
        <p className="mt-1 text-sm text-gray-400">
          Active Days
        </p>
      </div>

      <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-center backdrop-blur-xl sm:p-5">
        <h3 className="text-2xl font-black text-white sm:text-3xl">
          {leetCodeStats.badges.length}
        </h3>
        <p className="mt-1 text-sm text-gray-400">
          Badges Earned
        </p>
      </div>
    </div>

    {/* Main Content */}
    <div className="grid gap-8 lg:grid-cols-3">
      {/* Profile Card */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="rounded-[2rem] border border-white/10 bg-white/5 p-5 text-center backdrop-blur-xl sm:p-8"
      >
        <div className="relative mx-auto mb-6 h-32 w-32">
          <div className="absolute inset-0 rounded-full bg-cyan-500/20 blur-2xl" />

          <Image
            src={leetCodeStats.profilePic}
            alt="Profile"
            fill
            className="relative z-10 rounded-full border-4 border-[#050816] object-cover"
          />
        </div>

        <h3 className="text-2xl font-bold text-white">
          {leetCodeStats.username}
        </h3>

        <p className="mt-2 text-cyan-400">
          @{leetCodeStats.handle}
        </p>

        <div className="mt-6 rounded-2xl border border-white/10 bg-[#050816]/50 p-4">
          <p className="text-xs uppercase tracking-widest text-gray-500">
            Global Rank
          </p>

          <p className="mt-2 text-3xl font-black text-white">
            {leetCodeStats.rank}
          </p>
        </div>

        <a
          href={`https://leetcode.com/${leetCodeStats.handle}`}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 py-4 font-bold text-white transition hover:scale-[1.02]"
        >
          Visit Profile
          <ExternalLink size={18} />
        </a>
      </motion.div>

      {/* Statistics */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="rounded-[2rem] border border-white/10 bg-white/5 p-5 backdrop-blur-xl sm:p-8 lg:col-span-2"
      >
        {/* Progress Section */}
        <div className="mb-8 flex flex-col items-center gap-8 border-b border-white/10 pb-8 sm:mb-10 sm:gap-10 sm:pb-10 md:flex-row">
          <div className="relative flex h-36 w-36 shrink-0 items-center justify-center sm:h-44 sm:w-44">
            <svg className="h-full w-full -rotate-90" viewBox="0 0 176 176">
              <circle
                strokeWidth="10"
                stroke="currentColor"
                fill="transparent"
                r="80"
                cx="88"
                cy="88"
                className="text-[#111827]"
              />

              <motion.circle
                strokeWidth="10"
                strokeLinecap="round"
                stroke="url(#gradient)"
                fill="transparent"
                r="80"
                cx="88"
                cy="88"
                strokeDasharray={circumference}
                initial={{
                  strokeDashoffset: circumference,
                }}
                whileInView={{
                  strokeDashoffset:
                    circumference -
                    circumference *
                      (problemsSolvedTotal /
                        totalProblems),
                }}
                transition={{
                  duration: 2,
                }}
              />

              <defs>
                <linearGradient
                  id="gradient"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="100%"
                >
                  <stop offset="0%" stopColor="#22d3ee" />
                  <stop offset="50%" stopColor="#3b82f6" />
                  <stop offset="100%" stopColor="#a855f7" />
                </linearGradient>
              </defs>
            </svg>

            <div className="absolute text-center">
              <div className="text-4xl font-black text-white sm:text-5xl">
                {problemsSolvedTotal}
              </div>

              <div className="text-xs uppercase tracking-widest text-gray-500">
                Solved
              </div>
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

        {/* Platform Stats */}
        <div className="mb-8 grid gap-4 sm:mb-10 md:grid-cols-3">
          <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-[#050816]/50 p-4 sm:gap-4">
            <Calendar className="shrink-0 text-cyan-400" />

            <div>
              <p className="text-xs uppercase tracking-widest text-gray-500">
                Active Days
              </p>

              <p className="text-lg font-bold text-white sm:text-xl">
                {leetCodeStats.totalActiveDays}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-[#050816]/50 p-4 sm:gap-4">
            <CheckCircle className="shrink-0 text-emerald-400" />

            <div>
              <p className="text-xs uppercase tracking-widest text-gray-500">
                Submissions
              </p>

              <p className="text-lg font-bold text-white sm:text-xl">
                {leetCodeStats.submissionsPastYear}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-[#050816]/50 p-4 sm:gap-4">
            <Trophy className="shrink-0 text-amber-400" />

            <div>
              <p className="text-xs uppercase tracking-widest text-gray-500">
                Badges
              </p>

              <p className="text-lg font-bold text-white sm:text-xl">
                {leetCodeStats.badges.length}
              </p>
            </div>
          </div>
        </div>

        {/* Badges */}
        <div className="border-t border-white/10 pt-8">
          <p className="mb-6 text-xs font-bold uppercase tracking-[0.2em] text-gray-500">
            Earned Badges
          </p>

          <div className="flex flex-wrap gap-4 sm:gap-5">
            {leetCodeStats.badges.map((badge) => (
              <div
                key={badge.id}
                className="group relative"
              >
                <div className="absolute inset-0 rounded-full bg-cyan-500/20 opacity-0 blur-xl transition-all duration-500 group-hover:opacity-100" />

                <Image
                  src={badge.image}
                  alt={badge.name}
                  width={64}
                  height={64}
                  title={badge.name}
                  className="relative h-12 w-12 transition-transform duration-300 group-hover:scale-110 sm:h-16 sm:w-16"
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
