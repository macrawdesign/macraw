'client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 font-sans selection:bg-neutral-800 selection:text-white">
      {/* Header / Navbar */}
      <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-neutral-950/80 border-b border-neutral-800/50">
        <div className="max-w-full mx-auto px-6 h-20 flex items-center justify-between">
          <a href="#">
            <img src="/logo.png" alt="The Macraw Logo" className="h-30 w-auto" />
          </a>

          <nav className="flex items-center gap-8 text-sm text-neutral-400 font-medium">
            <a href="#" className="hover:text-white transition">Home</a>
            <a href="#work" className="hover:text-white transition">Work</a>
            <a href="#about" className="hover:text-white transition">About</a>
            <a href="#contact" className="hover:text-white transition">Contact</a>
          </nav>
        </div>
      </header>

      {/* Hero Section with Glowing Animated Center Logo */}
      <main className="max-w-full mx-auto px-6 pt-36 pb-24 space-y-32 flex flex-col items-center justify-center min-h-screen relative overflow-hidden">
        {/* Background Soft Glow Effect */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-white/10 blur-[120px] rounded-full pointer-events-none" />

        <div className="relative z-10 flex flex-col items-center justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            whileHover={{ scale: 1.05 }}
            className="relative group cursor-pointer"
          >
            {/* Logo Hover Glow Effect */}
            <div className="absolute -inset-4 bg-gradient-to-r from-white/20 via-white/40 to-white/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition duration-700 ease-out" />
            
            {/* Macraw Center Logo */}
            <img
              src="/Macraw Logo.png"
              alt="Macraw Logo"
              className="relative h-40 md:h-56 w-auto object-contain filter drop-shadow-[0_0_30px_rgba(255,255,255,0.25)] transition duration-500"
            />
          </motion.div>
        </div>
      </main>

      {/* Selected Works Section */}
      <section id="work" className="px-8 md:px-16 py-24 max-w-7xl mx-auto w-full space-y-8">
        <div className="flex items-center justify-between border-b border-neutral-800 pb-4">
          <h2 className="text-2xl font-bold tracking-tight text-white">Selected Works</h2>
          <span className="text-xs text-neutral-500 font-mono">01 / BRANDING & VISUALS</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="group relative bg-neutral-900/50 border border-neutral-800/80 rounded-2xl overflow-hidden hover:border-neutral-700 transition duration-500">
            <div className="aspect-[16/10] bg-neutral-800/40 relative flex items-center justify-center text-neutral-600 font-mono text-sm">
              [ Design Asset Preview ]
            </div>
            <div className="p-6 space-y-2">
              <span className="text-xs text-neutral-500 font-mono">BRAND IDENTITY</span>
              <h3 className="text-lg font-bold text-white group-hover:text-neutral-300 transition">Visual Identity Systems</h3>
              <p className="text-sm text-neutral-400">Custom poster design, social templates, and digital identity branding.</p>
            </div>
          </div>

          <div className="group relative bg-neutral-900/50 border border-neutral-800/80 rounded-2xl overflow-hidden hover:border-neutral-700 transition duration-500">
            <div className="aspect-[16/10] bg-neutral-800/40 relative flex items-center justify-center text-neutral-600 font-mono text-sm">
              [ Editorial & Photography Preview ]
            </div>
            <div className="p-6 space-y-2">
              <span className="text-xs text-neutral-500 font-mono">EDITORIAL / RETOUCHING</span>
              <h3 className="text-lg font-bold text-white group-hover:text-neutral-300 transition">Magazine & Motion Graphics</h3>
              <p className="text-sm text-neutral-400">High-impact visual retouching, editorial layouts, and dynamic brand assets.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
