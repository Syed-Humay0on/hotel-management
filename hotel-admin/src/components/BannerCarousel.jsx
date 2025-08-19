import React from "react";
import { Carousel } from "flowbite-react";

export default function BannerCarousel() {
  return (
    <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
      <Carousel>
        <img
          src="https://images.unsplash.com/photo-1578898889913-5f79bff857b3?auto=format&fit=crop&w=1470&q=80"
          alt="Hotel room 1"
          className="object-cover"
        />
        <img
          src="https://images.unsplash.com/photo-1618222314252-25b45000f8d3?auto=format&fit=crop&w=1470&q=80"
          alt="Hotel room 2"
          className="object-cover"
        />
        <img
          src="https://images.unsplash.com/photo-1600180758895-f9b0c3d0c915?auto=format&fit=crop&w=1470&q=80"
          alt="Hotel room 3"
          className="object-cover"
        />
        <img
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1470&q=80"
          alt="Hotel room 4"
          className="object-cover"
        />
      </Carousel>
    </div>
  );
}
