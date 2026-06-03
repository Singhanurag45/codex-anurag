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
      <a
        href={source_code_link}
        target="_blank"
        rel="noopener noreferrer"
        className="block w-full h-full no-underline"
      >
        <div className="relative flex h-full w-full flex-col overflow-hidden rounded-3xl border border-white/5 bg-[#10153e]/50 p-4 shadow-2xl backdrop-blur-sm transition-all duration-500 group-hover:border-[#a285fd]/50 sm:rounded-[2.5rem] sm:p-5">
          {/* Image Container */}
          <div className="relative mb-4 h-44 w-full overflow-hidden rounded-2xl bg-[#050816] sm:mb-6 sm:h-56 sm:rounded-[1.8rem]">
            <Image
              src={image}
              alt={name}
              fill
              className="object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
              sizes="(max-width: 768px) 100vw, 500px"
            />

            {/* Visual indicator for GitHub on hover */}
            <div className="absolute right-3 top-3 z-20 sm:right-4 sm:top-4">
              <div className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-[#050816]/80 text-white backdrop-blur-md transition-all duration-300 group-hover:border-[#a285fd] group-hover:bg-[#a285fd] sm:h-10 sm:w-10">
                <Github size={18} />
              </div>
            </div>

            {/* Dark gradient overlay that appears on hover */}
            <div className="absolute inset-0 bg-linear-to-t from-[#050816]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>

          {/* Text Content */}
          <div className="flex flex-1 flex-col px-1 sm:px-2">
            <h3 className="mb-2 text-xl font-black tracking-tight text-white transition-colors group-hover:text-[#a285fd] sm:mb-3 sm:text-2xl">
              {name}
            </h3>
            <p className="mb-5 flex-1 text-sm leading-relaxed text-gray-400 line-clamp-3 sm:mb-6 sm:text-sm">
              {description}
            </p>

            {/* Tech Tags */}
            <div className="mt-auto flex flex-wrap gap-2">
              {tags?.map((tag, index) => (
                <span
                  key={tag.name + index}
                  className="rounded-lg border border-white/5 bg-[#050816] px-2.5 py-1 text-[10px] font-bold uppercase tracking-widest text-gray-400 transition-colors group-hover:border-[#a285fd]/20 sm:px-3"
                >
                  {tag.name}
                </span>
              ))}
            </div>
          </div>

          {/* Subtle Bottom Glow on Hover */}
          <div className="absolute -bottom-4 left-1/2 h-8 w-2/3 -translate-x-1/2 bg-[#a285fd] opacity-0 blur-2xl transition-all duration-500 group-hover:opacity-10" />
        </div>
      </a>
    </motion.div>
  );
}
