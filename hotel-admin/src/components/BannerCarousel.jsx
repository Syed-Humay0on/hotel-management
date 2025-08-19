import React, { useEffect, useState } from "react";

const images = [
  "https://w0.peakpx.com/wallpaper/553/100/HD-wallpaper-luxury-design-house-design-stairs-beautiful-peace-livingroom-furniture-nice-summer-room-white-wood-luxury.jpg",
  "https://w0.peakpx.com/wallpaper/616/740/HD-wallpaper-luxury-living-room-luxurious-living-room-home-theater-living-room.jpg",
  "https://w0.peakpx.com/wallpaper/717/803/HD-wallpaper-stylish-design-and-interior-living-room-country-house-luxury-house-stylish-interior-design.jpg"
];

export default function BannerCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`Slide ${index + 1}`}
          className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}
    </div>
  );
}
