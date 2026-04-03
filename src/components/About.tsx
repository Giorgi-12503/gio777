import { motion } from 'motion/react';
import { Heart, Star, MapPin } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function About() {
  const { t } = useLanguage();

  const stats = [
    { icon: <Heart className="w-8 h-8" />, value: "100+", label: t('about.stat1') },
    { icon: <Star className="w-8 h-8" />, value: "10k+", label: t('about.stat2') },
    { icon: <MapPin className="w-8 h-8" />, value: "3", label: t('about.stat3') },
  ];

  return (
    <section id="about" className="py-24 bg-cream relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=800&q=80"
                alt="Dona Cafe Pastries"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
                crossOrigin="anonymous"
              />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-soft-pink rounded-full -z-10 blur-2xl opacity-60"></div>
            <div className="absolute -top-8 -left-8 w-64 h-64 bg-beige rounded-full -z-10 blur-3xl opacity-60"></div>
          </motion.div>

          {/* Text Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-dark-brown">
              {t('about.title1')} <span className="text-accent italic">{t('about.title2')}</span>
            </h2>
            
            <div className="space-y-4 text-lg text-dark-brown/80 mb-10">
              <p>
                {t('about.p1')}
              </p>
              <p>
                {t('about.p2')}
              </p>
              <p className="font-medium text-dark-brown">
                {t('about.p3')}
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  className="flex flex-col items-center sm:items-start text-center sm:text-left"
                >
                  <div className="text-accent mb-3 bg-beige p-4 rounded-full">
                    {stat.icon}
                  </div>
                  <h3 className="text-3xl font-serif font-bold text-dark-brown mb-1">{stat.value}</h3>
                  <p className="text-sm uppercase tracking-wider text-dark-brown/60 font-medium">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
