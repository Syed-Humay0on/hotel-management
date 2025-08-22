import React from "react";

const images = [
  "https://w0.peakpx.com/wallpaper/934/634/HD-wallpaper-stylish-interior-design-living-room-gray-interior-loft-style-loft-style-fireplace-dark-brown-wood-floor-living-room-modern-interior-design.jpg",
  "https://w0.peakpx.com/wallpaper/72/665/HD-wallpaper-modern-bedroom-interior-design-stylish-interior-bedroom-loft-style-painting-with-a-large-fingerprint-concrete-floor-in-the-bedroom.jpg",
  "https://w0.peakpx.com/wallpaper/623/935/HD-wallpaper-bedroom-project-stylish-interior-design-bedroom-modern-classic-interior-design-silver-butterflies-on-the-wall-classic-interior-style.jpg",
  "https://w0.peakpx.com/wallpaper/878/912/HD-wallpaper-gray-stylish-bedroom-interior-modern-interior-design-classic-style-bedroom-bedroom-in-gray-bedroom-project.jpg",
  "https://w0.peakpx.com/wallpaper/76/628/HD-wallpaper-living-room-loft-style-gray-concrete-wall-in-the-living-room-modern-interior-design-gray-large-sofa-stylish-interior-design.jpg",
  "https://w0.peakpx.com/wallpaper/852/579/HD-wallpaper-living-room-loft-style-stylish-modern-interior-fireplace-in-the-living-room-modern-interior-design.jpg",
  "https://w0.peakpx.com/wallpaper/572/110/HD-wallpaper-living-room-kitchen-dinning-room-room-design-modern-stylish-interior-design-dining-table-modern-interior-design.jpg",
  "https://w0.peakpx.com/wallpaper/412/594/HD-wallpaper-stylish-apartment-interior-design-loft-style-modern-interior-design-living-room-dark-gray-concrete-walls.jpg",
  "https://w0.peakpx.com/wallpaper/81/910/HD-wallpaper-stylish-kitchen-interior-dining-room-gray-interior-modern-interior-design-loft-style-gray-art-concrete.jpg",
  "https://w0.peakpx.com/wallpaper/630/41/HD-wallpaper-living-room-stylish-design-modern-interior-living-room-minimalism.jpg",
  "https://w0.peakpx.com/wallpaper/435/59/HD-wallpaper-stylish-interior-design-loft-style-living-room-white-marble-wall-in-the-living-room-fireplace-living-room-project-modern-interior-design.jpg",
  "https://w0.peakpx.com/wallpaper/20/397/HD-wallpaper-loft-stylish-interior-country-house-dining-room-living-room-modern-interior-design-loft-style-stylish-design.jpg",
  "https://w0.peakpx.com/wallpaper/591/473/HD-wallpaper-stylish-design-interior-loft-style-living-room-dining-room-concrete-walls-in-the-living-room-dark-wood-and-concrete.jpg",
"https://w0.peakpx.com/wallpaper/309/716/HD-wallpaper-stylish-apartments-modern-interior-design-living-room-loft-style-gray-concrete-ceiling-gray-color-in-the-interior.jpg",
];

export default function Gallery() {
  return (
    <section className="bg-white dark:bg-gray-900 py-8 lg:py-16">
      <div className="max-w-screen-xl mx-auto px-4">
        <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white mb-8 text-center">
          LuxuryStay Collection
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {images.map((src, index) => (
            <div key={index} className="overflow-hidden rounded-lg shadow-md">
              <img
                src={src}
                alt={`Hotel room ${index + 1}`}
                className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

