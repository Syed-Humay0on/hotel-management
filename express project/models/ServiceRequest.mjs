import mongoose from 'mongoose';

const serviceRequestSchema = new mongoose.Schema({
  guest: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  serviceType: {
    type: String,
    enum: ['room_service', 'wake_up_call', 'transportation', 'other'],
    required: true,
  },
  details: { type: String },
  status: {
    type: String,
    enum: ['pending', 'in_progress', 'completed'],
    default: 'pending',
  },
}, { timestamps: true });

const ServiceRequest = mongoose.model('ServiceRequest', serviceRequestSchema);
export default ServiceRequest;
