import { motion } from 'motion/react';
import { Coffee as CoffeeIcon, CupSoda, Droplets, Flame } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function Coffee() {
  const { t } = useLanguage();

  const coffeeTypes = [
    { icon: <CoffeeIcon className="w-6 h-6" />, name: t('coffee.c1.name') },
    { icon: <CupSoda className="w-6 h-6" />, name: t('coffee.c2.name') },
    { icon: <Droplets className="w-6 h-6" />, name: t('coffee.c3.name') },
    { icon: <Flame className="w-6 h-6" />, name: t('coffee.c4.name') },
  ];

  return (
    <section id="coffee" className="py-24 bg-cream relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Text Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-1"
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-dark-brown">
              {t('coffee.title1')} <br />
              <span className="text-accent italic">{t('coffee.title2')}</span>
            </h2>
            
            <p className="text-lg text-dark-brown/80 mb-10 max-w-lg">
              {t('coffee.p1')}
            </p>

            <div className="grid grid-cols-2 gap-6">
              {coffeeTypes.map((type, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  className="flex items-center gap-4 bg-white p-4 rounded-2xl shadow-sm border border-beige hover:border-accent/50 transition-colors"
                >
                  <div className="text-accent bg-beige p-3 rounded-xl">
                    {type.icon}
                  </div>
                  <span className="font-medium text-dark-brown">{type.name}</span>
                </motion.div>
              ))}
            </div>
            
            <div className="mt-12">
              <a
                href="#menu"
                className="inline-flex items-center gap-2 text-accent font-bold uppercase tracking-widest hover:text-dark-brown transition-colors"
              >
                {t('coffee.explore')} <CoffeeIcon className="w-5 h-5" />
              </a>
            </div>
          </motion.div>

          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="order-1 lg:order-2 relative"
          >
            <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl relative z-10">
              <img
                src="https://images.unsplash.com/photo-1497935586351-b67a49e012bf?auto=format&fit=crop&w=800&q=80"
                alt="Artisan Coffee"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
                crossOrigin="anonymous"
              />
            </div>
            {/* Decorative element */}
            <div className="absolute top-1/2 -translate-y-1/2 -right-12 w-64 h-64 bg-accent/20 rounded-full -z-0 blur-3xl"></div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
