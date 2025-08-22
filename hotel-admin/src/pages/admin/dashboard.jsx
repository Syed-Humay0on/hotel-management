"use client";

import DashboardLayout from "../../components/DashboardLayout";
import { Card } from "flowbite-react";

export default function Dashboard() {
  return (
    <DashboardLayout>
      <h1 className="text-3xl font-bold text-white mb-6">Welcome, Admin</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <h2 className="text-lg font-semibold mb-2">Total Staff</h2>
          <p className="text-gray-200">15</p>
        </Card>

        <Card>
          <h2 className="text-lg font-semibold mb-2">Total Guests</h2>
          <p className="text-gray-200">120</p>
        </Card>

        <Card>
          <h2 className="text-lg font-semibold mb-2">Available Rooms</h2>
          <p className="text-gray-200">8</p>
        </Card>
      </div>
    </DashboardLayout>
  );
}
