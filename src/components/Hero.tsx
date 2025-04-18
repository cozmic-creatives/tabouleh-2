import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import HeroImageTransition from "./HeroImageTransition";

const Hero = () => {
  // Array of hero images
  const heroImages = [
    "/images/restaurant-inside-6.jpeg",
    "https://images.unsplash.com/photo-1707151550757-fd379e80d1d2?q=80&w=2980&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "/images/restaurant-inside-8.jpeg",
    "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "/images/restaurant-front.jpeg",
  ];

  return (
    <div className="relative bg-clay-50 overflow-hidden decorative-border">
      {/* Arabic Pattern Background */}
      <div className="absolute inset-0">
        <svg 
          className="w-full h-full opacity-[0.03] text-spice-600"
          xmlns="http://www.w3.org/2000/svg" 
          width="100%" 
          height="100%"
        >
          <pattern
            id="arabicPattern"
            x="0"
            y="0"
            width="56"
            height="56"
            patternUnits="userSpaceOnUse"
          >
            <path
              fill="currentColor"
              d="M28 0c15.464 0 28 12.536 28 28S43.464 56 28 56 0 43.464 0 28 12.536 0 28 0zm0 4C14.745 4 4 14.745 4 28s10.745 24 24 24 24-10.745 24-24S41.255 4 28 4zm0 4c11.046 0 20 8.954 20 20s-8.954 20-20 20S8 39.046 8 28 16.954 8 28 8zm0 4c-8.837 0-16 7.163-16 16s7.163 16 16 16 16-7.163 16-16-7.163-16-16-16zm0 4c6.627 0 12 5.373 12 12s-5.373 12-12 12-12-5.373-12-12 5.373-12 12-12zm0 4c-4.418 0-8 3.582-8 8s3.582 8 8 8 8-3.582 8-8-3.582-8-8-8zm0 4a4 4 0 110 8 4 4 0 010-8z"
            />
          </pattern>
          <rect width="100%" height="100%" fill="url(#arabicPattern)" />
        </svg>
      </div>
      
      {/* Original Arabic Pattern (keeping for layered effect) */}
      <div className="absolute inset-0 bg-pattern-arabic opacity-10"></div>
      
      <div className="container-custom mx-auto relative">
        <div className="flex flex-col lg:flex-row items-center py-12 md:py-20 lg:py-24 gap-12 lg:gap-16">
          <div className="w-full lg:w-1/2 text-center lg:text-left pb-8 lg:pb-0">
            <div className="mb-2">
              <span className="text-henna-500 font-arabic text-xl">
                مطعم تبوله
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 leading-tight">
              <span className="block">Authentieke</span>
              <span className="text-spice-600">Midden-Oosten Keuken</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8 mx-auto lg:mx-0">
              Ontdek de rijke smaken van de Midden-Oosterse keuken: Syrische
              specialiteiten, verfijnde Libanese gerechten, authentieke Iraakse
              recepten - een culinaire reis door het hart van het Midden-Oosten.
            </p>
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
              <Button
                asChild
                size="lg"
                className="bg-spice-600 hover:bg-spice-700 relative overflow-hidden group"
              >
                <Link to="/menu" className="relative z-10 flex items-center">
                  <span>Menu Bekijken</span>
                  <span className="ml-2 text-xl font-arabic opacity-70">
                    قائمة
                  </span>
                  <span className="absolute inset-0 bg-gradient-to-r from-henna-600 to-spice-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></span>
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-spice-600 text-spice-600 hover:bg-spice-50 group"
              >
                <Link to="/contact" className="flex items-center">
                  <span>Nu Bestellen</span>
                  <span className="ml-2 text-xl font-arabic opacity-70 group-hover:opacity-100">
                    طلب
                  </span>
                </Link>
              </Button>
            </div>
          </div>

          <div className="w-full lg:w-1/2 px-4">
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-24 h-24 md:w-32 md:h-32 bg-saffron-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float"></div>

              <div className="absolute inset-0 rounded-3xl border-2 border-clay-200 transform rotate-3 z-0"></div>

              <div className="relative transform -rotate-2 z-10 aspect-square w-full">
                <HeroImageTransition images={heroImages} interval={5000} />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-r from-spice-500 via-saffron-500 to-henna-500 opacity-80"></div>
    </div>
  );
};

export default Hero;
