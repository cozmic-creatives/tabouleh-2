
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <div className="relative bg-gray-50 overflow-hidden">
      <div className="absolute inset-0 bg-pattern opacity-10"></div>
      <div className="container-custom mx-auto relative">
        <div className="flex flex-col lg:flex-row items-center py-12 md:py-20 lg:py-24">
          <div className="w-full lg:w-1/2 text-center lg:text-left pb-8 lg:pb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 leading-tight">
              <span className="block">Authentieke</span>
              <span className="text-spice-600">Syrische Keuken</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-lg mx-auto lg:mx-0">
              Geniet van de rijke smaken van Damascus met onze authentieke familierecepten,
              dagelijks vers bereid met traditionele kruiden en technieken.
            </p>
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
              <Button asChild size="lg" className="bg-spice-600 hover:bg-spice-700">
                <Link to="/menu">Menu Bekijken</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-spice-600 text-spice-600 hover:bg-spice-50">
                <Link to="/contact">Nu Bestellen</Link>
              </Button>
            </div>
          </div>
          
          <div className="w-full lg:w-1/2 px-4">
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-24 h-24 md:w-32 md:h-32 bg-saffron-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
              <div className="absolute -bottom-6 -right-6 w-24 h-24 md:w-32 md:h-32 bg-spice-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
              <div className="absolute inset-0 rounded-3xl border-2 border-clay-200 transform rotate-3 z-0"></div>
              <img 
                src="https://images.unsplash.com/photo-1518133227682-c0e3e34de21b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80" 
                alt="Syrisch Eten" 
                className="relative rounded-2xl shadow-lg z-10 transform -rotate-2 w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
