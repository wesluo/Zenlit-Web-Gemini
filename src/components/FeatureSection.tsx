import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import clsx from 'clsx';

interface FeatureSectionProps {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  imageSrc: string;
  accentColor: 'purple' | 'gold' | 'emerald';
  alignment: 'left' | 'right';
}

const FeatureSection: React.FC<FeatureSectionProps> = ({
  id,
  title,
  subtitle,
  description,
  imageSrc,
  accentColor,
  alignment,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.8, 1], [0, 1, 1, 0]);

  const colorMap = {
    purple: {
      text: 'text-primary-light',
      glow: 'shadow-primary/30',
      border: 'border-primary/20',
      bg: 'bg-primary/10',
    },
    gold: {
      text: 'text-accent-gold',
      glow: 'shadow-accent-gold/30',
      border: 'border-accent-gold/20',
      bg: 'bg-accent-gold/10',
    },
    emerald: {
      text: 'text-accent-emerald',
      glow: 'shadow-accent-emerald/30',
      border: 'border-accent-emerald/20',
      bg: 'bg-accent-emerald/10',
    },
  };

  const colors = colorMap[accentColor];

  return (
    <section 
      id={id} 
      ref={containerRef}
      className="flex items-center justify-center py-8 relative overflow-hidden"
    >
      {/* Ambient Background Glow */}
      <div className={clsx(
        "absolute w-[500px] h-[500px] rounded-full blur-[120px] opacity-20 pointer-events-none",
        alignment === 'left' ? 'left-0 top-1/2 -translate-y-1/2 -translate-x-1/3' : 'right-0 top-1/2 -translate-y-1/2 translate-x-1/3',
        colors.bg.replace('/10', '/20')
      )} />

      <div className="container mx-auto px-6">
        <div className={clsx(
          "flex flex-col gap-12 lg:gap-24 items-center",
          alignment === 'left' ? 'lg:flex-row' : 'lg:flex-row-reverse'
        )}>
          
          {/* Text Content */}
          <motion.div 
            className="flex-1 space-y-4 text-center lg:text-left z-10"
            initial={{ opacity: 0, x: alignment === 'left' ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <span className={clsx(
              "inline-block px-3 py-1 rounded-full text-lg font-bold tracking-widest uppercase border backdrop-blur-sm",
              colors.text, colors.border, colors.bg
            )}>
              {subtitle}
            </span>
            
            <h2 className="text-3xl lg:text-5xl font-serif font-bold text-white leading-tight">
              {title}
            </h2>
            
            <p className="text-base text-lavender leading-relaxed max-w-xl mx-auto lg:mx-0">
              {description}
            </p>
          </motion.div>

          {/* Image/Phone Container */}
          <motion.div 
            className="flex-1 relative z-10 flex justify-center"
            style={{ y, opacity }}
          >
            <div className={clsx(
              "relative w-[200px] sm:w-[240px] aspect-[9/19] rounded-[2rem] border-4 border-midnight/50 overflow-hidden",
              "glass-panel shadow-2xl",
              colors.glow
            )}>
              <div className="absolute inset-0 bg-midnight/20 backdrop-blur-sm z-10 pointer-events-none mix-blend-overlay" />
              <img 
                src={imageSrc} 
                alt={title} 
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
              />
              
              {/* Reflection/Shine effect */}
              <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent pointer-events-none" />
            </div>

            {/* Decorative Elements around phone */}
            <div className={clsx(
              "absolute -z-10 w-full h-full top-4 left-4 rounded-[3rem] border-2 opacity-30",
              colors.border
            )} />
            <div className={clsx(
              "absolute -z-20 w-full h-full -top-4 -right-4 rounded-[3rem] border-2 opacity-20",
              colors.border
            )} />
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
