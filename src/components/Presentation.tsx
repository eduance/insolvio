import React, { useEffect, useRef } from 'react';
import Reveal from 'reveal.js';
import 'reveal.js/dist/reveal.css';
import { motion } from 'framer-motion';

interface SlideProps {
  children: React.ReactNode;
  className?: string;
}

export function Slide({ children, className = '' }: SlideProps) {
  return (
    <section className={`relative h-screen flex items-center justify-center ${className}`}>
      {children}
    </section>
  );
}

export function Presentation() {
  const deckRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (deckRef.current) {
      const deck = new Reveal(deckRef.current, {
        hash: true,
        mouseWheel: true,
        transition: 'slide',
        backgroundTransition: 'fade',
        touch: true,
        controls: false,
        progress: false,
      });
      
      deck.initialize();
      
      return () => {
        deck.destroy();
      };
    }
  }, []);

  return (
    <div className="reveal" ref={deckRef}>
      <div className="slides">
        <Slide>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center"
          >
            <h1 className="text-5xl font-serif text-brand-primary">
              Clarity in every solution
            </h1>
          </motion.div>
        </Slide>

        <Slide>
          <motion.p 
            className="text-xl text-gray-600/90 max-w-[65ch]"
          >
            Every day, businesses face increasingly intricate challenges that seem impossible to untangle. 
            Systems become more interconnected, problems more nuanced, and solutions more elusive. 
            This complexity isn't just a hurdle—it's the defining challenge of our time.
          </motion.p>
        </Slide>

        {/* Add more slides as needed */}
      </div>
    </div>
  </div>
  );
}