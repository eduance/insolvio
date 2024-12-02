import React from 'react';
import { motion } from 'framer-motion';
import { Section } from './Section';
import { CTAButton } from './CTAButton';
import { ContactSection } from './ContactSection';

const paragraphs = [
  {
    text: "In today's digital landscape, complexity reigns supreme. Every click, every interaction, every system intertwined in ways we never imagined possible.",
    className: "opacity-10"
  },
  {
    text: "That's where INSOLVIO steps in. We don't just navigate complexity—we transform it. Like skilled artisans, we carefully strip away layers of confusion until the elegant solution emerges.",
    className: "opacity-10"
  },
  {
    text: "Our methodology isn't magic—it's mastery. Years of experience have taught us that within every labyrinth of complexity lies a path to clarity. We find that path, time and time again.",
    className: "opacity-10"
  },
  {
    text: "When clarity leads the way, possibilities become infinite.",
    className: "opacity-10 text-center mb-12"
  }
];

export function Content() {
  return (
    <>
      {paragraphs.map((paragraph, index) => (
        <Section key={index}>
          <div className="flex flex-col items-center">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className={`text-[1.125rem] sm:text-lg md:text-xl leading-[1.85] text-left max-w-[45ch] mx-auto text-black ${paragraph.className}`}
            >
              {paragraph.text}
            </motion.p>
            {index === paragraphs.length - 1 && <ContactSection />}
          </div>
        </Section>
      ))}
    </>
  );
}