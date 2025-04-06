
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
    <div className="flex flex-wrap gap-2">
      {categories.map((category) => (
        <button
          key={category}
          className={`px-4 py-2 text-sm rounded-full transition-colors ${
            activeCategory === category 
              ? 'bg-spice-600 text-white shadow-md'
              : 'bg-clay-50 text-gray-700 hover:bg-clay-100 hover:border-spice-300 border border-transparent'
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
