"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Users,
  Quote,
  Lightbulb,
  Users2,
  ShieldCheck,
  Zap,
} from "lucide-react";

export default function Collaboration() {
  return (
    <section
      id="collaboration"
      className="relative w-full py-24 bg-[#050816] overflow-hidden"
    >
      {/* Background Tech Circle */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#a285fd] opacity-[0.02] blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="flex items-center gap-2 bg-[#10153e] px-4 py-1.5 rounded-full border border-white/10 mb-6"
          >
            <Users2 size={14} className="text-[#a285fd]" />
            <span className="text-[10px] font-bold text-gray-300 uppercase tracking-[0.3em]">
              Soft Skills & Teamwork
            </span>
          </motion.div>
          <h2 className="text-white text-5xl font-black tracking-tighter">
            Collaborative <span className="text-[#a285fd]">Pulse.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Main Hackathon Card - 8 Columns */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="lg:col-span-8 bg-[#10153e]/30 border border-white/5 p-8 md:p-12 rounded-[3rem] backdrop-blur-xl relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 p-12 opacity-[0.03] group-hover:opacity-[0.07] transition-opacity">
              <Zap size={200} />
            </div>

            <div className="relative z-10">
              <div className="flex flex-wrap items-center justify-between gap-4 mb-10">
                <div>
                  <h3 className="text-white text-3xl font-black mb-2">
                    BUILD WARS Hackathon 2025
                  </h3>
                  <p className="text-[#a285fd] font-mono text-xs uppercase tracking-widest font-bold">
                    Finalist — E-Summit (MAIT)
                  </p>
                </div>
                <div className="bg-white/5 px-4 py-2 rounded-xl border border-white/10 text-gray-400 text-xs font-bold uppercase tracking-widest">
                  4-Person Tactical Team
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                {/* Your Role */}
                <div className="space-y-4">
                  <p className="text-gray-500 font-bold text-[10px] uppercase tracking-[0.2em] flex items-center gap-2">
                    <ShieldCheck size={14} className="text-[#a285fd]" /> Primary
                    Role
                  </p>
                  <p className="text-white text-xl font-bold leading-relaxed">
                    Lead Full-Stack Architect
                  </p>
                  <p className="text-gray-400 text-sm leading-relaxed italic">
                    Responsible for the core MERN architecture, ensuring
                    seamless integration between the Express API and our
                    real-time React dashboard under a 36-hour deadline.
                  </p>
                </div>

                {/* Lessons Learned */}
                <div className="space-y-4">
                  <p className="text-gray-500 font-bold text-[10px] uppercase tracking-[0.2em] flex items-center gap-2">
                    <Lightbulb size={14} className="text-[#a285fd]" /> Key
                    Lessons
                  </p>
                  <ul className="space-y-3 text-sm font-medium text-gray-300">
                    <li className="flex gap-3">
                      <span className="text-[#a285fd]">01.</span> Agile
                      Debugging & Rapid Deployment
                    </li>
                    <li className="flex gap-3">
                      <span className="text-[#a285fd]">02.</span> Git-Flow &
                      Conflict Resolution
                    </li>
                    <li className="flex gap-3">
                      <span className="text-[#a285fd]">03.</span> Effective
                      Technical Communication
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Testimonial Quote Card - 4 Columns */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="lg:col-span-4 bg-linear-to-br from-[#10153e] to-[#050816] border border-white/10 p-10 rounded-[3rem] flex flex-col justify-center relative shadow-2xl"
          >
            <Quote size={40} className="text-[#a285fd]/20 mb-6" />
            <p className="text-gray-300 text-lg font-medium leading-relaxed italic mb-8">
              "Anurag's ability to simplify complex MERN logic helped our team
              stay ahead of schedule. His focus on performance was the reason we
              reached the finals."
            </p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-[#a285fd]/10 flex items-center justify-center text-[#a285fd] font-black border border-[#a285fd]/20">
                TM
              </div>
              <div>
                <p className="text-white font-bold text-sm">
                  Team Collaborator
                </p>
                <p className="text-gray-500 text-[10px] font-bold uppercase tracking-widest">
                  E-Summit 2025 Participant
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
