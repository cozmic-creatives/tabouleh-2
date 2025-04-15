
import React from 'react';
import { MenuItem as MenuItemType } from '@/data/menuData';
import { Badge } from '@/components/ui/badge';

interface MenuItemProps {
  item: MenuItemType;
  hasImageError?: boolean;
  onImageError?: () => void;
}

const MenuItem: React.FC<MenuItemProps> = ({
  item,
  hasImageError = false,
  onImageError = () => {}
}) => {
  // Map of food categories to fallback images for items that fail to load
  const fallbackImages: Record<string, string> = {
    'BBQ Gerechten': 'https://images.unsplash.com/photo-1544025162-d76694265947?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    'Onze Gerechten': 'https://images.unsplash.com/photo-1585238342024-78d387f4a707?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    'Mezze': 'https://images.unsplash.com/photo-1622542086387-907436a6e51e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    'Soepen': 'https://images.unsplash.com/photo-1547592180-85f173990554?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    'Sandwiches': 'https://images.unsplash.com/photo-1585938389612-a552a28d6914?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    'Menu Combinaties': 'https://images.unsplash.com/photo-1544681280-d257afe2735c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    'Dranken': 'https://images.unsplash.com/photo-1548839140-29a749e1cf4d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
  };

  // Use either the item's image, or the fallback if we have an error
  const imageToDisplay = hasImageError 
    ? fallbackImages[item.category] || 'https://images.unsplash.com/photo-1576107232684-1279f390859f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
    : item.image;

  return <div className="flex bg-white rounded-lg shadow-md overflow-hidden border">
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
        image: imageToDisplay
      })}
      </script>

      <div className="w-1/3 aspect-square shrink-0">
        <img 
          src={imageToDisplay} 
          alt={item.name} 
          loading="lazy" 
          className="w-full h-full object-cover aspect-square" 
          onError={onImageError}
        />
      </div>
      <div className="w-2/3 p-4 flex flex-col shrink-0">
        <div className="flex justify-between items-start mb-1 gap-4">
          <h3 className="text-xl font-bold text-gray-900">{item.name}</h3>
          <span className="text-spice-600 font-bold border-spice-600">{item.price}</span>
        </div>
        <div className="flex flex-wrap gap-2 mb-2 mt-1">
          {item.popular && <Badge variant="secondary" className="bg-saffron-100 border text-saffron-800 hover:bg-saffron-200 border-saffron-500">
              Populair
            </Badge>}
          {item.serves && item.serves !== "1" && item.serves !== 1 && <Badge variant="outline" className="bg-spice-50 text-spice-800 border-spice-200">
              {item.serves} personen
            </Badge>}
        </div>
        <div className="grow" />
        <p className="lg:text-base text-sm text-gray-600 border-t border-spice-400 pt-1 mt-2">{item.description}</p>
      </div>
    </div>;
};

export default MenuItem;
