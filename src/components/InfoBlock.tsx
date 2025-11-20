import React from 'react';
import { motion } from 'framer-motion';
import clsx from 'clsx';

interface InfoBlockProps {
  title: string;
  description: string;
  accentColor?: 'purple' | 'gold' | 'emerald';
}

const InfoBlock: React.FC<InfoBlockProps> = ({ title, description, accentColor }) => {
  const colorMap = {
    purple: 'text-primary',
    gold: 'text-accent-gold',
    emerald: 'text-accent-emerald',
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.6 }}
      className="text-center p-6 bg-white/5 rounded-xl border border-white/10 glass-panel shadow-lg"
    >
      <h3 className={clsx(
        "text-2xl font-bold font-serif mb-3",
        accentColor ? colorMap[accentColor] : "text-white"
      )}>
        {title}
      </h3>
      <p className="text-lavender/80 text-base leading-relaxed max-w-sm mx-auto">
        {description}
      </p>
    </motion.div>
  );
};

export default InfoBlock;
