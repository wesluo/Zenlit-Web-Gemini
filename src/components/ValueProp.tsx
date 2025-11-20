import { motion } from 'framer-motion';

const ValueProp = () => {
  return (
    <section className="py-24 bg-midnight relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">
            YOUR SKILLS FINALLY PAY OFF
          </h2>
          <p className="text-xl text-lavender/80 max-w-3xl mx-auto leading-relaxed">
            Good driving goes unrewarded—until now. Zenlit turns every safe mile into real value.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ValueProp;
