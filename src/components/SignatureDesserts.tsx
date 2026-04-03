import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const desserts = [
  { id: 'd1', img: "1616541823729-00fe0aacd32c" },
  { id: 'd2', img: "1587314168485-3236d6710814" },
  { id: 'd3', img: "1533134242443-d4fd215305ad" },
  { id: 'd4', img: "1603532648955-039310d9ed75" },
  { id: 'd5', img: "1464305795204-6f5bbfc7fb81" },
  { id: 'd6', img: "1621303837174-89787a7d4729" },
  { id: 'd7', img: "1569864358642-9d1684040f43" },
  { id: 'd8', img: "1550617931-e17a7b70dce2" },
];

export default function SignatureDesserts() {
  const { t } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <section id="menu" className="py-24 bg-beige relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-serif font-bold text-dark-brown mb-4"
          >
            {t('menu.title1')} <span className="text-accent italic">{t('menu.title2')}</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-dark-brown/70 max-w-2xl mx-auto"
          >
            {t('menu.subtitle')}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {desserts.map((dessert, index) => (
            <motion.div
              key={dessert.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-square overflow-hidden rounded-2xl mb-4 shadow-md bg-white">
                <img
                  src={`https://images.unsplash.com/photo-${dessert.img}?auto=format&fit=crop&w=600&q=80`}
                  alt={t(`desserts.${dessert.id}.name`)}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                  crossOrigin="anonymous"
                />
                <div className="absolute inset-0 bg-dark-brown/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <h3 className="text-xl font-serif font-bold text-dark-brown mb-2 group-hover:text-accent transition-colors">
                {t(`desserts.${dessert.id}.name`)}
              </h3>
              <p className="text-sm text-dark-brown/70">
                {t(`desserts.${dessert.id}.desc`)}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <button
            onClick={() => setIsMenuOpen(true)}
            className="inline-block px-8 py-4 border-2 border-dark-brown text-dark-brown rounded-full text-sm font-bold uppercase tracking-widest hover:bg-dark-brown hover:text-cream transition-colors cursor-pointer"
          >
            {t('menu.viewFull')}
          </button>
        </div>
      </div>

      {/* Menu Modal */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-dark-brown/90 backdrop-blur-sm p-4"
            onClick={() => setIsMenuOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="bg-cream p-8 md:p-12 rounded-3xl max-w-lg w-full text-center relative shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute top-4 right-4 text-dark-brown/50 hover:text-accent transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                <X className="w-6 h-6" />
              </button>
              <h3 className="text-3xl font-serif font-bold text-dark-brown mb-4">{t('modal.title')}</h3>
              
              <div className="max-h-[60vh] overflow-y-auto mb-8 text-left space-y-4 pr-2 custom-scrollbar">
                {desserts.map((dessert) => (
                  <div key={dessert.id} className="flex justify-between items-center border-b border-beige pb-3">
                    <div>
                      <h4 className="font-bold text-dark-brown">{t(`desserts.${dessert.id}.name`)}</h4>
                      <p className="text-sm text-dark-brown/70">{t(`desserts.${dessert.id}.desc`)}</p>
                    </div>
                  </div>
                ))}
                <div className="pt-4 text-center text-sm text-dark-brown/50 italic">
                  {t('modal.comingSoon')}
                </div>
              </div>

              <button
                onClick={() => setIsMenuOpen(false)}
                className="px-8 py-3 bg-accent text-white rounded-full text-sm font-bold uppercase tracking-widest hover:bg-dark-brown transition-colors w-full"
              >
                {t('modal.close')}
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
