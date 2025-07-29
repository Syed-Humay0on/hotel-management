import express from 'express';
import {
  getOccupancyReport,
  getRevenueReport,
  getFeedbackSummary,
  getRoomTypeAnalytics,
  getAveragePriceByType,
} from '../controllers/reportController.mjs';
import { protect, restrictTo } from '../middleware/authMiddleware.mjs';

const router = express.Router();

router.use(protect);
router.use(restrictTo('admin', 'manager'));

// Reporting Dashboard
router.get('/occupancy', getOccupancyReport);
router.get('/revenue', getRevenueReport);
router.get('/feedback', getFeedbackSummary);

// Analytics
router.get('/analytics/room-types', getRoomTypeAnalytics);
router.get('/analytics/price', getAveragePriceByType);

export default router;
