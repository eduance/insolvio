import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export function ContactSection() {
  return (
    <div className="text-center mt-8">
        <motion.a
        href="mailto:humans@insolvio.com"
        initial={{ opacity: 0, y: 0 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.2 }}
        className="group inline-flex items-center gap-2 px-8 py-2 text-md border border-black/10 text-brand-primary rounded-full hover:bg-brand-primary/5 transition-all duration-200"
        >
        Contact us
        <ArrowRight className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-1" />
        </motion.a>
    </div>
  );
}
