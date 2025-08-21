import React, { useState } from "react";
import { Tabs, TabItem } from "flowbite-react";
import { HiAdjustments, HiClipboardList, HiUserCircle } from "react-icons/hi";
import { MdDashboard } from "react-icons/md";
import ContactForm from "./ContactForm.jsx";
import BannerCarousel from "./BannerCarousel.jsx";
import HeroSection from "./HeroSection.jsx"; // 👈 import hero
import Cards from "./Cards.jsx";

export default function ServicesTabs() {
  const [activeTab, setActiveTab] = useState(0); // default to first tab

  return (
    <div className="pt-28 px-4">
      <Tabs
        aria-label="Service tabs"
        variant="underline"
        onActiveTabChange={(index) => setActiveTab(index)} // index, not title
      >
        <TabItem title="Profile" icon={HiUserCircle} />
        <TabItem title="Dashboard" icon={MdDashboard} />
        <TabItem title="Settings" icon={HiAdjustments} />
        <TabItem title="Contacts" icon={HiClipboardList} />
      </Tabs>

      <div className="mt-4">
        {activeTab === 0 && <div>Profile content goes here</div>}

        {activeTab === 1 && (
          <>
            <BannerCarousel /> {/* Carousel */}
            <HeroSection />   {/* Hero Section below */}
            <Cards />
          </>
        )}

        {activeTab === 2 && <div>Settings content goes here</div>}
        {activeTab === 3 && <ContactForm />} {/* Contact Form */}
      </div>
    </div>
  );
}

