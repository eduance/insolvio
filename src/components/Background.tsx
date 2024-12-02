import React from 'react';
import { motion } from 'framer-motion';
import { useWindowScroll } from 'react-use';

export function Background() {
  const { y } = useWindowScroll();

  return (
    <div className="fixed inset-0 -z-10">
      {/* Base background color */}
      <div className="absolute inset-0 bg-white" />
      
      {/* Animated grid pattern */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `url('https://res.cloudinary.com/dopoykh07/image/upload/v1733095710/ooorganize_fgijya.svg')`,
            backgroundSize: '40px 40px',
            transform: `translateY(${y * 0.1}px)`,
          }}
        />
      </div>

      {/* Hero section gradient */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
        className="absolute top-0 inset-x-0 h-screen bg-gradient-to-b from-brand-accent1/30 via-brand-accent2/20 to-transparent"
      />

      {/* Floating orbs */}
      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-gradient-radial from-brand-primary/5 to-transparent rounded-full filter blur-3xl"
      />
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
        className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-gradient-radial from-brand-accent2/10 to-transparent rounded-full filter blur-3xl"
      />

      {/* Final overlay for text contrast */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-transparent to-white/40" />
    </div>
  );
}