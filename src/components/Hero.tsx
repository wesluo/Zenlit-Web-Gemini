import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ChevronDown, Download } from 'lucide-react';

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={containerRef} className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Background Video */}
      <motion.div 
        style={{ y, opacity }}
        className="absolute inset-0 z-0"
      >
        <div className="absolute inset-0 bg-midnight/60 z-10 mix-blend-multiply" /> {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-midnight/30 via-transparent to-midnight z-10" /> {/* Gradient Overlay */}
        
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-80"
        >
          <source src="/assets/Zenlit Output Vid 1080p.mov" type="video/mp4" />
          <source src="/assets/Zenlit Output Vid 1080p.mov" type="video/quicktime" />
          Your browser does not support the video tag.
        </video>
      </motion.div>

      {/* Content */}
      <div className="relative z-20 container mx-auto px-6 text-center space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-2"
        >
          <span className="inline-block px-4 py-1.5 rounded-full glass-panel text-accent-gold text-xs font-bold tracking-widest uppercase mb-4">
            The Future of Safe Driving
          </span>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-white leading-tight">
            Drive Smart, <br /> <span className="text-gradient-primary">Earn ZNLT</span>
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg md:text-xl text-platinum/80 max-w-3xl mx-auto leading-relaxed font-light"
        >
          ZNLT is a Real World Asset (RWA) to change the future of Auto Insurance distribution
        </motion.p>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
                  >
                    <a
                      href="https://apps.apple.com/us/app/zenlit-earn-while-you-drive/id6747021447"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto px-8 py-4 bg-primary hover:bg-primary-light text-white rounded-full font-semibold shadow-[0_0_20px_rgba(93,46,140,0.3)] hover:shadow-[0_0_30px_rgba(93,46,140,0.5)] transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center gap-2"
                    >
                      <Download size={20} /> Download on App Store
                    </a>
                    <a
                      href="https://play.google.com/store/apps/details?id=com.telenav.telematics.app.crypto&utm_source=website&utm_medium=download_button&utm_campaign=cta"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto px-8 py-4 glass-button text-white rounded-full font-medium hover:bg-white/10 flex items-center justify-center gap-2"
                    >
                      <Download size={20} /> Get it on Google Play
                    </a>
                  </motion.div>      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 animate-bounce"
      >
        <ChevronDown className="text-platinum/50 w-8 h-8" />
      </motion.div>
    </section>
  );
};

export default Hero;
