
import React from 'react';
import { Link } from 'react-router-dom';

const featuredDishes = [
  {
    id: 1,
    name: 'Mix Grilled',
    description: 'Lam brochette, gehakt, kipfilet (met rijst, bulgur met tomatensaus of friet).',
    price: '€18,00',
    image: 'https://images.unsplash.com/photo-1532636875304-0c89119d9b4d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    category: 'BBQ Gerecht'
  },
  {
    id: 2,
    name: 'Tabouleh',
    description: 'Gehakte peterselie, tomaten, munt, met uien, bulgur.',
    price: '€7,50',
    image: 'https://images.unsplash.com/photo-1585937421612-70a008356c36?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    category: 'Mezze'
  },
  {
    id: 3,
    name: 'Quzi',
    description: 'Lamspotje met rijst en 3 soepen (okra met tomatensaus, bonen met tomatensaus, aubergine met tomatensaus).',
    price: '€18,00',
    image: 'https://images.unsplash.com/photo-1610057099431-d73a1c9d2f2f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    category: 'Hoofdgerecht'
  }
];

const FeaturedDishes = () => {
  return (
    <section className="section-padding bg-white relative overflow-hidden">
      {/* Middle Eastern pattern background */}
      <div className="absolute inset-0 bg-pattern-arabic opacity-5"></div>
      
      <div className="container-custom mx-auto relative">
        <div className="text-center mb-12">
          <span className="inline-block text-henna-500 font-arabic text-xl mb-2">الأطباق المميزة</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 decorative-heading">Onze Signatuurgerechten</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Ontdek onze meest populaire authentieke Syrische gerechten, bereid met liefde en traditionele recepten.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredDishes.map((dish) => (
            <div key={dish.id} className="card-middle-eastern">
              <div className="h-56 overflow-hidden">
                <img 
                  src={dish.image} 
                  alt={dish.name} 
                  className="w-full h-full object-cover transition-transform hover:scale-105"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold text-gray-900">{dish.name}</h3>
                  <span className="text-spice-600 font-bold">{dish.price}</span>
                </div>
                <div className="mb-4">
                  <span className="inline-block bg-olive-100 text-olive-800 text-xs font-semibold px-2.5 py-0.5 rounded">
                    {dish.category}
                  </span>
                </div>
                <p className="text-gray-600 mb-4">{dish.description}</p>
                <Link 
                  to="/menu" 
                  className="text-spice-600 hover:text-spice-700 font-medium inline-flex items-center"
                >
                  Nu bestellen
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-1"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
        
        {/* Add a photo gallery section */}
        <div className="mt-16 pt-8 border-t border-clay-200">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Proef de Sfeer</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="overflow-hidden rounded-lg h-40 md:h-64">
              <img 
                src="https://images.unsplash.com/photo-1466442929976-97f336a657be?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                alt="Middle Eastern Architecture" 
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="overflow-hidden rounded-lg h-40 md:h-64">
              <img 
                src="https://images.unsplash.com/photo-1469041797191-50ace28483c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                alt="Desert Scene" 
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="overflow-hidden rounded-lg h-40 md:h-64">
              <img 
                src="https://images.unsplash.com/photo-1547573854-74d2a71d0826?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                alt="Middle Eastern Spices" 
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="overflow-hidden rounded-lg h-40 md:h-64">
              <img 
                src="https://images.unsplash.com/photo-1635602528457-a8666cb9c9e5?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                alt="Traditional Market" 
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
        
        <div className="text-center mt-12">
          <Link 
            to="/menu" 
            className="inline-flex items-center text-spice-600 hover:text-spice-700 font-medium text-lg"
          >
            Volledig Menu Bekijken
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-1"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
          </Link>
        </div>
      </div>
      
      {/* Decorative border at bottom */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-spice-500 via-saffron-400 to-olive-500 opacity-40"></div>
    </section>
  );
};

export default FeaturedDishes;
