import express from 'express';
import {
  createNotification,
  getUserNotifications,
  markAsRead
} from '../controllers/notificationController.mjs';
import { protect } from '../middleware/authMiddleware.mjs';

const router = express.Router();

router.post('/', protect, createNotification); // Admin/staff can send
router.get('/', protect, getUserNotifications); // Current user's notifications
router.patch('/:id/read', protect, markAsRead); // Mark one as read

export default router;
