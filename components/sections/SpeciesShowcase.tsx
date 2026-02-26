'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const species = [
  {
    name: "Green Turtle",
    scientific: "Chelonia mydas",
    desc: "Named for the color of their fat, not their shell. They are the only herbivorous sea turtles.",
    status: "Endangered"
  },
  {
    name: "Hawksbill",
    scientific: "Eretmochelys imbricata",
    desc: "Known for their beautiful shell patterns. They help save reefs by eating sponges.",
    status: "Critically Endangered"
  },
  {
    name: "Leatherback",
    scientific: "Dermochelys coriacea",
    desc: "The largest of all sea turtles. They lack a hard shell and can dive deeper than any other turtle.",
    status: "Vulnerable"
  },
  {
    name: "Loggerhead",
    scientific: "Caretta caretta",
    desc: "Named for their large heads and powerful jaws, used to crush hard-shelled prey like crabs.",
    status: "Vulnerable"
  }
];

export default function SpeciesShowcase() {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-75%"]);

  return (
    <section ref={targetRef} className="relative h-[300vh] z-20">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-12 px-20">
          <div className="flex-shrink-0 w-[40vw] flex flex-col justify-center">
             <h2 className="font-serif text-6xl text-white mb-6">
               Meet the <br /> <span className="text-teal-400">Species</span>
             </h2>
             <p className="text-sand-200 text-lg max-w-md">
               From the massive Leatherback to the reef-dwelling Hawksbill, each species is uniquely adapted to life at sea.
             </p>
          </div>

          {species.map((s, i) => (
            <div
              key={i}
              className="group relative h-[60vh] w-[35vw] flex-shrink-0 overflow-hidden rounded-3xl glass-panel border border-white/10"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-ocean-950 via-transparent to-transparent opacity-80" />
              
              <div className="absolute bottom-0 p-10 w-full">
                <div className="mb-2 flex items-center gap-3">
                   <span className="px-3 py-1 rounded-full border border-teal-500/30 text-teal-400 text-xs uppercase tracking-wider bg-teal-900/20">
                     {s.status}
                   </span>
                </div>
                <h3 className="font-serif text-4xl text-white mb-2">{s.name}</h3>
                <p className="text-sm text-sand-300 italic mb-4">{s.scientific}</p>
                <p className="text-sand-100">{s.desc}</p>
              </div>
              
              {/* Placeholder for species image/3D model */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 rounded-full bg-teal-500/10 blur-3xl group-hover:bg-teal-500/20 transition-all duration-500"></div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
