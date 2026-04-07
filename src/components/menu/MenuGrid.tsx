import React from "react";
import MenuItem from "./MenuItem";
import { Utensils, Flame, UtensilsCrossed, ChefHat, CupSoda } from "lucide-react";

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
  tags?: string[];
}

interface MenuGridProps {
  items: MenuItemType[];
  imageErrors?: Record<number, boolean>;
  onImageError?: (itemId: number) => void;
  showCategoryHeadings?: boolean;
}

const categoryIcons: Record<string, React.ReactNode> = {
  BBQ: <Flame className="w-6 h-6" />,
  Shoarma: <UtensilsCrossed className="w-6 h-6" />,
  Mezze: <ChefHat className="w-6 h-6" />,
  Snacks: <Utensils className="w-6 h-6" />,
  Dranken: <CupSoda className="w-6 h-6" />,
};

const categoryDescriptions: Record<string, string> = {
  BBQ: "Onze grill specialiteiten met salade en mezze",
  Shoarma: "Shoarma gerechten met huisbereide sauzen",
  Mezze: "Traditionele voorgerechten en kleine hapjes",
  Snacks: "Snacks en frietjes",
  Dranken: "Frisdranken en verfrissende dranken",
};

const MenuGrid: React.FC<MenuGridProps> = ({
  items,
  imageErrors = {},
  onImageError = () => {},
  showCategoryHeadings = false,
}) => {
  if (items.length === 0) {
    return (
      <div className="col-span-full text-center py-10">
        <p className="text-gray-500">
          Geen items gevonden. Probeer een andere categorie.
        </p>
      </div>
    );
  }

  // Group items by category when showing all
  if (showCategoryHeadings) {
    const groupedItems: Record<string, MenuItemType[]> = {};
    const categoryOrder = [
      "BBQ",
      "Shoarma",
      "Mezze",
      "Snacks",
      "Dranken",
    ];

    items.forEach((item) => {
      if (!groupedItems[item.category]) {
        groupedItems[item.category] = [];
      }
      groupedItems[item.category].push(item);
    });

    return (
      <div className="space-y-12">
        {categoryOrder.map((category) => {
          const categoryItems = groupedItems[category];
          if (!categoryItems || categoryItems.length === 0) return null;

          return (
            <div
              key={category}
              className="scroll-mt-24"
              id={category.toLowerCase()}
            >
              {/* Category Heading */}
              <div className="mb-8 text-center">
                <div className="inline-flex items-center justify-center gap-3 mb-3">
                  <div className="h-px w-12 bg-gradient-to-r from-transparent to-spice-300"></div>
                  <div className="flex items-center gap-2 text-spice-600">
                    {categoryIcons[category]}
                  </div>
                  <div className="h-px w-12 bg-gradient-to-l from-transparent to-spice-300"></div>
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-2">
                  {category}
                </h2>
                <p className="text-gray-600 max-w-md mx-auto">
                  {categoryDescriptions[category]}
                </p>
              </div>

              {/* Items Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {categoryItems.map((item) => (
                  <MenuItem
                    key={item.id}
                    item={item}
                    hasImageError={imageErrors[item.id] || false}
                    onImageError={() => onImageError(item.id)}
                  />
                ))}
              </div>
            </div>
          );
        })}
      </div>
    );
  }

  // Default grid without headings
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {items.map((item) => (
        <MenuItem
          key={item.id}
          item={item}
          hasImageError={imageErrors[item.id] || false}
          onImageError={() => onImageError(item.id)}
        />
      ))}
    </div>
  );
};

export default MenuGrid;
