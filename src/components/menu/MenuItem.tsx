import React from 'react';
import { MenuItem as MenuItemType } from '@/data/menuData';
interface MenuItemProps {
  item: MenuItemType;
}
const MenuItem: React.FC<MenuItemProps> = ({
  item
}) => {
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
        image: item.image
      })}
      </script>

      <div className="aspect-square shrink-0">
        <img src={item.image} alt={item.name} loading="lazy" className="w-full h-full object-cover" />
      </div>
      <div className="w-2/3 p-4 flex flex-col shrink-0">
        <div className="flex justify-between items-start mb-1 gap-4">
          <h3 className="text-xl font-bold text-gray-900">{item.name}</h3>
          <span className="text-spice-600 font-bold border-spice-600">{item.price}</span>
        </div>
        {item.popular && <div className="mb-2">
            <span className="inline-block bg-saffron-100 text-saffron-800 text-xs font-semibold px-2.5 py-0.5 rounded">
              Populair
            </span>
          </div>}
        <div className="grow" />
        <p className="lg:text-base text-sm text-gray-600 border-t border-spice-400 pt-1 mt-2">{item.description}</p>
      </div>
    </div>;
};
export default MenuItem;