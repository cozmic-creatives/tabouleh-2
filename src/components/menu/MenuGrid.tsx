import React from "react";
import MenuItem from "./MenuItem";
// import { MenuItem as MenuItemType } from '@/data/menuData';

// Define the MenuItem type locally or move to a shared types file
export interface MenuItemType {
  id: number;
  name: string;
  description: string;
  price: number;
  category: string;
  popular: boolean;
  image: string;
  serves?: string | number;
}

interface MenuGridProps {
  items: MenuItemType[];
  imageErrors?: Record<number, boolean>;
  onImageError?: (itemId: number) => void;
}

const MenuGrid: React.FC<MenuGridProps> = ({
  items,
  imageErrors = {},
  onImageError = () => {},
}) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {items.length > 0 ? (
        items.map((item) => (
          <MenuItem
            key={item.id}
            item={item}
            hasImageError={imageErrors[item.id] || false}
            onImageError={() => onImageError(item.id)}
          />
        ))
      ) : (
        <div className="col-span-full text-center py-10">
          <p className="text-gray-500">
            Geen items gevonden. Probeer een andere categorie.
          </p>
        </div>
      )}
    </div>
  );
};

export default MenuGrid;
