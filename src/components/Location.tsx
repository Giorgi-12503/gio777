import { motion } from 'motion/react';
import { MapPin, Clock, Phone, Navigation, ShoppingBag } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function Location() {
  const { t } = useLanguage();

  return (
    <section id="location" className="py-24 bg-beige relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-serif font-bold text-dark-brown mb-4"
          >
            {t('location.title1')} <span className="text-accent italic">{t('location.title2')}</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-dark-brown/70 max-w-2xl mx-auto"
          >
            {t('location.subtitle')}
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Info Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white p-8 md:p-12 rounded-3xl shadow-lg border border-cream"
          >
            <h3 className="text-2xl font-serif font-bold text-dark-brown mb-8 border-b border-beige pb-4">
              Dona Bakeshop & Cafe
            </h3>
            
            <div className="space-y-6 mb-10">
              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-accent shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-dark-brown">{t('location.branch')}</h4>
                  <p className="text-dark-brown/70">{t('location.address')}</p>
                  <p className="text-sm text-accent mt-1 font-medium italic">{t('location.multiple')}</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <Clock className="w-6 h-6 text-accent shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-dark-brown">{t('location.hoursTitle')}</h4>
                  <p className="text-dark-brown/70">{t('location.hours')}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Phone className="w-6 h-6 text-accent shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-dark-brown">{t('location.contact')}</h4>
                  <p className="text-dark-brown/70">+995 555 123 456</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://maps.google.com/?q=Dona+Bakeshop+Batumi"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-dark-brown text-cream rounded-xl text-sm font-bold uppercase tracking-widest hover:bg-accent transition-colors"
              >
                <Navigation className="w-4 h-4" /> {t('location.directions')}
              </a>
            </div>
          </motion.div>

          {/* Map Side (Placeholder) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="h-[500px] rounded-3xl overflow-hidden shadow-lg relative group"
          >
            <div className="absolute inset-0 bg-dark-brown/10 group-hover:bg-transparent transition-colors duration-500 z-10 pointer-events-none"></div>
            <img 
              src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80" 
              alt="Map Location" 
              className="w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 transition-all duration-700"
              referrerPolicy="no-referrer"
              crossOrigin="anonymous"
            />
            {/* Fake map marker */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 flex flex-col items-center">
              <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center shadow-xl animate-bounce">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <div className="w-4 h-1 bg-dark-brown/30 rounded-full blur-sm mt-2"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
