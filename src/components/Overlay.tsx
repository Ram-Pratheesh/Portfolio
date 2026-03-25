'use client';

import { motion, useTransform } from 'framer-motion';
import { useScrollProgress } from './ScrollyCanvas';

export default function Overlay() {
  // Use the SAME scroll progress as the canvas container
  const scrollYProgress = useScrollProgress();

  // Section 1 (0–20%): "My Name. Creative Developer." — center
  const opacity1 = useTransform(scrollYProgress, [0, 0.15, 0.20], [1, 1, 0]);
  const y1       = useTransform(scrollYProgress, [0, 0.20], ['0vh', '-20vh']);

  // Section 2 (25–50%): "I build digital experiences." — left
  const opacity2 = useTransform(scrollYProgress, [0.22, 0.28, 0.48, 0.52], [0, 1, 1, 0]);
  const y2       = useTransform(scrollYProgress, [0.22, 0.52], ['10vh', '-10vh']);

  // Section 3 (55–80%): "Bridging design & engineering." — right
  const opacity3 = useTransform(scrollYProgress, [0.54, 0.60, 0.78, 0.82], [0, 1, 1, 0]);
  const y3       = useTransform(scrollYProgress, [0.54, 0.82], ['10vh', '-10vh']);

  return (
    <div className="absolute inset-0 z-10 pointer-events-none" style={{ height: '500vh' }}>
      {/* Section 1 */}
      <motion.div
        style={{ opacity: opacity1, y: y1 }}
        className="fixed top-0 left-0 h-screen w-full flex items-center justify-center"
      >
        <div className="text-center px-6">
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter text-white drop-shadow-[0_4px_30px_rgba(0,0,0,0.8)]">
            MY NAME.
          </h1>
          <p className="mt-4 md:mt-6 text-lg md:text-2xl lg:text-3xl font-light tracking-[0.3em] text-white/80 uppercase">
            Creative Developer.
          </p>
        </div>
      </motion.div>

      {/* Section 2 */}
      <motion.div
        style={{ opacity: opacity2, y: y2 }}
        className="fixed top-0 left-0 h-screen w-full flex items-center justify-start px-8 md:px-20 lg:px-32"
      >
        <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white drop-shadow-[0_4px_30px_rgba(0,0,0,0.8)] leading-[1.1] max-w-3xl">
          I build digital<br />experiences.
        </h2>
      </motion.div>

      {/* Section 3 */}
      <motion.div
        style={{ opacity: opacity3, y: y3 }}
        className="fixed top-0 left-0 h-screen w-full flex items-center justify-end px-8 md:px-20 lg:px-32 text-right"
      >
        <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white drop-shadow-[0_4px_30px_rgba(0,0,0,0.8)] leading-[1.1] max-w-3xl">
          Bridging design<br />
          <span className="italic font-light">&amp;</span> engineering.
        </h2>
      </motion.div>
    </div>
  );
}
