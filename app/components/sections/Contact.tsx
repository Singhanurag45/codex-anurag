"use client";

import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import {
Send,
Mail,
MapPin,
User,
MessageSquare,
} from "lucide-react";

type FormState = {
name: string;
email: string;
message: string;
};

export default function Contact() {
const formRef = useRef<HTMLFormElement | null>(null);

const [form, setForm] = useState<FormState>({
name: "",
email: "",
message: "",
});

const [loading, setLoading] = useState(false);

const handleChange = (
e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
) => {
setForm({
...form,
[e.target.name]: e.target.value,
});
};

const handleSubmit = async (
e: React.FormEvent<HTMLFormElement>
) => {
e.preventDefault();
setLoading(true);

try {
  await emailjs.send(
    process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
    process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
    {
      from_name: form.name,
      to_name: "Anurag Singh",
      from_email: form.email,
      message: form.message,
    },
    process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
  );

  setLoading(false);
  alert("Message sent successfully!");

  setForm({
    name: "",
    email: "",
    message: "",
  });
} catch {
  setLoading(false);
  alert("Something went wrong. Please try again.");
}

};

return ( <section
   id="contact"
   className="relative overflow-hidden bg-[#050816] px-4 py-20 sm:px-6 sm:py-24"
 >
{/* Background Glow */} <div className="absolute left-0 top-20 hidden h-72 w-72 rounded-full bg-cyan-500/10 blur-[120px] sm:block" /> <div className="absolute bottom-20 right-0 hidden h-72 w-72 rounded-full bg-purple-500/10 blur-[120px] sm:block" />


  <div className="relative mx-auto max-w-6xl">
    <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
      {/* Left Side */}
      <motion.div
        initial={{ opacity: 0, x: -60 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="space-y-8"
      >
        <div>
          <div className="mb-6 inline-flex max-w-full items-center gap-2 rounded-full border border-green-500/20 bg-green-500/10 px-4 py-2 text-xs font-medium text-green-400 sm:text-sm">
            <div className="h-2 w-2 shrink-0 rounded-full bg-green-400 animate-pulse" />
            Available for Internships & Full-Time Roles
          </div>

          <h2 className="text-3xl font-black tracking-tight sm:text-4xl md:text-6xl">
            Let&apos;s Build
            <span className="block bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
              Something Amazing
            </span>
          </h2>

          <p className="mt-4 text-base leading-relaxed text-gray-400 sm:mt-6 sm:text-lg">
            Have a project in mind or want to discuss opportunities?
            Feel free to reach out. I&apos;ll respond as soon as possible.
          </p>
        </div>

        {/* Contact Details */}
        <div className="space-y-6">
          <div className="flex items-start gap-4 sm:items-center sm:gap-5">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-cyan-400 sm:h-14 sm:w-14">
              <Mail size={24} />
            </div>

            <div className="min-w-0">
              <p className="text-xs uppercase tracking-widest text-gray-500 font-bold">
                Email
              </p>
              <p className="break-words text-base font-medium text-white sm:text-lg">
                anuragsinghrbl2002@gmail.com
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4 sm:gap-5">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-purple-400 sm:h-14 sm:w-14">
              <MapPin size={24} />
            </div>

            <div>
              <p className="text-xs uppercase tracking-widest text-gray-500 font-bold">
                Location
              </p>
              <p className="text-white text-lg font-medium">
                Delhi, India
              </p>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex gap-4 pt-4">
            <a
              href="https://github.com/Singhanurag45"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:border-cyan-400 transition"
            >
              <img
                src="/assets/github.png"
                alt="GitHub"
                className="w-5 h-5"
              />
            </a>

            <a
              href="https://www.linkedin.com/in/anurag-singh-9598b4207/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:border-cyan-400 transition"
            >
              <img
                src="/assets/linkedin.png"
                alt="LinkedIn"
                className="w-5 h-5"
              />
            </a>

            <a
              href="https://leetcode.com/Anuragsingh_123"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:border-cyan-400 transition"
            >
              <img
                src="/assets/leetcode-logo.png"
                alt="LeetCode"
                className="w-5 h-5"
              />
            </a>
          </div>
        </div>
      </motion.div>

      {/* Right Side Form */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="relative rounded-[2rem] border border-white/10 bg-white/5 p-5 shadow-[0_8px_40px_rgba(0,0,0,0.3)] backdrop-blur-xl transition-all duration-500 hover:border-cyan-400/30 sm:p-8 md:p-10"
      >
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="space-y-5 sm:space-y-6"
        >
          {/* Name */}
          <div>
            <label className="text-sm text-gray-300 font-medium mb-2 block">
              Full Name
            </label>

            <div className="relative">
              <User
                size={20}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
              />

              <input
                type="text"
                name="name"
                required
                value={form.name}
                onChange={handleChange}
                placeholder="John Doe"
                className="w-full rounded-2xl border border-white/10 bg-[#050816] py-4 pl-12 pr-4 text-white outline-none placeholder:text-gray-600 focus:border-cyan-400"
              />
            </div>
          </div>

          {/* Email */}
          <div>
            <label className="text-sm text-gray-300 font-medium mb-2 block">
              Email Address
            </label>

            <div className="relative">
              <Mail
                size={20}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
              />

              <input
                type="email"
                name="email"
                required
                value={form.email}
                onChange={handleChange}
                placeholder="john@example.com"
                className="w-full rounded-2xl border border-white/10 bg-[#050816] py-4 pl-12 pr-4 text-white outline-none placeholder:text-gray-600 focus:border-cyan-400"
              />
            </div>
          </div>

          {/* Message */}
          <div>
            <label className="text-sm text-gray-300 font-medium mb-2 block">
              Message
            </label>

            <div className="relative">
              <MessageSquare
                size={20}
                className="absolute left-4 top-5 text-gray-500"
              />

              <textarea
                name="message"
                rows={5}
                required
                value={form.message}
                onChange={handleChange}
                placeholder="Tell me about your project..."
                className="w-full resize-none rounded-2xl border border-white/10 bg-[#050816] py-4 pl-12 pr-4 text-white outline-none placeholder:text-gray-600 focus:border-cyan-400"
              />
            </div>
          </div>

          {/* Button */}
          <button
            type="submit"
            disabled={loading}
            className="flex w-full items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 py-4 font-bold text-white transition-all duration-300 hover:scale-[1.02] sm:py-5"
          >
            {loading ? "Sending..." : "Send Message"}

            <Send
              size={20}
              className="group-hover:translate-x-1 transition-transform"
            />
          </button>
        </form>
      </motion.div>
    </div>
  </div>
</section>


);
}
