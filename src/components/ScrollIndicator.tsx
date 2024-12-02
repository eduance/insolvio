import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

export function ScrollIndicator() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ 
        opacity: 1, 
        y: [0, 10, 0] 
      }}
      transition={{ 
        duration: 2,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut"
      }}
      className="text-brand-primary/90 flex flex-col items-center gap-2"
    >
      <span className="text-sm font-medium tracking-wider uppercase">Scroll to explore</span>
      <ChevronDown className="w-6 h-6" />
    </motion.div>
  );
}