import express from 'express';
import {
  createRoom,
  getAllRooms,
  getRoomById,
  updateRoom,
  bookRoom,
  updateRoomStatus,
} from '../controllers/roomController.js';
import { protect, restrictTo } from '../middleware/authMiddleware.js';

const router = express.Router();

// All routes protected (can be adjusted per role)
router.use(protect);

// Create room (admin only)
router.post('/', restrictTo('admin'), createRoom);

// Get all rooms
router.get('/', getAllRooms);

// Get single room
router.get('/:id', getRoomById);

// Update room details (admin/manager)
router.put('/:id', restrictTo('admin', 'manager'), updateRoom);

// Book room (receptionist only)
router.patch('/:id/book', restrictTo('receptionist'), bookRoom);

// Update room status (housekeeping, manager)
router.patch('/:id/status', restrictTo('housekeeping', 'manager'), updateRoomStatus);

export default router;
