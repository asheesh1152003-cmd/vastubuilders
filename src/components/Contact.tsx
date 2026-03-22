import { motion } from 'motion/react';
import { Phone, Mail, MapPin, Send, MessageCircle } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="section-padding bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-brand-secondary font-semibold uppercase tracking-widest mb-4 block">Contact Us</span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-brand-primary mb-8 leading-tight">
              Let's Build Your <span className="text-brand-secondary italic">Future</span> Together
            </h2>
            <p className="text-lg text-gray-600 mb-10 leading-relaxed">
              Have a project in mind? We'd love to hear from you. Reach out to us for a free consultation and quote.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-6 group">
                <div className="w-14 h-14 bg-brand-secondary/10 text-brand-secondary rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:bg-brand-secondary group-hover:text-white transition-colors duration-300">
                  <Phone size={28} />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-xl text-brand-primary mb-1">Phone</h4>
                  <p className="text-gray-500">+1 (234) 567-890</p>
                  <p className="text-gray-500">+1 (987) 654-321</p>
                </div>
              </div>
              <div className="flex items-start gap-6 group">
                <div className="w-14 h-14 bg-brand-secondary/10 text-brand-secondary rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:bg-brand-secondary group-hover:text-white transition-colors duration-300">
                  <Mail size={28} />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-xl text-brand-primary mb-1">Email</h4>
                  <p className="text-gray-500">info@vastubuild.com</p>
                  <p className="text-gray-500">support@vastubuild.com</p>
                </div>
              </div>
              <div className="flex items-start gap-6 group">
                <div className="w-14 h-14 bg-brand-secondary/10 text-brand-secondary rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:bg-brand-secondary group-hover:text-white transition-colors duration-300">
                  <MapPin size={28} />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-xl text-brand-primary mb-1">Location</h4>
                  <p className="text-gray-500">123 Construction Avenue, Suite 456</p>
                  <p className="text-gray-500">New York, NY 10001</p>
                </div>
              </div>
            </div>

            <div className="mt-12 flex gap-4">
               <a
                href="https://wa.me/1234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-[#25D366] text-white px-8 py-4 rounded-2xl font-bold hover:scale-105 transition-transform shadow-lg"
              >
                <MessageCircle size={24} />
                <span>WhatsApp Us</span>
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-brand-accent/30 p-10 rounded-3xl shadow-xl border border-white/50"
          >
            <h3 className="text-3xl font-serif font-bold text-brand-primary mb-8">Send a Message</h3>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-brand-primary uppercase tracking-widest">Full Name</label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-secondary/50 transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-brand-primary uppercase tracking-widest">Email Address</label>
                  <input
                    type="email"
                    placeholder="john@example.com"
                    className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-secondary/50 transition-all"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-brand-primary uppercase tracking-widest">Service Interested In</label>
                <select className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-secondary/50 transition-all">
                  <option>Full House Construction</option>
                  <option>Home Renovation</option>
                  <option>Interior & Exterior Work</option>
                  <option>Vastu Planning & Design</option>
                  <option>Turnkey Projects</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-brand-primary uppercase tracking-widest">Message</label>
                <textarea
                  rows={4}
                  placeholder="Tell us about your project..."
                  className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-secondary/50 transition-all"
                />
              </div>
              <button className="w-full btn-primary flex items-center justify-center gap-2 py-4 text-lg">
                <span>Send Message</span>
                <Send size={20} />
              </button>
            </form>
          </motion.div>
        </div>

        {/* Map Placeholder */}
        <div className="mt-20 h-96 bg-gray-200 rounded-3xl overflow-hidden relative shadow-inner">
           <img
             src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&q=80&w=1600"
             alt="Map Placeholder"
             className="w-full h-full object-cover opacity-50 grayscale"
             referrerPolicy="no-referrer"
           />
           <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-white p-8 rounded-2xl shadow-2xl text-center max-w-sm border border-brand-secondary/20">
                 <MapPin size={48} className="text-brand-secondary mx-auto mb-4" />
                 <h4 className="font-serif font-bold text-2xl text-brand-primary mb-2">Our Office</h4>
                 <p className="text-gray-500">123 Construction Avenue, Suite 456, New York, NY 10001</p>
                 <button className="mt-6 text-brand-secondary font-bold hover:underline">Get Directions</button>
              </div>
           </div>
        </div>
      </div>
    </section>
  );
}
