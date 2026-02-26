'use client';

import { motion, useMotionValue, useSpring } from 'framer-motion';
import { useEffect } from 'react';

export default function CustomCursor() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 150 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      mouseX.set(e.clientX - 16);
      mouseY.set(e.clientY - 16);
    };

    window.addEventListener('mousemove', moveCursor);
    return () => window.removeEventListener('mousemove', moveCursor);
  }, [mouseX, mouseY]);

  return (
    <motion.div
      className="fixed top-0 left-0 w-8 h-8 rounded-full border border-teal-400/50 pointer-events-none z-[100] hidden md:block"
      style={{
        translateX: cursorX,
        translateY: cursorY,
        backgroundColor: 'rgba(100, 255, 218, 0.05)',
      }}
    >
      <div className="absolute inset-0 rounded-full animate-ping opacity-20 bg-teal-400"></div>
    </motion.div>
  );
}
