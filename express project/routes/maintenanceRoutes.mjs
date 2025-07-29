import express from 'express';
import {
  reportMaintenance,
  getAllMaintenanceRequests,
  updateMaintenanceStatus,
} from '../controllers/maintenanceController.mjs';
import { protect, restrictTo } from '../middleware/authMiddleware.mjs';

const router = express.Router();

// Staff-authenticated maintenance reporting
router.use(protect);

router.post('/', reportMaintenance); // guest/staff (no restrictTo)
router.get('/', restrictTo('admin', 'manager', 'housekeeping'), getAllMaintenanceRequests);
router.patch('/:id/status', restrictTo('manager', 'admin'), updateMaintenanceStatus);

export default router;
