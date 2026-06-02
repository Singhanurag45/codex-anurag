"use client";

import React from "react";
import { motion } from "framer-motion";
import { projects } from "../../lib/constants";
import ProjectCard from "../ui/ProjectCard";
import { Github, ArrowUpRight, FolderKanban } from "lucide-react";

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-[#050816] py-24 px-6"
    >
      {/* Background Glow */}
      <div className="absolute top-20 left-20 h-72 w-72 rounded-full bg-cyan-500/10 blur-[120px]" />
      <div className="absolute bottom-20 right-20 h-72 w-72 rounded-full bg-purple-500/10 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-16 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur-xl"
          >
            <FolderKanban size={16} className="text-cyan-400" />

            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-300">
              Featured Work
            </span>
          </motion.div>

          <h2 className="text-5xl font-black tracking-tight md:text-6xl">
            <span className="text-white">My</span>

            <span className="block bg-linear-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-gray-400 text-lg leading-relaxed">
            A collection of full-stack applications built using modern web
            technologies. These projects showcase my experience with the MERN
            stack, TypeScript, scalable architecture, responsive UI design, and
            real-world problem solving.
          </p>
        </div>

        {/* Stats Strip */}
        <div className="mb-14 grid grid-cols-2 gap-4 md:grid-cols-4">
       
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 xl:grid-cols-2">
          {projects.map((project, index) => (
            <motion.div
              key={`project-${index}`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              className="group"
            >
              <div className="transition-all duration-500 group-hover:-translate-y-2">
                <ProjectCard {...project} />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-20 flex justify-center"
        >
          <a
            href="https://github.com/Singhanurag45"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-8 py-4 font-semibold text-white backdrop-blur-xl transition-all duration-300 hover:scale-105 hover:border-cyan-400/40 hover:bg-cyan-400/10"
          >
            <Github
              size={20}
              className="transition-colors group-hover:text-cyan-400"
            />

            <span>Explore All Repositories</span>

            <ArrowUpRight
              size={18}
              className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
            />

            <div className="absolute inset-0 rounded-2xl bg-cyan-500/5 opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-100" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
