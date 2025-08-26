"use client";

import { useState } from "react";
import axios from "axios";
import { Button, Label, Modal, ModalBody, ModalHeader, TextInput, Textarea } from "flowbite-react";
import { FaUserFriends, FaRulerCombined, FaEye } from "react-icons/fa";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

export default function RoomCardsWithModal() {
  const rooms = [
    {
      name: "Urban Retreat Suite",
      desc: "A charming room with warm tones, perfect for a peaceful stay.",
      img: "https://w0.peakpx.com/wallpaper/72/665/HD-wallpaper-modern-bedroom-interior-design-stylish-interior-bedroom-loft-style-painting-with-a-large-fingerprint-concrete-floor-in-the-bedroom.jpg",
      capacity: "3 adults",
      size: "35sqm",
      view: "City",
      price: "$300/night",
    },
    {
      name: "Grand Elegance Suite",
      desc: "Experience elegance and comfort with our premium suite.",
      img: "https://w0.peakpx.com/wallpaper/623/935/HD-wallpaper-bedroom-project-stylish-interior-design-bedroom-modern-classic-interior-design-silver-butterflies-on-the-wall-classic-interior-style.jpg",
      capacity: "3 adults",
      size: "45sqm",
      view: "Garden",
      price: "$400/night",
    },
    {
      name: "Presidential Loft",
      desc: "Our top-tier room offering modern amenities and exquisite design.",
      img: "https://w0.peakpx.com/wallpaper/878/912/HD-wallpaper-gray-stylish-bedroom-interior-modern-interior-design-classic-style-bedroom-bedroom-in-gray-bedroom-project.jpg",
      capacity: "2 adults",
      size: "60sqm",
      view: "Sea",
      price: "$550/night",
    },
  ];

  const [openModal, setOpenModal] = useState(false);
  const [selectedRoom, setSelectedRoom] = useState(null);

  const handleBookNow = (room) => {
    setSelectedRoom(room);
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
    setSelectedRoom(null);
  };

  // Yup validation schema
  const BookingSchema = Yup.object().shape({
    fullName: Yup.string().required("Full name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    checkin: Yup.date().required("Check-in date is required"),
    checkout: Yup.date().required("Check-out date is required"),
    notes: Yup.string(),
  });

  return (
    <section className="bg-gray-900 py-12">
      {/* Room Cards */}
      <div className="max-w-screen-xl mx-auto px-4 grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {rooms.map((room, idx) => (
          <div key={idx} className="flex flex-col bg-gray-800 border border-gray-700 rounded-lg shadow-lg overflow-hidden">
            <div className="w-full h-64 overflow-hidden">
              <img src={room.img} alt={room.name} className="w-full h-full object-cover" />
            </div>
            <div className="p-5 flex flex-col flex-1 justify-between">
              <h5 className="text-2xl font-bold text-white mb-2">{room.name}</h5>
              <p className="text-gray-400 mb-3">{room.desc}</p>
              <ul className="text-gray-300 mb-3 space-y-1">
                <li className="flex items-center gap-2"><FaUserFriends /> {room.capacity}</li>
                <li className="flex items-center gap-2"><FaRulerCombined /> {room.size}</li>
                <li className="flex items-center gap-2"><FaEye /> {room.view}</li>
              </ul>
              <Button
                onClick={() => handleBookNow(room)}
                className="flex items-center justify-center gap-2"
              >
                {room.price}
                <svg
                  className="-mr-1 ml-2 h-4 w-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </Button>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedRoom && (
        <Modal show={openModal} size="md" onClose={handleCloseModal} popup>
          <ModalHeader />
          <ModalBody>
            <div className="space-y-6">
              <img
                src={selectedRoom.img}
                alt={selectedRoom.name}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-medium text-white">
                Booking: {selectedRoom.name}
              </h3>

              <Formik
                initialValues={{ fullName: "", email: "", checkin: "", checkout: "", notes: "" }}
                validationSchema={BookingSchema}
                onSubmit={async (values, { resetForm }) => {
                  try {
                    const bookingData = {
                      ...values,
                      roomName: selectedRoom.name,
                      roomPrice: selectedRoom.price,
                    };

                    // 👇 send to backend
                    await axios.post("http://localhost:5000/api/bookings", bookingData);

                    alert(`Booking confirmed for ${selectedRoom.name}`);
                    resetForm();
                    handleCloseModal();
                  } catch (err) {
                    console.error("Booking failed:", err);
                    alert("Booking failed, please try again.");
                  }
                }}
              >
                {({ errors, touched }) => (
                  <Form className="flex flex-col gap-4">
                    <div>
                      <Label htmlFor="fullName">Full Name</Label>
                      <Field
                        as={TextInput}
                        id="fullName"
                        name="fullName"
                        placeholder="John Doe"
                        color={errors.fullName && touched.fullName ? "failure" : undefined}
                      />
                      <ErrorMessage name="fullName" component="div" className="text-red-500 text-sm mt-1" />
                    </div>

                    <div>
                      <Label htmlFor="email">Email</Label>
                      <Field
                        as={TextInput}
                        id="email"
                        name="email"
                        type="email"
                        placeholder="john@example.com"
                        color={errors.email && touched.email ? "failure" : undefined}
                      />
                      <ErrorMessage name="email" component="div" className="text-red-500 text-sm mt-1" />
                    </div>

                    <div>
                      <Label htmlFor="checkin">Check-in Date</Label>
                      <Field as={TextInput} id="checkin" name="checkin" type="date" />
                      <ErrorMessage name="checkin" component="div" className="text-red-500 text-sm mt-1" />
                    </div>

                    <div>
                      <Label htmlFor="checkout">Check-out Date</Label>
                      <Field as={TextInput} id="checkout" name="checkout" type="date" />
                      <ErrorMessage name="checkout" component="div" className="text-red-500 text-sm mt-1" />
                    </div>

                    <div>
                      <Label htmlFor="notes">Additional Notes</Label>
                      <Field as={Textarea} id="notes" name="notes" placeholder="Any special requests?" rows={3} />
                    </div>

                    <Button type="submit">Confirm Booking</Button>
                  </Form>
                )}
              </Formik>
            </div>
          </ModalBody>
        </Modal>
      )}
    </section>
  );
}
