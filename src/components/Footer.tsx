import { Twitter, Instagram, Linkedin, Github } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-midnight border-t border-white/5 pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <div className="space-y-6">
            <img src="/assets/Zenlit logo.png" alt="Zenlit" className="h-8 w-auto opacity-80" />
            <p className="text-lavender/60 text-sm leading-relaxed max-w-xs">
              Drive safer. Earn ZNLT daily. Redeem when you want.
            </p>
          </div>

          {/* Links Column 1 */}
          <div className="space-y-4">
            <h4 className="text-white font-serif font-semibold">Company</h4>
            <ul className="space-y-2 text-sm text-lavender/60">
              <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Links Column 2 */}
          <div className="space-y-4">
            <h4 className="text-white font-serif font-semibold">Legal</h4>
            <ul className="space-y-2 text-sm text-lavender/60">
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h4 className="text-white font-serif font-semibold">Stay Connected</h4>
            <div className="flex flex-col gap-2">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-sm text-white placeholder:text-white/20 focus:outline-none focus:border-primary/50 transition-colors"
              />
              <button className="bg-primary hover:bg-primary-light text-white text-sm font-medium py-2 rounded-lg transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-lavender/40">
            © {new Date().getFullYear()} Zenlit Technologies. All rights reserved.
          </p>
          
          <div className="flex items-center gap-6">
            <a href="#" className="text-lavender/40 hover:text-white transition-colors"><Twitter size={18} /></a>
            <a href="#" className="text-lavender/40 hover:text-white transition-colors"><Instagram size={18} /></a>
            <a href="#" className="text-lavender/40 hover:text-white transition-colors"><Linkedin size={18} /></a>
            <a href="#" className="text-lavender/40 hover:text-white transition-colors"><Github size={18} /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
