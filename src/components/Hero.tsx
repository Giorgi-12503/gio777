import { motion } from 'motion/react';
import { ChevronDown, CakeSlice, Coffee, Croissant } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-dark-brown">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1551024506-0bccd828d307?auto=format&fit=crop&w=1920&q=80"
          alt="Dona Cafe Interior"
          className="w-full h-full object-cover opacity-60"
          referrerPolicy="no-referrer"
          crossOrigin="anonymous"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-dark-brown/40 via-transparent to-cream"></div>
      </div>

      {/* Floating Icons */}
      <motion.div
        animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 left-1/4 z-10 text-cream/30 hidden md:block"
      >
        <CakeSlice size={64} />
      </motion.div>
      <motion.div
        animate={{ y: [0, 20, 0], rotate: [0, -10, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-1/3 right-1/4 z-10 text-cream/30 hidden md:block"
      >
        <Coffee size={80} />
      </motion.div>
      <motion.div
        animate={{ y: [0, -15, 0], rotate: [0, 15, 0] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute top-1/3 right-1/3 z-10 text-cream/30 hidden md:block"
      >
        <Croissant size={48} />
      </motion.div>

      {/* Content */}
      <div className="relative z-20 text-center px-6 max-w-4xl mx-auto mt-20">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl lg:text-8xl font-serif text-cream mb-6 leading-tight drop-shadow-lg"
        >
          {t('hero.title1')} <br />
          <span className="text-accent italic">{t('hero.title2')}</span>
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg md:text-2xl text-cream/90 mb-10 font-light max-w-2xl mx-auto drop-shadow-md"
        >
          {t('hero.subtitle')}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#menu"
            className="px-8 py-4 bg-accent text-dark-brown rounded-full text-sm font-bold uppercase tracking-widest hover:bg-cream transition-colors w-full sm:w-auto text-center"
          >
            {t('hero.viewMenu')}
          </a>
          <a
            href="#location"
            className="px-8 py-4 bg-transparent border border-cream text-cream rounded-full text-sm font-bold uppercase tracking-widest hover:bg-cream hover:text-dark-brown transition-colors w-full sm:w-auto text-center"
          >
            {t('hero.visitUs')}
          </a>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 text-dark-brown flex flex-col items-center gap-2"
      >
        <span className="text-xs uppercase tracking-widest font-medium">Scroll</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="w-6 h-6" />
        </motion.div>
      </motion.a>
    </section>
  );
}
