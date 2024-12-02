import React from 'react';
import { motion } from 'framer-motion';
import { Background } from './components/Background';
import { Hero } from './components/Hero';
import { Content } from './components/Content';
import { ScrollIndicator } from './components/ScrollIndicator';

export default function App() {
  return (
    <>
      <Background />
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative"
      >
        <section className="scroll-section relative min-h-screen flex flex-col items-center justify-center">
          <div className="max-w-prose-narrow mx-auto py-16 relative">
            <Hero />
          </div>
          <div className="absolute bottom-12 w-full flex justify-center">
            <ScrollIndicator />
          </div>
        </section>
        <Content />
      </motion.div>
    </>
  );
}