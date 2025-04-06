
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
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-6">
        <CategoryFilter 
          categories={menuCategories}
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
        />
        
        <div className="flex items-center mt-4 md:mt-0">
          <PopularFilter 
            showPopular={showPopular}
            setShowPopular={setShowPopular}
          />
        </div>
      </div>
      
      <MenuGrid items={filteredItems} />
    </div>
  );
};

export default MenuList;
