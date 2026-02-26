'use client';

import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { useState } from 'react';
import { Menu, Search, Turtle } from 'lucide-react';
import SoundController from './SoundController';

export default function Navbar() {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() || 0;
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  return (
    <motion.nav
      variants={{
        visible: { y: 0 },
        hidden: { y: -100 },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className="fixed top-0 left-0 w-full z-50 flex items-center justify-between px-8 py-6 pointer-events-none"
    >
      <div className="pointer-events-auto flex items-center gap-2 mix-blend-difference text-white">
        <Turtle className="w-8 h-8 text-teal-400" />
        <span className="font-serif text-2xl font-bold tracking-wider">OCEANIC</span>
      </div>

      <div className="pointer-events-auto flex items-center gap-8 px-8 py-3 rounded-full glass-panel text-sm font-medium tracking-widest uppercase text-sand-100/80">
        <a href="#" className="hover:text-teal-400 transition-colors">Species</a>
        <a href="#" className="hover:text-teal-400 transition-colors">Habitat</a>
        <a href="#" className="hover:text-teal-400 transition-colors">Conservation</a>
      </div>

      <div className="pointer-events-auto flex items-center gap-4">
        <SoundController />
        <button className="p-3 rounded-full hover:bg-white/10 transition-colors">
          <Menu className="w-6 h-6 text-white" />
        </button>
      </div>
    </motion.nav>
  );
}
