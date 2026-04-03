import { motion } from 'motion/react';
import { Facebook, Instagram, Twitter, ArrowUp } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import Logo from './Logo';

export default function Footer() {
  const { t } = useLanguage();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-dark-brown text-cream pt-20 pb-10 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16 border-b border-cream/10 pb-16">
          
          {/* Brand */}
          <div className="col-span-1 lg:col-span-2">
            <a href="#" className="flex items-center gap-2 text-3xl font-serif font-bold text-cream mb-6">
              <Logo className="w-12 h-12 text-cream" />
            </a>
            <p className="text-cream/60 max-w-sm mb-8 leading-relaxed">
              {t('footer.desc')}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold uppercase tracking-widest mb-6 text-accent">{t('footer.explore')}</h4>
            <ul className="space-y-4 text-cream/70">
              <li><a href="#about" className="hover:text-cream transition-colors">{t('nav.about')}</a></li>
              <li><a href="#menu" className="hover:text-cream transition-colors">{t('nav.menu')}</a></li>
              <li><a href="#coffee" className="hover:text-cream transition-colors">{t('nav.coffee')}</a></li>
              <li><a href="#gallery" className="hover:text-cream transition-colors">{t('nav.gallery')}</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-bold uppercase tracking-widest mb-6 text-accent">{t('footer.contact')}</h4>
            <ul className="space-y-4 text-cream/70">
              <li>{t('location.address')}</li>
              <li>+995 555 123 456</li>
              <li>{t('footer.email')}</li>
              <li>{t('footer.open')}</li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-cream/40">
          <p>&copy; {new Date().getFullYear()} {t('footer.rights')}</p>
          <div className="flex gap-6">
            <span className="cursor-pointer hover:text-cream transition-colors">{t('footer.privacy')}</span>
            <span className="cursor-pointer hover:text-cream transition-colors">{t('footer.terms')}</span>
          </div>
        </div>
      </div>

      {/* Back to Top */}
      <button
        onClick={scrollToTop}
        className="absolute bottom-10 right-6 md:right-10 w-12 h-12 bg-accent text-white rounded-full flex items-center justify-center shadow-lg hover:-translate-y-2 transition-transform duration-300"
        aria-label="Back to top"
      >
        <ArrowUp className="w-6 h-6" />
      </button>
    </footer>
  );
}
