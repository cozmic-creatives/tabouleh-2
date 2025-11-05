import React from "react";
import { MenuItemType } from "@/components/menu/MenuGrid";
import { Badge } from "@/components/ui/badge";
import { processImagePath } from "@/utils/image";
import { ChefHat, Utensils, Coffee, IceCream, CupSoda } from "lucide-react";

interface MenuItemProps {
  item: MenuItemType;
  hasImageError?: boolean;
  onImageError?: () => void;
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
  className: "w-12 h-12 text-spice-300 opacity-60",
  strokeWidth: 1.25,
};

const getCategoryIcon = (category: string) => {
  const IconComponent =
    categoryIconMap[category as keyof typeof categoryIconMap] || ChefHat;
  return <IconComponent {...fallbackIconProps} />;
};

const MenuItem: React.FC<MenuItemProps> = ({
  item,
  hasImageError = false,
  onImageError = () => {},
}) => {
  // Format price with Euro sign and proper formatting
  const formattedPrice = `€${item.price.toFixed(2).replace(".", ",")}`;

  // Check if image is missing or has error
  const hasNoImage = !item.image || hasImageError;
  const imageToDisplay = processImagePath(item.image);

  // Build schema data conditionally
  const schemaData: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "MenuItem",
    name: item.name,
    offers: {
      "@type": "Offer",
      price: item.price,
      priceCurrency: "EUR",
    },
  };

  // Only add description if it exists and is not empty
  if (item.description && item.description.trim() !== "") {
    schemaData.description = item.description;
  }

  // Only add image if it exists
  if (imageToDisplay) {
    schemaData.image = processImagePath(imageToDisplay);
  }

  return (
    <div className="flex bg-white rounded-lg shadow-md overflow-hidden border border-spice-300">
      {/* JSON-LD structured data for this menu item */}
      <script type="application/ld+json">{JSON.stringify(schemaData)}</script>

      <div className="w-1/3 aspect-square shrink-0 bg-gradient-to-br from-saffron-100 via-spice-100 to-amber-200 overflow-hidden">
        {hasNoImage ? (
          <div className="w-full h-full flex items-center justify-center">
            {getCategoryIcon(item.category)}
          </div>
        ) : (
          <img
            src={imageToDisplay}
            alt={item.name}
            loading="lazy"
            onError={onImageError}
            className="w-full h-full object-cover"
          />
        )}
      </div>
      <div className="w-2/3 p-4 flex flex-col shrink-0">
        <div className="flex justify-between items-start mb-1 gap-4">
          <h3 className="text-xl font-bold text-gray-900">{item.name}</h3>
          <span className="text-spice-600 font-bold border-spice-600">
            {formattedPrice}
          </span>
        </div>
        <div className="flex flex-wrap gap-2 mb-2 mt-1">
          {item.popular && (
            <Badge
              variant="secondary"
              className="bg-saffron-100 border text-saffron-800 hover:bg-saffron-200 border-saffron-500"
            >
              Populair
            </Badge>
          )}
          {item.serves && item.serves !== "1" && item.serves !== 1 && (
            <Badge
              variant="outline"
              className="bg-spice-50 text-spice-800 border-spice-200"
            >
              {item.serves} personen
            </Badge>
          )}
          {item.tags &&
            item.tags.map((tag, index) => (
              <Badge
                key={index}
                variant="outline"
                className="bg-olive-50 text-olive-800 border-olive-300"
              >
                {tag}
              </Badge>
            ))}
        </div>
        <div className="grow" />
        {item.description && item.description.trim() !== "" && (
          <p className="lg:text-base text-sm text-gray-600 border-t border-spice-300 pt-1 mt-2">
            {item.description}
          </p>
        )}
      </div>
    </div>
  );
};

export default MenuItem;
