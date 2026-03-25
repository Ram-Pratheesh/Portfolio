'use client';

import { motion } from 'framer-motion';

const experiences = [
  {
    id: 1,
    type: 'REMOTE INTERNSHIP',
    color: 'from-pink-500 to-purple-500', // Vibrant pink-purple
    role: 'Mobile Application Developer Intern',
    company: 'Kensis',
    date: 'Feb 2025 – Mar 2025 · 2 months',
    location: 'Remote · Chennai, Tamil Nadu, India',
    points: [
      'Built a Flutter-based system with real-time location tracking',
      'Integrated Google Maps API and device GPS',
      'Developed geofence-based alerts and caregiver monitoring',
      'Worked on real-world accessibility-focused mobile features',
    ],
    link: 'https://drive.google.com/file/d/1ojiv3Pq-jU-4IrgrJZtiZf-MzL16vYsu/view?usp=drive_link', 
  },
  {
    id: 2,
    type: 'ONSITE INTERNSHIP',
    color: 'from-cyan-400 to-blue-500', // Vibrant cyan-blue
    role: 'SDE Intern',
    company: 'WeDigi Labs',
    date: 'Dec 2025 – Feb 2026 · 3 months',
    location: 'On-site · Chennai, Tamil Nadu, India',
    points: [
      'Assisted in building a scalable mobile application with 10+ screens',
      'Developed and integrated 8+ REST APIs using Node.js and Express.js',
      'Debugged performance issues and improved responsiveness across modules',
      'Built modular reusable frontend architecture',
      'Contributed to Git-based collaboration, code reviews, and technical documentation',
    ],
    link: 'https://drive.google.com/file/d/1QfdeZIcBT47uJKjxgSr0aXkP8Y8jgPhj/view?usp=drive_link', 
  }
];

export default function Experience() {
  return (
    <section className="relative w-full bg-black py-16 sm:py-32 px-4 md:px-12 xl:px-24 z-20 overflow-hidden">
      {/* Immersive ambient background glows */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-purple-600/20 blur-[120px] rounded-full pointer-events-none mix-blend-screen" />
      <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-blue-600/20 blur-[150px] rounded-full pointer-events-none mix-blend-screen" />

      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          className="mb-24 text-center md:text-left"
        >
          <h3 className="text-3xl sm:text-5xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white/50 tracking-tighter">
            Experience.
          </h3>
          <p className="mt-4 sm:mt-6 text-base sm:text-xl text-white/70 font-light max-w-2xl leading-relaxed mx-auto md:mx-0">
            Hands-on development experience across real products and production workflows.
          </p>
        </motion.div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Main vertical line, colorful glowing gradient */}
          <div className="absolute left-[15px] md:left-[39px] top-4 bottom-4 w-1 bg-gradient-to-b from-purple-500 via-blue-500 to-transparent rounded-full opacity-30 shadow-[0_0_15px_rgba(255,255,255,0.2)]" />

          <div className="space-y-16">
            {experiences.map((exp) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="relative group pl-12 md:pl-28"
              >
                {/* Timeline glowing dot */}
                <div className={`absolute left-0 md:left-6 top-8 h-8 w-8 rounded-full bg-gradient-to-br ${exp.color} ring-4 ring-black shadow-[0_0_20px_rgba(255,255,255,0.3)] z-10 transition-transform duration-500 group-hover:scale-125`} />

                {/* Glassmorphism Card */}
                <div className="relative bg-white/[0.03] border border-white/10 rounded-2xl sm:rounded-3xl p-5 sm:p-8 md:p-12 hover:bg-white/[0.06] hover:-translate-y-2 hover:border-white/20 transition-all duration-500 backdrop-blur-3xl overflow-hidden shadow-2xl">
                  
                  {/* Hover ambient light inside card */}
                  <div className={`absolute -inset-1 bg-gradient-to-r ${exp.color} opacity-0 group-hover:opacity-10 transition-opacity duration-700 blur-2xl`} />

                  <div className="relative z-10">
                    <div className="flex flex-col xl:flex-row xl:items-start justify-between gap-6 mb-10">
                      <div>
                        <div className={`inline-block px-4 py-1.5 mb-6 rounded-full bg-gradient-to-r ${exp.color} text-xs font-bold text-white tracking-widest uppercase shadow-lg`}>
                          {exp.type}
                        </div>
                        <h4 className="text-xl sm:text-3xl md:text-5xl font-bold text-white tracking-tight mb-3">
                          {exp.role}
                        </h4>
                        <div className="text-lg sm:text-2xl text-white/70 font-medium">
                          {exp.company}
                        </div>
                      </div>
                      <div className="text-left xl:text-right flex-shrink-0 bg-white/5 p-4 rounded-2xl border border-white/10 self-start">
                        <div className="text-white text-base font-semibold">
                          {exp.date}
                        </div>
                        <div className="text-white/50 text-sm mt-2 flex items-center gap-2 xl:justify-end">
                          <svg className="w-4 h-4 text-white/40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                          {exp.location}
                        </div>
                      </div>
                    </div>

                    <ul className="space-y-4 mb-10">
                      {exp.points.map((point, idx) => (
                        <li key={idx} className="flex gap-3 sm:gap-4 items-start text-white/80 font-light leading-relaxed text-sm sm:text-base lg:text-lg">
                          <span className={`mt-2.5 h-2 w-2 rounded-full bg-gradient-to-r ${exp.color} flex-shrink-0 shadow-lg`} />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>

                    <a
                      href={exp.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center gap-3 px-8 py-4 rounded-full bg-white/5 text-white font-semibold text-sm hover:text-white border border-white/20 transition-all duration-300 relative overflow-hidden group/btn`}
                    >
                      <div className={`absolute inset-0 bg-gradient-to-r ${exp.color} opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300 ease-out`} />
                      <span className="relative z-10 drop-shadow-md">View Certificate</span>
                      <svg className="w-5 h-5 relative z-10 group-hover/btn:translate-x-1 transition-transform drop-shadow-md" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
