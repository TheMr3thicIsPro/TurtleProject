'use client';

import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="h-screen w-full flex items-center justify-center relative overflow-hidden">
      <div className="container mx-auto px-4 z-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mb-4"
        >
          <span className="text-teal-400 tracking-[0.3em] text-sm font-medium uppercase">
            Discover the Ocean's Oldest Travelers
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="font-serif text-6xl md:text-8xl lg:text-9xl font-bold text-white mb-8 tracking-tight"
        >
          THE ANCIENT <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-b from-teal-200 to-teal-500">
            MARINERS
          </span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="max-w-xl mx-auto text-sand-200 text-lg leading-relaxed"
        >
          <p>
            Experience the majesty of sea turtles in a fully immersive 3D journey. 
            Dive deep into their world and discover why they matter.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2.5 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-xs tracking-widest text-teal-400 uppercase">Scroll to Dive</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-teal-400 to-transparent"></div>
        </motion.div>
      </div>
    </section>
  );
}
