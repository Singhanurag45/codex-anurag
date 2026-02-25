"use client";

import { useState, useEffect } from "react";
import { navLinks } from "../../lib/constants";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Add scroll listener to change opacity
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`w-full flex items-center py-5 fixed top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#050816]/80 backdrop-blur-md border-b border-white/5"
          : "bg-transparent"
      }`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto px-6">
        <button
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          <p className="text-white text-xl font-black tracking-tighter cursor-pointer italic">
            ANURAG SINGH
          </p>
        </button>

        {/* Desktop Navigation */}
        <ul className="list-none hidden sm:flex flex-row gap-8">
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`${
                active === link.title ? "text-[#a285fd]" : "text-gray-400"
              } hover:text-white text-sm font-bold uppercase tracking-widest cursor-pointer transition-colors`}
              onClick={() => setActive(link.title)}
            >
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>

        {/* Mobile Navigation */}
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <button
            onClick={() => setToggle(!toggle)}
            className="w-10 h-10 flex items-center justify-center bg-[#10153e] rounded-lg border border-white/10 text-white"
          >
            {toggle ? "✕" : "☰"}
          </button>

          <AnimatePresence>
            {toggle && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: -20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: -20 }}
                className="p-6 bg-[#10153e] backdrop-blur-xl absolute top-20 right-0 mx-4 my-2 min-w-[200px] z-10 rounded-2xl border border-white/10 shadow-2xl"
              >
                <ul className="list-none flex flex-col gap-4">
                  {navLinks.map((link) => (
                    <li
                      key={link.id}
                      className={`${
                        active === link.title
                          ? "text-[#a285fd]"
                          : "text-gray-400"
                      } font-bold uppercase tracking-widest cursor-pointer text-xs`}
                      onClick={() => {
                        setToggle(false);
                        setActive(link.title);
                      }}
                    >
                      <a href={`#${link.id}`} className="block w-full">
                        {link.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;