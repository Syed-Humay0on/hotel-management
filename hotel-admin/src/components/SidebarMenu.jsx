"use client";

import React from "react";
import { Sidebar } from "flowbite-react";
import { HiHome, HiUser, HiCog } from "react-icons/hi";
import { usePathname, useRouter } from "next/navigation";

export default function SidebarMenu() {
  const router = useRouter();
  const path = usePathname();

  return (
    <Sidebar aria-label="Admin sidebar" className="bg-gray-800 text-gray-200 w-64">
      <Sidebar.Items>
        <Sidebar.Item
          icon={HiHome}
          active={path === "/admin/dashboard"}
          onClick={() => router.push("/admin/dashboard")}
        >
          Dashboard
        </Sidebar.Item>
        <Sidebar.Item
          icon={HiUser}
          active={path === "/admin/staff"}
          onClick={() => router.push("/admin/staff")}
        >
          Staff
        </Sidebar.Item>
        <Sidebar.Item
          icon={HiCog}
          active={path === "/admin/settings"}
          onClick={() => router.push("/admin/settings")}
        >
          Settings
        </Sidebar.Item>
      </Sidebar.Items>
    </Sidebar>
  );
}

