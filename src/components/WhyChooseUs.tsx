import { motion } from 'motion/react';
import { ShieldCheck, Clock, Wallet, Users, Compass, CheckCircle2 } from 'lucide-react';

export default function WhyChooseUs() {
  const reasons = [
    {
      icon: <ShieldCheck size={32} />,
      title: 'High-Quality Materials',
      desc: 'We use only premium, tested materials to ensure the longevity and durability of your home.'
    },
    {
      icon: <Clock size={32} />,
      title: 'On-Time Delivery',
      desc: 'We respect your time and strictly adhere to project timelines for a hassle-free experience.'
    },
    {
      icon: <Wallet size={32} />,
      title: 'Affordable Pricing',
      desc: 'Get the best value for your investment with our transparent and competitive pricing.'
    },
    {
      icon: <Users size={32} />,
      title: 'Experienced Team',
      desc: 'Our team of skilled architects, engineers, and workers bring years of expertise to every project.'
    },
    {
      icon: <Compass size={32} />,
      title: 'Vastu Expertise',
      desc: 'We integrate ancient Vastu principles with modern design for a balanced and positive living space.'
    },
    {
      icon: <CheckCircle2 size={32} />,
      title: 'Quality Assurance',
      desc: 'Rigorous quality checks at every stage of construction to ensure excellence.'
    },
  ];

  return (
    <section className="section-padding bg-brand-primary text-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-brand-secondary font-semibold uppercase tracking-widest mb-4 block">Why Choose Us</span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-8 leading-tight">
              A Commitment to <span className="text-brand-secondary italic">Excellence</span> in Every Brick
            </h2>
            <p className="text-lg text-gray-400 mb-10 leading-relaxed">
              Choosing VastuBuild means choosing peace of mind. We combine traditional values with modern technology to deliver homes that are not just structures, but legacies.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4 bg-white/5 p-6 rounded-2xl border border-white/10">
                <div className="w-12 h-12 bg-brand-secondary text-white rounded-full flex items-center justify-center flex-shrink-0">
                  <CheckCircle2 size={24} />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-xl text-white">100% Satisfaction Guarantee</h4>
                  <p className="text-sm text-gray-400">We don't stop until you're completely happy with your new home.</p>
                </div>
              </div>
              <div className="flex items-center gap-4 bg-white/5 p-6 rounded-2xl border border-white/10">
                <div className="w-12 h-12 bg-brand-secondary text-white rounded-full flex items-center justify-center flex-shrink-0">
                  <CheckCircle2 size={24} />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-xl text-white">Transparent Process</h4>
                  <p className="text-sm text-gray-400">No hidden costs, clear communication, and regular project updates.</p>
                </div>
              </div>
            </div>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-6 relative">
            {reasons.map((reason, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white/5 backdrop-blur-sm p-8 rounded-3xl border border-white/10 hover:bg-white/10 transition-all duration-300 group"
              >
                <div className="text-brand-secondary mb-6 group-hover:scale-110 transition-transform">
                  {reason.icon}
                </div>
                <h3 className="text-xl font-serif font-bold text-white mb-4">{reason.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">
                  {reason.desc}
                </p>
              </motion.div>
            ))}
            {/* Decorative background */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-brand-secondary/5 rounded-full blur-3xl -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
}
