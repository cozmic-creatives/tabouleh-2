
import React from 'react';
import MenuItem from './MenuItem';
import { MenuItem as MenuItemType } from '@/data/menuData';

interface MenuGridProps {
  items: MenuItemType[];
}

const MenuGrid: React.FC<MenuGridProps> = ({ items }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {items.length > 0 ? (
        items.map((item) => (
          <MenuItem key={item.id} item={item} />
        ))
      ) : (
        <div className="col-span-full text-center py-10">
          <p className="text-gray-500">Geen items gevonden. Probeer een andere categorie.</p>
        </div>
      )}
    </div>
  );
};

export default MenuGrid;
