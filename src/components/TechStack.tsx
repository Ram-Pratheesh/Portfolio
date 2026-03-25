'use client';

import { motion, Variants } from 'framer-motion';

const stackCategories = [
  {
    id: 1,
    title: 'Mobile & Frontend',
    desc: 'Building responsive, high-performance user interfaces and cross-platform native mobile applications.',
    skills: ['Flutter', 'React.js', 'Next.js', 'JavaScript', 'TypeScript', 'HTML', 'CSS'],
    colSpan: 'lg:col-span-2',
    rowSpan: 'lg:row-span-1',
    color: 'from-blue-400 to-cyan-400',
    glow: 'bg-cyan-500/20'
  },
  {
    id: 2,
    title: 'Backend',
    desc: 'Architecting scalable APIs, secure authentication, and robust server-side logic.',
    skills: ['Node.js', 'Express.js', 'NestJS', 'Java', 'Python', 'FastAPI', 'Flask'],
    colSpan: 'lg:col-span-1',
    rowSpan: 'lg:row-span-1',
    color: 'from-emerald-400 to-green-500',
    glow: 'bg-emerald-500/20'
  },
  {
    id: 3,
    title: 'Databases & Cloud',
    desc: 'Managing complex data structures, real-time sync, and scalable cloud deployments.',
    skills: ['MongoDB', 'MySQL', 'Firebase', 'PostgreSQL', 'Azure'],
    colSpan: 'lg:col-span-1',
    rowSpan: 'lg:row-span-1',
    color: 'from-orange-400 to-rose-500',
    glow: 'bg-orange-500/20'
  },
  {
    id: 4,
    title: 'Tools & Platforms',
    desc: 'Integrating machine learning models and leveraging modern developer tooling for CI/CD.',
    skills: ['Git', 'GitHub', 'Docker', 'Linux', 'Vite', 'Postman', 'Figma'],
    colSpan: 'lg:col-span-2',
    rowSpan: 'lg:row-span-1',
    color: 'from-purple-400 to-fuchsia-500',
    glow: 'bg-fuchsia-500/20'
  }
];

// Animation variants for staggered list rendering
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 300, damping: 24 } }
};

export default function TechStack() {
  return (
    <section className="relative w-full bg-black py-16 sm:py-32 px-4 md:px-8 xl:px-16 z-20 overflow-hidden border-t border-white/5">

      {/* Background ambient noise/glows */}
      <div className="absolute top-20 left-10 w-[400px] h-[400px] bg-blue-600/10 blur-[150px] rounded-full mix-blend-screen pointer-events-none" />
      <div className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-emerald-600/10 blur-[150px] rounded-full mix-blend-screen pointer-events-none" />

      <div className="max-w-[85rem] mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          className="mb-20 text-center"
        >
          <h3 className="text-3xl sm:text-5xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white/50 tracking-tighter mb-4">
            Technical Arsenal
          </h3>
          <p className="text-lg md:text-xl text-white/50 max-w-2xl mx-auto font-light">
            My core technologies, frameworks, and architectural tools.
          </p>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 auto-rows-fr">
          {stackCategories.map((cat, i) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`group relative ${cat.colSpan} ${cat.rowSpan}`}
            >
              {/* Outer blooming shadow on hover */}
              <div className={`absolute -inset-0.5 bg-gradient-to-br ${cat.color} rounded-[2rem] opacity-0 group-hover:opacity-100 blur-lg transition-all duration-500 ease-out z-0`} />

              {/* Glassmorphism Card */}
              <div className="relative h-full bg-neutral-900/80 backdrop-blur-2xl border border-white/10 rounded-2xl sm:rounded-[2rem] overflow-hidden flex flex-col p-5 sm:p-8 md:p-10 z-10 shadow-2xl transition-transform duration-500 group-hover:-translate-y-1 group-hover:bg-neutral-900/90">

                {/* Subtle top-left inner glow */}
                <div className={`absolute -top-24 -left-24 w-48 h-48 rounded-full ${cat.glow} blur-[60px] opacity-50 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`} />

                <div className="relative z-10 mb-8">
                  <div className={`w-12 h-1.5 rounded-full bg-gradient-to-r ${cat.color} mb-6 transition-all duration-500 group-hover:w-20`} />
                  <h4 className={`text-xl sm:text-2xl md:text-3xl font-bold tracking-tight text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r ${cat.color} transition-colors duration-500`}>
                    {cat.title}
                  </h4>
                  <p className="text-white/60 font-light text-base md:text-lg leading-relaxed max-w-lg">
                    {cat.desc}
                  </p>
                </div>

                {/* Animated Pills */}
                <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  className="mt-auto flex flex-wrap gap-2.5"
                >
                  {cat.skills.map((skill, idx) => (
                    <motion.div
                      key={idx}
                      variants={itemVariants}
                      className="px-4 py-2 rounded-full border border-white/10 bg-white/5 text-white/80 text-sm font-medium tracking-wide hover:bg-white hover:text-black transition-colors duration-300 cursor-default shadow-sm"
                    >
                      {skill}
                    </motion.div>
                  ))}
                </motion.div>

              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
