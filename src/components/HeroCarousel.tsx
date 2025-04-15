
import React, { useEffect, useState } from 'react';
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { AspectRatio } from "@/components/ui/aspect-ratio";

// Array of hero images
const heroImages = [
  "https://images.unsplash.com/photo-1707151550757-fd379e80d1d2?q=80&w=2980&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1541518763669-27fef9b49584?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1611956425642-d5a8169abd63?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1579027989536-b7b1f875659b?q=80&w=2000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
];

const HeroCarousel: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    // Set up rotation interval (4 seconds)
    const rotationInterval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % heroImages.length);
    }, 4000);

    // Clean up interval
    return () => clearInterval(rotationInterval);
  }, []);

  return (
    <Carousel className="w-full" selectedIndex={activeIndex} opts={{ loop: true }}>
      <CarouselContent className="transition-all duration-500">
        {heroImages.map((image, index) => (
          <CarouselItem key={index} className="relative">
            <AspectRatio ratio={16/9}>
              <img 
                src={image} 
                alt={`Syrisch Eten #${index + 1}`} 
                className="rounded-2xl shadow-lg z-10 w-full h-full object-cover transform -rotate-2"
              />
            </AspectRatio>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
};

export default HeroCarousel;
