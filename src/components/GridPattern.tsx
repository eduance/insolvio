import React from 'react';
import { motion } from 'framer-motion';

export function GridPattern() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="absolute inset-0"
    >
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.02]" />
    </motion.div>
  );
}