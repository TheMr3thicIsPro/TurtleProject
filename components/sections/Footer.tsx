'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative z-20 py-32 overflow-hidden flex flex-col items-center justify-center text-center">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-teal-500/10 rounded-full blur-[100px]"></div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="relative z-10"
      >
        <h2 className="font-serif text-6xl md:text-8xl text-white mb-8 tracking-tight">
          Protect The <br />
          <span className="text-teal-400">Ocean</span>
        </h2>
        
        <p className="max-w-xl mx-auto text-sand-200 mb-12 text-lg">
          The future of sea turtles is in our hands. Join the movement to restore our oceans.
        </p>

        <button className="group relative px-8 py-4 bg-teal-500 text-ocean-950 rounded-full font-bold tracking-widest uppercase overflow-hidden transition-transform hover:scale-105">
          <span className="relative z-10 flex items-center gap-2">
            Act Now <ArrowRight className="w-5 h-5" />
          </span>
          <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity"></div>
        </button>
      </motion.div>

      <div className="absolute bottom-8 text-sand-300 text-xs tracking-widest uppercase">
        © 2026 Oceanic Experience. AI Coded.
      </div>
    </footer>
  );
}
