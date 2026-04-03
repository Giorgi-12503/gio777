import { motion } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';

export default function CTA() {
  const { t } = useLanguage();

  return (
    <section className="relative py-32 overflow-hidden flex items-center justify-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1535141192574-5d4897c12636?auto=format&fit=crop&w=1920&q=80"
          alt="Delicious Cake"
          className="w-full h-full object-cover opacity-80"
          referrerPolicy="no-referrer"
          crossOrigin="anonymous"
        />
        <div className="absolute inset-0 bg-dark-brown/60 mix-blend-multiply"></div>
      </div>

      <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-serif font-bold text-cream mb-8 drop-shadow-xl"
        >
          {t('cta.title1')} <br />
          <span className="text-accent italic">{t('cta.title2')}</span>
        </motion.h2>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <a
            href="#location"
            className="inline-block px-10 py-5 bg-cream text-dark-brown rounded-full text-lg font-bold uppercase tracking-widest hover:bg-accent hover:text-white transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-1"
          >
            {t('cta.btn')}
          </a>
        </motion.div>
      </div>
    </section>
  );
}
