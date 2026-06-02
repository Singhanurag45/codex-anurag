"use client";

import React, { useState } from "react";
import { navLinks } from "../../lib/constants";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-5 left-0 right-0 z-50 flex justify-center px-4">
      <nav className="w-full max-w-6xl">
        <div className="flex items-center justify-between px-6 py-4 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.3)]">
          {/* Logo */}
          <a href="#" className="group">
            <h1 className="text-xl md:text-2xl font-black tracking-tight bg-linear-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
              ANURAG
            </h1>
          </a>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.id} className="relative group">
                <a
                  href={`#${link.id}`}
                  className="text-sm font-medium text-gray-300 transition-colors duration-300 hover:text-white"
                >
                  {link.title}
                </a>

                <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-linear-to-r from-cyan-400 to-purple-500 transition-all duration-300 group-hover:w-full" />
              </li>
            ))}
          </ul>

          {/* CTA Button (desktop) */}
          <a
            href="#contact"
            className="hidden md:flex items-center rounded-full bg-linear-to-r from-cyan-500 to-blue-600 px-5 py-2 text-sm font-semibold text-white transition hover:scale-105"
          >
            Hire Me
          </a>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setOpen((s) => !s)}
            className="md:hidden inline-flex items-center justify-center p-2 rounded-lg bg-white/3 border border-white/5"
            aria-label="Toggle menu"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>

        {/* Mobile Menu Drawer */}
        {open && (
          <div className="md:hidden mt-3 bg-[#050816]/80 border border-white/5 rounded-2xl px-4 py-4 backdrop-blur-md shadow-lg">
            <ul className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    onClick={() => setOpen(false)}
                    className="block text-sm font-medium text-gray-300 hover:text-white px-3 py-2 rounded-lg transition-colors"
                  >
                    {link.title}
                  </a>
                </li>
              ))}

              <li>
                <a
                  href="#contact"
                  onClick={() => setOpen(false)}
                  className="inline-flex items-center justify-center w-full px-4 py-2 rounded-full bg-linear-to-r from-cyan-500 to-blue-600 text-white font-semibold mt-2"
                >
                  Hire Me
                </a>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
