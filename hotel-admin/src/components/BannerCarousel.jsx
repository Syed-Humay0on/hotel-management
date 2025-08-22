import React, { useEffect, useState } from "react";

const images = [
  "https://img.freepik.com/premium-photo/polar-bear-front-city-arctic-snowcovered-houses-high-ice-mountains_864559-7112.jpg",
  "https://img.freepik.com/premium-photo/dark-room-with-bed-lamp-lamp-window-with-words-hotel-it_890746-36.jpg",
  "https://img.freepik.com/premium-photo/bedroom-with-two-beds-lamp-wall_889227-9371.jpg",
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

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/90 flex items-center justify-center">
        <div className="px-6 mx-auto max-w-3xl text-center">
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-tight text-white md:text-5xl lg:text-6xl">
            Experience Luxury & Comfort
          </h1>
          <p className="mb-8 text-lg font-light text-gray-300 md:text-xl">
            Book your perfect stay with us — elegant rooms, world-class service,
            and unforgettable experiences await.
          </p>
          <div className="flex flex-col sm:flex-row sm:justify-center gap-4">
            {/* Primary muted button */}
            <a
              href="#"
              className="inline-flex items-center justify-center px-6 py-3 text-base font-semibold text-gray-900 bg-gray-200 rounded-full shadow-md hover:bg-gray-300 transition"
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
            {/* Secondary outlined muted button */}
            <a
              href="#"
              className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-gray-200 border border-gray-300 rounded-full hover:bg-gray-100 hover:text-gray-900 transition"
            >
              View Rooms
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
