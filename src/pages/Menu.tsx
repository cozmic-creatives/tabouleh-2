
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import MenuList from '@/components/MenuList';
import { Card, CardContent } from '@/components/ui/card';
import { Utensils, Clock, MapPin } from 'lucide-react';
import SEO from '@/components/SEO';

const Menu = () => {
  // Schema markup specific to the menu page
  const menuSchema = {
    '@type': 'Restaurant',
    hasMenu: {
      '@type': 'Menu',
      name: 'TABOULEH 2 Menu',
      description: 'Authentieke Syrische gerechten',
      hasMenuSection: [
        {
          '@type': 'MenuSection',
          name: 'Voorgerechten',
          description: 'Traditionele Syrische voorgerechten'
        },
        {
          '@type': 'MenuSection',
          name: 'Hoofdgerechten',
          description: 'Syrische hoofdgerechten en specialiteiten'
        },
        {
          '@type': 'MenuSection',
          name: 'Desserts',
          description: 'Zoete Syrische desserts'
        }
      ]
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <SEO 
        title="Ons Menu - Syrische Gerechten en Specialiteiten"
        description="Ontdek onze authentieke Syrische gerechten, gemaakt met traditionele recepten en de verste ingrediënten. Van voorgerechten tot desserts, ons menu biedt voor ieder wat wils."
        type="website"
        schemaMarkup={menuSchema}
      />
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
              <div className="mt-8">
                <Card className="bg-gray-50 border-clay-100">
                  <CardContent className="pt-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="flex items-start space-x-4">
                        <Clock className="text-spice-600 mt-1 flex-shrink-0" size={20} />
                        <div>
                          <h4 className="font-semibold text-gray-900">Openingstijden</h4>
                          <ul className="text-sm text-gray-600 mt-1 space-y-1">
                            <li>Maandag: 14:00 - 22:00</li>
                            <li>Dinsdag: Gesloten</li>
                            <li>Woensdag: 14:00 - 22:00</li>
                            <li>Donderdag: 14:00 - 22:00</li>
                            <li>Vrijdag: 14:00 - 22:00</li>
                            <li>Zaterdag: 14:00 - 22:00</li>
                            <li>Zondag: 14:00 - 22:00</li>
                          </ul>
                        </div>
                      </div>
                      <div className="flex items-start space-x-4">
                        <MapPin className="text-spice-600 mt-1 flex-shrink-0" size={20} />
                        <div>
                          <h4 className="font-semibold text-gray-900">Locatie & Sfeer</h4>
                          <p className="text-sm text-gray-600 mt-1">Ledebergplein 17, 9050 Gent</p>
                          <ul className="text-sm text-gray-600 mt-3 space-y-1">
                            <li>Gezellige en vriendelijke familiesfeer</li>
                            <li>Casual en comfortabele omgeving</li>
                            <li>Parkeergelegenheid ter plaatse beschikbaar</li>
                            <li>Toilet beschikbaar</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
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
