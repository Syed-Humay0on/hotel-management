"use client";

import React from "react";
import SidebarMenu from "./SidebarMenu";
import { Navbar, Dropdown } from "flowbite-react";

export default function DashboardLayout({ children }) {
  return (
    <div className="flex min-h-screen bg-gray-900 text-gray-200">
      {/* Sidebar */}
      <SidebarMenu />

      {/* Main content */}
      <div className="flex-1 flex flex-col">
        {/* Top Navbar */}
        <Navbar className="bg-gray-800 text-white">
          <Navbar.Brand href="#">Admin Panel</Navbar.Brand>
          <div className="flex items-center gap-4 ml-auto">
            <Dropdown label="Admin">
              <Dropdown.Item>Profile</Dropdown.Item>
              <Dropdown.Item>Logout</Dropdown.Item>
            </Dropdown>
          </div>
        </Navbar>

        {/* Page Content */}
        <main className="p-6 flex-1">{children}</main>
      </div>
    </div>
  );
}
