import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import clsx from 'clsx';

const faqs = [
  {
    question: "What is Zenlit?",
    answer: "Zenlit is the world's first RWA (Real World Asset) tokenized marketplace for auto insurance. We're building 'The Amazon of Auto Insurance' where drivers earn ZNLT tokens for safe driving and can access transparent, lower-cost insurance while being rewarded for their good driving habits."
  },
  {
    question: "How does Zenlit work?",
    answer: "Zenlit combines three key components: 1) A mobile app that tracks your driving ZenScore—how safe you are driving, 2) ZNLT token rewards for safe driving and referrals, and 3) A marketplace where you can compare insurance rates transparently. The more safely you drive, the more tokens you earn."
  },
  {
    question: "How do I get started with Zenlit?",
    answer: "Download the Zenlit app, create an account, create your wallet, and start driving. The app runs in the background to build your ZenScore, and you'll begin earning ZNLT tokens based on your driving performance and referrals."
  },
  {
    question: "How do I earn ZNLT tokens?",
    answer: "You earn tokens through: 1) Safe driving - based on your daily ZenScore (1-100 range with higher scores earning more tokens), 2) Referrals - earn bonus tokens when friends you refer also drive safely."
  },
  {
    question: "What is the ZenScore and how is it calculated?",
    answer: "Your ZenScore (1-100) is calculated based on driving behaviors including speeding, hard braking, hard acceleration, sharp turns, phone distraction, road type, weather conditions, and time of driving. Scores of 90+ earn the most tokens."
  }
];

const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 bg-white/5 relative">
      <div className="container mx-auto px-6 max-w-3xl">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-serif font-bold text-white text-center mb-16"
        >
          Frequently Asked Questions
        </motion.h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="border border-white/10 rounded-xl overflow-hidden bg-midnight/50 backdrop-blur-sm"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-white/5 transition-colors"
              >
                <span className="text-lg font-medium text-white pr-8">{faq.question}</span>
                <ChevronDown 
                  className={clsx(
                    "w-5 h-5 text-lavender transition-transform duration-300",
                    openIndex === index && "rotate-180"
                  )} 
                />
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="p-6 pt-0 text-lavender/80 leading-relaxed border-t border-white/5">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
