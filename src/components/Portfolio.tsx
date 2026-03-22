import { motion } from 'motion/react';
import { useState } from 'react';
import { LayoutGrid, Maximize2, ArrowRight } from 'lucide-react';

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('All');

  const projects = [
    {
      title: 'Modern Villa',
      category: 'Residential',
      image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=800',
      desc: 'A luxurious Vastu-compliant villa with modern amenities.'
    },
    {
      title: 'Urban Apartment',
      category: 'Residential',
      image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=800',
      desc: 'Space-optimized urban living with elegant interiors.'
    },
    {
      title: 'Commercial Complex',
      category: 'Commercial',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800',
      desc: 'A state-of-the-art commercial building with efficient design.'
    },
    {
      title: 'Heritage Renovation',
      category: 'Renovation',
      image: 'https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?auto=format&fit=crop&q=80&w=800',
      desc: 'Restoring the glory of a heritage property with modern touches.'
    },
    {
      title: 'Eco-Friendly Home',
      category: 'Residential',
      image: 'https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&q=80&w=800',
      desc: 'Sustainable living with energy-efficient construction.'
    },
    {
      title: 'Luxury Penthouse',
      category: 'Interior',
      image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&w=800',
      desc: 'Breathtaking interior design for a high-end penthouse.'
    },
  ];

  const filters = ['All', 'Residential', 'Commercial', 'Renovation', 'Interior'];

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(p => p.category === activeFilter);

  return (
    <section id="projects" className="section-padding bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <span className="text-brand-secondary font-semibold uppercase tracking-widest mb-4 block">Our Portfolio</span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-brand-primary mb-6 leading-tight">
              Showcasing Our <span className="text-brand-secondary italic">Masterpieces</span>
            </h2>
            <p className="text-lg text-gray-600">
              Take a look at some of our completed projects that reflect our commitment to quality, design, and Vastu principles.
            </p>
          </div>
          
          <div className="flex flex-wrap gap-2">
            {filters.map(filter => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-6 py-2 rounded-full font-medium transition-all ${
                  activeFilter === filter 
                    ? 'bg-brand-secondary text-white shadow-md' 
                    : 'bg-brand-accent/50 text-brand-primary hover:bg-brand-accent'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, idx) => (
            <motion.div
              key={project.title}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="group relative rounded-3xl overflow-hidden shadow-lg aspect-[4/5]"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-primary via-brand-primary/40 to-brand-secondary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                <span className="text-brand-secondary font-bold uppercase tracking-widest text-sm mb-2">{project.category}</span>
                <h3 className="text-3xl font-serif font-bold text-white mb-4">{project.title}</h3>
                <p className="text-gray-300 mb-6 line-clamp-2">{project.desc}</p>
                <div className="flex items-center gap-4">
                  <button className="w-12 h-12 bg-brand-secondary text-white rounded-full flex items-center justify-center hover:scale-110 transition-transform">
                    <Maximize2 size={20} />
                  </button>
                  <button className="flex items-center gap-2 text-white font-bold group/link">
                    <span>View Details</span>
                    <ArrowRight size={18} className="group-hover/link:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 bg-brand-primary rounded-3xl p-12 relative overflow-hidden">
          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="max-w-xl">
              <h3 className="text-3xl md:text-4xl font-serif font-bold text-white mb-6">
                Ready to Start Your <span className="text-brand-secondary italic">Dream Project?</span>
              </h3>
              <p className="text-gray-400 text-lg mb-8">
                Let's collaborate to build a home that's not just beautiful, but also brings harmony and prosperity to your life.
              </p>
              <button className="btn-primary">Get a Free Consultation</button>
            </div>
            <div className="grid grid-cols-2 gap-4">
               <div className="bg-white/5 backdrop-blur-sm p-6 rounded-2xl border border-white/10 text-center">
                  <span className="block text-4xl font-serif font-bold text-brand-secondary mb-2">250+</span>
                  <span className="text-sm text-gray-400 uppercase tracking-widest">Happy Clients</span>
               </div>
               <div className="bg-white/5 backdrop-blur-sm p-6 rounded-2xl border border-white/10 text-center">
                  <span className="block text-4xl font-serif font-bold text-brand-secondary mb-2">15+</span>
                  <span className="text-sm text-gray-400 uppercase tracking-widest">Years Exp.</span>
               </div>
               <div className="bg-white/5 backdrop-blur-sm p-6 rounded-2xl border border-white/10 text-center">
                  <span className="block text-4xl font-serif font-bold text-brand-secondary mb-2">100%</span>
                  <span className="text-sm text-gray-400 uppercase tracking-widest">Vastu Focus</span>
               </div>
               <div className="bg-white/5 backdrop-blur-sm p-6 rounded-2xl border border-white/10 text-center">
                  <span className="block text-4xl font-serif font-bold text-brand-secondary mb-2">50+</span>
                  <span className="text-sm text-gray-400 uppercase tracking-widest">Team Members</span>
               </div>
            </div>
          </div>
          {/* Decorative background */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-brand-secondary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        </div>
      </div>
    </section>
  );
}
