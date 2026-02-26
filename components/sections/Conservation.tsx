'use client';

import { motion } from 'framer-motion';

export default function Conservation() {
  return (
    <section className="py-32 relative z-20 bg-ocean-950/80 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
             initial={{ opacity: 0, x: -50 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 1 }}
          >
            <h2 className="font-serif text-5xl md:text-6xl text-white mb-8">
              A Fight for <br />
              <span className="text-red-400">Survival</span>
            </h2>
            <p className="text-sand-200 text-lg mb-6 leading-relaxed">
              Six of the seven sea turtle species are classified as threatened or endangered. 
              They face mounting perils from plastic pollution, poaching, and climate change.
            </p>
            <div className="flex gap-4">
               <div className="p-6 border border-red-500/20 rounded-lg bg-red-900/10 flex-1">
                 <h4 className="text-red-400 text-3xl font-bold mb-2">52%</h4>
                 <p className="text-sm text-sand-300">Of turtles have eaten plastic</p>
               </div>
               <div className="p-6 border border-red-500/20 rounded-lg bg-red-900/10 flex-1">
                 <h4 className="text-red-400 text-3xl font-bold mb-2">1 in 1000</h4>
                 <p className="text-sm text-sand-300">Hatchlings survive to adulthood</p>
               </div>
            </div>
          </motion.div>

          <motion.div
             initial={{ opacity: 0, x: 50 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 1 }}
             className="relative h-[600px] rounded-2xl overflow-hidden border border-white/10"
          >
             {/* Abstract visual of nets or pollution */}
             <div className="absolute inset-0 bg-gradient-to-br from-red-900/20 to-ocean-900 mix-blend-multiply"></div>
             <div className="absolute inset-0 flex items-center justify-center">
               <span className="text-white/20 font-serif text-9xl font-bold opacity-10">THREAT</span>
             </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
