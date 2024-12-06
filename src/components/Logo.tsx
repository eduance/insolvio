import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export function Logo() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-4 md:top-8 left-1/2 -translate-x-1/2 z-10"
    >
      <Link to="/" className="inline-block" aria-label="INSOLVIO - Home">
        <img 
          src="/logo.png"
          alt="INSOLVIO Logo - A lightbulb symbolizing innovative solutions"
          width={560}
          height={128}
          className="h-6 sm:h-8 w-auto"
        />
      </Link>
    </motion.div>
  );
}