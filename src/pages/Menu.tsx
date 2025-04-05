
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import MenuList from '@/components/MenuList';

const Menu = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <section className="bg-clay-50 py-12">
          <div className="container-custom mx-auto text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Ons Menu</h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Ontdek onze authentieke Syrische gerechten, gemaakt met traditionele recepten en de verste ingrediënten.
            </p>
          </div>
        </section>
        
        <section className="py-8 md:py-12">
          <MenuList />
        </section>
        
        <section className="py-12 bg-spice-50 border-t border-b border-spice-100">
          <div className="container-custom mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Bestellingsinformatie</h2>
              <p className="text-gray-600 mb-6">
                Wij bieden diverse eetopties aan. Bestellingen kunnen worden geplaatst via telefoon of persoonlijk.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Afhalen</h3>
                  <p className="text-gray-600 mb-4">
                    Bestel vooraf en haal op wanneer het jou uitkomt.
                  </p>
                  <p className="text-spice-600 font-medium">Kerbside pickup beschikbaar</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Bezorging</h3>
                  <p className="text-gray-600 mb-4">
                    Wij bezorgen in Gent en omgeving.
                  </p>
                  <p className="text-spice-600 font-medium">Contactloze levering mogelijk</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Dine-in</h3>
                  <p className="text-gray-600 mb-4">
                    Bezoek ons restaurant voor een gezellige sfeer.
                  </p>
                  <p className="text-spice-600 font-medium">Reserveren aanbevolen</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md max-w-3xl mx-auto">
              <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Onze Aanbiedingen</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                <div className="text-center p-3 border border-clay-200 rounded-md">
                  <p className="font-medium">Halal Voedsel</p>
                </div>
                <div className="text-center p-3 border border-clay-200 rounded-md">
                  <p className="font-medium">Vegetarische Opties</p>
                </div>
                <div className="text-center p-3 border border-clay-200 rounded-md">
                  <p className="font-medium">Desserts</p>
                </div>
                <div className="text-center p-3 border border-clay-200 rounded-md">
                  <p className="font-medium">Koffie</p>
                </div>
                <div className="text-center p-3 border border-clay-200 rounded-md">
                  <p className="font-medium">Laat Avond Eten</p>
                </div>
                <div className="text-center p-3 border border-clay-200 rounded-md">
                  <p className="font-medium">Saladebar</p>
                </div>
              </div>
              <div className="mt-6 text-center text-gray-600">
                <p>Gezellige en vriendelijke familiesfeer in ons restaurant</p>
                <p className="mt-2">Parkeergelegenheid ter plaatse beschikbaar</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Menu;
