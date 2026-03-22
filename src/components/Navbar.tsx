import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Phone } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-brand-secondary rounded-lg flex items-center justify-center text-white font-serif font-bold text-xl">
            V
          </div>
          <span className={`text-2xl font-serif font-bold ${isScrolled ? 'text-brand-primary' : 'text-white'}`}>
            VastuBuild
          </span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`font-medium transition-colors hover:text-brand-secondary ${
                isScrolled ? 'text-brand-primary' : 'text-white'
              }`}
            >
              {link.name}
            </a>
          ))}
          <a
            href="tel:+1234567890"
            className="flex items-center gap-2 bg-brand-secondary text-white px-5 py-2 rounded-full font-medium hover:bg-brand-secondary/90 transition-all"
          >
            <Phone size={18} />
            <span>Call Now</span>
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className={`md:hidden p-2 ${isScrolled ? 'text-brand-primary' : 'text-white'}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-white shadow-xl py-6 px-6 md:hidden flex flex-col gap-4"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-brand-primary text-lg font-medium hover:text-brand-secondary"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a
              href="tel:+1234567890"
              className="flex items-center justify-center gap-2 bg-brand-secondary text-white py-3 rounded-xl font-medium"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <Phone size={20} />
              <span>Call Now</span>
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
