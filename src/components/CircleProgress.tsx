import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useWindowScroll } from 'react-use';

export function CircleProgress() {
  const { y } = useWindowScroll();
  const [progress, setProgress] = useState(0);
  const [maxScroll, setMaxScroll] = useState(0);

  useEffect(() => {
    const updateMaxScroll = () => {
      setMaxScroll(document.documentElement.scrollHeight - window.innerHeight);
    };

    updateMaxScroll();
    window.addEventListener('resize', updateMaxScroll);
    return () => window.removeEventListener('resize', updateMaxScroll);
  }, []);

  useEffect(() => {
    if (maxScroll > 0) {
      setProgress(Math.min(y / maxScroll, 1));
    }
  }, [y, maxScroll]);

  const circumference = 2 * Math.PI * 40; // 2πr where r=40

  return (
    <motion.div 
      className="fixed right-8 top-1/2 -translate-y-1/2 w-24 h-24 hidden lg:block"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.8 }}
    >
      <svg viewBox="0 0 100 100" className="transform -rotate-90">
        <circle
          cx="50"
          cy="50"
          r="40"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
          className="text-gray-200"
        />
        <motion.circle
          cx="50"
          cy="50"
          r="40"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
          className="text-brand-primary"
          strokeDasharray={circumference}
          strokeDashoffset={circumference * (1 - progress)}
        />
      </svg>
    </motion.div>
  );
}