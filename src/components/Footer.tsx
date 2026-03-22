import { Facebook, Twitter, Instagram, Linkedin, ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-brand-primary text-white pt-20 pb-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-brand-secondary rounded-lg flex items-center justify-center text-white font-serif font-bold text-xl">
                V
              </div>
              <span className="text-2xl font-serif font-bold text-white">
                VastuBuild
              </span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Building excellence with ancient wisdom. We specialize in high-quality, Vastu-compliant construction services for your dream home.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-brand-secondary transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-brand-secondary transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-brand-secondary transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-brand-secondary transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-xl font-serif font-bold text-white mb-8">Quick Links</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-gray-400 hover:text-brand-secondary transition-colors">Home</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-brand-secondary transition-colors">About Us</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-brand-secondary transition-colors">Our Services</a></li>
              <li><a href="#projects" className="text-gray-400 hover:text-brand-secondary transition-colors">Portfolio</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-brand-secondary transition-colors">Contact Us</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-serif font-bold text-white mb-8">Services</h4>
            <ul className="space-y-4">
              <li><a href="#services" className="text-gray-400 hover:text-brand-secondary transition-colors">Full House Construction</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-brand-secondary transition-colors">Home Renovation</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-brand-secondary transition-colors">Interior & Exterior Work</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-brand-secondary transition-colors">Vastu Planning & Design</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-brand-secondary transition-colors">Turnkey Projects</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-serif font-bold text-white mb-8">Newsletter</h4>
            <p className="text-gray-400 mb-6">Subscribe to get the latest news and updates about our projects.</p>
            <form className="space-y-4">
              <input
                type="email"
                placeholder="Your Email"
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-secondary/50 transition-all text-white"
              />
              <button className="w-full btn-primary py-3">Subscribe</button>
            </form>
          </div>
        </div>

        <div className="pt-10 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} VastuBuild Construction. All rights reserved.
          </p>
          <div className="flex gap-8 text-gray-500 text-sm">
            <a href="#" className="hover:text-brand-secondary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-brand-secondary transition-colors">Terms of Service</a>
          </div>
          <button
            onClick={scrollToTop}
            className="w-12 h-12 bg-brand-secondary text-white rounded-full flex items-center justify-center hover:scale-110 transition-transform shadow-lg"
          >
            <ArrowUp size={24} />
          </button>
        </div>
      </div>
    </footer>
  );
}
