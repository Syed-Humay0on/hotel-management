import React, { useState, useRef } from "react";
import BannerCarousel from "./components/BannerCarousel";
import LandingFormModal from "./components/Form";

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const emailRef = useRef(null);

  return (
    <div className="bg-gray-900 text-white min-h-screen">
      {/* Navbar */}
      <nav className="fixed w-full z-50 bg-gray-900 bg-opacity-50 backdrop-blur-md p-4 flex justify-between items-center">
        <div className="text-xl font-bold">Hotel Admin</div>
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
        {/* Bottom banner */}
        <div
          id="bottom-banner"
          className="fixed bottom-0 start-0 z-50 flex justify-between w-full p-4 border-t border-gray-700 bg-gray-800"
        >
          <div className="flex items-center mx-auto">
            <p className="flex items-center text-sm font-normal text-gray-300">
              <span className="inline-flex p-1 me-3 bg-gray-700 rounded-full w-6 h-6 items-center justify-center">
                🔔
              </span>
              Get 5% commission per sale{" "}
              <a
                href="https://flowbite.com"
                className="flex items-center ms-1 text-sm font-medium text-blue-500 hover:underline"
              >
                Become a partner
              </a>
            </p>
          </div>
          <div className="flex items-center">
            <button className="shrink-0 inline-flex justify-center w-7 h-7 items-center text-gray-400 hover:bg-gray-700 hover:text-white rounded-lg text-sm p-1.5">
              ✕
            </button>
          </div>
        </div>
      </section>

      {/* Modal Form */}
      <LandingFormModal
        open={isModalOpen}
        setOpen={setIsModalOpen}
        emailRef={emailRef}
      />
    </div>
  );
}
