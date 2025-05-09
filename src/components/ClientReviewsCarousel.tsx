
import React, { useEffect, useRef } from "react";
import { Star } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface Review {
  name: string;
  initials: string;
  content: string;
  rating: number;
  timeAgo: string;
}

const reviews: Review[] = [
  {
    name: "Hassan Khaled",
    initials: "HK",
    content: "Top lekker etentje ik heb juist gepakt tashrip was top lekker",
    rating: 5,
    timeAgo: "Een week geleden"
  },
  {
    name: "Aboudi Alfadhil",
    initials: "AA",
    content: "Het was heerlijk, de service top en de medewerkers super vriendelijk. Ik kom zonder twijfel terug!",
    rating: 5,
    timeAgo: "Een week geleden"
  },
  {
    name: "Omer Aljbory",
    initials: "OA",
    content: "Very tasty and good service thanks alot 🌹",
    rating: 5,
    timeAgo: "Een week geleden"
  },
  {
    name: "Ahmed Rzgar",
    initials: "AR",
    content: "Very delicious, Thanks!",
    rating: 5,
    timeAgo: "Een week geleden"
  },
  {
    name: "Sara Mahmoud",
    initials: "SM",
    content: "De beste Syrische keuken in Gent! De hummus is perfect bereid, zeker een aanrader!",
    rating: 5,
    timeAgo: "Twee weken geleden"
  },
  {
    name: "Mohammed Ali",
    initials: "MA",
    content: "Authentieke smaken die me terugbrengen naar Damascus. Geweldig eten en sfeer!",
    rating: 5,
    timeAgo: "Een maand geleden"
  },
  {
    name: "Lisa Verbeeck",
    initials: "LV",
    content: "Heerlijk gegeten met vrienden, de mix grill was fantastisch en de bediening zeer vriendelijk!",
    rating: 5,
    timeAgo: "Drie weken geleden"
  }
];

const ClientReviewsCarousel = () => {
  const carouselRef = useRef<HTMLDivElement>(null);
  
  // Set up auto-scroll animation
  useEffect(() => {
    let intervalId: number;
    
    if (carouselRef.current) {
      const carousel = carouselRef.current;
      intervalId = window.setInterval(() => {
        const nextButton = carousel.querySelector('[aria-label="Next slide"]') as HTMLButtonElement;
        if (nextButton) {
          nextButton.click();
        }
      }, 5000); // Change slide every 5 seconds
    }
    
    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, []);

  return (
    <div className="relative w-full overflow-hidden" ref={carouselRef}>
      {/* Left gradient fade */}
      <div className="absolute left-0 top-0 z-10 h-full w-16 bg-gradient-to-r from-clay-50 to-transparent pointer-events-none" />
      
      <Carousel
        opts={{
          align: "start",
          loop: true,
          dragFree: true,
          containScroll: "trimSnaps",
        }}
        className="w-full"
      >
        <CarouselContent className="-ml-4">
          {reviews.map((review, index) => (
            <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
              <Card className="h-full border border-clay-200 transition-all duration-500 hover:shadow-md">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Avatar className="h-10 w-10 mr-3">
                      <AvatarFallback className="bg-spice-100 text-spice-600">
                        {review.initials}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-medium">{review.name}</p>
                      <div className="flex text-amber-500">
                        {Array.from({ length: review.rating }).map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-current" />
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-600">{review.content}</p>
                  <p className="text-gray-400 text-sm mt-3">{review.timeAgo}</p>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        
        <div className="hidden md:block">
          <CarouselPrevious className="left-2 bg-white" />
          <CarouselNext className="right-2 bg-white" />
        </div>
      </Carousel>
      
      {/* Right gradient fade */}
      <div className="absolute right-0 top-0 z-10 h-full w-16 bg-gradient-to-l from-clay-50 to-transparent pointer-events-none" />
    </div>
  );
};

export default ClientReviewsCarousel;
