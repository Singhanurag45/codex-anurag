"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image"; // Import Next.js Image component
import { GraduationCap, Trophy, Target, BookOpen } from "lucide-react";

const ParallaxAbout = () => {
  return (
    <section
      id="about"
      className="relative w-full py-32 bg-[#050816] flex justify-center items-center overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-16 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center relative z-10">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="z-10 relative bg-[#10153e]/80 backdrop-blur-2xl p-1 rounded-[3.5rem] border border-white/10 shadow-2xl"
          >
            <div className="bg-[#050816]/40 rounded-[3.4rem] p-12 overflow-hidden relative">
              {/* Floating College Logo Background */}
              <div className="absolute top-8 right-8 w-24 h-24 opacity-50 transition-all duration-500 rotate-12">
                <Image
                  src="/assets/mait-logo.png" 
                  alt="MAIT Logo"
                  width={100}
                  height={100}
                  className="object-contain"
                />
              </div>

              <GraduationCap
                size={180}
                className="absolute -bottom-10 -right-10 text-white opacity-5 rotate-12"
              />

              <h3 className="text-[#a285fd] font-bold uppercase tracking-[0.3em] text-[10px] mb-6">
                Academic History
              </h3>
              <h2 className="text-white text-5xl font-black mb-10 tracking-tighter leading-none">
                MAIT,
                <br />
                Delhi
              </h2>

              <div className="space-y-6">
                <div className="flex justify-between items-center border-b border-white/5 pb-4">
                  <span className="text-gray-500 text-sm font-medium">
                    B.Tech in CSE
                  </span>
                  <span className="text-white font-mono font-bold">
                    2022-26
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-500 text-sm font-medium">
                    Aggregate Grade
                  </span>
                  <span className="text-[#a285fd] font-black text-3xl">
                    7.8
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -bottom-10 -left-10 z-20 bg-[#a285fd] p-8 rounded-4xl shadow-[0_20px_50px_rgba(162,133,253,0.3)] rotate-6"
          >
            <Trophy className="text-white" size={40} />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
        >
          <h2 className="text-white font-black text-7xl mb-8 leading-none tracking-tighter">
            Coding with
            <br />
            <span className="text-[#a285fd]">Precision.</span>
          </h2>
          <p className="text-gray-400 text-xl leading-relaxed mb-8">
            As a MERN developer and a finalist at{" "}
            <span className="text-white font-bold">BUILD WARS 2025</span>, I
            focus on turning complex problems into elegant, scalable digital
            experiences.
          </p>
          <div className="flex items-center gap-6">
            <div className="flex -space-x-4">
              {[Target, BookOpen, Code2].map((Icon, i) => (
                <div
                  key={i}
                  className="w-12 h-12 rounded-full bg-[#10153e] border-2 border-[#050816] flex items-center justify-center text-[#a285fd]"
                >
                  <Icon size={20} />
                </div>
              ))}
            </div>
            <p className="text-gray-500 text-sm font-bold uppercase tracking-widest">
              500+ Challenges Conquered
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const Code2 = (props: any) => <BookOpen {...props} />;

export default ParallaxAbout;
