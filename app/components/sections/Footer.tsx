import { ArrowUpRight } from "lucide-react";
import { navLinks } from "../../lib/constants";

const socialLinks = [
  {
    name: "GitHub",
    icon: "/assets/github.png",
    link: "https://github.com/Singhanurag45",
  },
  {
    name: "LinkedIn",
    icon: "/assets/linkedin.png",
    link: "https://www.linkedin.com/in/anurag-singh-9598b4207/",
  },
  {
    name: "LeetCode",
    icon: "/assets/leetcode-logo.png",
    link: "https://leetcode.com/Anuragsingh_123",
  },
];

export default function Footer() {
  return (
    <footer className="relative mt-32">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-linear-to-t from-[#050816] via-[#0b1024] to-transparent" />

      <div className="relative max-w-7xl mx-auto px-6 sm:px-12 pb-8">
        <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 md:p-12">
          <div className="flex flex-col lg:flex-row justify-between gap-12">
            {/* Left Section */}
            <div className="max-w-md">
              <h2 className="text-4xl font-black tracking-tight bg-linear-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
                ANURAG SINGH
              </h2>

              <p className="mt-5 text-gray-400 leading-relaxed">
                MERN Stack Developer passionate about creating scalable web
                applications, solving DSA problems, and delivering impactful
                digital experiences.
              </p>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 mt-6 px-5 py-3 rounded-xl bg-linear-to-r from-cyan-500 to-blue-600 text-white font-semibold hover:scale-105 transition duration-300"
              >
                Let's Connect
                <ArrowUpRight size={18} />
              </a>
            </div>

            {/* Navigation */}
            <div>
              <h4 className="text-white font-bold uppercase tracking-widest text-sm mb-5">
                Navigation
              </h4>

              <ul className="space-y-3">
                {navLinks.map((link) => (
                  <li key={link.id}>
                    <a
                      href={`#${link.id}`}
                      className="text-gray-400 hover:text-cyan-400 transition duration-300"
                    >
                      {link.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-white font-bold uppercase tracking-widest text-sm mb-5">
                Connect
              </h4>

              <div className="flex gap-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center hover:border-cyan-400 hover:bg-cyan-400/10 transition-all duration-300"
                  >
                    <img
                      src={social.icon}
                      alt={social.name}
                      width={24}
                      height={24}
                      className="opacity-70 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300"
                    />
                  </a>
                ))}
              </div>

              <p className="mt-6 text-sm text-gray-500">
                Open for internships and full-time opportunities.
              </p>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="mt-10 pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-500">
              © {new Date().getFullYear()} Anurag Singh. All rights reserved.
            </p>

            <a
              href="#"
              className="flex items-center gap-2 text-gray-400 hover:text-white transition duration-300"
            >
              Back to Top
              <ArrowUpRight size={16} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
