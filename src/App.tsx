/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { LanguageProvider } from './context/LanguageContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import SignatureDesserts from './components/SignatureDesserts';
import Coffee from './components/Coffee';
import Features from './components/Features';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import Location from './components/Location';
import CTA from './components/CTA';
import Footer from './components/Footer';

export default function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-cream font-sans text-dark-brown selection:bg-accent selection:text-white">
        <Navbar />
        <main>
          <Hero />
          <About />
          <SignatureDesserts />
          <Coffee />
          <Features />
          <Gallery />
          <Testimonials />
          <Location />
          <CTA />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
}
