
import React from 'react';

interface PopularFilterProps {
  showPopular: boolean;
  setShowPopular: (show: boolean) => void;
}

const PopularFilter: React.FC<PopularFilterProps> = ({ showPopular, setShowPopular }) => {
  return (
    <button
      className={`flex items-center text-sm font-medium py-3 ${
        showPopular ? 'text-henna-600' : 'text-gray-500'
      }`}
      onClick={() => setShowPopular(!showPopular)}
    >
      <span className={`w-5 h-5 mr-3 rounded-md border flex items-center justify-center ${
        showPopular 
          ? 'bg-henna-500 border-henna-600' 
          : 'border-clay-300'
      }`}>
        {showPopular && (
          <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-white"><polyline points="20 6 9 17 4 12"></polyline></svg>
        )}
      </span>
      <span className="relative">
        Alleen Populaire Items
        {showPopular && (
          <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-henna-500 to-spice-500"></span>
        )}
      </span>
    </button>
  );
};

export default PopularFilter;
