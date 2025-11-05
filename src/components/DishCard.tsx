import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ChefHat, Utensils, Coffee, IceCream, CupSoda, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface DishCardProps {
  id: number;
  name: string;
  description: string;
  price: string;
  image: string;
  category: string;
}

// Category-specific fallback icons
const categoryIconMap = {
  Mezze: ChefHat,
  Hoofdgerechten: Utensils,
  Dranken: CupSoda,
  "Warme Dranken": Coffee,
  Desserts: IceCream,
};

const fallbackIconProps = {
  className: "w-16 h-16 text-spice-300 opacity-60",
  strokeWidth: 1.25,
};

const getCategoryIcon = (category: string) => {
  const IconComponent =
    categoryIconMap[category as keyof typeof categoryIconMap] || ChefHat;
  return <IconComponent {...fallbackIconProps} />;
};

const DishCard: React.FC<DishCardProps> = ({
  name,
  description,
  price,
  image,
  category,
}) => {
  const [hasImageError, setHasImageError] = useState(false);
  const hasNoImage = !image || hasImageError;

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow flex flex-col h-full border border-spice-300">
      <div className="h-48 overflow-hidden bg-gradient-to-br from-saffron-100 via-spice-100 to-amber-200">
        {hasNoImage ? (
          <div className="w-full h-full flex items-center justify-center">
            {getCategoryIcon(category)}
          </div>
        ) : (
          <img
            src={image}
            alt={name}
            loading="lazy"
            onError={() => setHasImageError(true)}
            className="w-full h-full object-cover transition-transform hover:scale-105"
          />
        )}
      </div>
      <div className="p-6 flex flex-col grow">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-bold text-gray-900">{name}</h3>
          <span className="text-spice-600 font-bold">{price}</span>
        </div>
        <div className="mb-4">
          <span className="inline-block bg-olive-100 text-olive-800 text-xs font-semibold px-2.5 py-0.5 rounded">
            {category}
          </span>
        </div>
        <p className="text-gray-600 mb-4">{description}</p>
        <div className="grow"></div>

        <div className="pt-2">
          <Button 
            asChild 
            variant="ghost" 
            className="text-spice-600 hover:text-spice-700 hover:bg-spice-50 p-0 h-auto font-medium"
          >
            <Link to="/menu">
              Nu bestellen
              <ArrowRight className="ml-1 w-4 h-4" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default DishCard;

