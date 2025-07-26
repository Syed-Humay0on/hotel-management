import { Schema, model } from 'mongoose';

const guestSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String },
  phone: { type: String },
  preferences: { type: String },
  address: { type: String },
  isActive: { type: Boolean, default: true }
}, { timestamps: true });

export default model('Guest', guestSchema);
