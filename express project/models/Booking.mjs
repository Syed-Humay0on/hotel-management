// models/Booking.js
import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema({
  roomName: String,
  fullName: String,
  email: String,
  checkin: Date,
  checkout: Date,
  notes: String,
  price: String,
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.model("Booking", bookingSchema);

