'use client';

import { Volume2, VolumeX } from 'lucide-react';
import { useStore } from '@/store/useStore';
import { useEffect, useRef } from 'react';

export default function SoundController() {
  const { isSoundEnabled, toggleSound } = useStore();
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (!audioRef.current) {
      audioRef.current = new Audio('/sounds/ocean-ambience.mp3'); // Placeholder path
      audioRef.current.loop = true;
      audioRef.current.volume = 0.5;
    }

    if (isSoundEnabled) {
      audioRef.current.play().catch(() => {
        // Handle autoplay policy
      });
      // Fade in
      let vol = 0;
      audioRef.current.volume = 0;
      const fadeIn = setInterval(() => {
        if (vol < 0.5) {
          vol += 0.05;
          audioRef.current!.volume = vol;
        } else {
          clearInterval(fadeIn);
        }
      }, 200);
    } else {
      audioRef.current.pause();
    }
  }, [isSoundEnabled]);

  return (
    <button
      onClick={toggleSound}
      className="p-3 rounded-full hover:bg-white/10 transition-colors text-white"
      aria-label="Toggle Sound"
    >
      {isSoundEnabled ? <Volume2 className="w-5 h-5" /> : <VolumeX className="w-5 h-5" />}
    </button>
  );
}
