'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 font-sans selection:bg-neutral-800 selection:text-white relative overflow-hidden">
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

      {/* Hero Section - Logo eka udata ganna pt-10 saha justify-start use kala */}
<main className="pt-10 md:pt-16 flex flex-col items-center justify-start min-h-[85vh] relative overflow-hidden z-10 px-4">
        <div className="relative z-10 flex flex-col items-center justify-center w-full">
          <div className="relative flex items-center justify-center">
            
            {/* 1. Base Static Dimmed Logo */}
            <img
              src="/macraw-logo.png"
              alt="Macraw Logo Base"
              className="h-80 md:h-[620px] w-auto object-contain opacity-80 select-none pointer-events-none block"
            />

            {/* 2. Light Sweep Overlay (Brightness wadi karala) */}
<motion.div
  initial={{ x: '-150%' }}
  animate={{ x: '150%' }}
  transition={{
    duration: 2.2,
    ease: 'easeInOut',
  }}
  className="absolute inset-0 w-full h-full"
  style={{
    background: 'linear-gradient(90deg, transparent 15%, rgba(255,255,255,0.85) 50%, transparent 85%)',
  }}
            >
              <motion.div
                initial={{ x: '-150%' }}
                animate={{ x: '150%' }}
                transition={{
                  duration: 2.2,
                  ease: 'easeInOut',
                }}
                className="absolute inset-0 w-full h-full"
                style={{
                  background: 'linear-gradient(90deg, transparent 20%, rgba(255,255,255,0.4) 50%, transparent 80%)',
                }}
              />
            </div>

          </div>
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
