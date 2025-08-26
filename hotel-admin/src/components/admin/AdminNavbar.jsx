import React from "react";
import { Button } from "flowbite-react";
import axios from "axios";

export default function AdminNavbar() {
  const handleLogout = async () => {
    await axios.post("http://localhost:5000/api/auth/logout", {}, { withCredentials: true });
    window.location.href = "/admin/login"; // redirect after logout
  };

  return (
    <nav className="border-gray-700 bg-gray-800 p-4 flex justify-between items-center">
      <div className="flex items-center space-x-3">
        <img
          src="https://flowbite.com/docs/images/logo.svg"
          className="h-8"
          alt="Flowbite Logo"
        />
        <span className="text-xl font-semibold text-white">Admin Panel</span>
      </div>
      <Button color="failure" onClick={handleLogout}>
        Logout
      </Button>
    </nav>
  );
}

