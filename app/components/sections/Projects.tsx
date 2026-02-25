"use client";

import React from "react";
import { motion } from "framer-motion";
import { projects } from "../../lib/constants";
import ProjectCard from "../ui/ProjectCard";
import { Github, ArrowUpRight } from "lucide-react"; // Added for the new button

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative w-full py-20 px-4 sm:px-6 lg:px-8 bg-[#050816]"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-white font-black md:text-6xl sm:text-5xl text-4xl mb-4 tracking-tight">
            My <span className="text-[#a285fd]">Projects.</span>
          </h2>

          <div className="w-24 h-1.5 bg-[#a285fd] rounded-full mx-auto mb-6 shadow-[0_0_10px_#a285fd]" />

          <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
            A collection of full-stack applications showcasing my expertise in
            the MERN stack, TypeScript, and high-performance web development.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 justify-items-center mb-16">
          {projects.map((project, index) => (
            <motion.div
              key={`project-${index}`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="w-full max-w-[550px]"
            >
              <ProjectCard {...project} />
            </motion.div>
          ))}
        </div>

        {/* New "View All Projects" Button Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <a
            href="https://github.com/Singhanurag45"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex items-center gap-3 bg-[#10153e] hover:bg-[#1a204d] text-white px-8 py-4 rounded-2xl font-bold border border-white/10 transition-all duration-300 shadow-lg hover:shadow-[#a285fd]/20"
          >
            <Github
              size={20}
              className="group-hover:text-[#a285fd] transition-colors"
            />
            <span>Explore All Repositories</span>
            <ArrowUpRight
              size={18}
              className="text-gray-500 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
            />

            {/* Subtle glow effect on hover */}
            <div className="absolute inset-0 rounded-2xl bg-[#a285fd]/5 opacity-0 group-hover:opacity-100 blur-xl transition-opacity" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
