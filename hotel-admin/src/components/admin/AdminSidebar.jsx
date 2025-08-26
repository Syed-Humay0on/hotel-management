import React, { useState } from "react";

export default function AdminSidebar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Hamburger toggle (mobile) */}
      <button
        className="md:hidden text-white p-2"
        onClick={() => setOpen(!open)}
      >
        ☰
      </button>

      {/* Sidebar */}
      <aside
        className={`fixed md:relative top-0 left-0 h-screen w-64 bg-gray-800 p-4 transform ${
          open ? "translate-x-0" : "-translate-x-full"
        } transition-transform md:translate-x-0`}
      >
        <h5 className="text-gray-400 uppercase font-semibold mb-4">Menu</h5>
        <ul className="space-y-2">
          <li>
            <a href="#" className="block p-2 rounded hover:bg-gray-700">
              Dashboard
            </a>
          </li>
          <li>
            <a href="#" className="block p-2 rounded hover:bg-gray-700">
              Users
            </a>
          </li>
          <li>
            <a href="#" className="block p-2 rounded hover:bg-gray-700">
              Reports
            </a>
          </li>
          <li>
            <a href="#" className="block p-2 rounded hover:bg-gray-700">
              Settings
            </a>
          </li>
        </ul>
      </aside>
    </>
  );
}

