import { useParams, Link } from 'react-router-dom';
import { motion, useScroll, useSpring } from 'framer-motion';
import ReactMarkdown from 'react-markdown';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { blogs } from '../data/blogs';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = blogs.find(b => b.slug === slug);
  const otherPosts = blogs.filter(b => b.slug !== slug).slice(0, 2);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  if (!post) {
    return (
      <div className="min-h-screen bg-midnight text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Post not found</h1>
          <Link to="/" className="text-primary hover:underline">Return Home</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-midnight overflow-x-hidden">
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1.5 bg-primary origin-left z-[60]" 
        style={{ scaleX }} 
      />
      <Navbar />
      <main className="pt-32 pb-24">
        <article className="mx-auto w-[90%]">
          <Link to="/#blog" className="inline-flex items-center text-lavender hover:text-white mb-8 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Blog
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-7xl font-serif font-bold text-white mb-6 leading-tight">
              {post.title}
            </h1>
            
            <div className="flex items-center gap-4 text-lavender/60 mb-8 text-xl">
              <span>{post.publishedDate}</span>
              <span>•</span>
              <span>Zenlit Team</span>
            </div>

            <div className="aspect-video w-full rounded-2xl overflow-hidden mb-12 bg-white/5">
              <img 
                src={post.image} 
                alt={post.title}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="prose prose-invert prose-2xl max-w-none text-lavender/90 prose-headings:text-white prose-headings:font-serif prose-a:text-primary prose-a:no-underline hover:prose-a:underline prose-strong:text-white mb-24">
              <ReactMarkdown>{post.content}</ReactMarkdown>
            </div>
          </motion.div>
          
          <hr className="border-white/10 mb-16" />

          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-serif font-bold text-white mb-8">More from Zenlit</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {otherPosts.map((otherPost) => (
                <Link key={otherPost.slug} to={`/blog/${otherPost.slug}`} className="group block bg-white/5 rounded-2xl overflow-hidden hover:bg-white/10 transition-colors">
                  <div className="aspect-video overflow-hidden">
                    <img 
                      src={otherPost.image} 
                      alt={otherPost.title} 
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-accent-gold transition-colors">
                      {otherPost.title}
                    </h3>
                    <div className="flex items-center text-primary font-medium">
                      Read Article <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
};

export default BlogPost;
