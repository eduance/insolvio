import React from 'react';
import { motion } from 'framer-motion';
import { Lightbulb } from 'lucide-react';

export function Logo() {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 1.2 }}
      className="flex items-center justify-center space-x-2 text-brand-primary/80"
    >
      
    </motion.div>
  );
}