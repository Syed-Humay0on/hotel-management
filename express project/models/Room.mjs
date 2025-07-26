import mongoose from 'mongoose';

const roomSchema = new mongoose.Schema({
  roomNumber: { type: String, required: true, unique: true },
  type: { type: String, enum: ['single', 'double', 'suite'], required: true },
  price: { type: Number, required: true },
  status: {
    type: String,
    enum: ['available', 'occupied', 'cleaning', 'maintenance'],
    default: 'available',
  },
  isBooked: { type: Boolean, default: false },
  currentGuest: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Guest',
    default: null,
  },
}, { timestamps: true });

export default mongoose.model('Room', roomSchema);
