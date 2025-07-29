import Notification from '../models/Notification.mjs';

export const createNotification = async (req, res) => {
  const { message, type, createdFor } = req.body;

  const notification = await Notification.create({ message, type, createdFor });
  res.status(201).json({ message: 'Notification sent', notification });
};

export const getUserNotifications = async (req, res) => {
  const notifications = await Notification.find({ createdFor: req.user._id }).sort({ createdAt: -1 });
  res.json(notifications);
};

export const markAsRead = async (req, res) => {
  const { id } = req.params;

  const notification = await Notification.findById(id);
  if (!notification) return res.status(404).json({ message: 'Notification not found' });

  notification.read = true;
  await notification.save();

  res.json({ message: 'Marked as read', notification });
};
