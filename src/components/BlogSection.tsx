import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { blogs } from '../data/blogs';

const BlogSection = () => {
  return (
    <section id="blog" className="py-24 relative">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-serif font-bold text-white mb-4">Blog</h2>
          <p className="text-lavender text-lg">Join the Safe Driver Community</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogs.map((post, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group h-full"
            >
              <Link to={`/blog/${post.slug}`} className="block h-full">
                <div className="relative aspect-video overflow-hidden rounded-2xl mb-6 bg-white/5">
                  <div className="absolute inset-0 bg-primary/20 group-hover:bg-primary/0 transition-colors z-10" />
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-accent-gold transition-colors line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-lavender/70 text-base leading-relaxed line-clamp-3">
                  {post.description}
                </p>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
