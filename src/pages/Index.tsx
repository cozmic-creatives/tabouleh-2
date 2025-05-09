
import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import FeaturedDishes from '@/components/FeaturedDishes';
import AboutSection from '@/components/AboutSection';
import Footer from '@/components/Footer';
import OrderButton from '@/components/OrderButton';
import SEO from '@/components/SEO';
import ClientReviewsSection from '@/components/ClientReviewsSection';

const Index = () => {
  // Schema markup specific to the homepage
  const homeSchema = {
    '@type': 'Restaurant',
    specialties: ['Syrische keuken', 'Halal gerechten', 'Midden-Oosterse specialiteiten'],
    hasMenu: {
      '@type': 'Menu',
      name: 'TABOULEH 2 Menu',
      description: 'Authentieke Syrische gerechten',
      url: 'https://tabouleh2.be/menu'
    }
  };
  return <div className="min-h-screen flex flex-col">
      <SEO title="Authentieke Syrische Keuken in Gent" description="Geniet van de rijke smaken van Damascus met onze authentieke familierecepten, dagelijks vers bereid met traditionele kruiden en technieken. Bestel online, afhalen of dineer ter plaatse!" schemaMarkup={homeSchema} />
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <FeaturedDishes />
        <AboutSection />
        
        {/* Client Reviews Section */}
        <ClientReviewsSection />
        
        <section className="py-16 bg-spice-600 text-white text-center">
          <div className="container-custom mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Klaar om te Bestellen?</h2>
            <p className="text-lg opacity-90 max-w-2xl mx-auto mb-8">Geniet van authentieke Midden-Oost keuken bij TABOULEH 2. Beschikbaar voor afhalen of dineer ter plaatse!</p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
              <OrderButton className="bg-white hover:bg-gray-100 text-spice-600" text="Plaats je Bestelling" />
              <div className="text-white font-bold">of bel +32 49 802 0482</div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>;
};
export default Index;
