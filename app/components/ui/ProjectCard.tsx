"use client";

import { motion } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import { Github } from "lucide-react";

type Tag = { name: string; color: string };

type ProjectCardProps = {
  name: string;
  description: string;
  tags: Tag[];
  image: string | StaticImageData;
  source_code_link: string;
};

export default function ProjectCard({
  name,
  description,
  tags,
  image,
  source_code_link,
}: ProjectCardProps) {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      className="group relative w-full h-full"
    >
      {/* Wrapping everything in the anchor tag makes the whole card clickable. 
        'block' ensures it takes up the full space of the motion div.
      */}
      <a
        href={source_code_link}
        target="_blank"
        rel="noopener noreferrer"
        className="block w-full h-full no-underline"
      >
        <div className="bg-[#10153e]/50 backdrop-blur-sm p-5 rounded-[2.5rem] w-full h-full flex flex-col border border-white/5 group-hover:border-[#a285fd]/50 transition-all duration-500 shadow-2xl relative overflow-hidden">
          {/* Image Container */}
          <div className="relative w-full h-56 mb-6 overflow-hidden rounded-[1.8rem] bg-[#050816]">
            <Image
              src={image}
              alt={name}
              fill
              className="object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
              sizes="(max-width: 768px) 100vw, 500px"
            />

            {/* Visual indicator for GitHub on hover */}
            <div className="absolute top-4 right-4 z-20">
              <div className="w-10 h-10 rounded-full bg-[#050816]/80 backdrop-blur-md flex items-center justify-center border border-white/10 text-white group-hover:bg-[#a285fd] group-hover:border-[#a285fd] transition-all duration-300">
                <Github size={18} />
              </div>
            </div>

            {/* Dark gradient overlay that appears on hover */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#050816]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>

          {/* Text Content */}
          <div className="flex-1 flex flex-col px-2">
            <h3 className="text-white font-black text-2xl mb-3 group-hover:text-[#a285fd] transition-colors tracking-tight">
              {name}
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-1 line-clamp-3">
              {description}
            </p>

            {/* Tech Tags */}
            <div className="flex flex-wrap gap-2 mt-auto">
              {tags?.map((tag, index) => (
                <span
                  key={tag.name + index}
                  className="text-[10px] font-bold uppercase tracking-[0.1em] px-3 py-1 rounded-lg bg-[#050816] text-gray-400 border border-white/5 group-hover:border-[#a285fd]/20 transition-colors"
                >
                  {tag.name}
                </span>
              ))}
            </div>
          </div>

          {/* Subtle Bottom Glow on Hover */}
          <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-2/3 h-8 bg-[#a285fd] opacity-0 group-hover:opacity-10 blur-[40px] transition-all duration-500" />
        </div>
      </a>
    </motion.div>
  );
}
