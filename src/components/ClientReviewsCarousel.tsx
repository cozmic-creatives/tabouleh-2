
import React, { useEffect, useRef, useState } from "react";
import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";

interface Review {
  name: string;
  initials: string;
  content: string;
  rating: number;
  timeAgo: string;
}

const reviews: Review[] = [
  {
    name: "Cindy Van den Abeele",
    initials: "CV",
    content: "Super lekker",
    rating: 5,
    timeAgo: "Een dag geleden"
  },
  {
    name: "Sonia Boufennara",
    initials: "SB",
    content: "Heel eten en fijne service. Sfeervol restaurant",
    rating: 5,
    timeAgo: "Drie weken geleden"
  },
  {
    name: "Nina Sarens",
    initials: "NS",
    content: "Lekker eten, scherpe prijzen!",
    rating: 5,
    timeAgo: "Vier dagen geleden"
  },
  {
    name: "X O",
    initials: "XO",
    content: "Heelijk, super schoon, vriendelijkeheid en de service was top 10/10.",
    rating: 5,
    timeAgo: "Twee weken geleden"
  },
  {
    name: "Joy Brabant",
    initials: "JB",
    content: "Heerlijke gerechten en super vriendelijke mensen !",
    rating: 5,
    timeAgo: "Drie weken geleden"
  },
  {
    name: "Omer Aljbory",
    initials: "OA",
    content: "very tasty and good service thanks alot 🌹",
    rating: 5,
    timeAgo: "Een maand geleden"
  }
];

const ClientReviewsCarousel = () => {
  const [api, setApi] = useState<CarouselApi>();
  const intervalRef = useRef<number | null>(null);
  const isMobile = useIsMobile();
  
  useEffect(() => {
    if (!api) return;
    
    // Start autoplay when component mounts and api is available
    intervalRef.current = window.setInterval(() => {
      api.scrollNext();
    }, 5000);
    
    // Clean up interval on unmount
    return () => {
      if (intervalRef.current !== null) {
        window.clearInterval(intervalRef.current);
      }
    };
  }, [api]);

  return (
    <div className="flex flex-col items-center">
      <div className="relative w-full overflow-hidden mb-6">
        {/* Left gradient fade - only show on non-mobile */}
        {!isMobile && (
          <div className="absolute left-0 top-0 z-10 h-full w-16 bg-gradient-to-r from-clay-50 to-transparent pointer-events-none" />
        )}
        
        <Carousel
          opts={{
            align: "start",
            loop: true,
            dragFree: true,
            containScroll: "trimSnaps",
          }}
          setApi={setApi}
          className="w-full"
        >
          <CarouselContent className="-ml-4">
            {reviews.map((review, index) => (
              <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3 xl:basis-1/4">
                <Card className="h-full border border-clay-200 transition-all duration-500 hover:shadow-md">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="h-10 w-10 mr-3 bg-spice-100 text-spice-600 rounded-full flex items-center justify-center text-sm font-medium">
                        {review.initials}
                      </div>
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
            <CarouselPrevious className="left-2 bg-white z-20 shadow-lg" />
            <CarouselNext className="right-2 bg-white z-20 shadow-lg" />
          </div>
        </Carousel>
        
        {/* Right gradient fade - only show on non-mobile */}
        {!isMobile && (
          <div className="absolute right-0 top-0 z-10 h-full w-16 bg-gradient-to-l from-clay-50 to-transparent pointer-events-none" />
        )}
      </div>
      
      {/* Link to Google Maps reviews */}
      <a 
        href="https://maps.app.goo.gl/m1WNqSaBWiaUCdH58" 
        target="_blank" 
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center"
      >
        <Button variant="outline" className="border-spice-200 text-spice-700 hover:bg-spice-50">
          Bekijk meer reviews of laat jouw ervaring achter
        </Button>
      </a>
    </div>
  );
};

export default ClientReviewsCarousel;
