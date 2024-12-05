import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

interface CTAButtonProps {
  href?: string;
  text?: string;
  className?: string;
}

export function CTAButton({ 
  href = "mailto:humans@insolvio.com", 
  text = "Connect",
  className = "border border-black/10 text-brand-primary hover:bg-brand-primary/5"
}: CTAButtonProps) {
  return (
    <motion.a
      href={href}
      className={`group inline-flex items-center gap-2 px-8 py-2 text-md rounded-full transition-all duration-200 ${className}`}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      {text}
      <ArrowRight className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-1" />
    </motion.a>
  );
}