import React from "react";
import { Link } from "react-router-dom";
import menuData from "../data/menuData2.json";
import { processImagePath } from "@/utils/image";
import DishCard from "./DishCard";

// Get the first 3 popular dishes from menuData
const featuredDishes = menuData
  .filter((dish) => dish.popular)
  .slice(0, 3)
  .map((dish) => ({
    id: dish.id,
    name: dish.name,
    description: dish.description,
    price: `€${dish.price.toFixed(2)}`,
    image: processImagePath(dish.image),
    category: dish.category,
  }));

const FeaturedDishes = () => {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Onze Signatuurgerechten
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Ontdek onze meest populaire authentieke gerechten, bereid met liefde
            en traditionele recepten.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredDishes.map((dish) => (
            <DishCard key={dish.id} {...dish} />
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/menu"
            className="inline-flex items-center text-spice-600 hover:text-spice-700 font-medium text-lg"
          >
            Volledig Menu Bekijken
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="ml-1"
            >
              <path d="M5 12h14"></path>
              <path d="m12 5 7 7-7 7"></path>
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};
export default FeaturedDishes;
