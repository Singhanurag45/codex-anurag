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
} catch (error) {
  setLoading(false);
  alert("Something went wrong. Please try again.");
}

};

return ( <section
   id="contact"
   className="relative py-24 px-6 bg-[#050816] overflow-hidden"
 >
{/* Background Glow */} <div className="absolute top-20 left-20 h-72 w-72 rounded-full bg-cyan-500/10 blur-[120px]" /> <div className="absolute bottom-20 right-20 h-72 w-72 rounded-full bg-purple-500/10 blur-[120px]" />


  <div className="relative max-w-6xl mx-auto">
    <div className="grid lg:grid-cols-2 gap-16 items-center">
      {/* Left Side */}
      <motion.div
        initial={{ opacity: 0, x: -60 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="space-y-8"
      >
        <div>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-green-500/20 bg-green-500/10 text-green-400 text-sm font-medium mb-6">
            <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            Available for Internships & Full-Time Roles
          </div>

          <h2 className="text-5xl md:text-6xl font-black tracking-tight">
            Let's Build
            <span className="block bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
              Something Amazing
            </span>
          </h2>

          <p className="text-gray-400 text-lg mt-6 leading-relaxed">
            Have a project in mind or want to discuss opportunities?
            Feel free to reach out. I'll respond as soon as possible.
          </p>
        </div>

        {/* Contact Details */}
        <div className="space-y-6">
          <div className="flex items-center gap-5">
            <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-cyan-400">
              <Mail size={24} />
            </div>

            <div>
              <p className="text-xs uppercase tracking-widest text-gray-500 font-bold">
                Email
              </p>
              <p className="text-white text-lg font-medium">
                anuragsinghrbl2002@gmail.com
              </p>
            </div>
          </div>

          <div className="flex items-center gap-5">
            <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-purple-400">
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
        className="relative bg-white/5 backdrop-blur-xl p-8 md:p-10 rounded-[2rem] border border-white/10 hover:border-cyan-400/30 transition-all duration-500 shadow-[0_8px_40px_rgba(0,0,0,0.3)]"
      >
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="space-y-6"
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
                className="w-full pl-12 pr-4 py-4 bg-[#050816] border border-white/10 rounded-2xl outline-none text-white placeholder:text-gray-600 focus:border-cyan-400"
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
                className="w-full pl-12 pr-4 py-4 bg-[#050816] border border-white/10 rounded-2xl outline-none text-white placeholder:text-gray-600 focus:border-cyan-400"
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
                className="w-full pl-12 pr-4 py-4 bg-[#050816] border border-white/10 rounded-2xl outline-none text-white placeholder:text-gray-600 resize-none focus:border-cyan-400"
              />
            </div>
          </div>

          {/* Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold py-5 rounded-2xl hover:scale-[1.02] transition-all duration-300 flex items-center justify-center gap-3"
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
