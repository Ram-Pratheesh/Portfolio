'use client';

import { motion } from 'framer-motion';

const certs = [
  {
    id: 1,
    title: 'Introduction to Front-End Development',
    provider: 'Meta',
    desc: 'Covers modern frontend development, responsive UI design, and component-based architecture.',
    credId: 'ID: 7S84GL76FW8G',
    link: 'https://www.coursera.org/account/accomplishments/records/7S84GL76FW8G',
    colSpan: 'lg:col-span-2',
    color: 'from-blue-600 to-indigo-600',
    textColor: 'text-blue-400'
  },
  {
    id: 2,
    title: 'Programming with JavaScript',
    provider: 'Meta',
    desc: 'Strong foundation in JavaScript, problem-solving, and core programming concepts.',
    credId: 'ID: L3I6V9GIY4Z2',
    link: 'https://www.coursera.org/account/accomplishments/records/L3I6V9GIY4Z2',
    colSpan: 'lg:col-span-1',
    color: 'from-blue-500 to-cyan-600',
    textColor: 'text-cyan-400'
  },
  {
    id: 3,
    title: 'Linux: Bash Shell and Scripts',
    provider: 'LinkedIn',
    desc: 'Covers Linux command-line operations, Bash fundamentals, and basic shell scripting workflows.',
    credId: 'Verified by LinkedIn',
    link: 'https://www.linkedin.com/learning/certificates/e9346f46ae4ea5262b69b0f2cb984754314b239e57e33b9add9b4ad924e7a570?trk=share_certificate',
    colSpan: 'lg:col-span-1',
    color: 'from-sky-500 to-blue-600',
    textColor: 'text-sky-400'
  },
  {
    id: 4,
    title: 'SQL Essential Training',
    provider: 'LinkedIn',
    desc: 'Practical knowledge of querying, filtering, and managing structured data.',
    credId: 'Verified by LinkedIn',
    link: 'https://www.linkedin.com/learning/certificates/630494a57db1a4e2d39b8a9069aca2ff57d4fa46d3489b3f0796232716f7bb45?trk=share_certificate',
    colSpan: 'lg:col-span-1',
    color: 'from-teal-500 to-emerald-600',
    textColor: 'text-emerald-400'
  },
  {
    id: 5,
    title: 'Web Programming Using Java',
    provider: 'SSI Computer Education',
    desc: 'Backend development fundamentals and web programming concepts using Java.',
    credId: 'Verified Certificate',
    link: 'https://drive.google.com/file/d/1D105VHwHAsxPnbU_Aw_SCQR4I6apuQ4U/view?usp=sharing',
    colSpan: 'lg:col-span-1',
    color: 'from-rose-500 to-red-600',
    textColor: 'text-rose-400'
  }
];

export default function Certifications() {
  return (
    <section className="relative w-full bg-neutral-950 py-16 sm:py-32 px-4 md:px-8 xl:px-16 z-20 overflow-hidden border-t border-white/5">
      
      {/* Subtle Background Elements */}
      <div className="absolute top-0 right-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[20%] right-[-10%] w-[40vw] h-[40vw] rounded-full bg-blue-600/10 blur-[150px] mix-blend-screen" />
        <div className="absolute bottom-[20%] left-[-10%] w-[30vw] h-[30vw] rounded-full bg-indigo-600/10 blur-[150px] mix-blend-screen" />
      </div>

      <div className="max-w-[85rem] mx-auto relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          className="mb-20 text-center"
        >
          <h3 className="text-3xl sm:text-5xl md:text-7xl font-black text-white tracking-tighter mb-4">
            Licenses &amp; Certifications
          </h3>
          <p className="text-lg md:text-xl text-white/50 max-w-2xl mx-auto font-light">
            Continuous learning and verified expertise from industry leaders.
          </p>
        </motion.div>

        {/* 3-Column Asymmetric Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certs.map((cert, i) => (
            <motion.a
              key={cert.id}
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`group relative flex flex-col justify-between p-5 sm:p-8 md:p-10 rounded-2xl sm:rounded-[2rem] bg-neutral-900/60 backdrop-blur-xl border border-white/10 overflow-hidden ${cert.colSpan} hover:bg-neutral-800/80 hover:border-white/20 transition-all duration-500 hover:-translate-y-2 cursor-pointer shadow-xl`}
            >
              {/* Top ambient color bar to make it distinct from TechStack */}
              <div className={`absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r ${cert.color} opacity-70 group-hover:opacity-100 transition-opacity duration-500`} />
              
              {/* Diagonal glow sweep effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/5 to-white/0 opacity-0 group-hover:opacity-100 transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out pointer-events-none" />

              <div className="relative z-10">
                <div className="flex justify-between items-start mb-6">
                  <span className={`px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-bold tracking-widest uppercase ${cert.textColor}`}>
                    {cert.provider}
                  </span>
                  
                  {/* Verify Link Icon */}
                  <div className="p-2 rounded-full bg-white/5 group-hover:bg-white text-white/40 group-hover:text-black transition-colors duration-300">
                    <svg className="w-5 h-5 transform group-hover:-rotate-45 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </div>
                </div>

                <h4 className="text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-white/50 transition-colors duration-300">
                  {cert.title}
                </h4>

                <p className="text-white/60 font-light leading-relaxed text-sm md:text-base mb-8">
                  {cert.desc}
                </p>
              </div>

              {/* Bottom section matching physical ID card serial styles */}
              <div className="relative z-10 pt-6 border-t border-white/5 flex items-center justify-between mt-auto">
                <span className="font-mono text-xs tracking-wider text-white/30 group-hover:text-white/50 transition-colors">
                  {cert.credId}
                </span>
                
                <span className="text-xs font-semibold uppercase tracking-widest text-white/40 group-hover:text-white transition-colors opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 duration-300">
                  Verify &rarr;
                </span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
