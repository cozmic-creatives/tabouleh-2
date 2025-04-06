
import React from 'react';

interface CategoryFilterProps {
  categories: string[];
  activeCategory: string;
  setActiveCategory: (category: string) => void;
}

const CategoryFilter: React.FC<CategoryFilterProps> = ({ 
  categories, 
  activeCategory, 
  setActiveCategory 
}) => {
  return (
    <div className="flex overflow-x-auto pb-2 md:pb-0 -mx-2 md:-mx-0 scrollbar-none">
      {categories.map((category) => (
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
  );
};

export default CategoryFilter;
