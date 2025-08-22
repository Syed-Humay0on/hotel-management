import React, { useState } from "react";
import { Tabs, TabItem } from "flowbite-react";
import { HiAdjustments, HiClipboardList, HiUserCircle } from "react-icons/hi";
import { MdDashboard } from "react-icons/md";
import ContactForm from "./ContactForm.jsx";
import BannerCarousel from "./BannerCarousel.jsx";
import HeroSection from "./HeroSection.jsx"; // 👈 import hero
import Cards from "./Cards.jsx";
import Gallery from "./Gallery.jsx";
import AboutUs from "./AboutUs.jsx";
import FeedbackForm from "./FeedbackForm.jsx";
import Testimonials from "./Testimonials.jsx";

export default function ServicesTabs() {
  const [activeTab, setActiveTab] = useState(0);
  const [reviews, setReviews] = useState([]);

  const handleNewReview = (review) => {
    setReviews((prev) => [review, ...prev]);
  };

  return (
    <div className="pt-28 px-4">
      <Tabs
        aria-label="Service tabs"
        variant="underline"
        onActiveTabChange={(index) => setActiveTab(index)}
      >
        <TabItem title="Home" icon={MdDashboard} />
        <TabItem title="Gallery" icon={HiAdjustments} />
        <TabItem title="Contacts" icon={HiClipboardList} />
        <TabItem title="Support" icon={HiUserCircle} />
      </Tabs>

      <div className="mt-4">
        {activeTab === 0 && (
          <>
            <BannerCarousel />
            <HeroSection />
            <AboutUs />
            <Cards />
            <Testimonials reviews={reviews} />
          </>
        )}

        {activeTab === 1 && <Gallery />}
        {activeTab === 2 && <ContactForm />}
        {activeTab === 3 && <FeedbackForm onNewReview={handleNewReview} />}
      </div>
    </div>
  );
}
