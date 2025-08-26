import React from "react";

export default function HeroSection() {
  return (
    <section className="bg-gray-900">
      <div className="grid max-w-screen-xl px-4 py-8 mx-auto gap-6 lg:gap-12 lg:py-16 lg:grid-cols-12">
        {/* Text content */}
        <div className="mr-auto place-self-center lg:col-span-7">
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-snug md:text-5xl xl:text-6xl text-white">
            Your Perfect Stay Awaits
          </h1>
          <p className="mb-6 font-light text-gray-400 md:text-lg lg:text-xl">
            Book luxury rooms at our premium hotels worldwide. Enjoy world-class
            amenities, seamless booking, and unforgettable experiences.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-4">
            <a
              href="#"
              className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-900"
            >
              Book Now
              <svg
                className="w-5 h-5 ml-2 -mr-1"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
            <a
              href="#"
              className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-white border border-gray-700 rounded-lg hover:bg-gray-700 focus:ring-4 focus:ring-gray-800"
            >
              View Rooms
            </a>
          </div>
        </div>

        {/* Image */}
        <div className="lg:col-span-5 flex justify-center items-center">
          <img
            src="https://w0.peakpx.com/wallpaper/934/634/HD-wallpaper-stylish-interior-design-living-room-gray-interior-loft-style-loft-style-fireplace-dark-brown-wood-floor-living-room-modern-interior-design.jpg"
            alt="Hotel interior"
            className="rounded-lg shadow-lg w-full h-auto object-cover"
          />
        </div>
      </div>
    </section>
  );
}
