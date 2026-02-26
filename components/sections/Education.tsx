'use client';

import { motion } from 'framer-motion';
import { Shield, Clock, Globe } from 'lucide-react';

const facts = [
  {
    icon: Clock,
    title: "110 Million Years",
    description: "Sea turtles have existed since the time of the dinosaurs, navigating our oceans for over 100 million years."
  },
  {
    icon: Globe,
    title: "Global Travelers",
    description: "Some species travel more than 10,000 miles every year, crossing entire ocean basins to nest."
  },
  {
    icon: Shield,
    title: "Keystone Species",
    description: "They play a vital role in maintaining the health of our oceans, from coral reefs to seagrass beds."
  }
];

export default function Education() {
  return (
    <section className="py-32 relative z-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {facts.map((fact, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ y: -10, rotateX: 5, rotateY: 5 }}
              className="glass-panel p-8 rounded-2xl border border-white/5 hover:border-teal-400/30 transition-colors group"
            >
              <div className="mb-6 p-4 rounded-full bg-teal-900/30 w-fit group-hover:bg-teal-500/20 transition-colors">
                <fact.icon className="w-8 h-8 text-teal-400" />
              </div>
              <h3 className="text-2xl font-serif font-bold text-white mb-4">{fact.title}</h3>
              <p className="text-sand-200 leading-relaxed">{fact.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
