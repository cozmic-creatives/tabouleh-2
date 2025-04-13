
import React from 'react';
import { Button } from '@/components/ui/button';
import { MenuItem as MenuItemType } from '@/data/menuData';

interface MenuItemProps {
  item: MenuItemType;
}

const MenuItem: React.FC<MenuItemProps> = ({ item }) => {
  return (
    <div className="flex bg-white rounded-lg shadow-md overflow-hidden">
      {/* JSON-LD structured data for this menu item */}
      <script type="application/ld+json">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'MenuItem',
          name: item.name,
          description: item.description,
          offers: {
            '@type': 'Offer',
            price: item.price.replace('€', ''),
            priceCurrency: 'EUR'
          },
          image: item.image
        })}
      </script>

      <div className="w-1/3">
        <img 
          src={item.image} 
          alt={item.name} 
          className="w-full h-full object-cover aspect-square"
          loading="lazy" // Add lazy loading for images
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
  );
};

export default MenuItem;
