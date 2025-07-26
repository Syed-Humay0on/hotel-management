import mongoose from 'mongoose';

const maintenanceSchema = new mongoose.Schema({
  room: { type: mongoose.Schema.Types.ObjectId, ref: 'Room', required: true },
  reportedBy: { type: mongoose.Schema.Types.ObjectId, refPath: 'reportedByModel' },
  reportedByModel: { type: String, enum: ['Guest', 'User'], required: true },
  description: { type: String, required: true },
  status: { type: String, enum: ['pending', 'in-progress', 'resolved'], default: 'pending' },
  resolvedAt: Date,
}, { timestamps: true });

export default mongoose.model('MaintenanceRequest', maintenanceSchema);
