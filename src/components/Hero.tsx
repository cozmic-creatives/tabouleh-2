import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
const Hero = () => {
  return <div className="relative bg-clay-50 overflow-hidden decorative-border">
      <div className="absolute inset-0 bg-pattern-arabic opacity-10"></div>
      <div className="container-custom mx-auto relative">
        <div className="flex flex-col lg:flex-row items-center py-12 md:py-20 lg:py-24">
          <div className="w-full lg:w-1/2 text-center lg:text-left pb-8 lg:pb-0">
            <div className="mb-2">
              <span className="text-henna-500 font-arabic text-xl">مطعم تبوله</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 leading-tight">
              <span className="block">Authentieke</span>
              <span className="text-spice-600">Syrische Keuken</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-lg mx-auto lg:mx-0">
              Geniet van de rijke smaken van Damascus met onze authentieke familierecepten,
              dagelijks vers bereid met traditionele kruiden en technieken.
            </p>
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
              <Button asChild size="lg" className="bg-spice-600 hover:bg-spice-700 relative overflow-hidden group">
                <Link to="/menu" className="relative z-10 flex items-center">
                  <span>Menu Bekijken</span>
                  <span className="ml-2 text-xl font-arabic opacity-70">قائمة</span>
                  <span className="absolute inset-0 bg-gradient-to-r from-henna-600 to-spice-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></span>
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-spice-600 text-spice-600 hover:bg-spice-50 group">
                <Link to="/contact" className="flex items-center">
                  <span>Nu Bestellen</span>
                  <span className="ml-2 text-xl font-arabic opacity-70 group-hover:opacity-100">طلب</span>
                </Link>
              </Button>
            </div>
          </div>
          
          <div className="w-full lg:w-1/2 px-4">
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-24 h-24 md:w-32 md:h-32 bg-saffron-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float"></div>
              <div className="absolute -bottom-6 -right-6 w-24 h-24 md:w-32 md:h-32 bg-spice-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float animation-delay-2000"></div>
              
              {/* Decorative elements */}
              <div className="absolute -right-4 -top-4 w-16 h-16 border-r-4 border-t-4 border-saffron-500 opacity-60"></div>
              <div className="absolute -left-4 -bottom-4 w-16 h-16 border-l-4 border-b-4 border-henna-500 opacity-60"></div>
              
              <div className="absolute inset-0 rounded-3xl border-2 border-clay-200 transform rotate-3 z-0"></div>
              <img alt="Syrisch Eten" className="relative rounded-2xl shadow-lg z-10 transform -rotate-2 w-full" src="https://images.unsplash.com/photo-1582507421104-37836a21da35?q=80&w=2336&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative bottom border */}
      <div className="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-r from-spice-500 via-saffron-500 to-henna-500 opacity-80"></div>
    </div>;
};
export default Hero;