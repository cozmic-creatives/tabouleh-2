
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';

// Menu data
const menuCategories = ['Alle', 'Voorgerechten', 'Hoofdgerechten', 'Bijgerechten', 'Desserts', 'Dranken'];

const menuItems = [
  {
    id: 1,
    name: 'Hummus',
    description: 'Romige kikkererwten dip met tahini, olijfolie en citroensap.',
    price: '€7,99',
    category: 'Voorgerechten',
    popular: true,
    image: 'https://images.unsplash.com/photo-1622542086387-907436a6e51e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 2,
    name: 'Baba Ghanoush',
    description: 'Rokerige aubergine dip met tahini, knoflook en citroensap.',
    price: '€8,99',
    category: 'Voorgerechten',
    popular: false,
    image: 'https://images.unsplash.com/photo-1541592795542-3b2c63d0ebb1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 3,
    name: 'Tabouleh',
    description: 'Frisse peterseliesalade met bulgur, tomaten, munt en citroendressing.',
    price: '€8,99',
    category: 'Voorgerechten',
    popular: true,
    image: 'https://images.unsplash.com/photo-1605709239047-824038e4d49b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 4,
    name: 'Fattoush',
    description: 'Gemengde groentesalade met geroosterd pitabrood en sumak dressing.',
    price: '€9,99',
    category: 'Voorgerechten',
    popular: false,
    image: 'https://images.unsplash.com/photo-1551729006-2e9ac7af8622?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 5,
    name: 'Kip Shawarma',
    description: 'Gemarineerde kip met onze speciale kruidenmix, geserveerd met knoflooksaus.',
    price: '€13,99',
    category: 'Hoofdgerechten',
    popular: true,
    image: 'https://images.unsplash.com/photo-1527305850-5c5f1c4068a7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 6,
    name: 'Lam Shawarma',
    description: 'Malse gemarineerde lam met onze speciale kruidenmix, geserveerd met tahini saus.',
    price: '€14,99',
    category: 'Hoofdgerechten',
    popular: true,
    image: 'https://images.unsplash.com/photo-1529006557810-274b9b2fc783?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 7,
    name: 'Falafel Schotel',
    description: 'Knapperige kikkererwten balletjes geserveerd met tahini saus, salade en augurken.',
    price: '€11,99',
    category: 'Hoofdgerechten',
    popular: false,
    image: 'https://images.unsplash.com/photo-1553030070-8c94e69d3891?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 8,
    name: 'Kibbeh Schotel',
    description: 'Bulgur schalen gevuld met gekruid gehakt, pijnboompitten en specerijen.',
    price: '€12,99',
    category: 'Hoofdgerechten',
    popular: false,
    image: 'https://images.unsplash.com/photo-1603279542617-84df654a1d84?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 9,
    name: 'Syrische Rijst',
    description: 'Aromatische rijst met vermicelli noedels en onze speciale kruidenmix.',
    price: '€4,99',
    category: 'Bijgerechten',
    popular: false,
    image: 'https://images.unsplash.com/photo-1536304993881-ff6e9eefa2a6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 10,
    name: 'Gegrilde Groenten',
    description: 'Seizoensgroenten gegrild met olijfolie en kruiden.',
    price: '€5,99',
    category: 'Bijgerechten',
    popular: false,
    image: 'https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 11,
    name: 'Baklava',
    description: 'Lagen filodeeg gevuld met gehakte noten en gezoet met siroop.',
    price: '€6,99',
    category: 'Desserts',
    popular: true,
    image: 'https://images.unsplash.com/photo-1596149615693-decbf85a5c59?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 12,
    name: 'Kunafa',
    description: 'Zoete kaasgebak gedrenkt in suikersiroop.',
    price: '€7,99',
    category: 'Desserts',
    popular: false,
    image: 'https://images.unsplash.com/photo-1555035900-86c449fa5d2c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 13,
    name: 'Syrische Muntthee',
    description: 'Zwarte thee met verse muntblaadjes en suiker.',
    price: '€3,99',
    category: 'Dranken',
    popular: false,
    image: 'https://images.unsplash.com/photo-1556679343-c1c1c5b9a0e6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 14,
    name: 'Jallab',
    description: 'Zoete siroop gemaakt van dadels, druiven en rozenwater, gegarneerd met pijnboompitten.',
    price: '€4,99',
    category: 'Dranken',
    popular: true,
    image: 'https://images.unsplash.com/photo-1570831739435-6601aa3fa4fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80'
  }
];

const MenuList = () => {
  const [activeCategory, setActiveCategory] = useState('Alle');
  const [showPopular, setShowPopular] = useState(false);

  const filteredItems = menuItems.filter(item => {
    const categoryMatch = activeCategory === 'Alle' || item.category === activeCategory;
    const popularMatch = showPopular ? item.popular : true;
    return categoryMatch && popularMatch;
  });

  return (
    <div className="container-custom mx-auto py-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
        <div className="flex overflow-x-auto pb-2 md:pb-0 -mx-2 md:-mx-0 scrollbar-none">
          {menuCategories.map((category) => (
            <button
              key={category}
              className={`px-4 py-2 mx-2 md:mx-1 text-sm rounded-full transition-colors whitespace-nowrap ${
                activeCategory === category 
                  ? 'bg-spice-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
        
        <div className="flex items-center">
          <button
            className={`flex items-center text-sm font-medium ${
              showPopular ? 'text-spice-600' : 'text-gray-500'
            }`}
            onClick={() => setShowPopular(!showPopular)}
          >
            <span className={`w-4 h-4 mr-2 rounded-sm border flex items-center justify-center ${
              showPopular 
                ? 'bg-spice-600 border-spice-600' 
                : 'border-gray-300'
            }`}>
              {showPopular && (
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-white"><polyline points="20 6 9 17 4 12"></polyline></svg>
              )}
            </span>
            Alleen Populaire Items
          </button>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredItems.length > 0 ? (
          filteredItems.map((item) => (
            <div key={item.id} className="flex bg-white rounded-lg shadow-md overflow-hidden">
              <div className="w-1/3">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-2/3 p-4">
                <div className="flex justify-between items-start mb-1">
                  <h3 className="text-lg font-bold text-gray-900">{item.name}</h3>
                  <span className="text-spice-600 font-bold">{item.price}</span>
                </div>
                {item.popular && (
                  <div className="mb-2">
                    <span className="inline-block bg-saffron-100 text-saffron-800 text-xs font-semibold px-2.5 py-0.5 rounded">
                      Populair
                    </span>
                  </div>
                )}
                <p className="text-sm text-gray-600">{item.description}</p>
                <Button className="mt-3 bg-spice-600 hover:bg-spice-700 text-sm px-3 py-1 h-auto" size="sm">
                  Toevoegen aan Bestelling
                </Button>
              </div>
            </div>
          ))
        ) : (
          <div className="col-span-full text-center py-10">
            <p className="text-gray-500">Geen items gevonden. Probeer een andere categorie.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default MenuList;
