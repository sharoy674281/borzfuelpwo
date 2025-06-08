import React from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { ProductBenefits } from './components/ProductBenefits';
import { Testimonials } from './components/Testimonials';
import { Ingredients } from './components/Ingredients';
import { AboutSection } from './components/AboutSection';
import { BuySection } from './components/BuySection';
import { Footer } from './components/Footer';
export function App() {
  return <div className="bg-gradient-to-b from-gray-950 to-black text-white min-h-screen w-full">
      <Header />
      <main>
        <HeroSection />
        <ProductBenefits />
        <Testimonials />
        <Ingredients />
        <AboutSection />
        <BuySection />
      </main>
      <Footer />
    </div>;
}