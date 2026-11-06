"use client";

import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 font-sans selection:bg-neutral-800 selection:text-white">
      {/* Header / Navbar */}
      <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-neutral-950/80 border-b border-neutral-800/50">
        <div className="max-w-full mx-auto px-6 h-40 flex items-center justify-between">
          <a href="#" className="flex items-center">
            <img src="/logo.png" alt="The Macraw Logo" className="h-10 w-auto" />
          </a>

          <nav className="flex items-center gap-8 text-sm text-neutral-400 font-medium">
            <a href="#work" className="hover:text-white transition">Work</a>
            <a href="#about" className="hover:text-white transition">About</a>
            <a href="#contact" className="hover:text-white transition">Contact</a>
          </nav>
        </div>
      </header>

      {/* Hero Section with Centered Interactive Logo */}
      <main className="flex flex-col items-center justify-center min-h-[60vh]">
        <section className="flex flex-col items-center justify-center min-h-[60vh]">
          <motion.img
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="h-24 md:h-32 w-auto object-contain cursor-pointer"
          >
            <img
              src="/Macraw Logo.png" 
              alt="The Macraw Logo" 
              className="h-24 md:h-32 w-auto object-contain mx-auto" 
            />
          </motion.img>
        </section>

        {/* Selected Works Section */}
        <section id="work" className="space-y-6">
          <div className="flex items-center justify-between border-b border-neutral-800 pb-4">
            <h2 className="text-xl font-bold tracking-tight text-white">Selected Works</h2>
            <span className="text-xs font-mono text-neutral-500">01 / BRANDING & VISUALS</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="h-96 rounded-2xl bg-neutral-900/50 border border-neutral-800 p-6 flex flex-col justify-end">
              <h3 className="text-lg font-semibold text-white">Project One</h3>
              <p className="text-sm text-neutral-400">Brand Identity & Visual Design</p>
            </div>
            <div className="h-96 rounded-2xl bg-neutral-900/50 border border-neutral-800 p-6 flex flex-col justify-end">
              <h3 className="text-lg font-semibold text-white">Project Two</h3>
              <p className="text-sm text-neutral-400">Creative Direction & Motion</p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="space-y-4 max-w-3xl">
          <h2 className="text-2xl font-bold tracking-tight text-white">Let's Connect</h2>
          <p className="text-neutral-400 leading-relaxed text-sm">
            Open for creative collaborations and custom visual design commissions.
          </p>
          <div className="pt-2">
            <a 
              href="https://instagram.com/kavinseth" 
              target="_blank" 
              rel="noreferrer"
              className="inline-flex items-center text-sm font-semibold text-white underline underline-offset-4 hover:text-neutral-300 transition"
            >
              Follow on Instagram @kavinseth →
            </a>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-neutral-900 bg-neutral-950 py-8 text-center text-xs text-neutral-600">
        © 2026 The Macraw. All rights reserved.
      </footer>
    </div>
  );
}
