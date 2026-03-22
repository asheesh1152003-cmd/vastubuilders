import { motion } from 'motion/react';
import { Quote, Star } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Rajesh Kumar',
      role: 'Homeowner',
      text: 'VastuBuild transformed our dream into reality. Their attention to detail and Vastu expertise made our home a peaceful sanctuary. Highly recommended!',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200'
    },
    {
      name: 'Priya Sharma',
      role: 'Business Owner',
      text: 'The commercial complex they built for us is not only functional but also aesthetically pleasing. Their professional approach and on-time delivery are commendable.',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200'
    },
    {
      name: 'Amit Patel',
      role: 'IT Professional',
      text: 'Renovating our old house was a big challenge, but VastuBuild handled it with ease. The new design is modern yet respects the original structure.',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200'
    },
  ];

  return (
    <section className="section-padding bg-brand-accent/30 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-brand-secondary font-semibold uppercase tracking-widest mb-4 block">Testimonials</span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-brand-primary mb-6">
            What Our <span className="text-brand-secondary italic">Clients</span> Say
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our clients' satisfaction is our greatest reward. Read what they have to say about their experience with VastuBuild.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-white p-10 rounded-3xl shadow-lg relative group hover:-translate-y-2 transition-transform duration-300"
            >
              <div className="absolute top-0 right-10 -translate-y-1/2 w-12 h-12 bg-brand-secondary text-white rounded-full flex items-center justify-center shadow-lg">
                <Quote size={24} />
              </div>
              
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} className="fill-brand-secondary text-brand-secondary" />
                ))}
              </div>

              <p className="text-gray-600 italic mb-8 leading-relaxed">
                "{testimonial.text}"
              </p>

              <div className="flex items-center gap-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-14 h-14 rounded-full object-cover border-2 border-brand-secondary/20"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <h4 className="font-serif font-bold text-brand-primary text-lg">{testimonial.name}</h4>
                  <span className="text-sm text-gray-500">{testimonial.role}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
