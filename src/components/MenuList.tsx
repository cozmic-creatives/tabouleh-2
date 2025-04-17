
import React, { useState } from 'react';
import { menuCategories, menuItems } from '@/data/menuData';
import CategoryFilter from './menu/CategoryFilter';
import PopularFilter from './menu/PopularFilter';
import MenuGrid from './menu/MenuGrid';
import { Badge } from '@/components/ui/badge';

const MenuList = () => {
  const [activeCategory, setActiveCategory] = useState('Alle');
  const [showPopular, setShowPopular] = useState(false);
  const [imageErrors, setImageErrors] = useState<Record<number, boolean>>({});

  const handleImageError = (itemId: number) => {
    setImageErrors(prev => ({
      ...prev,
      [itemId]: true
    }));
  };

  const filteredItems = menuItems.filter(item => {
    const categoryMatch = activeCategory === 'Alle' || item.category === activeCategory;
    const popularMatch = showPopular ? item.popular : true;
    return categoryMatch && popularMatch;
  });

  return (
    <div className="container-custom mx-auto py-8">
      <div className="flex flex-col gap-6">
        <div className="flex items-center justify-between flex-wrap">
          <CategoryFilter 
            categories={menuCategories}
            activeCategory={activeCategory}
            setActiveCategory={setActiveCategory}
          />
          
          <Badge variant="outline" className="bg-green-50 text-green-800 border-green-300 px-3 py-1">
            100% Halal
          </Badge>
        </div>
        
        <div>
          <PopularFilter 
            showPopular={showPopular}
            setShowPopular={setShowPopular}
          />
        </div>
      </div>
      
      <div className="mt-8">
        <MenuGrid 
          items={filteredItems} 
          imageErrors={imageErrors}
          onImageError={handleImageError}
        />
      </div>
    </div>
  );
};

export default MenuList;
