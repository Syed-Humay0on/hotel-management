import React, { useEffect, useState } from "react";

const images = [
  "https://w0.peakpx.com/wallpaper/76/628/HD-wallpaper-living-room-loft-style-gray-concrete-wall-in-the-living-room-modern-interior-design-gray-large-sofa-stylish-interior-design.jpg",
  "https://w0.peakpx.com/wallpaper/852/579/HD-wallpaper-living-room-loft-style-stylish-modern-interior-fireplace-in-the-living-room-modern-interior-design.jpg",
  "https://w0.peakpx.com/wallpaper/572/110/HD-wallpaper-living-room-kitchen-dinning-room-room-design-modern-stylish-interior-design-dining-table-modern-interior-design.jpg",
];

export default function BannerCarouselWithJumbotron() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Carousel background */}
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

      {/* Overlay Jumbotron */}
      <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
        <div className="px-6 mx-auto max-w-3xl text-center">
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-tight text-white md:text-5xl lg:text-6xl">
            Experience Luxury & Comfort
          </h1>
          <p className="mb-8 text-lg font-light text-gray-200 md:text-xl">
            Book your perfect stay with us — elegant rooms, world-class service,
            and unforgettable experiences await.
          </p>
          <div className="flex flex-col sm:flex-row sm:justify-center gap-4">
            {/* Primary button */}
            <a
              href="#"
              className="inline-flex items-center justify-center px-6 py-3 text-base font-semibold text-white bg-indigo-600 rounded-full shadow-md hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-400 transition"
            >
              Book Now
              <svg
                className="w-4 h-4 ml-2"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </a>
            {/* Secondary button */}
            <a
              href="#"
              className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-white border border-white rounded-full hover:bg-white hover:text-gray-900 transition"
            >
              View Rooms
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

