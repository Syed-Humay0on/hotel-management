import { useEffect, useState } from "react";
import axios from "axios";
import { Table, TableBody, TableCell, TableHead, TableHeadCell, TableRow, Button } from "flowbite-react";

export default function BookingsTable() {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    fetchBookings();
  }, []);

  const fetchBookings = async () => {
    const res = await axios.get("http://localhost:5000/api/bookings");
    setBookings(res.data);
  };

  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:5000/api/bookings/${id}`);
    fetchBookings();
  };

  return (
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
            <TableRow key={b._id} className="bg-gray-800 border-gray-700">
              <TableCell className="text-gray-200">{b.fullName}</TableCell>
              <TableCell className="text-gray-200">{b.email}</TableCell>
              <TableCell className="text-gray-200">{b.roomName} ({b.roomPrice})</TableCell>
              <TableCell className="text-gray-200">{new Date(b.checkin).toLocaleDateString()}</TableCell>
              <TableCell className="text-gray-200">{new Date(b.checkout).toLocaleDateString()}</TableCell>
              <TableCell>
                <Button size="xs" color="failure" onClick={() => handleDelete(b._id)}>
                  Delete
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
