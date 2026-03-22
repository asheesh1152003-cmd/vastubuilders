import { motion } from 'motion/react';
import { ShieldCheck, Award, Users, Clock } from 'lucide-react';

export default function About() {
  const stats = [
    { icon: <ShieldCheck size={28} />, title: 'Quality Work', desc: 'Premium materials and skilled craftsmanship.' },
    { icon: <Award size={28} />, title: 'Vastu Experts', desc: 'Ancient wisdom for modern living spaces.' },
    { icon: <Users size={28} />, title: 'Experienced Team', desc: 'A dedicated team of architects and engineers.' },
    { icon: <Clock size={28} />, title: 'On-Time Delivery', desc: 'We respect your time and deadlines.' },
  ];

  return (
    <section id="about" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <img
                src="https://images.unsplash.com/photo-1541915051-d26f68218525?auto=format&fit=crop&q=80&w=800"
                alt="Construction Site"
                className="w-full h-64 object-cover rounded-2xl shadow-lg"
                referrerPolicy="no-referrer"
              />
              <img
                src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&q=80&w=800"
                alt="Architectural Plan"
                className="w-full h-48 object-cover rounded-2xl shadow-lg"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="space-y-4 pt-8">
              <img
                src="https://images.unsplash.com/photo-1593062096033-9a26b09da705?auto=format&fit=crop&q=80&w=800"
                alt="Interior Work"
                className="w-full h-48 object-cover rounded-2xl shadow-lg"
                referrerPolicy="no-referrer"
              />
              <img
                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=800"
                alt="Finished Home"
                className="w-full h-64 object-cover rounded-2xl shadow-lg"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
          {/* Experience Badge */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-br from-brand-secondary to-[#b8860b] text-white p-8 rounded-2xl shadow-2xl text-center border-4 border-white/20 backdrop-blur-sm">
             <span className="block text-4xl font-serif font-bold">15+</span>
             <span className="block text-sm uppercase tracking-widest font-medium">Years of Trust</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-brand-secondary font-semibold uppercase tracking-widest mb-4 block">About VastuBuild</span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-brand-primary mb-6 leading-tight">
            Building Excellence with <span className="text-brand-secondary italic">Ancient Wisdom</span>
          </h2>
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            At VastuBuild, we don't just build houses; we create sanctuaries. With over 15 years of experience in the construction industry, our mission is to deliver high-quality, durable, and Vastu-compliant homes that bring peace, prosperity, and happiness to our clients.
          </p>
          <p className="text-lg text-gray-600 mb-10 leading-relaxed">
            Our team of skilled architects, engineers, and Vastu consultants work in harmony to ensure every corner of your home is optimized for energy flow and structural integrity.
          </p>

          <div className="grid sm:grid-cols-2 gap-8">
            {stats.map((stat, idx) => (
              <div key={idx} className="flex gap-4">
                <div className="text-brand-secondary flex-shrink-0">
                  {stat.icon}
                </div>
                <div>
                  <h4 className="font-serif font-bold text-xl text-brand-primary mb-1">{stat.title}</h4>
                  <p className="text-sm text-gray-500">{stat.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
