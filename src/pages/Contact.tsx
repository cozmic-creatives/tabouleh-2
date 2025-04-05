
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { MapPin, Phone, Mail, Clock, Utensils } from 'lucide-react';

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <section className="bg-clay-50 py-12">
          <div className="container-custom mx-auto text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Contact & Bestellen</h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Klaar om te genieten van authentieke Syrische keuken? Bestel nu voor afhalen of bezorging!
            </p>
          </div>
        </section>
        
        <section className="py-12">
          <div className="container-custom mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Bestellingsinformatie</h2>
                
                <div className="bg-white rounded-lg shadow-md p-6 mb-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Hoe te Bestellen</h3>
                  
                  <div className="space-y-6">
                    <div className="flex">
                      <div className="flex-shrink-0 h-10 w-10 rounded-full bg-spice-100 flex items-center justify-center mr-4">
                        <Phone className="h-5 w-5 text-spice-600" />
                      </div>
                      <div>
                        <h4 className="text-lg font-medium text-gray-900">Per Telefoon</h4>
                        <p className="text-gray-600">Bel ons op (123) 456-7890 om uw bestelling te plaatsen.</p>
                      </div>
                    </div>
                    
                    <div className="flex">
                      <div className="flex-shrink-0 h-10 w-10 rounded-full bg-spice-100 flex items-center justify-center mr-4">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-spice-600"><rect width="14" height="20" x="5" y="2" rx="2" ry="2"></rect><path d="M12 18h.01"></path></svg>
                      </div>
                      <div>
                        <h4 className="text-lg font-medium text-gray-900">Online</h4>
                        <p className="text-gray-600">Bestel via onze website of mobiele app.</p>
                      </div>
                    </div>
                    
                    <div className="flex">
                      <div className="flex-shrink-0 h-10 w-10 rounded-full bg-spice-100 flex items-center justify-center mr-4">
                        <Utensils className="h-5 w-5 text-spice-600" />
                      </div>
                      <div>
                        <h4 className="text-lg font-medium text-gray-900">Persoonlijk</h4>
                        <p className="text-gray-600">Bezoek onze locatie en plaats uw bestelling persoonlijk.</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Openingstijden & Locatie</h3>
                  
                  <div className="space-y-6">
                    <div className="flex">
                      <Clock className="h-5 w-5 text-spice-600 mt-1 mr-3 flex-shrink-0" />
                      <div>
                        <h4 className="text-lg font-medium text-gray-900">Openingstijden</h4>
                        <p className="text-gray-600">Maandag - Vrijdag: 11:00 - 22:00</p>
                        <p className="text-gray-600">Zaterdag - Zondag: 12:00 - 23:00</p>
                      </div>
                    </div>
                    
                    <div className="flex">
                      <MapPin className="h-5 w-5 text-spice-600 mt-1 mr-3 flex-shrink-0" />
                      <div>
                        <h4 className="text-lg font-medium text-gray-900">Adres</h4>
                        <p className="text-gray-600">123 Syrische Straat</p>
                        <p className="text-gray-600">Eetstad, ES 12345</p>
                      </div>
                    </div>
                    
                    <div className="flex">
                      <Mail className="h-5 w-5 text-spice-600 mt-1 mr-3 flex-shrink-0" />
                      <div>
                        <h4 className="text-lg font-medium text-gray-900">E-mail</h4>
                        <p className="text-gray-600">info@damascenetakeaway.com</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Stuur Ons een Bericht</h2>
                
                <div className="bg-white rounded-lg shadow-md p-6">
                  <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                          Naam
                        </label>
                        <input
                          type="text"
                          id="name"
                          className="w-full rounded-md border-gray-300 shadow-sm focus:border-spice-500 focus:ring-spice-500 px-3 py-2 border"
                        />
                      </div>
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                          Telefoon
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          className="w-full rounded-md border-gray-300 shadow-sm focus:border-spice-500 focus:ring-spice-500 px-3 py-2 border"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        E-mail
                      </label>
                      <input
                        type="email"
                        id="email"
                        className="w-full rounded-md border-gray-300 shadow-sm focus:border-spice-500 focus:ring-spice-500 px-3 py-2 border"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                        Onderwerp
                      </label>
                      <input
                        type="text"
                        id="subject"
                        className="w-full rounded-md border-gray-300 shadow-sm focus:border-spice-500 focus:ring-spice-500 px-3 py-2 border"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                        Bericht
                      </label>
                      <textarea
                        id="message"
                        rows={4}
                        className="w-full rounded-md border-gray-300 shadow-sm focus:border-spice-500 focus:ring-spice-500 px-3 py-2 border"
                      ></textarea>
                    </div>
                    
                    <Button className="w-full bg-spice-600 hover:bg-spice-700">
                      Bericht Verzenden
                    </Button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <section className="py-8 bg-clay-50">
          <div className="container-custom mx-auto text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Bezoek Ons</h2>
            <div className="rounded-lg overflow-hidden shadow-md h-80">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3052.9528850999397!2d-74.00597492449866!3d40.71277583748678!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a22a3bda30d%3A0xb89d1fe6bc499443!2sDowntown%20Manhattan%2C%20New%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sus!4v1692810264384!5m2!1sen!2sus" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
