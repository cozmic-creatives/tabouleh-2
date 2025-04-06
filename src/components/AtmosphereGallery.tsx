
import React from 'react';

const AtmosphereGallery = () => {
  return (
    <section className="py-16 bg-clay-50 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-pattern-geometric opacity-10"></div>
      
      <div className="container-custom mx-auto relative">
        <div className="text-center mb-12">
          <span className="inline-block text-spice-500 font-arabic text-xl mb-2">أجواء الشرق الأوسط</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Midden-Oosterse Sfeer</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Ervaar de rijke cultuur en traditie van het Midden-Oosten in ons restaurant
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="col-span-1 md:col-span-2 h-80 overflow-hidden rounded-xl shadow-md group">
            <img 
              src="https://images.unsplash.com/photo-1606715895281-ccdf3a4c2a2c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
              alt="Restaurant Interior" 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
          </div>
          <div className="col-span-1 h-80 overflow-hidden rounded-xl shadow-md group">
            <img 
              src="https://images.unsplash.com/photo-1506237851929-28bb0d20c1a3?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
              alt="Middle Eastern Lanterns" 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="col-span-1 h-80 overflow-hidden rounded-xl shadow-md group">
            <img 
              src="https://images.unsplash.com/photo-1541701080892-9bed5d009526?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
              alt="Traditional Tea Service" 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
          </div>
          <div className="col-span-1 md:col-span-2 h-80 overflow-hidden rounded-xl shadow-md group">
            <img 
              src="https://images.unsplash.com/photo-1544148103-0773bf10d330?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
              alt="Middle Eastern Food Spread" 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
          </div>
        </div>
        
        <div className="text-center mt-12">
          <p className="text-lg text-clay-700 italic">
            "De traditionele gerechten die we serveren zijn een liefdevol eerbetoon aan onze Syrische roots"
          </p>
        </div>
      </div>
      
      {/* Decorative corner elements */}
      <div className="absolute top-0 left-0 w-20 h-20 border-l-4 border-t-4 border-henna-400 opacity-30 rounded-tl-3xl"></div>
      <div className="absolute bottom-0 right-0 w-20 h-20 border-r-4 border-b-4 border-henna-400 opacity-30 rounded-br-3xl"></div>
    </section>
  );
};

export default AtmosphereGallery;
