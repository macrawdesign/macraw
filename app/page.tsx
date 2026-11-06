import Image from 'next/image';

export default function Home() {
  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 font-sans selection:bg-neutral-800 selection:text-white">
      {/* Header / Navbar */}
      <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-neutral-950/80 border-b border-neutral-800/50">
        <div className="max-w-full mx-auto px-6 h-20 flex items-center justify-between">
          <a href="#" className="flex items-center">
  <img src="/logo.png" alt="The Macraw Logo" className="h-30 w-auto" />
</a>

          <nav className="flex items-center gap-8 text-sm text-neutral-400 font-medium">
            <a href="#work" className="hover:text-white transition">Work</a>
            <a href="#about" className="hover:text-white transition">About</a>
            <a href="#contact" className="hover:text-white transition">Contact</a>
          </nav>
        </div>
      </header>

      <main className="max-w-full mx-auto px-6 pt-36 pb-24 space-y-32">
        {/* Hero Section */}
        
        <section className="space-y-6 max-w-3xl">
          <p className="text-lg text-neutral-400 font-normal leading-relaxed">
            Welcome to <span className="text-white font-medium">The Macraw</span>. Focused on high-impact visual design, dynamic branding, and precision media editing.
          </p>
          <div className="pt-4 flex items-center gap-4">
            <a
              href="#work"
              className="px-6 py-3 bg-white text-neutral-950 font-semibold text-sm rounded-lg hover:bg-neutral-200 transition"
            >
              View Selected Work
            </a>
            <a
              href="#contact"
              className="px-6 py-3 bg-neutral-900 border border-neutral-800 text-white font-semibold text-sm rounded-lg hover:bg-neutral-800 transition"
            >
              Get in Touch
            </a>
          </div>
        </section>

        {/* Selected Projects Grid */}
        <section id="work" className="space-y-8">
          <div className="flex items-center justify-between border-b border-neutral-800 pb-4">
            <h2 className="text-2xl font-bold tracking-tight text-white">Selected Works</h2>
            <span className="text-xs font-mono text-neutral-500">01 / BRANDING & VISUALS</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Project Card 1 */}
            <div className="group relative bg-neutral-900/50 border border-neutral-800/80 rounded-2xl overflow-hidden hover:border-neutral-700 transition duration-300">
              <div className="aspect-[16/10] bg-neutral-800/40 relative flex items-center justify-center text-neutral-600 font-mono text-sm">
                [ Design Asset Preview ]
              </div>
              <div className="p-6 space-y-2">
                <span className="text-xs text-neutral-500 font-mono">BRAND IDENTITY</span>
                <h3 className="text-lg font-bold text-white group-hover:text-neutral-300 transition">Visual Identity Systems</h3>
                <p className="text-sm text-neutral-400">Custom poster design, social templates, and digital identity branding.</p>
              </div>
            </div>

            {/* Project Card 2 */}
            <div className="group relative bg-neutral-900/50 border border-neutral-800/80 rounded-2xl overflow-hidden hover:border-neutral-700 transition duration-300">
              <div className="aspect-[16/10] bg-neutral-800/40 relative flex items-center justify-center text-neutral-600 font-mono text-sm">
                [ Editorial & Photography Preview ]
              </div>
              <div className="p-6 space-y-2">
                <span className="text-xs text-neutral-500 font-mono">EDITORIAL / RETOUCHING</span>
                <h3 className="text-lg font-bold text-white group-hover:text-neutral-300 transition">Editorial Projects</h3>
                <p className="text-sm text-neutral-400">High-end retouching, color grading, and creative art direction.</p>
              </div>
            </div>
          </div>
        </section>

        {/* About & Contact Section */}
        <section id="about" className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-8 border-t border-neutral-800">
          <div className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight text-white">About The Macraw</h2>
            <p className="text-neutral-400 leading-relaxed text-sm">
              Operating out of Sri Lanka, delivering dark, minimal, and modern visual design solutions globally. Specialized in digital brand building, photo manipulation, and precise media composition.
            </p>
          </div>

          <div id="contact" className="space-y-4">
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
          </div>
        </section>
      </main>

      <footer className="border-t border-neutral-900 bg-neutral-950 py-8 text-center text-xs text-neutral-600">
        © 2026 The Macraw. All rights reserved.
      </footer>
    </div>
  );
}
