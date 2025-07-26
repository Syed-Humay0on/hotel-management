import mongoose from 'mongoose';

const cleaningTaskSchema = new mongoose.Schema({
  room: { type: mongoose.Schema.Types.ObjectId, ref: 'Room', required: true },
  assignedTo: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }, // housekeeping staff
  scheduledDate: { type: Date, required: true },
  status: { type: String, enum: ['pending', 'in-progress', 'completed'], default: 'pending' },
  notes: String,
}, { timestamps: true });

export default mongoose.model('CleaningTask', cleaningTaskSchema);
