import React, { useState, useRef } from "react";
import Navbar from "../components/Navbar.jsx";
import ServicesTabs from "../components/ServicesTabs";
// import BannerCarousel from "../components/BannerCarousel";
import LandingFormModal from "../components/Form.jsx";
import Footer from "../components/footer.jsx";

export default function Dashboard() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const emailRef = useRef(null);

  return (
    <div className="bg-gray-900 text-white min-h-screen flex flex-col">
      {/* Navbar */}
      <Navbar onLoginClick={() => setIsModalOpen(true)} />

      {/* Spacer for fixed navbar */}
      <div className="h-16"></div>

      {/* Services Tabs */}
      <section className="mt-4 flex-1">
        <ServicesTabs />
      </section>

      {/* Modal Form */}
      <LandingFormModal
        open={isModalOpen}
        setOpen={setIsModalOpen}
        emailRef={emailRef}
      />

      {/* Footer */}
      <Footer />
    </div>
  );
}

