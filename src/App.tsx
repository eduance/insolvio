import React from 'react';
import { motion } from 'framer-motion';
import { Hero } from './components/Hero';
import { Content } from './components/Content';
import { ScrollIndicator } from './components/ScrollIndicator';

export default function App() {
  return (
    <>
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative"
      >
        <section className="scroll-section relative min-h-screen flex flex-col">
          <div className="flex-grow flex flex-col items-center justify-center">
            <Hero />
          </div>

          <div className="flex justify-center py-24">
            <ScrollIndicator />
          </div>
        </section>
        
        <Content />
      </motion.div>
    </>
  );
}
