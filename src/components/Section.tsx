import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  fullWidth?: boolean;
}

export function Section({ children, className = '', fullWidth = false }: SectionProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.4 }}
      className={`scroll-section relative min-h-screen flex items-center justify-center p-6 sm:p-8 lg:p-12 ${className}`}
    >
      <div className={fullWidth ? "w-full" : "w-full max-w-[68ch]"}>
        {children}
      </div>
    </motion.section>
  );
}