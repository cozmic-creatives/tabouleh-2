import React from 'react';
import { Link } from 'react-router-dom';
const featuredDishes = [{
  id: 1,
  name: 'Mix Grilled',
  description: 'Lam brochette, gehakt, kipfilet (met rijst, bulgur met tomatensaus of friet).',
  price: '€18,00',
  image: 'https://images.unsplash.com/photo-1544025162-d76694265947?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
  category: 'BBQ Gerecht'
}, {
  id: 2,
  name: 'Tabouleh',
  description: 'Gehakte peterselie, tomaten, munt, met uien, bulgur.',
  price: '€7,50',
  image: 'https://images.unsplash.com/photo-1605709239047-824038e4d49b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
  category: 'Mezze'
}, {
  id: 3,
  name: 'Quzi',
  description: 'Lamspotje met rijst en 3 soepen (okra met tomatensaus, bonen met tomatensaus, aubergine met tomatensaus).',
  price: '€18,00',
  image: 'https://images.unsplash.com/photo-1574484284002-952d92456975?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
  category: 'Hoofdgerecht'
}];
const FeaturedDishes = () => {
  return <section className="section-padding bg-white">
      <div className="container-custom mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Onze Signatuurgerechten</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">Ontdek onze meest populaire authentieke gerechten, bereid met liefde en traditionele recepten.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredDishes.map(dish => <div key={dish.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 overflow-hidden">
                <img src={dish.image} alt={dish.name} className="w-full h-full object-cover transition-transform hover:scale-105" />
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
                <Link to="/menu" className="text-spice-600 hover:text-spice-700 font-medium inline-flex items-center">
                  Nu bestellen
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-1"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                </Link>
              </div>
            </div>)}
        </div>
        
        <div className="text-center mt-12">
          <Link to="/menu" className="inline-flex items-center text-spice-600 hover:text-spice-700 font-medium text-lg">
            Volledig Menu Bekijken
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-1"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
          </Link>
        </div>
      </div>
    </section>;
};
export default FeaturedDishes;