"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import { Table, TableBody, TableCell, TableHead, TableHeadCell, TableRow, Button } from "flowbite-react";

export default function AdminBooking() {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    fetchBookings();
  }, []);

  const fetchBookings = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/bookings", { withCredentials: true });
      setBookings(res.data);
    } catch (err) {
      console.error("Failed to fetch bookings", err);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/bookings/${id}`, { withCredentials: true });
      fetchBookings();
    } catch (err) {
      console.error("Failed to delete booking", err);
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-gray-200 mb-4">Admin Bookings</h1>

      <div className="overflow-x-auto mt-6">
        <Table hoverable>
          <TableHead className="bg-gray-700 text-gray-300">
            <TableRow>
              <TableHeadCell>Name</TableHeadCell>
              <TableHeadCell>Email</TableHeadCell>
              <TableHeadCell>Room</TableHeadCell>
              <TableHeadCell>Check-in</TableHeadCell>
              <TableHeadCell>Check-out</TableHeadCell>
              <TableHeadCell>Actions</TableHeadCell>
            </TableRow>
          </TableHead>
          <TableBody className="divide-y divide-gray-700">
            {bookings.map((b) => (
              <TableRow key={b._id} className="bg-gray-800 border-gray-700 hover:bg-gray-900">
                <TableCell className="text-gray-200">{b.fullName}</TableCell>
                <TableCell className="text-gray-200">{b.email}</TableCell>
                <TableCell className="text-gray-200">{b.roomName} ({b.price})</TableCell>
                <TableCell className="text-gray-200">{new Date(b.checkin).toLocaleDateString()}</TableCell>
                <TableCell className="text-gray-200">{new Date(b.checkout).toLocaleDateString()}</TableCell>
                <TableCell>
                  <Button
                    size="xs"
                    className="bg-gray-800 hover:bg-gray-700 text-white"
                    onClick={() => handleDelete(b._id)}
                  >
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
