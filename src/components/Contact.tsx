'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

export default function Contact() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('sending');

    const form = e.currentTarget; // save reference before async
    const formData = new FormData(form);
    formData.append("access_key", "a0657332-bee1-4d0d-b089-d8a1ff18621c");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Accept": "application/json"
        },
        body: formData
      });

      const result = await res.json();
      
      if (result.success) {
        setStatus('success');
        form.reset();
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        console.error("Web3Forms Error: ", result);
        setStatus('error');
        setTimeout(() => setStatus('idle'), 5000);
      }
    } catch (err) {
      console.error("Fetch Error: ", err);
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  return (
    <section className="relative w-full bg-black py-16 sm:py-32 px-4 md:px-8 xl:px-16 z-20 overflow-hidden border-t border-white/5">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-600/10 blur-[150px] rounded-full mix-blend-screen pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10 flex flex-col items-center">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h3 className="text-3xl sm:text-5xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white/50 tracking-tighter mb-4">
            Let&apos;s Build Together.
          </h3>
          <p className="text-lg md:text-xl text-white/50 max-w-xl mx-auto font-light">
            Have a project in mind or want to collaborate? Drop me a message and let&apos;s create something amazing.
          </p>
        </motion.div>

        <motion.form 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="w-full bg-neutral-900/60 backdrop-blur-3xl border border-white/10 rounded-2xl sm:rounded-[2rem] p-5 sm:p-8 md:p-12 shadow-2xl relative overflow-hidden"
          onSubmit={handleSubmit}
        >
          {/* Decorative Corner Glow inside card */}
          <div className="absolute -top-24 -right-24 w-48 h-48 bg-purple-500/20 rounded-full blur-[60px] pointer-events-none" />

          {/* Form Fields require "name" attributes for Web3Forms to capture the data! */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8 relative z-10">
            <div className="flex flex-col gap-2">
              <label className="text-white/60 text-sm font-medium tracking-wide uppercase px-1">Name</label>
              <input type="text" name="name" required placeholder="John Doe" className="bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white placeholder-white/20 focus:outline-none focus:border-indigo-500/50 focus:bg-white/10 transition-all font-light" />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-white/60 text-sm font-medium tracking-wide uppercase px-1">Email</label>
              <input type="email" name="email" required placeholder="john@example.com" className="bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white placeholder-white/20 focus:outline-none focus:border-indigo-500/50 focus:bg-white/10 transition-all font-light" />
            </div>
          </div>
          <div className="flex flex-col gap-2 mb-10 relative z-10">
            <label className="text-white/60 text-sm font-medium tracking-wide uppercase px-1">Message</label>
            <textarea name="message" required rows={5} placeholder="Tell me about your project..." className="bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white placeholder-white/20 focus:outline-none focus:border-indigo-500/50 focus:bg-white/10 transition-all font-light resize-none"></textarea>
          </div>

          <button 
            disabled={status === 'sending' || status === 'success'}
            className="w-full group relative inline-flex items-center justify-center gap-3 px-8 py-5 rounded-xl bg-white text-black font-bold text-lg hover:bg-neutral-200 transition-all overflow-hidden drop-shadow-lg z-10 disabled:opacity-50 disabled:cursor-not-allowed"
          >
             <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-indigo-500 opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none" />
             
             <span className="relative z-10">
               {status === 'idle' && 'Send Message'}
               {status === 'sending' && 'Sending...'}
               {status === 'success' && 'Message Sent! ✨'}
               {status === 'error' && 'Error. Try Again.'}
             </span>

             {status === 'idle' && (
               <svg className="w-5 h-5 relative z-10 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
               </svg>
             )}
          </button>
        </motion.form>
      </div>
    </section>
  );
}
