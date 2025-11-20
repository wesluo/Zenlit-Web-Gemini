import { motion } from 'framer-motion';

const Mission = () => {
  return (
    <section id="mission" className="py-24 bg-midnight relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-8">
            OUR MISSION
          </h2>
          <p className="text-xl text-lavender/80 max-w-4xl mx-auto leading-relaxed">
            Zenlit is committed to making roads safer while rewarding drivers for positive habits. We believe that every safe mile should be recognized and celebrated. By combining cutting-edge technology with behavioral science, we're creating a community of safer drivers and reducing accidents on our roads.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Mission;
