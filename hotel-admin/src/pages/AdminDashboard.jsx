import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import AdminNavbar from "../components/admin/AdminNavbar";
import AdminSidebar from "../components/admin/AdminSidebar";
import BookingsTable from "../components/admin/AdminBooking";

export default function AdminDashboard() {
  const navigate = useNavigate();

  useEffect(() => {
    // Check if admin is logged in using localStorage or backend
    const isLoggedIn = localStorage.getItem("adminLoggedIn");
    if (!isLoggedIn) {
      navigate("/admin/login");
    }
  }, [navigate]);

  return (
    <div className="bg-gray-900 min-h-screen text-white flex flex-col">
      <AdminNavbar />
      <div className="flex flex-1">
        <AdminSidebar />
        <main className="flex-1 p-6">
          <h1 className="text-3xl font-bold mb-4">Welcome to Admin Dashboard</h1>
          <p className="text-gray-300">Here you’ll see admin widgets, stats, and controls.</p>
          <BookingsTable />
        </main>
      </div>
    </div>
  );
}
