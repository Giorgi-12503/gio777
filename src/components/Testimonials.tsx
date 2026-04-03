import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const testimonialIds = ['t1', 't2', 't3', 't4', 't5'];

export default function Testimonials() {
  const { t } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonialIds.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const next = () => setCurrentIndex((prev) => (prev + 1) % testimonialIds.length);
  const prev = () => setCurrentIndex((prev) => (prev - 1 + testimonialIds.length) % testimonialIds.length);

  return (
    <section className="py-24 bg-dark-brown text-cream relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)', backgroundSize: '32px 32px' }}></div>
      
      <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
        <Quote className="w-16 h-16 mx-auto text-accent mb-8 opacity-50" />
        
        <div className="relative h-64 sm:h-48">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0 flex flex-col items-center justify-center"
            >
              <p className="text-2xl md:text-3xl font-serif font-medium leading-relaxed mb-8">
                "{t(`testimonials.${testimonialIds[currentIndex]}.text`)}"
              </p>
              <div>
                <h4 className="font-bold tracking-wider uppercase text-sm text-accent">
                  {t(`testimonials.${testimonialIds[currentIndex]}.author`)}
                </h4>
                <p className="text-cream/60 text-sm mt-1">
                  {t('testimonials.role')}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Controls */}
        <div className="flex items-center justify-center gap-6 mt-12">
          <button 
            onClick={prev}
            className="p-2 rounded-full border border-cream/20 hover:bg-cream/10 transition-colors"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <div className="flex gap-2">
            {testimonialIds.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`w-2.5 h-2.5 rounded-full transition-colors ${
                  idx === currentIndex ? 'bg-accent' : 'bg-cream/20'
                }`}
              />
            ))}
          </div>
          <button 
            onClick={next}
            className="p-2 rounded-full border border-cream/20 hover:bg-cream/10 transition-colors"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  );
}
