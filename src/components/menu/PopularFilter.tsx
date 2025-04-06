
import React from 'react';

interface PopularFilterProps {
  showPopular: boolean;
  setShowPopular: (show: boolean) => void;
}

const PopularFilter: React.FC<PopularFilterProps> = ({ showPopular, setShowPopular }) => {
  return (
    <button
      className={`flex items-center text-sm font-medium ${
        showPopular ? 'text-spice-600' : 'text-gray-500'
      }`}
      onClick={() => setShowPopular(!showPopular)}
    >
      <span className={`w-4 h-4 mr-2 rounded-sm border flex items-center justify-center ${
        showPopular 
          ? 'bg-spice-600 border-spice-600' 
          : 'border-gray-300'
      }`}>
        {showPopular && (
          <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-white"><polyline points="20 6 9 17 4 12"></polyline></svg>
        )}
      </span>
      Alleen Populaire Items
    </button>
  );
};

export default PopularFilter;
