import { motion } from 'motion/react';
import { ArrowRight, CheckCircle } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-brand-primary">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1503387762-592dee58c460?auto=format&fit=crop&q=80&w=2000"
          alt="Modern Architecture"
          className="w-full h-full object-cover opacity-40"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-brand-primary via-brand-primary/90 to-brand-secondary/10" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <div className="inline-flex items-center gap-2 bg-brand-secondary/20 text-brand-secondary px-4 py-1.5 rounded-full text-sm font-semibold mb-6 border border-brand-secondary/30">
            <CheckCircle size={16} />
            <span>Vastu-Compliant Construction Experts</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-white leading-tight mb-6">
            Building Your Dream Home with <span className="text-brand-secondary italic">Trust & Vastu</span> Expertise
          </h1>
          
          <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-lg leading-relaxed">
            We transform your vision into reality with premium materials, expert craftsmanship, and ancient Vastu wisdom for a harmonious living space.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="btn-primary flex items-center justify-center gap-2 group">
              <span>Get Free Quote</span>
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="btn-outline !text-white !border-white/30 hover:!bg-white/10 flex items-center justify-center gap-2">
              <span>Contact Now</span>
            </button>
          </div>

          <div className="mt-12 flex items-center gap-8">
            <div className="flex flex-col">
              <span className="text-3xl font-serif font-bold text-white">15+</span>
              <span className="text-sm text-gray-400 uppercase tracking-wider">Years Exp.</span>
            </div>
            <div className="w-px h-10 bg-white/20" />
            <div className="flex flex-col">
              <span className="text-3xl font-serif font-bold text-white">250+</span>
              <span className="text-sm text-gray-400 uppercase tracking-wider">Projects Done</span>
            </div>
            <div className="w-px h-10 bg-white/20" />
            <div className="flex flex-col">
              <span className="text-3xl font-serif font-bold text-white">100%</span>
              <span className="text-sm text-gray-400 uppercase tracking-wider">Vastu Compliant</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="hidden lg:block relative"
        >
          <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border-8 border-white/10 animate-float">
            <img
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1200"
              alt="Dream Home"
              className="w-full h-auto"
              referrerPolicy="no-referrer"
            />
          </div>
          {/* Decorative elements */}
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-brand-secondary rounded-full opacity-20 blur-3xl" />
          <div className="absolute -bottom-10 -left-10 w-60 h-60 bg-brand-secondary rounded-full opacity-10 blur-3xl" />
        </motion.div>
      </div>
    </section>
  );
}
