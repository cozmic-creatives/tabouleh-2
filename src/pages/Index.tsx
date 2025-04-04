
import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import FeaturedDishes from '@/components/FeaturedDishes';
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
        <AboutSection />
        
        <section className="py-16 bg-spice-600 text-white text-center">
          <div className="container-custom mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Order?</h2>
            <p className="text-lg opacity-90 max-w-2xl mx-auto mb-8">
              Satisfy your craving for authentic Syrian cuisine. 
              Order now for pickup or delivery!
            </p>
            <OrderButton className="bg-white hover:bg-gray-100 text-spice-600" text="Place Your Order" />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
