
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
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Bestellingsinformatie</h2>
              <p className="text-gray-600 mb-6">
                Wij bieden afhaal- en bezorgopties. Bestellingen kunnen worden geplaatst via telefoon, online of via onze mobiele app.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Afhalen</h3>
                  <p className="text-gray-600 mb-4">
                    Bestel vooraf en haal op wanneer het jou uitkomt.
                  </p>
                  <p className="text-spice-600 font-medium">Gemiddelde wachttijd: 15-20 minuten</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Bezorging</h3>
                  <p className="text-gray-600 mb-4">
                    Wij bezorgen op locaties binnen een straal van 5 kilometer.
                  </p>
                  <p className="text-spice-600 font-medium">Bezorgkosten: €3,99</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Catering</h3>
                  <p className="text-gray-600 mb-4">
                    Speciaal cateringmenu beschikbaar voor evenementen.
                  </p>
                  <p className="text-spice-600 font-medium">Bel voor meer informatie</p>
                </div>
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
