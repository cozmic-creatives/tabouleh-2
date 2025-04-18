import React, { useState, useEffect } from "react";

interface HeroImageTransitionProps {
  images: string[];
  interval?: number;
  className?: string;
}

const HeroImageTransition: React.FC<HeroImageTransitionProps> = ({
  images,
  interval = 4000, // Default 4 seconds
  className = "",
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [nextIndex, setNextIndex] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    if (images.length <= 1) return;

    const timer = setInterval(() => {
      // Start transition
      setIsTransitioning(true);

      // Calculate next image index
      const next = (currentIndex + 1) % images.length;
      setNextIndex(next);

      // After transition completes, update the current image and reset
      const transitionTimer = setTimeout(() => {
        setCurrentIndex(next);
        setIsTransitioning(false);
      }, 1000); // Match the CSS transition duration

      return () => clearTimeout(transitionTimer);
    }, interval);

    return () => clearInterval(timer);
  }, [images, interval, currentIndex]);

  return (
    <div
      className={`relative w-full aspect-square overflow-hidden ${className}`}
    >
      {/* Bottom layer - next image (will be revealed) */}
      <img
        src={images[nextIndex]}
        alt="Hero illustration"
        className="absolute inset-0 rounded-2xl shadow-lg w-full h-full object-cover"
      />

      {/* Top layer - current image (will fade out) */}
      <img
        src={images[currentIndex]}
        alt="Hero illustration"
        className={`absolute inset-0 rounded-2xl shadow-lg w-full h-full object-cover transition-opacity duration-1000 ${
          isTransitioning ? "opacity-0" : "opacity-100"
        }`}
      />
    </div>
  );
};

export default HeroImageTransition;
