import React, { useState, useRef } from "react";
import BannerCarousel from "./components/BannerCarousel";
import LandingFormModal from "./components/Form";
import ServicesTabs from "./components/ServicesTabs";

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const emailRef = useRef(null);

  return (
    <div className="bg-gray-900 text-white min-h-screen">
      {/* Navbar */}
      <nav className="fixed w-full z-50 bg-gray-900 bg-opacity-50 backdrop-blur-md p-4 flex justify-between items-center">
        <div className="text-xl font-bold">Hotel Management</div>
        <ul className="flex space-x-6">
          <li>
            <button
              onClick={() => setIsModalOpen(true)}
              className="hover:text-gray-300"
            >
              Login
            </button>
          </li>
        </ul>
      </nav>

      {/* Spacer for fixed navbar */}
      <div className="h-16"></div>

      {/* Banner + Carousel Section */}
      <section id="carousel" className="relative">
        <BannerCarousel />
      </section>

      {/* Services Tabs Section */}
      <ServicesTabs />
      {/* Modal Form */}
      <LandingFormModal
        open={isModalOpen}
        setOpen={setIsModalOpen}
        emailRef={emailRef}
      />
    </div>
  );
}
