import React from 'react';
import { motion } from 'framer-motion';

interface PromiseItemProps {
  title: string;
  description: string;
  index: number;
}

export function PromiseItem({ title, description, index }: PromiseItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="mb-16 last:mb-0"
    >
      <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
        <div className="flex-shrink-0 w-16 h-16 flex items-center justify-center rounded-full bg-brand-accent1">
          <span className="text-2xl font-serif text-brand-primary">
            {(index + 1).toString().padStart(2, '0')}
          </span>
        </div>
        <div className="text-center md:text-left">
          <h3 className="text-2xl mb-4 font-serif text-brand-primary">{title}</h3>
          <p className="text-lg leading-relaxed text-black/80">{description}</p>
        </div>
      </div>
    </motion.div>
  );
}