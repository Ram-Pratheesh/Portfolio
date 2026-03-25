'use client';

import { motion } from 'framer-motion';

const awards = [
  {
    id: 1,
    title: 'Runner-Up — K!HACKS 2.0',
    subtitle: 'Anna University, Chennai',
    desc: 'Built an innovative EdTech solution with Team CODE RAIDERS, securing 2nd place among competing teams and winning a ₹1 Lakh cash prize for technical execution and problem-solving.',
    color: 'from-amber-400 to-orange-500', // Gold/Bronze vibe
    bgAccent: 'bg-amber-900/20',
    // Replace with your actual image filename later (e.g., '/awards/khacks.png')
    image: '/Awards/Khacks.png', 
    icon: (
      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
      </svg>
    )
  },
  {
    id: 2,
    title: 'Finalist — SIH 2024',
    subtitle: 'National-Level Innovation Challenge',
    desc: 'Selected among the Top 5 teams in India for SIH 2024, leading the development of Evalora, an AI-powered skill assessment platform recognized for real-world relevance and innovation.',
    color: 'from-violet-400 to-fuchsia-500', // Majestic Purple/pink vibe
    bgAccent: 'bg-fuchsia-900/20',
    // Replace with your actual image filename later (e.g., '/awards/sih.png')
    image: '/Awards/sih.png',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    )
  }
];

export default function Awards() {
  return (
    <section className="relative w-full bg-black py-16 sm:py-32 px-4 md:px-8 xl:px-16 z-20 overflow-hidden">
      
      {/* Background ambient noise/glows */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-amber-600/10 blur-[150px] rounded-full mix-blend-screen pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-fuchsia-600/10 blur-[150px] rounded-full mix-blend-screen pointer-events-none" />

      <div className="max-w-[85rem] mx-auto relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          className="mb-20 text-center"
        >
          <h3 className="text-3xl sm:text-5xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white/50 tracking-tighter mb-4">
            Awards &amp; Achievements
          </h3>
          <p className="text-lg md:text-xl text-white/50 max-w-2xl mx-auto font-light">
            Recognized for innovation, problem-solving, and technical execution on national stages.
          </p>
        </motion.div>

        {/* 2-Column Grid for Awards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          {awards.map((award, i) => (
            <motion.div
              key={award.id}
              initial={{ opacity: 0, scale: 0.95, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              className="group relative"
            >
              {/* Outer glowing border that blooms on hover */}
              <div className={`absolute -inset-1 bg-gradient-to-br ${award.color} rounded-[2.5rem] opacity-0 group-hover:opacity-100 blur-xl transition-all duration-700 ease-out z-0`} />

              {/* Inner Card Container */}
              <div className="relative h-full bg-neutral-900/80 backdrop-blur-3xl border border-white/10 rounded-[2rem] overflow-hidden flex flex-col z-10 shadow-2xl transition-transform duration-500 group-hover:-translate-y-2 group-hover:bg-neutral-900 border-t-white/20">
                
                {/* Image Header Area */}
                <div className={`relative w-full h-44 sm:h-64 md:h-80 ${award.bgAccent} overflow-hidden border-b border-white/5`}>
                   
                   {/* Fallback Placeholder (shows if image link is broken/missing) */}
                   <div className="absolute inset-0 flex items-center justify-center p-8 transition-transform duration-700 group-hover:scale-[1.03]">
                      <div className={`text-white/40 font-bold text-xl md:text-2xl tracking-[0.2em] px-8 py-4 rounded-full border border-white/10 bg-black/20 backdrop-blur-md shadow-[0_0_30px_rgba(0,0,0,0.5)]`}>
                         IMAGE PLACEHOLDER
                      </div>
                   </div>

                   {/* Actual Image */}
                   <div className="absolute inset-0 z-10 transition-transform duration-700 group-hover:scale-[1.03]">
                     {/* eslint-disable-next-line @next/next/no-img-element */}
                     <img 
                       src={award.image}
                       alt={award.title}
                       className="w-full h-full object-cover opacity-90 group-hover:opacity-100"
                       onError={(e) => {
                          e.currentTarget.style.display = 'none';
                       }}
                     />
                   </div>

                   {/* Bottom shadow fade to blend into the card naturally */}
                   <div className="absolute bottom-0 w-full h-1/2 bg-gradient-to-t from-neutral-900 via-neutral-900/40 to-transparent z-20 pointer-events-none" />
                   
                   {/* Floating Trophy/Star Icon */}
                   <div className={`absolute top-6 right-6 p-4 rounded-full bg-gradient-to-br ${award.color} text-white shadow-[0_0_20px_rgba(255,255,255,0.3)] z-30 transform group-hover:scale-110 group-hover:rotate-12 transition-transform duration-500`}>
                     {award.icon}
                   </div>
                </div>

                {/* Text & Content Body */}
                <div className="p-5 sm:p-8 md:p-10 flex flex-col flex-1 relative bg-gradient-to-b from-transparent to-neutral-900/50">
                  <h4 className={`text-2xl sm:text-3xl md:text-4xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-br from-white to-white/70 group-hover:${award.color} transition-colors duration-500 mb-2`}>
                    {award.title}
                  </h4>
                  
                  <div className="text-xl text-white/50 font-medium mb-6 uppercase tracking-widest text-sm">
                    {award.subtitle}
                  </div>

                  <p className="text-white/70 font-light leading-relaxed mb-6 text-base md:text-lg lg:text-xl">
                    {award.desc}
                  </p>
                  
                  <div className="mt-auto pt-6 flex items-center gap-4">
                     <div className={`h-1 w-16 bg-gradient-to-r ${award.color} rounded-full transition-all duration-500 group-hover:w-24`} />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
