import React, { useState } from "react";
import { Tabs, TabItem } from "flowbite-react";
import { HiAdjustments, HiClipboardList, HiUserCircle } from "react-icons/hi";
import { MdDashboard } from "react-icons/md";

export default function ServicesTabs() {
  const [activeTab, setActiveTab] = useState("Profile");

  return (
    <div className="pt-28 px-4"> {/* pt-28 to avoid navbar overlap */}
      <Tabs
        aria-label="Service tabs"
        variant="underline"
        onActiveTabChange={(title) => setActiveTab(title)}
      >
        <TabItem title="Profile" icon={HiUserCircle} />
        <TabItem title="Dashboard" icon={MdDashboard} />
        <TabItem title="Settings" icon={HiAdjustments} />
        <TabItem title="Contacts" icon={HiClipboardList} />
      </Tabs>

      <div className="mt-4">
        {activeTab === "Profile" && <div>Profile content goes here</div>}
        {activeTab === "Dashboard" && <div>Dashboard content goes here</div>}
        {activeTab === "Settings" && <div>Settings content goes here</div>}
        {activeTab === "Contacts" && <div>Contacts content goes here</div>}
      </div>
    </div>
  );
}

