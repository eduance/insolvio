import React from 'react';
import { motion } from 'framer-motion';
import { Button } from './Button';

export function Hero() {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="text-center space-y-4 sm:space-y-6 px-4"
    >
      <h1 className="text-[2rem] sm:text-4xl md:text-5xl tracking-tight text-brand-primary font-normal leading-[1.15] max-w-[20ch] mx-auto">
        Clarity in every solution
      </h1>
      <div className="mt-4 sm:mt-8">
        <Button to="/promise" text="Our Promise" icon="arrow-right" />
      </div>
    </motion.div>
  );
}