import React from 'react';
import { motion } from 'framer-motion';

export function PromiseHero() {
  return (
    <div className="relative min-h-[40vh] flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="text-center w-full max-w-4xl mx-auto px-6"
      >
        <h1 className="text-[2.5rem] sm:text-4xl md:text-5xl tracking-tight text-brand-primary font-normal leading-[1.15] mb-6">
          Our Promise
        </h1>
        <p className="text-[1.125rem] sm:text-lg leading-relaxed text-black/80 max-w-2xl mx-auto">
          A commitment to transform complexity into clarity, 
          and challenges into opportunities.
        </p>
      </motion.div>
    </div>
  );
}