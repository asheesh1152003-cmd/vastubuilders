import { motion } from 'motion/react';
import { Home, Hammer, Paintbrush, Compass, Key, ArrowRight } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: <Home size={40} />,
      title: 'Full House Construction',
      desc: 'From foundation to finishing, we handle everything for your dream home.',
      image: 'https://images.unsplash.com/photo-1503387762-592dee58c460?auto=format&fit=crop&q=80&w=800'
    },
    {
      icon: <Hammer size={40} />,
      title: 'Home Renovation',
      desc: 'Modernize your existing space with our expert renovation services.',
      image: 'https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?auto=format&fit=crop&q=80&w=800'
    },
    {
      icon: <Paintbrush size={40} />,
      title: 'Interior & Exterior Work',
      desc: 'Enhance the beauty of your home with premium painting and decor.',
      image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=800'
    },
    {
      icon: <Compass size={40} />,
      title: 'Vastu Planning & Design',
      desc: 'Expert Vastu consultation to ensure harmony and positive energy.',
      image: 'https://images.unsplash.com/photo-1503387837-b154d5074bd2?auto=format&fit=crop&q=80&w=800'
    },
    {
      icon: <Key size={40} />,
      title: 'Turnkey Projects',
      desc: 'Hassle-free construction where we manage everything until the key is handed over.',
      image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=800'
    },
  ];

  return (
    <section id="services" className="section-padding bg-brand-accent/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-brand-secondary font-semibold uppercase tracking-widest mb-4 block">Our Expertise</span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-brand-primary mb-6">
            Comprehensive <span className="text-brand-secondary italic">Construction</span> Services
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We offer a wide range of services to meet all your construction and design needs, always with a focus on quality and Vastu compliance.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-8">
                <div className="w-16 h-16 bg-brand-secondary/10 text-brand-secondary rounded-xl flex items-center justify-center mb-6 group-hover:bg-brand-secondary group-hover:text-white transition-colors duration-300">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-serif font-bold text-brand-primary mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.desc}
                </p>
                <a href="#contact" className="inline-flex items-center gap-2 text-brand-secondary font-bold group/link">
                  <span>Learn More</span>
                  <ArrowRight size={18} className="group-hover/link:translate-x-1 transition-transform" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
