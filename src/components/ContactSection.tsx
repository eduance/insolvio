import { motion } from 'framer-motion';
import { Button } from './Button';

export function ContactSection() {
  return (
    <div className="text-center mt-8">
      <motion.div
        initial={{ opacity: 0, y: 0 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.2 }}
      >
        <Button
          href="mailto:humans@insolvio.com"
          text="Contact us"
          variant="default"
          icon="arrow-right"
        />
      </motion.div>
    </div>
  );
}