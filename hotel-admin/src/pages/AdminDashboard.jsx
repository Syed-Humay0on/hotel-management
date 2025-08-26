import React from "react";
// import React, { useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";
import AdminNavbar from "../components/admin/AdminNavbar";
import AdminSidebar from "../components/admin/AdminSidebar";
import AdminBooking from "../components/admin/AdminBooking";
import BookingsTable from "../components/admin/AdminBooking";

export default function AdminDashboard() {
  // const navigate = useNavigate();

  // ✅ Comment out auth check
  /*
  useEffect(() => {
    const checkAuth = async () => {
      try {
        await axios.get("http://localhost:5000/api/auth/me", {
          withCredentials: true,
        });
      } catch (err) {
        navigate("/admin/login"); // not logged in
      }
    };
    checkAuth();
  }, [navigate]);
  */

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
