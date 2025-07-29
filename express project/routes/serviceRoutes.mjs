import express from 'express';
import {
  createServiceRequest,
  getAllServiceRequests,
  updateServiceRequestStatus,
} from '../controllers/serviceRequestController.mjs';
import { protect, restrictTo } from '../middleware/authMiddleware.mjs';

const router = express.Router();

router.post('/', protect, restrictTo('guest'), createServiceRequest);
router.get('/', protect, restrictTo('admin', 'receptionist'), getAllServiceRequests);
router.put('/:id/status', protect, restrictTo('admin', 'receptionist'), updateServiceRequestStatus);

export default router;
