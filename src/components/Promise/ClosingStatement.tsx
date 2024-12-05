import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '../Button';

export function ClosingStatement() {
  return (
    <div className="bg-brand-accent1 py-32 mt-16">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto px-6 text-center"
      >
        <h2 className="text-3xl md:text-4xl font-serif text-brand-primary mb-8">
          Transform Your Vision
        </h2>
        <p className="text-lg leading-relaxed mb-12 text-black/80">
          Every day presents new challenges, and with them, new opportunities for transformation. 
          Let's work together to turn complexity into clarity and potential into reality.
        </p>
        <Button
          href="mailto:humans@insolvio.com"
          text="Connect"
          variant="primary"
          icon="arrow-right"
        />
      </motion.div>
    </div>
  );
}