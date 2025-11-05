import React from "react";
import { Link } from "react-router-dom";
import menuData from "../data/menuData2.json";
import { processImagePath } from "@/utils/image";
import DishCard from "./DishCard";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

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
      <div className="container mx-auto">
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
          <Button 
            asChild 
            size="lg"
            variant="outline"
            className="text-spice-600 border-spice-600 hover:bg-spice-50 hover:text-spice-700"
          >
            <Link to="/menu">
              Volledig Menu Bekijken
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};
export default FeaturedDishes;
