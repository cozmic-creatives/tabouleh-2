
import React, { useState, useEffect } from 'react';

interface HeroImageTransitionProps {
  images: string[];
  interval?: number;
  className?: string;
}

const HeroImageTransition: React.FC<HeroImageTransitionProps> = ({
  images,
  interval = 4000, // Default 4 seconds
  className = ''
}) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    if (images.length <= 1) return;

    const timer = setInterval(() => {
      setIsTransitioning(true);
      
      // After the fade out, change the image
      const imageChangeTimer = setTimeout(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        
        // After the image changes, start fading in
        setTimeout(() => {
          setIsTransitioning(false);
        }, 50);
      }, 500); // Half the transition time
      
      return () => clearTimeout(imageChangeTimer);
    }, interval);

    return () => clearInterval(timer);
  }, [images, interval]);

  return (
    <div className={`relative w-full aspect-square ${className}`}>
      <img 
        src={images[currentImageIndex]} 
        alt="Hero illustration" 
        className={`absolute inset-0 rounded-2xl shadow-lg z-10 w-full h-full object-cover transition-opacity duration-1000 ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}
      />
    </div>
  );
};

export default HeroImageTransition;
