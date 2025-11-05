import React, { useState } from "react";
import { menuCategories } from "@/data/constants";
import menuItems from "@/data/menuData2.json";
import CategoryFilter from "./menu/CategoryFilter";
import PopularFilter from "./menu/PopularFilter";
import MenuGrid from "./menu/MenuGrid";

const MenuList = () => {
  const [activeCategory, setActiveCategory] = useState("Alle");
  const [showPopular, setShowPopular] = useState(false);
  const [imageErrors, setImageErrors] = useState<Record<number, boolean>>({});
  const handleImageError = (itemId: number) => {
    setImageErrors((prev) => ({
      ...prev,
      [itemId]: true,
    }));
  };
  const filteredItems = menuItems.filter((item) => {
    const categoryMatch =
      activeCategory === "Alle" || item.category === activeCategory;
    const popularMatch = showPopular ? item.popular : true;
    return categoryMatch && popularMatch;
  });
  return (
    <div className="container-custom mx-auto py-8">
      <div className="flex flex-col gap-3">
        <div className="flex items-center justify-between flex-wrap">
          <CategoryFilter
            categories={menuCategories}
            activeCategory={activeCategory}
            setActiveCategory={setActiveCategory}
          />
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
          showCategoryHeadings={activeCategory === "Alle"}
        />
      </div>
    </div>
  );
};
export default MenuList;
