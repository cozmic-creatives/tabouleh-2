
import React from 'react';

const AboutSection = () => {
  return (
    <section className="section-padding bg-clay-50">
      <div className="container-custom mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="w-full lg:w-1/2 order-2 lg:order-1">
            <div className="relative">
              <div className="absolute inset-0 rounded-3xl border-2 border-clay-200 transform -rotate-3 z-0"></div>
              <img 
                src="https://images.unsplash.com/photo-1514516816566-de580c621376?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80" 
                alt="Onze Syrische Keuken" 
                className="relative rounded-2xl shadow-lg z-10 transform rotate-2 w-full"
              />
            </div>
          </div>
          
          <div className="w-full lg:w-1/2 order-1 lg:order-2">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Ons Syrische Erfgoed</h2>
            <div className="border-l-4 border-spice-500 pl-6 mb-6">
              <p className="text-lg font-serif italic text-gray-600">
                "Onze familierecepten zijn generaties lang doorgegeven, en brengen de authentieke smaken van Damascus naar uw deur."
              </p>
            </div>
            <p className="text-gray-600 mb-4">
              Opgericht door de familie Alhamoud in 2010, brengt Damascene Takeaway de rijke culinaire tradities van Syrië naar uw buurt. Onze recepten zijn over generaties heen bewaard en geperfectioneerd.
            </p>
            <p className="text-gray-600 mb-6">
              Elk gerecht wordt met zorg bereid met authentieke kruiden en traditionele methoden. We gebruiken de verste ingrediënten en bereiden alles dagelijks vers in huis om authentieke smaken en uitzonderlijke kwaliteit te garanderen.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="bg-white p-4 rounded-lg shadow text-center">
                <h3 className="text-spice-600 font-bold text-xl">100%</h3>
                <p className="text-gray-600">Authentieke Recepten</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow text-center">
                <h3 className="text-spice-600 font-bold text-xl">Vers</h3>
                <p className="text-gray-600">Dagelijkse Bereiding</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow text-center">
                <h3 className="text-spice-600 font-bold text-xl">Kwaliteit</h3>
                <p className="text-gray-600">Premium Ingrediënten</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
