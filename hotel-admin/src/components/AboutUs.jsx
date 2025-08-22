// src/components/AboutUs.jsx
import React from "react";

export default function AboutUs() {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
        <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
            About us
          </h2>
          <p className="mb-4">
            "LuxuryStay Hospitality", a high-end hotel chain known for its exceptional service and
            luxurious accommodations. With a network of hotels in various locations, LuxuryStay
            aims to revolutionize its operational efficiency by implementing a cutting-edge Hotel
            Management System (HMS).

          </p>
          <p>
            LuxuryStay envisions a modern, scalable, and user-friendly Hotel Management
            System to transform its operations. The system will streamline workflows, enhance
            guest experiences, and provide insightful data for strategic decision-making.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4 mt-8">
          <img
            className="w-full rounded-lg"
            src="https://t4.ftcdn.net/jpg/02/15/86/05/240_F_215860524_YAnoSN5CoVftqNjfQfdvxTncgTk8bJaz.jpg"
            alt="team collaboration 1"
          />
          <img
            className="mt-4 w-full lg:mt-10 rounded-lg"
            src="https://t4.ftcdn.net/jpg/02/95/61/31/240_F_295613144_I7GZZ6DO6eWWiWvXYuEgcj65Q5HEXOpf.jpg"
            alt="team collaboration 2"
          />
        </div>
      </div>
    </section>
  );
}

