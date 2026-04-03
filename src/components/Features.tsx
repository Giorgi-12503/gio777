import { motion } from 'motion/react';
import { Wallet, Layers, Utensils, Clock, Home, HeartHandshake } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function Features() {
  const { t } = useLanguage();

  const features = [
    { icon: <Wallet className="w-8 h-8" />, title: t('features.f1.title'), desc: t('features.f1.desc') },
    { icon: <Layers className="w-8 h-8" />, title: t('features.f2.title'), desc: t('features.f2.desc') },
    { icon: <Utensils className="w-8 h-8" />, title: t('features.f3.title'), desc: t('features.f3.desc') },
    { icon: <Clock className="w-8 h-8" />, title: t('features.f4.title'), desc: t('features.f4.desc') },
    { icon: <Home className="w-8 h-8" />, title: t('features.f5.title'), desc: t('features.f5.desc') },
    { icon: <HeartHandshake className="w-8 h-8" />, title: t('features.f6.title'), desc: t('features.f6.desc') },
  ];

  return (
    <section className="py-24 bg-soft-pink/30 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-serif font-bold text-dark-brown mb-4"
          >
            {t('features.title1')} <span className="text-accent italic">{t('features.title2')}</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-dark-brown/70 max-w-2xl mx-auto"
          >
            {t('features.subtitle')}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-8 rounded-3xl shadow-sm border border-beige hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group"
            >
              <div className="w-16 h-16 bg-cream rounded-2xl flex items-center justify-center text-accent mb-6 group-hover:bg-accent group-hover:text-white transition-colors duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-serif font-bold text-dark-brown mb-3">
                {feature.title}
              </h3>
              <p className="text-dark-brown/70 leading-relaxed">
                {feature.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
