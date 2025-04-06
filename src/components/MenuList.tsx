
import React, { useState } from 'react';
import { menuCategories, menuItems } from '@/data/menuData';
import CategoryFilter from './menu/CategoryFilter';
import PopularFilter from './menu/PopularFilter';
import MenuGrid from './menu/MenuGrid';

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
      <div className="flex flex-col gap-6">
        <CategoryFilter 
          categories={menuCategories}
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
        />
        
        <div>
          <PopularFilter 
            showPopular={showPopular}
            setShowPopular={setShowPopular}
          />
        </div>
      </div>
      
      <div className="mt-8">
        <MenuGrid items={filteredItems} />
      </div>
    </div>
  );
};

export default MenuList;
