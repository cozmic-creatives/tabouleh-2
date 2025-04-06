
import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import FeaturedDishes from '@/components/FeaturedDishes';
import AtmosphereGallery from '@/components/AtmosphereGallery';
import AboutSection from '@/components/AboutSection';
import Footer from '@/components/Footer';
import OrderButton from '@/components/OrderButton';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <FeaturedDishes />
        <AtmosphereGallery />
        <AboutSection />
        
        <section className="py-16 bg-spice-600 text-white text-center">
          <div className="container-custom mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Klaar om te Bestellen?</h2>
            <p className="text-lg opacity-90 max-w-2xl mx-auto mb-8">
              Geniet van authentieke Syrische keuken bij TABOULEH 2.
              Beschikbaar voor afhalen, bezorging, of dineer ter plaatse!
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
              <OrderButton className="bg-white hover:bg-gray-100 text-spice-600" text="Plaats je Bestelling" />
              <div className="text-white font-bold">of bel +32496210697</div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
