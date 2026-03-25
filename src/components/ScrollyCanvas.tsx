'use client';

import { useRef, useEffect, useCallback, useState } from 'react';
import { motion, useScroll, useTransform, useMotionValueEvent, AnimatePresence } from 'framer-motion';

const FRAME_COUNT = 120;

export default function ScrollyCanvas() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const lastPaintedRef = useRef(-1);

  // Track which text section is active: 0 = none, 1/2/3 = section
  const [activeSection, setActiveSection] = useState(1);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  const currentIndex = useTransform(scrollYProgress, [0, 1], [0, FRAME_COUNT - 1]);

  // Determine which section to show based on scroll %
  useMotionValueEvent(scrollYProgress, 'change', (progress) => {
    if (progress < 0.22) {
      setActiveSection(1);
    } else if (progress >= 0.25 && progress < 0.55) {
      setActiveSection(2);
    } else if (progress >= 0.58 && progress < 0.88) {
      setActiveSection(3);
    } else {
      setActiveSection(0);
    }
  });

  // ─── Canvas paint ───
  const paintFrame = useCallback((index: number) => {
    const img = imagesRef.current[index];
    if (!img || !img.complete || img.naturalWidth === 0) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d', { alpha: false });
    if (!ctx) return;

    const w = window.innerWidth;
    const h = window.innerHeight;
    if (canvas.width !== w || canvas.height !== h) {
      canvas.width = w;
      canvas.height = h;
    }

    const iw = img.naturalWidth;
    const ih = img.naturalHeight;
    const scale = Math.max(w / iw, h / ih);
    const dx = (w - iw * scale) / 2;
    const dy = (h - ih * scale) / 2;

    ctx.drawImage(img, 0, 0, iw, ih, dx, dy, iw * scale, ih * scale);
    lastPaintedRef.current = index;
  }, []);

  useEffect(() => {
    const images: HTMLImageElement[] = [];
    imagesRef.current = images;
    for (let i = 0; i < FRAME_COUNT; i++) {
      const img = new Image();
      img.decoding = 'async';
      img.onload = () => {
        if (i === 0 && lastPaintedRef.current === -1) paintFrame(0);
      };
      img.src = `/sequence/frame_${i.toString().padStart(3, '0')}_delay-0.066s.png`;
      images.push(img);
    }
  }, [paintFrame]);

  useMotionValueEvent(currentIndex, 'change', (latest) => {
    const idx = Math.round(latest);
    if (idx !== lastPaintedRef.current) paintFrame(idx);
  });

  useEffect(() => {
    const onResize = () => {
      if (lastPaintedRef.current >= 0) paintFrame(lastPaintedRef.current);
    };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, [paintFrame]);

  return (
    <div ref={containerRef} className="relative h-[500vh]">
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        {/* Canvas */}
        <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none" style={{ touchAction: 'manipulation' }} />

        {/* Hero Sticky Navbar */}
        <div className="absolute top-0 left-0 w-full px-4 py-3 sm:p-6 md:p-8 xl:p-12 flex items-center justify-between z-50">
          {/* Left: Socials & Download CV */}
          <div className="flex items-center gap-2 sm:gap-3">
            <a href="https://github.com/Ram-Pratheesh" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full border border-white/20 text-white/70 hover:bg-white hover:text-black hover:border-white transition-all shadow-lg backdrop-blur-md">
              <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
            </a>
            <a href="https://linkedin.com/in/rampratheeshsk" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full border border-white/20 text-white/70 hover:bg-[#0077b5] hover:text-white hover:border-[#0077b5] transition-all shadow-lg backdrop-blur-md">
              <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
            </a>
            <a href="mailto:skrampratheesh@gmail.com" className="p-2 rounded-full border border-white/20 text-white/70 hover:bg-rose-500 hover:text-white hover:border-rose-500 transition-all shadow-lg backdrop-blur-md">
              <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M0 3v18h24v-18h-24zm6.623 7.929l-4.623 5.712v-9.458l4.623 3.746zm-4.141-5.929h19.035l-9.517 7.713-9.518-7.713zm5.694 7.188l3.824 3.099 3.83-3.104 5.612 6.817h-18.89l5.624-6.812zm9.201-1.464l4.623-3.761v9.484l-4.623-5.723z"/></svg>
            </a>
            <a href="/Resume.pdf" download className="hidden sm:flex ml-2 px-4 py-2 border border-white/20 rounded-full bg-black/40 hover:bg-white hover:text-black transition-all font-semibold text-[10px] sm:text-xs tracking-[0.1em] uppercase text-white shadow-lg backdrop-blur-md items-center gap-2 group">
              <span>Download CV</span>
              <svg className="w-3.5 h-3.5 text-white/50 group-hover:text-black transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
            </a>
          </div>

          {/* Right: Section Navigation */}
          <nav className="flex items-center gap-3 sm:gap-4 md:gap-6 lg:gap-8 text-white/70 text-[10px] sm:text-xs font-semibold uppercase tracking-wider">
            <a href="#experience" onClick={(e) => { e.preventDefault(); document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' }); }} className="hover:text-white transition-all hidden sm:block">Experience</a>
            <a href="#projects" onClick={(e) => { e.preventDefault(); document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' }); }} className="hover:text-white transition-all">Projects</a>
            <a href="#tech" onClick={(e) => { e.preventDefault(); document.getElementById('tech')?.scrollIntoView({ behavior: 'smooth' }); }} className="hover:text-white transition-all hidden md:block">Tech</a>
            <a href="#awards" onClick={(e) => { e.preventDefault(); document.getElementById('awards')?.scrollIntoView({ behavior: 'smooth' }); }} className="hover:text-white transition-all hidden lg:block">Awards</a>
            <a href="#certifications" onClick={(e) => { e.preventDefault(); document.getElementById('certifications')?.scrollIntoView({ behavior: 'smooth' }); }} className="hover:text-white transition-all hidden lg:block">Certs</a>
            <a href="#contact" onClick={(e) => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); }} className="hover:text-white transition-all">Contact</a>
          </nav>
        </div>

        {/* Only ONE section renders at a time */}
        <AnimatePresence mode="wait">
          {activeSection === 1 && (
            <motion.div
              key="section-1"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none"
            >
              <div className="text-center px-4 sm:px-6">
                <h1 className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-black tracking-tight sm:tracking-normal text-white drop-shadow-[0_4px_30px_rgba(0,0,0,0.8)] leading-[1.1]">
                  RAM PRATHEESH S K
                </h1>
                <p className="mt-3 md:mt-6 text-sm sm:text-lg md:text-2xl lg:text-3xl font-light tracking-[0.15em] sm:tracking-[0.3em] text-white/80 uppercase">
                  Web &amp; Mobile App Developer
                </p>
              </div>
            </motion.div>
          )}

          {activeSection === 2 && (
            <motion.div
              key="section-2"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              className="absolute inset-0 flex items-center justify-start px-4 sm:px-8 md:px-20 lg:px-32 z-10 pointer-events-none"
            >
              <div className="max-w-3xl">
                <h2 className="text-2xl sm:text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white drop-shadow-[0_4px_30px_rgba(0,0,0,0.8)] leading-[1.1]">
                  Code that scales.
                </h2>
                <p className="mt-4 sm:mt-6 text-base sm:text-xl md:text-3xl text-white/80 font-light leading-relaxed drop-shadow-md">
                  Crafting seamless web and mobile experiences with modern technologies.
                </p>
              </div>
            </motion.div>
          )}

          {activeSection === 3 && (
            <motion.div
              key="section-3"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              className="absolute inset-0 flex items-center justify-end px-4 sm:px-8 md:px-20 lg:px-32 text-right z-10 pointer-events-none"
            >
              <div className="max-w-3xl flex flex-col items-end">
                <h2 className="text-2xl sm:text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white drop-shadow-[0_4px_30px_rgba(0,0,0,0.8)] leading-[1.1]">
                  Ideas into impact.
                </h2>
                <p className="mt-4 sm:mt-6 text-base sm:text-xl md:text-3xl text-white/80 font-light leading-relaxed drop-shadow-md text-right">
                  Building products through projects, internships, and problem-solving.
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
