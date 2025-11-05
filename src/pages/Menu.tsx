import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MenuList from "@/components/MenuList";
import { Clock, MapPin, CheckCircle2, Phone } from "lucide-react";
import SEO from "@/components/SEO";
import { getRestaurantStatus } from "@/utils/restaurantStatus";
import OrderButton from "@/components/OrderButton";
import { Button } from "@/components/ui/button";
import OrderingOptionCard from "@/components/menu/OrderingOptionCard";
import {
  orderingOptions,
  restaurantFeatures,
  locationFeatures,
} from "@/data/orderingOptions";
const Menu = () => {
  // Schema markup specific to the menu page
  const menuSchema = {
    "@type": "Restaurant",
    hasMenu: {
      "@type": "Menu",
      name: "TABOULEH 2 Menu",
      description: "Authentieke Syrische gerechten",
      hasMenuSection: [
        {
          "@type": "MenuSection",
          name: "Mezze",
          description: "Traditionele Syrische voorgerechten en kleine hapjes",
        },
        {
          "@type": "MenuSection",
          name: "Hoofdgerechten",
          description:
            "Syrische hoofdgerechten, grill specialiteiten en shoarma",
        },
        {
          "@type": "MenuSection",
          name: "Dranken",
          description: "Verse smoothies, frisdranken en verfrissende dranken",
        },
        {
          "@type": "MenuSection",
          name: "Warme Dranken",
          description: "Koffie, thee en warme specialiteiten",
        },
        {
          "@type": "MenuSection",
          name: "Desserts",
          description: "Zoete Syrische desserts",
        },
      ],
    },
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
      <main className="grow">
        <section className="bg-clay-50 py-12">
          <div className="container mx-auto text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Ons Menu</h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Ontdek onze authentieke Midden-Oost gerechten, gemaakt met
              traditionele recepten en de verste ingrediënten. Alles is 100%
              Halal.
            </p>
          </div>
        </section>

        <section className="py-8 md:py-12">
          <MenuList />
        </section>

        <section className="py-12 bg-spice-50 border-t border-spice-200">
          <div className="container mx-auto">
            {/* Header */}
            <div className="text-center max-w-3xl mx-auto mb-10">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
                Bestellingsinformatie
              </h2>
              <p className="text-gray-600">
                Geniet van onze authentieke Syrische keuken op jouw manier
              </p>
            </div>

            {/* Ordering Options - Simple Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6 max-w-5xl mx-auto">
              {orderingOptions.map((option) => (
                <OrderingOptionCard key={option.id} {...option} />
              ))}
            </div>

            {/* Info Grid */}
            <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Features/Offerings */}
              <div className="bg-white/90 p-6 rounded-lg shadow-md border border-spice-200">
                <h3 className="text-lg font-bold text-gray-900 mb-4">
                  Wat Wij Bieden
                </h3>
                <div className="space-y-2 text-sm text-gray-700">
                  {restaurantFeatures.map((feature) => (
                    <div key={feature} className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-spice-600 shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Opening Hours */}
              <div className="bg-white/90 p-6 rounded-lg shadow-md border border-spice-200">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-spice-100 rounded-lg flex items-center justify-center">
                    <Clock className="w-5 h-5 text-spice-600" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900">
                    Openingstijden
                  </h3>
                </div>
                {(() => {
                  const status = getRestaurantStatus();
                  return (
                    <div className="flex items-center gap-2 mb-4 pb-3 border-b border-gray-100">
                      <div
                        className={`w-2 h-2 rounded-full ${
                          status.isOpen
                            ? "bg-green-500 animate-pulse"
                            : "bg-red-500"
                        }`}
                      ></div>
                      <span
                        className={`text-sm font-medium ${
                          status.isOpen ? "text-green-700" : "text-red-700"
                        }`}
                      >
                        {status.message}
                      </span>
                    </div>
                  );
                })()}
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between text-gray-700">
                    <span>Ma, Wo - Zo</span>
                    <span className="font-medium">14:00 - 22:00</span>
                  </div>
                  <div className="flex justify-between text-gray-700">
                    <span>Dinsdag</span>
                    <span className="font-medium text-red-600">Gesloten</span>
                  </div>
                </div>
              </div>

              {/* Location */}
              <div className="bg-white/90 p-6 rounded-lg shadow-md border border-spice-200">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-spice-100 rounded-lg flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-spice-600" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900">Locatie</h3>
                </div>
                <p className="text-gray-700 font-medium mb-3 text-sm">
                  Ledebergplein 17, 9050 Gent
                </p>
                <div className="space-y-2 text-sm text-gray-600">
                  {locationFeatures.map((feature) => (
                    <div key={feature} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-spice-600 mt-0.5 shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="mt-10 max-w-5xl mx-auto">
              <div className="bg-spice-600 p-6 md:p-8 rounded-lg shadow-lg text-center">
                <h3 className="text-2xl font-bold text-white mb-2">
                  Klaar om te Bestellen?
                </h3>
                <p className="text-white/90 mb-6">
                  Bel ons of kom langs voor de lekkerste Syrische gerechten!
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
                  <Button
                    asChild
                    size="lg"
                    className="bg-white text-spice-600 hover:bg-gray-50"
                  >
                    <a href="tel:+32466206778">
                      <Phone className="w-5 h-5" />
                      <span>+32 466 20 67 78</span>
                    </a>
                  </Button>
                  <OrderButton
                    size="lg"
                    className="bg-white/10 hover:bg-white/20 text-white border-2 border-white"
                    text="Bestel Nu"
                  />
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
