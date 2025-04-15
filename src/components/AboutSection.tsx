
import React from 'react';
const AboutSection = () => {
  return <section className="section-padding bg-clay-50">
      <div className="container-custom mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          <div className="w-full lg:w-1/2 order-2 lg:order-1">
            <div className="relative">
              <div className="absolute inset-0 rounded-3xl border-2 border-clay-200 transform -rotate-3 z-0"></div>
              <img alt="Onze Syrische Keuken" className="relative rounded-2xl shadow-lg z-10 transform rotate-2 w-full" src="https://plus.unsplash.com/premium_photo-1674106347866-8282d8c19f84?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
            </div>
          </div>
          
          <div className="w-full lg:w-1/2 order-1 lg:order-2">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Onze Iraakse Roots</h2>
            <div className="border-l-4 border-spice-500 pl-6 mb-6">
              <p className="text-lg font-serif italic text-gray-600">
                "Vanuit de rijke culinaire traditie van Irak brengen wij onze passie voor heerlijk eten naar Ledeberg, Gent."
              </p>
            </div>
            <p className="text-gray-600 mb-4">
              Tabouleh 2 is een nieuw restaurant in het hart van Ledeberg, Gent, waar wij, een gepassioneerd team met Iraakse roots, elke dag ons beste doen om authentieke en heerlijke maaltijden te bereiden.
            </p>
            <p className="text-gray-600 mb-6">
              Onze reis begon met de rijke smaken van Irak, en nu willen we de lokale gemeenschap laten genieten van onze authentieke gerechten. Met zorg geselecteerde ingrediënten en traditionele bereidingsmethoden brengen we de smaak van het Midden-Oosten rechtstreeks naar uw bord.
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
    </section>;
};

export default AboutSection;

