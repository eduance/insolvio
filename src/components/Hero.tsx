import React from 'react';
import { motion } from 'framer-motion';
import { BrandLogo } from './BrandLogo';

export function Hero() {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="text-center space-y-6"
    >
      <h1 className="text-[2.5rem] sm:text-4xl md:text-5xl tracking-tight text-brand-primary font-normal leading-[1.15] max-w-[20ch] mx-auto">
        Clarity in every solution
      </h1>
    </motion.div>
  );
}