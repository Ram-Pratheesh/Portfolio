'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const projects = [
  {
    id: 1,
    title: 'PetVerse',
    tagline: 'An intelligent cross-platform pet care application designed to simplify pet health, safety, adoption, and daily management.',
    stack: ['Flutter', 'Firebase', 'MongoDB', 'Express.js', 'TensorFlow Lite', 'Google Maps'],
    points: [
      'Built an all-in-one platform with 8+ integrated features, including lost & found alerts and emergency vet assistance.',
      'Developed an offline ML-powered breed care recommendation system using TensorFlow Lite.',
      'Designed secure role-based workflows for Users, NGOs, and Admins with real-time data handling.'
    ],
    link: 'https://github.com/Ram-Pratheesh/PetVerse-SmartPetCare',
    color: 'from-emerald-400 to-cyan-500',
    bgAccent: 'bg-emerald-500/10',
    image: '/projects/petverse.png',
    imgClass: 'object-contain p-6 drop-shadow-2xl'
  },
  {
    id: 2,
    title: 'Evalora',
    tagline: 'An AI-powered skill assessment platform built to make learning, testing, and career preparation smarter and accessible.',
    stack: ['Flutter', 'Node.js', 'Express.js', 'Python', 'MongoDB', 'Gemini API'],
    points: [
      'Built an AI-driven platform supporting multiple evaluation modes including MCQ, descriptive, and viva.',
      'Integrated intelligent features like course recommendations, question generation, and real-time feedback analytics.',
      'Designed with accessibility at the core (speech-to-text, voice navigation, PWD-friendly workflows).'
    ],
    link: 'https://github.com/Ram-Pratheesh/Evalora',
    color: 'from-orange-400 to-red-500',
    bgAccent: 'bg-orange-500/10',
    image: '/projects/Evalora.png',
    imgClass: 'object-contain p-6 drop-shadow-2xl'
  },
  {
    id: 3,
    title: 'FaceX',
    tagline: 'A full-stack face recognition based attendance management system built for academic environments.',
    stack: ['Flutter Web', 'Node.js', 'MongoDB', 'Python', 'FaceNet', 'OpenCV'],
    points: [
      'Built a facial recognition-powered attendance system using FaceNet embeddings and cosine similarity.',
      'Developed a Flutter Web admin panel to manage student records and manual attendance overrides.',
      'Created a backend attendance engine with REST APIs and CRON-based absentee automation.'
    ],
    link: 'https://github.com/Ram-Pratheesh/FaceX',
    color: 'from-blue-400 to-indigo-500',
    bgAccent: 'bg-blue-500/10',
    image: '/projects/FaceX.jpeg',
    imgClass: 'object-cover object-top'
  },
  {
    id: 4,
    title: 'REC Team Finder',
    tagline: 'A cloud-native teammate discovery platform built to help students find compatible teammates within the college ecosystem.',
    stack: ['React (Vite)', 'NestJS', 'Docker', 'Azure', 'Cosmos DB', 'App Insights'],
    points: [
      'Built a full-stack discovery platform fully deployed on Microsoft Azure with Cosmos DB.',
      'Implemented secure OTP-based authentication using Azure Communication Services.',
      'Integrated Azure Application Insights to monitor API performance, error logs, and backend health in real time.'
    ],
    link: 'https://github.com/Ram-Pratheesh/team-finder-cloud',
    color: 'from-yellow-400 to-orange-500',
    bgAccent: 'bg-yellow-500/10',
    image: '/projects/Team Finder.png',
    imgClass: 'object-cover object-top'
  },
  {
    id: 5,
    title: 'Contribution Analyzer',
    tagline: 'An AI-powered GitHub contribution analysis platform that measures fair and explainable team contribution percentages.',
    stack: ['React', 'Tailwind', 'Node.js', 'FastAPI', 'Python', 'scikit-learn'],
    points: [
      'Analyzes GitHub repository activity to calculate fair contribution using commit data, file importance, and patterns.',
      'Developed Random Forest models to classify contributors and identify Last-minute work patterns.',
      'Designed interactive visualizations including contribution pie charts and timeline breakdowns.'
    ],
    link: 'https://github.com/Ram-Pratheesh/Github-Team-Contribution-Analyzer',
    color: 'from-purple-400 to-pink-500',
    bgAccent: 'bg-purple-500/10',
    image: '/projects/GCA.png',
    imgClass: 'object-cover object-top'
  }
];

export default function Projects() {
  return (
    <section className="relative w-full bg-neutral-950 py-16 sm:py-32 px-4 md:px-8 xl:px-16 z-20">

      {/* Background ambient noise/glows for extra vibrancy */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-purple-600/20 blur-[150px] mix-blend-screen" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] rounded-full bg-blue-600/20 blur-[150px] mix-blend-screen" />
        <div className="absolute top-[40%] left-[30%] w-[30vw] h-[30vw] rounded-full bg-pink-600/10 blur-[150px] mix-blend-screen" />
      </div>

      <div className="max-w-[85rem] mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          className="mb-20 text-center"
        >
          <h3 className="text-3xl sm:text-5xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white/50 tracking-tighter mb-4">
            Featured Projects
          </h3>
          <p className="text-lg md:text-xl text-white/50 max-w-2xl mx-auto font-light">
            Bringing ideas to life with high-performance code and vibrant design.
          </p>
        </motion.div>

        {/* 2-Column Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-12">
          {projects.map((p, i) => {
            // Make the 5th project span the entire bottom row for structural symmetry
            const isWide = i === 4;

            return (
              <motion.div
                key={p.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: (i % 2) * 0.1 }}
                className={`group relative ${isWide ? 'lg:col-span-2' : ''}`}
              >
                {/* Outer glowing border that blooms on hover */}
                <div className={`absolute -inset-1 bg-gradient-to-br ${p.color} rounded-[2.5rem] opacity-0 group-hover:opacity-100 blur-xl transition-all duration-700 ease-out z-0`} />

                {/* Inner Card Container */}
                <div className="relative h-full bg-neutral-900/80 backdrop-blur-3xl border border-white/10 rounded-[2rem] overflow-hidden flex flex-col z-10 shadow-2xl transition-transform duration-500 group-hover:-translate-y-2 group-hover:bg-neutral-900">

                  {/* Image Header Area */}
                  <div className={`relative w-full ${isWide ? 'h-52 sm:h-80 lg:h-[500px]' : 'h-44 sm:h-64 md:h-80 lg:h-96'} ${p.bgAccent} overflow-hidden border-b border-white/5`}>
                    <Image
                      src={p.image}
                      alt={p.title}
                      fill
                      className={`${p.imgClass} transition-transform duration-700 group-hover:scale-[1.03] opacity-90 group-hover:opacity-100`}
                    />
                    {/* Bottom shadow fade to blend into the card naturally */}
                    <div className="absolute bottom-0 w-full h-1/2 bg-gradient-to-t from-neutral-900 via-neutral-900/40 to-transparent z-10 pointer-events-none" />
                  </div>

                  {/* Text & Content Body */}
                  <div className="p-5 sm:p-8 md:p-10 flex flex-col flex-1 relative bg-gradient-to-b from-transparent to-neutral-900/50">

                    {/* Header: Title + GitHub Button */}
                    <div className="flex justify-between items-start mb-4 gap-4">
                      <h4 className={`text-2xl sm:text-3xl md:text-4xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-br from-white to-white/70 group-hover:${p.color} transition-colors duration-500`}>
                        {p.title}
                      </h4>
                      <a
                        href={p.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`text-white/40 hover:text-white transition-colors duration-300 transform group-hover:scale-110 p-2 rounded-full hover:bg-white/10`}
                        title="View on GitHub"
                      >
                        <svg className="w-8 h-8 md:w-10 md:h-10" fill="currentColor" viewBox="0 0 24 24">
                          <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                        </svg>
                      </a>
                    </div>

                    <p className="text-white/70 font-light leading-relaxed mb-8 text-base md:text-lg lg:text-xl">
                      {p.tagline}
                    </p>

                    {/* Tech Stack Pills */}
                    <div className="flex flex-wrap gap-2 mb-8">
                      {p.stack.map((tech, idx) => (
                        <span key={idx} className={`px-3 py-1.5 text-xs font-semibold tracking-wider text-white/90 bg-black/40 border border-white/5 rounded-full backdrop-blur-sm group-hover:border-white/20 transition-colors`}>
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Impact Points directly into the flex column, pushing itself up if needed */}
                    <ul className="space-y-4 mt-auto z-20">
                      {p.points.map((point, idx) => (
                        <li key={idx} className="flex gap-4 items-start text-white/60 font-light text-sm md:text-base leading-relaxed group-hover:text-white/80 transition-colors duration-300">
                          <span className={`mt-1.5 h-2 w-2 rounded-full bg-gradient-to-r ${p.color} flex-shrink-0 shadow-[0_0_10px_rgba(255,255,255,0.4)]`} />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>

                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
