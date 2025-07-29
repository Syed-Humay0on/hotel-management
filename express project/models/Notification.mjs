import mongoose from 'mongoose';

const notificationSchema = new mongoose.Schema({
  message: { type: String, required: true },
  type: {
    type: String,
    enum: ['booking', 'maintenance', 'general'],
    default: 'general',
  },
  read: { type: Boolean, default: false },
  createdFor: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
}, { timestamps: true });

const Notification = mongoose.model('Notification', notificationSchema);
export default Notification;
