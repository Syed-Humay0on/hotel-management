import express from 'express';
import {
  scheduleCleaning,
  getAllCleaningTasks,
  markCleaningCompleted,
  getRoomStatuses,
} from '../controllers/housekeepingController.js';
import { protect, restrictTo } from '../middleware/authMiddleware.js';

const router = express.Router();

router.use(protect);

// Housekeeping routes
router.get('/rooms', restrictTo('housekeeping', 'manager'), getRoomStatuses);
router.get('/tasks', restrictTo('housekeeping', 'manager'), getAllCleaningTasks);
router.post('/tasks', restrictTo('housekeeping', 'manager'), scheduleCleaning);
router.patch('/tasks/:id/complete', restrictTo('housekeeping'), markCleaningCompleted);

export default router;
