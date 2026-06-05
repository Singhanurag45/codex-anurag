
"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  Briefcase,
  CalendarDays,
  MapPin,
  Building2,
} from "lucide-react";
import SectionWrapper from "../hoc/SectionWrapper";

const Experience = () => {
  return (
    <section className="relative overflow-hidden bg-[#050816] py-16 sm:py-20">
      {/* Background Glow */}
      <div className="absolute left-0 top-20 hidden h-72 w-72 rounded-full bg-cyan-500/10 blur-[120px] sm:block" />
      <div className="absolute bottom-20 right-0 hidden h-72 w-72 rounded-full bg-purple-500/10 blur-[120px] sm:block" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-0">
        {/* Section Header */}
        <div className="mb-10 text-center sm:mb-14">
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

          <h2 className="text-3xl font-black tracking-tight sm:text-4xl md:text-6xl">
            <span className="text-white">Work</span>

            <span className="block bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
              Experience
            </span>
          </h2>
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
            <div className="mx-auto max-w-3xl md:ml-20">
              <div className="rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl transition-all duration-500 hover:border-cyan-400/30 sm:p-6">
                {/* Top Section */}
                <div className="flex flex-col gap-5 min-[520px]:flex-row min-[520px]:items-start">
                  <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-[#050816] sm:h-20 sm:w-20">
                    <Image
                      src="/companylogo.png"
                      alt="UrbanSkyMedia"
                      width={64}
                      height={64}
                      className="h-12 w-12 object-contain sm:h-16 sm:w-16"
                    />
                  </div>

                  <div className="min-w-0">
                    <div className="inline-flex max-w-full items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-3 py-2 text-[0.65rem] font-semibold uppercase tracking-[0.16em] text-cyan-400 sm:px-4 sm:text-xs sm:tracking-widest">
                      Active Internship
                    </div>

                    <h3 className="mt-4 text-xl font-black text-white sm:text-2xl">
                      Full Stack Web Developer
                    </h3>

                    <div className="mt-2 flex items-center gap-2 text-sm font-semibold text-gray-300 sm:text-base">
                      <Building2 size={18} />
                      UrbanSkyMedia
                    </div>
                  </div>
                </div>

                {/* Info Cards */}
                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-2xl border border-white/10 bg-[#050816]/50 p-4">
                    <div className="flex items-center gap-2 text-cyan-400">
                      <CalendarDays size={18} />
                      <span className="text-xs font-bold uppercase tracking-widest">
                        Active Internship Duration
                      </span>
                    </div>

                    <p className="mt-3 text-sm font-bold text-white sm:text-base">
                      May 2026 - Present
                    </p>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-[#050816]/50 p-4">
                    <div className="flex items-center gap-2 text-purple-400">
                      <MapPin size={18} />
                      <span className="text-xs font-bold uppercase tracking-widest">
                        Work Mode
                      </span>
                    </div>

                    <p className="mt-3 text-sm font-bold text-white sm:text-base">
                      Onsite
                    </p>
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
