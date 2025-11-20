import { motion } from 'framer-motion';
import { Download } from 'lucide-react';

const CallToAction = () => {
  return (
    <section className="py-32 relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-midnight to-primary/20 pointer-events-none" />
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <h2 className="text-4xl md:text-6xl font-serif font-bold text-white">
            START EARNING FROM <br className="hidden md:block" /> YOUR NEXT TRIP
          </h2>
          
          <p className="text-xl text-lavender/80 max-w-2xl mx-auto">
            Join the safe driver community. Download Zenlit today.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
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
          </div>
          
          <p className="text-xs text-lavender/40 pt-8">
            Rewards are not insurance discounts. Terms apply.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default CallToAction;
