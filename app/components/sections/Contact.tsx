"use client";

import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { Send, Mail, MapPin, User, MessageSquare } from "lucide-react";

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
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
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
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!,
      );
      setLoading(false);
      alert("Message sent successfully!");
      setForm({ name: "", email: "", message: "" });
    } catch (error) {
      setLoading(false);
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <section
      id="contact"
      className="py-20 px-6 bg-[#050816] text-white overflow-hidden"
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-5xl font-extrabold tracking-tight mb-4">
                Let's work <span className="text-[#a285fd]">together.</span>
              </h2>
              <p className="text-gray-400 text-lg">
                Have a specific inquiry or just want to say hi? Fill out the
                form and I'll get back to you within 24 hours.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center gap-5">
                <div className="w-14 h-14 rounded-2xl bg-[#10153e] flex items-center justify-center text-[#a285fd] border border-white/10 shadow-lg">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-xs font-bold text-gray-500 uppercase tracking-widest">
                    Email
                  </p>
                  <p className="text-lg font-medium text-white">
                    anuragsinghrbl2002@gmail.com
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-5">
                <div className="w-14 h-14 rounded-2xl bg-[#10153e] flex items-center justify-center text-[#a285fd] border border-white/10 shadow-lg">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="text-xs font-bold text-gray-500 uppercase tracking-widest">
                    Location
                  </p>
                  <p className="text-lg font-medium text-white">Delhi, India</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="relative bg-[#10153e] p-8 md:p-10 rounded-[2.5rem] border border-white/10 shadow-2xl shadow-purple-500/5"
          >
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-300 ml-1">
                  Full Name
                </label>
                <div className="relative group">
                  <User
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-[#a285fd] transition-colors"
                    size={20}
                  />
                  <input
                    type="text"
                    name="name"
                    required
                    value={form.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className="w-full pl-12 pr-4 py-4 bg-[#050816] border border-white/10 rounded-2xl focus:border-[#a285fd] focus:ring-1 focus:ring-[#a285fd] outline-none text-white placeholder:text-gray-600 transition-all"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-300 ml-1">
                  Email Address
                </label>
                <div className="relative group">
                  <Mail
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-[#a285fd] transition-colors"
                    size={20}
                  />
                  <input
                    type="email"
                    name="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    className="w-full pl-12 pr-4 py-4 bg-[#050816] border border-white/10 rounded-2xl focus:border-[#a285fd] focus:ring-1 focus:ring-[#a285fd] outline-none text-white placeholder:text-gray-600 transition-all"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-300 ml-1">
                  Message
                </label>
                <div className="relative group">
                  <MessageSquare
                    className="absolute left-4 top-5 text-gray-500 group-focus-within:text-[#a285fd] transition-colors"
                    size={20}
                  />
                  <textarea
                    name="message"
                    required
                    rows={4}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Let's talk about your project..."
                    className="w-full pl-12 pr-4 py-4 bg-[#050816] border border-white/10 rounded-2xl focus:border-[#a285fd] focus:ring-1 focus:ring-[#a285fd] outline-none text-white placeholder:text-gray-600 transition-all resize-none"
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-[#a285fd] hover:bg-[#8c6efb] text-white font-bold py-5 rounded-2xl shadow-xl shadow-purple-500/20 transition-all flex items-center justify-center gap-3 group active:scale-[0.98]"
              >
                {loading ? "Sending..." : "Send Message"}
                <Send
                  size={20}
                  className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
