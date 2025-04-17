import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Clock, Utensils, Star } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import SEO from "@/components/SEO";

const Contact = () => {
  const contactSchema = {
    "@type": "Restaurant",
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+32 49 802 0482",
      contactType: "customer service",
      availableLanguage: ["Dutch", "English", "Arabic"],
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "51.039054",
      longitude: "3.745584",
    },
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Store reference to the form element
    const form = e.currentTarget;
    const formData = new FormData(form);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      subject: formData.get("subject"),
      message: formData.get("message"),
    };

    try {
      const response = await fetch(
        "https://n8n.matthewbracke.com/webhook/contact-form",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      if (response.ok) {
        alert("Bericht verzonden! We nemen snel contact met je op.");
        form.reset(); // Use the stored reference instead of e.currentTarget
      } else {
        alert("Er is iets misgegaan. Probeer het opnieuw.");
      }
    } catch (error) {
      console.error("Submission error:", error);
      alert("Verzenden mislukt.");
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <SEO
        title="Contact & Bestellen - Neem contact op met TABOULEH 2"
        description="Klaar om te genieten van authentieke Syrische keuken? Bestel telefonisch, online of bezoek ons restaurant in Gent. Wij bieden afhalen, bezorging en dine-in opties voor onze gasten."
        type="website"
        schemaMarkup={contactSchema}
      />
      <Navbar />
      <main className="flex-grow">
        <section className="bg-clay-50 py-12">
          <div className="container-custom mx-auto text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Contact & Bestellen
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Klaar om te genieten van authentieke Syrische keuken? Bestel nu
              voor afhalen of bezorging!
            </p>
          </div>
        </section>

        <section className="py-12">
          <div className="container-custom mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Bestellingsinformatie
                </h2>

                <div className="bg-white rounded-lg shadow-md p-6 mb-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    Hoe te Bestellen
                  </h3>

                  <div className="space-y-6">
                    <div className="flex">
                      <div className="flex-shrink-0 h-10 w-10 rounded-full bg-spice-100 flex items-center justify-center mr-4">
                        <Phone className="h-5 w-5 text-spice-600" />
                      </div>
                      <div>
                        <h4 className="text-lg font-medium text-gray-900">
                          Per Telefoon
                        </h4>
                        <p className="text-gray-600">
                          Bel ons op +32 49 802 0482 om uw bestelling te
                          plaatsen en af te halen.
                        </p>
                      </div>
                    </div>

                    <div className="flex">
                      <div className="flex-shrink-0 h-10 w-10 rounded-full bg-spice-100 flex items-center justify-center mr-4">
                        <Utensils className="h-5 w-5 text-spice-600" />
                      </div>
                      <div className="text-base font-normal">
                        <h4 className="text-lg font-medium text-gray-900">
                          Dine in
                        </h4>
                        <p className="text-gray-600">
                          Bezoek onze mooie locatie en geniet van een gezellige
                          avond met vrienden en familie.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    Openingstijden & Locatie
                  </h3>

                  <div className="space-y-6">
                    <div className="flex">
                      <Clock className="h-5 w-5 text-spice-600 mt-1 mr-3 flex-shrink-0" />
                      <div>
                        <h4 className="text-lg font-medium text-gray-900">
                          Openingstijden
                        </h4>
                        <p className="text-gray-600">Maandag: 14:00 - 22:00</p>
                        <p className="text-gray-600">Dinsdag: Gesloten</p>
                        <p className="text-gray-600">Woensdag: 14:00 - 22:00</p>
                        <p className="text-gray-600">
                          Donderdag: 14:00 - 22:00
                        </p>
                        <p className="text-gray-600">Vrijdag: 14:00 - 22:00</p>
                        <p className="text-gray-600">Zaterdag: 14:00 - 22:00</p>
                        <p className="text-gray-600">Zondag: 14:00 - 22:00</p>
                      </div>
                    </div>

                    <div className="flex">
                      <MapPin className="h-5 w-5 text-spice-600 mt-1 mr-3 flex-shrink-0" />
                      <div>
                        <h4 className="text-lg font-medium text-gray-900">
                          Adres
                        </h4>
                        <p className="text-gray-600">Ledebergplein 17</p>
                        <p className="text-gray-600">9050 Gent</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-2">
                      <Mail size={18} className="mt-1 text-spice-500" />
                      <div>
                        <h4 className="text-lg font-medium text-gray-900">
                          E-mail
                        </h4>
                        <p className="text-gray-600">hayder@tabouleh2.be</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Stuur Ons een Bericht
                </h2>

                <div className="bg-white rounded-lg shadow-md p-6">
                  <form className="space-y-6" onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label
                          htmlFor="name"
                          className="block text-sm font-medium text-gray-700 mb-1"
                        >
                          Naam
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          className="w-full rounded-md border-gray-300 shadow-sm focus:border-spice-500 focus:ring-spice-500 px-3 py-2 border"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="phone"
                          className="block text-sm font-medium text-gray-700 mb-1"
                        >
                          Telefoon
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          className="w-full rounded-md border-gray-300 shadow-sm focus:border-spice-500 focus:ring-spice-500 px-3 py-2 border"
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        E-mail
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="w-full rounded-md border-gray-300 shadow-sm focus:border-spice-500 focus:ring-spice-500 px-3 py-2 border"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="subject"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Onderwerp
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        className="w-full rounded-md border-gray-300 shadow-sm focus:border-spice-500 focus:ring-spice-500 px-3 py-2 border"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Bericht
                      </label>
                      <textarea
                        id="message"
                        rows={4}
                        className="w-full rounded-md border-gray-300 shadow-sm focus:border-spice-500 focus:ring-spice-500 px-3 py-2 border"
                        name="message"
                      ></textarea>
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-spice-600 hover:bg-spice-700"
                    >
                      Bericht Verzenden
                    </Button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-12 bg-clay-50">
          <div className="container-custom mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Wat Onze Klanten Zeggen
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Review 1 */}
              <Card className="h-full">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Avatar className="h-10 w-10 mr-3">
                      <AvatarFallback className="bg-spice-100 text-spice-600">
                        HK
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-medium">Hassan Khaled</p>
                      <div className="flex text-amber-500">
                        <Star className="h-4 w-4 fill-current" />
                        <Star className="h-4 w-4 fill-current" />
                        <Star className="h-4 w-4 fill-current" />
                        <Star className="h-4 w-4 fill-current" />
                        <Star className="h-4 w-4 fill-current" />
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-600">
                    Top lekker etentje ik heb juist gepakt tashrip was top
                    lekker
                  </p>
                  <p className="text-gray-400 text-sm mt-3">Een week geleden</p>
                </CardContent>
              </Card>

              {/* Review 2 */}
              <Card className="h-full">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Avatar className="h-10 w-10 mr-3">
                      <AvatarFallback className="bg-spice-100 text-spice-600">
                        AA
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-medium">Aboudi Alfadhil</p>
                      <div className="flex text-amber-500">
                        <Star className="h-4 w-4 fill-current" />
                        <Star className="h-4 w-4 fill-current" />
                        <Star className="h-4 w-4 fill-current" />
                        <Star className="h-4 w-4 fill-current" />
                        <Star className="h-4 w-4 fill-current" />
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-600">
                    Het was heerlijk, de service top en de medewerkers super
                    vriendelijk. Ik kom zonder twijfel terug!
                  </p>
                  <p className="text-gray-400 text-sm mt-3">Een week geleden</p>
                </CardContent>
              </Card>

              {/* Review 3 */}
              <Card className="h-full">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Avatar className="h-10 w-10 mr-3">
                      <AvatarFallback className="bg-spice-100 text-spice-600">
                        OA
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-medium">Omer Aljbory</p>
                      <div className="flex text-amber-500">
                        <Star className="h-4 w-4 fill-current" />
                        <Star className="h-4 w-4 fill-current" />
                        <Star className="h-4 w-4 fill-current" />
                        <Star className="h-4 w-4 fill-current" />
                        <Star className="h-4 w-4 fill-current" />
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-600">
                    Very tasty and good service thanks alot 🌹
                  </p>
                  <p className="text-gray-400 text-sm mt-3">Een week geleden</p>
                </CardContent>
              </Card>

              {/* Review 4 */}
              <Card className="h-full">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Avatar className="h-10 w-10 mr-3">
                      <AvatarFallback className="bg-spice-100 text-spice-600">
                        AR
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-medium">Ahmed Rzgar</p>
                      <div className="flex text-amber-500">
                        <Star className="h-4 w-4 fill-current" />
                        <Star className="h-4 w-4 fill-current" />
                        <Star className="h-4 w-4 fill-current" />
                        <Star className="h-4 w-4 fill-current" />
                        <Star className="h-4 w-4 fill-current" />
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-600">Very delicious, Thanks!</p>
                  <p className="text-gray-400 text-sm mt-3">Een week geleden</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-8 bg-clay-50">
          <div className="container-custom mx-auto text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Bezoek Ons
            </h2>
            <div className="rounded-lg overflow-hidden shadow-md h-80">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2508.1599595358507!2d3.743396776992651!3d51.03905534750757!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c371451f8773c1%3A0x5a31aeefa4dccf27!2sLedebergplein%2017%2C%209050%20Gent!5e0!3m2!1sen!2sbe!4v1712325693546!5m2!1sen!2sbe"
                width="100%"
                height="100%"
                style={{
                  border: 0,
                }}
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
