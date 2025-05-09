
import React from "react";
import ClientReviewsCarousel from "./ClientReviewsCarousel";

const ClientReviewsSection = () => {
  return (
    <section className="py-12 bg-clay-50">
      <div className="container-custom mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          Wat Onze Klanten Zeggen
        </h2>
        
        <ClientReviewsCarousel />
      </div>
    </section>
  );
};

export default ClientReviewsSection;
