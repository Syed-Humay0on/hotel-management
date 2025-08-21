"use client";

import { Card, Button } from "flowbite-react";

export default function RoomCards() {
  const rooms = [
    {
      name: "Urban Retreat Suite",
      desc: "A charming room with warm tones, perfect for a peaceful stay.",
      img: "https://w0.peakpx.com/wallpaper/72/665/HD-wallpaper-modern-bedroom-interior-design-stylish-interior-bedroom-loft-style-painting-with-a-large-fingerprint-concrete-floor-in-the-bedroom.jpg",
    },
    {
      name: "Grand Elegance Suite",
      desc: "Experience elegance and comfort with our premium suite.",
      img: "https://w0.peakpx.com/wallpaper/623/935/HD-wallpaper-bedroom-project-stylish-interior-design-bedroom-modern-classic-interior-design-silver-butterflies-on-the-wall-classic-interior-style.jpg",
    },
    {
      name: "Presidential Loft",
      desc: "Our top-tier room offering modern amenities and exquisite design.",
      img: "https://w0.peakpx.com/wallpaper/878/912/HD-wallpaper-gray-stylish-bedroom-interior-modern-interior-design-classic-style-bedroom-bedroom-in-gray-bedroom-project.jpg",
    },
  ];

  return (
    <section className="bg-gray-100 dark:bg-gray-900 py-12">
      <div className="max-w-screen-xl mx-auto px-4 grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {rooms.map((room, idx) => (
          <Card key={idx} className="flex flex-col">
            <div className="w-full h-64 overflow-hidden rounded-t-lg">
              <img
                src={room.img}
                alt={room.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-5 flex flex-col flex-1 justify-between">
              <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {room.name}
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400 my-3">
                {room.desc}
              </p>
              <Button
                color="primary"
                className="mt-auto"
                onClick={() => alert(`Redirect to booking form for ${room.name}`)}
              >
                Book Now
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}

