'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setMousePosition({ x, y });
  };

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 font-sans selection:bg-neutral-800 selection:text-white relative overflow-hidden">
      {/* Grainy Noise Texture Background */}
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none z-0 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:20px_20px]" />

      {/* Header / Navbar */}
      <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-neutral-950/80 border-b border-neutral-800/50">
        <div className="max-w-full mx-auto px-8 h-20 flex items-center justify-between">
          <a href="#">
            <img src="/logo.png" alt="The Macraw Logo" className="h-30 w-auto object-contain" />
          </a>

          <nav className="flex items-center gap-8 text-sm text-neutral-400 font-medium">
            <a href="#" className="hover:text-white transition">Home</a>
            <a href="#work" className="hover:text-white transition">Work</a>
            <a href="#about" className="hover:text-white transition">About</a>
            <a href="#contact" className="hover:text-white transition">Contact</a>
          </nav>
        </div>
      </header>

      {/* Hero Section with Proximity Edge Glow and Noise */}
      <main className="pt-20 flex flex-col items-center justify-center min-h-screen relative overflow-hidden z-10 px-4">
        <div className="relative z-10 flex flex-col items-center justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="relative group cursor-pointer p-16 flex items-center justify-center"
          >
            {/* Dynamic Proximity Edge Glow with Noise/Grain effect */}
            <div 
              className="absolute pointer-events-none rounded-full transition-opacity duration-500 blur-3xl"
              style={{
                width: '450px',
                height: '450px',
                background: 'radial-gradient(circle, rgba(255,255,255,0.25) 0%, rgba(255,255,255,0.05) 50%, transparent 80%)',
                left: `${mousePosition.x - 225}px`,
                top: `${mousePosition.y - 225}px`,
                opacity: isHovered ? 1 : 0,
              }}
            />

            {/* Extra Large Center Logo */}
            <img
              src="/macraw-logo.png"
              alt="Macraw Logo"
              className="relative h-72 md:h-[420px] w-auto object-contain filter drop-shadow-[0_0_40px_rgba(255,255,255,0.25)] transition-all duration-500"
            />
          </motion.div>
        </div>
      </main>

      {/* Selected Works Section */}
      <section id="work" className="px-8 md:px-16 py-24 max-w-7xl mx-auto w-full space-y-8 relative z-10">
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
