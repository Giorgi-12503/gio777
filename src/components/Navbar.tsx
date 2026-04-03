import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Globe, ChevronDown } from 'lucide-react';
import { useLanguage, Language } from '../context/LanguageContext';
import Logo from './Logo';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const { lang, setLang, t } = useLanguage();
  const langRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (langRef.current && !langRef.current.contains(event.target as Node)) {
        setIsLangOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navLinks = [
    { name: t('nav.about'), href: '#about' },
    { name: t('nav.menu'), href: '#menu' },
    { name: t('nav.coffee'), href: '#coffee' },
    { name: t('nav.gallery'), href: '#gallery' },
    { name: t('nav.visit'), href: '#location' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-cream/90 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <a href="#" className="flex items-center gap-2 text-2xl font-serif font-bold text-dark-brown">
          <Logo className="w-12 h-12 text-dark-brown" />
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium tracking-wide uppercase hover:text-accent transition-colors"
            >
              {link.name}
            </a>
          ))}
          
          {/* Language Switcher */}
          <div className="relative" ref={langRef}>
            <button 
              onClick={() => setIsLangOpen(!isLangOpen)}
              className="flex items-center gap-1 text-sm font-medium hover:text-accent transition-colors px-3 py-1.5 border border-dark-brown/20 rounded-full bg-white/50 backdrop-blur-sm"
            >
              <Globe className="w-4 h-4" />
              <span>{lang}</span>
              <ChevronDown className="w-3 h-3" />
            </button>
            <AnimatePresence>
              {isLangOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute top-full right-0 mt-2 w-24 bg-white rounded-xl shadow-lg border border-beige overflow-hidden py-1"
                >
                  {['EN', 'GE', 'RU'].map((l) => (
                    <button
                      key={l}
                      onClick={() => {
                        setLang(l);
                        setIsLangOpen(false);
                      }}
                      className={`w-full text-left px-4 py-2 text-sm hover:bg-cream transition-colors ${lang === l ? 'text-accent font-bold' : 'text-dark-brown'}`}
                    >
                      {l === 'EN' ? 'English' : l === 'GE' ? 'ქართული' : 'Русский'}
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <a
            href="#location"
            className="px-6 py-2 bg-dark-brown text-cream rounded-full text-sm font-medium uppercase tracking-wide hover:bg-accent transition-colors"
          >
            {t('nav.order')}
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden flex items-center gap-4">
          <div className="relative">
            <button 
              onClick={() => setIsLangOpen(!isLangOpen)}
              className="flex items-center gap-1 text-sm font-medium hover:text-accent transition-colors px-3 py-1.5 border border-dark-brown/20 rounded-full bg-white/50 backdrop-blur-sm"
            >
              <Globe className="w-4 h-4" />
              <span>{lang}</span>
            </button>
            <AnimatePresence>
              {isLangOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute top-full right-0 mt-2 w-24 bg-white rounded-xl shadow-lg border border-beige overflow-hidden py-1"
                >
                  {['EN', 'GE', 'RU'].map((l) => (
                    <button
                      key={l}
                      onClick={() => {
                        setLang(l);
                        setIsLangOpen(false);
                      }}
                      className={`w-full text-left px-4 py-2 text-sm hover:bg-cream transition-colors ${lang === l ? 'text-accent font-bold' : 'text-dark-brown'}`}
                    >
                      {l === 'EN' ? 'English' : l === 'GE' ? 'ქართული' : 'Русский'}
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          <button
            className="text-dark-brown"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-cream/95 backdrop-blur-md border-t border-beige overflow-hidden"
          >
            <div className="px-6 py-4 flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-lg font-medium text-dark-brown hover:text-accent transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
