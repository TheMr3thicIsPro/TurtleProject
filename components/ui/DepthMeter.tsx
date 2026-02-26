'use client';

import { motion, useScroll, useTransform } from 'framer-motion';

export default function DepthMeter() {
  const { scrollYProgress } = useScroll();
  const depth = useTransform(scrollYProgress, [0, 1], [0, 2000]);
  
  return (
    <div className="fixed right-8 top-1/2 -translate-y-1/2 flex flex-col items-center gap-2 pointer-events-none z-40 hidden lg:flex">
      <div className="h-24 w-[1px] bg-gradient-to-b from-transparent via-teal-500/50 to-teal-500"></div>
      <motion.div className="font-mono text-xs text-teal-400 tabular-nums">
        {useTransform(depth, (value) => `${Math.floor(value)}m`)}
      </motion.div>
      <div className="h-24 w-[1px] bg-gradient-to-t from-transparent via-teal-500/50 to-teal-500"></div>
    </div>
  );
}
